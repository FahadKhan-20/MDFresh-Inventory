// Stock Transfers View Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderStockTransfersView() {
  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Inter-Branch Stock Transfers
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          Rebalance inventory surpluses and urgent retail shortages across Bangalore hubs
        </p>
      </div>

      <button class="btn btn-primary" id="btnCreateTransfer">
        ${icon('plus', 'icon-sm')} Request Transfer
      </button>
    </div>

    <div class="content-card">
      <div class="card-header">
        <div class="card-header-left">
          ${icon('transfers', 'icon')}
          <div>
            <h3 class="card-title">Recent Transfer Manifests</h3>
            <span class="card-subtitle">Hub transit movements & gate verification status</span>
          </div>
        </div>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>TRANSFER ID</th>
                <th>FROM BRANCH</th>
                <th>TO BRANCH</th>
                <th>ITEM & QUANTITY</th>
                <th>DATE & TIME</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="pill pill-unit" style="font-family: monospace;">TR-20261002-003</span></td>
                <td><strong style="color: var(--md-text-main);">ANNASANDRAPALYA</strong></td>
                <td><strong style="color: var(--md-primary);">KODIHALLI</strong></td>
                <td>
                  <div style="font-weight: 800;">5 Bunches Robusta Banana</div>
                  <div style="font-size: 0.74rem; color: var(--md-text-muted);">SKU: FRU-002</div>
                </td>
                <td>02 Oct 2026, 09:40 AM</td>
                <td><span class="pill pill-low">Pending Dispatch</span></td>
                <td><button class="btn btn-secondary btn-sm">Approve Transit</button></td>
              </tr>
              <tr>
                <td><span class="pill pill-unit" style="font-family: monospace;">TR-20261001-098</span></td>
                <td><strong style="color: var(--md-text-main);">LBS NAGAR</strong></td>
                <td><strong style="color: var(--md-primary);">BASAVANAGAR</strong></td>
                <td>
                  <div style="font-weight: 800;">4 Crates Hybrid Tomato</div>
                  <div style="font-size: 0.74rem; color: var(--md-text-muted);">SKU: VEG-001</div>
                </td>
                <td>01 Oct 2026, 04:15 PM</td>
                <td><span class="pill pill-healthy">Delivered</span></td>
                <td><button class="btn btn-secondary btn-sm">View POD</button></td>
              </tr>
              <tr>
                <td><span class="pill pill-unit" style="font-family: monospace;">TR-20260930-054</span></td>
                <td><strong style="color: var(--md-text-main);">BASAVANAGAR</strong></td>
                <td><strong style="color: var(--md-primary);">ANNASANDRAPALYA</strong></td>
                <td>
                  <div style="font-weight: 800;">2 Crates Shimla Apple</div>
                  <div style="font-size: 0.74rem; color: var(--md-text-muted);">SKU: FRU-001</div>
                </td>
                <td>30 Sep 2026, 11:20 AM</td>
                <td><span class="pill pill-healthy">Delivered</span></td>
                <td><button class="btn btn-secondary btn-sm">View POD</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function setupStockTransfersEvents() {}
