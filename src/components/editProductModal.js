// Reusable Edit Product Modal Component for MD Fresh
// Allows editing any existing or newly added product across all views
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

let currentEditingProductId = null;

export function renderEditProductModal() {
  return `
    <div id="editProductModalBackdrop" class="modal-backdrop" style="z-index: 10000;">
      <div class="modal-content" style="max-width: 580px; max-height: 90vh; display: flex; flex-direction: column;">
        <div class="modal-header" style="border-bottom: 1.5px solid var(--md-border); padding: 18px 24px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div id="editProdAvatarDisplay" style="width: 44px; height: 44px; border-radius: 10px; background: #E8F6ED; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; border: 1.5px solid #A7E0BE; flex-shrink: 0;">
              📦
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h3 class="modal-title" style="font-size: 1.2rem; font-weight: 800; color: var(--md-secondary-dark);" id="editProductModalTitle">
                  Edit Product Details
                </h3>
                <span id="editProdIdBadge" class="pill pill-unit" style="font-family: monospace; font-size: 0.72rem; font-weight: 800;">PRD001</span>
              </div>
              <span style="font-size: 0.78rem; color: var(--md-text-muted);">
                Modify specifications, units, supplier, or reorder thresholds
              </span>
            </div>
          </div>
          <button type="button" id="btnCloseEditProdModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary); padding: 4px;">
            ${icon('x', 'icon')}
          </button>
        </div>

        <form id="editProductForm" style="display: flex; flex-direction: column; overflow-y: auto; flex: 1;">
          <input type="hidden" id="editProdId" value="" />

          <div class="modal-body" style="padding: 20px 24px; display: flex; flex-direction: column; gap: 16px;">
            <!-- Row 1: Name and Variety -->
            <div style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px; color: var(--md-text-main);">Product Name *</label>
                <input type="text" id="editProdName" required placeholder="e.g. Kashmiri Apple, Tomato Hybrid" style="width:100%; padding:9px 12px; border:1.5px solid var(--md-border-strong); border-radius:var(--radius-md); font-size:0.95rem; font-weight:700; outline:none;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px; color: var(--md-text-main);">Variety / Grade</label>
                <input type="text" id="editProdVariety" placeholder="e.g. Grade A, Local, Hybrid" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:0.92rem; outline:none;" />
              </div>
            </div>

            <!-- Row 2: SKU & Category -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px; color: var(--md-text-main);">SKU Code *</label>
                <input type="text" id="editProdSku" required placeholder="e.g. FRU-001" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-family:monospace; font-weight:700; outline:none;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px; color: var(--md-text-main);">Category *</label>
                <select id="editProdCategory" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-weight:700; outline:none;">
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Dairy & Others">Dairy & Others</option>
                </select>
              </div>
            </div>

            <!-- Row 3: Standard Unit & Emoji Icon -->
            <div style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 800; margin-bottom: 4px; color: var(--md-primary);">Standard Unit *</label>
                <select id="editProdUnit" style="width:100%; padding:9px 12px; border:1.5px solid var(--md-primary); border-radius:var(--radius-md); font-weight:800; color:var(--md-primary); outline:none;">
                  <option value="Crates">Crates</option>
                  <option value="Crate">Crate</option>
                  <option value="Bunches">Bunches</option>
                  <option value="Bunch">Bunch</option>
                  <option value="Bags">Bags</option>
                  <option value="Bag">Bag</option>
                  <option value="Boxes">Boxes</option>
                  <option value="Box">Box</option>
                  <option value="Kg">Kg</option>
                  <option value="Gram">Gram</option>
                  <option value="Pieces">Pieces</option>
                  <option value="Piece">Piece</option>
                  <option value="Dozen">Dozen</option>
                </select>
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px; color: var(--md-text-main);">Icon / Emoji</label>
                <div style="display: flex; gap: 6px; align-items: center;">
                  <input type="text" id="editProdImage" maxlength="4" style="width:50px; text-align:center; padding:7px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-size:1.3rem; outline:none;" />
                  <div style="display: flex; gap: 3px; flex-wrap: wrap; max-width: 140px;">
                    ${['🍎', '🍅', '🧅', '🥔', '🍌', '🥭', '🥬', '🥕', '🍊', '🍉'].map(em => `
                      <button type="button" class="btn-quick-emoji" data-emoji="${em}" style="border:none; background:#F1F5F9; border-radius:4px; cursor:pointer; font-size:0.95rem; padding:1px 3px;">${em}</button>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 4: Reorder Level & Unit Cost -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px; color: var(--md-text-main);">Reorder Level (Per Branch) *</label>
                <input type="number" id="editProdReorderLevel" required min="1" max="9999" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-weight:700; outline:none;" />
              </div>

              <div>
                <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px; color: var(--md-text-main);">Est. Unit Cost (₹) *</label>
                <input type="number" id="editProdUnitCost" required min="0" max="999999" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-weight:700; outline:none;" />
              </div>
            </div>

            <!-- Row 5: Wholesale Supplier -->
            <div>
              <label style="display:block; font-size: 0.78rem; font-weight: 700; margin-bottom: 4px; color: var(--md-text-main);">Wholesale Supplier *</label>
              <select id="editProdSupplier" style="width:100%; padding:9px 12px; border:1px solid var(--md-border); border-radius:var(--radius-md); font-weight:600; outline:none;">
                ${store.suppliers.map(s => `<option value="${s.name}">${s.name} (${s.mandi})</option>`).join('')}
              </select>
            </div>

            <!-- Row 6: Collapsible Branch Physical Stock Adjustment -->
            <details style="background: var(--md-surface-subtle); border: 1px solid var(--md-border); border-radius: var(--radius-md); padding: 10px 14px;">
              <summary style="font-size: 0.82rem; font-weight: 800; cursor: pointer; color: var(--md-secondary-dark); user-select: none;">
                🏢 Adjust Physical Current Stock Per Branch (Optional)
              </summary>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                ${store.branches.map(b => `
                  <div>
                    <label style="display:block; font-size: 0.72rem; font-weight: 700; color: var(--md-text-muted); margin-bottom: 2px;">${b.name}</label>
                    <input type="number" min="0" max="9999" id="editProdStock_${b.id}" style="width:100%; padding:6px 10px; border:1px solid var(--md-border); border-radius:var(--radius-sm); font-weight:700;" />
                  </div>
                `).join('')}
              </div>
            </details>
          </div>

          <div class="modal-footer" style="border-top: 1.5px solid var(--md-border); padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; background: #FAFAFA;">
            <button type="button" class="btn btn-outline-danger btn-sm" id="btnDeleteCurrentProduct" style="border: 1.5px solid #FCA5A5; color: #DC2626; background: #FEF2F2; font-weight: 700; padding: 7px 14px;">
              ${icon('trash', 'icon-sm')} Delete Product
            </button>

            <div style="display: flex; gap: 8px;">
              <button type="button" class="btn btn-secondary" id="btnCancelEditProdModal">Cancel</button>
              <button type="submit" class="btn btn-primary" style="font-weight: 800; padding: 8px 20px;">
                ${icon('check', 'icon-sm')} Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function openEditProductModal(productId) {
  const prod = store.products.find(p => p.id === productId);
  if (!prod) return;

  currentEditingProductId = prod.id;

  const backdrop = document.getElementById('editProductModalBackdrop');
  if (!backdrop) return;

  const editId = document.getElementById('editProdId');
  const editIdBadge = document.getElementById('editProdIdBadge');
  const avatarDisplay = document.getElementById('editProdAvatarDisplay');
  const nameInput = document.getElementById('editProdName');
  const varietyInput = document.getElementById('editProdVariety');
  const skuInput = document.getElementById('editProdSku');
  const catSelect = document.getElementById('editProdCategory');
  const unitSelect = document.getElementById('editProdUnit');
  const imgInput = document.getElementById('editProdImage');
  const reorderInput = document.getElementById('editProdReorderLevel');
  const costInput = document.getElementById('editProdUnitCost');
  const supplierSelect = document.getElementById('editProdSupplier');

  if (editId) editId.value = prod.id;
  if (editIdBadge) editIdBadge.textContent = prod.id;
  if (avatarDisplay) avatarDisplay.textContent = prod.image || '📦';
  if (nameInput) nameInput.value = prod.name;
  if (varietyInput) varietyInput.value = prod.variety || '';
  if (skuInput) skuInput.value = prod.sku;
  if (catSelect) catSelect.value = prod.category;
  if (unitSelect) unitSelect.value = prod.unit;
  if (imgInput) imgInput.value = prod.image || '📦';
  if (reorderInput) reorderInput.value = prod.reorderLevel;
  if (costInput) costInput.value = prod.unitCost;
  if (supplierSelect) supplierSelect.value = prod.supplierName || (store.suppliers[0]?.name || '');

  store.branches.forEach(b => {
    const stockInp = document.getElementById(`editProdStock_${b.id}`);
    if (stockInp) {
      stockInp.value = prod.stocks[b.id] ?? 0;
    }
  });

  backdrop.classList.add('open');
  if (nameInput) {
    nameInput.focus();
    nameInput.select();
  }
}

export function setupEditProductModalEvents() {
  const backdrop = document.getElementById('editProductModalBackdrop');
  const form = document.getElementById('editProductForm');
  const btnClose = document.getElementById('btnCloseEditProdModal');
  const btnCancel = document.getElementById('btnCancelEditProdModal');
  const btnDelete = document.getElementById('btnDeleteCurrentProduct');
  const avatarDisplay = document.getElementById('editProdAvatarDisplay');
  const imgInput = document.getElementById('editProdImage');

  // Quick emoji buttons
  document.querySelectorAll('.btn-quick-emoji').forEach(btn => {
    btn.addEventListener('click', () => {
      const em = btn.getAttribute('data-emoji');
      if (imgInput) imgInput.value = em;
      if (avatarDisplay) avatarDisplay.textContent = em;
    });
  });

  if (imgInput) {
    imgInput.addEventListener('input', (e) => {
      if (avatarDisplay) avatarDisplay.textContent = e.target.value.trim() || '📦';
    });
  }

  const closeModal = () => {
    if (backdrop) backdrop.classList.remove('open');
  };

  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (btnCancel) btnCancel.addEventListener('click', closeModal);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const pId = document.getElementById('editProdId')?.value;
      if (!pId) return;

      const name = document.getElementById('editProdName')?.value.trim();
      const variety = document.getElementById('editProdVariety')?.value.trim();
      const sku = document.getElementById('editProdSku')?.value.trim();
      const category = document.getElementById('editProdCategory')?.value;
      const unit = document.getElementById('editProdUnit')?.value;
      const image = document.getElementById('editProdImage')?.value.trim();
      const reorderLevel = parseInt(document.getElementById('editProdReorderLevel')?.value, 10) || 4;
      const unitCost = parseInt(document.getElementById('editProdUnitCost')?.value, 10) || 0;
      const supplierName = document.getElementById('editProdSupplier')?.value;

      const stocks = {};
      store.branches.forEach(b => {
        const inp = document.getElementById(`editProdStock_${b.id}`);
        if (inp) stocks[b.id] = parseInt(inp.value, 10) || 0;
      });

      const res = store.updateProduct(pId, {
        name,
        variety,
        sku,
        category,
        unit,
        image,
        reorderLevel,
        unitCost,
        supplierName,
        stocks
      });

      if (res.success) {
        closeModal();
        showToast(`Product "${res.product.name}" updated successfully!`, 'success');
      }
    });
  }

  if (btnDelete) {
    btnDelete.addEventListener('click', () => {
      const pId = document.getElementById('editProdId')?.value;
      const prod = store.products.find(p => p.id === pId);
      if (!prod) return;

      const confirmed = typeof window !== 'undefined' && window.confirm
        ? window.confirm(`Are you sure you want to remove "${prod.name}" (${prod.sku}) from the catalog?`)
        : true;

      if (confirmed) {
        store.deleteProduct(pId);
        closeModal();
        showToast(`Product "${prod.name}" removed from catalog`, 'warning');
      }
    });
  }

  // Global delegated click listener for any button with class .btn-open-edit-product
  document.addEventListener('click', (e) => {
    const editBtn = e.target.closest('.btn-open-edit-product');
    if (editBtn) {
      e.preventDefault();
      e.stopPropagation();
      const pId = editBtn.getAttribute('data-product-id');
      if (pId) {
        openEditProductModal(pId);
      }
    }
  });
}
