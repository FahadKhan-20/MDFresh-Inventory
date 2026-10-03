// Branch Management View for MD Fresh
// 1. ANNASANDRAPALYA, 2. KODIHALLI, 3. LBS NAGAR, 4. BASAVANAGAR

import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderBranchesView() {
  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          MD Fresh Branches
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          The 4 retail outlets across Bengaluru
        </p>
      </div>

      <div style="font-size: 0.82rem; font-weight: 700; color: var(--md-primary); background: #E8F6ED; padding: 6px 14px; border-radius: var(--radius-pill);">
        4 Active Outlets
      </div>
    </div>

    <!-- 4 Clean Branch Cards -->
    <div class="branch-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      ${store.branches.map((b, index) => {
        let healthPill = '';
        if (b.stockHealth === 'Healthy') {
          healthPill = `<span class="pill pill-healthy">${icon('check', 'icon-sm')} Healthy</span>`;
        } else if (b.stockHealth === 'Low') {
          healthPill = `<span class="pill pill-low">${icon('alertTriangle', 'icon-sm')} Low</span>`;
        } else {
          healthPill = `<span class="pill pill-attention">${icon('alertTriangle', 'icon-sm')} Attention</span>`;
        }

        return `
          <div class="branch-card" style="padding: 24px;">
            <div class="branch-card-header" style="margin-bottom: 8px;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: var(--md-primary); text-transform: uppercase;">
                  BRANCH 0${index + 1}
                </span>
                <h3 class="branch-card-title" style="font-size: 1.2rem; margin-top: 2px;">${b.name}</h3>
              </div>
              <span class="branch-code-badge" style="font-weight: 800;">${b.code}</span>
            </div>

            <p style="font-size: 0.78rem; color: var(--md-text-muted); margin-bottom: 16px;">
              ${b.location}
            </p>

            <div style="margin-bottom: 18px;">
              <div class="branch-stat-row">
                <span class="branch-stat-label">Stock Status</span>
                <div>${healthPill}</div>
              </div>
              <div class="branch-stat-row">
                <span class="branch-stat-label">Total SKUs</span>
                <span class="branch-stat-value">${b.totalProducts}</span>
              </div>
              <div class="branch-stat-row">
                <span class="branch-stat-label">Store Incharge</span>
                <span class="branch-stat-value">${b.manager}</span>
              </div>
            </div>

            <div style="display: flex; gap: 8px; margin-top: auto; padding-top: 14px; border-top: 1px solid var(--md-border);">
              <button class="btn btn-primary btn-sm btn-select-branch-work" data-branch-id="${b.id}" style="flex: 1; font-weight: 700;">
                ${icon('stockCheck', 'icon-sm')} Stock Check
              </button>
              <button class="btn btn-secondary btn-sm btn-inspect-branch" data-branch-id="${b.id}">
                Inventory
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

export function setupBranchesEvents() {
  document.querySelectorAll('.btn-select-branch-work').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const bId = e.currentTarget.getAttribute('data-branch-id');
      store.setBranch(bId);
      store.setView('stock-check');
    });
  });

  document.querySelectorAll('.btn-inspect-branch').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const bId = e.currentTarget.getAttribute('data-branch-id');
      store.setBranch(bId);
      store.setView('inventory');
    });
  });
}
