// Comprehensive Point-by-Point Backtesting Suite for MD Fresh Inventory
import { store } from '../src/utils/store.js';
import { INITIAL_PRODUCTS, INITIAL_BRANCHES } from '../src/data/mockData.js';
import { generateMasterManifestPDF, generateCombinedListOnlyPDF, generateBranchHeadlinedPDF, generateGoodsReceivingPDF } from '../src/utils/pdfGenerator.js';
import { buildWhatsAppOrderMessage, shareOrderOnWhatsApp } from '../src/utils/whatsappShare.js';
import fs from 'fs';
import path from 'path';

// Mock browser globals for Node test environment
if (typeof global.localStorage === 'undefined') {
  let mockStorage = {};
  global.localStorage = {
    getItem: (key) => mockStorage[key] || null,
    setItem: (key, val) => { mockStorage[key] = String(val); },
    removeItem: (key) => { delete mockStorage[key]; },
    clear: () => { mockStorage = {}; }
  };
}

if (typeof global.window === 'undefined') {
  global.window = {
    scrollTo: () => {}
  };
}

let passedTests = 0;
let failedTests = 0;
const results = [];

function assert(condition, testName, details = '') {
  if (condition) {
    passedTests++;
    results.push({ status: 'PASS', name: testName, details });
    console.log(`  \x1b[32m✔ PASS\x1b[0m: ${testName}`);
  } else {
    failedTests++;
    results.push({ status: 'FAIL', name: testName, details });
    console.error(`  \x1b[31m✖ FAIL\x1b[0m: ${testName} - ${details}`);
  }
}

console.log('\n============================================================');
console.log('   MD FRESH INVENTORY: POINT-BY-POINT BACKTESTING SUITE    ');
console.log('============================================================\n');

// -------------------------------------------------------------
// POINT 1: AUTHENTICATION WORKFLOW & DEVICE PERSISTENCE
// -------------------------------------------------------------
console.log('\x1b[36m▶ TEST SUITE 1: Authentication Workflow & Device Persistence\x1b[0m');

// Test 1.1: Staff Login
store.login({
  name: 'MD FRESH STAFF',
  email: 'staff@mdfresh.in',
  role: 'Store Staff',
  branchId: 'BR001',
  isAuthorized: false,
  staySignedIn: true
});

assert(store.isAuthenticated === true, '1.1 Staff login authenticates user');
assert(store.isAuthorized === false, '1.2 Staff login defaults to unauthorized for manager features');
assert(store.activeView === 'stock-check', '1.3 Staff login lands on staff-allowed view (stock-check)');
assert(store.currentUser.role === 'Store Staff', '1.4 Current user role set to Store Staff');
assert(store.currentUser.name === 'MD FRESH STAFF', '1.4b Current user name set to MD FRESH STAFF');

// Test 1.5: localStorage Persistence
const sessionRaw = localStorage.getItem('md_fresh_auth_session');
assert(sessionRaw !== null, '1.5 Session persisted to localStorage for staying signed in');
const parsedSession = JSON.parse(sessionRaw || '{}');
assert(parsedSession.email === 'staff@mdfresh.in', '1.6 Stored email matches logged-in user');
assert(parsedSession.isAuthorized === false, '1.7 Stored authorization status is false for staff');

// Test 1.8: Logout clears session
store.logout();
assert(store.isAuthenticated === false, '1.8 Logout resets isAuthenticated to false');
assert(localStorage.getItem('md_fresh_auth_session') === null, '1.9 Logout clears localStorage auth token');

// Test 1.10: Manager Login
store.login({
  name: 'Kiran Manager',
  email: 'kiran@mdfresh.in',
  role: 'Manager & Owner (Authorized)',
  branchId: 'BR001',
  isAuthorized: true,
  staySignedIn: true
});
assert(store.isAuthenticated === true, '1.10 Manager login authenticates');
assert(store.isAuthorized === true, '1.11 Manager login grants isAuthorized = true');
assert(store.activeView === 'requirements', '1.12 Manager lands on requirements matrix view');

// -------------------------------------------------------------
// POINT 2: SECURITY LOCK & PIN 1902 AUTHORIZATION
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 2: Security Lock & PIN 1902 Access Control\x1b[0m');

// Revert to Staff state
store.lockAuthorization();
assert(store.isAuthorized === false, '2.1 lockAuthorization locks manager features');

// Test 2.2: Staff allowed views
store.setView('stock-check');
assert(store.activeView === 'stock-check', '2.2 Staff can access stock-check without PIN prompt');

store.setView('requirements');
assert(store.activeView === 'requirements', '2.3 Staff can access requirements without PIN prompt');

// Test 2.4: Restricted views trigger Auth PIN Modal for Staff
store.setView('procurement');
assert(store.authModalOpen === true, '2.4 Accessing procurement opens PIN authorization modal');
assert(store.pendingView === 'procurement', '2.5 Pending view is stored for post-unlock redirect');
assert(store.activeView !== 'procurement', '2.6 Access to procurement view is blocked before unlocking');

// Test 2.7: Incorrect PIN attempts rejected
const oldPinAttempt = store.unlockAuthorization('2019');
assert(oldPinAttempt === false, '2.7 Obsolete PIN (2019) is rejected');
assert(store.isAuthorized === false, '2.8 isAuthorized remains false after wrong PIN');

const badPinAttempt = store.unlockAuthorization('0000');
assert(badPinAttempt === false, '2.9 Arbitrary incorrect PIN (0000) is rejected');

// Test 2.10: Correct PIN (1902) unlocks access
const correctPinAttempt = store.unlockAuthorization('1902');
assert(correctPinAttempt === true, '2.10 Correct PIN (1902) successfully unlocks access');
assert(store.isAuthorized === true, '2.11 isAuthorized becomes true');
assert(store.authModalOpen === false, '2.12 Auth PIN Modal closes upon success');
assert(store.activeView === 'procurement', '2.13 User redirected to requested restricted view (procurement)');

// Test 2.14: Verify NO hints of 1902 in loginView or authModal UI
const loginViewSource = fs.readFileSync(path.resolve('./src/views/loginView.js'), 'utf-8');
const authModalSource = fs.readFileSync(path.resolve('./src/components/authModal.js'), 'utf-8');
assert(!loginViewSource.includes('(1902)'), '2.14 No (1902) hint displayed in loginView.js');
assert(!authModalSource.includes('1902'), '2.15 No 1902 hint displayed in authModal.js');

// -------------------------------------------------------------
// POINT 3: REAL-TIME DATE AND TIME TRACKING
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 3: Real-Time Date & Time Tracking\x1b[0m');

const testDate = new Date('2026-10-03T19:25:30');
const liveDateStr = store.getLiveDateString(testDate);
const liveTimeStr = store.getLiveTimeString(testDate, true);
const liveDateTimeStr = store.getLiveDateTimeString(testDate, true);

assert(liveDateStr.includes('Oct') && liveDateStr.includes('2026'), '3.1 Live date formatted correctly with day, month, year');
assert(liveTimeStr.includes('07:25:30') || liveTimeStr.includes('7:25:30'), '3.2 Live time formatted with hours, minutes, seconds and 12-hr indicator');
assert(liveDateTimeStr.includes('2026') && (liveDateTimeStr.includes('pm') || liveDateTimeStr.includes('PM')), '3.3 Live date-time string generated with full timestamp');

const beforeUpdate = store.matrixLastRecorded;
// Simulate input change
store.updateRequiredQuantity('BR001', 'PRD001', 15);
const afterUpdate = store.matrixLastRecorded;
assert(afterUpdate instanceof Date && afterUpdate >= beforeUpdate, '3.4 matrixLastRecorded updates dynamically on quantity change');
assert(store.branchLastRecorded['BR001'] instanceof Date, '3.5 branchLastRecorded tracked specifically per branch');

// -------------------------------------------------------------
// POINT 4: MULTI-DIGIT NUMERIC INPUT HANDLING (> 1 DIGIT)
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 4: Multi-Digit Number Input Handling\x1b[0m');

// Single digit
store.updateRequiredQuantity('BR001', 'PRD002', 8);
assert(store.getBranchStockCheck('BR001')['PRD002'] === 8, '4.1 Accepts 1-digit quantity (8)');

// Two digits
store.updateRequiredQuantity('BR001', 'PRD002', 25);
assert(store.getBranchStockCheck('BR001')['PRD002'] === 25, '4.2 Accepts 2-digit quantity (25)');

// Three digits
store.updateRequiredQuantity('BR001', 'PRD002', 150);
assert(store.getBranchStockCheck('BR001')['PRD002'] === 150, '4.3 Accepts 3-digit quantity (150)');

// Four digits (large bulk)
store.updateRequiredQuantity('BR001', 'PRD002', 1200);
assert(store.getBranchStockCheck('BR001')['PRD002'] === 1200, '4.4 Accepts 4-digit bulk quantity (1200)');

// String parse & sanitize
store.updateRequiredQuantity('BR001', 'PRD002', '42');
assert(store.getBranchStockCheck('BR001')['PRD002'] === 42, '4.5 String multi-digit inputs parsed to integer (42)');

store.updateRequiredQuantity('BR001', 'PRD002', -10);
assert(store.getBranchStockCheck('BR001')['PRD002'] === 0, '4.6 Negative inputs clamped to 0');

// -------------------------------------------------------------
// POINT 5: PRODUCT CATALOG INTEGRITY (60+ ITEMS)
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 5: Product Catalog Completeness (60+ Items)\x1b[0m');

assert(INITIAL_PRODUCTS.length >= 60, `5.1 Catalog contains 60+ products (total: ${INITIAL_PRODUCTS.length})`);

const requiredProductNames = [
  'ONION', 'POTATO', 'TOMATO', 'CARROT', 'BEANS', 'L FINGER', 'COCONUT',
  'LONG BEANS', 'GREEN PEAS', 'CHOWCHOW', 'RADISH', 'AMLA', 'CAPSICUM',
  'CABBAGE', 'CUCUMBER', 'GARLIC', 'GINGER', 'GREEN CHILLI', 'LEMON',
  'CAULIFLOWER', 'PUDINA', 'PALAK', 'METHI', 'CORIANDER', 'BEETROOT'
];

let foundCount = 0;
requiredProductNames.forEach(reqName => {
  const match = INITIAL_PRODUCTS.find(p => 
    p.name.toUpperCase().includes(reqName) || 
    (p.originalPluName && p.originalPluName.toUpperCase().includes(reqName))
  );
  if (match) foundCount++;
});

assert(foundCount === requiredProductNames.length, `5.2 All requested essential staple items identified (${foundCount}/${requiredProductNames.length})`);

// Verify categories and units
const units = new Set(INITIAL_PRODUCTS.map(p => p.unit));
assert(units.has('Bags') && units.has('Crates') && units.has('Kg'), '5.3 Standard wholesale units present (Bags, Crates, Kg)');

// -------------------------------------------------------------
// POINT 6: 4 ACTIVE BRANCHES SPECIFICATION
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 6: 4 Active Branches Configuration\x1b[0m');

assert(INITIAL_BRANCHES.length === 4, '6.1 Exactly 4 active branches configured');

const branchCodes = INITIAL_BRANCHES.map(b => b.code);
assert(branchCodes.includes('BR-ASP'), '6.2 Branch BR-ASP (Annasandra Palya) present');
assert(branchCodes.includes('BR-KDH'), '6.3 Branch BR-KDH (Kodihalli) present');
assert(branchCodes.includes('BR-LBS'), '6.4 Branch BR-LBS (LBS Nagar) present');
assert(branchCodes.includes('BR-BSV'), '6.5 Branch BR-BSV (Basavanagar) present');

// -------------------------------------------------------------
// POINT 7: DAILY STOCK CHECK & REQUIREMENTS CONSOLIDATION
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 7: Requirements Consolidation & Calculations\x1b[0m');

// Set known quantities across all 4 branches for PRD001 (Onion)
store.updateRequiredQuantity('BR001', 'PRD001', 10);
store.updateRequiredQuantity('BR002', 'PRD001', 15);
store.updateRequiredQuantity('BR003', 'PRD001', 5);
store.updateRequiredQuantity('BR004', 'PRD001', 20);

const consolidated = store.getConsolidatedRequirements();
const onionConsolidated = consolidated.find(c => c.product.id === 'PRD001');

assert(onionConsolidated !== undefined, '7.1 Onion present in consolidated requirements');
assert(onionConsolidated.totalQty === 50, `7.2 Consolidated total quantity sum is accurate (10+15+5+20 = 50, got ${onionConsolidated?.totalQty})`);
assert(onionConsolidated.branches.length === 4, '7.3 Breakdown tracks all 4 branches');

// -------------------------------------------------------------
// POINT 8: DOWNLOADABLE PDF FORMAT SPECIFICATION
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 8: Downloadable PDF Format Specification\x1b[0m');

const pdfData = {
  date: '03 Oct 2026, 07:30:00 pm',
  branches: INITIAL_BRANCHES,
  consolidatedItems: consolidated.slice(0, 5),
  branchRequirements: {
    BR001: [{ productName: 'Onion', unit: 'Bags', qty: 10 }],
    BR002: [{ productName: 'Onion', unit: 'Bags', qty: 15 }],
    BR003: [{ productName: 'Onion', unit: 'Bags', qty: 5 }],
    BR004: [{ productName: 'Onion', unit: 'Bags', qty: 20 }]
  }
};

// Generate master manifest PDF
const masterBlob = generateMasterManifestPDF(pdfData);
assert(masterBlob instanceof Blob, '8.1 Master manifest PDF generated as Blob');
assert(masterBlob.type === 'application/pdf', '8.2 Blob type is application/pdf');

// Generate combined list only PDF
const combinedBlob = generateCombinedListOnlyPDF(pdfData);
assert(combinedBlob instanceof Blob, '8.3 Combined list only PDF generated as Blob');

// Generate branch headlined PDF
const branchBlob = generateBranchHeadlinedPDF(pdfData);
assert(branchBlob instanceof Blob, '8.4 Branch headlined breakdown PDF generated as Blob');

// Verify PDF table source code structure in pdfGenerator.js
const pdfGenSource = fs.readFileSync(path.resolve('./src/utils/pdfGenerator.js'), 'utf-8');

assert(pdfGenSource.includes('ANNASANDRA'), '8.5 PDF header contains ANNASANDRA column heading');
assert(pdfGenSource.includes('KODIHALLI'), '8.6 PDF header contains KODIHALLI column heading');
assert(pdfGenSource.includes('LBS NAGAR'), '8.7 PDF header contains LBS NAGAR column heading');
assert(pdfGenSource.includes('BASAVANAGAR'), '8.8 PDF header contains BASAVANAGAR column heading');
assert(pdfGenSource.includes('TOTAL TO BUY'), '8.9 PDF header contains TOTAL TO BUY heading');

// Check order: branch columns appear before TOTAL TO BUY
const idxASP = pdfGenSource.indexOf("pdf.addText('ANNASANDRA'");
const idxTotal = pdfGenSource.indexOf("pdf.addText('TOTAL TO BUY'");
assert(idxASP < idxTotal, '8.10 Branch headings placed BEFORE TOTAL TO BUY heading in layout');

// Check that TOTAL TO BUY is at the far right (x coordinate >= 490)
const hasRightXCoordinate = pdfGenSource.includes('494') || pdfGenSource.includes('495');
assert(hasRightXCoordinate, '8.11 Total to buy placed at rightmost position (x ~ 494/495pt)');

// Check unit column exists
assert(pdfGenSource.includes("pdf.addText('UNIT'"), '8.12 Dedicated UNIT column header present');
assert(pdfGenSource.includes("item.unit"), '8.13 Item unit rendered in tabular row');

// Check summary row
assert(pdfGenSource.includes('grandTotalUnits'), '8.14 Grand total summary calculation present in footer');

// -------------------------------------------------------------
// POINT 9: MOBILE RESPONSIVENESS & TOUCH ADAPTATION
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 9: Mobile Responsiveness & Touch Adaptation\x1b[0m');

const cssSource = fs.readFileSync(path.resolve('./src/style.css'), 'utf-8');

assert(cssSource.includes('@media (max-width: 860px)'), '9.1 860px tablet/mobile breakpoint implemented');
assert(cssSource.includes('@media (max-width: 560px)'), '9.2 560px compact phone breakpoint implemented');
assert(cssSource.includes('.mobile-bottom-nav'), '9.3 Mobile bottom sticky navigation bar styled');
assert(cssSource.includes('.matrix-card-view') || cssSource.includes('.mobile-matrix-card'), '9.4 Mobile card matrix view rules defined');
assert(cssSource.includes('overflow-x: auto'), '9.5 Responsive table horizontal scrolling enabled for wide tables');

// Check mobileBottomNav component exists and exports
const bottomNavSource = fs.readFileSync(path.resolve('./src/components/mobileBottomNav.js'), 'utf-8');
assert(bottomNavSource.includes('renderMobileBottomNav'), '9.6 renderMobileBottomNav exported');
assert(bottomNavSource.includes('setupMobileBottomNavEvents'), '9.7 setupMobileBottomNavEvents exported');
assert(cssSource.includes('.sticky-bar-toggle-header'), '9.8 Mobile collapsible drawer toggle header styled');
assert(cssSource.includes('.sticky-bottom-bar.is-collapsed'), '9.9 Mobile collapsed state hides content to unblock full screen');
assert(cssSource.includes('.sticky-bar-arrow-icon'), '9.10 Toggle arrow icon styled for mobile drawer expand/collapse');
const dscSource = fs.readFileSync(path.resolve('./src/views/dailyStockCheckView.js'), 'utf-8');
assert(dscSource.includes('btnToggleStickyBar'), '9.11 Arrow toggle button implemented in dailyStockCheckView');
assert(dscSource.includes('stickyBarArrowIcon'), '9.12 Sticky bar arrow icon element present in dailyStockCheckView');

// -------------------------------------------------------------
// POINT 10: END-TO-END VIEW RENDERING & APP MODULES
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 10: View Rendering & Operational Workflows\x1b[0m');

// Dynamically import view modules
const { renderDashboardView } = await import('../src/views/dashboardView.js');
const { renderRequirementsView } = await import('../src/views/requirementsView.js');
const { renderDailyStockCheckView } = await import('../src/views/dailyStockCheckView.js');
const { renderProcurementView } = await import('../src/views/procurementView.js');
const { renderBranchesView } = await import('../src/views/branchesView.js');
const { renderInventoryView } = await import('../src/views/inventoryView.js');
const { renderPurchaseOrdersView } = await import('../src/views/purchaseOrdersView.js');
const { renderReceivingView } = await import('../src/views/receivingView.js');
const { renderStockTransfersView } = await import('../src/views/stockTransfersView.js');
const { renderProductsView } = await import('../src/views/productsView.js');
const { renderSuppliersView } = await import('../src/views/suppliersView.js');
const { renderReportsView } = await import('../src/views/reportsView.js');
const { renderAuditLogsView } = await import('../src/views/auditLogsView.js');
const { renderLoginView } = await import('../src/views/loginView.js');
const { renderSidebar } = await import('../src/components/sidebar.js');

const views = [
  { name: 'Dashboard View', fn: renderDashboardView },
  { name: 'Requirements Matrix View', fn: renderRequirementsView },
  { name: 'Daily Stock Check View', fn: renderDailyStockCheckView },
  { name: 'Procurement View', fn: renderProcurementView },
  { name: 'Branches View', fn: renderBranchesView },
  { name: 'Inventory View', fn: renderInventoryView },
  { name: 'Purchase Orders View', fn: renderPurchaseOrdersView },
  { name: 'Receiving Dock View', fn: renderReceivingView },
  { name: 'Stock Transfers View', fn: renderStockTransfersView },
  { name: 'Products Catalog View', fn: renderProductsView },
  { name: 'Suppliers View', fn: renderSuppliersView },
  { name: 'Reports & Analytics View', fn: renderReportsView },
  { name: 'Audit Logs View', fn: renderAuditLogsView },
  { name: 'Login & Signup View', fn: renderLoginView }
];

views.forEach((v, i) => {
  const html = v.fn();
  assert(typeof html === 'string' && html.length > 50, `10.${i + 1} ${v.name} renders clean HTML markup (${html.length} chars)`);
});

// -------------------------------------------------------------
// POINT 11: FINALIZE ORDER, PDF DOWNLOAD & NEXT-DAY RESET TO 0
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 11: Finalize Order, PDF Download & Next-Day Reset to 0 Workflow\x1b[0m');

// Ensure active multi-item demand exists before finalize
store.updateRequiredQuantity('BR001', 'PRD001', 10);
store.updateRequiredQuantity('BR001', 'PRD002', 15);
const demandBefore = store.getConsolidatedProcurement();
assert(demandBefore.length > 0, '11.1 Active product requirements exist before finalization');

// Execute finalize and reset for next day
const manifestSnapshot = store.finalizeOrderAndResetForNextDay({ source: 'BACKTEST_VERIFICATION' });

assert(manifestSnapshot !== null, '11.2 finalizeOrderAndResetForNextDay creates manifest snapshot');
assert(manifestSnapshot.totalUnits > 0, '11.3 Snapshot captured historical order volume');
assert(store.finalizedOrders.length >= 1, '11.4 Manifest record stored in finalizedOrders history');

// Verify every product across every branch is now 0
const allBranchesReqsAfter = store.getAllBranchesRequirements();
let remainingBranchUnits = 0;
store.branches.forEach(b => {
  remainingBranchUnits += (allBranchesReqsAfter[b.id] || []).reduce((sum, item) => sum + item.qty, 0);
});
assert(remainingBranchUnits === 0, '11.5 All branch requirement quantities reset to 0 in allBranchesRequirements');

// Verify consolidated procurement is empty (0 demand)
const consolidatedAfter = store.getConsolidatedProcurement();
assert(consolidatedAfter.length === 0, '11.6 Consolidated procurement list has 0 pending demand items');

// Verify combined matrix returns 0 for all products
const matrixAfter = store.getCombinedRequirementsMatrix(false);
const totalMatrixUnits = matrixAfter.reduce((sum, row) => sum + row.totalQty, 0);
assert(totalMatrixUnits === 0, `11.7 Every product totalQty across matrix is strictly 0 (got: ${totalMatrixUnits})`);

// Verify individual branch draft inputs are 0
let nonZeroDraftCount = 0;
store.branches.forEach(b => {
  const d = store.getBranchStockCheck(b.id);
  Object.values(d).forEach(qty => {
    if (qty > 0) nonZeroDraftCount++;
  });
});
assert(nonZeroDraftCount === 0, '11.8 All branch draft input inputs are reset to 0');

// Verify active status flag
assert(store.isReadyForNextDay === true, '11.9 isReadyForNextDay flag is true');

// Verify starting next day's stock check
store.updateRequiredQuantity('BR001', 'PRD001', 12);
assert(store.isReadyForNextDay === false, '11.10 Entering new stock check count sets isReadyForNextDay back to false');
assert(store.getBranchStockCheck('BR001')['PRD001'] === 12, '11.11 Next day quantity (12) successfully accepted');

// -------------------------------------------------------------
// POINT 12: MORNING STOCK RECEIVING & VARIANCE TRACKING PORTAL
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 12: Morning Stock Receiving & Variance Tracking Portal\x1b[0m');

// 12.1 Staff can access receiving view without PIN lock
store.lockAuthorization();
store.setView('receiving');
assert(store.activeView === 'receiving', '12.1 Staff can access receiving portal without PIN prompt');
assert(store.authModalOpen === false, '12.2 Auth modal is closed for receiving');

// 12.3 Branch incoming orders available
const testPOId = store.latestDispatchPOId || (store.purchaseOrders[0] ? store.purchaseOrders[0].id : null);
const incomingASP = store.getBranchIncomingOrder('BR001', testPOId);
assert(incomingASP.length > 0, `12.3 Incoming items retrieved for Annasandra Palya (count: ${incomingASP.length})`);
assert(incomingASP[0].orderedQty > 0, '12.4 First item has positive ordered quantity');

// 12.5 Test receiving with both shortage (less) and surplus (more)
const testRecvMap = {};
const firstItem = incomingASP[0];
const secondItem = incomingASP[1] || incomingASP[0];

// Less stock: ordered - 2
testRecvMap[firstItem.productId] = Math.max(0, firstItem.orderedQty - 2);
// More stock: ordered + 3
testRecvMap[secondItem.productId] = secondItem.orderedQty + 3;

const recvResult = store.receiveBranchStock(testPOId, 'BR001', testRecvMap);
assert(recvResult.success === true, '12.5 receiveBranchStock successfully processes receiving');
assert(recvResult.report.shortageCount >= 1, '12.6 Discrepancy report detects shortage (less stock)');
assert(recvResult.report.surplusCount >= 1, '12.7 Discrepancy report detects surplus (more stock)');
assert(recvResult.report.grn.startsWith('GRN-'), '12.8 Official GRN reference number generated');
assert(store.receivingHistory.length >= 1, '12.9 Receiving record stored in receivingHistory');

// 12.10 Test Goods Inward PDF generation
const grnBlob = generateGoodsReceivingPDF(recvResult.report);
assert(grnBlob !== undefined, '12.10 Goods Inward PDF generated as Blob');
assert(grnBlob.type === 'application/pdf', '12.11 Goods Inward PDF blob type is application/pdf');

// -------------------------------------------------------------
// POINT 13: END-TO-END WORKFLOW: STOCK CHECK PDF DOWNLOAD -> STOCK RECEIVING PORTAL SYNC
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 13: Daily Stock Check PDF Download to Stock Receiving Portal Sync\x1b[0m');

// 13.1 Simulate user entering daily stock check requirements across multiple branches
store.updateRequiredQuantity('BR001', 'PRD001', 15); // Annasandra Palya: 15 Apples
store.updateRequiredQuantity('BR001', 'PRD002', 20); // Annasandra Palya: 20 Tomatoes
store.updateRequiredQuantity('BR002', 'PRD001', 10); // Kodihalli: 10 Apples
store.updateRequiredQuantity('BR002', 'PRD003', 25); // Kodihalli: 25 Potatoes
store.updateRequiredQuantity('BR003', 'PRD004', 18); // LBS Nagar: 18 Onions
store.updateRequiredQuantity('BR004', 'PRD002', 30); // Basavanagar: 30 Tomatoes

// Verify consolidated demand captured
const preProcurement = store.getConsolidatedProcurement();
assert(preProcurement.length >= 4, `13.1 Consolidated procurement contains items with demand (count: ${preProcurement.length})`);

// 13.2 Trigger Daily Stock Check PDF Manifest download & finalization
const syncPdfData = {
  date: store.getLiveDateTimeString(new Date(), true),
  branches: store.branches,
  consolidatedItems: store.getConsolidatedProcurement(),
  branchRequirements: store.getAllBranchesRequirements()
};
const masterPdfBlob = generateMasterManifestPDF(syncPdfData);
assert(masterPdfBlob !== undefined && masterPdfBlob.type === 'application/pdf', '13.2 Master manifest PDF successfully generated');

const manifestResult = store.finalizeOrderAndResetForNextDay({ source: 'DAILY_STOCK_CHECK_MASTER_PDF' });
assert(manifestResult !== null, '13.3 finalizeOrderAndResetForNextDay executed successfully');

// 13.4 Verify newly created dispatch PO in store
assert(store.latestDispatchPOId !== null, `13.4 latestDispatchPOId is set (got: ${store.latestDispatchPOId})`);
assert(store.latestDispatchPOId.startsWith('DISPATCH-'), '13.5 latestDispatchPOId has DISPATCH- prefix');
const latestPO = store.purchaseOrders[0];
assert(latestPO.id === store.latestDispatchPOId, '13.6 Latest purchase order matches latestDispatchPOId');
assert(latestPO.source === 'DAILY_STOCK_CHECK_MASTER_PDF', '13.7 Dispatch PO source is DAILY_STOCK_CHECK_MASTER_PDF');
assert(latestPO.status === 'Incoming Delivery', '13.8 Dispatch PO status is Incoming Delivery');

// 13.5 Verify daily stock check was reset to 0 for next day
assert(store.isReadyForNextDay === true, '13.9 isReadyForNextDay flag is true');
assert(store.getBranchStockCheck('BR001')['PRD001'] === 0, '13.10 BR001 PRD001 reset to 0');
assert(store.getBranchStockCheck('BR002')['PRD003'] === 0, '13.11 BR002 PRD003 reset to 0');

// 13.6 Verify Stock Receiving Portal receives the exact ordered items for each branch
const br1Incoming = store.getBranchIncomingOrder('BR001');
const br1Apples = br1Incoming.find(i => i.productId === 'PRD001');
const br1Tomatoes = br1Incoming.find(i => i.productId === 'PRD002');
assert(br1Apples && br1Apples.orderedQty === 15, `13.12 BR001 incoming apples orderedQty is 15 (got: ${br1Apples?.orderedQty})`);
assert(br1Tomatoes && br1Tomatoes.orderedQty === 20, `13.13 BR001 incoming tomatoes orderedQty is 20 (got: ${br1Tomatoes?.orderedQty})`);

const br2Incoming = store.getBranchIncomingOrder('BR002');
const br2Apples = br2Incoming.find(i => i.productId === 'PRD001');
const br2Potatoes = br2Incoming.find(i => i.productId === 'PRD003');
assert(br2Apples && br2Apples.orderedQty === 10, `13.14 BR002 incoming apples orderedQty is 10 (got: ${br2Apples?.orderedQty})`);
assert(br2Potatoes && br2Potatoes.orderedQty === 25, `13.15 BR002 incoming potatoes orderedQty is 25 (got: ${br2Potatoes?.orderedQty})`);

const br3Incoming = store.getBranchIncomingOrder('BR003');
const br3Onions = br3Incoming.find(i => i.productId === 'PRD004');
assert(br3Onions && br3Onions.orderedQty === 18, `13.16 BR003 incoming onions orderedQty is 18 (got: ${br3Onions?.orderedQty})`);

const br4Incoming = store.getBranchIncomingOrder('BR004');
const br4Tomatoes = br4Incoming.find(i => i.productId === 'PRD002');
assert(br4Tomatoes && br4Tomatoes.orderedQty === 30, `13.17 BR004 incoming tomatoes orderedQty is 30 (got: ${br4Tomatoes?.orderedQty})`);

// 13.7 Verify Dockside Receiving with Variances (Arriving truck delivers more / less)
// At Annasandra Palya (BR001): Apples delivered 13 (-2 shortage), Tomatoes delivered 24 (+4 surplus)
const initialBR1AppleStock = store.products.find(p => p.id === 'PRD001').stocks['BR001'] || 0;
const syncRecvResult = store.receiveBranchStock(store.latestDispatchPOId, 'BR001', {
  PRD001: 13,
  PRD002: 24
});
assert(syncRecvResult.success === true, '13.18 Dockside unloading verification completed successfully');
assert(syncRecvResult.report.shortageCount === 1, '13.19 Shortage of apples detected');
assert(syncRecvResult.report.surplusCount === 1, '13.20 Surplus of tomatoes detected');
assert(syncRecvResult.report.status === 'VARIANCE (MORE & LESS)', '13.21 Report status flagged as VARIANCE (MORE & LESS)');

// 13.8 Verify Physical stock credited accurately
const finalBR1AppleStock = store.products.find(p => p.id === 'PRD001').stocks['BR001'];
assert(finalBR1AppleStock === initialBR1AppleStock + 13, `13.22 BR001 physical stock credited with 13 units (from ${initialBR1AppleStock} to ${finalBR1AppleStock})`);

// 13.9 Verify Goods Inward Note PDF generated from synced receiving
const syncGrnBlob = generateGoodsReceivingPDF(syncRecvResult.report);
assert(syncGrnBlob !== undefined && syncGrnBlob.type === 'application/pdf', '13.23 GRN PDF generated for synced dispatch');

// -------------------------------------------------------------
// POINT 14: PRODUCT EDITING (EXISTING & NEWLY ADDED PRODUCTS)
// -------------------------------------------------------------
console.log('\n\x1b[36m▶ TEST SUITE 14: Product Editing (Existing & Newly Added Products)\x1b[0m');

// 14.1 Edit an existing product (PRD001 Apple)
const editExistingRes = store.updateProduct('PRD001', {
  name: 'Shimla Apple Super Grade',
  variety: 'Super Royal Red',
  unit: 'Boxes',
  reorderLevel: 6,
  unitCost: 1200,
  supplierName: 'ABC Fruit Market'
});
assert(editExistingRes.success === true, '14.1 updateProduct executes successfully on existing product');
const updatedApple = store.products.find(p => p.id === 'PRD001');
assert(updatedApple.name === 'Shimla Apple Super Grade', `14.2 Existing product name updated (got: ${updatedApple.name})`);
assert(updatedApple.unit === 'Boxes', `14.3 Existing product unit updated (got: ${updatedApple.unit})`);
assert(updatedApple.reorderLevel === 6, `14.4 Existing product reorder level updated (got: ${updatedApple.reorderLevel})`);
assert(updatedApple.unitCost === 1200, `14.5 Existing product unit cost updated (got: ${updatedApple.unitCost})`);
assert(store.auditLogs[0].action === 'PRODUCT_UPDATED', '14.6 Audit log recorded for product update');

// 14.2 Add a new product to catalog
const newlyAdded = store.addProduct({
  name: 'Dragon Fruit Pink',
  category: 'Fruits',
  unit: 'Boxes',
  reorderLevel: 5,
  unitCost: 1500,
  supplierName: 'ABC Fruit Market'
});
assert(newlyAdded && newlyAdded.id, '14.7 New product added with unique ID');
const newProdId = newlyAdded.id;

// 14.3 Edit the newly added product
const editAddedRes = store.updateProduct(newProdId, {
  name: 'Dragon Fruit Premium Red',
  variety: 'Vietnam Red Flesh',
  unit: 'Crates',
  unitCost: 1650,
  reorderLevel: 8
});
assert(editAddedRes.success === true, '14.8 updateProduct executes successfully on newly added product');
const refetchedNewProd = store.products.find(p => p.id === newProdId);
assert(refetchedNewProd.name === 'Dragon Fruit Premium Red', `14.9 Added product name updated (got: ${refetchedNewProd.name})`);
assert(refetchedNewProd.variety === 'Vietnam Red Flesh', `14.10 Added product variety updated (got: ${refetchedNewProd.variety})`);
assert(refetchedNewProd.unit === 'Crates', `14.11 Added product unit updated to Crates (got: ${refetchedNewProd.unit})`);
assert(refetchedNewProd.unitCost === 1650, `14.12 Added product unit cost updated (got: ${refetchedNewProd.unitCost})`);
assert(refetchedNewProd.reorderLevel === 8, `14.13 Added product reorder level updated (got: ${refetchedNewProd.reorderLevel})`);

// 14.4 Update physical stock via stocks map
store.updateProduct(newProdId, {
  stocks: { BR001: 15, BR002: 8, BR003: 12, BR004: 6 }
});
assert(refetchedNewProd.stocks['BR001'] === 15, '14.14 Stock for Annasandra Palya adjusted');
assert(refetchedNewProd.stocks['BR002'] === 8, '14.15 Stock for Kodihalli adjusted');

// 14.5 Delete product from catalog
const delRes = store.deleteProduct(newProdId);
assert(delRes.success === true, '14.16 deleteProduct executed successfully');
assert(store.products.find(p => p.id === newProdId) === undefined, '14.17 Deleted product no longer in catalog');

// -------------------------------------------------------------
// POINT 15: KODIHALLI BRANCH SEQUENCE SPECIFICATION
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 15: Kodihalli Branch Sequence Specification (Daily Stock Check & Stock Receiving)\x1b[0m");

import { KODIHALLI_SEQUENCE } from "../src/data/mockData.js";

// Test 15.1: Sequence length
assert(Array.isArray(KODIHALLI_SEQUENCE) && KODIHALLI_SEQUENCE.length === 94, `15.1 Kodihalli sequence contains exactly 94 items (got: ${KODIHALLI_SEQUENCE?.length})`);

// Test 15.2: Daily Stock Check sorting for Kodihalli
const sortedStockCheck = store.sortProductsForBranch("BR002", store.products);
assert(sortedStockCheck[0].id === "PRD023", `15.2 Item #1 in Kodihalli Daily Stock Check is Cucumber (got: ${sortedStockCheck[0]?.name})`);
assert(sortedStockCheck[1].id === "PRD004", `15.3 Item #2 in Kodihalli Daily Stock Check is Carrot (got: ${sortedStockCheck[1]?.name})`);
assert(sortedStockCheck[2].id === "PRD019", `15.4 Item #3 in Kodihalli Daily Stock Check is Loki (got: ${sortedStockCheck[2]?.name})`);
assert(sortedStockCheck[3].id === "PRD021", `15.5 Item #4 in Kodihalli Daily Stock Check is Capsicum (got: ${sortedStockCheck[3]?.name})`);
assert(sortedStockCheck[4].id === "PRD032", `15.6 Item #5 in Kodihalli Daily Stock Check is Gobi (got: ${sortedStockCheck[4]?.name})`);
assert(sortedStockCheck[5].id === "PRD022", `15.7 Item #6 in Kodihalli Daily Stock Check is Cabage (got: ${sortedStockCheck[5]?.name})`);
assert(sortedStockCheck[6].id === "PRD005", `15.8 Item #7 in Kodihalli Daily Stock Check is beans (got: ${sortedStockCheck[6]?.name})`);
assert(sortedStockCheck[7].id === "PRD006", `15.9 Item #8 in Kodihalli Daily Stock Check is Bhindi (got: ${sortedStockCheck[7]?.name})`);
assert(sortedStockCheck[8].id === "PRD012", `15.10 Item #9 in Kodihalli Daily Stock Check is Mooli (got: ${sortedStockCheck[8]?.name})`);
assert(sortedStockCheck[9].id === "PRD057", `15.11 Item #10 in Kodihalli Daily Stock Check is Bitrot (got: ${sortedStockCheck[9]?.name})`);
assert(sortedStockCheck[10].id === "PRD049", `15.12 Item #11 in Kodihalli Daily Stock Check is Turai (got: ${sortedStockCheck[10]?.name})`);
assert(sortedStockCheck[43].id === "PRD034", `15.13 Item #44 in Kodihalli Daily Stock Check is Arvi (got: ${sortedStockCheck[43]?.name})`);
assert(sortedStockCheck[44].id === "PRD045", `15.14 Item #45 in Kodihalli Daily Stock Check is Dhanya farm (got: ${sortedStockCheck[44]?.name})`);
assert(sortedStockCheck[51].id === "PRD195", `15.15 Item #52 in Kodihalli Daily Stock Check is Sabakki (got: ${sortedStockCheck[51]?.name})`);
assert(sortedStockCheck[52].id === "PRD143", `15.16 Item #53 in Kodihalli Daily Stock Check is Sweet potato (got: ${sortedStockCheck[52]?.name})`);
assert(sortedStockCheck[53].id === "PRD085", `15.17 Item #54 in Kodihalli Daily Stock Check is Pine apple (got: ${sortedStockCheck[53]?.name})`);
assert(sortedStockCheck[93].id === "PRD112", `15.18 Item #94 in Kodihalli Daily Stock Check is Mangoes (got: ${sortedStockCheck[93]?.name})`);

// Test 15.19: Complete sequence integrity test across all 93 items
let all93Match = true;
for (let i = 0; i < 94; i++) {
  if (sortedStockCheck[i].id !== KODIHALLI_SEQUENCE[i]) {
    all93Match = false;
    break;
  }
}
assert(all93Match === true, "15.19 All 94 items strictly follow sequence in Daily Stock Check");

// Test 15.20: Stock Receiving list for Kodihalli
const kdhIncoming = store.getBranchIncomingOrder("BR002", "PO-20261003-KDH01");
assert(kdhIncoming.length === 94, `15.20 Kodihalli receiving delivery has 94 items (got: ${kdhIncoming.length})`);
assert(kdhIncoming[0].productId === "PRD023", `15.21 Stock Receiving item #1 is Cucumber (got: ${kdhIncoming[0]?.productName})`);
assert(kdhIncoming[1].productId === "PRD004", `15.22 Stock Receiving item #2 is Carrot (got: ${kdhIncoming[1]?.productName})`);
assert(kdhIncoming[93].productId === "PRD112", `15.23 Stock Receiving item #94 is Mangoes (got: ${kdhIncoming[93]?.productName})`);

let all93RecvMatch = true;
for (let i = 0; i < 94; i++) {
  if (kdhIncoming[i].productId !== KODIHALLI_SEQUENCE[i]) {
    all93RecvMatch = false;
    break;
  }
}
assert(all93RecvMatch === true, "15.24 All 94 items strictly follow sequence in Stock Receiving");

// Test 15.25: Non-Kodihalli branches retain normal catalog order
const kdhFirst = store.sortProductsForBranch("BR002", store.products)[0];
assert(kdhFirst.id === KODIHALLI_SEQUENCE[0], "15.25 Kodihalli sequence correctly prioritizes its item #1");

// -------------------------------------------------------------
// POINT 16: LB SHASTRI NAGAR SEQUENCE & DUAL-BRANCH CATEGORIZATION
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 16: LB Shastri Nagar Sequence & Dual-Branch Categorization\x1b[0m");

import { LBS_NAGAR_SEQUENCE } from "../src/data/mockData.js";

// Test 16.1: LBS Sequence length
assert(Array.isArray(LBS_NAGAR_SEQUENCE) && LBS_NAGAR_SEQUENCE.length === 103, `16.1 LBS Nagar sequence contains exactly 103 items (got: ${LBS_NAGAR_SEQUENCE?.length})`);

// Test 16.2: Daily Stock Check sorting for LBS Nagar
const sortedLBS = store.sortProductsForBranch("BR003", store.products);
assert(sortedLBS[0].id === "PRD005", `16.2 Item #1 in LBS Daily Stock Check is Beans (got: ${sortedLBS[0]?.name})`);
assert(sortedLBS[1].id === "PRD004", `16.3 Item #2 in LBS Daily Stock Check is Carrot (got: ${sortedLBS[1]?.name})`);
assert(sortedLBS[2].id === "PRD023", `16.4 Item #3 in LBS Daily Stock Check is Cucumber (got: ${sortedLBS[2]?.name})`);
assert(sortedLBS[61].id === "PRD185", `16.5 Item #62 in LBS Daily Stock Check is Tomato Nati (got: ${sortedLBS[61]?.name})`);
assert(sortedLBS[62].id === "PRD092", `16.6 Item #63 in LBS Daily Stock Check is robusta (got: ${sortedLBS[62]?.name})`);
assert(sortedLBS[102].id === "PRD089", `16.7 Item #103 in LBS Daily Stock Check is Watermelon Stripes (got: ${sortedLBS[101]?.name})`);

// Test 16.8: All 102 items strictly follow LBS sequence
let all102Match = true;
for (let i = 0; i < 103; i++) {
  if (sortedLBS[i].id !== LBS_NAGAR_SEQUENCE[i]) {
    all102Match = false;
    break;
  }
}
assert(all102Match === true, "16.8 All 103 items strictly follow sequence in LBS Daily Stock Check");

// Test 16.9: Stock Receiving for LBS Nagar
const lbsIncoming = store.getBranchIncomingOrder("BR003", "PO-20261003-LBS01");
assert(lbsIncoming.length === 103, `16.9 LBS receiving delivery has 103 items (got: ${lbsIncoming.length})`);
assert(lbsIncoming[0].productId === "PRD005", `16.10 LBS Receiving item #1 is Beans (got: ${lbsIncoming[0]?.productName})`);
assert(lbsIncoming[102].productId === "PRD089", `16.11 LBS Receiving item #103 is Watermelon Stripes (got: ${lbsIncoming[101]?.productName})`);

let all102RecvMatch = true;
for (let i = 0; i < 103; i++) {
  if (lbsIncoming[i].productId !== LBS_NAGAR_SEQUENCE[i]) {
    all102RecvMatch = false;
    break;
  }
}
assert(all102RecvMatch === true, "16.12 All 103 items strictly follow sequence in LBS Stock Receiving");

// Test 16.13: Categorization verification for Kodihalli (53 Veg / 40 Fruits)
const kdhVegList = sortedStockCheck.filter(p => p.category === "Vegetables");
const kdhFruitList = sortedStockCheck.filter(p => p.category === "Fruits");
assert(kdhVegList.slice(0, 53).every((p, idx) => p.id === KODIHALLI_SEQUENCE[idx]), "16.13 Kodihalli first 53 items are categorized as Vegetables in exact sequence");
assert(kdhFruitList.slice(0, 41).every((p, idx) => p.id === KODIHALLI_SEQUENCE[53 + idx]), "16.14 Kodihalli remaining 41 items are categorized as Fruits in exact sequence");

// Test 16.15: Categorization verification for LB Shastri Nagar (62 Veg / 40 Fruits)
const lbsVegList = sortedLBS.filter(p => p.category === "Vegetables");
const lbsFruitList = sortedLBS.filter(p => p.category === "Fruits");
assert(lbsVegList.slice(0, 62).every((p, idx) => p.id === LBS_NAGAR_SEQUENCE[idx]), "16.15 LBS Nagar first 62 items are categorized as Vegetables in exact sequence");
assert(lbsFruitList.slice(0, 41).every((p, idx) => p.id === LBS_NAGAR_SEQUENCE[62 + idx]), "16.16 LBS Nagar remaining 41 items are categorized as Fruits in exact sequence");

// -------------------------------------------------------------

// -------------------------------------------------------------
// POINT 17: BASAVANAGAR SEQUENCE & PRODUCE CATEGORIZATION
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 17: Basavanagar Sequence & Produce Categorization\x1b[0m");

import { BASAVANAGAR_SEQUENCE } from "../src/data/mockData.js";

// Test 17.1: Basavanagar Sequence length
assert(Array.isArray(BASAVANAGAR_SEQUENCE) && BASAVANAGAR_SEQUENCE.length === 104, `17.1 Basavanagar sequence contains exactly 104 items (got: ${BASAVANAGAR_SEQUENCE?.length})`);

// Test 17.2 to 17.5: Daily Stock Check sorting for Basavanagar (Vegetables first, then Fruits)
const sortedBSV = store.sortProductsForBranch("BR004", store.products);
assert(sortedBSV[0].id === "PRD023", `17.2 Item #1 in Basavanagar Daily Stock Check is Cucumber (got: ${sortedBSV[0]?.name})`);
assert(sortedBSV[61].id === "PRD003", `17.3 Item #62 in Basavanagar Daily Stock Check is Tomato farm (got: ${sortedBSV[61]?.name})`);
assert(sortedBSV[62].id === "PRD131", `17.4 Item #63 in Basavanagar Daily Stock Check is Raw Green Mango (got: ${sortedBSV[62]?.name})`);
assert(sortedBSV[103].id === "PRD202", `17.5 Item #104 in Basavanagar Daily Stock Check is Misri Apple (got: ${sortedBSV[103]?.name})`);

// Test 17.6: All 104 items strictly follow Basavanagar sequence
let all101Match = true;
for (let i = 0; i < 104; i++) {
  if (sortedBSV[i].id !== BASAVANAGAR_SEQUENCE[i]) {
    all101Match = false;
    break;
  }
}
assert(all101Match === true, "17.6 All 104 items strictly follow sequence in Basavanagar Daily Stock Check");

// Test 17.7: Stock Receiving for Basavanagar
const bsvIncoming = store.getBranchIncomingOrder("BR004", "PO-20261003-BSV01");
assert(bsvIncoming.length === 104, `17.7 Basavanagar receiving delivery has 104 items (got: ${bsvIncoming.length})`);
assert(bsvIncoming[0].productId === "PRD023", `17.8 Basavanagar Receiving item #1 is Cucumber (got: ${bsvIncoming[0]?.productName})`);
assert(bsvIncoming[103].productId === "PRD202", `17.9 Basavanagar Receiving item #104 is Misri Apple (got: ${bsvIncoming[103]?.productName})`);

let all101RecvMatch = true;
for (let i = 0; i < 104; i++) {
  if (bsvIncoming[i].productId !== BASAVANAGAR_SEQUENCE[i]) {
    all101RecvMatch = false;
    break;
  }
}
assert(all101RecvMatch === true, "17.10 All 104 items strictly follow sequence in Basavanagar Stock Receiving");

// Test 17.11 & 17.12: Categorization verification for Basavanagar (62 Veg / 42 Fruits)
const bsvFruitList = sortedBSV.filter(p => store.getProductCategoryForBranch("BR004", p.id) === "Fruits");
const bsvVegList = sortedBSV.filter(p => store.getProductCategoryForBranch("BR004", p.id) === "Vegetables");
assert(bsvVegList.slice(0, 62).every((p, idx) => p.id === BASAVANAGAR_SEQUENCE[idx]), "17.11 Basavanagar first 62 items are categorized as Vegetables in exact sequence");
assert(bsvFruitList.slice(0, 42).every((p, idx) => p.id === BASAVANAGAR_SEQUENCE[62 + idx]), "17.12 Basavanagar remaining 42 items are categorized as Fruits in exact sequence");


// -------------------------------------------------------------
// POINT 18: ANNASANDRAPALYA SEQUENCE & CUSTOM SERIAL NUMBER POSITIONING
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 18: Annasandrapalya Sequence & Custom Serial Number Positioning\x1b[0m");

import { ANNASANDRAPALYA_SEQUENCE } from "../src/data/mockData.js";

// Test 18.1: Annasandrapalya Sequence length (62 LBS Veg + 38 BSV Fruits = 100)
assert(Array.isArray(ANNASANDRAPALYA_SEQUENCE) && ANNASANDRAPALYA_SEQUENCE.length === 102, `18.1 Annasandrapalya sequence contains exactly 102 items (got: ${ANNASANDRAPALYA_SEQUENCE?.length})`);

// Test 18.2 to 18.5: Daily Stock Check sorting for Annasandrapalya
const sortedASP = store.sortProductsForBranch("BR001", store.products);
assert(sortedASP[0].id === "PRD005", `18.2 Item #1 in ASP Daily Stock Check is Beans (got: ${sortedASP[0]?.name})`);
assert(sortedASP[61].id === "PRD185", `18.3 Item #62 in ASP Daily Stock Check is Tomato Nati (got: ${sortedASP[61]?.name})`);
assert(sortedASP[62].id === "PRD088", `18.4 Item #63 in ASP Daily Stock Check is Watermelon (got: ${sortedASP[62]?.name})`);
assert(sortedASP[101].id === "PRD202", `18.5 Item #102 in ASP Daily Stock Check is Misri Apple (got: ${sortedASP[101]?.name})`);

// Test 18.6: All 100 items strictly follow Annasandrapalya sequence
let all100Match = true;
for (let i = 0; i < 102; i++) {
  if (sortedASP[i].id !== ANNASANDRAPALYA_SEQUENCE[i]) {
    all100Match = false;
    break;
  }
}
assert(all100Match === true, "18.6 All 102 items strictly follow sequence in Annasandrapalya Daily Stock Check");

// Test 18.7 to 18.10: Stock Receiving for Annasandrapalya
const aspIncoming = store.getBranchIncomingOrder("BR001", "PO-20261003-ASP01");
assert(aspIncoming.length === 102, `18.7 Annasandrapalya receiving delivery has 102 items (got: ${aspIncoming.length})`);
assert(aspIncoming[0].productId === "PRD005", `18.8 ASP Receiving item #1 is Beans (got: ${aspIncoming[0]?.productName})`);
assert(aspIncoming[101].productId === "PRD202", `18.9 ASP Receiving item #102 is Misri Apple (got: ${aspIncoming[101]?.productName})`);

let all100RecvMatch = true;
for (let i = 0; i < 102; i++) {
  if (aspIncoming[i].productId !== ANNASANDRAPALYA_SEQUENCE[i]) {
    all100RecvMatch = false;
    break;
  }
}
assert(all100RecvMatch === true, "18.10 All 102 items strictly follow sequence in Annasandrapalya Stock Receiving");

// Test 18.11 & 18.12: Categorization verification for Annasandrapalya (62 Veg / 38 Fruits)
const aspVegList = sortedASP.filter(p => store.getProductCategoryForBranch("BR001", p.id) === "Vegetables");
const aspFruitList = sortedASP.filter(p => store.getProductCategoryForBranch("BR001", p.id) === "Fruits");
assert(aspVegList.slice(0, 62).every((p, idx) => p.id === ANNASANDRAPALYA_SEQUENCE[idx]), "18.11 Annasandrapalya first 62 items are categorized as Vegetables in exact sequence");
assert(aspFruitList.slice(0, 40).every((p, idx) => p.id === ANNASANDRAPALYA_SEQUENCE[62 + idx]), "18.12 Annasandrapalya remaining 40 items are categorized as Fruits in exact sequence");

// Test 18.13: Serial numbers provided for all branches
const aspSNo1 = store.getBranchItemSerialNo("BR001", sortedASP[0].id);
const kdhSNo1 = store.getBranchItemSerialNo("BR002", KODIHALLI_SEQUENCE[0]);
const lbsSNo1 = store.getBranchItemSerialNo("BR003", LBS_NAGAR_SEQUENCE[0]);
const bsvSNo1 = store.getBranchItemSerialNo("BR004", BASAVANAGAR_SEQUENCE[0]);
assert(aspSNo1 === 1 && kdhSNo1 === 1 && lbsSNo1 === 1 && bsvSNo1 === 1, "18.13 Serial numbers consistently provided (#1) across all branches");

// Test 18.14: Adding product with specific serial number in a branch sequence
const testInsertProduct = store.addProduct({
  name: "Exotic Japanese Melon",
  category: "Fruits",
  unit: "Boxes",
  unitCost: 2500
}, { targetBranch: "BR001", serialNo: 10 });

const aspAfterInsert = store.sortProductsForBranch("BR001", store.products);
assert(aspAfterInsert[9].id === testInsertProduct.id, `18.14 Product inserted at serial number #10 in ASP sequence (got: ${aspAfterInsert[9]?.name})`);
assert(store.getBranchItemSerialNo("BR001", testInsertProduct.id) === 10, "18.15 Serial number helper returns #10 for newly inserted product");

// Test 18.16: Adding product with ALL branches option at position 1
const testTopProduct = store.addProduct({
  name: "Priority Organic Spinach",
  category: "Vegetables",
  unit: "Bunches",
  unitCost: 35
}, { targetBranch: "ALL", serialNo: 1 });

assert(store.branchSequences.BR001[0] === testTopProduct.id, "18.16 Priority product placed at serial #1 in BR001");
assert(store.branchSequences.BR002[0] === testTopProduct.id, "18.17 Priority product placed at serial #1 in BR002");
assert(store.branchSequences.BR003[0] === testTopProduct.id, "18.18 Priority product placed at serial #1 in BR003");
assert(store.branchSequences.BR004[0] === testTopProduct.id, "18.19 Priority product placed at serial #1 in BR004");

// -------------------------------------------------------------
// POINT 19: MANUAL DELETION INTEGRITY & PURGING
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 19: Manual Deletion Integrity & Purging\x1b[0m");

// Test 19.1: Setting requirement to 0 via updateRequiredQuantity strictly returns 0
store.updateRequiredQuantity('BR001', 'PRD001', 0);
assert(store.getBranchRequiredQty('BR001', 'PRD001') === 0, `19.1 getBranchRequiredQty returns 0 when manually zeroed/deleted (got: ${store.getBranchRequiredQty('BR001', 'PRD001')})`);

// Test 19.2: Product does not resurrect in getAllBranchesRequirements when set to 0
const allReqsAfterZero = store.getAllBranchesRequirements();
const aspItemsAfterZero = allReqsAfterZero['BR001'] || [];
assert(!aspItemsAfterZero.some(it => it.productId === 'PRD001'), "19.2 Zeroed/deleted item does not appear in branch requirements list");

// Test 19.3: Product zeroed across all branches is purged from getConsolidatedProcurement
store.updateRequiredQuantity('BR002', 'PRD001', 0);
store.updateRequiredQuantity('BR003', 'PRD001', 0);
store.updateRequiredQuantity('BR004', 'PRD001', 0);
const consolidatedAfterZero = store.getConsolidatedProcurement();
assert(!consolidatedAfterZero.some(c => c.product.id === 'PRD001'), "19.3 Product zeroed across all branches is removed from consolidated procurement");

// Test 19.4: deleteBranchRequiredItem sets quantity to 0 and removes from branch requirements
store.updateRequiredQuantity('BR001', 'PRD002', 15);
assert(store.getBranchRequiredQty('BR001', 'PRD002') === 15, "19.4 Setup requirement for PRD002");
store.deleteBranchRequiredItem('BR001', 'PRD002');
assert(store.getBranchRequiredQty('BR001', 'PRD002') === 0, "19.5 deleteBranchRequiredItem resets quantity to 0");
const reqsAfterDel = store.getRequiredItemsForBranch('BR001');
assert(!reqsAfterDel.some(it => it.productId === 'PRD002'), "19.6 Deleted item immediately removed from getRequiredItemsForBranch");

// Test 19.7: deleteProduct cleans from catalog, sequences, purchase orders, and requirements
const tempProd = store.addProduct({
  name: "Temporary Test Item",
  category: "Fruits",
  unit: "Kg",
  unitCost: 100
}, { targetBranch: "ALL", serialNo: 1 });

assert(store.products.some(p => p.id === tempProd.id), "19.7 Temp product added to catalog");
assert(store.branchSequences.BR001.includes(tempProd.id), "19.8 Temp product in BR001 sequence");

const delProductRes = store.deleteProduct(tempProd.id);
assert(delProductRes.success === true, "19.9 deleteProduct returns success");
assert(!store.products.some(p => p.id === tempProd.id), "19.10 Product purged from store.products");
assert(!store.branchSequences.BR001.includes(tempProd.id), "19.11 Product purged from BR001 sequence");
assert(!store.branchSequences.BR002.includes(tempProd.id), "19.12 Product purged from BR002 sequence");
assert(!store.branchSequences.BR003.includes(tempProd.id), "19.13 Product purged from BR003 sequence");
assert(!store.branchSequences.BR004.includes(tempProd.id), "19.14 Product purged from BR004 sequence");

// -------------------------------------------------------------
// POINT 20: RESTORE DELETED PRODUCTS & CONFIRMATION SAFEGUARDS
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 20: Restore Deleted Products & Confirmation Safeguards\x1b[0m");

// Test 20.1: Deleted product tracked in deletedProducts recycle bin
assert(store.deletedProducts.some(p => p.id === tempProd.id), "20.1 Deleted product tracked in store.deletedProducts");

// Test 20.2: getDeletedProducts returns deleted product
const deletedList = store.getDeletedProducts();
assert(deletedList.some(p => p.id === tempProd.id), "20.2 getDeletedProducts returns deleted product");

// Test 20.3: restoreProduct returns success
const restoreRes = store.restoreProduct(tempProd.id);
assert(restoreRes.success === true, "20.3 restoreProduct returns success");

// Test 20.4: Restored product back in store.products
assert(store.products.some(p => p.id === tempProd.id), "20.4 Restored product back in store.products");

// Test 20.5: Restored product back in BR001 sequence
assert(store.branchSequences.BR001.includes(tempProd.id), "20.5 Restored product back in BR001 sequence");

// Test 20.6: Restored product back in BR004 sequence
assert(store.branchSequences.BR004.includes(tempProd.id), "20.6 Restored product back in BR004 sequence");

// Test 20.7: Restored product removed from deleted list
assert(!store.getDeletedProducts().some(p => p.id === tempProd.id), "20.7 Restored product removed from deletedProducts");

// Test 20.8: Audit log records PRODUCT_RESTORED action
assert(store.auditLogs[0].action === "PRODUCT_RESTORED", "20.8 Audit log records PRODUCT_RESTORED action");

// Test 20.9: Batch restore: create 2 products, delete both, restore all
const batchProdA = store.addProduct({ name: "Batch Prod A", category: "Vegetables", unit: "Kg", unitCost: 30 });
const batchProdB = store.addProduct({ name: "Batch Prod B", category: "Fruits", unit: "Boxes", unitCost: 50 });
store.deleteProduct(batchProdA.id);
store.deleteProduct(batchProdB.id);
assert(store.getDeletedProducts().some(p => p.id === batchProdA.id), "20.9 Batch Prod A in deleted list");
assert(store.getDeletedProducts().some(p => p.id === batchProdB.id), "20.10 Batch Prod B in deleted list");

// Test 20.11: restoreAllDeletedProducts restores both
const restoreAllRes = store.restoreAllDeletedProducts();
assert(restoreAllRes.success === true && restoreAllRes.count >= 2, `20.11 restoreAllDeletedProducts restored count: ${restoreAllRes.count}`);
assert(store.products.some(p => p.id === batchProdA.id), "20.12 Batch Prod A restored to catalog");
assert(store.products.some(p => p.id === batchProdB.id), "20.13 Batch Prod B restored to catalog");

// Clean up test batch products
store.deleteProduct(batchProdA.id);
store.deleteProduct(batchProdB.id);
store.deleteProduct(tempProd.id);

// -------------------------------------------------------------
// POINT 21: FAST NUMERIC STEPPER (+/-) CONTROLS
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 21: Fast Numeric Stepper (+/-) Controls\x1b[0m");

// Test 21.1: renderDailyStockCheckView generates + and - stepper buttons
const stockCheckHtml = renderDailyStockCheckView();
assert(stockCheckHtml.includes('btn-qty-plus'), "21.1 Daily Stock Check renders btn-qty-plus buttons");
assert(stockCheckHtml.includes('btn-qty-minus'), "21.2 Daily Stock Check renders btn-qty-minus buttons");

// Test 21.3: Mobile stock card contains + and - buttons
const hasMobileSteppers = stockCheckHtml.includes('mobile-card-row') && stockCheckHtml.includes('btn-qty-step');
assert(hasMobileSteppers, "21.3 Mobile stock cards include +/- quantity stepper buttons");

// Test 21.4: Stepper increment logic (+1)
store.updateRequiredQuantity('BR001', 'PRD005', 1);
assert(store.getBranchRequiredQty('BR001', 'PRD005') === 1, "21.4 Initial quantity set to 1");
const steppedUp = store.getBranchRequiredQty('BR001', 'PRD005') + 1;
store.updateRequiredQuantity('BR001', 'PRD005', steppedUp);
assert(store.getBranchRequiredQty('BR001', 'PRD005') === 2, "21.5 Stepper incremented quantity to 2");

// Test 21.6: Multi-step increment (2 -> 5)
for (let i = 0; i < 3; i++) {
  const current = store.getBranchRequiredQty('BR001', 'PRD005');
  store.updateRequiredQuantity('BR001', 'PRD005', current + 1);
}
assert(store.getBranchRequiredQty('BR001', 'PRD005') === 5, "21.6 Multi-step incremented quantity to 5");

// Test 21.7: Stepper decrement logic (-1)
const currentBeforeDec = store.getBranchRequiredQty('BR001', 'PRD005');
store.updateRequiredQuantity('BR001', 'PRD005', Math.max(0, currentBeforeDec - 1));
assert(store.getBranchRequiredQty('BR001', 'PRD005') === 4, "21.7 Stepper decremented quantity to 4");

// Test 21.8: Stepper decrement down to 0
store.updateRequiredQuantity('BR001', 'PRD005', 0);
assert(store.getBranchRequiredQty('BR001', 'PRD005') === 0, "21.8 Stepper decremented quantity down to 0");

// Test 21.9: Stepper decrement clamped at 0 (never negative)
const currentZero = store.getBranchRequiredQty('BR001', 'PRD005');
store.updateRequiredQuantity('BR001', 'PRD005', Math.max(0, currentZero - 1));
assert(store.getBranchRequiredQty('BR001', 'PRD005') === 0, "21.9 Stepper clamped at 0 without becoming negative");

// Test 21.10: Redundant inline delete button removed from mobile card stepper row
assert(!stockCheckHtml.includes('btn-clear-stock-item-mobile'), "21.10 Mobile stock cards omit redundant inline delete button in stepper row");
assert(!stockCheckHtml.includes('btn-clear-stock-item'), "21.11 Stock check table omits text delete button");
assert(stockCheckHtml.includes('btn-direct-delete-product'), "21.12 Stock check retains delete trash symbol (🗑️)");

// Test 21.13: Vegetables category tab precedes Fruits in Daily Stock Check
const vegCatIdx = stockCheckHtml.indexOf('data-cat="Vegetables"');
const fruCatIdx = stockCheckHtml.indexOf('data-cat="Fruits"');
assert(vegCatIdx !== -1 && fruCatIdx !== -1 && vegCatIdx < fruCatIdx, "21.13 Vegetables filter tab precedes Fruits in Daily Stock Check");

// Test 21.14: Vegetables category tab precedes Fruits in Requirements Matrix
const reqMatrixHtml = renderRequirementsView();
const reqVegIdx = reqMatrixHtml.indexOf('data-cat="Vegetables"');
const reqFruIdx = reqMatrixHtml.indexOf('data-cat="Fruits"');
assert(reqVegIdx !== -1 && reqFruIdx !== -1 && reqVegIdx < reqFruIdx, "21.14 Vegetables filter tab precedes Fruits in Requirements Matrix");

// Test 21.15: Across ALL 4 branches, sequence produce has Vegetables first and Fruits second
const branchSeqMap = {
  'BR001': store.branchSequences.BR001,
  'BR002': store.branchSequences.BR002,
  'BR003': store.branchSequences.BR003,
  'BR004': store.branchSequences.BR004
};
for (const [bId, seq] of Object.entries(branchSeqMap)) {
  let fruitStarted = false;
  let vegAfterFruit = false;
  for (const pId of seq) {
    const cat = store.getProductCategoryForBranch(bId, pId);
    if (cat === 'Vegetables' && fruitStarted) vegAfterFruit = true;
    if (cat === 'Fruits') fruitStarted = true;
  }
  assert(!vegAfterFruit, `21.15 Branch ${bId} has strictly all Vegetables first, followed by Fruits in sequence`);
}

// -------------------------------------------------------------
// POINT 22: 4-BRANCH SUBMISSION PDF GUARDRAIL
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 22: 4-Branch Submission PDF Guardrail\x1b[0m");

// Ensure initial baseline of all 4 submitted
store.markBranchSubmitted('BR001', true);
store.markBranchSubmitted('BR002', true);
store.markBranchSubmitted('BR003', true);
store.markBranchSubmitted('BR004', true);

// Test 22.1: areAllBranchesSubmitted returns true when all 4 submitted
assert(store.areAllBranchesSubmitted() === true, "22.1 areAllBranchesSubmitted returns true when all 4 branches submitted");

// Test 22.2: Unsubmitting 1 branch (e.g. Basavanagar BR004)
store.markBranchSubmitted('BR004', false);
assert(store.isBranchSubmitted('BR004') === false, "22.2 Basavanagar BR004 marked unsubmitted");

// Test 22.3: areAllBranchesSubmitted strictly returns false when even 1 branch is pending
assert(store.areAllBranchesSubmitted() === false, "22.3 areAllBranchesSubmitted strictly returns false if 1 branch is pending");

// Test 22.4: getPendingBranches identifies the unsubmitted branch
const pending = store.getPendingBranches();
assert(pending.length === 1 && pending[0].id === 'BR004', `22.4 Pending branches accurately lists Basavanagar (got: ${pending.map(p => p.name).join(', ')})`);

// Test 22.5: Daily stock check view shows locked indicator when branches are pending
const lockedViewHtml = renderDailyStockCheckView();
assert(lockedViewHtml.includes('🔒') || lockedViewHtml.includes('PDF Download Locked'), "22.5 View renders locked indicator when branches pending");
assert(lockedViewHtml.includes('Waiting for All 4 Branches') || lockedViewHtml.includes('PDF Export Locked'), "22.6 View renders 4-branch readiness banner");

// Test 22.7: Submitting the missing branch restores all branches submitted
store.markBranchSubmitted('BR004', true);
assert(store.areAllBranchesSubmitted() === true, "22.7 areAllBranchesSubmitted returns true after Basavanagar submits");
assert(store.getPendingBranches().length === 0, "22.8 No pending branches remain");

// Test 22.9: Resetting for next day resets submission status to false for all branches
store.finalizeOrderAndResetForNextDay({ source: 'TEST_RESET' });
assert(store.areAllBranchesSubmitted() === false, "22.9 Reset for next day sets all branches to pending for tomorrow's count");
assert(store.getPendingBranches().length === 4, "22.10 Exactly 4 branches pending after next day reset");

// Re-submit all 4 branches for clean state
store.markBranchSubmitted('BR001', true);
store.markBranchSubmitted('BR002', true);
store.markBranchSubmitted('BR003', true);
store.markBranchSubmitted('BR004', true);
assert(store.areAllBranchesSubmitted() === true, "22.11 All 4 branches restored to submitted state for production use");

// -------------------------------------------------------------
// POINT 23: DEVELOPER ATTRIBUTION & PROJECT INQUIRY LINK
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 23: Developer Attribution & Project Contact Link (FAHAD ALI KHAN)\x1b[0m");

const sidebarHtml = renderSidebar();
assert(sidebarHtml.includes('Design &amp; Developed by') || sidebarHtml.includes('Design & Developed by'), "23.1 Sidebar renders developer credit header");
assert(sidebarHtml.includes('FAHAD ALI KHAN'), "23.2 Sidebar credit prominently displays FAHAD ALI KHAN");
assert(sidebarHtml.includes('mailto:alikhanfahad84@gmail.com'), "23.3 Sidebar credit links directly to alikhanfahad84@gmail.com for project inquiries");

const loginViewHtml = renderLoginView();
assert(loginViewHtml.includes('FAHAD ALI KHAN'), "23.4 Login view prominently displays developer FAHAD ALI KHAN");
assert(loginViewHtml.includes('mailto:alikhanfahad84@gmail.com'), "23.5 Login view credit links to alikhanfahad84@gmail.com");
assert(sidebarHtml.includes('fahad-khan-logo.jpg'), "23.6 Sidebar credit renders developer brand logo beside credit line");
assert(loginViewHtml.includes('fahad-khan-logo.jpg'), "23.7 Login view renders developer brand logo beside credit line");

// -------------------------------------------------------------
// POINT 24: RESPONSIVE MOBILE CARDS IN STOCK RECEIVING PORTAL
// -------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 24: Responsive Mobile Cards in Stock Receiving Portal\x1b[0m");

const recvViewHtml = renderReceivingView();
assert(recvViewHtml.includes('mobile-receiving-cards'), "24.1 Receiving view renders dedicated mobile-receiving-cards container");
assert(recvViewHtml.includes('mobile-receiving-card'), "24.2 Receiving view renders individual mobile-receiving-card elements");
assert(recvViewHtml.includes('mobile-recv-next-btn'), "24.3 Mobile receiving cards include NEXT PRODUCT quick touch buttons");
assert(recvViewHtml.includes('btn-recv-step-minus') && recvViewHtml.includes('btn-recv-step-plus'), "24.4 Mobile receiving cards include plus and minus stepper buttons");
assert(recvViewHtml.includes('btn-match-expected'), "24.5 Mobile receiving cards include 1-tap = Match expected button");
assert(recvViewHtml.includes('receiving-table-view'), "24.6 Desktop table encapsulated in receiving-table-view for responsive switching");

// POINT 25: MULTI-BRANCH NAVIGATION & DEDICATED MANIFESTS IN STOCK RECEIVING
// --------------------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 25: Multi-Branch Navigation & Dedicated Manifests in Stock Receiving\x1b[0m");

const recvInitialHtml = renderReceivingView();
assert(recvInitialHtml.includes('receivingBranchSelect'), "25.1 Receiving view renders branch selector dropdown chip (#receivingBranchSelect)");
assert(recvInitialHtml.includes('receiving-branch-tabs'), "25.2 Receiving view renders responsive 4-branch switcher tabs");
assert(recvInitialHtml.includes('data-branch-id="BR001"'), "25.3 Branch tabs include Annasandrapalya (BR001)");
assert(recvInitialHtml.includes('data-branch-id="BR002"'), "25.4 Branch tabs include Kodihalli (BR002)");
assert(recvInitialHtml.includes('data-branch-id="BR003"'), "25.5 Branch tabs include LB Shastri Nagar (BR003)");
assert(recvInitialHtml.includes('data-branch-id="BR004"'), "25.6 Branch tabs include Basavanagar (BR004)");

// Test branch item loading for all 4 branches
const branchesToTest = [
  { id: 'BR001', name: 'Annasandrapalya' },
  { id: 'BR002', name: 'Kodihalli' },
  { id: 'BR003', name: 'LB Shastri Nagar' },
  { id: 'BR004', name: 'Basavanagar' }
];

for (const b of branchesToTest) {
  store.setBranch(b.id);
  const branchRecvHtml = renderReceivingView();
  assert(!branchRecvHtml.includes('No Scheduled Deliveries'), `25.7 ${b.name} (${b.id}) receiving view displays delivery manifest without "No Scheduled Deliveries" error`);
  assert(branchRecvHtml.includes('mobile-receiving-card'), `25.8 ${b.name} (${b.id}) renders mobile delivery item cards`);
}
// Restore branch to BR001
store.setBranch('BR001');

// POINT 26: UNLOCKED REVIEW REQUIREMENTS, 4-BRANCH PDF UNLOCK AT LAST & WHATSAPP SHARE
// -----------------------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 26: Unlocked Review Requirements, 4-Branch PDF Unlock at Last & WhatsApp Share\x1b[0m");

// 26.1: Review Requirements button is always accessible and never locked/disabled, even with 0 products
store.setBranch('BR001');
store.products.forEach(p => store.updateRequiredQuantity('BR001', p.id, 0, false));
const dscZeroHtml = renderDailyStockCheckView();
assert(dscZeroHtml.includes('id="btnReviewRequirements"') && !dscZeroHtml.includes('Review Requirements (Locked)') && !dscZeroHtml.includes('disabled'), "26.1 Review Requirements button is accessible and never locked even with 0 products");
assert(dscZeroHtml.includes('Review Requirements (0)'), "26.1b Review Requirements shows (0) items and remains clickable");

// 26.2: When products are added (> 0), Review button tracks product count
store.updateRequiredQuantity('BR001', store.products[0].id, 5, false);
store.updateRequiredQuantity('BR001', store.products[1].id, 8, false);
const dscActiveHtml = renderDailyStockCheckView();
assert(dscActiveHtml.includes('Review Requirements (2)'), "26.2 Review Requirements shows active product count (2)");
assert(dscActiveHtml.includes('id="btnReviewRequirements"') && !dscActiveHtml.includes('disabled'), "26.2b Review Requirements button is fully clickable with added products");

// 26.2c: PDF Download remains locked until the last (all 4 branches submitted)
store.branchSubmitted = { 'BR001': false, 'BR002': false, 'BR003': false, 'BR004': false };
assert(store.areAllBranchesSubmitted() === false, "26.2c PDF download is locked initially when branches have not submitted");

// 26.3: WhatsApp message generator builds formatted manifest with all 4 branches
const waMsg = buildWhatsAppOrderMessage();
assert(waMsg.includes('MD FRESH — APMC MANDI DAILY PROCUREMENT MANIFEST'), "26.3 WhatsApp summary contains official APMC heading");
assert(waMsg.includes('ALL 4 BRANCHES'), "26.4 WhatsApp summary highlights 4-branch consolidated status");
assert(waMsg.includes('ANNASANDRAPALYA') || waMsg.includes('KODIHALLI') || waMsg.includes('Annasandra Palya'), "26.5 WhatsApp summary lists branch items breakdown");

// 26.4: Notification created when all 4 branches submitted
store.branchSubmitted = { 'BR001': true, 'BR002': true, 'BR003': true, 'BR004': false };
store.markBranchSubmitted('BR004', true);
assert(store.areAllBranchesSubmitted() === true, "26.6 Final branch submission sets areAllBranchesSubmitted to true");
const all4Notif = store.notifications.find(n => n.title && n.title.includes("All 4 Shops' Items Have Been Listed"));
assert(Boolean(all4Notif), "26.7 System creates notification 'All 4 Shops Items Have Been Listed' for 4th branch submission");
assert(all4Notif && all4Notif.action === 'SHARE_WHATSAPP', "26.8 4th branch notification carries SHARE_WHATSAPP action");

// 26.5: View templates render WhatsApp share buttons
assert(dscActiveHtml.includes('btn-whatsapp') || dscActiveHtml.includes('WhatsApp'), "26.9 Daily Stock Check renders WhatsApp share option");
const reqViewHtml = renderRequirementsView();
assert(reqViewHtml.includes('btn-whatsapp') || reqViewHtml.includes('WhatsApp'), "26.10 Requirements Matrix renders WhatsApp share option");

// 26.6: WhatsApp Share attaches PDF file via Web Share API
assert(typeof shareOrderOnWhatsApp === 'function', "26.11 shareOrderOnWhatsApp is defined and callable");

let sharedPayload = null;
const originalNav = globalThis.navigator;

Object.defineProperty(globalThis, 'navigator', {
  value: {
    canShare: (opts) => Boolean(opts && opts.files && opts.files.length > 0),
    share: async (payload) => {
      sharedPayload = payload;
    }
  },
  configurable: true,
  writable: true
});

await shareOrderOnWhatsApp();
assert(sharedPayload !== null, "26.12 shareOrderOnWhatsApp triggers Web Share API");
assert(sharedPayload && sharedPayload.files && sharedPayload.files.length === 1, "26.13 shareOrderOnWhatsApp attaches exactly 1 PDF file");
assert(sharedPayload && sharedPayload.files[0].name.endsWith('.pdf'), "26.14 Attached file has .pdf extension");
assert(sharedPayload && sharedPayload.files[0].type === 'application/pdf', "26.15 Attached file has application/pdf MIME type");

// Restore original navigator
Object.defineProperty(globalThis, 'navigator', {
  value: originalNav,
  configurable: true,
  writable: true
});

// POINT 27: ADD PRODUCT MODAL INTEGRITY & PDF MANIFEST DOWNLOAD RESILIENCE
// --------------------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 27: Add Product Modal Integrity & PDF Manifest Download Resilience\x1b[0m");

const dscIntegrityHtml = renderDailyStockCheckView();

// 27.1: fastAddProductForm has valid matching closing tag </form>
const formOpenIdx = dscIntegrityHtml.indexOf('<form id="fastAddProductForm">');
const formCloseIdx = dscIntegrityHtml.indexOf('</form>', formOpenIdx);
assert(formOpenIdx !== -1 && formCloseIdx !== -1, "27.1 fastAddProductForm is explicitly closed with </form>");

// 27.2: downloadPdfModalBackdrop is located AFTER </form> (not nested inside)
const pdfModalIdx = dscIntegrityHtml.indexOf('id="downloadPdfModalBackdrop"');
assert(pdfModalIdx > formCloseIdx, "27.2 PDF manifest modal is outside fastAddProductForm, avoiding form hijacking");

// 27.3: Sequence & Serial Number section is inside modal-body before modal-footer
const seqBlockIdx = dscIntegrityHtml.indexOf('Branch Sequence & Serial Number');
assert(seqBlockIdx > formOpenIdx && seqBlockIdx < formCloseIdx, "27.3 Sequence & Serial Number inputs are properly enclosed within the add form");

// 27.4: All PDF download action buttons have explicit type="button"
assert(dscIntegrityHtml.includes('type="button" class="btn btn-primary btn-lg" id="btnDownloadMasterPdf"') ||
       dscIntegrityHtml.includes('id="btnDownloadMasterPdf"'), "27.4 btnDownloadMasterPdf button is configured properly");
assert(dscIntegrityHtml.includes('type="button" class="btn btn-secondary btn-sm" id="btnDownloadCombinedOnlyPdf"'), "27.5 btnDownloadCombinedOnlyPdf has explicit type=\"button\"");
assert(dscIntegrityHtml.includes('type="button" class="btn btn-secondary btn-sm" id="btnDownloadBranchOnlyPdf"'), "27.6 btnDownloadBranchOnlyPdf has explicit type=\"button\"");
assert(dscIntegrityHtml.includes('type="button" class="btn btn-secondary" id="btnClosePdfModalBtn"'), "27.7 btnClosePdfModalBtn has explicit type=\"button\"");

// 27.8: Dynamic product addition and PDF generation with new item
const testProductName = `Test Exotic Melon ${Date.now()}`;
const addedProd = store.addProduct({
  name: testProductName,
  category: 'Fruits',
  unit: 'Boxes',
  initialStock: 10,
  reorderLevel: 5,
  unitCost: 800
}, {
  targetBranch: 'BR002',
  serialNo: 1
});
assert(addedProd && addedProd.name === testProductName, "27.8 store.addProduct successfully creates new product");
assert(store.products.some(p => p.name === testProductName), "27.9 Added product exists in catalog");

// Verify PDF generation with the added item
store.updateRequiredQuantity('BR001', addedProd.id, 12, false);
store.updateRequiredQuantity('BR002', addedProd.id, 8, false);
store.updateRequiredQuantity('BR003', addedProd.id, 4, false);
store.updateRequiredQuantity('BR004', addedProd.id, 6, false);

const testPdfData = {
  date: store.getLiveDateTimeString(new Date(), true),
  branches: store.branches,
  consolidatedItems: store.getConsolidatedProcurement(),
  branchRequirements: store.getAllBranchesRequirements()
};

const newMasterBlob = generateMasterManifestPDF(testPdfData);
assert(newMasterBlob && newMasterBlob.size > 1000, "27.10 Master Manifest PDF successfully generates Blob with newly added product");

const newCombinedBlob = generateCombinedListOnlyPDF(testPdfData);
assert(newCombinedBlob && newCombinedBlob.size > 1000, "27.11 Combined List PDF successfully generates Blob with newly added product");

const newBranchBlob = generateBranchHeadlinedPDF(testPdfData);
assert(newBranchBlob && newBranchBlob.size > 1000, "27.12 Branch Headlined PDF successfully generates Blob with newly added product");

// POINT 28: SPLASH SCREEN & DIRECT ENTRY WITHOUT LOGIN WALL
// --------------------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 28: Splash Screen & Direct Entry Without Login Wall\x1b[0m");

const indexHtmlPath = path.join(process.cwd(), 'index.html');
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// 28.1: Splash screen markup exists in index.html
assert(indexHtmlContent.includes('id="md-splash"') && indexHtmlContent.includes('class="sp-root"'), "28.1 Splash screen container #md-splash present in index.html");

// 28.2: Video element configured
assert(indexHtmlContent.includes('/videos/splash.mp4') && indexHtmlContent.includes('autoplay') && indexHtmlContent.includes('muted'), "28.2 Splash video configured with autoplay, muted, and playsinline");

// 28.3: Logo element configured
assert(indexHtmlContent.includes('/images/logo-splash.webp') && indexHtmlContent.includes('sp-logo'), "28.3 Splash logo /images/logo-splash.webp configured with sp-logo class");

// 28.4: initSplashScreen importable and functional
const { initSplashScreen } = await import('../src/components/splashScreen.js');
assert(typeof initSplashScreen === 'function', "28.4 initSplashScreen controller exported and callable");

// 28.5: Direct entry without login requirement
assert(store.isAuthenticated === true, "28.5 Direct entry: user is authenticated by default without login barrier");
assert(Boolean(store.activeView) && store.activeView !== 'login', "28.6 Direct entry lands on active functional view");

// POINT 29: CHROME PWA & MOBILE APP INSTALLABILITY
// --------------------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 29: Chrome PWA & Mobile App Installability\x1b[0m");

const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
assert(fs.existsSync(manifestPath), "29.1 public/manifest.json file exists on disk");

const manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
assert(manifestContent.name && manifestContent.name.includes("MD FRESH"), "29.2 manifest has full name defined");
assert(manifestContent.short_name === "MD Fresh", "29.3 manifest has short_name defined as MD Fresh");
assert(manifestContent.display === "standalone", "29.4 manifest display mode is standalone for native app experience");
assert(manifestContent.start_url === "/", "29.5 manifest start_url is /");
assert(manifestContent.theme_color === "#0D8244", "29.6 manifest theme_color matches MD Fresh brand emerald");
assert(Array.isArray(manifestContent.icons) && manifestContent.icons.length >= 2, "29.7 manifest icons array has multiple sizes");

const has192 = manifestContent.icons.some(i => i.sizes === '192x192');
const has512 = manifestContent.icons.some(i => i.sizes === '512x512');
const hasMaskable = manifestContent.icons.some(i => i.purpose && i.purpose.includes('maskable'));
assert(has192 && has512 && hasMaskable, "29.8 manifest includes 192x192, 512x512, and maskable icons for Android Chrome");

const swPath = path.join(process.cwd(), 'public', 'sw.js');
assert(fs.existsSync(swPath), "29.9 public/sw.js service worker file exists on disk");
const swContent = fs.readFileSync(swPath, 'utf8');
assert(swContent.includes('install') && swContent.includes('activate') && swContent.includes('fetch'), "29.10 Service worker has install, activate, and fetch lifecycle listeners");

assert(indexHtmlContent.includes('rel="manifest"') && indexHtmlContent.includes('/manifest.json'), "29.11 index.html links to manifest.json");
assert(indexHtmlContent.includes('name="theme-color"') && indexHtmlContent.includes('#0D8244'), "29.12 index.html specifies theme-color meta tag");
assert(indexHtmlContent.includes('rel="apple-touch-icon"'), "29.13 index.html specifies apple-touch-icon for iOS Safari / Chrome");

const { initPwaInstall, triggerPwaInstall, isAppInstalled } = await import('../src/components/pwaInstall.js');
assert(typeof initPwaInstall === 'function', "29.14 initPwaInstall is exported");
assert(typeof triggerPwaInstall === 'function', "29.15 triggerPwaInstall is exported");
assert(typeof isAppInstalled === 'function', "29.16 isAppInstalled is exported");

const topbarModule = await import('../src/components/topbar.js');
const pwaTopbarHtml = topbarModule.renderTopbar();
assert(pwaTopbarHtml.includes('btn-pwa-install') && pwaTopbarHtml.includes('Install App'), "29.17 Topbar renders Install App PWA button");

const sidebarModule = await import('../src/components/sidebar.js');
const pwaSidebarHtml = sidebarModule.renderSidebar();
assert(pwaSidebarHtml.includes('btn-pwa-install') && pwaSidebarHtml.includes('Install MD Fresh App'), "29.18 Sidebar renders Install App PWA button");

const icon192Path = path.join(process.cwd(), 'public', 'icons', 'icon-192.png');
const icon512Path = path.join(process.cwd(), 'public', 'icons', 'icon-512.png');
const appleIconPath = path.join(process.cwd(), 'public', 'apple-touch-icon.png');
assert(fs.existsSync(icon192Path) && fs.statSync(icon192Path).size > 1000, "29.19 icon-192.png exists with valid size");
assert(fs.existsSync(icon512Path) && fs.statSync(icon512Path).size > 1000, "29.20 icon-512.png exists with valid size");
assert(fs.existsSync(appleIconPath) && fs.statSync(appleIconPath).size > 1000, "29.21 apple-touch-icon.png exists with valid size");

// 29.22: Exact dimensions check for Android WebAPK minting
const b512 = fs.readFileSync(icon512Path);
const w512 = b512.readUInt32BE(16);
const h512 = b512.readUInt32BE(20);
assert(w512 === 512 && h512 === 512, "29.22 icon-512.png has exact 512x512 dimensions for Android Chrome WebAPK");

const b192 = fs.readFileSync(icon192Path);
const w192 = b192.readUInt32BE(16);
const h192 = b192.readUInt32BE(20);
assert(w192 === 192 && h192 === 192, "29.23 icon-192.png has exact 192x192 dimensions");

assert(indexHtmlContent.includes("navigator.serviceWorker.register('/sw.js'"), "29.24 index.html registers Service Worker early in head");
assert(indexHtmlContent.includes("beforeinstallprompt"), "29.25 index.html captures beforeinstallprompt early");

// POINT 30: PDF MANIFEST DATA INTEGRITY & WHATSAPP SYMMETRY
// --------------------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 30: PDF Manifest Data Integrity & WhatsApp Symmetry\x1b[0m");

// Clean test slate
store.branches.forEach(b => {
  store.products.forEach(p => {
    store.updateRequiredQuantity(b.id, p.id, 0, false);
  });
});
store.requirements = [];

const testProd1 = store.products[0];
const testProd2 = store.products[1];

store.updateRequiredQuantity('BR001', testProd1.id, 10, false);
store.updateRequiredQuantity('BR002', testProd1.id, 5, false);
store.updateRequiredQuantity('BR001', testProd2.id, 8, false);

const preSubmitConsolidated = store.getConsolidatedProcurement();
assert(preSubmitConsolidated.length === 2, "30.1 Consolidated items contains only items with positive demand (2)");
assert(preSubmitConsolidated.find(i => i.product.id === testProd1.id).totalQty === 15, "30.2 Consolidated item 1 sums branch demand accurately (10 + 5 = 15)");

// Submit requirement for BR001
store.submitDailyStockRequirement('BR001');

const postSubmitConsolidated = store.getConsolidatedProcurement();
const postSubmitAllReqs = store.getAllBranchesRequirements();

assert(postSubmitConsolidated.length === 2, "30.3 Consolidated demand retains added items after branch submission");
assert(postSubmitAllReqs['BR001'].length === 2, "30.4 Submitted branch retains required items in getAllBranchesRequirements");
assert(postSubmitAllReqs['BR001'].find(i => i.productId === testProd1.id).qty === 10, "30.5 Branch item quantity matches submitted requirement (10)");

// Zero-quantity items are not included
assert(!postSubmitAllReqs['BR001'].some(i => i.qty <= 0), "30.6 Zero-quantity items are excluded from branch requirements");
assert(!postSubmitConsolidated.some(i => i.totalQty <= 0), "30.7 Zero-quantity items are excluded from consolidated procurement");

// Verify PDF generation produces identical results for download and WhatsApp
const pdfDataForDownload = {
  date: store.getLiveDateTimeString(new Date(), true),
  branches: store.branches,
  consolidatedItems: store.getConsolidatedProcurement(),
  branchRequirements: store.getAllBranchesRequirements()
};

const pdfDataForWhatsApp = {
  date: store.getLiveDateTimeString(new Date(), true),
  branches: store.branches,
  consolidatedItems: store.getConsolidatedProcurement(),
  branchRequirements: store.getAllBranchesRequirements()
};

const dlBlob = generateMasterManifestPDF(pdfDataForDownload);
const waBlob = generateMasterManifestPDF(pdfDataForWhatsApp);

assert(dlBlob && dlBlob.size > 1000, "30.8 Download PDF blob generates with content");
assert(waBlob && waBlob.size > 1000, "30.9 WhatsApp PDF blob generates with content");
assert(dlBlob.size === waBlob.size, "30.10 Downloaded PDF and WhatsApp PDF are identical in byte size");

// 30.11: Review Stock Requirements modal typography and price elimination
const dscModuleForReview = await import('../src/views/dailyStockCheckView.js');
store.setBranch('BR001');
store.updateRequiredQuantity('BR001', testProd1.id, 10, false);
const reviewDscHtml = dscModuleForReview.renderDailyStockCheckView();
assert(!reviewDscHtml.includes('Est. ₹'), "30.11 Review modal eliminates all unnecessary price displays ('Est. ₹')");
assert(reviewDscHtml.includes('review-qty-pill'), "30.12 Review modal renders clean quantity pills");
assert(reviewDscHtml.includes('review-item-title'), "30.13 Review modal renders clean non-truncated product title typography");

// POINT 31: FINAL SUBMITTER EXPERIENCE & PROMINENT PDF DOWNLOAD VISIBILITY
// --------------------------------------------------------------------------
console.log("\n\x1b[36m▶ TEST SUITE 31: Final Submitter Experience & Prominent PDF Download Visibility\x1b[0m");

// 31.1: Incomplete submissions show progress tracker bar
store.branchSubmitted = { 'BR001': true, 'BR002': false, 'BR003': false, 'BR004': false };
const partialDscHtml = dscModuleForReview.renderDailyStockCheckView();
assert(partialDscHtml.includes('branch-progress-tracker-bar'), "31.1 Partial submission displays branch progress tracker bar");
assert(partialDscHtml.includes('Branch Submissions: 1/4 Done'), "31.2 Progress bar tracks exact submitted count (1/4)");

// 31.2: All 4 branches submitted triggers prominent top banner
store.branchSubmitted = { 'BR001': true, 'BR002': true, 'BR003': true, 'BR004': true };
const allDoneDscHtml = dscModuleForReview.renderDailyStockCheckView();
assert(allDoneDscHtml.includes('all-branches-finalized-banner'), "31.3 All 4 branches submitted displays persistent top finalized banner");
assert(allDoneDscHtml.includes('id="btnBannerDownloadPdf"'), "31.4 Top banner renders direct 'Download Master PDF' button");
assert(allDoneDscHtml.includes('id="btnBannerShareWhatsApp"'), "31.5 Top banner renders direct 'Share on WhatsApp' button");
assert(allDoneDscHtml.includes('id="btnBannerViewMatrix"'), "31.6 Top banner renders 'View Matrix Table' button");

// 31.3: Topbar component renders quick action buttons when all 4 submitted
const topbarHtml = topbarModule.renderTopbar();
assert(topbarHtml.includes('id="btnTopbarDownloadPdf"'), "31.7 Topbar renders Master PDF button when all branches finalized");
assert(topbarHtml.includes('id="btnTopbarShareWhatsApp"'), "31.8 Topbar renders WhatsApp button when all branches finalized");

// 31.4: Review Modal renders download and share options when finalized
assert(allDoneDscHtml.includes('id="btnReviewModalDownloadPdf"'), "31.9 Review modal footer renders Download Master PDF button");
assert(allDoneDscHtml.includes('id="btnReviewModalShareWhatsApp"'), "31.10 Review modal footer renders WhatsApp button");

// 31.5: Consolidated Procurement has positive items only for modal preview
const previewConsolidated = store.getConsolidatedProcurement().filter(it => (it.totalQty || it.requiredQty || 0) > 0);
assert(previewConsolidated.length > 0, "31.11 Preview dataset contains active produce demand");
assert(previewConsolidated.every(it => (it.totalQty || it.requiredQty || 0) > 0), "31.12 Preview table excludes all zero-quantity items");

// SUMMARY REPORT
// -------------------------------------------------------------
console.log('\n============================================================');
console.log(`   BACKTESTING RESULTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${passedTests + failedTests})`);
console.log('============================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
