// Receiving Page with Partial Receiving & Difference Tracking
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

let selectedPOForReceiving = 'PO-20261002-0007';
let selectedBranchForReceiving = 'BR001'; // ANNASANDRAPALYA

// Map of entered received quantities: { [productId]: number }
let enteredReceivedMap = {
  PRD001: 2, // Apple: 2 expected, 2 received
  PRD003: 4  // Mango: 5 expected, 4 received (Difference: -1)
};

export function renderReceivingView() {
  const po = store.purchaseOrders.find(p => p.id === selectedPOForReceiving) || store.purchaseOrders[0];
  const branch = store.branches.find(b => b.id === selectedBranchForReceiving) || store.branches[0];

  // Calculate differences and status
  let hasPartial = false;
  let allZeroDiff = true;

  const receivingRows = po.items.map(item => {
    const alloc = item.allocations.find(a => a.branchId === branch.id || a.branch === branch.name) || { qty: 0 };
    const expected = alloc.qty;
    const receivedVal = enteredReceivedMap[item.productId] !== undefined ? enteredReceivedMap[item.productId] : expected;
    const diff = receivedVal - expected;

    if (diff < 0) {
      hasPartial = true;
      allZeroDiff = false;
    } else if (diff > 0) {
      allZeroDiff = false;
    }

    return {
      product: item,
      expected,
      received: receivedVal,
      difference: diff,
      unit: item.unit
    };
  });

  const receivingStatus = hasPartial ? 'PARTIALLY RECEIVED' : 'FULLY RECEIVED';

  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--md-primary); background-color: var(--md-primary-light); padding: 2px 8px; border-radius: var(--radius-pill);">
            GOODS INWARD NOTE (GRN)
          </span>
          <span style="font-size: 0.76rem; color: var(--md-text-muted);">Dockside Quality & Quantity Verification</span>
        </div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Stock Receiving
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          Verify physical crates received against mandi purchase order manifest
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: 12px;">
        <span class="pill ${hasPartial ? 'pill-low' : 'pill-healthy'}" style="font-size: 0.85rem; padding: 6px 14px;">
          ${receivingStatus}
        </span>
      </div>
    </div>

    <!-- Receiving Configuration Header Card -->
    <div class="receiving-config-card" style="background: white; border: 1px solid var(--md-border); border-radius: var(--radius-lg); padding: 20px 24px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
      <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
        <!-- PO Selector -->
        <div class="control-chip">
          <span>Purchase Order:</span>
          <select id="receivingPOSelect" class="branch-select" style="font-family: monospace; font-weight: 800; color: var(--md-primary);">
            ${store.purchaseOrders.map(p => `<option value="${p.id}" ${p.id === po.id ? 'selected' : ''}>${p.id} (${p.supplierName})</option>`).join('')}
          </select>
        </div>

        <!-- Branch Selector -->
        <div class="control-chip">
          <span>Receiving Branch:</span>
          <select id="receivingBranchSelect" class="branch-select" style="font-weight: 700;">
            ${store.branches.map(b => `<option value="${b.id}" ${b.id === branch.id ? 'selected' : ''}>${b.name}</option>`).join('')}
          </select>
        </div>
      </div>

      <div style="font-size: 0.82rem; color: var(--md-text-muted);">
        Supplier: <strong style="color: var(--md-text-main);">${po.supplierName}</strong> &bull; Date: 02 Oct 2026
      </div>
    </div>

    <!-- Receiving Table -->
    <div class="content-card">
      <div class="card-header">
        <div class="card-header-left">
          ${icon('receiving', 'icon')}
          <div>
            <h3 class="card-title">Physical Crates Verification &bull; ${branch.name}</h3>
            <span class="card-subtitle">Enter actual delivered counts; system calculates differences automatically</span>
          </div>
        </div>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th style="width: 25%;">PRODUCT</th>
                <th style="width: 15%;">EXPECTED</th>
                <th style="width: 25%;">ACTUALLY RECEIVED</th>
                <th style="width: 15%;">DIFFERENCE</th>
                <th style="width: 20%;">STATUS</th>
              </tr>
            </thead>
            <tbody>
              ${receivingRows.map(row => {
                let diffTag = '';
                if (row.difference < 0) {
                  diffTag = `<span class="difference-tag negative">${row.difference} ${row.unit}</span>`;
                } else if (row.difference === 0) {
                  diffTag = `<span class="difference-tag zero">0 (Exact)</span>`;
                } else {
                  diffTag = `<span class="difference-tag positive">+${row.difference} ${row.unit}</span>`;
                }

                return `
                  <tr>
                    <td>
                      <div style="font-weight: 800; font-size: 0.98rem; color: var(--md-text-main);">${row.product.productName}</div>
                      <div style="font-size: 0.74rem; color: var(--md-text-muted); font-family: monospace;">${row.product.productId}</div>
                    </td>
                    <td>
                      <span style="font-size: 1.15rem; font-weight: 800; color: var(--md-text-main);">${row.expected}</span>
                      <span style="font-size: 0.8rem; font-weight: 700; color: var(--md-text-muted);">${row.unit}</span>
                    </td>
                    <td>
                      <div class="fast-qty-wrapper ${row.received > 0 ? 'has-value' : ''}">
                        <input 
                          type="number" 
                          min="0" 
                          max="999"
                          step="1"
                          class="fast-qty-input receiving-qty-input" 
                          data-product-id="${row.product.productId}" 
                          value="${row.received}"
                        />
                        <span class="fast-qty-unit">${row.unit}</span>
                      </div>
                    </td>
                    <td>${diffTag}</td>
                    <td>
                      <span class="pill ${row.difference < 0 ? 'pill-low' : 'pill-healthy'}">
                        ${row.difference < 0 ? 'Partial Deficit' : 'Verified'}
                      </span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Confirm Receiving Bar -->
    <div style="background: white; border: 1px solid var(--md-border); border-radius: var(--radius-lg); padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <div style="font-weight: 800; font-size: 1rem; color: var(--md-text-main);">
          Audit & Physical Inwarding
        </div>
        <div style="font-size: 0.82rem; color: var(--md-text-muted);">
          Confirming will immediately credit ${branch.name} inventory and log receiving variance to APMC supplier accounts.
        </div>
      </div>

      <button class="btn btn-primary btn-lg" id="btnConfirmReceiving" style="font-weight: 800;">
        ${icon('check', 'icon-sm')} Confirm Receiving & Update Stock
      </button>
    </div>

    <!-- Receiving Success Modal -->
    <div id="receivingSuccessModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 480px; text-align: center;">
        <div class="modal-body" style="padding: 36px 28px;">
          <div style="width: 60px; height: 60px; background-color: var(--md-primary-light); color: var(--md-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            ${icon('check', 'icon-lg')}
          </div>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--md-secondary-dark); margin-bottom: 8px;">
            Stock Inward Confirmed
          </h3>
          <p style="font-size: 0.86rem; color: var(--md-text-secondary); margin-bottom: 20px;" id="recvSuccessMsg">
            Inventory levels have been updated for ${branch.name}.
          </p>

          <button class="btn btn-primary btn-lg" style="width: 100%; font-weight: 800;" id="btnGoToInventoryAfterReceiving">
            View Updated Inventory →
          </button>
        </div>
      </div>
    </div>
  `;
}

export function setupReceivingEvents() {
  const poSelect = document.getElementById('receivingPOSelect');
  if (poSelect) {
    poSelect.addEventListener('change', (e) => {
      selectedPOForReceiving = e.target.value;
      store.notify();
    });
  }

  const branchSelect = document.getElementById('receivingBranchSelect');
  if (branchSelect) {
    branchSelect.addEventListener('change', (e) => {
      selectedBranchForReceiving = e.target.value;
      store.notify();
    });
  }

  // Inputs
  document.querySelectorAll('.receiving-qty-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const pId = e.currentTarget.getAttribute('data-product-id');
      const val = parseInt(e.currentTarget.value, 10) || 0;
      enteredReceivedMap[pId] = val;
      store.notify();
    });
    input.addEventListener('focus', (e) => e.target.select());
  });

  // Confirm
  const btnConfirm = document.getElementById('btnConfirmReceiving');
  const modalBackdrop = document.getElementById('receivingSuccessModalBackdrop');
  const recvSuccessMsg = document.getElementById('recvSuccessMsg');

  if (btnConfirm) {
    btnConfirm.addEventListener('click', () => {
      const res = store.receiveBranchStock(selectedPOForReceiving, selectedBranchForReceiving, enteredReceivedMap);
      if (res && res.success) {
        if (recvSuccessMsg) {
          recvSuccessMsg.textContent = `Physical receiving registered with status: ${res.status}. Branch stock counts updated.`;
        }
        if (modalBackdrop) modalBackdrop.classList.add('open');
      }
    });
  }

  const btnGoInv = document.getElementById('btnGoToInventoryAfterReceiving');
  if (btnGoInv) {
    btnGoInv.addEventListener('click', () => {
      if (modalBackdrop) modalBackdrop.classList.remove('open');
      store.setBranch(selectedBranchForReceiving);
      store.setView('inventory');
    });
  }
}
