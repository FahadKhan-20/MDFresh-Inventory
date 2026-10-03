// Requirements View Component for MD Fresh
// Multi-Branch Requirements Master Table (Proper Tabular Form across all 4 branches)
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';
import { generateMasterManifestPDF, downloadBlob } from '../utils/pdfGenerator.js';

let reqViewMode = 'matrix'; // 'matrix' (default tabular form) or 'cards'
let matrixMobileLayout = 'cards'; // 'cards' (mobile cards grid) or 'table' (swipeable table)
let matrixSearchQuery = '';
let matrixCategoryFilter = 'All'; // 'All', 'Fruits', 'Vegetables'
let matrixOnlyWithDemand = true; // default: show only items requiring purchase
let reqFilterBranch = 'All';
let reqFilterStatus = 'All';

export function renderRequirementsView() {
  const branches = store.branches; // ANNASANDRAPALYA, KODIHALLI, LBS NAGAR, BASAVANAGAR
  const rawMatrix = store.getCombinedRequirementsMatrix(false);

  // Filter matrix based on user controls
  let filteredMatrix = rawMatrix.filter(row => {
    // Search filter
    if (matrixSearchQuery.trim() !== '') {
      const q = matrixSearchQuery.toLowerCase();
      const match = row.product.name.toLowerCase().includes(q) ||
                    row.product.sku.toLowerCase().includes(q) ||
                    (row.product.originalPluName && row.product.originalPluName.toLowerCase().includes(q)) ||
                    (row.product.variety && row.product.variety.toLowerCase().includes(q));
      if (!match) return false;
    }
    // Category filter
    if (matrixCategoryFilter !== 'All' && row.product.category !== matrixCategoryFilter) {
      return false;
    }
    // Only items with demand (> 0)
    if (matrixOnlyWithDemand && row.totalQty <= 0) {
      return false;
    }
    return true;
  });

  // Calculate totals across columns
  let totalGrandUnits = 0;
  let totalGrandCost = 0;
  const branchTotals = {
    BR001: 0,
    BR002: 0,
    BR003: 0,
    BR004: 0
  };

  filteredMatrix.forEach(row => {
    totalGrandUnits += row.totalQty;
    totalGrandCost += row.totalEstimatedCost;
    branches.forEach(b => {
      branchTotals[b.id] += (row.branches[b.id] || 0);
    });
  });

  const totalDemandProductsCount = rawMatrix.filter(r => r.totalQty > 0).length;

  // Filtered requirements cards for secondary view
  let filteredCards = store.requirements.filter(req => {
    if (reqFilterBranch !== 'All' && req.branchId !== reqFilterBranch) return false;
    if (reqFilterStatus !== 'All' && req.status !== reqFilterStatus) return false;
    return true;
  });

  return `
    <!-- Top Header -->
    <div class="req-header-wrapper">
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
          <span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--md-secondary-forest); background-color: #E2EFE7; padding: 2px 8px; border-radius: var(--radius-pill);">
            4 RETAIL BRANCHES CONSOLIDATED
          </span>
          <span class="req-branch-subtitle" style="font-size: 0.76rem; color: var(--md-text-muted);">ANNASANDRAPALYA • KODIHALLI • LBS NAGAR • BASAVANAGAR</span>
        </div>
        <h1 class="req-title" style="font-size: 1.6rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Branch Stock Requirements
        </h1>
        <p class="req-subtitle" style="font-size: 0.88rem; color: var(--md-text-muted);">
          Master tabular breakdown of daily stock demand across all 4 branches with unified APMC purchase totals.
        </p>
      </div>

      <!-- Action Buttons & PDF Download (Optional) -->
      <div class="req-action-buttons">
        <button class="btn btn-secondary req-btn-action" id="btnDownloadReqPdf" style="font-weight: 800; border: 1.5px solid #B7E4C4; background: #E8F6ED; color: #0D8244;" title="Download local PDF manifest for phone or PC">
          📥 Download PDF (Optional)
        </button>
        <button class="btn btn-outline-secondary req-btn-action" id="btnPrintMatrixBtn" style="font-weight: 700; background: white;" title="Print clean tabular view">
          🖨️ Print View
        </button>
        <button class="btn btn-primary req-btn-action req-btn-primary" id="btnGoToProcurementFromReq" style="font-weight: 800;">
          ${icon('procurement', 'icon-sm')} Consolidate in Mandi →
        </button>
      </div>
    </div>

    <!-- 4 Branch Quick Metrics Summary Bar -->
    <div class="req-summary-grid">
      <div class="req-summary-card">
        <div>
          <span class="req-summary-branch-name">1. ANNASANDRAPALYA</span>
          <div class="req-summary-qty">
            ${branchTotals.BR001} <span class="req-summary-unit">units</span>
          </div>
        </div>
        <span class="pill pill-unit" style="font-size: 0.72rem; font-weight: 800;">BR-ASP</span>
      </div>

      <div class="req-summary-card">
        <div>
          <span class="req-summary-branch-name">2. KODIHALLI</span>
          <div class="req-summary-qty">
            ${branchTotals.BR002} <span class="req-summary-unit">units</span>
          </div>
        </div>
        <span class="pill pill-unit" style="font-size: 0.72rem; font-weight: 800;">BR-KDH</span>
      </div>

      <div class="req-summary-card">
        <div>
          <span class="req-summary-branch-name">3. LBS NAGAR</span>
          <div class="req-summary-qty">
            ${branchTotals.BR003} <span class="req-summary-unit">units</span>
          </div>
        </div>
        <span class="pill pill-unit" style="font-size: 0.72rem; font-weight: 800;">BR-LBS</span>
      </div>

      <div class="req-summary-card">
        <div>
          <span class="req-summary-branch-name">4. BASAVANAGAR</span>
          <div class="req-summary-qty">
            ${branchTotals.BR004} <span class="req-summary-unit">units</span>
          </div>
        </div>
        <span class="pill pill-unit" style="font-size: 0.72rem; font-weight: 800;">BR-BSV</span>
      </div>

      <div class="req-summary-card req-grand-total-card">
        <div>
          <span class="req-summary-branch-name" style="color: #0D8244; font-weight: 800;">GRAND TOTAL TO BUY</span>
          <div class="req-summary-qty" style="color: #0D8244;">
            ${totalGrandUnits} <span class="req-summary-unit" style="color: #0D8244; font-weight: 800;">TOTAL UNITS</span>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.72rem; color: var(--md-text-muted);">Est. Value</div>
          <div style="font-size: 0.95rem; font-weight: 800; color: var(--md-secondary-dark);">₹${totalGrandCost.toLocaleString('en-IN')}</div>
        </div>
      </div>
    </div>

    <!-- View Mode Switcher & Filter Bar -->
    <div class="filter-bar req-filter-bar">
      <div class="req-filter-left">
        <!-- View Toggle: Tabular Matrix vs Cards -->
        <div class="matrix-view-toggle-group">
          <button class="matrix-view-toggle-btn ${reqViewMode === 'matrix' ? 'active' : ''}" id="btnViewModeMatrix">
            ${icon('layers', 'icon-sm')} All Branches Matrix Table
          </button>
          <button class="matrix-view-toggle-btn ${reqViewMode === 'cards' ? 'active' : ''}" id="btnViewModeCards">
            📋 Branch Manifest Cards
          </button>
        </div>

        ${reqViewMode === 'matrix' ? `
          <!-- Search Input -->
          <div class="search-input-group matrix-search-group">
            ${icon('search', 'icon-sm')}
            <input 
              type="text" 
              id="matrixSearchInput" 
              placeholder="Search Apple, Mango, Tomato..." 
              value="${escapeHtml(matrixSearchQuery)}"
              style="font-size: 0.85rem;"
            />
            ${matrixSearchQuery ? `<button id="clearMatrixSearchBtn" style="border:none; background:none; cursor:pointer; color:var(--md-text-muted);">${icon('x', 'icon-sm')}</button>` : ''}
          </div>

          <!-- Category Tabs -->
          <div class="filter-tabs">
            <button class="filter-tab ${matrixCategoryFilter === 'All' ? 'active' : ''}" data-cat="All">All</button>
            <button class="filter-tab ${matrixCategoryFilter === 'Fruits' ? 'active' : ''}" data-cat="Fruits">Fruits</button>
            <button class="filter-tab ${matrixCategoryFilter === 'Vegetables' ? 'active' : ''}" data-cat="Vegetables">Vegetables</button>
            <button class="filter-tab ${matrixCategoryFilter === 'Dairy & Others' ? 'active' : ''}" data-cat="Dairy & Others">Dairy & Others</button>
          </div>

          <!-- Toggle: Only with Demand -->
          <label class="matrix-demand-toggle-label">
            <input type="checkbox" id="chkOnlyWithDemand" ${matrixOnlyWithDemand ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px; accent-color: var(--md-primary);" />
            Show Only Items with Demand (${totalDemandProductsCount})
          </label>
        ` : `
          <!-- Branch Filter for Cards -->
          <div class="control-chip" style="background: white;">
            <span>Branch:</span>
            <select id="reqBranchSelect" class="branch-select">
              <option value="All" ${reqFilterBranch === 'All' ? 'selected' : ''}>All Branches</option>
              ${store.branches.map(b => `<option value="${b.id}" ${reqFilterBranch === b.id ? 'selected' : ''}>${b.name}</option>`).join('')}
            </select>
          </div>

          <!-- Status Filter for Cards -->
          <div class="control-chip" style="background: white;">
            <span>Status:</span>
            <select id="reqStatusSelect" class="branch-select">
              <option value="All" ${reqFilterStatus === 'All' ? 'selected' : ''}>All Statuses</option>
              <option value="PENDING APPROVAL" ${reqFilterStatus === 'PENDING APPROVAL' ? 'selected' : ''}>PENDING APPROVAL</option>
              <option value="APPROVED" ${reqFilterStatus === 'APPROVED' ? 'selected' : ''}>APPROVED</option>
              <option value="REJECTED" ${reqFilterStatus === 'REJECTED' ? 'selected' : ''}>REJECTED</option>
            </select>
          </div>
        `}
      </div>

      <div class="req-filter-count">
        ${reqViewMode === 'matrix' ? `Showing ${filteredMatrix.length} products` : `Showing ${filteredCards.length} requirement manifests`}
      </div>
    </div>

    <!-- MAIN VIEW CONTENT -->
    ${reqViewMode === 'matrix' ? `
      <!-- Live Real-Time Tracking Header for the Table -->
      <div class="matrix-live-header">
        <div class="matrix-live-title">
          <span class="live-pulse-dot" title="Live Clock & Sync Active"></span>
          <span class="matrix-live-title-text">
            LIVE BRANCH REQUIREMENTS MATRIX
          </span>
          <span class="matrix-live-divider">|</span>
          <span class="matrix-live-clock-label">Real-Time Clock:</span>
          <span class="live-clock-display matrix-live-clock-val">
            ${store.getLiveDateTimeString(new Date(), true)}
          </span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="matrix-recorded-badge" title="Timestamp of last recorded stock check change">
            ⏱️ Last Demand Recorded: <strong style="color: var(--md-primary); margin-left: 4px;">${store.getMatrixRecordedTimestampString()}</strong>
          </span>
        </div>
      </div>

      <!-- Mobile Layout Switcher: Cards vs Table -->
      <div class="matrix-mobile-view-toggle">
        <span class="matrix-toggle-label">Mobile Display:</span>
        <div class="matrix-toggle-btns">
          <button class="matrix-mode-btn ${matrixMobileLayout === 'cards' ? 'active' : ''}" id="btnMatrixMobileCardsMode" title="Card breakdown showing all 4 retail branches without horizontal swiping">
            📱 Mobile Cards (No Swipe)
          </button>
          <button class="matrix-mode-btn ${matrixMobileLayout === 'table' ? 'active' : ''}" id="btnMatrixMobileTableMode" title="Spreadsheet matrix table with horizontal swipe">
            📊 Full Table (Swipe)
          </button>
        </div>
      </div>

      <!-- 1. MOBILE MATRIX CARDS VIEW (DEFAULT ON MOBILE) -->
      <div class="mobile-matrix-cards ${matrixMobileLayout === 'table' ? 'force-hide' : ''}">
        ${filteredMatrix.length === 0 ? `
          <div style="text-align: center; padding: 48px 16px; background: white; border-radius: var(--radius-lg); border: 1px solid var(--md-border); margin-top: 10px;">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">🔍</div>
            <div style="font-weight: 800; font-size: 1.05rem; color: var(--md-text-main);">No matching requirements found</div>
            <div style="font-size: 0.82rem; color: var(--md-text-muted); margin-top: 4px;">Try unchecking "Show Only Items with Demand" or clear the search query.</div>
          </div>
        ` : `
          <div class="matrix-cards-list">
            ${filteredMatrix.map((row, idx) => {
              const p = row.product;
              const q1 = row.branches['BR001'] || 0;
              const q2 = row.branches['BR002'] || 0;
              const q3 = row.branches['BR003'] || 0;
              const q4 = row.branches['BR004'] || 0;
              const hasDemand = row.totalQty > 0;

              return `
                <div class="mobile-matrix-card ${hasDemand ? 'has-demand' : ''}" data-product-id="${p.id}">
                  <!-- Top Row: SL No, Product Image, Name, PLU, SKU, Unit & Grand Total -->
                  <div class="mobile-matrix-header">
                    <div class="mobile-matrix-prod-meta">
                      <span class="mobile-matrix-sl">${idx + 1}</span>
                      <span class="mobile-matrix-icon">${p.image}</span>
                      <div class="mobile-matrix-title-wrap">
                        <div class="mobile-matrix-name">${p.name}</div>
                        <div class="mobile-matrix-sub">
                          ${p.originalPluName ? `<span class="mobile-matrix-plu">${p.originalPluName}</span>` : ''}
                          <span class="mobile-matrix-sku">${p.sku}</span>
                          <span class="mobile-matrix-unit">${p.unit}</span>
                        </div>
                      </div>
                    </div>
                    <div class="mobile-matrix-total-badge ${hasDemand ? 'active' : 'empty'}">
                      <span class="mobile-matrix-total-label">TOTAL</span>
                      <span class="mobile-matrix-total-val">${row.totalQty} <small>${p.unit}</small></span>
                    </div>
                  </div>

                  <!-- 4 Branches Matrix Breakdown Grid (fits 100% on 360px phones without swiping!) -->
                  <div class="mobile-matrix-branch-grid">
                    <div class="mobile-matrix-branch-tile ${q1 > 0 ? 'demand-active' : ''}">
                      <div class="b-code">ASP</div>
                      <div class="b-name">ANNASANDRAPALYA</div>
                      <div class="b-qty">${q1 > 0 ? q1 : '-'}</div>
                      <div class="b-unit">${p.unit}</div>
                    </div>
                    <div class="mobile-matrix-branch-tile ${q2 > 0 ? 'demand-active' : ''}">
                      <div class="b-code">KDH</div>
                      <div class="b-name">KODIHALLI</div>
                      <div class="b-qty">${q2 > 0 ? q2 : '-'}</div>
                      <div class="b-unit">${p.unit}</div>
                    </div>
                    <div class="mobile-matrix-branch-tile ${q3 > 0 ? 'demand-active' : ''}">
                      <div class="b-code">LBS</div>
                      <div class="b-name">LBS NAGAR</div>
                      <div class="b-qty">${q3 > 0 ? q3 : '-'}</div>
                      <div class="b-unit">${p.unit}</div>
                    </div>
                    <div class="mobile-matrix-branch-tile ${q4 > 0 ? 'demand-active' : ''}">
                      <div class="b-code">BSV</div>
                      <div class="b-name">BASAVANAGAR</div>
                      <div class="b-qty">${q4 > 0 ? q4 : '-'}</div>
                      <div class="b-unit">${p.unit}</div>
                    </div>
                  </div>

                  <!-- Footer summary if demand exists -->
                  ${hasDemand ? `
                    <div class="mobile-matrix-card-footer">
                      <span>Est. Value: <strong>₹${row.totalEstimatedCost.toLocaleString('en-IN')}</strong></span>
                      <span>Wholesale Rate: ₹${p.costPrice}/${p.unit}</span>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}

            <!-- Mobile Summary Grand Total Footer Card -->
            <div class="mobile-matrix-grand-summary">
              <div style="font-size: 0.74rem; font-weight: 800; color: #0D8244; text-transform: uppercase; letter-spacing: 0.05em;">
                MASTER REQUIREMENTS GRAND TOTAL
              </div>
              <div style="font-size: 1.6rem; font-weight: 900; color: #0D8244; margin: 4px 0;">
                ${totalGrandUnits} TOTAL UNITS
              </div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--md-secondary-dark);">
                Est. APMC Wholesale Cost: ₹${totalGrandCost.toLocaleString('en-IN')}
              </div>
              <div style="font-size: 0.74rem; color: var(--md-text-muted); margin-top: 4px;">
                Consolidated across 4 retail branches (${filteredMatrix.length} products listed)
              </div>
            </div>
          </div>
        `}
      </div>

      <!-- 2. FULL TABULAR FORM CONTAINER (DESKTOP & SWIPEABLE TABLE) -->
      <div class="matrix-table-wrapper-outer ${matrixMobileLayout === 'cards' ? 'mobile-hide' : ''}">
        <!-- Mobile Scroll Cue -->
        <div class="matrix-mobile-scroll-cue">
          <span>↔ Swipe table horizontally to view all 4 retail branch columns & unified total</span>
        </div>

        <div class="matrix-table-container">
          <table class="matrix-table" id="masterRequirementsTable">
            <thead>
              <tr>
                <th style="width: 50px; text-align: center;">SL NO</th>
                <th style="width: 260px;">ITEM / PRODUCT</th>
                <th style="width: 100px; text-align: center;">UNIT</th>
                <th class="matrix-th-branch" style="width: 140px;">
                  <div>1. ANNASANDRAPALYA</div>
                  <div style="font-size: 0.66rem; font-weight: 600; opacity: 0.85;">BR-ASP &bull; Sync: ${store.getBranchLastRecordedString('BR001')}</div>
                </th>
                <th class="matrix-th-branch" style="width: 140px;">
                  <div>2. KODIHALLI</div>
                  <div style="font-size: 0.66rem; font-weight: 600; opacity: 0.85;">BR-KDH &bull; Sync: ${store.getBranchLastRecordedString('BR002')}</div>
                </th>
                <th class="matrix-th-branch" style="width: 140px;">
                  <div>3. LBS NAGAR</div>
                  <div style="font-size: 0.66rem; font-weight: 600; opacity: 0.85;">BR-LBS &bull; Sync: ${store.getBranchLastRecordedString('BR003')}</div>
                </th>
                <th class="matrix-th-branch" style="width: 140px;">
                  <div>4. BASAVANAGAR</div>
                  <div style="font-size: 0.66rem; font-weight: 600; opacity: 0.85;">BR-BSV &bull; Sync: ${store.getBranchLastRecordedString('BR004')}</div>
                </th>
                <th class="matrix-th-total" style="width: 180px;">
                  <div>TOTAL REQUIREMENT</div>
                  <div style="font-size: 0.68rem; font-weight: 700; color: #0D8244;">(GRAND TOTAL TO BUY)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              ${filteredMatrix.length === 0 ? `
                <tr>
                  <td colspan="8" style="text-align: center; padding: 48px; color: var(--md-text-muted);">
                    <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
                    <div style="font-weight: 800; font-size: 1.05rem; color: var(--md-text-main);">No matching requirements found</div>
                    <div style="font-size: 0.82rem; margin-top: 4px;">Try unchecking "Show Only Items with Demand" or clear the search query.</div>
                  </td>
                </tr>
              ` : filteredMatrix.map((row, idx) => {
                const p = row.product;
                const q1 = row.branches['BR001'] || 0;
                const q2 = row.branches['BR002'] || 0;
                const q3 = row.branches['BR003'] || 0;
                const q4 = row.branches['BR004'] || 0;

                return `
                  <tr class="${row.totalQty > 0 ? 'matrix-row-highlight' : ''}" data-product-id="${p.id}">
                    <!-- SL NO -->
                    <td style="text-align: center; font-weight: 800; color: var(--md-text-muted); font-size: 0.95rem;">
                      ${idx + 1}
                    </td>

                    <!-- ITEM / PRODUCT -->
                    <td class="matrix-sticky-col">
                      <div class="matrix-product-cell">
                        <div class="matrix-product-icon">${p.image}</div>
                        <div class="matrix-product-info">
                          <div class="matrix-product-name">${p.name}</div>
                          <div class="matrix-product-sub">
                            ${p.originalPluName ? `<span style="font-weight: 700; color: #0D8244; background: #EAF5EE; padding: 1px 4px; border-radius: 3px; font-size: 0.68rem; margin-right: 4px; border: 1px solid #C6E9D0;">${p.originalPluName}</span> &bull; ` : ''}${p.variety ? `${p.variety} &bull; ` : ''}<span style="font-family: monospace; font-weight: 700;">${p.sku}</span> &bull; <span style="font-size: 0.72rem; color: var(--md-text-muted);">${p.category}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <!-- UNIT -->
                    <td style="text-align: center;">
                      <span style="font-weight: 800; font-size: 0.88rem; color: var(--md-primary); background: #E8F6ED; padding: 3px 8px; border-radius: var(--radius-sm); border: 1px solid #B7E4C4;">
                        ${p.unit}
                      </span>
                    </td>

                    <!-- BRANCH 1: ANNASANDRAPALYA -->
                    <td class="matrix-cell-branch">
                      ${q1 > 0 ? `
                        <span class="matrix-branch-qty-badge active-demand">${q1}</span>
                      ` : `
                        <span class="matrix-branch-qty-badge zero-demand">-</span>
                      `}
                    </td>

                    <!-- BRANCH 2: KODIHALLI -->
                    <td class="matrix-cell-branch">
                      ${q2 > 0 ? `
                        <span class="matrix-branch-qty-badge active-demand">${q2}</span>
                      ` : `
                        <span class="matrix-branch-qty-badge zero-demand">-</span>
                      `}
                    </td>

                    <!-- BRANCH 3: LBS NAGAR -->
                    <td class="matrix-cell-branch">
                      ${q3 > 0 ? `
                        <span class="matrix-branch-qty-badge active-demand">${q3}</span>
                      ` : `
                        <span class="matrix-branch-qty-badge zero-demand">-</span>
                      `}
                    </td>

                    <!-- BRANCH 4: BASAVANAGAR -->
                    <td class="matrix-cell-branch">
                      ${q4 > 0 ? `
                        <span class="matrix-branch-qty-badge active-demand">${q4}</span>
                      ` : `
                        <span class="matrix-branch-qty-badge zero-demand">-</span>
                      `}
                    </td>

                    <!-- TOTAL REQUIREMENT -->
                    <td class="matrix-cell-total">
                      ${row.totalQty > 0 ? `
                        <div class="matrix-total-badge">
                          <span>${row.totalQty}</span>
                          <span style="font-size: 0.72rem; font-weight: 700; opacity: 0.95;">${p.unit}</span>
                        </div>
                      ` : `
                        <span style="color: #94A3B8; font-weight: 700;">-</span>
                      `}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>

            <!-- SUMMARY FOOTER ROW -->
            <tfoot>
              <tr class="matrix-footer-row">
                <td style="text-align: center; font-weight: 900; color: var(--md-secondary-dark);">TOTAL</td>
                <td style="font-weight: 900; color: var(--md-secondary-dark);">
                  4 Branches Consolidated (${filteredMatrix.length} Products)
                </td>
                <td style="text-align: center; color: var(--md-text-muted); font-weight: 700;">—</td>
                <td style="text-align: center; font-weight: 900; color: var(--md-secondary-dark);">
                  ${branchTotals.BR001} units
                </td>
                <td style="text-align: center; font-weight: 900; color: var(--md-secondary-dark);">
                  ${branchTotals.BR002} units
                </td>
                <td style="text-align: center; font-weight: 900; color: var(--md-secondary-dark);">
                  ${branchTotals.BR003} units
                </td>
                <td style="text-align: center; font-weight: 900; color: var(--md-secondary-dark);">
                  ${branchTotals.BR004} units
                </td>
                <td style="text-align: center; background-color: #E2EFE7;">
                  <div style="font-size: 1.15rem; font-weight: 900; color: #0D8244;">
                    ${totalGrandUnits} UNITS
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    ` : `
      <!-- SECONDARY VIEW: BRANCH MANIFEST CARDS -->
      <div class="branch-req-grid">
        ${filteredCards.length === 0 ? `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: white; border-radius: var(--radius-lg); border: 1px solid var(--md-border);">
            <div style="font-size: 2rem; margin-bottom: 8px;">📋</div>
            <h3 style="font-weight: 800; font-size: 1.1rem; color: var(--md-text-main);">No Requirements Found</h3>
            <p style="font-size: 0.85rem; color: var(--md-text-muted); margin-top: 4px;">
              No branch stock check submissions match your current filter criteria.
            </p>
          </div>
        ` : filteredCards.map(req => {
          let statusBadge = '';
          if (req.status === 'APPROVED') {
            statusBadge = `<span class="pill pill-healthy">${icon('check', 'icon-sm')} APPROVED</span>`;
          } else if (req.status === 'REJECTED') {
            statusBadge = `<span class="pill pill-danger">${icon('x', 'icon-sm')} REJECTED</span>`;
          } else {
            statusBadge = `<span class="pill pill-low">${icon('alertTriangle', 'icon-sm')} PENDING APPROVAL</span>`;
          }

          return `
            <div class="req-card" data-req-id="${req.id}">
              <div class="req-card-top">
                <div>
                  <div style="font-size: 0.72rem; font-weight: 700; color: var(--md-primary); text-transform: uppercase; letter-spacing: 0.04em;">
                    MD FRESH &bull; ${req.branchCode}
                  </div>
                  <h3 class="req-branch-title">${req.branchName}</h3>
                  <div style="font-size: 0.76rem; color: var(--md-text-muted); margin-top: 2px;">
                    Submitted by ${req.submittedBy} &bull; ${req.date}, ${req.time}
                  </div>
                </div>
                <div class="req-code-badge">${req.reference}</div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 6px;">
                <span style="font-size: 0.85rem; font-weight: 800; color: var(--md-text-main);">
                  ${req.itemCount} Items Required
                </span>
                ${statusBadge}
              </div>

              <div class="req-item-list">
                ${req.items.slice(0, 4).map(it => `
                  <div class="req-item-row">
                    <span class="req-item-name">${it.productName}</span>
                    <span class="req-item-qty">${it.qty} ${it.unit}</span>
                  </div>
                `).join('')}
                ${req.items.length > 4 ? `
                  <div style="text-align: center; font-size: 0.74rem; color: var(--md-text-muted); padding-top: 4px; font-weight: 700;">
                    + ${req.items.length - 4} more items...
                  </div>
                ` : ''}
              </div>

              <div class="req-card-actions">
                <button class="btn btn-secondary btn-sm btn-view-req-breakdown" data-req-id="${req.id}">
                  View
                </button>
                ${req.status === 'PENDING APPROVAL' ? `
                  <button class="btn btn-primary btn-sm btn-approve-req" data-req-id="${req.id}">
                    ${icon('check', 'icon-sm')} Approve
                  </button>
                  <button class="btn btn-danger btn-sm btn-reject-req" data-req-id="${req.id}">
                    Reject
                  </button>
                ` : `
                  <span style="font-size: 0.75rem; color: var(--md-text-muted); margin-left: auto;">
                    Status Locked
                  </span>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}

    <!-- Requirement Breakdown Modal -->
    <div id="reqModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 580px;">
        <div class="modal-header">
          <div>
            <h3 class="modal-title" id="reqModalTitle">Requirement Breakdown</h3>
            <span style="font-size: 0.76rem; color: var(--md-text-muted);" id="reqModalSubtitle">Manifest</span>
          </div>
          <button id="btnCloseReqModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <div class="modal-body" id="reqModalBody">
          <!-- Filled dynamically -->
        </div>

        <div class="modal-footer" id="reqModalFooter">
          <button class="btn btn-secondary" id="btnCloseReqModalBtn">Close</button>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function setupRequirementsEvents() {
  // View toggle handlers
  const btnMatrix = document.getElementById('btnViewModeMatrix');
  if (btnMatrix) {
    btnMatrix.addEventListener('click', () => {
      reqViewMode = 'matrix';
      store.notify();
    });
  }

  const btnCards = document.getElementById('btnViewModeCards');
  if (btnCards) {
    btnCards.addEventListener('click', () => {
      reqViewMode = 'cards';
      store.notify();
    });
  }

  // Mobile Matrix Display Mode Toggles (Cards vs Table)
  const btnMatrixCards = document.getElementById('btnMatrixMobileCardsMode');
  if (btnMatrixCards) {
    btnMatrixCards.addEventListener('click', () => {
      matrixMobileLayout = 'cards';
      store.notify();
    });
  }

  const btnMatrixTable = document.getElementById('btnMatrixMobileTableMode');
  if (btnMatrixTable) {
    btnMatrixTable.addEventListener('click', () => {
      matrixMobileLayout = 'table';
      store.notify();
    });
  }

function filterMatrixDOM(query) {
  const q = (query || '').toLowerCase().trim();
  const rows = document.querySelectorAll('.matrix-table tbody tr[data-product-id]');
  const cards = document.querySelectorAll('.mobile-matrix-card[data-product-id]');
  let visibleCount = 0;

  rows.forEach(row => {
    const name = row.querySelector('.matrix-product-name')?.textContent || '';
    const sub = row.querySelector('.matrix-product-sub')?.textContent || '';
    const text = (name + ' ' + sub).toLowerCase();
    const match = !q || text.includes(q);
    row.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });

  cards.forEach(card => {
    const name = card.querySelector('.mobile-matrix-name')?.textContent || '';
    const sub = card.querySelector('.mobile-matrix-sub')?.textContent || '';
    const text = (name + ' ' + sub).toLowerCase();
    const match = !q || text.includes(q);
    card.style.display = match ? '' : 'none';
  });

  const countEl = document.querySelector('.req-filter-count');
  if (countEl) {
    countEl.textContent = `Showing ${visibleCount} products`;
  }

  const searchGroup = document.getElementById('matrixSearchInput')?.closest('.matrix-search-group');
  let clearBtn = document.getElementById('clearMatrixSearchBtn');
  if (q) {
    if (!clearBtn && searchGroup) {
      clearBtn = document.createElement('button');
      clearBtn.id = 'clearMatrixSearchBtn';
      clearBtn.style.cssText = 'border:none; background:none; cursor:pointer; color:var(--md-text-muted); font-size: 0.9rem; padding: 2px 4px;';
      clearBtn.innerHTML = '✕';
      clearBtn.title = 'Clear search';
      clearBtn.addEventListener('click', () => {
        const inp = document.getElementById('matrixSearchInput');
        if (inp) {
          inp.value = '';
          matrixSearchQuery = '';
          filterMatrixDOM('');
          inp.focus();
        }
      });
      searchGroup.appendChild(clearBtn);
    } else if (clearBtn) {
      clearBtn.style.display = '';
    }
  } else if (clearBtn) {
    clearBtn.style.display = 'none';
  }
}

  // Matrix search input - instant native responsiveness without DOM destruction
  const searchInput = document.getElementById('matrixSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      matrixSearchQuery = e.target.value;
      filterMatrixDOM(matrixSearchQuery);
    });
  }

  const clearSearchBtn = document.getElementById('clearMatrixSearchBtn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      matrixSearchQuery = '';
      const inp = document.getElementById('matrixSearchInput');
      if (inp) inp.value = '';
      filterMatrixDOM('');
      if (inp) inp.focus();
    });
  }

  // Matrix category filter tabs
  document.querySelectorAll('.filter-tabs .filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      matrixCategoryFilter = tab.getAttribute('data-cat');
      store.notify();
    });
  });

  // Checkbox: Only with Demand
  const chkDemand = document.getElementById('chkOnlyWithDemand');
  if (chkDemand) {
    chkDemand.addEventListener('change', (e) => {
      matrixOnlyWithDemand = e.target.checked;
      store.notify();
    });
  }

  // Print button
  const btnPrint = document.getElementById('btnPrintMatrixBtn');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }

  // Cards branch & status select filters
  const branchSelect = document.getElementById('reqBranchSelect');
  if (branchSelect) {
    branchSelect.addEventListener('change', (e) => {
      reqFilterBranch = e.target.value;
      store.notify();
    });
  }

  const statusSelect = document.getElementById('reqStatusSelect');
  if (statusSelect) {
    statusSelect.addEventListener('change', (e) => {
      reqFilterStatus = e.target.value;
      store.notify();
    });
  }

  const btnGoProc = document.getElementById('btnGoToProcurementFromReq');
  if (btnGoProc) {
    btnGoProc.addEventListener('click', () => {
      store.setView('procurement');
    });
  }

  // Optional PDF download
  const btnDlReq = document.getElementById('btnDownloadReqPdf');
  if (btnDlReq) {
    btnDlReq.addEventListener('click', () => {
      const liveDate = store.getLiveDateString();
      const liveTimestamp = store.getLiveDateTimeString(new Date(), true);
      const data = {
        date: liveTimestamp,
        branches: store.branches,
        consolidatedItems: store.getConsolidatedProcurement(),
        branchRequirements: store.getAllBranchesRequirements()
      };
      const blob = generateMasterManifestPDF(data);
      const filenameDate = liveDate.replace(/ /g, '_');
      downloadBlob(blob, `MD_Fresh_Master_Manifest_${filenameDate}.pdf`);
    });
  }

  // Cards Approve & Reject buttons
  document.querySelectorAll('.btn-approve-req').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rId = e.currentTarget.getAttribute('data-req-id');
      store.updateRequirementStatus(rId, 'APPROVED');
    });
  });

  document.querySelectorAll('.btn-reject-req').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rId = e.currentTarget.getAttribute('data-req-id');
      store.updateRequirementStatus(rId, 'REJECTED');
    });
  });

  // Modal breakdown view for cards
  const modalBackdrop = document.getElementById('reqModalBackdrop');
  const modalTitle = document.getElementById('reqModalTitle');
  const modalSubtitle = document.getElementById('reqModalSubtitle');
  const modalBody = document.getElementById('reqModalBody');
  const btnCloseModal = document.getElementById('btnCloseReqModal');
  const btnCloseModalBtn = document.getElementById('btnCloseReqModalBtn');

  function openReqModal(reqId) {
    const req = store.requirements.find(r => r.id === reqId);
    if (!req) return;

    if (modalTitle) modalTitle.textContent = `MD Fresh — ${req.branchName}`;
    if (modalSubtitle) modalSubtitle.textContent = `Reference: ${req.reference} • Submitted by ${req.submittedBy} (${req.date})`;

    if (modalBody) {
      modalBody.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; background: var(--md-surface-subtle); padding: 12px 16px; border-radius: var(--radius-md); margin-bottom: 16px;">
          <span style="font-weight: 700; font-size: 0.9rem;">Status: <span class="pill ${req.status === 'APPROVED' ? 'pill-healthy' : 'pill-low'}">${req.status}</span></span>
          <span style="font-weight: 700; color: var(--md-text-muted); font-size: 0.85rem;">${req.itemCount} items listed</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; max-height: 360px; overflow-y: auto;">
          ${req.items.map(item => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: white; border: 1px solid var(--md-border); border-radius: var(--radius-md);">
              <span style="font-weight: 700; color: var(--md-text-main); font-size: 0.92rem;">${item.productName}</span>
              <span style="font-weight: 800; font-size: 1.05rem; color: var(--md-primary);">${item.qty} <span style="font-size: 0.8rem; font-weight: 600; color: var(--md-text-secondary);">${item.unit}</span></span>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (modalBackdrop) modalBackdrop.classList.add('open');
  }

  document.querySelectorAll('.btn-view-req-breakdown').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rId = e.currentTarget.getAttribute('data-req-id');
      openReqModal(rId);
    });
  });

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
      if (modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }

  if (btnCloseModalBtn) {
    btnCloseModalBtn.addEventListener('click', () => {
      if (modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }
}
