// Minimal Topbar Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderTopbar() {
  const isAuth = store.isAuthorized;
  const currentBranch = store.branches.find(b => b.id === store.currentBranchId) || store.branches[0];

  return `
    <header class="topbar">
      <!-- Left side: Mobile menu & Store info -->
      <div class="topbar-left">
        <button class="mobile-menu-trigger" id="mobileMenuBtn" aria-label="Toggle mobile menu">
          ${icon('menu', 'icon')}
        </button>

        <div class="topbar-brand-indicator">
          <span class="topbar-branch-title">
            ${currentBranch.name}
          </span>
          <span class="pill pill-unit topbar-branch-badge">
            ${currentBranch.code}
          </span>
        </div>
      </div>

      <!-- Right side: Branch switcher, Date, Auth Mode -->
      <div class="topbar-right">
        <!-- Clean Branch Dropdown (The 4 Branches) -->
        <div class="control-chip topbar-branch-chip">
          <span class="topbar-chip-label">Branch:</span>
          <select id="globalBranchSelector" class="branch-select">
            ${store.branches.map(b => `
              <option value="${b.id}" ${b.id === store.currentBranchId ? 'selected' : ''}>
                ${b.name}
              </option>
            `).join('')}
          </select>
        </div>

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
