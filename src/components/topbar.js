// Minimal Topbar Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';
import { triggerPwaInstall } from './pwaInstall.js';
import { generateMasterManifestPDF, downloadBlob } from '../utils/pdfGenerator.js';
import { shareOrderOnWhatsApp } from '../utils/whatsappShare.js';
import { showToast } from '../utils/toast.js';

export function renderTopbar() {
  const isAuth = store.isAuthorized;
  const currentBranch = store.branches.find(b => b.id === store.currentBranchId) || store.branches[0];
  const allSubmitted = store.areAllBranchesSubmitted ? store.areAllBranchesSubmitted() : false;

  return `
    <header class="topbar">
      <!-- Left side: Mobile menu & Store Branch Selector -->
      <div class="topbar-left">
        <button class="mobile-menu-trigger" id="mobileMenuBtn" aria-label="Toggle mobile menu">
          ${icon('menu', 'icon')}
        </button>

        <div class="topbar-branch-picker" title="Switch Store Branch">
          <span class="topbar-branch-icon">🏪</span>
          <div class="topbar-branch-select-box">
            <span class="topbar-branch-caption">Store:</span>
            <select id="globalBranchSelector" class="branch-select topbar-branch-select" aria-label="Select Store Branch">
              ${store.branches.map(b => `
                <option value="${b.id}" ${b.id === store.currentBranchId ? 'selected' : ''}>
                  ${b.name} (${b.code})
                </option>
              `).join('')}
            </select>
          </div>
          <span class="pill pill-unit topbar-branch-badge">${currentBranch.code}</span>
        </div>
      </div>

      <!-- Right side: Install, Date, Auth Mode, Logout -->
      <div class="topbar-right">
        ${allSubmitted ? `
          <!-- Instant Topbar Actions when All 4 Branches are Finalized -->
          <div class="topbar-final-actions" style="display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;">
            <button type="button" id="btnTopbarDownloadPdf" class="btn btn-sm topbar-pdf-btn" style="background: #0D8244; color: white; font-weight: 800; border: none; border-radius: var(--radius-pill); padding: 5px 11px; display: inline-flex; align-items: center; gap: 4px; font-size: 0.76rem; cursor: pointer; box-shadow: 0 2px 6px rgba(13, 130, 68, 0.25); white-space: nowrap;" title="Download Finalized 4-Branch Master Manifest PDF">
              📥 Master PDF
            </button>
            <button type="button" id="btnTopbarShareWhatsApp" class="btn btn-sm topbar-wa-btn" style="background: #25D366; color: white; font-weight: 800; border: none; border-radius: var(--radius-pill); padding: 5px 11px; display: inline-flex; align-items: center; gap: 4px; font-size: 0.76rem; cursor: pointer; box-shadow: 0 2px 6px rgba(37, 211, 102, 0.25); white-space: nowrap;" title="Share Finalized Order on WhatsApp">
              📱 WhatsApp
            </button>
          </div>
        ` : ''}

        <!-- Install App Button (Desktop & Mobile Chrome) -->
        <button type="button" id="btnPwaInstallApp" class="btn-pwa-install topbar-install-btn" title="Install MD Fresh on Phone or Desktop" aria-label="Install App">
          <span class="install-pwa-icon">📲</span>
          <span class="install-pwa-text">Install App</span>
        </button>

        <!-- Live Real-Time Date & Clock -->
        <div class="date-indicator topbar-date-indicator">
          <span class="live-pulse-dot" title="Live clock active"></span>
          <span class="live-clock-display">${store.getLiveDateTimeString(new Date(), true)}</span>
        </div>

        <!-- Role & Authorization Pill (Manager & Owner Access) -->
        <div class="topbar-auth-pill-wrapper">
          ${isAuth ? `
            <div class="topbar-auth-badge auth-manager">
              <span>🛡️ Manager</span>
              <button id="topbarLockAuthBtn" class="topbar-auth-lock-link" title="Lock to Staff Mode">
                Lock
              </button>
            </div>
          ` : `
            <button id="topbarUnlockAuthBtn" class="topbar-auth-unlock-btn" title="Unlock Manager & Owner features">
              <span>🔒 Staff</span>
              <span class="auth-unlock-action">Unlock</span>
            </button>
          `}

          <button id="topbarLogoutBtn" class="topbar-logout-btn" title="Sign out / Switch user">
            ↪
          </button>
        </div>
      </div>
    </header>
  `;
}

export function setupTopbarEvents() {
  const topbarPdf = document.getElementById('btnTopbarDownloadPdf');
  if (topbarPdf) {
    topbarPdf.addEventListener('click', () => {
      const liveDate = store.getLiveDateString();
      const liveTimestamp = store.getLiveDateTimeString(new Date(), true);
      const data = {
        date: liveTimestamp,
        branches: store.branches,
        consolidatedItems: store.getConsolidatedProcurement(),
        branchRequirements: store.getAllBranchesRequirements()
      };
      const blob = generateMasterManifestPDF(data);
      const filenameDate = liveDate.replace(/ /g, '_');
      downloadBlob(blob, `MD_Fresh_Master_Manifest_${filenameDate}.pdf`);
      showToast('APMC Master Manifest PDF downloaded successfully!', 'success');
    });
  }

  const topbarWa = document.getElementById('btnTopbarShareWhatsApp');
  if (topbarWa) {
    topbarWa.addEventListener('click', () => {
      shareOrderOnWhatsApp();
    });
  }

  const installBtn = document.getElementById('btnPwaInstallApp');
  if (installBtn) {
    installBtn.addEventListener('click', () => {
      triggerPwaInstall();
    });
  }

  const branchSelect = document.getElementById('globalBranchSelector');
  if (branchSelect) {
    branchSelect.addEventListener('change', (e) => {
      store.setBranch(e.target.value);
    });
  }

  const unlockBtn = document.getElementById('topbarUnlockAuthBtn');
  if (unlockBtn) {
    unlockBtn.addEventListener('click', () => {
      store.openAuthModal();
    });
  }

  const lockBtn = document.getElementById('topbarLockAuthBtn');
  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      store.lockAuthorization();
    });
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      if (window.innerWidth <= 860) {
        store.toggleMobileNav();
      } else {
        store.toggleSidebar();
      }
    });
  }

  const logoutBtn = document.getElementById('topbarLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to sign out from this device?')) {
        store.logout();
      }
    });
  }
}
