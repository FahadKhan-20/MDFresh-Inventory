// Purchase Order UI Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

let selectedPOId = 'PO-20261002-0007';

export function renderPurchaseOrdersView() {
  const currentPO = store.purchaseOrders.find(p => p.id === selectedPOId) || store.purchaseOrders[0];

  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Purchase Orders
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          APMC mandi wholesale orders, branch-wise allocations & live dispatch tracking
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: 10px;">
        <button class="btn btn-secondary" id="btnPrintPOBtn">
          ${icon('printer', 'icon-sm')} Print Gatepass
        </button>
        <button class="btn btn-primary" id="btnGoToReceivingFromPO">
          ${icon('receiving', 'icon-sm')} Proceed to Receiving →
        </button>
      </div>
    </div>

    <!-- PO Selector / Switcher Tabs -->
    <div style="display: flex; gap: 10px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px;">
      ${store.purchaseOrders.map(po => `
        <button 
          class="btn ${po.id === currentPO.id ? 'btn-primary' : 'btn-secondary'} btn-sm po-tab-btn" 
          data-po-id="${po.id}"
          style="font-family: monospace; font-weight: 700;"
        >
          ${po.id} (${po.status})
        </button>
      `).join('')}
    </div>

    <!-- PO Top Details Card -->
    <div class="po-summary-header">
      <div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: monospace; font-size: 1.25rem; font-weight: 800; color: var(--md-primary);">${currentPO.id}</span>
          <span class="pill pill-reorder">${currentPO.status}</span>
        </div>
        <div style="font-size: 0.95rem; font-weight: 700; color: var(--md-text-main); margin-top: 6px;">
          Supplier: ${currentPO.supplierName}
        </div>
        <div style="font-size: 0.78rem; color: var(--md-text-muted); margin-top: 2px;">
          Created: ${currentPO.date} at ${currentPO.time || '09:30 AM'} &bull; APMC Yard Yeshwanthpur
        </div>
      </div>

      <div style="text-align: right;">
        <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase; color: var(--md-text-muted);">
          Total Order Value
        </div>
        <div style="font-size: 1.65rem; font-weight: 800; color: var(--md-secondary-dark); line-height: 1.1;">
          ₹${currentPO.totalAmount.toLocaleString('en-IN')}
        </div>
        <div style="font-size: 0.74rem; color: var(--md-primary); font-weight: 600;">
          GST & APMC Mandi cess included
        </div>
      </div>
    </div>

    <!-- Status Timeline -->
    <div class="content-card" style="margin-bottom: 24px;">
      <div class="card-header" style="background-color: var(--md-surface-subtle); padding: 12px 20px;">
        <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--md-text-muted); letter-spacing: 0.05em;">
          PURCHASE ORDER FULFILLMENT TIMELINE
        </span>
      </div>
      <div class="card-body" style="padding: 20px 32px 30px;">
        <div class="timeline-stepper">
          ${currentPO.timeline.map((step, idx) => {
            const isCompleted = step.status === 'completed';
            const isActive = step.status === 'active';
            return `
              <div class="timeline-step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}">
                <div class="timeline-node">
                  ${isCompleted ? icon('check', 'icon-sm') : (idx + 1)}
                </div>
                <div class="timeline-label">${step.step}</div>
                <div class="timeline-time">${step.timestamp}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- Order Items & Branch Allocation Table -->
    <div class="content-card">
      <div class="card-header">
        <div class="card-header-left">
          ${icon('inventory', 'icon')}
          <div>
            <h3 class="card-title">Order Items & Branch Allocations</h3>
            <span class="card-subtitle">Detailed breakdown across Bengaluru retail hubs</span>
          </div>
        </div>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th style="width: 25%;">ITEM</th>
                <th style="width: 15%;">TOTAL QUANTITY</th>
                <th style="width: 15%;">RATE (EST.)</th>
                <th style="width: 15%;">AMOUNT</th>
                <th style="width: 30%;">BRANCH ALLOCATIONS</th>
              </tr>
            </thead>
            <tbody>
              ${currentPO.items.map(item => `
                <tr>
                  <td>
                    <div style="font-weight: 800; font-size: 1rem; color: var(--md-text-main);">${item.productName}</div>
                    <div style="font-size: 0.74rem; color: var(--md-text-muted); font-family: monospace;">SKU: ${item.productId}</div>
                  </td>
                  <td>
                    <span style="font-size: 1.15rem; font-weight: 800; color: var(--md-primary);">${item.qty}</span>
                    <span style="font-size: 0.82rem; font-weight: 700; color: var(--md-text-muted);">${item.unit}</span>
                  </td>
                  <td style="font-weight: 600;">₹${item.rate.toLocaleString('en-IN')} / ${item.unit}</td>
                  <td style="font-weight: 800; font-size: 0.95rem;">₹${item.amount.toLocaleString('en-IN')}</td>
                  <td>
                    <div style="display: flex; flex-direction: column; gap: 4px;">
                      ${item.allocations.map(a => `
                        <div style="display: flex; align-items: center; justify-content: space-between; background: var(--md-surface-subtle); padding: 4px 10px; border-radius: var(--radius-sm); font-size: 0.8rem; font-weight: 600;">
                          <span>${a.branch}</span>
                          <span style="color: var(--md-primary); font-weight: 800;">${a.qty} ${item.unit}</span>
                        </div>
                      `).join('')}
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function setupPurchaseOrdersEvents() {
  document.querySelectorAll('.po-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      selectedPOId = e.currentTarget.getAttribute('data-po-id');
      store.notify();
    });
  });

  const btnPrint = document.getElementById('btnPrintPOBtn');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }

  const btnGoToReceiving = document.getElementById('btnGoToReceivingFromPO');
  if (btnGoToReceiving) {
    btnGoToReceiving.addEventListener('click', () => {
      store.setView('receiving');
    });
  }
}
