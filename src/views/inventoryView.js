// Inventory View Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

let inventorySearchQuery = '';
let inventoryCategoryFilter = 'All';
let inventoryStatusFilter = 'All';
let selectedProductForDrawer = null;

export function renderInventoryView() {
  const currentBranchId = store.currentBranchId;
  const currentBranch = store.branches.find(b => b.id === currentBranchId) || store.branches[0];

  let filtered = store.products.filter(p => {
    // Search filter
    if (inventorySearchQuery.trim() !== '') {
      const q = inventorySearchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.sku.toLowerCase().includes(q) ||
                    p.variety.toLowerCase().includes(q);
      if (!match) return false;
    }
    // Category filter
    if (inventoryCategoryFilter !== 'All' && p.category !== inventoryCategoryFilter) {
      return false;
    }
    // Status filter
    const health = store.getProductStockHealth(p, currentBranchId);
    if (inventoryStatusFilter !== 'All' && health.label !== inventoryStatusFilter) {
      return false;
    }
    return true;
  });

  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Inventory
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          Comprehensive store catalog, real-time stock levels, reorder alerts & movement history
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="btn btn-primary" id="btnOpenAddProductModal">
          ${icon('plus', 'icon-sm')} Add Product
        </button>
      </div>
    </div>

    <!-- Filters Bar -->
    <div class="filter-bar">
      <!-- Search Input -->
      <div class="search-input-group" style="flex: 1; max-width: 320px;">
        ${icon('search', 'icon-sm')}
        <input 
          type="text" 
          id="invSearchInput" 
          placeholder="Search products by name, SKU..." 
          value="${escapeHtml(inventorySearchQuery)}"
        />
        ${inventorySearchQuery ? `<button id="invClearSearchBtn" style="border:none; background:none; cursor:pointer; color:var(--md-text-muted);">${icon('x', 'icon-sm')}</button>` : ''}
      </div>

      <!-- Branch Dropdown -->
      <div class="control-chip" style="background: white;">
        <span>Branch:</span>
        <select id="invBranchFilter" class="branch-select">
          ${store.branches.map(b => `<option value="${b.id}" ${b.id === currentBranchId ? 'selected' : ''}>${b.name}</option>`).join('')}
        </select>
      </div>

      <!-- Category Dropdown -->
      <div class="control-chip" style="background: white;">
        <span>Category:</span>
        <select id="invCategoryFilter" class="branch-select">
          <option value="All" ${inventoryCategoryFilter === 'All' ? 'selected' : ''}>All Categories</option>
          <option value="Fruits" ${inventoryCategoryFilter === 'Fruits' ? 'selected' : ''}>Fruits</option>
          <option value="Vegetables" ${inventoryCategoryFilter === 'Vegetables' ? 'selected' : ''}>Vegetables</option>
        </select>
      </div>

      <!-- Status Dropdown -->
      <div class="control-chip" style="background: white;">
        <span>Status:</span>
        <select id="invStatusFilter" class="branch-select">
          <option value="All" ${inventoryStatusFilter === 'All' ? 'selected' : ''}>All Statuses</option>
          <option value="Healthy" ${inventoryStatusFilter === 'Healthy' ? 'selected' : ''}>Healthy</option>
          <option value="Low Stock" ${inventoryStatusFilter === 'Low Stock' ? 'selected' : ''}>Low Stock</option>
          <option value="Out of Stock" ${inventoryStatusFilter === 'Out of Stock' ? 'selected' : ''}>Out of Stock</option>
          <option value="Reorder" ${inventoryStatusFilter === 'Reorder' ? 'selected' : ''}>Reorder</option>
        </select>
      </div>
    </div>

    <!-- Inventory Table Card -->
    <div class="content-card">
      <div class="card-header">
        <div class="card-header-left">
          ${icon('inventory', 'icon')}
          <div>
            <h3 class="card-title">Stock Catalog &bull; ${currentBranch.name}</h3>
            <span class="card-subtitle">Showing ${filtered.length} products</span>
          </div>
        </div>
        <div style="font-size: 0.8rem; color: var(--md-text-muted);">
          Click any row or action to inspect branch distribution & movement history
        </div>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Branch</th>
                <th>Current Stock</th>
                <th>Unit</th>
                <th>Reorder Level</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="9" style="text-align:center; padding: 48px; color: var(--md-text-muted);">
                    No products found matching the active filters.
                  </td>
                </tr>
              ` : filtered.map(p => {
                const stock = p.stocks[currentBranchId] ?? 0;
                let statusBadge = '';
                if (stock === 0) {
                  statusBadge = `<span class="pill pill-out-of-stock">Out of Stock</span>`;
                } else if (stock <= p.reorderLevel) {
                  statusBadge = `<span class="pill pill-low">Low Stock</span>`;
                } else {
                  statusBadge = `<span class="pill pill-healthy">Healthy</span>`;
                }

                return `
                  <tr class="inv-row-clickable" data-product-id="${p.id}" style="cursor: pointer;">
                    <td>
                      <div class="product-cell">
                        <div class="product-avatar">${p.image}</div>
                        <div class="product-info-text">
                          <span class="product-name-text">${p.name}</span>
                          <span class="product-sub-sku">${p.variety}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="pill pill-unit" style="font-family: monospace;">${p.sku}</span>
                    </td>
                    <td>
                      <span style="font-weight: 600;">${currentBranch.name}</span>
                    </td>
                    <td>
                      <span style="font-size: 1.1rem; font-weight: 800; color: ${stock <= p.reorderLevel ? 'var(--status-danger-text)' : 'inherit'};">
                        ${stock}
                      </span>
                      <span style="font-size: 0.8rem; color: var(--md-text-muted); font-weight: 600;">${p.unit}</span>
                    </td>
                    <td>
                      <span class="pill pill-unit">${p.unit}</span>
                    </td>
                    <td style="font-weight: 700;">
                      ${p.reorderLevel} ${p.unit}
                    </td>
                    <td>${statusBadge}</td>
                    <td style="font-size: 0.8rem; color: var(--md-text-muted);">${p.lastUpdated || '2 min ago'}</td>
                    <td>
                      <button class="btn btn-secondary btn-sm btn-open-product-details" data-product-id="${p.id}">
                        Details →
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

    <!-- Add Product Modal in Inventory -->
    <div id="invAddProductModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 540px;">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">Manual Add Product to Catalog</h3>
            <span style="font-size: 0.78rem; color: var(--md-text-muted);">Add new fruit or vegetable to MD Fresh network</span>
          </div>
          <button id="btnCloseInvAddModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <form id="invAddProductForm">
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
            <div>
              <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Product Name *</label>
              <input type="text" id="invApName" required placeholder="e.g. Alphonso Mango, Kashmiri Apple, Spinach" style="width:100%; padding:8px 12px; border:1.5px solid var(--md-border); border-radius:var(--radius-md); outline:none; font-size: 0.92rem;" />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Category *</label>
                <select id="invApCategory" style="width:100%; padding:8px 12px; border:1.5px solid var(--md-border); border-radius:var(--radius-md); outline:none; font-size: 0.88rem; background: white;">
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                </select>
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Standard Unit *</label>
                <select id="invApUnit" style="width:100%; padding:8px 12px; border:1.5px solid var(--md-border); border-radius:var(--radius-md); outline:none; font-size: 0.88rem; background: white;">
                  <option value="Crates">Crates</option>
                  <option value="Kgs">Kgs</option>
                  <option value="Boxes">Boxes</option>
                  <option value="Bunches">Bunches</option>
                  <option value="Bags">Bags</option>
                  <option value="Packs">Packs</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Initial Stock</label>
                <input type="number" id="invApStock" min="0" value="5" style="width:100%; padding:8px 12px; border:1.5px solid var(--md-border); border-radius:var(--radius-md); outline:none; font-size: 0.92rem;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Reorder Level</label>
                <input type="number" id="invApReorder" min="1" value="3" style="width:100%; padding:8px 12px; border:1.5px solid var(--md-border); border-radius:var(--radius-md); outline:none; font-size: 0.92rem;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Unit Cost (₹)</label>
                <input type="number" id="invApCost" min="0" value="150" style="width:100%; padding:8px 12px; border:1.5px solid var(--md-border); border-radius:var(--radius-md); outline:none; font-size: 0.92rem;" />
              </div>
            </div>
          </div>

          <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 10px; padding: 14px 20px; background: var(--md-surface-subtle); border-top: 1px solid var(--md-border);">
            <button type="button" class="btn btn-secondary" id="btnCancelInvAdd">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 800;">
              ${icon('plus', 'icon-sm')} Add to Inventory
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Product Details Drawer (Branch Breakdown & Stock Movement History) -->
    <div id="productDrawerBackdrop" class="drawer-backdrop">
      <div class="drawer-content" style="width: 480px;">
        <div class="drawer-header">
          <div id="drawerProductTitleBlock">
            <h3 class="modal-title" id="drawerProductName">Product Details</h3>
            <span style="font-size: 0.78rem; color: var(--md-text-muted);" id="drawerProductSKU">SKU</span>
          </div>
          <button id="btnCloseProductDrawer" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <div class="drawer-body" id="drawerBodyContent">
          <!-- Filled dynamically via JS -->
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function setupInventoryEvents() {
  const currentBranchId = store.currentBranchId;

function filterInventoryDOM(query) {
  const q = (query || '').toLowerCase().trim();
  const rows = document.querySelectorAll('.custom-table tbody tr.inv-row-clickable');
  let visibleCount = 0;

  rows.forEach(row => {
    const nameEl = row.querySelector('.product-name-text');
    const subEl = row.querySelector('.product-sub-sku');
    const skuEl = row.querySelector('.pill-unit');
    const text = ((nameEl?.textContent || '') + ' ' + (subEl?.textContent || '') + ' ' + (skuEl?.textContent || '')).toLowerCase();
    const match = !q || text.includes(q);
    row.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });

  const subtitle = document.querySelector('.content-card .card-subtitle');
  if (subtitle) {
    subtitle.textContent = `Showing ${visibleCount} products`;
  }

  const searchGroup = document.getElementById('invSearchInput')?.closest('.search-input-group');
  let clearBtn = document.getElementById('invClearSearchBtn');
  if (q) {
    if (!clearBtn && searchGroup) {
      clearBtn = document.createElement('button');
      clearBtn.id = 'invClearSearchBtn';
      clearBtn.style.cssText = 'border:none; background:none; cursor:pointer; color:var(--md-text-muted); font-size: 0.9rem; padding: 2px 4px;';
      clearBtn.innerHTML = '✕';
      clearBtn.title = 'Clear search';
      clearBtn.addEventListener('click', () => {
        const inp = document.getElementById('invSearchInput');
        if (inp) {
          inp.value = '';
          inventorySearchQuery = '';
          filterInventoryDOM('');
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
  const searchInput = document.getElementById('invSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      inventorySearchQuery = e.target.value;
      filterInventoryDOM(inventorySearchQuery);
    });
  }

  const clearBtn = document.getElementById('invClearSearchBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      inventorySearchQuery = '';
      const inp = document.getElementById('invSearchInput');
      if (inp) inp.value = '';
      filterInventoryDOM('');
      if (inp) inp.focus();
    });
  }

  // Branch filter
  const branchFilter = document.getElementById('invBranchFilter');
  if (branchFilter) {
    branchFilter.addEventListener('change', (e) => {
      store.setBranch(e.target.value);
    });
  }

  // Category filter
  const categoryFilter = document.getElementById('invCategoryFilter');
  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      inventoryCategoryFilter = e.target.value;
      store.notify();
    });
  }

  // Status filter
  const statusFilter = document.getElementById('invStatusFilter');
  if (statusFilter) {
    statusFilter.addEventListener('change', (e) => {
      inventoryStatusFilter = e.target.value;
      store.notify();
    });
  }

  // Open Product Details Drawer
  const drawerBackdrop = document.getElementById('productDrawerBackdrop');
  const drawerBody = document.getElementById('drawerBodyContent');
  const drawerName = document.getElementById('drawerProductName');
  const drawerSKU = document.getElementById('drawerProductSKU');
  const btnCloseDrawer = document.getElementById('btnCloseProductDrawer');

  function openProductDrawer(productId) {
    const prod = store.products.find(p => p.id === productId);
    if (!prod) return;

    selectedProductForDrawer = prod;
    if (drawerName) drawerName.textContent = `${prod.image} ${prod.name}`;
    if (drawerSKU) drawerSKU.textContent = `${prod.sku} • ${prod.category} • Unit: ${prod.unit}`;

    // Get movement history for this product
    const movements = store.stockMovements.filter(m => m.productId === prod.id);

    if (drawerBody) {
      drawerBody.innerHTML = `
        <!-- Card 1: Inventory by Branch -->
        <div style="background-color: var(--md-surface-subtle); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 20px; border: 1px solid var(--md-border);">
          <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--md-text-muted); margin-bottom: 12px;">
            INVENTORY BY BRANCH
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${store.branches.map(b => {
              const bStock = prod.stocks[b.id] ?? 0;
              const isLow = bStock <= prod.reorderLevel;
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: white; border-radius: var(--radius-md); border: 1px solid var(--md-border);">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-weight: 700; font-size: 0.92rem; color: var(--md-text-main);">${b.name}</span>
                    <span class="pill pill-unit" style="font-size: 0.7rem;">${b.code}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-weight: 800; font-size: 1.1rem; color: ${isLow ? 'var(--status-danger-text)' : 'var(--md-primary)'};">
                      ${bStock}
                    </span>
                    <span style="font-size: 0.8rem; color: var(--md-text-muted); font-weight: 600;">${prod.unit}</span>
                    ${isLow ? `<span class="pill pill-low" style="font-size: 0.68rem; padding: 1px 5px;">Low</span>` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Card 2: Stock Movement History -->
        <div style="margin-bottom: 20px;">
          <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--md-text-muted); margin-bottom: 12px;">
            STOCK MOVEMENT HISTORY
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${movements.length === 0 ? `
              <div style="padding: 12px 14px; background: white; border: 1px solid var(--md-border); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-weight: 700; font-size: 0.88rem;">02 Oct 2026</div>
                  <div style="font-size: 0.74rem; color: var(--md-text-muted);">PO Delivery • ANNASANDRAPALYA Hub</div>
                </div>
                <div style="text-align: right;">
                  <span style="color: var(--md-primary); font-weight: 800;">+2 ${prod.unit}</span>
                  <div style="font-size: 0.72rem; color: var(--md-text-muted);">Purchase</div>
                </div>
              </div>
            ` : movements.map(m => {
              const isPositive = m.change.startsWith('+');
              return `
                <div style="padding: 12px 14px; background: white; border: 1px solid var(--md-border); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <div style="font-weight: 700; font-size: 0.88rem; color: var(--md-text-main);">${m.date}</div>
                    <div style="font-size: 0.74rem; color: var(--md-text-muted);">${m.type} &bull; ${m.reference} &bull; ${m.branch}</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-weight: 800; font-size: 0.95rem; color: ${isPositive ? 'var(--status-healthy-text)' : 'var(--status-danger-text)'};">
                      ${m.change}
                    </div>
                    <div style="font-size: 0.7rem; color: var(--md-text-muted);">${m.type}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Supplier & Metadata -->
        <div style="background-color: var(--md-surface-subtle); border-radius: var(--radius-md); padding: 14px; border: 1px solid var(--md-border);">
          <div style="font-size: 0.76rem; font-weight: 700; color: var(--md-text-muted); text-transform: uppercase;">Primary Supplier</div>
          <div style="font-weight: 800; font-size: 0.95rem; color: var(--md-text-main); margin-top: 2px;">${prod.supplierName}</div>
          <div style="font-size: 0.76rem; color: var(--md-text-secondary); margin-top: 4px;">Unit Cost: ₹${prod.unitCost.toLocaleString('en-IN')} / ${prod.unit}</div>
        </div>
      `;
    }

    if (drawerBackdrop) drawerBackdrop.classList.add('open');
  }

  document.querySelectorAll('.btn-open-product-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = e.currentTarget.getAttribute('data-product-id');
      openProductDrawer(pId);
    });
  });

  document.querySelectorAll('.inv-row-clickable').forEach(tr => {
    tr.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'button') return;
      const pId = tr.getAttribute('data-product-id');
      openProductDrawer(pId);
    });
  });

  if (btnCloseDrawer) {
    btnCloseDrawer.addEventListener('click', () => {
      if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    });
  }

  // Add Product Modal handlers
  const invAddModal = document.getElementById('invAddProductModalBackdrop');
  const btnOpenAddProduct = document.getElementById('btnOpenAddProductModal');
  const btnCloseInvAdd = document.getElementById('btnCloseInvAddModal');
  const btnCancelInvAdd = document.getElementById('btnCancelInvAdd');
  const invAddForm = document.getElementById('invAddProductForm');

  if (btnOpenAddProduct) {
    btnOpenAddProduct.addEventListener('click', () => {
      if (invAddModal) invAddModal.classList.add('open');
      const nameInput = document.getElementById('invApName');
      if (nameInput) nameInput.focus();
    });
  }

  if (btnCloseInvAdd) {
    btnCloseInvAdd.addEventListener('click', () => {
      if (invAddModal) invAddModal.classList.remove('open');
    });
  }

  if (btnCancelInvAdd) {
    btnCancelInvAdd.addEventListener('click', () => {
      if (invAddModal) invAddModal.classList.remove('open');
    });
  }

  if (invAddForm) {
    invAddForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('invApName').value.trim();
      const category = document.getElementById('invApCategory').value;
      const unit = document.getElementById('invApUnit').value;
      const initialStock = document.getElementById('invApStock').value;
      const reorderLevel = document.getElementById('invApReorder').value;
      const unitCost = document.getElementById('invApCost').value;

      if (!name) return;

      store.addProduct({
        name,
        category,
        unit,
        initialStock,
        reorderLevel,
        unitCost
      });

      invAddForm.reset();
      if (invAddModal) invAddModal.classList.remove('open');
    });
  }
}
