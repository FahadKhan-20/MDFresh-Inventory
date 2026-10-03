// Suppliers View Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderSuppliersView() {
  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Suppliers & Wholesale Mandis
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          APMC market vendors, farmer cooperatives, verified mandi stalls and direct farm lines
        </p>
      </div>

      <button class="btn btn-primary" id="btnAddNewSupplier">
        ${icon('plus', 'icon-sm')} Register Supplier
      </button>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
      ${store.suppliers.map(s => `
        <div class="content-card" style="margin-bottom: 0; padding: 22px;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px;">
            <div>
              <span class="pill pill-unit" style="font-size: 0.7rem; font-family: monospace;">${s.id}</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--md-text-main); margin-top: 4px;">${s.name}</h3>
              <div style="font-size: 0.78rem; color: var(--md-text-muted); margin-top: 2px;">${s.mandi}</div>
            </div>
            <div style="background-color: #FEF3C7; color: #B45309; font-weight: 800; padding: 4px 8px; border-radius: var(--radius-sm); font-size: 0.82rem;">
              ★ ${s.rating}
            </div>
          </div>

          <div style="margin: 14px 0; display: flex; flex-direction: column; gap: 6px; font-size: 0.85rem;">
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--md-text-muted);">Key Contact</span>
              <span style="font-weight: 700;">${s.contactPerson}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--md-text-muted);">Phone / Mandi Desk</span>
              <span style="font-weight: 700; color: var(--md-primary);">${s.phone}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
              <span style="color: var(--md-text-muted);">Categories</span>
              <div style="display: flex; gap: 4px;">
                ${s.categories.map(c => `<span class="pill pill-unit" style="font-size: 0.72rem;">${c}</span>`).join('')}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; margin-top: auto; padding-top: 14px; border-top: 1px solid var(--md-border);">
            <button class="btn btn-secondary btn-sm" style="flex: 1;">
              Contact Agent
            </button>
            <button class="btn btn-outline-primary btn-sm btn-po-for-supplier" data-supplier-id="${s.id}">
              Raise PO
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function setupSuppliersEvents() {
  document.querySelectorAll('.btn-po-for-supplier').forEach(btn => {
    btn.addEventListener('click', () => {
      store.setView('purchase-orders');
    });
  });
}
