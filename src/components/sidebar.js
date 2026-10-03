// Minimal Clean Sidebar Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderSidebar() {
  const activeView = store.activeView;
  const isCollapsed = store.sidebarCollapsed;
  const isMobileOpen = store.mobileNavOpen;
  const isAuth = store.isAuthorized;

  // Navigation items: Only first two (Daily Stock Check, All Branches Matrix) are unlocked for Staff.
  // All other features require Manager & Owner PIN authorization.
  const navItems = [
    { id: 'stock-check', label: 'Daily Stock Check', iconName: 'stockCheck', highlight: true, locked: false },
    { id: 'requirements', label: 'All Branches Matrix', iconName: 'layers', locked: false },
    { id: 'procurement', label: 'Procurement (Mandi)', iconName: 'procurement', locked: !isAuth },
    { id: 'purchase-orders', label: 'Purchase Orders', iconName: 'purchaseOrders', locked: !isAuth },
    { id: 'receiving', label: 'Receiving', iconName: 'receiving', locked: !isAuth },
    { id: 'inventory', label: 'Inventory Catalog', iconName: 'inventory', locked: !isAuth },
    { id: 'branches', label: 'Branches (4)', iconName: 'branches', locked: !isAuth },
    { id: 'reports', label: 'Reports & Analytics', iconName: 'reports', locked: !isAuth }
  ];

  return `
    ${isMobileOpen ? '<div class="sidebar-backdrop" id="sidebarBackdrop"></div>' : ''}
    <aside class="sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}" id="appSidebar">
      <!-- Minimalist Brand Header with ESTD 2019 -->
      <div class="sidebar-header">
        <div class="brand-wrapper" id="brandLogoHome">
          <img src="/logo.png?v=3" alt="MD Fresh" class="brand-logo-img" />
          <div class="brand-text">
            <span class="brand-title">MD FRESH</span>
            <span class="brand-subtitle">Inventory OS</span>
          </div>
        </div>

        <button class="sidebar-toggle-btn" id="sidebarCollapseBtn" title="${isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}">
          ${isCollapsed ? icon('chevronRight', 'icon-sm') : icon('menu', 'icon-sm')}
        </button>
      </div>

      <!-- Clean Minimal Navigation -->
      <nav class="sidebar-nav">
        <div class="nav-section-title">
          Store Operations
        </div>

        ${navItems.slice(0, 5).map(item => `
          <a class="nav-item ${activeView === item.id ? 'active' : ''} ${item.locked ? 'nav-item-locked' : ''}" data-nav="${item.id}" title="${item.label}${item.locked ? ' (Manager / Owner Only 🔒)' : ''}">
            ${icon(item.iconName, 'icon')}
            <span class="nav-item-label">${item.label}</span>
            ${item.locked ? `<span class="nav-badge nav-badge-locked">🔒</span>` : ''}
            ${!item.locked && item.count ? `<span class="nav-badge">${item.count}</span>` : ''}
          </a>
        `).join('')}

        <div class="nav-section-title">
          Inventory & Control
        </div>

        ${navItems.slice(5).map(item => `
          <a class="nav-item ${activeView === item.id ? 'active' : ''} ${item.locked ? 'nav-item-locked' : ''}" data-nav="${item.id}" title="${item.label}${item.locked ? ' (Manager / Owner Only 🔒)' : ''}">
            ${icon(item.iconName, 'icon')}
            <span class="nav-item-label">${item.label}</span>
            ${item.locked ? `<span class="nav-badge nav-badge-locked">🔒</span>` : ''}
          </a>
        `).join('')}
      </nav>

      <!-- User Profile & Auth Status -->
      <div class="sidebar-footer">
        <div class="sidebar-footer-inner">
          <div class="user-profile-widget" id="userProfileWidget" title="${store.currentUser.name} (${store.currentUser.role})">
            <div class="user-avatar">
              ${store.currentUser.avatar}
            </div>
            <div class="user-meta">
              <span class="user-name">${store.currentUser.name}</span>
              <span class="user-role ${isAuth ? 'role-auth' : ''}">
                ${store.currentUser.role}
              </span>
            </div>
          </div>

          <button id="sidebarAuthToggleBtn" class="sidebar-auth-btn ${isAuth ? 'auth-active' : ''}" title="${isAuth ? 'Lock Manager Access' : 'Unlock Manager Access'}">
            ${isAuth ? 'Lock 🛡️' : 'Auth 🔒'}
          </button>

          <button id="sidebarLogoutBtn" class="sidebar-auth-btn sidebar-logout-btn" title="Sign out of this device">
            ↪
          </button>
        </div>
      </div>
    </aside>
  `;
}

export function setupSidebarEvents() {
  const toggleBtn = document.getElementById('sidebarCollapseBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      store.toggleSidebar();
    });
  }

  const brandHome = document.getElementById('brandLogoHome');
  if (brandHome) {
    brandHome.addEventListener('click', () => {
      store.setView('stock-check');
    });
  }

  const authBtn = document.getElementById('sidebarAuthToggleBtn');
  if (authBtn) {
    authBtn.addEventListener('click', () => {
      if (store.isAuthorized) {
        store.lockAuthorization();
      } else {
        store.openAuthModal();
      }
    });
  }

  const logoutBtn = document.getElementById('sidebarLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to sign out from this device?')) {
        store.logout();
      }
    });
  }

  const backdrop = document.getElementById('sidebarBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      store.toggleMobileNav(false);
    });
  }

  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.getAttribute('data-nav');
      if (store.mobileNavOpen) {
        store.toggleMobileNav(false);
      }
      store.setView(targetView);
    });
  });
}
