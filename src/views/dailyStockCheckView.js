// Daily Stock Check View - Optimized for Blazing Fast Numeric Entry
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';
import { generateMasterManifestPDF, generateCombinedListOnlyPDF, generateBranchHeadlinedPDF, downloadBlob } from '../utils/pdfGenerator.js';
import { showToast } from '../utils/toast.js';

let activeCategoryFilter = 'All'; // 'All', 'Fruits', 'Vegetables'
let filterOnlyRequired = false;
let searchQuery = '';

export function renderDailyStockCheckView() {
  const currentBranchId = store.currentBranchId;
  const currentBranch = store.branches.find(b => b.id === currentBranchId) || store.branches[0];
  const draft = store.getBranchStockCheck(currentBranchId);

  // Filter products according to category, search, and flags
  let filteredProducts = store.products.filter(p => {
    // Category filter
    if (activeCategoryFilter !== 'All') {
      const prodCategory = store.getProductCategoryForBranch ? store.getProductCategoryForBranch(currentBranchId, p.id) : p.category;
      if (prodCategory !== activeCategoryFilter) {
        return false;
      }
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
    return true;
  });

  // Apply Kodihalli branch-specific sequence order
  filteredProducts = store.sortProductsForBranch(currentBranchId, filteredProducts);

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

    <!-- Next Day Ready & Stock Receiving Sync Banner -->
    ${store.isReadyForNextDay ? `
      <div style="background: linear-gradient(135deg, #ECFDF5 0%, #E6F7EF 100%); border: 1.5px solid #10B981; border-radius: var(--radius-md); padding: 12px 18px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: #0D8244; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 800; font-size: 0.95rem; color: #064E3B;">
              Daily Order Finalized &amp; PDF Exported — System Reset to 0 for Tomorrow
            </div>
            <div style="font-size: 0.8rem; color: #047857; margin-top: 2px;">
              Incoming delivery dispatch updated in the <strong>Stock Receiving Portal</strong> for morning dockside unloading.
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary btn-sm" id="btnGoToReceivingFromStockCheck" style="font-weight: 800; background: #0D8244;">
            🚚 Open Stock Receiving Portal →
          </button>
        </div>
      </div>
    ` : ''}

    <!-- Kodihalli Sequence Indicator Banner -->
            ${currentBranchId === "BR001" ? `
      <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 10px 16px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">📋</span>
          <div>
            <div style="font-weight: 800; font-size: 0.92rem; color: #166534; display: flex; align-items: center; gap: 8px;">
              <span>Annasandrapalya Branch Standard Sequence Active (102 Produce Items: 62 Veg &bull; 40 Fruits)</span>
              <span class="pill" style="background: #166534; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">ANNASANDRAPALYA SEQUENCE</span>
            </div>
            <div style="font-size: 0.78rem; color: #15803D; margin-top: 2px;">
              Direct morning store audit sequence: <strong>Vegetables (#1 Beans to #62 Tomato Nati)</strong> &bull; <strong>Fruits (#63 Watermelon Normal to #102 Misri Apple)</strong>.
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #166534;">
          Ordered strictly #1 Beans to #102 Misri Apple
        </div>
      </div>
    ` : ""}
    ${currentBranchId === "BR004" ? `
      <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 10px 16px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">📋</span>
          <div>
            <div style="font-weight: 800; font-size: 0.92rem; color: #166534; display: flex; align-items: center; gap: 8px;">
              <span>Basavanagar Branch Standard Sequence Active (104 Produce Items: 40 Fruits &bull; 64 Veg)</span>
              <span class="pill" style="background: #166534; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">BASAVANAGAR SEQUENCE</span>
            </div>
            <div style="font-size: 0.78rem; color: #15803D; margin-top: 2px;">
              Direct morning store audit sequence: <strong>Fruits (#1 Watermelon to #38 Misri Apple)</strong> &bull; <strong>Vegetables (#39 Cucumber to #101 Tomato Farm)</strong>.
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #166534;">
          Ordered strictly #1 Watermelon Normal to #104 Tomato Farm
        </div>
      </div>
    ` : ""}
    ${currentBranchId === "BR003" ? `
      <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 10px 16px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">📋</span>
          <div>
            <div style="font-weight: 800; font-size: 0.92rem; color: #166534; display: flex; align-items: center; gap: 8px;">
              <span>LB Shastri Nagar Branch Standard Sequence Active (103 Produce Items: 62 Veg &bull; 41 Fruits)</span>
              <span class="pill" style="background: #166534; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">LBS NAGAR SEQUENCE</span>
            </div>
            <div style="font-size: 0.78rem; color: #15803D; margin-top: 2px;">
              Direct morning store audit sequence: <strong>Vegetables (#1 Beans to #62 Tomato Nati)</strong> &bull; <strong>Fruits (#63 Robusta to #103 Watermelon Stripes)</strong>.
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #166534;">
          Ordered strictly #1 Beans to #103 Watermelon Stripes
        </div>
      </div>
    ` : ""}
    ${currentBranchId === "BR002" ? `
      <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 10px 16px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">📋</span>
          <div>
            <div style="font-weight: 800; font-size: 0.92rem; color: #166534; display: flex; align-items: center; gap: 8px;">
              <span>Kodihalli Branch Standard Sequence Active (94 Produce Items)</span>
              <span class="pill" style="background: #166534; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 8px;">KODIHALLI SEQUENCE</span>
            </div>
            <div style="font-size: 0.78rem; color: #15803D; margin-top: 2px;">
              Direct morning store audit sequence: <strong>Vegetables</strong> &bull; <strong>Leafy Greens</strong> &bull; <strong>Fruits</strong>.
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #166534;">
          Ordered strictly #1 Cucumber to #94 Mangoes
        </div>
      </div>
    ` : ""}

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

        <!-- RESTORE DELETED PRODUCTS BUTTON -->
        <button 
          id="btnOpenRestoreDeletedModal" 
          class="btn btn-secondary btn-sm btn-open-restore-modal"
          style="font-weight: 800; background: #F8FAFC; color: #334155; border: 1.5px solid #CBD5E1; display: inline-flex; align-items: center; gap: 5px;"
          title="Restore previously removed products back to catalog"
        >
          ♻️ Restore Deleted (<span class="restore-count-badge">${store.getDeletedProducts ? store.getDeletedProducts().length : 0}</span>)
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
                <th style="width: 8%; text-align: center;">S.NO</th>
                <th style="width: 38%;">PRODUCT</th>
                <th style="width: 14%;">UNIT</th>
                <th style="width: 26%;">REQUIRED TO BUY</th>
                <th style="width: 14%; text-align: center;">ACTION</th>
              </tr>
            </thead>
            <tbody>
              ${filteredProducts.length === 0 ? `
                <tr>
                  <td colspan="5" style="text-align: center; padding: 48px; color: var(--md-text-muted);">
                    <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
                    <div style="font-weight: 700; font-size: 1rem; color: var(--md-text-main);">No matching products found</div>
                    <div style="font-size: 0.82rem; margin-top: 4px;">Try adjusting your search query or reset the filters.</div>
                  </td>
                </tr>
              ` : filteredProducts.map((p, index) => {
                const reqQty = draft[p.id] !== undefined ? draft[p.id] : 0;
                const seqNo = store.getBranchItemSerialNo ? store.getBranchItemSerialNo(currentBranchId, p.id, index) : (index + 1);

                return `
                  <tr data-product-id="${p.id}" class="${reqQty > 0 ? 'row-required-highlight' : ''}">
                    <td style="text-align: center; vertical-align: middle;">
                      <span class="pill" style="background: #E0F2FE; color: #0369A1; font-size: 0.78rem; font-weight: 800; padding: 2px 8px; border: 1px solid #BAE6FD;" title="Serial #${seqNo}">#${seqNo}</span>
                    </td>
                    <td>
                      <div class="product-cell">
                        <div class="product-avatar">${p.image}</div>
                        <div class="product-info-text">
                          <span class="product-name-text">${true && store.getBranchItemSequenceIndex(currentBranchId, p.id) < 999 ? `<span class="pill" style="background: #E0F2FE; color: #0369A1; font-size: 0.68rem; font-weight: 800; padding: 1px 6px; margin-right: 6px; border: 1px solid #BAE6FD;" title="Kodihalli Store Sequence #${store.getBranchItemSequenceIndex(currentBranchId, p.id) + 1}">#${store.getBranchItemSequenceIndex(currentBranchId, p.id) + 1}</span>` : ""}${p.name}</span>
                          <span class="product-sub-sku">${p.originalPluName ? `<strong style="color: #0D8244; background: #EAF5EE; padding: 1px 4px; border-radius: 3px; font-size: 0.68rem; margin-right: 4px; border: 1px solid #C6E9D0;">${p.originalPluName}</strong> &bull; ` : ''}${p.sku} &bull; ${p.variety}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="pill pill-unit" style="font-weight: 700;">${p.unit}</span>
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
                    <td style="text-align: center;">
                      <div style="display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
                        <button 
                          type="button" 
                          class="btn btn-secondary btn-sm btn-open-edit-product" 
                          data-product-id="${p.id}" 
                          title="Edit ${p.name} specifications"
                          style="font-size: 0.78rem; font-weight: 700; padding: 5px 10px; display: inline-flex; align-items: center; gap: 4px;"
                        >
                          ${icon('edit', 'icon-xs')} Edit
                        </button>
                        <button 
                          type="button" 
                          class="btn btn-sm btn-clear-stock-item" 
                          data-product-id="${p.id}" 
                          title="Delete requirement"
                          style="font-size: 0.76rem; font-weight: 800; padding: 5px 8px; border: 1.5px solid #FCA5A5; color: #DC2626; background: #FEF2F2; border-radius: 6px; cursor: pointer; display: ${reqQty > 0 ? 'inline-flex' : 'none'}; align-items: center; gap: 3px;"
                        >
                          ${icon('trash', 'icon-xs')} Delete
                        </button>
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
        const reqQty = draft[p.id] !== undefined ? draft[p.id] : 0;

        return `
          <div class="mobile-stock-card" data-product-id="${p.id}">
            <div class="mobile-card-top">
              <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                <span style="font-size: 1.25rem; flex-shrink: 0;">${p.image}</span>
                <div style="min-width: 0;">
                  <div class="mobile-card-product">
                    <span class="pill" style="background: #E0F2FE; color: #0369A1; font-size: 0.68rem; font-weight: 800; padding: 1px 5px; margin-right: 5px; border: 1px solid #BAE6FD;">#${store.getBranchItemSerialNo ? store.getBranchItemSerialNo(currentBranchId, p.id, index) : (index + 1)}</span>${p.name}
                  </div>
                  <div style="font-size: 0.7rem; color: var(--md-text-muted); font-family: monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${p.originalPluName ? `<strong style="color: #0D8244; background: #EAF5EE; padding: 1px 4px; border-radius: 3px; font-size: 0.65rem; margin-right: 4px; border: 1px solid #C6E9D0;">${p.originalPluName}</strong> &bull; ` : ''}${p.sku}
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 5px; flex-shrink: 0;">
                <span class="pill pill-unit" style="font-size: 0.68rem; padding: 2px 6px;">${p.unit}</span>
                <button 
                  type="button" 
                  class="btn-open-edit-product" 
                  data-product-id="${p.id}" 
                  title="Edit product" 
                  style="border: 1px solid var(--md-border); background: white; border-radius: 5px; padding: 2px 6px; font-size: 0.68rem; font-weight: 800; cursor: pointer; color: var(--md-text-main); display: inline-flex; align-items: center; gap: 3px;"
                >
                  ✏️ Edit
                </button>
                <button 
                  type="button" 
                  class="btn-direct-delete-product" 
                  data-product-id="${p.id}" 
                  title="Delete product from catalog" 
                  style="border: 1.5px solid #FCA5A5; background: #FEF2F2; color: #DC2626; border-radius: 5px; padding: 2px 6px; font-size: 0.68rem; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; gap: 2px;"
                >
                  🗑️
                </button>
              </div>
            </div>

            <div class="mobile-card-row">
              <span class="mobile-card-label">Required to Buy</span>
              <div style="display: flex; align-items: center; gap: 6px;">
                <div class="fast-qty-wrapper ${reqQty > 0 ? 'has-value' : ''}" style="width: 125px; height: 32px; padding: 1px 4px 1px 6px;">
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
                    style="font-size: 0.95rem; width: 48px;"
                  />
                  <span class="fast-qty-unit" style="font-size: 0.66rem; padding: 1px 5px;">${p.unit}</span>
                </div>
                <button 
                  type="button" 
                  class="btn-clear-stock-item-mobile" 
                  data-product-id="${p.id}" 
                  title="Delete requirement" 
                  style="background: #FEF2F2; color: #DC2626; border: 1.5px solid #FCA5A5; border-radius: 6px; padding: 0 8px; font-size: 0.72rem; font-weight: 800; cursor: pointer; display: ${reqQty > 0 ? 'inline-flex' : 'none'}; align-items: center; gap: 3px; height: 32px;"
                >
                  ${icon('trash', 'icon-xs')} Delete
                </button>
              </div>
            </div>

            <button class="mobile-next-btn" data-next-index="${index + 1}">
              NEXT PRODUCT ${icon('arrowRight', 'icon-sm')}
            </button>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Bottom Sticky Bar / Collapsible Review Drawer on Mobile -->
    <div class="sticky-bottom-bar is-collapsed" id="stickyBottomBar">
      <!-- Mobile Arrow Toggle Header (keeps full screen view undisturbed until arrow is clicked) -->
      <button type="button" class="sticky-bar-toggle-header" id="btnToggleStickyBar" aria-expanded="false" aria-label="Toggle Review Sheet">
        <div class="toggle-header-left">
          <span class="toggle-count-badge sticky-count-pill-mini">${totalRequiredCount}</span>
          <span class="toggle-header-title">
            <span class="toggle-collapsed-label">${totalRequiredCount} products require purchase</span>
            <span class="toggle-expanded-label" style="display: none;">Hide Review Details</span>
          </span>
        </div>
        <div class="toggle-header-arrow-wrap">
          <span class="toggle-arrow-action-text" id="toggleArrowActionText">Review List</span>
          <span class="sticky-bar-arrow-icon" id="stickyBarArrowIcon">▲</span>
        </div>
      </button>

      <div class="sticky-bottom-bar-content" id="stickyBottomBarContent">
        <div class="sticky-bar-info">
          <div class="sticky-count-pill">${totalRequiredCount}</div>
          <div>
            <div class="sticky-text">${totalRequiredCount} products require purchase</div>
            <div style="font-size: 0.74rem; color: var(--md-text-muted);">
              Branch: ${currentBranch.name} &bull; Ready for market order submission
            </div>
          </div>
        </div>

        <div class="sticky-bar-actions" style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
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
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--md-primary);" id="reviewModalTotalCountBadge">${totalRequiredCount} requirements</span>
          </div>

          <div id="reviewModalItemsList" style="display: flex; flex-direction: column; gap: 10px; max-height: 340px; overflow-y: auto; padding-right: 4px;">
            ${requiredProductsList.length === 0 ? `
              <div style="text-align: center; padding: 32px 16px; color: var(--md-text-muted);">
                <div style="font-size: 2rem; margin-bottom: 8px;">✓</div>
                <div style="font-weight: 800; font-size: 0.95rem; color: var(--md-text-main);">No items requiring purchase</div>
                <div style="font-size: 0.78rem; margin-top: 4px;">Enter quantities in the list to add items to this order.</div>
              </div>
            ` : requiredProductsList.map(item => `
              <div class="review-item-row" data-product-id="${item.productId}" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: white; border: 1.5px solid var(--md-border); border-radius: var(--radius-md); gap: 10px;">
                <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                  <span style="font-size: 1.25rem; flex-shrink: 0;">${item.category === 'Fruits' ? '🍎' : '🥦'}</span>
                  <div style="min-width: 0;">
                    <div style="font-weight: 800; font-size: 0.92rem; color: var(--md-text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.productName}</div>
                    <div style="font-size: 0.74rem; color: var(--md-text-muted); font-family: monospace;">${item.sku} &bull; ${item.category}</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; flex-shrink: 0;">
                  <div style="text-align: right;">
                    <div style="font-weight: 800; font-size: 1.05rem; color: var(--md-primary);">
                      ${item.requiredQty} <span style="font-size: 0.78rem; font-weight: 700; color: var(--md-text-secondary);">${item.unit}</span>
                    </div>
                    <div style="font-size: 0.7rem; color: var(--md-text-muted);">Est. ₹${item.estimatedAmount.toLocaleString('en-IN')}</div>
                  </div>
                  <button 
                    type="button" 
                    class="btn btn-sm btn-delete-review-item" 
                    data-product-id="${item.productId}" 
                    title="Delete item from requirements" 
                    style="border: 1.5px solid #FCA5A5; color: #DC2626; background: #FEF2F2; font-weight: 800; padding: 5px 9px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 3px; font-size: 0.74rem;"
                  >
                    ${icon('trash', 'icon-xs')} Delete
                  </button>
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
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Est. Unit Rate (₹)</label>
                <input type="number" id="fapUnitCost" min="1" value="650" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:0.95rem; font-weight:700; outline:none;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Reorder Level</label>
                <input type="number" id="fapReorderLevel" min="1" value="4" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:0.95rem; font-weight:700; outline:none;" />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="btnCancelFastAdd">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 800; padding: 10px 20px;">
              ${icon('check', 'icon-sm')} Save & Add to Stock Check
            </button>
          </div>
                  </div>

            <!-- Sequence & Serial Number Placement -->
            <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: var(--radius-md); padding: 12px; margin-top: 2px;">
              <div style="font-weight: 800; font-size: 0.8rem; color: #1E293B; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                <span>🔢 Branch Sequence & Serial Number</span>
              </div>
              <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 10px;">
                <div>
                  <label style="display:block; font-size: 0.74rem; font-weight: 700; color: var(--md-text-secondary); margin-bottom: 4px;">Target Sequence</label>
                  <select id="fapTargetBranch" style="width:100%; padding:7px 10px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:0.85rem; font-weight:600; outline:none; background:white;">
                    <option value="ALL">All Branches</option>
                    <option value="BR001" ${currentBranchId === 'BR001' ? 'selected' : ''}>Annasandrapalya (BR-ASP)</option>
                    <option value="BR002" ${currentBranchId === 'BR002' ? 'selected' : ''}>Kodihalli (BR-KDH)</option>
                    <option value="BR003" ${currentBranchId === 'BR003' ? 'selected' : ''}>LB Shastri Nagar (BR-LBS)</option>
                    <option value="BR004" ${currentBranchId === 'BR004' ? 'selected' : ''}>Basavanagar (BR-BSV)</option>
                  </select>
                </div>
                <div>
                  <label style="display:block; font-size: 0.74rem; font-weight: 700; color: var(--md-text-secondary); margin-bottom: 4px;">Insert at Serial No #</label>
                  <input type="number" id="fapSerialNo" min="1" placeholder="e.g. 1, 15, or leave blank" style="width:100%; padding:7px 10px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:0.85rem; font-weight:700; outline:none;" />
                </div>
              </div>
              <div style="font-size: 0.72rem; color: var(--md-text-muted); margin-top: 4px;">
                Specify position (e.g. #1 for top, or #20). Existing items shift automatically.
              </div>
            </div>
        <div class="modal-footer">
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
          <!-- Automatic Reset Notice -->
          <div style="background: #EBF8F1; border: 1.5px solid #A7E0BE; border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.25rem;">✨</span>
            <div style="font-size: 0.82rem; color: #064E3B; font-weight: 600;">
              <strong>Automatic Next-Day Preparation &amp; Receiving Portal Sync:</strong> Downloading any manifest finalizes today's procurement list, updates the <strong>Stock Receiving Portal</strong> with the morning incoming order for each branch, and resets requirements to <strong>0</strong> across all branches.
            </div>
          </div>

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

    // Update Sticky Bottom Bar & Mobile Toggle Header
    const stickyPill = document.querySelector('.sticky-count-pill');
    if (stickyPill) stickyPill.textContent = String(requiredCount);

    const togglePill = document.querySelector('.sticky-count-pill-mini');
    if (togglePill) togglePill.textContent = String(requiredCount);

    const stickyText = document.querySelector('.sticky-text');
    if (stickyText) stickyText.textContent = `${requiredCount} products require purchase`;

    const collapsedLabel = document.querySelector('.toggle-collapsed-label');
    if (collapsedLabel) collapsedLabel.textContent = `${requiredCount} products require purchase`;

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

      // In-place wrapper style update & toggle desktop clear button
      const wrapper = e.target.closest('.fast-qty-wrapper');
      if (wrapper) {
        if (numVal > 0) {
          wrapper.classList.add('has-value');
        } else {
          wrapper.classList.remove('has-value');
        }
      }

      const tr = e.target.closest('tr');
      if (tr) {
        if (numVal > 0) tr.classList.add('row-required-highlight');
        else tr.classList.remove('row-required-highlight');
        const clearBtn = tr.querySelector('.btn-clear-stock-item');
        if (clearBtn) clearBtn.style.display = numVal > 0 ? 'inline-flex' : 'none';
      }

      // Also sync mobile delete button & value if present
      const mBtn = document.querySelector(`.btn-clear-stock-item-mobile[data-product-id="${pId}"]`);
      if (mBtn) mBtn.style.display = numVal > 0 ? 'inline-flex' : 'none';
      const mInp = document.querySelector(`.fast-stock-input-mobile[data-product-id="${pId}"]`);
      if (mInp && mInp.value !== e.target.value) mInp.value = e.target.value;

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
        const tr = e.target.closest('tr');
        if (tr) {
          tr.classList.remove('row-required-highlight');
          const clearBtn = tr.querySelector('.btn-clear-stock-item');
          if (clearBtn) clearBtn.style.display = 'none';
        }
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

      const card = e.target.closest('.mobile-stock-card');
      if (card) {
        const clearBtn = card.querySelector('.btn-clear-stock-item-mobile');
        if (clearBtn) clearBtn.style.display = numVal > 0 ? 'inline-flex' : 'none';
      }

      // Also sync desktop button & value
      const dBtn = document.querySelector(`.btn-clear-stock-item[data-product-id="${pId}"]`);
      if (dBtn) dBtn.style.display = numVal > 0 ? 'inline-flex' : 'none';
      const dInp = document.querySelector(`.fast-stock-input[data-product-id="${pId}"]`);
      if (dInp && dInp.value !== e.target.value) dInp.value = e.target.value;

      updateLiveCheckSummary();
    });

    input.addEventListener('blur', (e) => {
      if (e.target.value.trim() === '') {
        e.target.value = '0';
        const pId = e.target.getAttribute('data-product-id');
        store.updateRequiredQuantity(currentBranchId, pId, 0, false);
        const wrapper = e.target.closest('.fast-qty-wrapper');
        if (wrapper) wrapper.classList.remove('has-value');
        const card = e.target.closest('.mobile-stock-card');
        if (card) {
          const clearBtn = card.querySelector('.btn-clear-stock-item-mobile');
          if (clearBtn) clearBtn.style.display = 'none';
        }
        updateLiveCheckSummary();
      }
    });

    input.addEventListener('focus', (e) => e.target.select());
  });

  // Handle manual deletion of requirement (reset to 0) directly from desktop row or mobile card
  document.querySelectorAll('.btn-clear-stock-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const pId = e.currentTarget.getAttribute('data-product-id');
      if (!pId) return;

      store.updateRequiredQuantity(currentBranchId, pId, 0, false);

      const tr = e.currentTarget.closest('tr');
      if (tr) {
        tr.classList.remove('row-required-highlight');
        const input = tr.querySelector('.fast-stock-input');
        if (input) input.value = '0';
        const wrapper = tr.querySelector('.fast-qty-wrapper');
        if (wrapper) wrapper.classList.remove('has-value');
        e.currentTarget.style.display = 'none';
      }

      const mobileInput = document.querySelector(`.fast-stock-input-mobile[data-product-id="${pId}"]`);
      if (mobileInput) {
        mobileInput.value = '0';
        const mWrapper = mobileInput.closest('.fast-qty-wrapper');
        if (mWrapper) mWrapper.classList.remove('has-value');
      }
      const mobileClearBtn = document.querySelector(`.btn-clear-stock-item-mobile[data-product-id="${pId}"]`);
      if (mobileClearBtn) mobileClearBtn.style.display = 'none';

      updateLiveCheckSummary();
      const prod = store.products.find(p => p.id === pId);
      showToast(`Deleted "${prod?.name || 'Item'}" from requirements`, 'info');
    });
  });

  document.querySelectorAll('.btn-clear-stock-item-mobile').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const pId = e.currentTarget.getAttribute('data-product-id');
      if (!pId) return;

      store.updateRequiredQuantity(currentBranchId, pId, 0, false);

      const card = e.currentTarget.closest('.mobile-stock-card');
      if (card) {
        const input = card.querySelector('.fast-stock-input-mobile');
        if (input) input.value = '0';
        const wrapper = card.querySelector('.fast-qty-wrapper');
        if (wrapper) wrapper.classList.remove('has-value');
        e.currentTarget.style.display = 'none';
      }

      const desktopInput = document.querySelector(`.fast-stock-input[data-product-id="${pId}"]`);
      if (desktopInput) {
        desktopInput.value = '0';
        const dWrapper = desktopInput.closest('.fast-qty-wrapper');
        if (dWrapper) dWrapper.classList.remove('has-value');
        const tr = desktopInput.closest('tr');
        if (tr) tr.classList.remove('row-required-highlight');
      }
      const desktopClearBtn = document.querySelector(`.btn-clear-stock-item[data-product-id="${pId}"]`);
      if (desktopClearBtn) desktopClearBtn.style.display = 'none';

      updateLiveCheckSummary();
      const prod = store.products.find(p => p.id === pId);
      showToast(`Deleted "${prod?.name || 'Item'}" from requirements`, 'info');
    });
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

  function populateReviewModal() {
    const listEl = document.getElementById('reviewModalItemsList');
    const badgeEl = document.getElementById('reviewModalTotalCountBadge');
    if (!listEl) return;

    const freshReqs = store.getRequiredItemsForBranch(currentBranchId);
    if (badgeEl) badgeEl.textContent = `${freshReqs.length} requirements`;

    if (freshReqs.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 36px 16px; color: var(--md-text-muted);">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">✓</div>
          <div style="font-weight: 800; font-size: 1rem; color: var(--md-text-main);">No items requiring purchase</div>
          <div style="font-size: 0.8rem; margin-top: 4px;">All items have been cleared. Enter quantities in the list to order produce.</div>
        </div>
      `;
      return;
    }

    listEl.innerHTML = freshReqs.map(item => `
      <div class="review-item-row" data-product-id="${item.productId}" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: white; border: 1.5px solid var(--md-border); border-radius: var(--radius-md); gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
          <span style="font-size: 1.25rem; flex-shrink: 0;">${item.category === 'Fruits' ? '🍎' : '🥦'}</span>
          <div style="min-width: 0;">
            <div style="font-weight: 800; font-size: 0.92rem; color: var(--md-text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.productName}</div>
            <div style="font-size: 0.74rem; color: var(--md-text-muted); font-family: monospace;">${item.sku} &bull; ${item.category}</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; flex-shrink: 0;">
          <div style="text-align: right;">
            <div style="font-weight: 800; font-size: 1.05rem; color: var(--md-primary);">
              ${item.requiredQty} <span style="font-size: 0.78rem; font-weight: 700; color: var(--md-text-secondary);">${item.unit}</span>
            </div>
            <div style="font-size: 0.7rem; color: var(--md-text-muted);">Est. ₹${item.estimatedAmount.toLocaleString('en-IN')}</div>
          </div>
          <button 
            type="button" 
            class="btn btn-sm btn-delete-review-item" 
            data-product-id="${item.productId}" 
            title="Delete item from requirements" 
            style="border: 1.5px solid #FCA5A5; color: #DC2626; background: #FEF2F2; font-weight: 800; padding: 5px 9px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 3px; font-size: 0.74rem;"
          >
            ${icon('trash', 'icon-xs')} Delete
          </button>
        </div>
      </div>
    `).join('');

    // Attach deletion handlers inside review modal
    listEl.querySelectorAll('.btn-delete-review-item').forEach(delBtn => {
      delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const pId = e.currentTarget.getAttribute('data-product-id');
        if (!pId) return;

        store.updateRequiredQuantity(currentBranchId, pId, 0, false);

        // Update main desktop input & wrapper
        const dInp = document.querySelector(`.fast-stock-input[data-product-id="${pId}"]`);
        if (dInp) {
          dInp.value = '0';
          const w = dInp.closest('.fast-qty-wrapper');
          if (w) w.classList.remove('has-value');
          const tr = dInp.closest('tr');
          if (tr) tr.classList.remove('row-required-highlight');
          const dBtn = tr?.querySelector('.btn-clear-stock-item');
          if (dBtn) dBtn.style.display = 'none';
        }

        // Update main mobile input & wrapper
        const mInp = document.querySelector(`.fast-stock-input-mobile[data-product-id="${pId}"]`);
        if (mInp) {
          mInp.value = '0';
          const w = mInp.closest('.fast-qty-wrapper');
          if (w) w.classList.remove('has-value');
          const mCard = mInp.closest('.mobile-stock-card');
          const mBtn = mCard?.querySelector('.btn-clear-stock-item-mobile');
          if (mBtn) mBtn.style.display = 'none';
        }

        populateReviewModal();
        updateLiveCheckSummary();

        const prod = store.products.find(p => p.id === pId);
        showToast(`Deleted "${prod?.name || 'Item'}" from requirements`, 'info');
      });
    });
  }

  if (btnReviewRequirements) {
    btnReviewRequirements.addEventListener('click', () => {
      populateReviewModal();
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

  const btnGoReceiving = document.getElementById('btnGoToReceivingFromStockCheck');
  if (btnGoReceiving) {
    btnGoReceiving.addEventListener('click', () => {
      store.setView('receiving');
    });
  }

  // Toggle Collapsible Mobile Review Bar via Arrow
  const stickyBar = document.getElementById('stickyBottomBar');
  const btnToggleSticky = document.getElementById('btnToggleStickyBar');
  const arrowIcon = document.getElementById('stickyBarArrowIcon');
  const toggleActionText = document.getElementById('toggleArrowActionText');
  const collapsedLabelEl = document.querySelector('.toggle-collapsed-label');
  const expandedLabelEl = document.querySelector('.toggle-expanded-label');

  if (btnToggleSticky && stickyBar) {
    btnToggleSticky.addEventListener('click', () => {
      const isCurrentlyCollapsed = stickyBar.classList.contains('is-collapsed');
      if (isCurrentlyCollapsed) {
        stickyBar.classList.remove('is-collapsed');
        stickyBar.classList.add('is-expanded');
        btnToggleSticky.setAttribute('aria-expanded', 'true');
        if (arrowIcon) arrowIcon.textContent = '▼';
        if (toggleActionText) toggleActionText.textContent = 'Hide';
        if (collapsedLabelEl) collapsedLabelEl.style.display = 'none';
        if (expandedLabelEl) expandedLabelEl.style.display = 'inline';
      } else {
        stickyBar.classList.add('is-collapsed');
        stickyBar.classList.remove('is-expanded');
        btnToggleSticky.setAttribute('aria-expanded', 'false');
        if (arrowIcon) arrowIcon.textContent = '▲';
        if (toggleActionText) toggleActionText.textContent = 'Review List';
        if (collapsedLabelEl) collapsedLabelEl.style.display = 'inline';
        if (expandedLabelEl) expandedLabelEl.style.display = 'none';
      }
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
      const initialStock = 0;
      const reorderLevel = document.getElementById('fapReorderLevel') ? document.getElementById('fapReorderLevel').value : 4;
      const unitCost = document.getElementById('fapUnitCost').value;

      if (!name) return;

      const targetBranch = document.getElementById('fapTargetBranch') ? document.getElementById('fapTargetBranch').value : 'ALL';
      const serialNo = document.getElementById('fapSerialNo') ? document.getElementById('fapSerialNo').value : null;

      store.addProduct({
        name,
        category,
        unit,
        initialStock,
        reorderLevel,
        unitCost
      }, {
        targetBranch,
        serialNo
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
      store.finalizeOrderAndResetForNextDay({ source: 'DAILY_STOCK_CHECK_MASTER_PDF' });
      if (pdfModal) pdfModal.classList.remove('open');
      showToast('Master Manifest PDF downloaded! Incoming dispatch updated in Stock Receiving Portal & reset for tomorrow.', 'success');
    });
  }

  // 2. Combined Only PDF (Mandi Wholesale Buyer List)
  const btnDlCombined = document.getElementById('btnDownloadCombinedOnlyPdf');
  if (btnDlCombined) {
    btnDlCombined.addEventListener('click', () => {
      const data = getPdfData();
      const blob = generateCombinedListOnlyPDF(data);
      downloadBlob(blob, `MD_Fresh_Combined_Total_${getFileDate()}.pdf`);
      store.finalizeOrderAndResetForNextDay({ source: 'DAILY_STOCK_CHECK_COMBINED_PDF' });
      if (pdfModal) pdfModal.classList.remove('open');
      showToast('Combined Wholesale Buyer PDF downloaded! Incoming dispatch updated in Stock Receiving Portal & reset for tomorrow.', 'success');
    });
  }

  // 3. Branch Headlined Only PDF (Store Dispatch Sheet)
  const btnDlBranch = document.getElementById('btnDownloadBranchOnlyPdf');
  if (btnDlBranch) {
    btnDlBranch.addEventListener('click', () => {
      const data = getPdfData();
      const blob = generateBranchHeadlinedPDF(data);
      downloadBlob(blob, `MD_Fresh_Branch_Headlined_${getFileDate()}.pdf`);
      store.finalizeOrderAndResetForNextDay({ source: 'DAILY_STOCK_CHECK_BRANCH_PDF' });
      if (pdfModal) pdfModal.classList.remove('open');
      showToast('Branch Dispatch List PDF downloaded! Incoming dispatch updated in Stock Receiving Portal & reset for tomorrow.', 'success');
    });
  }
}
