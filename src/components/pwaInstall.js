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

export function initPwaInstall() {
  if (typeof window === 'undefined') return;

  // If already running as an installed PWA, hide install buttons
  if (isAppInstalled()) {
    document.querySelectorAll('.btn-pwa-install').forEach(btn => {
      btn.style.display = 'none';
    });
    return;
  }

  // Capture Chrome PWA Install Prompt event
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent default mini-infobar so our custom install UI is highlighted
    e.preventDefault();
    deferredPrompt = e;
    window.deferredPrompt = e;

    const installButtons = document.querySelectorAll('.btn-pwa-install');
    installButtons.forEach(btn => {
      btn.style.display = 'inline-flex';
      btn.classList.add('ready-to-install');
    });
  });

  // Track successful installation
  window.addEventListener('appinstalled', () => {
    showToast('🎉 MD Fresh App installed successfully to your device!', 'success');
    deferredPrompt = null;
    window.deferredPrompt = null;
    const installButtons = document.querySelectorAll('.btn-pwa-install');
    installButtons.forEach(btn => {
      btn.style.display = 'none';
    });
  });
}

/**
 * Triggers native Chrome install dialog or shows mobile instruction
 */
export async function triggerPwaInstall() {
  if (isAppInstalled()) {
    showToast('MD Fresh is already installed and running on your device!', 'info');
    return;
  }

  const promptEvent = deferredPrompt || (typeof window !== 'undefined' ? window.deferredPrompt : null);
  if (!promptEvent) {
    // Fallback guidance if browser doesn't support programmatic prompt or user hasn't triggered prompt yet
    const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent || '');
    if (isIOS) {
      showToast('To install on iPhone/iPad: tap Share (⎋) in Safari and select "Add to Home Screen"', 'info');
    } else {
      showToast('To install in Chrome: tap menu (⋮) at top right and choose "Install app" or "Add to Home screen"', 'info');
    }
    return;
  }

  // Trigger Chrome native install prompt dialog
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
}
