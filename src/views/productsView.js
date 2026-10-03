// Product Management View for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderProductsView() {
  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Product Catalog & Unit Management
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          Standardized units of measure, wholesale supplier linkages and default reorder thresholds
        </p>
      </div>

      <button class="btn btn-primary" id="btnOpenNewProductModal">
        ${icon('plus', 'icon-sm')} Add New Product
      </button>
    </div>

    <!-- Product Grid of Cards -->
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 18px; margin-bottom: 30px;">
      ${store.products.map(p => {
        const totalAllStock = Object.values(p.stocks).reduce((a, b) => a + b, 0);
        return `
          <div class="content-card" style="margin-bottom: 0; padding: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.75rem;">${p.image}</span>
                <div>
                  <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--md-text-main);">${p.name}</h3>
                  <span style="font-size: 0.74rem; color: var(--md-text-muted); font-family: monospace;">${p.sku}</span>
                </div>
              </div>
              <span class="pill pill-healthy" style="font-size: 0.7rem;">Active</span>
            </div>

            <!-- UNIT BADGE CLEARLY HIGHLIGHTED -->
            <div style="background-color: var(--md-primary-light); border: 1px solid var(--md-primary-light-border); border-radius: var(--radius-md); padding: 8px 12px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--md-secondary-dark);">Standard Unit:</span>
              <span style="font-size: 0.95rem; font-weight: 800; color: var(--md-primary);">${p.unit}</span>
            </div>

            <div style="font-size: 0.82rem; display: flex; flex-direction: column; gap: 6px;">
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--md-text-muted);">Category</span>
                <span style="font-weight: 700;">${p.category}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--md-text-muted);">Reorder Level</span>
                <span style="font-weight: 700; color: var(--status-warning-text);">${p.reorderLevel} ${p.unit}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--md-text-muted);">Wholesale Supplier</span>
                <span style="font-weight: 600; text-align: right; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${p.supplierName}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--md-text-muted);">Total Network Stock</span>
                <span style="font-weight: 800; color: var(--md-primary);">${totalAllStock} ${p.unit}</span>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Add Product Modal -->
    <div id="newProductModalBackdrop" class="modal-backdrop">
      <div class="modal-content" style="max-width: 580px;">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">Create New MD Fresh Product</h3>
            <span style="font-size: 0.76rem; color: var(--md-text-muted);">Add inventory item to Bangalore retail network</span>
          </div>
          <button id="btnCloseNewProdModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <form id="newProductForm">
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Product Name *</label>
                <input type="text" id="npName" required placeholder="e.g. Kashmiri Apple" style="width:100%; padding:8px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); outline:none;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">SKU *</label>
                <input type="text" id="npSku" required placeholder="e.g. FRU-011" style="width:100%; padding:8px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-family:monospace; outline:none;" />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Category *</label>
                <select id="npCategory" style="width:100%; padding:8px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); outline:none;">
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                </select>
              </div>

              <!-- UNIT DROPDOWN AS SPECIFIED BY USER -->
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Standard Unit *</label>
                <select id="npUnit" style="width:100%; padding:8px 12px; border:1.5px solid var(--md-primary); border-radius:var(--radius-md); font-weight:700; outline:none;">
                  <option value="Crate">Crate</option>
                  <option value="Crates" selected>Crates</option>
                  <option value="Bunch">Bunch</option>
                  <option value="Bunches">Bunches</option>
                  <option value="Kg">Kg</option>
                  <option value="Gram">Gram</option>
                  <option value="Box">Box</option>
                  <option value="Boxes">Boxes</option>
                  <option value="Bag">Bag</option>
                  <option value="Bags">Bags</option>
                  <option value="Piece">Piece</option>
                  <option value="Pieces">Pieces</option>
                  <option value="Dozen">Dozen</option>
                  <option value="Custom">+ Custom Unit (Settings)</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Reorder Level (Per Branch) *</label>
                <input type="number" id="npReorderLevel" required min="1" value="4" style="width:100%; padding:8px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); outline:none;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Est. Unit Cost (₹) *</label>
                <input type="number" id="npUnitCost" required min="1" value="850" style="width:100%; padding:8px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); outline:none;" />
              </div>
            </div>

            <div>
              <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px;">Wholesale Supplier *</label>
              <select id="npSupplier" style="width:100%; padding:8px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); outline:none;">
                ${store.suppliers.map(s => `<option value="${s.name}">${s.name} (${s.mandi})</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="btnCancelNewProd">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 800;">
              ${icon('check', 'icon-sm')} Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function setupProductsEvents() {
  const modalBackdrop = document.getElementById('newProductModalBackdrop');
  const btnOpen = document.getElementById('btnOpenNewProductModal');
  const btnClose = document.getElementById('btnCloseNewProdModal');
  const btnCancel = document.getElementById('btnCancelNewProd');
  const form = document.getElementById('newProductForm');

  if (btnOpen) {
    btnOpen.addEventListener('click', () => {
      if (modalBackdrop) modalBackdrop.classList.add('open');
    });
  }

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      if (modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }

  if (btnCancel) {
    btnCancel.addEventListener('click', () => {
      if (modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('npName').value;
      const sku = document.getElementById('npSku').value;
      const category = document.getElementById('npCategory').value;
      const unit = document.getElementById('npUnit').value;
      const reorderLevel = document.getElementById('npReorderLevel').value;
      const unitCost = document.getElementById('npUnitCost').value;
      const supplierName = document.getElementById('npSupplier').value;

      store.addProduct({
        name,
        sku,
        category,
        unit: unit === 'Custom' ? 'Crates' : unit,
        reorderLevel,
        unitCost,
        supplierName,
        stockBR001: 5,
        stockBR002: 4,
        stockBR003: 3,
        stockBR004: 2
      });

      if (modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }
}
