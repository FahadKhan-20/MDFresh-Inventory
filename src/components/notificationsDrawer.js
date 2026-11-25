import { shareOrderOnWhatsApp } from '../utils/whatsappShare.js';
import { generateMasterManifestPDF, downloadBlob } from '../utils/pdfGenerator.js';
// Notifications Drawer Component for MD Fresh
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderNotificationsDrawer() {
  const isOpen = store.notificationDrawerOpen;

  return `
    <div id="notifDrawerBackdrop" class="drawer-backdrop ${isOpen ? 'open' : ''}">
      <div class="drawer-content" style="width: 440px;">
        <div class="drawer-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            ${icon('notifications', 'icon')}
            <div>
              <h3 class="modal-title">Live Operational Alerts</h3>
              <span style="font-size: 0.74rem; color: var(--md-text-muted);">
                ${store.notifications.filter(n => n.unread).length} Unread notifications
              </span>
            </div>
          </div>
          <button id="btnCloseNotifDrawer" style="background:none; border:none; cursor:pointer; color:var(--md-text-secondary);">${icon('x', 'icon')}</button>
        </div>

        <div style="padding: 10px 24px; border-bottom: 1px solid var(--md-border); display: flex; justify-content: space-between; align-items: center; background-color: var(--md-surface-subtle);">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--md-text-muted);">NOTIFICATIONS LEDGER</span>
          <button id="btnMarkAllRead" style="background:none; border:none; font-size: 0.78rem; font-weight: 700; color: var(--md-primary); cursor: pointer;">
            Mark all as read
          </button>
        </div>

        <div class="drawer-body">
          ${store.notifications.map(n => `
            <div class="notif-item ${n.unread ? 'unread' : ''}">
              <div class="notif-item-header">
                <span style="display: flex; align-items: center; gap: 6px;">
                  ${n.type === 'warning' ? `<span style="color:var(--status-warning-text);">${icon('alertTriangle', 'icon-sm')}</span>` : ''}
                  ${n.type === 'success' ? `<span style="color:var(--status-healthy-text);">${icon('check', 'icon-sm')}</span>` : ''}
                  ${n.type === 'info' ? `<span style="color:var(--status-info-text);">${icon('info', 'icon-sm')}</span>` : ''}
                  ${n.title}
                </span>
                <span class="pill pill-unit" style="font-size: 0.68rem;">${n.branch}</span>
              </div>
              <p class="notif-item-msg">${n.message}</p>
              ${n.action === 'SHARE_WHATSAPP' ? `
                <div style="margin: 8px 0; display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn btn-sm btn-primary btn-notif-dl-pdf" style="font-size: 0.72rem; padding: 4px 10px; font-weight: 800;">
                    📥 Download PDF
                  </button>
                  <button class="btn btn-sm btn-whatsapp btn-notif-wa-share" style="font-size: 0.72rem; padding: 4px 10px; font-weight: 800;">
                    📱 WhatsApp
                  </button>
                </div>
              ` : ''}
              <div class="notif-item-time">${n.time}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

export function setupNotificationsDrawerEvents() {
  const backdrop = document.getElementById('notifDrawerBackdrop');
  const btnClose = document.getElementById('btnCloseNotifDrawer');
  const btnMarkRead = document.getElementById('btnMarkAllRead');

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      store.toggleNotifications(false);
    });
  }

  if (btnMarkRead) {
    btnMarkRead.addEventListener('click', () => {
      store.notifications.forEach(n => { n.unread = false; });
      store.notify();
    });
  }

  document.querySelectorAll('.btn-notif-dl-pdf').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const liveDate = store.getLiveDateString();
      const liveTimestamp = store.getLiveDateTimeString(new Date(), true);
      const data = {
        date: liveTimestamp,
        branches: store.branches,
        consolidatedItems: store.getConsolidatedProcurement(),
        branchRequirements: store.getAllBranchesRequirements()
      };
      const blob = generateMasterManifestPDF(data);
      const filenameDate = liveDate.replace(/ /g, '_');
      downloadBlob(blob, `MD_Fresh_Master_Manifest_${filenameDate}.pdf`);
    });
  });

  document.querySelectorAll('.btn-notif-wa-share').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      shareOrderOnWhatsApp();
    });
  });

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        store.toggleNotifications(false);
      }
    });
  }
}
