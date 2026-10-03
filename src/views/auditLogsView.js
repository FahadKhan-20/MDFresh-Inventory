// Audit Logs View Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderAuditLogsView() {
  return `
    <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h1 style="font-size: 1.55rem; font-weight: 800; color: var(--md-secondary-dark); letter-spacing: -0.02em;">
          System Audit Logs
        </h1>
        <p style="font-size: 0.88rem; color: var(--md-text-muted);">
          Immutable historical trail of stock adjustments, morning count submissions and procurement approvals
        </p>
      </div>

      <span class="pill pill-healthy" style="font-size: 0.8rem; font-weight: 700;">
        ${icon('check', 'icon-sm')} Audit Trail Integrity Verified
      </span>
    </div>

    <div class="content-card">
      <div class="card-header">
        <div class="card-header-left">
          ${icon('auditLogs', 'icon')}
          <div>
            <h3 class="card-title">Event Ledger</h3>
            <span class="card-subtitle">Chronological ledger entries</span>
          </div>
        </div>
      </div>
      <div class="card-body card-body-flush">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>TIMESTAMP</th>
                <th>USER & ROLE</th>
                <th>ACTION</th>
                <th>DETAILS</th>
                <th>BRANCH / HUB</th>
              </tr>
            </thead>
            <tbody>
              ${store.auditLogs.map(log => `
                <tr>
                  <td style="font-size: 0.8rem; color: var(--md-text-muted); font-family: monospace;">
                    ${log.timestamp}
                  </td>
                  <td>
                    <div style="font-weight: 700; color: var(--md-text-main); font-size: 0.9rem;">${log.user}</div>
                    <div style="font-size: 0.72rem; color: var(--md-text-muted);">${log.role}</div>
                  </td>
                  <td>
                    <span class="pill pill-unit" style="font-weight: 700;">${log.action}</span>
                  </td>
                  <td style="font-size: 0.85rem; color: var(--md-text-secondary); max-width: 320px;">
                    ${log.details}
                  </td>
                  <td>
                    <span style="font-weight: 700; color: var(--md-primary); font-size: 0.85rem;">
                      ${log.branch}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function setupAuditLogsEvents() {}
