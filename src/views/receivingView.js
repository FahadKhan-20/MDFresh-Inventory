// Morning Stock Receiving & Unloading Portal for MD Fresh
// Enables dockside verification of incoming orders across all branches with automatic variance tracking
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';
import { generateGoodsReceivingPDF, downloadBlob } from '../utils/pdfGenerator.js';
import { showToast } from '../utils/toast.js';

let selectedBranchId = null;
let selectedPOId = null;
let lastKnownDispatchPOId = null;
let extraItemsMap = {}; // { [branchId]: [ { productId, productName, sku, image, category, unit, unitCost } ] }

export function renderReceivingView() {
  const currentBranchId = selectedBranchId || store.currentBranchId || 'BR001';
  selectedBranchId = currentBranchId;

  const branch = store.branches.find(b => b.id === currentBranchId) || store.branches[0];

  // Active delivery/PO: Automatically track newly generated dispatch POs from daily stock check PDF
  const poList = store.purchaseOrders;
  if (!selectedPOId || (store.latestDispatchPOId && store.latestDispatchPOId !== lastKnownDispatchPOId)) {
    selectedPOId = store.latestDispatchPOId || (poList[0] ? poList[0].id : null);
    lastKnownDispatchPOId = store.latestDispatchPOId;
  }
  // Prioritize Kodihalli comprehensive delivery PO when on Kodihalli branch
        if (currentBranchId === "BR001" && (!selectedPOId || selectedPOId === "PO-20261003-0001") && !store.latestDispatchPOId) {
    const aspPo = poList.find(p => p.id === "PO-20261003-ASP01");
    if (aspPo) {
      selectedPOId = aspPo.id;
    }
  }
  if (currentBranchId === "BR004" && (!selectedPOId || selectedPOId === "PO-20261003-0001") && !store.latestDispatchPOId) {
    const bsvPo = poList.find(p => p.id === "PO-20261003-BSV01");
    if (bsvPo) {
      selectedPOId = bsvPo.id;
    }
  }
  if (currentBranchId === "BR003" && (!selectedPOId || selectedPOId === "PO-20261003-0001") && !store.latestDispatchPOId) {
    const lbsPo = poList.find(p => p.id === "PO-20261003-LBS01");
    if (lbsPo) {
      selectedPOId = lbsPo.id;
    }
  }
  if (currentBranchId === "BR002" && (!selectedPOId || selectedPOId === "PO-20261003-0001") && !store.latestDispatchPOId) {
    const kdhPo = poList.find(p => p.id === "PO-20261003-KDH01");
    if (kdhPo) {
      selectedPOId = kdhPo.id;
    }
  }

  const currentPO = (selectedPOId && poList.find(p => p.id === selectedPOId)) || poList[0];
  selectedPOId = currentPO ? currentPO.id : null;

  // Retrieve incoming items for this branch
  const baseItems = store.getBranchIncomingOrder(currentBranchId, selectedPOId);
  const extraItems = extraItemsMap[currentBranchId] || [];

  // Merge extra items if not already present
  let allItems = [...baseItems];
  extraItems.forEach(extra => {
    if (!allItems.some(it => it.productId === extra.productId)) {
      allItems.push({
        ...extra,
        orderedQty: 0
      });
    }
  });

  // Get active receiving draft quantities
  allItems = store.sortProductsForBranch(currentBranchId, allItems);

  // Get active receiving draft quantities
  const draft = store.receivingDrafts[currentBranchId] || {};

  // Compute live variances
  let totalOrderedUnits = 0;
  let totalReceivedUnits = 0;
  let surplusItemsCount = 0;
  let shortageItemsCount = 0;
  let exactItemsCount = 0;
  let surplusUnits = 0;
  let shortageUnits = 0;

  const receivingRows = allItems.map(item => {
    const ordered = item.orderedQty;
    // Default received to draft if entered, otherwise defaults to ordered
    const received = draft[item.productId] !== undefined ? draft[item.productId] : ordered;
    const diff = received - ordered;

    totalOrderedUnits += ordered;
    totalReceivedUnits += received;

    if (diff > 0) {
      surplusItemsCount++;
      surplusUnits += diff;
    } else if (diff < 0) {
      shortageItemsCount++;
      shortageUnits += Math.abs(diff);
    } else {
      exactItemsCount++;
    }

    return {
      ...item,
      ordered,
      received,
      difference: diff
    };
  });

  const hasVariances = surplusItemsCount > 0 || shortageItemsCount > 0;
  const deliveryStatus = !hasVariances ? 'EXACT MATCH' :
    (shortageItemsCount > 0 && surplusItemsCount > 0) ? 'MIXED VARIANCES (MORE & LESS)' :
    shortageItemsCount > 0 ? 'SHORTAGE (LESS STOCK)' : 'SURPLUS (MORE STOCK)';

  return `
    <!-- Top Header -->
    <div style="margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
          <span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #064E3B; background-color: #E2EFE7; padding: 2px 8px; border-radius: var(--radius-pill);">
            MORNING DOCKSIDE UNLOADING
          </span>
          <span style="font-size: 0.76rem; color: var(--md-text-muted);">Incoming Order vs Physical Stock Verification</span>
        </div>
        <h1 style="font-size: 1.6rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Stock Receiving Portal
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          Inspect arriving mandi crates at ${branch.name}. Enter actual counts delivered to track more or less stock immediately.
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <span class="pill ${!hasVariances ? 'pill-healthy' : shortageItemsCount > 0 ? 'pill-low' : 'pill-unit'}" style="font-size: 0.85rem; padding: 6px 14px; font-weight: 800;">
          ${!hasVariances ? '✓ ' + deliveryStatus : '⚠️ ' + deliveryStatus}
        </span>
      </div>
    </div>

    <!-- 4 Branch Switcher Navigation Tabs -->
    <div style="background: white; border: 1.5px solid var(--md-border); border-radius: var(--radius-lg); padding: 6px; margin-bottom: 20px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
      ${store.branches.map((b, idx) => {
        const isActive = b.id === currentBranchId;
        return `
          <button 
            class="receiving-branch-tab-btn" 
            data-branch-id="${b.id}"
            style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 14px; border-radius: var(--radius-md); border: none; background: ${isActive ? 'var(--md-primary)' : 'transparent'}; color: ${isActive ? 'white' : 'var(--md-text-main)'}; font-weight: 800; font-size: 0.92rem; cursor: pointer; transition: all 0.2s ease;"
          >
            <span style="font-size: 1.1rem;">🏢</span>
            <span>${b.name}</span>
            <span class="pill" style="font-size: 0.7rem; background: ${isActive ? 'rgba(255,255,255,0.25)' : 'var(--md-surface-subtle)'}; color: ${isActive ? 'white' : 'var(--md-text-secondary)'};">
              ${b.code}
            </span>
          </button>
        `;
      }).join('')}
    </div>

    <!-- Synced Delivery Dispatch Banner -->
    ${currentPO && (currentPO.source?.includes('DAILY_STOCK_CHECK') || currentPO.manifestReference) ? `
      <div style="background: linear-gradient(135deg, #ECFDF5 0%, #E6F7EF 100%); border: 1.5px solid #10B981; border-radius: var(--radius-md); padding: 12px 18px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 38px; height: 38px; background: #0D8244; color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
            🚛
          </div>
          <div>
            <div style="font-size: 0.94rem; font-weight: 800; color: #064E3B; display: flex; align-items: center; gap: 8px;">
              <span>Morning Mandi Dispatch Synced from Daily Stock Check</span>
              <span class="pill" style="background: #0D8244; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">ACTIVE DISPATCH</span>
            </div>
            <div style="font-size: 0.78rem; color: #047857; margin-top: 2px;">
              Manifest Ref: <strong>${currentPO.manifestReference || currentPO.id}</strong> &bull; Generated: ${currentPO.date} at ${currentPO.time} &bull; Exact branch requirements loaded ready for dock unloading.
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="pill pill-healthy" style="font-weight: 800; font-size: 0.8rem; padding: 5px 12px;">
            ✓ Stock Check Synced
          </span>
        </div>
      </div>
    ` : ''}

    <!-- Kodihalli Receiving Sequence Indicator Banner -->
            ${currentBranchId === "BR001" ? `
      <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 10px 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">🚚</span>
          <div>
            <div style="font-weight: 800; font-size: 0.92rem; color: #166534; display: flex; align-items: center; gap: 8px;">
              <span>Annasandrapalya Dock Receiving Sequence Active (100 Produce Items: 62 Veg &bull; 38 Fruits)</span>
              <span class="pill" style="background: #166534; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">ANNASANDRAPALYA SEQUENCE</span>
            </div>
            <div style="font-size: 0.78rem; color: #15803D; margin-top: 2px;">
              Arriving crates are ordered strictly in the official Annasandrapalya stock receiving list order.
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #166534;">
          #1 Beans through #102 Misri Apple
        </div>
      </div>
    ` : ""}
    ${currentBranchId === "BR004" ? `
      <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 10px 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">🚚</span>
          <div>
            <div style="font-weight: 800; font-size: 0.92rem; color: #166534; display: flex; align-items: center; gap: 8px;">
              <span>Basavanagar Dock Receiving Sequence Active (104 Produce Items: 62 Veg &bull; 42 Fruits)</span>
              <span class="pill" style="background: #166534; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">BASAVANAGAR SEQUENCE</span>
            </div>
            <div style="font-size: 0.78rem; color: #15803D; margin-top: 2px;">
              Arriving crates are ordered strictly in the official Basavanagar stock receiving list order: <strong>Vegetables (#1 to #62)</strong> then <strong>Fruits (#63 to #104)</strong>.
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #166534;">
          #1 Cucumber through #104 Misri Apple
        </div>
      </div>
    ` : ""}
    ${currentBranchId === "BR003" ? `
      <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 10px 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">🚚</span>
          <div>
            <div style="font-weight: 800; font-size: 0.92rem; color: #166534; display: flex; align-items: center; gap: 8px;">
              <span>LB Shastri Nagar Dock Receiving Sequence Active (103 Produce Items: 62 Veg &bull; 41 Fruits)</span>
              <span class="pill" style="background: #166534; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">LBS NAGAR SEQUENCE</span>
            </div>
            <div style="font-size: 0.78rem; color: #15803D; margin-top: 2px;">
              Arriving crates are ordered strictly in the official LB Shastri Nagar stock receiving list order: <strong>Vegetables (#1 to #62)</strong> then <strong>Fruits (#63 to #103)</strong>.
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #166534;">
          #1 Beans through #103 Watermelon Stripes
        </div>
      </div>
    ` : ""}
    ${currentBranchId === "BR002" ? `
      <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 10px 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">🚚</span>
          <div>
            <div style="font-weight: 800; font-size: 0.92rem; color: #166534; display: flex; align-items: center; gap: 8px;">
              <span>Kodihalli Dock Receiving Sequence Active (94 Produce Items: 53 Veg &bull; 41 Fruits)</span>
              <span class="pill" style="background: #166534; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">KODIHALLI SEQUENCE</span>
            </div>
            <div style="font-size: 0.78rem; color: #15803D; margin-top: 2px;">
              Arriving crates are ordered strictly in the official Kodihalli stock receiving list order: <strong>Vegetables (#1 to #53)</strong> then <strong>Fruits (#54 to #94)</strong>.
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #166534;">
          #1 Cucumber through #94 Mangoes
        </div>
      </div>
    ` : ""}

    <!-- Delivery Source Bar -->
    <div style="background: white; border: 1px solid var(--md-border); border-radius: var(--radius-md); padding: 14px 18px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <span style="font-size: 0.82rem; font-weight: 800; color: var(--md-text-secondary);">Delivery Dispatch Order:</span>
        <select id="receivingDispatchSelect" style="padding: 6px 12px; border: 1.5px solid var(--md-border-strong); border-radius: var(--radius-sm); font-family: monospace; font-weight: 800; font-size: 0.88rem; color: var(--md-primary); outline: none;">
          ${poList.map(p => `
            <option value="${p.id}" ${p.id === selectedPOId ? 'selected' : ''}>
              ${p.id} &bull; ${p.supplierName} (${p.date})${p.source?.includes('DAILY_STOCK_CHECK') ? ' [Daily Stock Check Manifest]' : ''}
            </option>
          `).join('')}
        </select>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; font-size: 0.8rem; color: var(--md-text-muted);">
        <span>Receiving Staff: <strong style="color: var(--md-text-main);">${store.currentUser?.name || 'MD FRESH STAFF'}</strong></span>
        <span>&bull;</span>
        <span class="live-clock-display" style="font-family: monospace; font-weight: 700; color: var(--md-secondary-dark);">${store.getLiveDateTimeString(new Date(), true)}</span>
      </div>
    </div>

    <!-- Live Variance Summary Stats Cards -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
      <!-- Expected Items -->
      <div class="stat-card" style="background: white; border: 1.5px solid var(--md-border); border-radius: var(--radius-md); padding: 16px 18px;">
        <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--md-text-muted); letter-spacing: 0.04em;">
          Ordered (Expected)
        </div>
        <div style="font-size: 1.6rem; font-weight: 900; color: var(--md-secondary-dark); margin: 4px 0;">
          ${totalOrderedUnits} <span style="font-size: 0.85rem; font-weight: 700; color: var(--md-text-muted);">Units</span>
        </div>
        <div style="font-size: 0.78rem; color: var(--md-text-secondary);">
          Across ${allItems.length} incoming line items
        </div>
      </div>

      <!-- Actually Received -->
      <div class="stat-card" style="background: white; border: 1.5px solid #A7E0BE; border-radius: var(--radius-md); padding: 16px 18px;">
        <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #0D8244; letter-spacing: 0.04em;">
          Actually Received
        </div>
        <div style="font-size: 1.6rem; font-weight: 900; color: #0D8244; margin: 4px 0;">
          ${totalReceivedUnits} <span style="font-size: 0.85rem; font-weight: 700; color: #0D8244;">Units</span>
        </div>
        <div style="font-size: 0.78rem; color: var(--md-text-secondary);">
          Physical count unloaded at dock
        </div>
      </div>

      <!-- Shortage (Less Stock) -->
      <div class="stat-card" style="background: white; border: 1.5px solid ${shortageItemsCount > 0 ? '#FCA5A5' : 'var(--md-border)'}; border-radius: var(--radius-md); padding: 16px 18px;">
        <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: ${shortageItemsCount > 0 ? '#DC2626' : 'var(--md-text-muted)'}; letter-spacing: 0.04em;">
          Shortage (Less Stock)
        </div>
        <div style="font-size: 1.6rem; font-weight: 900; color: ${shortageItemsCount > 0 ? '#DC2626' : 'var(--md-text-main)'}; margin: 4px 0;">
          ${shortageItemsCount} <span style="font-size: 0.85rem; font-weight: 700;">items (${shortageUnits} units short)</span>
        </div>
        <div style="font-size: 0.78rem; color: var(--md-text-secondary);">
          ${shortageItemsCount === 0 ? '✓ No shortage detected' : 'Mandi supplier delivered less'}
        </div>
      </div>

      <!-- Surplus (More Stock) -->
      <div class="stat-card" style="background: white; border: 1.5px solid ${surplusItemsCount > 0 ? '#93C5FD' : 'var(--md-border)'}; border-radius: var(--radius-md); padding: 16px 18px;">
        <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: ${surplusItemsCount > 0 ? '#2563EB' : 'var(--md-text-muted)'}; letter-spacing: 0.04em;">
          Surplus (More Stock)
        </div>
        <div style="font-size: 1.6rem; font-weight: 900; color: ${surplusItemsCount > 0 ? '#2563EB' : 'var(--md-text-main)'}; margin: 4px 0;">
          ${surplusItemsCount} <span style="font-size: 0.85rem; font-weight: 700;">items (+${surplusUnits} units extra)</span>
        </div>
        <div style="font-size: 0.78rem; color: var(--md-text-secondary);">
          ${surplusItemsCount === 0 ? '✓ No surplus detected' : 'Extra crates unloaded'}
        </div>
      </div>
    </div>

    <!-- Quick Action Bar -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <button class="btn btn-secondary btn-sm" id="btnReceiveAllExact" style="font-weight: 800; border: 1.5px solid #A7E0BE; background: #EBF8F1; color: #064E3B;">
          ✓ Receive All Ordered as Exact Match
        </button>
        <button class="btn btn-secondary btn-sm" id="btnClearAllReceived" style="font-weight: 700;">
          ↺ Reset All Counts to 0
        </button>
      </div>

      <div>
        <button class="btn btn-outline-primary btn-sm" id="btnOpenAddExtraModal" style="font-weight: 800; background: white;">
          + Add Unscheduled / Extra Delivered Item
        </button>
      </div>
    </div>

    <!-- Receiving Table (Desktop & Tablet) -->
    <div class="content-card" style="margin-bottom: 24px;">
      <div class="card-header" style="background: var(--md-surface-subtle); border-bottom: 1px solid var(--md-border);">
        <div class="card-header-left">
          ${icon('receiving', 'icon')}
          <div>
            <h3 class="card-title">${branch.name} — Incoming Crates Checklist</h3>
            <span class="card-subtitle">Adjust received counts with [+] or [-] or type numbers directly. System calculates more/less automatically.</span>
          </div>
        </div>
        <span class="pill pill-unit" style="font-weight: 800;">${allItems.length} Products</span>
      </div>

      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table" id="receivingVerificationTable">
            <thead>
              <tr>
                <th style="width: 8%; text-align: center;">S.NO</th>
                <th style="width: 28%;">PRODUCT / ITEM</th>
                <th style="width: 15%;">ORDERED (EXPECTED)</th>
                <th style="width: 25%;">STOCK RECEIVED (UNLOADED)</th>
                <th style="width: 15%;">VARIANCE / STATUS</th>
                <th style="width: 9%; text-align: center;">ACTION</th>
              </tr>
            </thead>
            <tbody>
              ${receivingRows.length === 0 ? `
                <tr>
                  <td colspan="6" style="text-align: center; padding: 48px 20px;">
                    <div style="font-size: 2.2rem; margin-bottom: 8px;">📦</div>
                    <div style="font-weight: 800; font-size: 1.05rem; color: var(--md-secondary-dark);">
                      No Scheduled Deliveries for ${branch.name} in this Dispatch
                    </div>
                    <div style="font-size: 0.85rem; color: var(--md-text-muted); margin-top: 4px;">
                      0 crates were ordered for ${branch.name} in this Daily Stock Check manifest.
                    </div>
                  </td>
                </tr>
              ` : receivingRows.map((row, idx) => {
                const seqNo = store.getBranchItemSerialNo ? store.getBranchItemSerialNo(currentBranchId, row.productId, idx) : (idx + 1);
                let diffBadge = '';
                if (row.difference < 0) {
                  diffBadge = `
                    <div style="display: flex; flex-direction: column; gap: 2px;">
                      <span class="pill" style="background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; font-weight: 800; font-size: 0.82rem;">
                        ▼ ${row.difference} ${row.unit} (LESS)
                      </span>
                      <span style="font-size: 0.7rem; color: #DC2626; font-weight: 700;">Shortage / Deficit</span>
                    </div>
                  `;
                } else if (row.difference > 0) {
                  diffBadge = `
                    <div style="display: flex; flex-direction: column; gap: 2px;">
                      <span class="pill" style="background: #DBEAFE; color: #1D4ED8; border: 1px solid #93C5FD; font-weight: 800; font-size: 0.82rem;">
                        ▲ +${row.difference} ${row.unit} (MORE)
                      </span>
                      <span style="font-size: 0.7rem; color: #1D4ED8; font-weight: 700;">Surplus / Extra</span>
                    </div>
                  `;
                } else {
                  diffBadge = `
                    <div style="display: flex; flex-direction: column; gap: 2px;">
                      <span class="pill" style="background: #E8F6ED; color: #0D8244; border: 1px solid #A7E0BE; font-weight: 800; font-size: 0.82rem;">
                        ✓ Exact (0)
                      </span>
                      <span style="font-size: 0.7rem; color: #0D8244; font-weight: 600;">Matched Order</span>
                    </div>
                  `;
                }

                return `
                  <tr data-product-id="${row.productId}" class="${row.difference !== 0 ? 'receiving-variance-row' : ''}">
                    <td>
                      <div class="product-cell">
                        <div class="product-avatar">${row.image}</div>
                        <div class="product-info-text">
                          <span class="product-name-text">${(currentBranchId === "BR002" || currentBranchId === "BR003" || currentBranchId === "BR004") && store.getBranchItemSequenceIndex(currentBranchId, row.productId) < 999 ? `<span class="pill" style="background: #E0F2FE; color: #0369A1; font-size: 0.68rem; font-weight: 800; padding: 1px 6px; margin-right: 6px; border: 1px solid #BAE6FD;" title="Kodihalli Receiving Sequence #${store.getBranchItemSequenceIndex(currentBranchId, row.productId) + 1}">#${store.getBranchItemSequenceIndex(currentBranchId, row.productId) + 1}</span>` : ""}${row.productName}</span>
                          <span class="product-sub-sku">${row.sku} &bull; ${row.category}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div style="display: flex; align-items: baseline; gap: 6px;">
                        <span style="font-size: 1.25rem; font-weight: 900; color: var(--md-secondary-dark);">${row.ordered}</span>
                        <span style="font-size: 0.82rem; font-weight: 800; color: var(--md-text-secondary);">${row.unit}</span>
                      </div>
                      ${row.ordered === 0 ? '<span style="font-size: 0.7rem; color: var(--md-text-muted);">(Unscheduled extra)</span>' : ''}
                    </td>

                    <td>
                      <!-- Stepper and Numeric Input -->
                      <div style="display: flex; align-items: center; gap: 6px;">
                        <button 
                          type="button" 
                          class="btn-recv-step-minus" 
                          data-product-id="${row.productId}"
                          style="width: 32px; height: 38px; border-radius: var(--radius-sm); border: 1.5px solid var(--md-border); background: white; font-weight: 800; font-size: 1.1rem; cursor: pointer;"
                        >-</button>

                        <div class="fast-qty-wrapper ${row.received > 0 ? 'has-value' : ''}" style="width: 120px;">
                          <input 
                            type="number" 
                            min="0" 
                            max="9999"
                            step="1"
                            class="fast-qty-input receiving-stepper-input" 
                            data-product-id="${row.productId}" 
                            value="${row.received}"
                            aria-label="Stock received for ${row.productName}"
                          />
                          <span class="fast-qty-unit">${row.unit}</span>
                        </div>

                        <button 
                          type="button" 
                          class="btn-recv-step-plus" 
                          data-product-id="${row.productId}"
                          style="width: 32px; height: 38px; border-radius: var(--radius-sm); border: 1.5px solid var(--md-border); background: white; font-weight: 800; font-size: 1.1rem; cursor: pointer;"
                        >+</button>
                      </div>
                    </td>

                    <td>
                      ${diffBadge}
                    </td>

                    <td style="text-align: center;">
                      <button 
                        class="btn btn-secondary btn-sm btn-match-expected" 
                        data-product-id="${row.productId}"
                        data-expected="${row.ordered}"
                        title="Set received to expected (${row.ordered})"
                        style="font-size: 0.75rem; padding: 4px 8px; font-weight: 700;"
                      >
                        = Match
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

    <!-- Confirm Unloading Footer Bar -->
    <div style="background: white; border: 1.5px solid var(--md-border); border-radius: var(--radius-lg); padding: 22px 26px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; box-shadow: var(--shadow-sm);">
      <div>
        <div style="font-weight: 900; font-size: 1.15rem; color: var(--md-secondary-dark);">
          Complete Morning Unloading for ${branch.name}
        </div>
        <div style="font-size: 0.85rem; color: var(--md-text-secondary); margin-top: 2px;">
          Confirming will register Goods Inward Note (GRN), credit branch stock, and record any shortages or surplus to APMC vendor accounts.
        </div>
      </div>

      <button class="btn btn-primary btn-lg" id="btnConfirmMorningReceiving" style="font-weight: 900; padding: 14px 28px; font-size: 1rem;">
        ${icon('check', 'icon-sm')} Confirm Unloading & Inward Stock →
      </button>
    </div>

    <!-- Add Extra / Unscheduled Item Modal -->
    <div id="addExtraItemModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 480px;">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">Add Extra Delivered Item</h3>
            <span style="font-size: 0.76rem; color: var(--md-text-muted);">
              For unexpected crates or products delivered by the truck for ${branch.name}
            </span>
          </div>
          <button id="btnCloseExtraModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <form id="addExtraItemForm">
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
            <div>
              <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Select Product Delivered *</label>
              <select id="extraSelectProduct" style="width: 100%; padding: 10px 12px; border: 1.5px solid var(--md-border-strong); border-radius: var(--radius-md); font-weight: 700; font-size: 0.95rem; outline: none;">
                ${store.products.map(p => `
                  <option value="${p.id}" data-name="${p.name}" data-unit="${p.unit}" data-sku="${p.sku}" data-cat="${p.category}" data-img="${p.image}">
                    ${p.name} (${p.unit}) &bull; ${p.sku}
                  </option>
                `).join('')}
              </select>
            </div>

            <div>
              <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Delivered Quantity Unloaded *</label>
              <input type="number" id="extraReceivedQty" min="1" max="999" value="5" required style="width: 100%; padding: 10px 12px; border: 1.5px solid var(--md-primary); border-radius: var(--radius-md); font-size: 1.1rem; font-weight: 800; outline: none;" />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="btnCancelExtraModal">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 800; padding: 10px 20px;">
              ${icon('check', 'icon-sm')} Add to Unloading Sheet
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Unloading Success / GRN Confirmation Modal -->
    <div id="unloadingSuccessModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 520px; text-align: center;">
        <div class="modal-body" style="padding: 34px 28px;">
          <div style="width: 64px; height: 64px; background: #E8F6ED; color: #0D8244; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            ${icon('check', 'icon-lg')}
          </div>
          <h3 style="font-size: 1.4rem; font-weight: 900; color: var(--md-secondary-dark); margin-bottom: 6px;">
            Stock Unloading Verified & Inwarded
          </h3>
          <p style="font-size: 0.86rem; color: var(--md-text-secondary); margin-bottom: 18px;" id="grnModalSubtitle">
            Physical receiving registered with status: <strong>VARIANCE RECORDED</strong>
          </p>

          <div style="background: var(--md-surface-subtle); border: 1.5px dashed var(--md-primary-light-border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 22px; text-align: left;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--md-text-muted); text-transform: uppercase;">OFFICIAL GRN NUMBER</span>
              <span id="grnRefCode" style="font-family: monospace; font-weight: 900; color: var(--md-primary); font-size: 1rem;">GRN-20261023-0001</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 4px;">
              <span style="color: var(--md-text-secondary);">Branch:</span>
              <strong id="grnBranchName">${branch.name}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 4px;">
              <span style="color: var(--md-text-secondary);">Total Received:</span>
              <strong id="grnTotalReceived" style="color: #0D8244;">${totalReceivedUnits} Units</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem;">
              <span style="color: var(--md-text-secondary);">Discrepancy Breakdown:</span>
              <span id="grnVarianceBreakdown" style="font-weight: 700;">
                ${shortageItemsCount} Short &bull; ${surplusItemsCount} Extra
              </span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button class="btn btn-secondary btn-lg" id="btnDownloadGRNPdf" style="width: 100%; font-weight: 800; border: 1.5px solid #A7E0BE; background: #EBF8F1; color: #064E3B;">
              📄 Download Goods Inward & Variance Note (PDF)
            </button>
            <button class="btn btn-primary btn-lg" id="btnDoneReceiving" style="width: 100%; font-weight: 800;">
              Done &bull; Continue Operations
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupReceivingEvents() {
  const currentBranchId = selectedBranchId || store.currentBranchId || 'BR001';

  // 1. Branch Switcher Tabs
  document.querySelectorAll('.receiving-branch-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const bId = e.currentTarget.getAttribute('data-branch-id');
      selectedBranchId = bId;
      store.setBranch(bId);
      store.notify();
    });
  });

  // 2. Dispatch PO Selector
  const poSelect = document.getElementById('receivingDispatchSelect');
  if (poSelect) {
    poSelect.addEventListener('change', (e) => {
      selectedPOId = e.target.value;
      store.notify();
    });
  }

  // 3. Receive All Exact button
  const btnReceiveAll = document.getElementById('btnReceiveAllExact');
  if (btnReceiveAll) {
    btnReceiveAll.addEventListener('click', () => {
      if (!store.receivingDrafts[currentBranchId]) {
        store.receivingDrafts[currentBranchId] = {};
      }
      const incoming = store.getBranchIncomingOrder(currentBranchId, selectedPOId);
      incoming.forEach(it => {
        store.receivingDrafts[currentBranchId][it.productId] = it.orderedQty;
      });
      store.notify();
      showToast('All items set to match ordered quantities exactly!', 'success');
    });
  }

  // 4. Clear All Received Counts button
  const btnClearAll = document.getElementById('btnClearAllReceived');
  if (btnClearAll) {
    btnClearAll.addEventListener('click', () => {
      if (!store.receivingDrafts[currentBranchId]) {
        store.receivingDrafts[currentBranchId] = {};
      }
      const incoming = store.getBranchIncomingOrder(currentBranchId, selectedPOId);
      incoming.forEach(it => {
        store.receivingDrafts[currentBranchId][it.productId] = 0;
      });
      store.notify();
      showToast('All received quantities cleared to 0.', 'warning');
    });
  }

  // 5. Input Stepper [+] and [-] buttons
  document.querySelectorAll('.btn-recv-step-minus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pId = e.currentTarget.getAttribute('data-product-id');
      const input = document.querySelector(`.receiving-stepper-input[data-product-id="${pId}"]`);
      if (input) {
        const cur = Math.max(0, (parseInt(input.value, 10) || 0) - 1);
        input.value = cur;
        if (!store.receivingDrafts[currentBranchId]) store.receivingDrafts[currentBranchId] = {};
        store.receivingDrafts[currentBranchId][pId] = cur;
        store.notify();
      }
    });
  });

  document.querySelectorAll('.btn-recv-step-plus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pId = e.currentTarget.getAttribute('data-product-id');
      const input = document.querySelector(`.receiving-stepper-input[data-product-id="${pId}"]`);
      if (input) {
        const cur = (parseInt(input.value, 10) || 0) + 1;
        input.value = cur;
        if (!store.receivingDrafts[currentBranchId]) store.receivingDrafts[currentBranchId] = {};
        store.receivingDrafts[currentBranchId][pId] = cur;
        store.notify();
      }
    });
  });

  // 6. Direct Input Changes
  document.querySelectorAll('.receiving-stepper-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const pId = e.currentTarget.getAttribute('data-product-id');
      const val = Math.max(0, parseInt(e.currentTarget.value, 10) || 0);
      if (!store.receivingDrafts[currentBranchId]) store.receivingDrafts[currentBranchId] = {};
      store.receivingDrafts[currentBranchId][pId] = val;
      store.notify();
    });
    input.addEventListener('focus', (e) => e.target.select());
  });

  // 7. Individual Match Expected Button
  document.querySelectorAll('.btn-match-expected').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pId = e.currentTarget.getAttribute('data-product-id');
      const expected = parseInt(e.currentTarget.getAttribute('data-expected'), 10) || 0;
      if (!store.receivingDrafts[currentBranchId]) store.receivingDrafts[currentBranchId] = {};
      store.receivingDrafts[currentBranchId][pId] = expected;
      store.notify();
    });
  });

  // 8. Add Extra Item Modal events
  const extraModal = document.getElementById('addExtraItemModalBackdrop');
  const btnOpenExtra = document.getElementById('btnOpenAddExtraModal');
  const btnCloseExtra = document.getElementById('btnCloseExtraModal');
  const btnCancelExtra = document.getElementById('btnCancelExtraModal');
  const extraForm = document.getElementById('addExtraItemForm');

  if (btnOpenExtra) {
    btnOpenExtra.addEventListener('click', () => {
      if (extraModal) extraModal.classList.add('open');
    });
  }
  if (btnCloseExtra) {
    btnCloseExtra.addEventListener('click', () => {
      if (extraModal) extraModal.classList.remove('open');
    });
  }
  if (btnCancelExtra) {
    btnCancelExtra.addEventListener('click', () => {
      if (extraModal) extraModal.classList.remove('open');
    });
  }

  if (extraForm) {
    extraForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const select = document.getElementById('extraSelectProduct');
      const opt = select.options[select.selectedIndex];
      const pId = select.value;
      const qty = parseInt(document.getElementById('extraReceivedQty').value, 10) || 1;

      if (!extraItemsMap[currentBranchId]) extraItemsMap[currentBranchId] = [];
      extraItemsMap[currentBranchId].push({
        productId: pId,
        productName: opt.getAttribute('data-name'),
        sku: opt.getAttribute('data-sku'),
        image: opt.getAttribute('data-img'),
        category: opt.getAttribute('data-cat'),
        unit: opt.getAttribute('data-unit')
      });

      if (!store.receivingDrafts[currentBranchId]) store.receivingDrafts[currentBranchId] = {};
      store.receivingDrafts[currentBranchId][pId] = qty;

      if (extraModal) extraModal.classList.remove('open');
      store.notify();
      showToast(`Added ${opt.getAttribute('data-name')} (${qty} ${opt.getAttribute('data-unit')}) to unloading sheet.`, 'info');
    });
  }

  // 9. Confirm Morning Receiving Button
  let latestReport = null;
  const btnConfirmReceiving = document.getElementById('btnConfirmMorningReceiving');
  const successModal = document.getElementById('unloadingSuccessModalBackdrop');
  const grnRefCode = document.getElementById('grnRefCode');
  const grnModalSubtitle = document.getElementById('grnModalSubtitle');
  const grnBranchName = document.getElementById('grnBranchName');
  const grnTotalReceived = document.getElementById('grnTotalReceived');
  const grnVarianceBreakdown = document.getElementById('grnVarianceBreakdown');

  if (btnConfirmReceiving) {
    btnConfirmReceiving.addEventListener('click', () => {
      const draftMap = store.receivingDrafts[currentBranchId] || {};
      const extras = extraItemsMap[currentBranchId] || [];
      const res = store.receiveBranchStock(selectedPOId, currentBranchId, draftMap, extras);

      if (res && res.success) {
        latestReport = res.report;
        if (grnRefCode) grnRefCode.textContent = res.report.grn;
        if (grnBranchName) grnBranchName.textContent = res.report.branchName;
        if (grnTotalReceived) grnTotalReceived.textContent = `${res.report.totalReceived} Units`;
        if (grnVarianceBreakdown) {
          grnVarianceBreakdown.textContent = `${res.report.shortageCount} Shortages &bull; ${res.report.surplusCount} Surplus Items`;
        }
        if (grnModalSubtitle) {
          grnModalSubtitle.innerHTML = `Physical receiving registered with status: <strong>${res.report.status}</strong>`;
        }
        if (successModal) successModal.classList.add('open');
        showToast(`Stock inward confirmed for ${res.report.branchName}!`, 'success');
      }
    });
  }

  // 10. Download GRN PDF Button
  const btnDlGrn = document.getElementById('btnDownloadGRNPdf');
  if (btnDlGrn) {
    btnDlGrn.addEventListener('click', () => {
      if (latestReport) {
        const blob = generateGoodsReceivingPDF(latestReport);
        downloadBlob(blob, `MD_Fresh_${latestReport.grn}_${latestReport.branchCode}.pdf`);
        showToast('Goods Inward & Variance Note PDF downloaded!', 'success');
      }
    });
  }

  // 11. Done Button
  const btnDone = document.getElementById('btnDoneReceiving');
  if (btnDone) {
    btnDone.addEventListener('click', () => {
      if (successModal) successModal.classList.remove('open');
      store.notify();
    });
  }
}
