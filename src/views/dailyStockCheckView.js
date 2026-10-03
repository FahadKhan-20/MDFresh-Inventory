// Daily Stock Check View - Optimized for Blazing Fast Numeric Entry
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';
import { generateMasterManifestPDF, generateCombinedListOnlyPDF, generateBranchHeadlinedPDF, downloadBlob } from '../utils/pdfGenerator.js';

let activeCategoryFilter = 'All'; // 'All', 'Fruits', 'Vegetables'
let filterOnlyRequired = false;
let filterOnlyLowStock = false;
let searchQuery = '';

export function renderDailyStockCheckView() {
  const currentBranchId = store.currentBranchId;
  const currentBranch = store.branches.find(b => b.id === currentBranchId) || store.branches[0];
  const draft = store.getBranchStockCheck(currentBranchId);

  // Filter products according to category, search, and flags
  let filteredProducts = store.products.filter(p => {
    // Category filter
    if (activeCategoryFilter !== 'All' && p.category !== activeCategoryFilter) {
      return false;
    }
    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.sku.toLowerCase().includes(q) ||
                    (p.originalPluName && p.originalPluName.toLowerCase().includes(q)) ||
                    (p.variety && p.variety.toLowerCase().includes(q));
      if (!match) return false;
    }
    // Filter only required (> 0)
    if (filterOnlyRequired) {
      const qty = draft[p.id] || 0;
      if (qty <= 0) return false;
    }
    // Filter only low stock
    if (filterOnlyLowStock) {
      const curStock = p.stocks[currentBranchId] || 0;
      if (curStock > p.reorderLevel) return false;
    }
    return true;
  });

  // Calculate stats for branch
  const allBranchProducts = store.products;
  const totalItemsCount = allBranchProducts.length;
  const checkedItemsCount = Object.keys(draft).filter(k => draft[k] > 0).length;
  const progressPercent = totalItemsCount > 0 ? Math.round((checkedItemsCount / totalItemsCount) * 100) : 0;

  // Count items requiring purchase for sticky bottom bar
  const requiredProductsList = store.getRequiredItemsForBranch(currentBranchId);
  const totalRequiredCount = requiredProductsList.length;

  return `
    <!-- Top Stock Check Header Card -->
    <div class="stock-check-header-card">
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--md-primary); background-color: var(--md-primary-light); padding: 2px 8px; border-radius: var(--radius-pill);">
            FAST NUMERIC ENTRY MODE
          </span>
          <span style="font-size: 0.76rem; color: var(--md-text-muted);">Tab or Enter to advance</span>
        </div>
        <h1 style="font-size: 1.65rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Daily Stock Check
        </h1>
        <p style="font-size: 0.85rem; color: var(--md-text-secondary); margin-top: 2px;">
          Direct morning count verification for store replenishment & APMC market consolidation.
        </p>
      </div>

      <!-- Branch & Date Selector Controls -->
      <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
        <div class="control-chip" style="background: white; border-color: var(--md-border-strong);">
          <span style="color: var(--md-text-muted); font-size: 0.8rem;">Branch:</span>
          <select id="stockCheckBranchSelect" class="branch-select" style="font-weight: 800; font-size: 0.95rem; color: var(--md-primary);">
            ${store.branches.map(b => `<option value="${b.id}" ${b.id === currentBranchId ? 'selected' : ''}>${b.name}</option>`).join('')}
          </select>
        </div>

        <div class="date-indicator" style="background: white; font-weight: 700; gap: 8px;">
          <span class="live-pulse-dot" title="Live Clock Active"></span>
          <span class="live-clock-display" style="font-family: monospace; font-size: 0.82rem; color: var(--md-secondary-dark);">${store.getLiveDateTimeString(new Date(), true)}</span>
        </div>

        <!-- Progress Widget -->
        <div class="progress-widget" style="background: white; padding: 8px 14px; border-radius: var(--radius-md); border: 1px solid var(--md-border);">
          <div class="progress-meta">
            <span style="color: var(--md-text-secondary);">Progress</span>
            <span style="color: var(--md-primary); font-weight: 800;">${checkedItemsCount} / ${totalItemsCount} checked</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters & Action Bar -->
    <div class="filter-bar">
      <!-- Search Input -->
      <div class="search-input-group" style="flex: 1; max-width: 380px;">
        ${icon('search', 'icon-sm')}
        <input 
          type="text" 
          id="stockCheckSearchInput" 
          placeholder="Search product (Apple, Mango, Tomato, SKU)..." 
          value="${escapeHtml(searchQuery)}"
        />
        ${searchQuery ? `<button id="clearSearchBtn" style="border:none; background:none; cursor:pointer; color:var(--md-text-muted);">${icon('x', 'icon-sm')}</button>` : ''}
      </div>

      <!-- Categories Tabs -->
      <div class="filter-tabs">
        <button class="filter-tab ${activeCategoryFilter === 'All' ? 'active' : ''}" data-cat="All">All</button>
        <button class="filter-tab ${activeCategoryFilter === 'Fruits' ? 'active' : ''}" data-cat="Fruits">Fruits</button>
        <button class="filter-tab ${activeCategoryFilter === 'Vegetables' ? 'active' : ''}" data-cat="Vegetables">Vegetables</button>
        <button class="filter-tab ${activeCategoryFilter === 'Dairy & Others' ? 'active' : ''}" data-cat="Dairy & Others">Dairy & Others</button>
      </div>

      <!-- Quick Toggles & Action Buttons -->
      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        <button 
          id="btnToggleOnlyRequired" 
          class="btn ${filterOnlyRequired ? 'btn-primary' : 'btn-secondary'} btn-sm"
          style="font-weight: 700;"
        >
          ${icon('check', 'icon-sm')} Show Only Required
        </button>

        <button 
          id="btnToggleOnlyLowStock" 
          class="btn ${filterOnlyLowStock ? 'btn-danger' : 'btn-secondary'} btn-sm"
          style="font-weight: 700;"
        >
          ${icon('alertTriangle', 'icon-sm')} Low Stock Only
        </button>

        <!-- MANUAL ADD PRODUCT BUTTON -->
        <button 
          id="btnOpenAddProductFast" 
          class="btn btn-outline-primary btn-sm"
          style="font-weight: 800; background: white;"
        >
          ${icon('plus', 'icon-sm')} Add Product
        </button>

        <!-- VIEW ALL BRANCHES COMBINED MATRIX TABLE -->
        <button 
          id="btnGoToAllBranchesMatrix" 
          class="btn btn-primary btn-sm"
          style="font-weight: 800;"
          title="View combined tabular list of all 4 branches"
        >
          ${icon('layers', 'icon-sm')} View All Branches Table
        </button>

        <!-- DOWNLOAD COMBINED & BRANCH MANIFEST IN PDF (OPTIONAL) -->
        <button 
          id="btnOpenManifestPdfModal" 
          class="btn btn-sm"
          style="font-weight: 800; background: #E8F6ED; color: #0D8244; border: 1.5px solid #B7E4C4;"
        >
          📥 PDF (Optional)
        </button>
      </div>
    </div>

    <!-- Desktop Table View -->
    <div class="content-card stock-check-table-view" style="margin-bottom: 90px;">
      <div class="card-header" style="background-color: var(--md-surface-subtle); padding: 12px 20px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--md-text-muted);">
            ${activeCategoryFilter.toUpperCase()} CATALOG (${filteredProducts.length} ITEMS)
          </span>
        </div>
        <div style="font-size: 0.76rem; color: var(--md-text-muted);">
          Keyboard shortcut: <kbd style="background: white; border: 1px solid #CBD5E1; padding: 2px 6px; border-radius: 4px; font-weight: 700;">TAB</kbd> Next Field &bull; <kbd style="background: white; border: 1px solid #CBD5E1; padding: 2px 6px; border-radius: 4px; font-weight: 700;">ENTER</kbd> Next Product
        </div>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table" id="stockCheckFastTable">
            <thead>
              <tr>
                <th style="width: 32%;">PRODUCT</th>
                <th style="width: 15%;">UNIT</th>
                <th style="width: 22%;">CURRENT STOCK</th>
                <th style="width: 31%;">REQUIRED TO BUY</th>
              </tr>
            </thead>
            <tbody>
              ${filteredProducts.length === 0 ? `
                <tr>
                  <td colspan="4" style="text-align: center; padding: 48px; color: var(--md-text-muted);">
                    <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
                    <div style="font-weight: 700; font-size: 1rem; color: var(--md-text-main);">No matching products found</div>
                    <div style="font-size: 0.82rem; margin-top: 4px;">Try adjusting your search query or reset the filters.</div>
                  </td>
                </tr>
              ` : filteredProducts.map((p, index) => {
                const currentStock = p.stocks[currentBranchId] ?? 0;
                const reqQty = draft[p.id] !== undefined ? draft[p.id] : 0;
                const isLow = currentStock <= p.reorderLevel;

                return `
                  <tr data-product-id="${p.id}" class="${reqQty > 0 ? 'row-required-highlight' : ''}">
                    <td>
                      <div class="product-cell">
                        <div class="product-avatar">${p.image}</div>
                        <div class="product-info-text">
                          <span class="product-name-text">${p.name}</span>
                          <span class="product-sub-sku">${p.originalPluName ? `<strong style="color: #0D8244; background: #EAF5EE; padding: 1px 4px; border-radius: 3px; font-size: 0.68rem; margin-right: 4px; border: 1px solid #C6E9D0;">${p.originalPluName}</strong> &bull; ` : ''}${p.sku} &bull; ${p.variety}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="pill pill-unit" style="font-weight: 700;">${p.unit}</span>
                    </td>
                    <td>
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 1.15rem; font-weight: 800; color: ${isLow ? 'var(--status-danger-text)' : 'var(--md-text-main)'};">
                          ${currentStock}
                        </span>
                        <span style="font-size: 0.82rem; color: var(--md-text-muted); font-weight: 600;">${p.unit}</span>
                        ${isLow ? `<span class="pill pill-low" style="padding: 1px 6px; font-size: 0.7rem;">Low</span>` : ''}
                      </div>
                    </td>
                    <td>
                      <!-- FAST NUMERIC INPUT: User ONLY enters numbers; Unit is automatic! -->
                      <div class="fast-qty-wrapper ${reqQty > 0 ? 'has-value' : ''}">
                        <input 
                          type="number"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          min="0"
                          max="9999"
                          step="1"
                          class="fast-qty-input fast-stock-input"
                          data-product-id="${p.id}"
                          data-index="${index}"
                          value="${reqQty}"
                          aria-label="Required ${p.unit} for ${p.name}"
                        />
                        <span class="fast-qty-unit">${p.unit}</span>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Mobile Stock Check Cards (Touch Targets & Next button) -->
    <div class="mobile-stock-cards" style="margin-bottom: 90px;">
      ${filteredProducts.map((p, index) => {
        const currentStock = p.stocks[currentBranchId] ?? 0;
        const reqQty = draft[p.id] !== undefined ? draft[p.id] : 0;
        const isLow = currentStock <= p.reorderLevel;

        return `
          <div class="mobile-stock-card" data-product-id="${p.id}">
            <div class="mobile-card-top">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5rem;">${p.image}</span>
                <div>
                  <div class="mobile-card-product">${p.name}</div>
                  <div style="font-size: 0.74rem; color: var(--md-text-muted); font-family: monospace;">${p.originalPluName ? `<strong style="color: #0D8244; background: #EAF5EE; padding: 1px 4px; border-radius: 3px; font-size: 0.68rem; margin-right: 4px; border: 1px solid #C6E9D0;">${p.originalPluName}</strong> &bull; ` : ''}${p.sku}</div>
                </div>
              </div>
              <span class="pill pill-unit">${p.unit}</span>
            </div>

            <div class="mobile-card-row">
              <span class="mobile-card-label">Current Stock</span>
              <span class="mobile-card-val" style="color: ${isLow ? 'var(--status-danger-text)' : 'inherit'};">
                ${currentStock} ${p.unit} ${isLow ? '(Low)' : ''}
              </span>
            </div>

            <div class="mobile-card-row">
              <span class="mobile-card-label">Required</span>
              <div class="fast-qty-wrapper ${reqQty > 0 ? 'has-value' : ''}" style="width: 150px;">
                <input 
                  type="number"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  min="0"
                  max="9999"
                  step="1"
                  class="fast-qty-input fast-stock-input-mobile"
                  data-product-id="${p.id}"
                  data-index="${index}"
                  value="${reqQty}"
                />
                <span class="fast-qty-unit">${p.unit}</span>
              </div>
            </div>

            <button class="mobile-next-btn" data-next-index="${index + 1}">
              NEXT PRODUCT ${icon('arrowRight', 'icon-sm')}
            </button>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Bottom Sticky Bar -->
    <div class="sticky-bottom-bar">
      <div class="sticky-bar-info">
        <div class="sticky-count-pill">${totalRequiredCount}</div>
        <div>
          <div class="sticky-text">${totalRequiredCount} products require purchase</div>
          <div style="font-size: 0.74rem; color: var(--md-text-muted);">
            Branch: ${currentBranch.name} &bull; Ready for market order submission
          </div>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <button class="btn btn-secondary btn-lg" id="btnStickyGoToMatrix" style="font-weight: 800; border: 1.5px solid var(--md-border); background: white; color: var(--md-secondary-dark);" title="View all branches combined tabular matrix">
          ${icon('layers', 'icon-sm')} View All Branches Table
        </button>
        <button class="btn btn-secondary btn-lg" id="btnStickyDownloadPdf" style="font-weight: 800; border: 1.5px solid #B7E4C4; background: #E8F6ED; color: #0D8244;">
          📥 PDF (Optional)
        </button>
        <button class="btn btn-primary btn-lg" id="btnReviewRequirements" ${totalRequiredCount === 0 ? 'disabled style="opacity: 0.6;"' : ''}>
          ${icon('requirements', 'icon-sm')} Review Requirements (${totalRequiredCount})
        </button>
      </div>
    </div>

    <!-- Review Requirements Modal / Sheet -->
    <div id="reviewModalBackdrop" class="modal-backdrop">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">Review Stock Requirements</h3>
            <span style="font-size: 0.78rem; color: var(--md-text-muted);">
              MD Fresh — ${currentBranch.name} &bull; <span class="live-clock-display">${store.getLiveDateTimeString(new Date(), false)}</span>
            </span>
          </div>
          <button class="btn-close-modal" id="btnCloseReviewModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <div class="modal-body">
          <div style="background-color: var(--md-surface-subtle); border-radius: var(--radius-md); padding: 14px 16px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 0.88rem; font-weight: 700; color: var(--md-text-secondary);">Total Required Items:</span>
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--md-primary);">${totalRequiredCount} requirements</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; max-height: 320px; overflow-y: auto; padding-right: 4px;">
            ${requiredProductsList.map(item => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: white; border: 1px solid var(--md-border); border-radius: var(--radius-md);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 1.25rem;">${item.category === 'Fruits' ? '🍎' : '🥦'}</span>
                  <div>
                    <div style="font-weight: 800; font-size: 0.92rem; color: var(--md-text-main);">${item.productName}</div>
                    <div style="font-size: 0.74rem; color: var(--md-text-muted); font-family: monospace;">${item.sku} &bull; Current Stock: ${item.currentStock} ${item.unit}</div>
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-weight: 800; font-size: 1.1rem; color: var(--md-primary);">
                    ${item.requiredQty} <span style="font-size: 0.82rem; font-weight: 700; color: var(--md-text-secondary);">${item.unit}</span>
                  </div>
                  <div style="font-size: 0.72rem; color: var(--md-text-muted);">Est. ₹${item.estimatedAmount.toLocaleString('en-IN')}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" id="btnCancelReview">Cancel</button>
          <button class="btn btn-primary btn-lg" id="btnSubmitStockRequirement" style="font-weight: 800;">
            ${icon('check', 'icon-sm')} SUBMIT REQUIREMENT
          </button>
        </div>
      </div>
    </div>

    <!-- Submission Confirmation Dialog -->
    <div id="confirmModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 480px; text-align: center;">
        <div class="modal-body" style="padding: 36px 28px;">
          <div style="width: 60px; height: 60px; background-color: var(--md-primary-light); color: var(--md-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            ${icon('check', 'icon-lg')}
          </div>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--md-secondary-dark); margin-bottom: 8px;">
            Stock Requirement Submitted Successfully
          </h3>
          <p style="font-size: 0.88rem; color: var(--md-text-secondary); margin-bottom: 20px;">
            Your morning stock verification has been locked and routed to the central APMC market procurement desk.
          </p>

          <div style="background-color: var(--md-surface-subtle); border: 1.5px dashed var(--md-primary-light-border); border-radius: var(--radius-md); padding: 14px; margin-bottom: 24px;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--md-text-muted); letter-spacing: 0.05em;">
              OFFICIAL REFERENCE CODE
            </div>
            <div id="confirmedRefCode" style="font-size: 1.35rem; font-weight: 800; font-family: monospace; color: var(--md-primary); margin-top: 4px;">
              SC-20261002-0001
            </div>
            <div id="confirmedTimestampDisplay" style="font-size: 0.78rem; color: var(--md-text-muted); margin-top: 4px;">
              Branch: ${currentBranch.name} &bull; Recorded Live: ${store.getLiveDateTimeString(new Date(), true)}
            </div>
          </div>

          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary" style="flex: 1;" id="btnViewRequirementsPage">
              Go to Requirements
            </button>
            <button class="btn btn-primary" style="flex: 1;" id="btnFinishStockCheck">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Manual Add Product Modal -->
    <div id="fastAddProductModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 500px;">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">Add Product to Catalog</h3>
            <span style="font-size: 0.76rem; color: var(--md-text-muted);">
              Manual entry for ${currentBranch.name} & other outlets
            </span>
          </div>
          <button id="btnCloseFastAddModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <form id="fastAddProductForm">
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
            <div>
              <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Product Name *</label>
              <input type="text" id="fapName" required placeholder="e.g. Kashmiri Apple, Dragon Fruit, Coriander" style="width:100%; padding:9px 12px; border:1.5px solid var(--md-border-strong); border-radius:var(--radius-md); font-size:0.95rem; font-weight:600; outline:none;" />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Category *</label>
                <select id="fapCategory" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-weight:600; outline:none;">
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                </select>
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Standard Unit *</label>
                <select id="fapUnit" style="width:100%; padding:9px 12px; border:1.5px solid var(--md-primary); border-radius:var(--radius-md); font-weight:800; color:var(--md-primary); outline:none;">
                  <option value="Crates" selected>Crates</option>
                  <option value="Bunches">Bunches</option>
                  <option value="Bags">Bags</option>
                  <option value="Boxes">Boxes</option>
                  <option value="Kg">Kg</option>
                  <option value="Pieces">Pieces</option>
                  <option value="Gram">Gram</option>
                  <option value="Dozen">Dozen</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Current Stock (${currentBranch.name})</label>
                <input type="number" id="fapCurrentStock" min="0" value="0" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:0.95rem; font-weight:700; outline:none;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Reorder Level</label>
                <input type="number" id="fapReorderLevel" min="1" value="4" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:0.95rem; font-weight:700; outline:none;" />
              </div>
            </div>

            <div>
              <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Est. Unit Rate (₹)</label>
              <input type="number" id="fapUnitCost" min="1" value="650" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:0.95rem; font-weight:700; outline:none;" />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="btnCancelFastAdd">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 800; padding: 10px 20px;">
              ${icon('check', 'icon-sm')} Save & Add to Stock Check
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Download PDF Manifest Modal -->
    <div id="downloadPdfModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 680px;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 38px; height: 38px; background: #E8F6ED; color: #0D8244; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
              📄
            </div>
            <div>
              <h3 class="modal-title">Download Market Requirements (PDF)</h3>
              <span style="font-size: 0.76rem; color: var(--md-text-muted);">
                Combined list of all 4 branches + Branch-headlined delivery lists
              </span>
            </div>
          </div>
          <button id="btnClosePdfModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <div class="modal-body" style="padding: 20px 24px;">
          <!-- 3 Download Action Cards -->
          <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 20px;">
            
            <!-- Option 1: Master Manifest (Combined + Branch Headlined) -->
            <div style="background: linear-gradient(135deg, #064E3B, #0D8244); border-radius: var(--radius-md); padding: 18px; color: white; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
              <div>
                <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; background: rgba(255,255,255,0.2); display: inline-block; padding: 2px 8px; border-radius: 4px; margin-bottom: 4px;">
                  RECOMMENDED COMPLETE DOCUMENT
                </div>
                <h4 style="font-size: 1.1rem; font-weight: 800;">Complete Master Manifest (PDF)</h4>
                <p style="font-size: 0.8rem; color: #D1EADE; margin-top: 2px;">
                  Includes Combined Total List at top + All 4 Branch Headlined Sections below.
                </p>
              </div>
              <button class="btn btn-primary btn-lg" id="btnDownloadMasterPdf" style="background: white; color: #064E3B; font-weight: 800; border: none; flex-shrink: 0;">
                📥 Download PDF
              </button>
            </div>

            <!-- Option 2 & 3: Split downloads -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div style="background: white; border: 1.5px solid var(--md-border); border-radius: var(--radius-md); padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="font-size: 0.72rem; font-weight: 700; color: #0D8244; text-transform: uppercase;">Mandi Buyer Sheet</div>
                  <h5 style="font-size: 0.95rem; font-weight: 800; color: var(--md-text-main); margin-top: 2px;">Combined Total List (PDF)</h5>
                  <p style="font-size: 0.76rem; color: var(--md-text-muted); margin-top: 4px;">
                    Consolidated total bulk quantities across all branches for APMC bidding.
                  </p>
                </div>
                <button class="btn btn-secondary btn-sm" id="btnDownloadCombinedOnlyPdf" style="margin-top: 12px; font-weight: 700;">
                  📥 Download Combined PDF
                </button>
              </div>

              <div style="background: white; border: 1.5px solid var(--md-border); border-radius: var(--radius-md); padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="font-size: 0.72rem; font-weight: 700; color: #064E3B; text-transform: uppercase;">Store Dispatch Sheet</div>
                  <h5 style="font-size: 0.95rem; font-weight: 800; color: var(--md-text-main); margin-top: 2px;">Branch Headlined List (PDF)</h5>
                  <p style="font-size: 0.76rem; color: var(--md-text-muted); margin-top: 4px;">
                    Delivery checklist headlined by Annasandrapalya, Kodihalli, LBS Nagar & Basavanagar.
                  </p>
                </div>
                <button class="btn btn-secondary btn-sm" id="btnDownloadBranchOnlyPdf" style="margin-top: 12px; font-weight: 700;">
                  📥 Download Branch List PDF
                </button>
              </div>
            </div>

          </div>

          <!-- Live Preview Summary -->
          <div style="border-top: 1px solid var(--md-border); padding-top: 14px;">
            <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--md-text-muted); letter-spacing: 0.05em; margin-bottom: 10px;">
              ACTIVE REQUIREMENTS PREVIEW ACROSS 4 BRANCHES
            </div>
            <div style="max-height: 180px; overflow-y: auto; background: var(--md-surface-subtle); border-radius: var(--radius-md); padding: 12px;">
              ${store.getConsolidatedProcurement().map((item, idx) => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid #E2E8DF; font-size: 0.85rem;">
                  <span style="font-weight: 700;">${idx + 1}. ${item.product.name}</span>
                  <span style="font-weight: 800; color: var(--md-primary);">${item.totalQty} ${item.unit}</span>
                  <span style="font-size: 0.75rem; color: var(--md-text-muted);">
                    ${item.branches.map(b => `${b.branchName.substring(0,3)}: ${b.qty}`).join(' | ')}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" id="btnClosePdfModalBtn">Close</button>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function setupDailyStockCheckEvents() {
  const currentBranchId = store.currentBranchId;

  // Branch Selector change
  const branchSelect = document.getElementById('stockCheckBranchSelect');
  if (branchSelect) {
    branchSelect.addEventListener('change', (e) => {
      store.setBranch(e.target.value);
    });
  }

function filterStockCheckDOM(query) {
  const q = (query || '').toLowerCase().trim();
  const rows = document.querySelectorAll('.custom-table tbody tr');
  const cards = document.querySelectorAll('.mobile-stock-card');
  let visibleCount = 0;

  rows.forEach(row => {
    const nameEl = row.querySelector('.product-name-text');
    const subEl = row.querySelector('.product-sub-sku');
    if (!nameEl) return;
    const text = ((nameEl?.textContent || '') + ' ' + (subEl?.textContent || '')).toLowerCase();
    const match = !q || text.includes(q);
    row.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });

  cards.forEach(card => {
    const nameEl = card.querySelector('.mobile-card-product');
    const subEl = card.querySelector('div[style*="monospace"]');
    const text = ((nameEl?.textContent || '') + ' ' + (subEl?.textContent || '')).toLowerCase();
    const match = !q || text.includes(q);
    card.style.display = match ? '' : 'none';
  });

  const searchGroup = document.getElementById('stockCheckSearchInput')?.closest('.search-input-group');
  let clearBtn = document.getElementById('clearSearchBtn');
  if (q) {
    if (!clearBtn && searchGroup) {
      clearBtn = document.createElement('button');
      clearBtn.id = 'clearSearchBtn';
      clearBtn.style.cssText = 'border:none; background:none; cursor:pointer; color:var(--md-text-muted); font-size: 0.9rem; padding: 2px 4px;';
      clearBtn.innerHTML = '✕';
      clearBtn.title = 'Clear search';
      clearBtn.addEventListener('click', () => {
        const inp = document.getElementById('stockCheckSearchInput');
        if (inp) {
          inp.value = '';
          searchQuery = '';
          filterStockCheckDOM('');
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

  // Search input - smooth native typing without losing focus
  const searchInput = document.getElementById('stockCheckSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterStockCheckDOM(searchQuery);
    });
  }

  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      const inp = document.getElementById('stockCheckSearchInput');
      if (inp) inp.value = '';
      filterStockCheckDOM('');
      if (inp) inp.focus();
    });
  }

  // Category Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      activeCategoryFilter = e.target.getAttribute('data-cat');
      store.notify();
    });
  });

  // Toggle Filters
  const btnToggleOnlyRequired = document.getElementById('btnToggleOnlyRequired');
  if (btnToggleOnlyRequired) {
    btnToggleOnlyRequired.addEventListener('click', () => {
      filterOnlyRequired = !filterOnlyRequired;
      store.notify();
    });
  }

  const btnToggleOnlyLowStock = document.getElementById('btnToggleOnlyLowStock');
  if (btnToggleOnlyLowStock) {
    btnToggleOnlyLowStock.addEventListener('click', () => {
      filterOnlyLowStock = !filterOnlyLowStock;
      store.notify();
    });
  }

  // In-place live update of progress widget and sticky bottom bar without full re-render
  function updateLiveCheckSummary() {
    const draft = store.getBranchStockCheck(currentBranchId);
    let checkedCount = 0;
    let requiredCount = 0;
    
    filteredProducts.forEach(p => {
      const q = draft[p.id] !== undefined ? draft[p.id] : 0;
      if (q > 0) {
        checkedCount++;
        requiredCount++;
      }
    });

    const totalCount = filteredProducts.length;
    const percent = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

    // Update Progress Bar
    const progressFill = document.querySelector('.progress-bar-fill');
    if (progressFill) progressFill.style.width = `${percent}%`;

    const progressMetaText = document.querySelector('.progress-meta span:last-child');
    if (progressMetaText) {
      progressMetaText.textContent = `${checkedCount} / ${totalCount} checked`;
    }

    // Update Sticky Bottom Bar
    const stickyPill = document.querySelector('.sticky-count-pill');
    if (stickyPill) stickyPill.textContent = String(requiredCount);

    const stickyText = document.querySelector('.sticky-text');
    if (stickyText) stickyText.textContent = `${requiredCount} products require purchase`;

    const btnReview = document.getElementById('btnReviewRequirements');
    if (btnReview) {
      btnReview.innerHTML = `${icon('requirements', 'icon-sm')} Review Requirements (${requiredCount})`;
      if (requiredCount === 0) {
        btnReview.setAttribute('disabled', 'true');
        btnReview.style.opacity = '0.6';
      } else {
        btnReview.removeAttribute('disabled');
        btnReview.style.opacity = '1';
      }
    }
  }

  // FAST NUMERIC ENTRY UX - Key events & auto-advance!
  const inputs = Array.from(document.querySelectorAll('.fast-stock-input'));
  inputs.forEach((input, idx) => {
    // When input changes, update store SILENTLY so DOM is not recreated on every keystroke
    input.addEventListener('input', (e) => {
      const pId = e.target.getAttribute('data-product-id');
      const rawVal = e.target.value;
      const numVal = Math.max(0, parseInt(rawVal, 10) || 0);

      // Silent store update (allows typing any multi-digit number: 10, 25, 100, etc.)
      store.updateRequiredQuantity(currentBranchId, pId, numVal, false);

      // In-place wrapper style update
      const wrapper = e.target.closest('.fast-qty-wrapper');
      if (wrapper) {
        if (numVal > 0) {
          wrapper.classList.add('has-value');
        } else {
          wrapper.classList.remove('has-value');
        }
      }

      // Update counters in-place
      updateLiveCheckSummary();
    });

    // Clean up if left empty
    input.addEventListener('blur', (e) => {
      if (e.target.value.trim() === '') {
        e.target.value = '0';
        const pId = e.target.getAttribute('data-product-id');
        store.updateRequiredQuantity(currentBranchId, pId, 0, false);
        const wrapper = e.target.closest('.fast-qty-wrapper');
        if (wrapper) wrapper.classList.remove('has-value');
        updateLiveCheckSummary();
      }
    });

    // Auto-select text on focus so user can immediately type a replacement number
    input.addEventListener('focus', (e) => {
      e.target.select();
    });

    // Keyboard navigation: Enter -> next product, Tab -> next product, Arrow keys
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const nextInput = inputs[idx + 1];
        if (nextInput) {
          nextInput.focus();
          nextInput.select();
        } else {
          const btnRev = document.getElementById('btnReviewRequirements');
          if (btnRev && !btnRev.disabled) btnRev.focus();
        }
      } else if (e.key === 'ArrowDown') {
        const nextInput = inputs[idx + 1];
        if (nextInput) {
          e.preventDefault();
          nextInput.focus();
          nextInput.select();
        }
      } else if (e.key === 'ArrowUp') {
        const prevInput = inputs[idx - 1];
        if (prevInput) {
          e.preventDefault();
          prevInput.focus();
          prevInput.select();
        }
      }
    });
  });

  // Mobile numeric inputs
  const mobileInputs = Array.from(document.querySelectorAll('.fast-stock-input-mobile'));
  mobileInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      const pId = e.target.getAttribute('data-product-id');
      const rawVal = e.target.value;
      const numVal = Math.max(0, parseInt(rawVal, 10) || 0);

      store.updateRequiredQuantity(currentBranchId, pId, numVal, false);

      const wrapper = e.target.closest('.fast-qty-wrapper');
      if (wrapper) {
        if (numVal > 0) {
          wrapper.classList.add('has-value');
        } else {
          wrapper.classList.remove('has-value');
        }
      }
      updateLiveCheckSummary();
    });

    input.addEventListener('blur', (e) => {
      if (e.target.value.trim() === '') {
        e.target.value = '0';
        const pId = e.target.getAttribute('data-product-id');
        store.updateRequiredQuantity(currentBranchId, pId, 0, false);
        const wrapper = e.target.closest('.fast-qty-wrapper');
        if (wrapper) wrapper.classList.remove('has-value');
        updateLiveCheckSummary();
      }
    });

    input.addEventListener('focus', (e) => e.target.select());
  });

  // Mobile "NEXT PRODUCT" buttons
  document.querySelectorAll('.mobile-next-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const nextIdx = parseInt(e.currentTarget.getAttribute('data-next-index'), 10);
      const targetInput = mobileInputs[nextIdx];
      if (targetInput) {
        targetInput.focus();
        targetInput.select();
        targetInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Review Requirements Modal Logic
  const reviewBackdrop = document.getElementById('reviewModalBackdrop');
  const btnReviewRequirements = document.getElementById('btnReviewRequirements');
  const btnCloseReviewModal = document.getElementById('btnCloseReviewModal');
  const btnCancelReview = document.getElementById('btnCancelReview');

  if (btnReviewRequirements) {
    btnReviewRequirements.addEventListener('click', () => {
      if (reviewBackdrop) reviewBackdrop.classList.add('open');
    });
  }

  if (btnCloseReviewModal) {
    btnCloseReviewModal.addEventListener('click', () => {
      if (reviewBackdrop) reviewBackdrop.classList.remove('open');
    });
  }

  if (btnCancelReview) {
    btnCancelReview.addEventListener('click', () => {
      if (reviewBackdrop) reviewBackdrop.classList.remove('open');
    });
  }

  // Submit Requirement Logic
  const btnSubmitStockRequirement = document.getElementById('btnSubmitStockRequirement');
  const confirmBackdrop = document.getElementById('confirmModalBackdrop');
  const confirmedRefCode = document.getElementById('confirmedRefCode');

  if (btnSubmitStockRequirement) {
    btnSubmitStockRequirement.addEventListener('click', () => {
      const newReq = store.submitDailyStockRequirement(currentBranchId);
      if (newReq) {
        if (reviewBackdrop) reviewBackdrop.classList.remove('open');
        if (confirmedRefCode) {
          confirmedRefCode.textContent = newReq.reference;
        }
        const confirmedTimeEl = document.getElementById('confirmedTimestampDisplay');
        if (confirmedTimeEl) {
          confirmedTimeEl.innerHTML = `Branch: <strong>${currentBranch.name}</strong> &bull; Recorded Live: <strong>${newReq.timestamp}</strong>`;
        }
        if (confirmBackdrop) confirmBackdrop.classList.add('open');
      }
    });
  }

  const btnViewRequirementsPage = document.getElementById('btnViewRequirementsPage');
  if (btnViewRequirementsPage) {
    btnViewRequirementsPage.addEventListener('click', () => {
      if (confirmBackdrop) confirmBackdrop.classList.remove('open');
      store.setView('requirements');
    });
  }

  const btnGoMatrix = document.getElementById('btnGoToAllBranchesMatrix');
  if (btnGoMatrix) {
    btnGoMatrix.addEventListener('click', () => {
      store.setView('requirements');
    });
  }

  const btnStickyGoMatrix = document.getElementById('btnStickyGoToMatrix');
  if (btnStickyGoMatrix) {
    btnStickyGoMatrix.addEventListener('click', () => {
      store.setView('requirements');
    });
  }

  const btnFinishStockCheck = document.getElementById('btnFinishStockCheck');
  if (btnFinishStockCheck) {
    btnFinishStockCheck.addEventListener('click', () => {
      if (confirmBackdrop) confirmBackdrop.classList.remove('open');
      store.setView('dashboard');
    });
  }

  // --- MANUAL ADD PRODUCT EVENTS ---
  const fastAddModal = document.getElementById('fastAddProductModalBackdrop');
  const btnOpenAddFast = document.getElementById('btnOpenAddProductFast');
  const btnCloseAddFast = document.getElementById('btnCloseFastAddModal');
  const btnCancelAddFast = document.getElementById('btnCancelFastAdd');
  const fastAddForm = document.getElementById('fastAddProductForm');

  if (btnOpenAddFast) {
    btnOpenAddFast.addEventListener('click', () => {
      if (fastAddModal) fastAddModal.classList.add('open');
      const nameInput = document.getElementById('fapName');
      if (nameInput) nameInput.focus();
    });
  }

  if (btnCloseAddFast) {
    btnCloseAddFast.addEventListener('click', () => {
      if (fastAddModal) fastAddModal.classList.remove('open');
    });
  }

  if (btnCancelAddFast) {
    btnCancelAddFast.addEventListener('click', () => {
      if (fastAddModal) fastAddModal.classList.remove('open');
    });
  }

  if (fastAddForm) {
    fastAddForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('fapName').value.trim();
      const category = document.getElementById('fapCategory').value;
      const unit = document.getElementById('fapUnit').value;
      const initialStock = document.getElementById('fapCurrentStock').value;
      const reorderLevel = document.getElementById('fapReorderLevel').value;
      const unitCost = document.getElementById('fapUnitCost').value;

      if (!name) return;

      store.addProduct({
        name,
        category,
        unit,
        initialStock,
        reorderLevel,
        unitCost
      });

      fastAddForm.reset();
      if (fastAddModal) fastAddModal.classList.remove('open');
    });
  }

  // --- PDF MANIFEST DOWNLOAD EVENTS ---
  const pdfModal = document.getElementById('downloadPdfModalBackdrop');
  const btnOpenPdf = document.getElementById('btnOpenManifestPdfModal');
  const btnStickyPdf = document.getElementById('btnStickyDownloadPdf');
  const btnClosePdf = document.getElementById('btnClosePdfModal');
  const btnClosePdfBtn = document.getElementById('btnClosePdfModalBtn');

  const openPdfModalFn = () => {
    if (pdfModal) pdfModal.classList.add('open');
  };

  if (btnOpenPdf) btnOpenPdf.addEventListener('click', openPdfModalFn);
  if (btnStickyPdf) btnStickyPdf.addEventListener('click', openPdfModalFn);

  if (btnClosePdf) {
    btnClosePdf.addEventListener('click', () => {
      if (pdfModal) pdfModal.classList.remove('open');
    });
  }

  if (btnClosePdfBtn) {
    btnClosePdfBtn.addEventListener('click', () => {
      if (pdfModal) pdfModal.classList.remove('open');
    });
  }

  // Helper to gather complete dataset for PDF generation with live timestamp
  const getPdfData = () => {
    return {
      date: store.getLiveDateTimeString(new Date(), true),
      branches: store.branches,
      consolidatedItems: store.getConsolidatedProcurement(),
      branchRequirements: store.getAllBranchesRequirements()
    };
  };

  const getFileDate = () => store.getLiveDateString().replace(/ /g, '_');

  // 1. Master Manifest (Combined + Branch Headlined in 1 PDF)
  const btnDlMaster = document.getElementById('btnDownloadMasterPdf');
  if (btnDlMaster) {
    btnDlMaster.addEventListener('click', () => {
      const data = getPdfData();
      const blob = generateMasterManifestPDF(data);
      downloadBlob(blob, `MD_Fresh_Master_Manifest_${getFileDate()}.pdf`);
    });
  }

  // 2. Combined Only PDF (Mandi Wholesale Buyer List)
  const btnDlCombined = document.getElementById('btnDownloadCombinedOnlyPdf');
  if (btnDlCombined) {
    btnDlCombined.addEventListener('click', () => {
      const data = getPdfData();
      const blob = generateCombinedListOnlyPDF(data);
      downloadBlob(blob, `MD_Fresh_Combined_Total_${getFileDate()}.pdf`);
    });
  }

  // 3. Branch Headlined Only PDF (Store Dispatch Sheet)
  const btnDlBranch = document.getElementById('btnDownloadBranchOnlyPdf');
  if (btnDlBranch) {
    btnDlBranch.addEventListener('click', () => {
      const data = getPdfData();
      const blob = generateBranchHeadlinedPDF(data);
      downloadBlob(blob, `MD_Fresh_Branch_Headlined_${getFileDate()}.pdf`);
    });
  }
}
