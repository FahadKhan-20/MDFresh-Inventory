// Reports & Operational Analytics View for MD Fresh
// Restricted to Authorized Persons (Manager PIN Protection)

import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderReportsView() {
  const isAuth = store.isAuthorized;

  // If unauthorized, show clean minimal lock screen
  if (!isAuth) {
    return `
      <div style="max-width: 600px; margin: 40px auto; background: white; border: 1px solid var(--md-border); border-radius: var(--radius-lg); padding: 48px 36px; text-align: center; box-shadow: var(--shadow-sm);">
        <div style="width: 64px; height: 64px; background: #FEF3C7; color: #D97706; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 1.8rem;">
          🔒
        </div>
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--md-secondary-dark); margin-bottom: 8px;">
          Reports & Stock Graphs are Restricted
        </h2>
        <p style="font-size: 0.9rem; color: var(--md-text-muted); line-height: 1.5; margin-bottom: 24px;">
          Financial valuations, turnover trends, and shrinkage analytics are confidential and only accessible to authorized store managers.
        </p>
        <button class="btn btn-primary btn-lg" id="btnUnlockReportsAccess" style="font-weight: 800; padding: 12px 28px;">
          Enter Manager PIN to Unlock
        </button>
      </div>
    `;
  }

  // Authorized View: Clean, Minimal, Non-overwhelming Reports
  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; color: #0D8244; background: #E8F6ED; padding: 2px 8px; border-radius: var(--radius-pill);">
            🛡️ AUTHORIZED MANAGER MODE
          </span>
        </div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          Stock Analytics & Reports
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          Valuation, turnover rate, and loss audits across Annasandrapalya, Kodihalli, LBS Nagar, and Basavanagar
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: 10px;">
        <button class="btn btn-secondary btn-sm" id="btnLockReportsNow">
          🔒 Lock Terminal
        </button>
        <button class="btn btn-primary btn-sm" onclick="window.print()">
          ${icon('printer', 'icon-sm')} Print Audit
        </button>
      </div>
    </div>

    <!-- 4 KPI Cards -->
    <div class="reports-kpi-grid" style="margin-bottom: 24px;">
      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Inventory Value</span>
          <div class="stat-icon-wrapper" style="background-color: var(--md-primary-light); color: var(--md-primary);">
            ${icon('inventory', 'icon-sm')}
          </div>
        </div>
        <div class="stat-value">₹14,85,400</div>
        <div class="stat-footer">
          <span class="stat-trend-up">+3.2%</span> across 4 branches
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Purchase Value (Today)</span>
          <div class="stat-icon-wrapper">${icon('procurement', 'icon-sm')}</div>
        </div>
        <div class="stat-value">₹3,42,000</div>
        <div class="stat-footer">
          <span>APMC Mandi wholesale volume</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Wastage / Shrinkage</span>
          <div class="stat-icon-wrapper" style="background-color: var(--status-warning-bg); color: var(--status-warning-text);">
            ${icon('alertTriangle', 'icon-sm')}
          </div>
        </div>
        <div class="stat-value">₹8,450</div>
        <div class="stat-footer">
          <span style="font-weight: 700; color: var(--status-healthy-text);">0.57%</span> (Within safe limit)
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-title">Low Stock Alerts</span>
          <div class="stat-icon-wrapper" style="background-color: var(--status-warning-bg); color: var(--status-warning-text);">
            ${icon('alertTriangle', 'icon-sm')}
          </div>
        </div>
        <div class="stat-value" style="color: var(--status-warning-text);">17 Items</div>
        <div class="stat-footer">
          <span>Below reorder point</span>
        </div>
      </div>
    </div>

    <!-- 2 Clean Minimal Charts -->
    <div class="chart-grid-2">
      <!-- Chart 1: Stock Movement Over Time -->
      <div class="content-card">
        <div class="card-header">
          <div class="card-header-left">
            ${icon('trendingUp', 'icon')}
            <div>
              <h3 class="card-title">Stock Turnover (7 Days)</h3>
              <span class="card-subtitle">Daily net crate movements</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="svg-chart-container">
            <svg class="svg-chart" viewBox="0 0 500 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="stockTrendGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#0D8244" stop-opacity="0.2"/>
                  <stop offset="100%" stop-color="#0D8244" stop-opacity="0.0"/>
                </linearGradient>
              </defs>
              <line x1="40" y1="40" x2="480" y2="40" stroke="#E2E8DF" stroke-dasharray="3"/>
              <line x1="40" y1="90" x2="480" y2="90" stroke="#E2E8DF" stroke-dasharray="3"/>
              <line x1="40" y1="140" x2="480" y2="140" stroke="#E2E8DF" stroke-dasharray="3"/>
              <line x1="40" y1="165" x2="480" y2="165" stroke="#CBD5E1"/>

              <path d="M 50 135 L 115 110 L 180 120 L 245 75 L 310 90 L 375 60 L 440 45 L 440 165 L 50 165 Z" fill="url(#stockTrendGrad)"/>
              <polyline points="50,135 115,110 180,120 245,75 310,90 375,60 440,45" fill="none" stroke="#0D8244" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

              <circle cx="50" cy="135" r="4" fill="#0D8244"/>
              <circle cx="115" cy="110" r="4" fill="#0D8244"/>
              <circle cx="180" cy="120" r="4" fill="#0D8244"/>
              <circle cx="245" cy="75" r="4" fill="#0D8244"/>
              <circle cx="310" cy="90" r="4" fill="#0D8244"/>
              <circle cx="375" cy="60" r="4" fill="#0D8244"/>
              <circle cx="440" cy="45" r="5" fill="#064E3B"/>

              <text x="50" y="185" text-anchor="middle" font-size="11" fill="#738479">26 Sep</text>
              <text x="115" y="185" text-anchor="middle" font-size="11" fill="#738479">27 Sep</text>
              <text x="180" y="185" text-anchor="middle" font-size="11" fill="#738479">28 Sep</text>
              <text x="245" y="185" text-anchor="middle" font-size="11" fill="#738479">29 Sep</text>
              <text x="310" y="185" text-anchor="middle" font-size="11" fill="#738479">30 Sep</text>
              <text x="375" y="185" text-anchor="middle" font-size="11" fill="#738479">01 Oct</text>
              <text x="440" y="185" text-anchor="middle" font-size="11" font-weight="700" fill="#0D8244">02 Oct</text>
            </svg>
          </div>
        </div>
      </div>

      <!-- Chart 2: The 4 Branches Valuation Comparison -->
      <div class="content-card">
        <div class="card-header">
          <div class="card-header-left">
            ${icon('branches', 'icon')}
            <div>
              <h3 class="card-title">Stock Valuation by Branch</h3>
              <span class="card-subtitle">Annasandrapalya, Kodihalli, LBS Nagar, Basavanagar</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="svg-chart-container">
            <svg class="svg-chart" viewBox="0 0 450 200" preserveAspectRatio="none">
              <line x1="40" y1="20" x2="40" y2="160" stroke="#CBD5E1"/>
              <line x1="40" y1="160" x2="430" y2="160" stroke="#CBD5E1"/>

              <!-- Annasandrapalya -->
              <rect x="65" y="45" width="48" height="115" rx="4" fill="#0D8244"/>
              <text x="89" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="#0D8244">₹4.6L</text>
              <text x="89" y="180" text-anchor="middle" font-size="10" font-weight="700" fill="#131A16">ASP</text>

              <!-- Kodihalli -->
              <rect x="155" y="65" width="48" height="95" rx="4" fill="#146A3D"/>
              <text x="179" y="58" text-anchor="middle" font-size="11" font-weight="800" fill="#146A3D">₹3.8L</text>
              <text x="179" y="180" text-anchor="middle" font-size="10" font-weight="700" fill="#131A16">KDH</text>

              <!-- LBS Nagar -->
              <rect x="245" y="50" width="48" height="110" rx="4" fill="#064E3B"/>
              <text x="269" y="43" text-anchor="middle" font-size="11" font-weight="800" fill="#064E3B">₹4.2L</text>
              <text x="269" y="180" text-anchor="middle" font-size="10" font-weight="700" fill="#131A16">LBS</text>

              <!-- Basavanagar -->
              <rect x="335" y="85" width="48" height="75" rx="4" fill="#4B7A60"/>
              <text x="359" y="78" text-anchor="middle" font-size="11" font-weight="800" fill="#2E5A44">₹2.2L</text>
              <text x="359" y="180" text-anchor="middle" font-size="10" font-weight="700" fill="#131A16">BSV</text>
            </svg>
          </div>
          <div style="display: flex; justify-content: center; gap: 16px; margin-top: 10px; font-size: 0.78rem; color: var(--md-text-muted);">
            <span>ASP: Annasandrapalya</span>
            <span>KDH: Kodihalli</span>
            <span>LBS: LBS Nagar</span>
            <span>BSV: Basavanagar</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupReportsEvents() {
  const btnUnlock = document.getElementById('btnUnlockReportsAccess');
  if (btnUnlock) {
    btnUnlock.addEventListener('click', () => {
      store.openAuthModal();
    });
  }

  const btnLock = document.getElementById('btnLockReportsNow');
  if (btnLock) {
    btnLock.addEventListener('click', () => {
      store.lockAuthorization();
    });
  }
}
