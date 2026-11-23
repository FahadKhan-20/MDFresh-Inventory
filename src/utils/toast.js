// Toast notification utility for MD Fresh
export function showToast(message, type = 'success', duration = 4000) {
  if (typeof document === 'undefined') return;

  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.style.cssText = 'box-shadow: 0 10px 25px rgba(0,0,0,0.25); border-radius: 8px; z-index: 99999;';

  const iconEmoji = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';

  toast.innerHTML = `
    <span style="font-size: 1.2rem; flex-shrink: 0;">${iconEmoji}</span>
    <span style="font-weight: 700; line-height: 1.4;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 350);
  }, duration);
}
