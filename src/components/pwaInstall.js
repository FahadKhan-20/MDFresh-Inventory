// Progressive Web App (PWA) Install Manager for Chrome Desktop & Mobile
import { showToast } from '../utils/toast.js';

let deferredPrompt = null;

export function isAppInstalled() {
  if (typeof window === 'undefined') return false;
  return (
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
    (window.navigator && window.navigator.standalone === true) ||
    document.referrer.includes('android-app://')
  );
}

export function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || '') ||
    (typeof window !== 'undefined' && window.innerWidth <= 860);
}

export function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent || '') && !(typeof window !== 'undefined' && window.MSStream);
}

export function initPwaInstall() {
  if (typeof window === 'undefined') return;

  // If already running as an installed PWA, hide install buttons
  if (isAppInstalled()) {
    document.querySelectorAll('.btn-pwa-install, #pwaMobileInstallBanner').forEach(btn => {
      btn.style.display = 'none';
    });
    return;
  }

  // Pickup any early prompt captured by index.html <head>
  if (window.deferredPrompt) {
    deferredPrompt = window.deferredPrompt;
    markInstallButtonsReady();
  }

  // Listen for early custom event or future beforeinstallprompt
  window.addEventListener('md-fresh-pwa-ready', () => {
    if (window.deferredPrompt) {
      deferredPrompt = window.deferredPrompt;
      markInstallButtonsReady();
    }
  });

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    window.deferredPrompt = e;
    markInstallButtonsReady();
  });

  // Track successful installation
  window.addEventListener('appinstalled', () => {
    showToast('🎉 MD Fresh App installed successfully on your device!', 'success');
    deferredPrompt = null;
    window.deferredPrompt = null;
    document.querySelectorAll('.btn-pwa-install, #pwaMobileInstallBanner').forEach(el => {
      el.style.display = 'none';
    });
  });

  // Render floating mobile banner on mobile screens
  renderMobileInstallBanner();
}

function markInstallButtonsReady() {
  const installButtons = document.querySelectorAll('.btn-pwa-install');
  installButtons.forEach(btn => {
    btn.style.display = 'inline-flex';
    btn.classList.add('ready-to-install');
  });
  const banner = document.getElementById('pwaMobileInstallBanner');
  if (banner && !isAppInstalled()) {
    banner.classList.add('pwa-ready');
  }
}

/**
 * Triggers native Chrome install dialog or displays guided mobile modal
 */
export async function triggerPwaInstall() {
  if (isAppInstalled()) {
    showToast('MD Fresh is already installed and running on your device!', 'info');
    return;
  }

  const promptEvent = deferredPrompt || (typeof window !== 'undefined' ? window.deferredPrompt : null);
  if (promptEvent) {
    // Trigger Chrome native WebAPK install prompt
    promptEvent.prompt();
    try {
      const choiceResult = await promptEvent.userChoice;
      if (choiceResult && choiceResult.outcome === 'accepted') {
        showToast('Installing MD Fresh on your device...', 'success');
      }
    } catch (err) {
      console.warn('[MD Fresh PWA] Install choice error:', err);
    }
    deferredPrompt = null;
    if (typeof window !== 'undefined') {
      window.deferredPrompt = null;
    }
    return;
  }

  // If programmatic prompt is not available, show visual modal instructions
  openInstallGuideModal();
}

/**
 * Renders guided step-by-step modal for Mobile installation
 */
export function openInstallGuideModal() {
  if (typeof document === 'undefined') return;

  // Remove existing modal if any
  const existing = document.getElementById('pwaInstallGuideModal');
  if (existing) existing.remove();

  const ios = isIOS();
  const modal = document.createElement('div');
  modal.id = 'pwaInstallGuideModal';
  modal.className = 'modal-backdrop active pwa-guide-backdrop';

  modal.innerHTML = `
    <div class="modal-card pwa-guide-card" role="dialog" aria-modal="true">
      <div class="pwa-guide-header">
        <div class="pwa-guide-logo-wrap">
          <img src="/icons/icon-192.png" alt="MD Fresh Logo" class="pwa-guide-logo" />
        </div>
        <div>
          <h3 class="pwa-guide-title">Install MD Fresh App</h3>
          <p class="pwa-guide-subtitle">Direct access from your home screen</p>
        </div>
        <button type="button" class="modal-close" id="pwaCloseGuideBtn" aria-label="Close modal">&times;</button>
      </div>

      <div class="pwa-guide-body">
        ${ios ? `
          <div class="pwa-step-list">
            <div class="pwa-step-item">
              <span class="pwa-step-badge">1</span>
              <div class="pwa-step-info">
                <strong>Tap the Share button</strong>
                <p>Tap the <strong>Share</strong> icon (⎋ or [↑]) in Safari's bottom toolbar.</p>
              </div>
            </div>
            <div class="pwa-step-item">
              <span class="pwa-step-badge">2</span>
              <div class="pwa-step-info">
                <strong>Select "Add to Home Screen"</strong>
                <p>Scroll down and tap <strong>Add to Home Screen</strong> (⊕).</p>
              </div>
            </div>
            <div class="pwa-step-item">
              <span class="pwa-step-badge">3</span>
              <div class="pwa-step-info">
                <strong>Confirm "Add"</strong>
                <p>Tap <strong>Add</strong> in the top right corner. The app will appear on your home screen!</p>
              </div>
            </div>
          </div>
        ` : `
          <div class="pwa-step-list">
            <div class="pwa-step-item">
              <span class="pwa-step-badge">1</span>
              <div class="pwa-step-info">
                <strong>Open Chrome Menu</strong>
                <p>Tap the <strong>three dots (⋮)</strong> in Chrome's top right corner.</p>
              </div>
            </div>
            <div class="pwa-step-item">
              <span class="pwa-step-badge">2</span>
              <div class="pwa-step-info">
                <strong>Tap "Install app"</strong>
                <p>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong> from the menu.</p>
              </div>
            </div>
            <div class="pwa-step-item">
              <span class="pwa-step-badge">3</span>
              <div class="pwa-step-info">
                <strong>Confirm Install</strong>
                <p>Tap <strong>"Install"</strong> in the popup. MD Fresh will install to your apps drawer!</p>
              </div>
            </div>
          </div>
        `}
      </div>

      <div class="pwa-guide-footer">
        <button type="button" class="btn btn-primary pwa-guide-ack-btn" id="pwaGuideAckBtn">
          Got It, Let's Install!
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = document.getElementById('pwaCloseGuideBtn');
  const ackBtn = document.getElementById('pwaGuideAckBtn');
  const closeFn = () => modal.remove();

  if (closeBtn) closeBtn.addEventListener('click', closeFn);
  if (ackBtn) ackBtn.addEventListener('click', closeFn);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeFn();
  });
}

/**
 * Creates floating mobile banner for quick installation
 */
function renderMobileInstallBanner() {
  if (typeof document === 'undefined') return;
  if (isAppInstalled()) return;

  // Don't show banner if dismissed in the last 24 hours
  try {
    const dismissedAt = localStorage.getItem('md_fresh_pwa_dismissed');
    if (dismissedAt && (Date.now() - parseInt(dismissedAt, 10) < 86400000)) {
      return;
    }
  } catch (e) {
    // Ignore localStorage errors
  }

  if (document.getElementById('pwaMobileInstallBanner')) return;

  const banner = document.createElement('aside');
  banner.id = 'pwaMobileInstallBanner';
  banner.className = 'pwa-mobile-banner';
  banner.setAttribute('aria-label', 'Install MD Fresh application');

  banner.innerHTML = `
    <div class="pwa-banner-content">
      <img src="/icons/icon-192.png" alt="MD Fresh Logo" class="pwa-banner-logo" />
      <div class="pwa-banner-text">
        <span class="pwa-banner-title">Install MD Fresh App</span>
        <span class="pwa-banner-subtitle">Fast stock check on your phone</span>
      </div>
    </div>
    <div class="pwa-banner-actions">
      <button type="button" class="pwa-banner-install-btn" id="pwaBannerInstallBtn">
        📲 Install
      </button>
      <button type="button" class="pwa-banner-close-btn" id="pwaBannerCloseBtn" aria-label="Dismiss banner">&times;</button>
    </div>
  `;

  document.body.appendChild(banner);

  const installBtn = document.getElementById('pwaBannerInstallBtn');
  if (installBtn) {
    installBtn.addEventListener('click', () => {
      triggerPwaInstall();
    });
  }

  const closeBtn = document.getElementById('pwaBannerCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      banner.remove();
      try {
        localStorage.setItem('md_fresh_pwa_dismissed', Date.now().toString());
      } catch (e) {}
    });
  }
}
