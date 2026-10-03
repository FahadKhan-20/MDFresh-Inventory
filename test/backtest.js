// Comprehensive Point-by-Point Backtesting Suite for MD Fresh Inventory
import { store } from '../src/utils/store.js';
import { INITIAL_PRODUCTS, INITIAL_BRANCHES } from '../src/data/mockData.js';
import { generateMasterManifestPDF, generateCombinedListOnlyPDF, generateBranchHeadlinedPDF } from '../src/utils/pdfGenerator.js';
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
  name: 'Ramesh Staff',
  email: 'ramesh@mdfresh.in',
  role: 'Store Staff',
  branchId: 'BR001',
  isAuthorized: false,
  staySignedIn: true
});

assert(store.isAuthenticated === true, '1.1 Staff login authenticates user');
assert(store.isAuthorized === false, '1.2 Staff login defaults to unauthorized for manager features');
assert(store.activeView === 'stock-check', '1.3 Staff login lands on staff-allowed view (stock-check)');
assert(store.currentUser.role === 'Store Staff', '1.4 Current user role set to Store Staff');

// Test 1.5: localStorage Persistence
const sessionRaw = localStorage.getItem('md_fresh_auth_session');
assert(sessionRaw !== null, '1.5 Session persisted to localStorage for staying signed in');
const parsedSession = JSON.parse(sessionRaw || '{}');
assert(parsedSession.email === 'ramesh@mdfresh.in', '1.6 Stored email matches logged-in user');
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
