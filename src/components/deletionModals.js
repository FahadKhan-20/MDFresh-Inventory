// Deletion Confirmation & Restore Deleted Products Modals for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

let pendingDeleteProductId = null;
let deletionModalsEventsAttached = false;

/**
 * Trigger the confirmation modal before permanently deleting any product
 * Works consistently across all devices (Desktop, Mobile, Tablet)
 */
export function promptDeleteProduct(productId) {
  const prod = store.products.find(p => p.id === productId);
  if (!prod) return;

  pendingDeleteProductId = productId;
  const modal = document.getElementById('confirmDeleteModalBackdrop');
  const nameEl = document.getElementById('confirmDeleteProductName');
  const skuEl = document.getElementById('confirmDeleteProductSku');

  if (nameEl) nameEl.textContent = prod.name;
  if (skuEl) skuEl.textContent = prod.sku;

  if (modal) {
    modal.classList.add('open');
  }
}

export function closeDeleteConfirmModal() {
  pendingDeleteProductId = null;
  const modal = document.getElementById('confirmDeleteModalBackdrop');
  if (modal) {
    modal.classList.remove('open');
  }
}

export function openRestoreModal() {
  const modal = document.getElementById('restoreProductsModalBackdrop');
  if (modal) {
    populateRestoreModalContent();
    modal.classList.add('open');
  }
}

export function closeRestoreModal() {
  const modal = document.getElementById('restoreProductsModalBackdrop');
  if (modal) {
    modal.classList.remove('open');
  }
}

export function populateRestoreModalContent() {
  const listContainer = document.getElementById('restoreModalItemsBody');
  const countBadge = document.getElementById('restoreModalCountText');
  const restoreAllBtn = document.getElementById('btnRestoreAllDeleted');

  const deleted = store.getDeletedProducts();

  if (countBadge) {
    countBadge.textContent = `${deleted.length} deleted product${deleted.length === 1 ? '' : 's'} available to restore`;
  }

  if (restoreAllBtn) {
    restoreAllBtn.style.display = deleted.length > 0 ? 'inline-flex' : 'none';
  }

  // Update badge count buttons across the UI
  document.querySelectorAll('.restore-count-badge').forEach(el => {
    el.textContent = deleted.length;
  });

  if (!listContainer) return;

  if (deleted.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--md-text-muted);">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: #E8F6ED; color: #0D8244; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 12px auto; border: 1.5px solid #A7E0BE;">
          ✓
        </div>
        <h4 style="font-weight: 800; font-size: 1.05rem; color: var(--md-text-main); margin-bottom: 6px;">No Deleted Products</h4>
        <p style="font-size: 0.82rem; max-width: 340px; margin: 0 auto; line-height: 1.45;">
          All catalog products are active. When you delete any product from daily stock check or catalog, it will appear here so you can easily restore it anytime.
        </p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = deleted.map((prod) => `
    <div class="restore-item-row" data-product-id="${prod.id}" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: white; border: 1.5px solid var(--md-border); border-radius: var(--radius-md); gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
      <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
        <span style="font-size: 1.5rem; flex-shrink: 0;">${prod.image || '📦'}</span>
        <div style="min-width: 0;">
          <div style="font-weight: 800; font-size: 0.95rem; color: var(--md-text-main); display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
            <span>${prod.name}</span>
            <span class="pill pill-unit" style="font-size: 0.65rem; padding: 1px 5px;">${prod.unit}</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--md-text-muted); font-family: monospace; display: flex; align-items: center; gap: 6px; margin-top: 2px;">
            <span>${prod.sku}</span>
            <span>&bull;</span>
            <span style="color: var(--md-text-secondary);">${prod.category}</span>
            ${prod.deletedAt ? `<span>&bull;</span><span style="color: #94A3B8;">Deleted: ${prod.deletedAt}</span>` : ''}
          </div>
        </div>
      </div>

      <button 
        type="button" 
        class="btn-restore-single-product btn btn-sm" 
        data-product-id="${prod.id}" 
        style="background: #E8F6ED; color: #0D8244; border: 1.5px solid #A7E0BE; font-weight: 800; padding: 7px 14px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; flex-shrink: 0;"
        title="Restore ${prod.name} back to catalog"
      >
        ♻️ Restore
      </button>
    </div>
  `).join('');
}

export function renderDeleteConfirmModal() {
  return `
    <div id="confirmDeleteModalBackdrop" class="modal-backdrop" style="z-index: 10002;">
      <div class="modal-content" style="max-width: 440px; text-align: center; padding: 24px 22px; border-radius: var(--radius-lg); box-shadow: 0 20px 40px rgba(0,0,0,0.22);">
        <div style="width: 58px; height: 58px; border-radius: 50%; background: #FEF2F2; border: 2px solid #FCA5A5; color: #DC2626; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 16px auto;">
          🗑️
        </div>

        <h3 style="font-size: 1.25rem; font-weight: 800; color: #1E293B; margin-bottom: 8px;">
          Confirm Product Deletion
        </h3>

        <p style="font-size: 0.9rem; color: #475569; margin-bottom: 14px; line-height: 1.5;">
          Are you sure you want to remove <strong id="confirmDeleteProductName" style="color: #0F172A;">Product</strong> (<span id="confirmDeleteProductSku" style="font-family: monospace; font-weight: 700; color: #334155;">SKU</span>) from the catalog?
        </p>

        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 10px 14px; margin-bottom: 22px; font-size: 0.76rem; color: #475569; text-align: left; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.2rem; flex-shrink: 0;">ℹ️</span>
          <span>Don't worry — you can restore any deleted product anytime from the <strong>♻️ Restore Deleted</strong> menu.</span>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center;">
          <button type="button" id="btnCancelDeleteConfirm" class="btn btn-secondary" style="font-weight: 700; flex: 1; padding: 11px 16px; border: 1.5px solid var(--md-border); background: white; color: var(--md-text-main);">
            Cancel
          </button>
          <button type="button" id="btnExecuteDeleteConfirm" class="btn" style="background: #DC2626; color: white; font-weight: 800; border: none; flex: 1; padding: 11px 16px; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
            ${icon('trash', 'icon-sm')} Yes, Delete
          </button>
        </div>
      </div>
    </div>
  `;
}

export function renderRestoreProductsModal() {
  const deleted = store.getDeletedProducts ? store.getDeletedProducts() : [];

  return `
    <div id="restoreProductsModalBackdrop" class="modal-backdrop" style="z-index: 10001;">
      <div class="modal-content" style="max-width: 620px; max-height: 85vh; display: flex; flex-direction: column; padding: 0; border-radius: var(--radius-lg); overflow: hidden; box-shadow: 0 20px 45px rgba(0,0,0,0.22);">
        <div class="modal-header" style="border-bottom: 1.5px solid var(--md-border); padding: 18px 24px; background: white;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: #E0F2FE; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; border: 1.5px solid #BAE6FD; flex-shrink: 0;">
              ♻️
            </div>
            <div>
              <h3 class="modal-title" style="font-size: 1.2rem; font-weight: 800; color: var(--md-secondary-dark);">
                Restore Deleted Products
              </h3>
              <span style="font-size: 0.78rem; color: var(--md-text-muted);">
                Restore previously removed products back to catalog & branch sequences
              </span>
            </div>
          </div>
          <button type="button" id="btnCloseRestoreModal" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary); padding: 4px;">
            ${icon('x', 'icon')}
          </button>
        </div>

        <div style="padding: 12px 24px; background: #F8FAFC; border-bottom: 1px solid var(--md-border); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
          <span style="font-size: 0.84rem; font-weight: 700; color: #475569;" id="restoreModalCountText">
            ${deleted.length} deleted product${deleted.length === 1 ? '' : 's'} available to restore
          </span>
          <button type="button" id="btnRestoreAllDeleted" class="btn btn-sm" style="background: #0D8244; color: white; font-weight: 800; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; display: ${deleted.length > 0 ? 'inline-flex' : 'none'}; align-items: center; gap: 6px;">
            ♻️ Restore All Products
          </button>
        </div>

        <div class="modal-body" id="restoreModalItemsBody" style="padding: 18px 24px; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 10px; background: #FAFAFA;">
          <!-- Dynamically populated by populateRestoreModalContent() -->
        </div>

        <div class="modal-footer" style="padding: 14px 24px; border-top: 1.5px solid var(--md-border); background: white; display: flex; justify-content: flex-end;">
          <button type="button" id="btnCloseRestoreModalFooter" class="btn btn-secondary" style="font-weight: 700; padding: 8px 18px;">
            Close
          </button>
        </div>
      </div>
    </div>
  `;
}

export function setupDeletionModalsEvents() {
  if (deletionModalsEventsAttached) return;

  // Confirm delete execution
  document.addEventListener('click', (e) => {
    // 1. Direct trash button on cards / tables -> trigger confirm modal
    const trashBtn = e.target.closest('.btn-direct-delete-product');
    if (trashBtn) {
      e.preventDefault();
      e.stopPropagation();
      const pId = trashBtn.getAttribute('data-product-id');
      if (pId) {
        promptDeleteProduct(pId);
      }
      return;
    }

    // 2. Open restore modal buttons
    const restoreTrigger = e.target.closest('.btn-open-restore-modal');
    if (restoreTrigger) {
      e.preventDefault();
      e.stopPropagation();
      openRestoreModal();
      return;
    }

    // 3. Cancel confirmation
    if (e.target.closest('#btnCancelDeleteConfirm') || e.target.id === 'confirmDeleteModalBackdrop') {
      closeDeleteConfirmModal();
      return;
    }

    // 4. Execute deletion confirmation
    if (e.target.closest('#btnExecuteDeleteConfirm')) {
      if (pendingDeleteProductId) {
        const prod = store.products.find(p => p.id === pendingDeleteProductId);
        const prodName = prod ? prod.name : 'Product';
        const res = store.deleteProduct(pendingDeleteProductId);

        closeDeleteConfirmModal();

        // Also close edit product modal if it was open
        const editModal = document.getElementById('editProductModalBackdrop');
        if (editModal && editModal.classList.contains('open')) {
          editModal.classList.remove('open');
          editModal.style.display = 'none';
        }

        if (res.success) {
          showToast(`"${prodName}" deleted. You can restore it anytime from "Restore Deleted"`, 'warning');
          // Update restore badges
          const delCount = store.getDeletedProducts().length;
          document.querySelectorAll('.restore-count-badge').forEach(b => {
            b.textContent = delCount;
          });
        } else {
          showToast(res.message || 'Failed to delete product', 'error');
        }
      }
      return;
    }

    // 5. Close restore modal
    if (e.target.closest('#btnCloseRestoreModal') || e.target.closest('#btnCloseRestoreModalFooter') || e.target.id === 'restoreProductsModalBackdrop') {
      closeRestoreModal();
      return;
    }

    // 6. Restore single product
    const restoreSingleBtn = e.target.closest('.btn-restore-single-product');
    if (restoreSingleBtn) {
      e.preventDefault();
      e.stopPropagation();
      const pId = restoreSingleBtn.getAttribute('data-product-id');
      if (pId) {
        const res = store.restoreProduct(pId);
        if (res.success) {
          showToast(`"${res.product.name}" restored to catalog!`, 'success');
          populateRestoreModalContent();
        } else {
          showToast(res.message || 'Failed to restore product', 'error');
        }
      }
      return;
    }

    // 7. Restore all products
    if (e.target.closest('#btnRestoreAllDeleted')) {
      e.preventDefault();
      e.stopPropagation();
      const res = store.restoreAllDeletedProducts();
      if (res.success) {
        showToast(`All ${res.count} products successfully restored to catalog!`, 'success');
        populateRestoreModalContent();
      } else {
        showToast(res.message || 'No products to restore', 'warning');
      }
      return;
    }
  });

  deletionModalsEventsAttached = true;
}
