// Mobile Bottom Navigation Component
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderMobileBottomNav() {
  const activeView = store.activeView;

  return `
    <nav class="mobile-bottom-nav">
      <button class="mobile-nav-btn ${activeView === 'dashboard' ? 'active' : ''}" data-mobile-nav="dashboard">
        ${icon('dashboard', 'icon-sm')}
        <span>Dashboard</span>
      </button>

      <button class="mobile-nav-btn ${activeView === 'stock-check' ? 'active' : ''}" data-mobile-nav="stock-check" style="color: ${activeView === 'stock-check' ? 'var(--md-primary)' : 'inherit'};">
        <span style="background: var(--md-primary-light); padding: 4px; border-radius: 6px; display: inline-flex;">
          ${icon('stockCheck', 'icon-sm')}
        </span>
        <span style="font-weight: 800;">Stock Check</span>
      </button>

      <button class="mobile-nav-btn ${activeView === 'inventory' ? 'active' : ''}" data-mobile-nav="inventory">
        ${icon('inventory', 'icon-sm')}
        <span>Inventory</span>
      </button>

      <button class="mobile-nav-btn ${activeView === 'procurement' ? 'active' : ''}" data-mobile-nav="procurement">
        ${icon('procurement', 'icon-sm')}
        <span>Mandi PO</span>
      </button>

      <button class="mobile-nav-btn" id="mobileBottomMenuBtn">
        ${icon('menu', 'icon-sm')}
        <span>Menu</span>
      </button>
    </nav>
  `;
}

export function setupMobileBottomNavEvents() {
  document.querySelectorAll('[data-mobile-nav]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const v = e.currentTarget.getAttribute('data-mobile-nav');
      store.setView(v);
    });
  });

  const menuBtn = document.getElementById('mobileBottomMenuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      store.toggleMobileNav(true);
    });
  }
}
