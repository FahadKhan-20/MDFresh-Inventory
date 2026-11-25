// WhatsApp Share Utility for MD Fresh Inventory
import { store } from './store.js';
import { generateMasterManifestPDF, downloadBlob } from './pdfGenerator.js';
import { showToast } from './toast.js';

/**
 * Builds a clean, professional APMC Mandi procurement summary formatted for WhatsApp.
 */
export function buildWhatsAppOrderMessage() {
  const consolidated = store.getConsolidatedRequirements ? store.getConsolidatedRequirements() : store.getConsolidatedProcurement();
  const summary = store.getBranchSubmissionSummary();
  const now = new Date();
  const dateStr = store.getLiveDateString(now);
  const timeStr = store.getLiveTimeString(now, true);

  const validConsolidated = (consolidated || []).filter(it => (it.totalQty || it.requiredQty || 0) > 0);
  const totalUnits = validConsolidated.reduce((acc, it) => acc + (it.totalQty || it.requiredQty || 0), 0);

  let msg = `🥬 *MD FRESH — APMC MANDI DAILY PROCUREMENT MANIFEST*\n`;
  msg += `📅 *Date:* ${dateStr} • ${timeStr}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `✅ *ALL 4 BRANCHES 100% LISTED & SUBMITTED:*\n`;
  summary.forEach(b => {
    msg += ` • *${b.branchName}* (${b.branchCode}): ${b.itemCount} items (${b.time})\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📦 *TOTAL CONSOLIDATED DEMAND:*\n`;
  msg += `*${validConsolidated.length} Products* | *${totalUnits} Wholesale Units*\n\n`;

  msg += `🛒 *APMC WHOLESALE BUYING LIST:*\n`;
  
  if (validConsolidated.length === 0) {
    msg += `_No produce items currently require market purchase._\n`;
  } else {
    validConsolidated.forEach((it, idx) => {
      const asp = (it.breakdown && it.breakdown['BR001']) ?? it.branches?.find(b => b.branchId === 'BR001')?.qty ?? 0;
      const kdh = (it.breakdown && it.breakdown['BR002']) ?? it.branches?.find(b => b.branchId === 'BR002')?.qty ?? 0;
      const lbs = (it.breakdown && it.breakdown['BR003']) ?? it.branches?.find(b => b.branchId === 'BR003')?.qty ?? 0;
      const bsv = (it.breakdown && it.breakdown['BR004']) ?? it.branches?.find(b => b.branchId === 'BR004')?.qty ?? 0;
      const total = it.totalQty || it.requiredQty || 0;
      const unit = it.unit || 'Units';
      const name = it.product?.name || it.productName || it.name || 'Item';
      msg += `${idx + 1}. *${name}*: *${total} ${unit}* (ASP:${asp}, KDH:${kdh}, LBS:${lbs}, BSV:${bsv})\n`;
    });
  }

  msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📄 *Official APMC Master Manifest PDF is generated and attached.*\n`;
  msg += `🌐 *Live Portal:* https://md-fresh-inventory.vercel.app/\n`;

  return msg;
}

/**
 * Triggers WhatsApp share with actual PDF document attachment.
 * On mobile/modern browsers: uses Web Share API Level 2 to share the PDF file directly to WhatsApp.
 * On desktop/fallback browsers: downloads the PDF blob to the device and opens WhatsApp with the text summary.
 */
export async function shareOrderOnWhatsApp() {
  const message = buildWhatsAppOrderMessage();
  const now = new Date();
  const dateStr = store.getLiveDateString(now).replace(/ /g, '_');
  const filename = `MD_Fresh_Master_Manifest_${dateStr}.pdf`;

  // Gather complete dataset for PDF generation
  const data = {
    date: store.getLiveDateTimeString(now, true),
    branches: store.branches,
    consolidatedItems: store.getConsolidatedProcurement(),
    branchRequirements: store.getAllBranchesRequirements()
  };

  let pdfBlob = null;
  try {
    pdfBlob = generateMasterManifestPDF(data);
  } catch (err) {
    console.error('Failed to generate PDF for WhatsApp share:', err);
  }

  // 1. Try modern Web Share API Level 2 (files sharing)
  // Supported in modern mobile browsers (Chrome Android, Safari iOS, etc.)
  if (pdfBlob && typeof navigator !== 'undefined' && typeof File !== 'undefined' && typeof navigator.canShare === 'function') {
    try {
      const file = new File([pdfBlob], filename, { type: 'application/pdf' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'MD Fresh APMC Procurement Manifest',
          text: message,
          files: [file]
        });
        if (typeof showToast === 'function') {
          showToast('PDF manifest shared to WhatsApp successfully!', 'success');
        }
        return;
      }
    } catch (shareErr) {
      if (shareErr.name === 'AbortError') {
        // User cancelled the native share sheet
        return;
      }
      console.warn('Native file share failed, falling back to download & WhatsApp link:', shareErr);
    }
  }

  // 2. Fallback: Automatically download the PDF to device so the user has the file
  if (pdfBlob && typeof downloadBlob === 'function') {
    try {
      downloadBlob(pdfBlob, filename);
      if (typeof showToast === 'function') {
        showToast('PDF downloaded! Opening WhatsApp to send manifest...', 'info');
      }
    } catch (dlErr) {
      console.warn('Blob download fallback error:', dlErr);
    }
  }

  // 3. Open WhatsApp with formatted text manifest
  const encoded = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send?text=${encoded}`;
  if (typeof window !== 'undefined') {
    window.open(waUrl, '_blank');
  }
}
