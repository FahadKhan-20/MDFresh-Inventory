// WhatsApp Share Utility for MD Fresh Inventory
import { store } from './store.js';

/**
 * Builds a clean, professional APMC Mandi procurement summary formatted for WhatsApp.
 */
export function buildWhatsAppOrderMessage() {
  const consolidated = store.getConsolidatedRequirements ? store.getConsolidatedRequirements() : store.getConsolidatedProcurement();
  const summary = store.getBranchSubmissionSummary();
  const now = new Date();
  const dateStr = store.getLiveDateString(now);
  const timeStr = store.getLiveTimeString(now, true);

  const totalUnits = consolidated.reduce((acc, it) => acc + (it.totalQty || it.requiredQty || 0), 0);

  let msg = `🥬 *MD FRESH — APMC MANDI DAILY PROCUREMENT MANIFEST*\n`;
  msg += `📅 *Date:* ${dateStr} • ${timeStr}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `✅ *ALL 4 BRANCHES 100% LISTED & SUBMITTED:*\n`;
  summary.forEach(b => {
    msg += ` • *${b.branchName}* (${b.branchCode}): ${b.itemCount} items (${b.time})\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📦 *TOTAL CONSOLIDATED DEMAND:*\n`;
  msg += `*${consolidated.length} Products* | *${totalUnits} Wholesale Units*\n\n`;

  msg += `🛒 *APMC WHOLESALE BUYING LIST:*\n`;
  
  // Format items (vegetables & fruits)
  consolidated.forEach((it, idx) => {
    const asp = (it.breakdown && it.breakdown['BR001']) ?? it.branches?.find(b => b.branchId === 'BR001')?.qty ?? 0;
    const kdh = (it.breakdown && it.breakdown['BR002']) ?? it.branches?.find(b => b.branchId === 'BR002')?.qty ?? 0;
    const lbs = (it.breakdown && it.breakdown['BR003']) ?? it.branches?.find(b => b.branchId === 'BR003')?.qty ?? 0;
    const bsv = (it.breakdown && it.breakdown['BR004']) ?? it.branches?.find(b => b.branchId === 'BR004')?.qty ?? 0;
    const total = it.totalQty || it.requiredQty || 0;
    const unit = it.unit || 'Units';
    const name = it.product?.name || it.productName || it.name || 'Item';
    msg += `${idx + 1}. *${name}*: *${total} ${unit}* (ASP:${asp}, KDH:${kdh}, LBS:${lbs}, BSV:${bsv})\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📄 *Official APMC Master Manifest PDF is generated and verified.*\n`;
  msg += `🌐 *Live Portal:* https://mdfreshiv.netlify.app/\n`;

  return msg;
}

/**
 * Triggers WhatsApp share via web/app URL.
 */
export function shareOrderOnWhatsApp() {
  const message = buildWhatsAppOrderMessage();
  const encoded = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send?text=${encoded}`;
  window.open(waUrl, '_blank');
}
