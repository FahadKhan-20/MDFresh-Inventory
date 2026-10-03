// Procurement Dashboard for Market & Mandi Procurement Team
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';
import { generateMasterManifestPDF, downloadBlob } from '../utils/pdfGenerator.js';

let isConsolidatedMode = false;

export function renderProcurementView() {
  const consolidatedItems = store.getConsolidatedProcurement();

  // Top metrics
  const toPurchaseCount = 24;
  const branchesCount = store.branches.length;
  const purchasedCount = 18;
  const pendingCount = 6;

  // Flattened branch requirements for the raw table
  const rawRequirementsList = [];
  store.requirements.forEach(req => {
    req.items.forEach(it => {
      rawRequirementsList.push({
        productName: it.productName,
        branchName: req.branchName,
        requiredStr: `${it.qty} ${it.unit}`,
        qty: it.qty,
        unit: it.unit,
        status: req.status === 'APPROVED' ? 'Approved' : 'Pending',
        reference: req.reference
      });
    });
  });

  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--md-secondary-forest); background-color: #E2EFE7; padding: 2px 8px; border-radius: var(--radius-pill);">
            CENTRAL MANDI OPERATIONS
          </span>
          <span style="font-size: 0.76rem; color: var(--md-text-muted);">APMC Yard Yeshwanthpur & K.R. Market</span>
        </div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Procurement Dashboard
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          Consolidate multi-branch stock requirements into unified supplier bulk purchase orders
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <button class="btn btn-secondary" id="btnDownloadProcurementPdf" style="font-weight: 800; border: 1.5px solid #B7E4C4; background: #E8F6ED; color: #0D8244;">
          📥 Download Combined PDF
        </button>
        <button class="btn ${isConsolidatedMode ? 'btn-primary' : 'btn-outline-primary'}" id="btnToggleConsolidateMode" style="font-weight: 700;">
          ${icon('layers', 'icon-sm')} ${isConsolidatedMode ? 'View Raw Branch Table' : 'Consolidate Purchase'}
        </button>
      </div>
    </div>

    <!-- Top 4 Mandi Stat Cards -->
    <div class="procurement-stat-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">To Purchase</span>
          <div class="stat-icon-wrapper" style="background-color: var(--md-primary-light); color: var(--md-primary);">
            ${icon('procurement', 'icon-sm')}
          </div>
        </div>
        <div class="stat-value" style="color: var(--md-primary);">${toPurchaseCount} Items</div>
        <div class="stat-footer">Today's consolidated demand</div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Branches</span>
          <div class="stat-icon-wrapper">${icon('branches', 'icon-sm')}</div>
        </div>
        <div class="stat-value">${branchesCount}</div>
        <div class="stat-footer">ANNASANDRAPALYA, KODIHALLI, LBS NAGAR, BASAVANAGAR</div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Purchased</span>
          <div class="stat-icon-wrapper" style="background-color: var(--status-healthy-bg); color: var(--status-healthy-text);">
            ${icon('check', 'icon-sm')}
          </div>
        </div>
        <div class="stat-value" style="color: var(--status-healthy-text);">${purchasedCount}</div>
        <div class="stat-footer">Dispatched from Mandi</div>
      </div>

      <div class="stat-card warning-highlight">
        <div class="stat-card-header">
          <span class="stat-title">Pending</span>
          <div class="stat-icon-wrapper" style="background-color: var(--status-warning-bg); color: var(--status-warning-text);">
            ${icon('alertTriangle', 'icon-sm')}
          </div>
        </div>
        <div class="stat-value" style="color: var(--status-warning-text);">${pendingCount}</div>
        <div class="stat-footer">Awaiting Mandi PO release</div>
      </div>
    </div>

    ${isConsolidatedMode ? renderConsolidatedView(consolidatedItems) : renderRawTableView(rawRequirementsList)}

    <!-- Purchase Order Created Modal -->
    <div id="poCreatedModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 520px; text-align: center;">
        <div class="modal-body" style="padding: 32px 24px;">
          <div style="width: 56px; height: 56px; background: var(--md-primary-light); color: var(--md-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            ${icon('purchaseOrders', 'icon-lg')}
          </div>
          <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--md-secondary-dark); margin-bottom: 6px;">
            Purchase Order Created Successfully
          </h3>
          <p style="font-size: 0.85rem; color: var(--md-text-muted); margin-bottom: 18px;">
            Unified purchase order has been generated with branch allocation tags and sent to the mandi agent.
          </p>
          <div style="background: var(--md-surface-subtle); padding: 14px; border-radius: var(--radius-md); border: 1.5px dashed var(--md-primary-light-border); margin-bottom: 20px;">
            <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--md-text-muted);">
              PO REFERENCE NUMBER
            </div>
            <div id="newPoReferenceId" style="font-size: 1.35rem; font-weight: 800; font-family: monospace; color: var(--md-primary); margin-top: 2px;">
              PO-20261002-0007
            </div>
          </div>
          <button class="btn btn-primary btn-lg" id="btnGoToPOView" style="width: 100%; font-weight: 800;">
            View Purchase Order & Status Timeline →
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderRawTableView(list) {
  return `
    <div class="content-card">
      <div class="card-header">
        <div class="card-header-left">
          ${icon('procurement', 'icon')}
          <div>
            <h3 class="card-title">Mandi Purchase Queue</h3>
            <span class="card-subtitle">Multi-branch product requirements before consolidation</span>
          </div>
        </div>
        <button class="btn btn-primary btn-sm" id="btnConsolidateAction">
          ${icon('layers', 'icon-sm')} Consolidate Purchase
        </button>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>BRANCH</th>
                <th>REQUIRED</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              ${list.slice(0, 10).map(item => `
                <tr>
                  <td>
                    <div style="font-weight: 800; font-size: 0.95rem; color: var(--md-text-main);">${item.productName}</div>
                  </td>
                  <td>
                    <span style="font-weight: 700; color: var(--md-text-secondary);">${item.branchName}</span>
                  </td>
                  <td>
                    <span style="font-weight: 800; font-size: 1.05rem; color: var(--md-primary);">${item.requiredStr}</span>
                  </td>
                  <td>
                    <span class="pill ${item.status === 'Approved' ? 'pill-healthy' : 'pill-low'}">
                      ${item.status}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-sm btn-quick-view-po">
                      Assign Mandi
                    </button>
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

function renderConsolidatedView(items) {
  return `
    <div class="consolidation-banner">
      <div>
        <h2>Consolidated APMC Mandi Orders</h2>
        <p>Bulk grouped by product across all 4 branches. Minimum wholesale order thresholds met.</p>
      </div>
      <button class="btn btn-primary btn-lg" id="btnCreateUnifiedPO" style="background: white; color: var(--md-secondary-dark); font-weight: 800; border: none;">
        ${icon('purchaseOrders', 'icon-sm')} CREATE PURCHASE ORDER
      </button>
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${items.map(item => `
        <div class="consolidation-card">
          <div class="consolidation-card-header">
            <div class="consolidation-title">
              <span>${item.product.image}</span>
              <span>${item.product.name}</span>
              <span class="pill pill-unit" style="font-size: 0.72rem; font-weight: 700;">${item.product.sku}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--md-text-muted);">
              Supplier: <strong style="color: var(--md-text-main);">${item.product.supplierName}</strong>
            </div>
          </div>

          <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--md-text-muted); letter-spacing: 0.04em; margin-bottom: 8px;">
            BRANCH ALLOCATION BREAKDOWN
          </div>

          <div class="allocation-chips">
            ${item.branches.map(b => `
              <div class="allocation-chip">
                <span>${b.branchName}:</span>
                <strong>${b.qty} ${item.unit}</strong>
              </div>
            `).join('')}
          </div>

          <div class="consolidation-total-bar">
            <span>TOTAL TO BUY:</span>
            <span style="font-size: 1.25rem; color: var(--md-primary);">${item.totalQty} ${item.unit.toUpperCase()}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function setupProcurementEvents() {
  const btnDownloadPdf = document.getElementById('btnDownloadProcurementPdf');
  if (btnDownloadPdf) {
    btnDownloadPdf.addEventListener('click', () => {
      const data = {
        date: '02 Oct 2026',
        branches: store.branches,
        consolidatedItems: store.getConsolidatedProcurement(),
        branchRequirements: store.getAllBranchesRequirements()
      };
      const blob = generateMasterManifestPDF(data);
      downloadBlob(blob, 'MD_Fresh_Master_Manifest_02Oct2026.pdf');
    });
  }

  const btnToggle = document.getElementById('btnToggleConsolidateMode');
  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      isConsolidatedMode = !isConsolidatedMode;
      store.notify();
    });
  }

  const btnConsolidate = document.getElementById('btnConsolidateAction');
  if (btnConsolidate) {
    btnConsolidate.addEventListener('click', () => {
      isConsolidatedMode = true;
      store.notify();
    });
  }

  const poBackdrop = document.getElementById('poCreatedModalBackdrop');
  const btnCreateUnifiedPO = document.getElementById('btnCreateUnifiedPO');
  const newPoReferenceId = document.getElementById('newPoReferenceId');

  if (btnCreateUnifiedPO) {
    btnCreateUnifiedPO.addEventListener('click', () => {
      const items = store.getConsolidatedProcurement();
      const newPO = store.createPurchaseOrderFromConsolidated(items, 'SUP001');
      if (newPoReferenceId) newPoReferenceId.textContent = newPO.id;
      if (poBackdrop) poBackdrop.classList.add('open');
    });
  }

  const btnGoToPOView = document.getElementById('btnGoToPOView');
  if (btnGoToPOView) {
    btnGoToPOView.addEventListener('click', () => {
      if (poBackdrop) poBackdrop.classList.remove('open');
      store.setView('purchase-orders');
    });
  }

  document.querySelectorAll('.btn-quick-view-po').forEach(btn => {
    btn.addEventListener('click', () => {
      store.setView('purchase-orders');
    });
  });
}
