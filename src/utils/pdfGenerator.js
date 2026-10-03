// Pure JavaScript Client-side PDF Generator for MD Fresh
// Generates standard compliant PDF 1.4 files locally without external dependencies

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 300);
}

// Simple PDF Builder class
class SimplePDFBuilder {
  constructor() {
    this.pages = [];
    this.pageWidth = 595.28; // A4 pt width
    this.pageHeight = 841.89; // A4 pt height
    this.margin = 40;
    this.currentPageStream = [];
    this.currentY = this.pageHeight - this.margin;
  }

  newPage() {
    if (this.currentPageStream.length > 0) {
      this.pages.push(this.currentPageStream.join('\n'));
      this.currentPageStream = [];
    }
    this.currentY = this.pageHeight - this.margin;
  }

  addText(text, x, y, options = {}) {
    const fontSize = options.fontSize || 10;
    const font = options.bold ? '/F2' : '/F1';
    const color = options.color || [0.1, 0.1, 0.1]; // RGB 0-1
    const cleanText = (text || '')
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)');

    this.currentPageStream.push(
      `BT ${color[0]} ${color[1]} ${color[2]} rg ${font} ${fontSize} Tf ${x} ${y} Td (${cleanText}) Tj ET`
    );
  }

  addLine(x1, y1, x2, y2, options = {}) {
    const color = options.color || [0.8, 0.8, 0.8];
    const width = options.width || 0.75;
    this.currentPageStream.push(
      `${color[0]} ${color[1]} ${color[2]} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`
    );
  }

  addRect(x, y, w, h, options = {}) {
    const fillColor = options.fillColor || [0.95, 0.95, 0.95];
    this.currentPageStream.push(
      `${fillColor[0]} ${fillColor[1]} ${fillColor[2]} rg ${x} ${y} ${w} ${h} re f`
    );
  }

  ensureSpace(requiredHeight, callback) {
    if (this.currentY - requiredHeight < this.margin) {
      this.newPage();
      if (typeof callback === 'function') {
        callback();
      }
    }
  }

  build() {
    if (this.currentPageStream.length > 0) {
      this.pages.push(this.currentPageStream.join('\n'));
      this.currentPageStream = [];
    }

    const objects = [];
    let currentObjId = 1;

    // 1: Catalog
    const catalogId = currentObjId++;
    // 2: Pages
    const pagesId = currentObjId++;
    // Fonts: F1 (Helvetica), F2 (Helvetica-Bold)
    const font1Id = currentObjId++;
    const font2Id = currentObjId++;

    const pageObjIds = [];
    const contentObjIds = [];

    for (let i = 0; i < this.pages.length; i++) {
      pageObjIds.push(currentObjId++);
      contentObjIds.push(currentObjId++);
    }

    const bodyParts = [];

    // Catalog
    objects[catalogId] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;

    // Pages
    const kidsStr = pageObjIds.map(id => `${id} 0 R`).join(' ');
    objects[pagesId] = `<< /Type /Pages /Kids [${kidsStr}] /Count ${pageObjIds.length} >>`;

    // Font 1
    objects[font1Id] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`;
    // Font 2
    objects[font2Id] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`;

    // Pages and Contents
    for (let i = 0; i < this.pages.length; i++) {
      const pId = pageObjIds[i];
      const cId = contentObjIds[i];
      const streamContent = this.pages[i];
      const streamLen = new TextEncoder().encode(streamContent).length;

      objects[pId] = `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${this.pageWidth} ${this.pageHeight}] /Resources << /Font << /F1 ${font1Id} 0 R /F2 ${font2Id} 0 R >> >> /Contents ${cId} 0 R >>`;
      objects[cId] = `<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream`;
    }

    // Assemble file
    let pdfString = '%PDF-1.4\n';
    const offsets = [];

    for (let id = 1; id < currentObjId; id++) {
      offsets[id] = pdfString.length;
      pdfString += `${id} 0 obj\n${objects[id]}\nendobj\n`;
    }

    const xrefOffset = pdfString.length;
    pdfString += `xref\n0 ${currentObjId}\n0000000000 65535 f \n`;

    for (let id = 1; id < currentObjId; id++) {
      const off = String(offsets[id]).padStart(10, '0');
      pdfString += `${off} 00000 n \n`;
    }

    pdfString += `trailer\n<< /Size ${currentObjId} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

    return new Blob([pdfString], { type: 'application/pdf' });
  }
}

// Branch quantity helper for multi-branch PDF table
function getBranchQty(item, branchId) {
  if (!item || !item.branches) return 0;
  const match = item.branches.find(b => {
    if (b.branchId === branchId) return true;
    if (branchId === 'BR001' && (b.branchName.toUpperCase().includes('ANNASANDRA') || b.branchName.toUpperCase().includes('ASP'))) return true;
    if (branchId === 'BR002' && (b.branchName.toUpperCase().includes('KODIHALLI') || b.branchName.toUpperCase().includes('KDH'))) return true;
    if (branchId === 'BR003' && (b.branchName.toUpperCase().includes('LBS') || b.branchName.toUpperCase().includes('LBS NAGAR'))) return true;
    if (branchId === 'BR004' && (b.branchName.toUpperCase().includes('BASAVANAGAR') || b.branchName.toUpperCase().includes('BSV'))) return true;
    return false;
  });
  return match ? match.qty : 0;
}

function renderMasterTableHeader(pdf, isContinuation = false) {
  // Two-line professional header background
  pdf.addRect(40, pdf.currentY - 26, 515, 26, { fillColor: [0.07, 0.33, 0.19] });

  // Line 1: Main Headings
  pdf.addText('SL', 44, pdf.currentY - 11, { fontSize: 7.5, bold: true, color: [1, 1, 1] });
  pdf.addText('ITEM NAME / PRODUCT', 65, pdf.currentY - 11, { fontSize: 7.5, bold: true, color: [1, 1, 1] });
  pdf.addText('UNIT', 196, pdf.currentY - 11, { fontSize: 7.5, bold: true, color: [1, 1, 1] });
  pdf.addText('ANNASANDRA', 240, pdf.currentY - 11, { fontSize: 7, bold: true, color: [1, 1, 1] });
  pdf.addText('KODIHALLI', 306, pdf.currentY - 11, { fontSize: 7, bold: true, color: [1, 1, 1] });
  pdf.addText('LBS NAGAR', 372, pdf.currentY - 11, { fontSize: 7, bold: true, color: [1, 1, 1] });
  pdf.addText('BASAVANAGAR', 432, pdf.currentY - 11, { fontSize: 7, bold: true, color: [1, 1, 1] });
  pdf.addText('TOTAL TO BUY', 494, pdf.currentY - 11, { fontSize: 7.5, bold: true, color: [1, 1, 1] });

  // Line 2: Sub-labels
  pdf.addText('NO', 44, pdf.currentY - 20, { fontSize: 6.5, color: [0.85, 0.95, 0.88] });
  pdf.addText(isContinuation ? '(Continued...)' : 'CATALOG ITEM', 65, pdf.currentY - 20, { fontSize: 6.5, color: [0.85, 0.95, 0.88] });
  pdf.addText('MEASURE', 196, pdf.currentY - 20, { fontSize: 6.5, color: [0.85, 0.95, 0.88] });
  pdf.addText('(BR-ASP)', 246, pdf.currentY - 20, { fontSize: 6.5, color: [0.85, 0.95, 0.88] });
  pdf.addText('(BR-KDH)', 312, pdf.currentY - 20, { fontSize: 6.5, color: [0.85, 0.95, 0.88] });
  pdf.addText('(BR-LBS)', 378, pdf.currentY - 20, { fontSize: 6.5, color: [0.85, 0.95, 0.88] });
  pdf.addText('(BR-BSV)', 440, pdf.currentY - 20, { fontSize: 6.5, color: [0.85, 0.95, 0.88] });
  pdf.addText('(GRAND TOTAL)', 498, pdf.currentY - 20, { fontSize: 6.5, color: [0.85, 0.95, 0.88] });

  // Vertical column dividers in header
  const colDividers = [62, 192, 234, 298, 362, 426, 490];
  colDividers.forEach(x => {
    pdf.addLine(x, pdf.currentY, x, pdf.currentY - 26, { color: [0.15, 0.45, 0.28], width: 0.5 });
  });

  // Header bottom border
  pdf.addLine(40, pdf.currentY - 26, 555, pdf.currentY - 26, { color: [0.04, 0.22, 0.12], width: 1.2 });
  pdf.currentY -= 26;
}

function renderMasterTable(pdf, consolidatedItems) {
  renderMasterTableHeader(pdf, false);

  const colDividers = [62, 192, 234, 298, 362, 426, 490];
  let totalASP = 0;
  let totalKOD = 0;
  let totalLBS = 0;
  let totalBSV = 0;
  let grandTotalUnits = 0;

  consolidatedItems.forEach((item, idx) => {
    const q1 = getBranchQty(item, 'BR001');
    const q2 = getBranchQty(item, 'BR002');
    const q3 = getBranchQty(item, 'BR003');
    const q4 = getBranchQty(item, 'BR004');

    totalASP += q1;
    totalKOD += q2;
    totalLBS += q3;
    totalBSV += q4;
    grandTotalUnits += item.totalQty;

    // Check pagination with table header continuation
    pdf.ensureSpace(20, () => renderMasterTableHeader(pdf, true));

    // Alternating zebra row background
    if (idx % 2 === 1) {
      pdf.addRect(40, pdf.currentY - 16, 515, 17, { fillColor: [0.97, 0.98, 0.97] });
    }

    // Highlight Total to Buy column at the last right end side
    pdf.addRect(490.5, pdf.currentY - 16, 64, 16.5, { fillColor: [0.92, 0.97, 0.93] });

    // Vertical column grid lines
    colDividers.forEach(x => {
      pdf.addLine(x, pdf.currentY + 1, x, pdf.currentY - 16, { color: [0.9, 0.93, 0.9], width: 0.5 });
    });

    // Outer table borders
    pdf.addLine(40, pdf.currentY + 1, 40, pdf.currentY - 16, { color: [0.8, 0.85, 0.8], width: 0.5 });
    pdf.addLine(555, pdf.currentY + 1, 555, pdf.currentY - 16, { color: [0.8, 0.85, 0.8], width: 0.5 });

    // Cell values
    // 1. SL NO
    pdf.addText(String(idx + 1), 46, pdf.currentY - 11, { fontSize: 8, color: [0.45, 0.45, 0.45] });

    // 2. ITEM NAME
    let pName = item.product.name;
    if (item.product.originalPluName && item.product.originalPluName !== item.product.name.toUpperCase()) {
      pName = `${item.product.name} (${item.product.originalPluName})`;
    }
    if (pName.length > 25) pName = pName.substring(0, 24) + '..';
    pdf.addText(pName, 65, pdf.currentY - 11, { fontSize: 8.5, bold: true, color: [0.1, 0.15, 0.12] });

    // 3. UNIT
    pdf.addText(item.unit, 196, pdf.currentY - 11, { fontSize: 8, color: [0.35, 0.35, 0.35] });

    // 4. ANNASANDRAPALYA (ASP)
    if (q1 > 0) {
      pdf.addText(String(q1), 254, pdf.currentY - 11, { fontSize: 8.5, bold: true, color: [0.05, 0.45, 0.22] });
    } else {
      pdf.addText('-', 256, pdf.currentY - 11, { fontSize: 8, color: [0.65, 0.65, 0.65] });
    }

    // 5. KODIHALLI (KDH)
    if (q2 > 0) {
      pdf.addText(String(q2), 318, pdf.currentY - 11, { fontSize: 8.5, bold: true, color: [0.05, 0.45, 0.22] });
    } else {
      pdf.addText('-', 320, pdf.currentY - 11, { fontSize: 8, color: [0.65, 0.65, 0.65] });
    }

    // 6. LBS NAGAR (LBS)
    if (q3 > 0) {
      pdf.addText(String(q3), 384, pdf.currentY - 11, { fontSize: 8.5, bold: true, color: [0.05, 0.45, 0.22] });
    } else {
      pdf.addText('-', 386, pdf.currentY - 11, { fontSize: 8, color: [0.65, 0.65, 0.65] });
    }

    // 7. BASAVANAGAR (BSV)
    if (q4 > 0) {
      pdf.addText(String(q4), 448, pdf.currentY - 11, { fontSize: 8.5, bold: true, color: [0.05, 0.45, 0.22] });
    } else {
      pdf.addText('-', 450, pdf.currentY - 11, { fontSize: 8, color: [0.65, 0.65, 0.65] });
    }

    // 8. TOTAL TO BUY (LAST RIGHT END SIDE)
    pdf.addText(`${item.totalQty} ${item.unit}`, 495, pdf.currentY - 11, { fontSize: 8.5, bold: true, color: [0.05, 0.51, 0.27] });

    // Horizontal bottom line
    pdf.addLine(40, pdf.currentY - 16, 555, pdf.currentY - 16, { color: [0.88, 0.91, 0.88], width: 0.5 });
    pdf.currentY -= 17;
  });

  // Grand Total Summary Footer Row
  pdf.ensureSpace(24, () => renderMasterTableHeader(pdf, true));
  pdf.addRect(40, pdf.currentY - 19, 515, 20, { fillColor: [0.86, 0.94, 0.88] });

  pdf.addLine(40, pdf.currentY + 1, 40, pdf.currentY - 19, { color: [0.05, 0.4, 0.2], width: 1 });
  pdf.addLine(555, pdf.currentY + 1, 555, pdf.currentY - 19, { color: [0.05, 0.4, 0.2], width: 1 });
  colDividers.forEach(x => {
    pdf.addLine(x, pdf.currentY + 1, x, pdf.currentY - 19, { color: [0.75, 0.85, 0.78], width: 0.5 });
  });

  pdf.addText('TOTAL', 44, pdf.currentY - 13, { fontSize: 8, bold: true, color: [0.04, 0.35, 0.18] });
  pdf.addText(`4 Branches (${consolidatedItems.length} Products)`, 65, pdf.currentY - 13, { fontSize: 7.5, bold: true, color: [0.04, 0.35, 0.18] });
  pdf.addText('—', 196, pdf.currentY - 13, { fontSize: 8, color: [0.5, 0.5, 0.5] });
  pdf.addText(String(totalASP), 254, pdf.currentY - 13, { fontSize: 8.5, bold: true, color: [0.04, 0.35, 0.18] });
  pdf.addText(String(totalKOD), 318, pdf.currentY - 13, { fontSize: 8.5, bold: true, color: [0.04, 0.35, 0.18] });
  pdf.addText(String(totalLBS), 384, pdf.currentY - 13, { fontSize: 8.5, bold: true, color: [0.04, 0.35, 0.18] });
  pdf.addText(String(totalBSV), 448, pdf.currentY - 13, { fontSize: 8.5, bold: true, color: [0.04, 0.35, 0.18] });
  pdf.addText(`${grandTotalUnits} UNITS`, 495, pdf.currentY - 13, { fontSize: 9, bold: true, color: [0.04, 0.45, 0.22] });
  pdf.addLine(40, pdf.currentY - 19, 555, pdf.currentY - 19, { color: [0.05, 0.4, 0.2], width: 1.5 });
  pdf.currentY -= 26;
}

// Generate the Complete Combined Master Manifest PDF (both combined list and branch-headlined lists)
export function generateMasterManifestPDF(data) {
  const { date, branches, consolidatedItems, branchRequirements } = data;
  const pdf = new SimplePDFBuilder();

  // --- HEADER (Page 1) ---
  pdf.addRect(40, pdf.currentY - 45, 515, 45, { fillColor: [0.05, 0.51, 0.27] }); // MD Fresh Green Header
  pdf.addText('MD FRESH', 55, pdf.currentY - 24, { fontSize: 16, bold: true, color: [1, 1, 1] });
  const liveDefaultDate = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  pdf.addText(`DATE: ${date || liveDefaultDate}`, 360, pdf.currentY - 24, { fontSize: 8.5, bold: true, color: [1, 1, 1] });
  pdf.addText('4 RETAIL BRANCHES CONSOLIDATED', 360, pdf.currentY - 38, { fontSize: 7.5, color: [0.85, 0.95, 0.88] });
  pdf.currentY -= 62;

  // --- SECTION 1: COMBINED TOTAL MARKET PURCHASE LIST ---
  pdf.addRect(40, pdf.currentY - 18, 515, 20, { fillColor: [0.93, 0.96, 0.93] });
  pdf.addText('1. COMBINED TOTAL MARKET PURCHASE LIST (ALL 4 BRANCHES)', 48, pdf.currentY - 14, { fontSize: 10.5, bold: true, color: [0.03, 0.31, 0.16] });
  pdf.currentY -= 26;

  renderMasterTable(pdf, consolidatedItems);

  // --- SECTION 2: BRANCH-BY-BRANCH HEADLINED BREAKDOWN ---
  pdf.ensureSpace(40);
  pdf.addRect(40, pdf.currentY - 18, 515, 20, { fillColor: [0.93, 0.96, 0.93] });
  pdf.addText('2. BRANCH-WISE HEADLINED DELIVERY BREAKDOWN', 48, pdf.currentY - 14, { fontSize: 10.5, bold: true, color: [0.03, 0.31, 0.16] });
  pdf.currentY -= 28;

  branches.forEach((branch, bIdx) => {
    pdf.ensureSpace(50);

    // Branch Headline Header
    pdf.addRect(40, pdf.currentY - 18, 515, 18, { fillColor: [0.1, 0.35, 0.2] });
    pdf.addText(`BRANCH ${bIdx + 1}: ${branch.name} (${branch.code})`, 48, pdf.currentY - 14, { fontSize: 9.5, bold: true, color: [1, 1, 1] });
    pdf.addText(`Manager: ${branch.manager} | ${branch.location}`, 300, pdf.currentY - 14, { fontSize: 8, color: [0.85, 0.95, 0.88] });
    pdf.currentY -= 22;

    const bItems = branchRequirements[branch.id] || [];

    if (bItems.length === 0) {
      pdf.addText('No items required for this branch today.', 60, pdf.currentY - 12, { fontSize: 8.5, color: [0.5, 0.5, 0.5] });
      pdf.currentY -= 18;
    } else {
      // Table Subheader
      pdf.addText('PRODUCT', 60, pdf.currentY - 10, { fontSize: 7.5, bold: true, color: [0.4, 0.4, 0.4] });
      pdf.addText('UNIT', 240, pdf.currentY - 10, { fontSize: 7.5, bold: true, color: [0.4, 0.4, 0.4] });
      pdf.addText('REQUIRED QUANTITY', 360, pdf.currentY - 10, { fontSize: 7.5, bold: true, color: [0.4, 0.4, 0.4] });
      pdf.addLine(55, pdf.currentY - 13, 540, pdf.currentY - 13, { color: [0.75, 0.75, 0.75] });
      pdf.currentY -= 17;

      bItems.forEach((it, iIdx) => {
        pdf.ensureSpace(18);
        pdf.addText(`${iIdx + 1}. ${it.productName}`, 60, pdf.currentY - 10, { fontSize: 8.5, bold: true });
        pdf.addText(it.unit, 240, pdf.currentY - 10, { fontSize: 8, color: [0.35, 0.35, 0.35] });
        pdf.addText(`${it.qty} ${it.unit}`, 360, pdf.currentY - 10, { fontSize: 9, bold: true, color: [0.05, 0.51, 0.27] });
        pdf.addLine(55, pdf.currentY - 13, 540, pdf.currentY - 13, { color: [0.92, 0.92, 0.92] });
        pdf.currentY -= 15;
      });
    }

    pdf.currentY -= 12;
  });

  // Footer note
  pdf.ensureSpace(35);
  pdf.addRect(40, pdf.currentY - 25, 515, 25, { fillColor: [0.96, 0.97, 0.96] });
  pdf.addText('MD FRESH OPERATIONS DESK - APMC MANDI DISPATCH LOG', 48, pdf.currentY - 12, { fontSize: 7.5, bold: true, color: [0.3, 0.3, 0.3] });
  pdf.addText('Generated automatically for morning loading & dockside delivery verification.', 48, pdf.currentY - 20, { fontSize: 7, color: [0.5, 0.5, 0.5] });

  return pdf.build();
}

// Generate ONLY the Combined Total List (Mandi Buyer Sheet)
export function generateCombinedListOnlyPDF(data) {
  const { date, consolidatedItems } = data;
  const pdf = new SimplePDFBuilder();

  pdf.addRect(40, pdf.currentY - 45, 515, 45, { fillColor: [0.05, 0.51, 0.27] });
  pdf.addText('MD FRESH', 55, pdf.currentY - 24, { fontSize: 16, bold: true, color: [1, 1, 1] });
  const liveDefaultDate = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  pdf.addText(`DATE: ${date || liveDefaultDate}`, 360, pdf.currentY - 24, { fontSize: 8.5, bold: true, color: [1, 1, 1] });
  pdf.addText('4 RETAIL BRANCHES CONSOLIDATED', 360, pdf.currentY - 38, { fontSize: 7.5, color: [0.85, 0.95, 0.88] });
  pdf.currentY -= 62;

  pdf.addRect(40, pdf.currentY - 18, 515, 20, { fillColor: [0.93, 0.96, 0.93] });
  pdf.addText('COMBINED APMC MANDI PURCHASE LIST (ALL 4 BRANCHES)', 48, pdf.currentY - 14, { fontSize: 10.5, bold: true, color: [0.03, 0.31, 0.16] });
  pdf.currentY -= 26;

  renderMasterTable(pdf, consolidatedItems);

  // Footer note
  pdf.ensureSpace(35);
  pdf.addRect(40, pdf.currentY - 25, 515, 25, { fillColor: [0.96, 0.97, 0.96] });
  pdf.addText('MD FRESH CENTRAL PROCUREMENT - MANDI PURCHASE SHEET', 48, pdf.currentY - 12, { fontSize: 7.5, bold: true, color: [0.3, 0.3, 0.3] });
  pdf.addText('Unified wholesale totals with multi-branch allocation quantities.', 48, pdf.currentY - 20, { fontSize: 7, color: [0.5, 0.5, 0.5] });

  return pdf.build();
}

// Generate ONLY the Branch Headlined Breakdown PDF (Store Dispatch Sheet)
export function generateBranchHeadlinedPDF(data) {
  const { date, branches, branchRequirements } = data;
  const pdf = new SimplePDFBuilder();

  pdf.addRect(40, pdf.currentY - 45, 515, 45, { fillColor: [0.06, 0.31, 0.23] });
  pdf.addText('MD FRESH', 55, pdf.currentY - 24, { fontSize: 16, bold: true, color: [1, 1, 1] });
  const liveDefaultDate = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  pdf.addText(`DATE: ${date || liveDefaultDate}`, 380, pdf.currentY - 24, { fontSize: 8.5, bold: true, color: [1, 1, 1] });
  pdf.currentY -= 65;

  branches.forEach((branch, bIdx) => {
    pdf.ensureSpace(50);

    pdf.addRect(40, pdf.currentY - 18, 515, 18, { fillColor: [0.1, 0.35, 0.2] });
    pdf.addText(`BRANCH ${bIdx + 1}: ${branch.name} (${branch.code})`, 48, pdf.currentY - 14, { fontSize: 9.5, bold: true, color: [1, 1, 1] });
    pdf.addText(`Incharge: ${branch.manager}`, 400, pdf.currentY - 14, { fontSize: 8, color: [0.85, 0.95, 0.88] });
    pdf.currentY -= 22;

    const bItems = branchRequirements[branch.id] || [];

    if (bItems.length === 0) {
      pdf.addText('No requirement submitted for this branch today.', 60, pdf.currentY - 12, { fontSize: 8.5, color: [0.5, 0.5, 0.5] });
      pdf.currentY -= 18;
    } else {
      pdf.addText('PRODUCT', 60, pdf.currentY - 10, { fontSize: 7.5, bold: true, color: [0.4, 0.4, 0.4] });
      pdf.addText('UNIT', 260, pdf.currentY - 10, { fontSize: 7.5, bold: true, color: [0.4, 0.4, 0.4] });
      pdf.addText('REQUIRED QUANTITY', 380, pdf.currentY - 10, { fontSize: 7.5, bold: true, color: [0.4, 0.4, 0.4] });
      pdf.addLine(55, pdf.currentY - 13, 540, pdf.currentY - 13, { color: [0.75, 0.75, 0.75] });
      pdf.currentY -= 17;

      bItems.forEach((it, iIdx) => {
        pdf.ensureSpace(18);
        pdf.addText(`${iIdx + 1}. ${it.productName}`, 60, pdf.currentY - 10, { fontSize: 8.5, bold: true });
        pdf.addText(it.unit, 260, pdf.currentY - 10, { fontSize: 8, color: [0.35, 0.35, 0.35] });
        pdf.addText(`${it.qty} ${it.unit}`, 380, pdf.currentY - 10, { fontSize: 9, bold: true, color: [0.05, 0.51, 0.27] });
        pdf.addLine(55, pdf.currentY - 13, 540, pdf.currentY - 13, { color: [0.92, 0.92, 0.92] });
        pdf.currentY -= 15;
      });
    }

    pdf.currentY -= 14;
  });

  return pdf.build();
}
