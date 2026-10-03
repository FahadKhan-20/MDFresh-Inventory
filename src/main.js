// Main Application Controller for MD Fresh Inventory Management
import { store } from './utils/store.js';
import { renderSidebar, setupSidebarEvents } from './components/sidebar.js';
import { renderTopbar, setupTopbarEvents } from './components/topbar.js';
import { renderNotificationsDrawer, setupNotificationsDrawerEvents } from './components/notificationsDrawer.js';
import { renderMobileBottomNav, setupMobileBottomNavEvents } from './components/mobileBottomNav.js';
import { renderAuthModal, setupAuthModalEvents } from './components/authModal.js';

// Views
import { renderDashboardView, setupDashboardEvents } from './views/dashboardView.js';
import { renderBranchesView, setupBranchesEvents } from './views/branchesView.js';
import { renderInventoryView, setupInventoryEvents } from './views/inventoryView.js';
import { renderDailyStockCheckView, setupDailyStockCheckEvents } from './views/dailyStockCheckView.js';
import { renderRequirementsView, setupRequirementsEvents } from './views/requirementsView.js';
import { renderProcurementView, setupProcurementEvents } from './views/procurementView.js';
import { renderPurchaseOrdersView, setupPurchaseOrdersEvents } from './views/purchaseOrdersView.js';
import { renderReceivingView, setupReceivingEvents } from './views/receivingView.js';
import { renderStockTransfersView, setupStockTransfersEvents } from './views/stockTransfersView.js';
import { renderProductsView, setupProductsEvents } from './views/productsView.js';
import { renderSuppliersView, setupSuppliersEvents } from './views/suppliersView.js';
import { renderReportsView, setupReportsEvents } from './views/reportsView.js';
import { renderAuditLogsView, setupAuditLogsEvents } from './views/auditLogsView.js';
import { renderLoginView, setupLoginEvents } from './views/loginView.js';

function renderApp() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Capture active input and cursor position to prevent typing glitches
  const activeEl = document.activeElement;
  const activeId = activeEl && activeEl.id ? activeEl.id : null;
  const isTextInput = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA');
  const selStart = isTextInput ? activeEl.selectionStart : null;
  const selEnd = isTextInput ? activeEl.selectionEnd : null;
  const activeVal = isTextInput ? activeEl.value : null;

  if (!store.isAuthenticated) {
    appRoot.innerHTML = renderLoginView();
    setupLoginEvents();
    return;
  }

  const currentView = store.activeView;

  // Decide view content
  let viewHtml = '';
  let viewSetupFn = null;

  switch (currentView) {
    case 'dashboard':
      viewHtml = renderDashboardView();
      viewSetupFn = setupDashboardEvents;
      break;
    case 'branches':
      viewHtml = renderBranchesView();
      viewSetupFn = setupBranchesEvents;
      break;
    case 'inventory':
      viewHtml = renderInventoryView();
      viewSetupFn = setupInventoryEvents;
      break;
    case 'stock-check':
      viewHtml = renderDailyStockCheckView();
      viewSetupFn = setupDailyStockCheckEvents;
      break;
    case 'requirements':
      viewHtml = renderRequirementsView();
      viewSetupFn = setupRequirementsEvents;
      break;
    case 'procurement':
      viewHtml = renderProcurementView();
      viewSetupFn = setupProcurementEvents;
      break;
    case 'purchase-orders':
      viewHtml = renderPurchaseOrdersView();
      viewSetupFn = setupPurchaseOrdersEvents;
      break;
    case 'receiving':
      viewHtml = renderReceivingView();
      viewSetupFn = setupReceivingEvents;
      break;
    case 'stock-transfers':
      viewHtml = renderStockTransfersView();
      viewSetupFn = setupStockTransfersEvents;
      break;
    case 'products':
      viewHtml = renderProductsView();
      viewSetupFn = setupProductsEvents;
      break;
    case 'suppliers':
      viewHtml = renderSuppliersView();
      viewSetupFn = setupSuppliersEvents;
      break;
    case 'reports':
      viewHtml = renderReportsView();
      viewSetupFn = setupReportsEvents;
      break;
    case 'audit-logs':
      viewHtml = renderAuditLogsView();
      viewSetupFn = setupAuditLogsEvents;
      break;
    default:
      viewHtml = renderDailyStockCheckView();
      viewSetupFn = setupDailyStockCheckEvents;
      break;
  }

  // Construct full layout HTML
  appRoot.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}

      <div class="main-wrapper">
        ${renderTopbar()}

        <main class="main-content">
          ${viewHtml}
        </main>
      </div>

      ${renderNotificationsDrawer()}
      ${renderAuthModal()}
      ${renderMobileBottomNav()}
    </div>
  `;

  // Attach event handlers
  setupSidebarEvents();
  setupTopbarEvents();
  setupNotificationsDrawerEvents();
  setupAuthModalEvents();
  setupMobileBottomNavEvents();

  if (viewSetupFn) {
    viewSetupFn();
  }

  // Restore input focus & selection cursor smoothly
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) {
      el.focus();
      if (isTextInput && selStart !== null && selEnd !== null && typeof el.setSelectionRange === 'function') {
        try {
          if (activeVal !== null && el.value !== activeVal) {
            el.value = activeVal;
          }
          el.setSelectionRange(selStart, selEnd);
        } catch (e) {
          // ignore setSelectionRange errors on unsupported types
        }
      }
    }
  }
}

// Live Real-Time Clock Ticker (ticks every second across all live clock elements)
function startLiveClockTicker() {
  setInterval(() => {
    const liveTimeWithSec = store.getLiveDateTimeString(new Date(), true);
    document.querySelectorAll('.live-clock-display').forEach(el => {
      el.textContent = liveTimeWithSec;
    });
  }, 1000);
}

// Initial mount & subscription
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  startLiveClockTicker();
  store.subscribe(() => {
    renderApp();
  });
});

