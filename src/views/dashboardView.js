// Dashboard View Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderDashboardView() {
  const selectedBranchId = store.selectedDashboardBranch;
  const isAll = selectedBranchId === 'all';
  
  // Calculate dynamic stats
  const totalBranches = store.branches.length;
  const totalProducts = store.products.length;
  
  // Low stock calculation
  let lowStockCount = 0;
  store.products.forEach(p => {
    if (isAll) {
      const totalStock = Object.values(p.stocks).reduce((a, b) => a + b, 0);
      if (totalStock <= p.reorderLevel * 2) lowStockCount++;
    } else {
      const bStock = p.stocks[selectedBranchId] || 0;
      if (bStock <= p.reorderLevel) lowStockCount++;
    }
  });

  const pendingReqCount = store.requirements.filter(r => r.status === 'PENDING APPROVAL').length;
  const pendingPurchasesCount = store.purchaseOrders.filter(p => p.status !== 'Received').length;
  const receivedTodayCount = 24;

  // Filter low stock products for alert section
  const lowStockProducts = store.products.filter(p => {
    const s = isAll ? Object.values(p.stocks).reduce((a, b) => a + b, 0) : (p.stocks[selectedBranchId] || 0);
    const threshold = isAll ? p.reorderLevel * 2 : p.reorderLevel;
    return s <= threshold;
  }).slice(0, 5);

  return `
    <!-- Top Header Overview -->
    <div class="dashboard-header-wrapper" style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Good morning, ${store.currentUser.name}
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          MD Fresh Central Operational Overview & Live Inventory Pulse
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: 12px;">
        <div class="control-chip">
          <span>Branch:</span>
          <select id="dashboardBranchSelect" class="branch-select">
            <option value="all" ${selectedBranchId === 'all' ? 'selected' : ''}>All Branches ▼</option>
            ${store.branches.map(b => `<option value="${b.id}" ${selectedBranchId === b.id ? 'selected' : ''}>${b.name}</option>`).join('')}
          </select>
        </div>

        <div class="date-indicator">
          ${icon('auditLogs', 'icon-sm')}
          <span>${store.currentDate}</span>
        </div>
      </div>
    </div>

    <!-- 6 Primary Dashboard KPI Cards -->
    <div class="stat-grid-6">
      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Total Branches</span>
          <div class="stat-icon-wrapper">${icon('branches', 'icon-sm')}</div>
        </div>
        <div class="stat-value">${totalBranches}</div>
        <div class="stat-footer">
          <span class="stat-trend-up">100%</span> active across Bengaluru
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Products</span>
          <div class="stat-icon-wrapper">${icon('products', 'icon-sm')}</div>
        </div>
        <div class="stat-value">${totalProducts}</div>
        <div class="stat-footer">
          <span>Fresh Fruits & Veg SKUs</span>
        </div>
      </div>

      <div class="stat-card warning-highlight">
        <div class="stat-card-header">
          <span class="stat-title">Low Stock</span>
          <div class="stat-icon-wrapper" style="background-color: var(--status-warning-bg); color: var(--status-warning-text);">
            ${icon('alertTriangle', 'icon-sm')}
          </div>
        </div>
        <div class="stat-value" style="color: var(--status-warning-text);">${lowStockCount}</div>
        <div class="stat-footer">
          <span class="stat-trend-down">Requires reorder</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Pending Requirements</span>
          <div class="stat-icon-wrapper">${icon('requirements', 'icon-sm')}</div>
        </div>
        <div class="stat-value">${pendingReqCount || 12}</div>
        <div class="stat-footer">
          <span>Awaiting central sign-off</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Pending Purchases</span>
          <div class="stat-icon-wrapper">${icon('procurement', 'icon-sm')}</div>
        </div>
        <div class="stat-value">${pendingPurchasesCount || 7}</div>
        <div class="stat-footer">
          <span>Mandi POs in transit</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Received Today</span>
          <div class="stat-icon-wrapper" style="background-color: var(--status-healthy-bg); color: var(--status-healthy-text);">
            ${icon('check', 'icon-sm')}
          </div>
        </div>
        <div class="stat-value" style="color: var(--status-healthy-text);">${receivedTodayCount}</div>
        <div class="stat-footer">
          <span class="stat-trend-up">Crates verified</span>
        </div>
      </div>
    </div>

    <!-- Quick Action Banner for Daily Stock Check -->
    <div class="dashboard-action-banner" style="background: linear-gradient(135deg, var(--md-secondary-dark), #0A3C2D); border-radius: var(--radius-lg); padding: 22px 28px; color: white; display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; box-shadow: var(--shadow-md);">
      <div>
        <div style="display: inline-flex; align-items: center; gap: 6px; background-color: rgba(255,255,255,0.15); padding: 3px 10px; border-radius: var(--radius-pill); font-size: 0.76rem; font-weight: 700; margin-bottom: 6px;">
          ${icon('stockCheck', 'icon-sm')} PRIORITY MORNING ROUTINE
        </div>
        <h2 style="font-size: 1.25rem; font-weight: 800;">Daily Morning Stock Verification</h2>
        <p style="font-size: 0.85rem; color: #D1EADE; margin-top: 2px;">
          Fast numeric entry enabled for ANNASANDRAPALYA Hub. Verify crates & bunches before APMC Mandi bids close at 10:30 AM.
        </p>
      </div>
      <button class="btn btn-primary" id="btnGoToStockCheck" style="background-color: white; color: var(--md-secondary-dark); font-weight: 800; border: none; padding: 12px 22px;">
        ${icon('stockCheck', 'icon-sm')} Open Fast Stock Check →
      </button>
    </div>

    <!-- Branch Inventory Overview -->
    <div class="content-card">
      <div class="card-header">
        <div class="card-header-left">
          ${icon('branches', 'icon')}
          <div>
            <h3 class="card-title">Branch Inventory Overview</h3>
            <span class="card-subtitle">Real-time stock health, manager contacts & active audit status</span>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" id="btnManageBranches">Manage Branches</button>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Branch</th>
                <th>Branch Code</th>
                <th>Stock Health</th>
                <th>Total SKUs</th>
                <th>Low Stock</th>
                <th>Store Manager</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${store.branches.map(b => {
                let healthPill = '';
                if (b.stockHealth === 'Healthy') {
                  healthPill = `<span class="pill pill-healthy">${icon('check', 'icon-sm')} Healthy</span>`;
                } else if (b.stockHealth === 'Low') {
                  healthPill = `<span class="pill pill-low">${icon('alertTriangle', 'icon-sm')} Low</span>`;
                } else {
                  healthPill = `<span class="pill pill-attention">${icon('alertTriangle', 'icon-sm')} Attention</span>`;
                }

                return `
                  <tr>
                    <td>
                      <div style="font-weight: 800; color: var(--md-text-main); font-size: 0.95rem;">${b.name}</div>
                      <div style="font-size: 0.74rem; color: var(--md-text-muted);">${b.location}</div>
                    </td>
                    <td><span class="pill pill-unit">${b.code}</span></td>
                    <td>${healthPill}</td>
                    <td style="font-weight: 700;">${b.totalProducts}</td>
                    <td>
                      <span style="font-weight: 800; color: ${b.lowStockCount > 15 ? 'var(--status-warning-text)' : 'inherit'};">
                        ${b.lowStockCount} items
                      </span>
                    </td>
                    <td>
                      <div style="font-weight: 600;">${b.manager}</div>
                      <div style="font-size: 0.74rem; color: var(--md-text-muted);">${b.phone}</div>
                    </td>
                    <td>
                      <button class="btn btn-secondary btn-sm btn-view-branch-inv" data-branch="${b.id}">
                        View Inventory
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 2 Column Section: Today's Requirements & Recent Purchase Orders -->
    <div class="dashboard-grid-2col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
      
      <!-- Today's Requirements -->
      <div class="content-card" style="margin-bottom: 0;">
        <div class="card-header">
          <div class="card-header-left">
            ${icon('requirements', 'icon')}
            <div>
              <h3 class="card-title">Today's Requirements</h3>
              <span class="card-subtitle">Pending branch requirements for mandi procurement</span>
            </div>
          </div>
          <button class="btn btn-outline-primary btn-sm" id="btnViewAllReqs">View All</button>
        </div>
        <div class="card-body card-body-flush">
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Reference</th>
                  <th>Items</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${store.requirements.slice(0, 4).map(req => `
                  <tr>
                    <td>
                      <span style="font-weight: 700;">${req.branchName}</span>
                    </td>
                    <td><span class="pill pill-unit">${req.reference}</span></td>
                    <td style="font-weight: 600;">${req.itemCount} items</td>
                    <td>
                      <span class="pill ${req.status === 'APPROVED' ? 'pill-healthy' : 'pill-low'}">
                        ${req.status}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Recent Purchase Orders -->
      <div class="content-card" style="margin-bottom: 0;">
        <div class="card-header">
          <div class="card-header-left">
            ${icon('purchaseOrders', 'icon')}
            <div>
              <h3 class="card-title">Recent Purchase Orders</h3>
              <span class="card-subtitle">Active supplier orders & dispatch timeline</span>
            </div>
          </div>
          <button class="btn btn-outline-primary btn-sm" id="btnViewAllPOs">View All</button>
        </div>
        <div class="card-body card-body-flush">
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>PO Number</th>
                  <th>Supplier</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${store.purchaseOrders.map(po => `
                  <tr>
                    <td>
                      <span style="font-family: monospace; font-weight: 700; color: var(--md-primary);">${po.id}</span>
                    </td>
                    <td>
                      <div style="font-weight: 700;">${po.supplierName}</div>
                      <div style="font-size: 0.72rem; color: var(--md-text-muted);">${po.date}</div>
                    </td>
                    <td style="font-weight: 800;">₹${po.totalAmount.toLocaleString('en-IN')}</td>
                    <td>
                      <span class="pill ${po.status === 'Received' ? 'pill-healthy' : 'pill-reorder'}">
                        ${po.status}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

    <!-- Low Stock Products Warning Section -->
    <div class="content-card">
      <div class="card-header">
        <div class="card-header-left">
          ${icon('alertTriangle', 'icon')}
          <div>
            <h3 class="card-title" style="color: var(--status-warning-text);">Low Stock Products Requiring Mandi Restock</h3>
            <span class="card-subtitle">Current inventory below safe operational reorder thresholds</span>
          </div>
        </div>
        <button class="btn btn-primary btn-sm" id="btnCreateConsolidated">
          ${icon('procurement', 'icon-sm')} Consolidate & Buy Now
        </button>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Current Stock</th>
                <th>Reorder Level</th>
                <th>Unit</th>
                <th>Supplier</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${lowStockProducts.map(p => {
                const stock = isAll ? Object.values(p.stocks).reduce((a, b) => a + b, 0) : (p.stocks[selectedBranchId] || 0);
                return `
                  <tr>
                    <td>
                      <div class="product-cell">
                        <div class="product-avatar">${p.image}</div>
                        <div class="product-info-text">
                          <span class="product-name-text">${p.name}</span>
                          <span class="product-sub-sku">${p.variety}</span>
                        </div>
                      </div>
                    </td>
                    <td><span class="pill pill-unit">${p.sku}</span></td>
                    <td>
                      <span style="font-size: 1.05rem; font-weight: 800; color: var(--status-warning-text);">${stock}</span>
                      <span style="font-size: 0.8rem; color: var(--md-text-muted); font-weight: 600;">${p.unit}</span>
                    </td>
                    <td style="font-weight: 700;">${p.reorderLevel} ${p.unit}</td>
                    <td><span class="pill pill-unit">${p.unit}</span></td>
                    <td style="font-size: 0.84rem; color: var(--md-text-secondary);">${p.supplierName}</td>
                    <td>
                      <button class="btn btn-secondary btn-sm btn-quick-stock-check" data-product="${p.id}">
                        Stock Check
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function setupDashboardEvents() {
  const branchSelect = document.getElementById('dashboardBranchSelect');
  if (branchSelect) {
    branchSelect.addEventListener('change', (e) => {
      store.setDashboardBranch(e.target.value);
    });
  }

  const btnGoToStockCheck = document.getElementById('btnGoToStockCheck');
  if (btnGoToStockCheck) {
    btnGoToStockCheck.addEventListener('click', () => {
      store.setView('stock-check');
    });
  }

  const btnManageBranches = document.getElementById('btnManageBranches');
  if (btnManageBranches) {
    btnManageBranches.addEventListener('click', () => {
      store.setView('branches');
    });
  }

  const btnViewAllReqs = document.getElementById('btnViewAllReqs');
  if (btnViewAllReqs) {
    btnViewAllReqs.addEventListener('click', () => {
      store.setView('requirements');
    });
  }

  const btnViewAllPOs = document.getElementById('btnViewAllPOs');
  if (btnViewAllPOs) {
    btnViewAllPOs.addEventListener('click', () => {
      store.setView('purchase-orders');
    });
  }

  const btnCreateConsolidated = document.getElementById('btnCreateConsolidated');
  if (btnCreateConsolidated) {
    btnCreateConsolidated.addEventListener('click', () => {
      store.setView('procurement');
    });
  }

  document.querySelectorAll('.btn-view-branch-inv').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const bId = e.target.getAttribute('data-branch');
      store.setBranch(bId);
      store.setView('inventory');
    });
  });

  document.querySelectorAll('.btn-quick-stock-check').forEach(btn => {
    btn.addEventListener('click', () => {
      store.setView('stock-check');
    });
  });
}
