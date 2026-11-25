// Critical Production Verification Test Suite for MD Fresh Inventory
import assert from 'assert';
import { store } from '../src/utils/store.js';
import {
  generateMasterManifestPDF,
  generateCombinedListOnlyPDF,
  generateBranchHeadlinedPDF
} from '../src/utils/pdfGenerator.js';
import { buildWhatsAppOrderMessage } from '../src/utils/whatsappShare.js';

console.log('\n============================================================');
console.log('   MD FRESH INVENTORY: CRITICAL PRODUCTION VERIFICATION     ');
console.log('============================================================\n');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✔ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✖ FAIL: ${name} ->`, err.message);
    failed++;
  }
}

// 1. Clean Store Initialization

test('1.1 Fresh store starts with 0 requirements across all branches', () => {
  const consolidated = store.getConsolidatedProcurement();
  assert.strictEqual(consolidated.length, 0, `Expected 0 consolidated items, got ${consolidated.length}`);
});

test('1.2 Fresh store has empty drafts for all 4 branches', () => {
  const branches = ['BR001', 'BR002', 'BR003', 'BR004'];
  branches.forEach(bId => {
    const draft = store.getBranchStockCheck(bId);
    const nonZeroKeys = Object.keys(draft).filter(k => draft[k] > 0);
    assert.strictEqual(nonZeroKeys.length, 0, `Branch ${bId} has non-zero items: ${nonZeroKeys.join(', ')}`);
  });
});

test('1.3 All 4 branches start unsubmitted (false) ready for morning audit', () => {
  assert.strictEqual(store.areAllBranchesSubmitted(), false, 'areAllBranchesSubmitted should be false initially');
  assert.strictEqual(store.getPendingBranches().length, 4, 'All 4 branches should be pending initially');
});

test('1.4 Empty state PDF generates cleanly with zero-demand notice', () => {
  const pdfData = {
    date: store.getLiveDateTimeString(new Date(), true),
    branches: store.branches,
    consolidatedItems: store.getConsolidatedProcurement(),
    branchRequirements: store.getAllBranchesRequirements()
  };
  const masterBlob = generateMasterManifestPDF(pdfData);
  assert(masterBlob instanceof Blob, 'Master PDF should be a Blob');
  assert(masterBlob.size > 500, 'Master PDF blob should be valid and non-empty');
});

// 2. Selective Input: Only Required Produce Items Added
test('2.1 Adding specific produce quantities to Annasandrapalya (BR001)', () => {
  // PRD001 = Onion, PRD002 = Potato, PRD003 = Tomato
  store.updateRequiredQuantity('BR001', 'PRD001', 10, false); // 10 Bags Onion
  store.updateRequiredQuantity('BR001', 'PRD002', 5, false);  // 5 Bags Potato
  store.updateRequiredQuantity('BR001', 'PRD003', 20, false); // 20 Crates Tomato

  const aspReqs = store.getRequiredItemsForBranch('BR001');
  assert.strictEqual(aspReqs.length, 3, `Expected exactly 3 items in BR001, got ${aspReqs.length}`);
  assert.strictEqual(aspReqs.find(i => i.productId === 'PRD001').requiredQty, 10);
  assert.strictEqual(aspReqs.find(i => i.productId === 'PRD002').requiredQty, 5);
  assert.strictEqual(aspReqs.find(i => i.productId === 'PRD003').requiredQty, 20);
});

test('2.2 Unselected produce items remain strictly 0 and excluded from requirements', () => {
  const aspReqs = store.getRequiredItemsForBranch('BR001');
  const allOtherProds = store.products.filter(p => !['PRD001', 'PRD002', 'PRD003'].includes(p.id));
  allOtherProds.forEach(p => {
    assert.strictEqual(store.getBranchRequiredQty('BR001', p.id), 0, `Product ${p.name} (${p.id}) should have 0 qty`);
  });
});

test('2.3 Consolidated procurement reflects ONLY items with demand > 0', () => {
  const consolidated = store.getConsolidatedProcurement();
  assert.strictEqual(consolidated.length, 3, `Expected exactly 3 items in consolidated, got ${consolidated.length}`);
  const ids = consolidated.map(c => c.product.id).sort();
  assert.deepStrictEqual(ids, ['PRD001', 'PRD002', 'PRD003']);
});

test('2.4 Submitting Branch 1 locks and verifies submission', () => {
  const submittedReq = store.submitDailyStockRequirement('BR001');
  assert(submittedReq !== null, 'Submission should succeed');
  assert.strictEqual(store.isBranchSubmitted('BR001'), true, 'BR001 should be marked submitted');
  assert.strictEqual(store.areAllBranchesSubmitted(), false, 'areAllBranchesSubmitted must still be false with 3 pending');
});

test('2.5 Adding items to other branches and submitting all 4', () => {
  // Branch 2: Kodihalli (Onion = 5, Apple = 8)
  store.updateRequiredQuantity('BR002', 'PRD001', 5, false);
  store.updateRequiredQuantity('BR002', 'PRD021', 8, false);
  store.submitDailyStockRequirement('BR002');

  // Branch 3: LBS Nagar (Tomato = 15)
  store.updateRequiredQuantity('BR003', 'PRD003', 15, false);
  store.submitDailyStockRequirement('BR003');

  // Branch 4: Basavanagar (Watermelon = 12)
  store.updateRequiredQuantity('BR004', 'PRD031', 12, false);
  store.submitDailyStockRequirement('BR004');

  assert.strictEqual(store.areAllBranchesSubmitted(), true, 'All 4 branches must now be submitted');
  assert.strictEqual(store.getPendingBranches().length, 0, 'No branches should remain pending');
});

// 3. Strict PDF Verification
test('3.1 Master PDF dataset contains ONLY the 5 produce items with demand', () => {
  const consolidated = store.getConsolidatedProcurement();
  assert.strictEqual(consolidated.length, 5, `Expected exactly 5 consolidated items, got ${consolidated.length}`);
  
  // Verify Onion (PRD001): BR001 (10) + BR002 (5) = 15
  const onion = consolidated.find(c => c.product.id === 'PRD001');
  assert(onion !== undefined, 'Onion must be present');
  assert.strictEqual(onion.totalQty, 15, `Onion totalQty should be 15, got ${onion.totalQty}`);

  // Verify Tomato (PRD003): BR001 (20) + BR003 (15) = 35
  const tomato = consolidated.find(c => c.product.id === 'PRD003');
  assert(tomato !== undefined, 'Tomato must be present');
  assert.strictEqual(tomato.totalQty, 35, `Tomato totalQty should be 35, got ${tomato.totalQty}`);

  // No item with totalQty <= 0 exists
  assert(!consolidated.some(c => c.totalQty <= 0), 'No zero or negative quantity items allowed');
});

test('3.2 Branch requirements breakdown contains ONLY positive quantity items', () => {
  const allReqs = store.getAllBranchesRequirements();
  assert.strictEqual(allReqs['BR001'].length, 3, 'BR001 should have 3 items');
  assert.strictEqual(allReqs['BR002'].length, 2, 'BR002 should have 2 items');
  assert.strictEqual(allReqs['BR003'].length, 1, 'BR003 should have 1 item');
  assert.strictEqual(allReqs['BR004'].length, 1, 'BR004 should have 1 item');

  Object.values(allReqs).forEach(items => {
    assert(!items.some(it => it.qty <= 0), 'No branch item can have qty <= 0');
  });
});

test('3.3 Master Manifest, Combined Buyer Sheet, and Branch Headlined PDFs generate successfully', () => {
  const pdfData = {
    date: store.getLiveDateTimeString(new Date(), true),
    branches: store.branches,
    consolidatedItems: store.getConsolidatedProcurement(),
    branchRequirements: store.getAllBranchesRequirements()
  };

  const masterPdf = generateMasterManifestPDF(pdfData);
  const combinedPdf = generateCombinedListOnlyPDF(pdfData);
  const branchPdf = generateBranchHeadlinedPDF(pdfData);

  assert(masterPdf.size > 2000, 'Master PDF must have substantial content');
  assert(combinedPdf.size > 1500, 'Combined PDF must have substantial content');
  assert(branchPdf.size > 1500, 'Branch Headlined PDF must have substantial content');
});

test('3.4 Zeroing out an item immediately removes it from consolidated demand and PDF', () => {
  // Staff changes Tomato in BR003 back to 0
  store.updateRequiredQuantity('BR003', 'PRD003', 0, false);

  const consolidated = store.getConsolidatedProcurement();
  // Tomato now only from BR001 (20)
  const tomato = consolidated.find(c => c.product.id === 'PRD003');
  assert.strictEqual(tomato.totalQty, 20, `Tomato should now be 20, got ${tomato.totalQty}`);

  // Zero out Potato completely in BR001
  store.updateRequiredQuantity('BR001', 'PRD002', 0, false);
  const updatedConsolidated = store.getConsolidatedProcurement();
  assert.strictEqual(updatedConsolidated.some(c => c.product.id === 'PRD002'), false, 'Potato must be completely absent from consolidated demand');
  assert.strictEqual(updatedConsolidated.length, 4, 'Total consolidated items should now be 4');
});

test('3.5 Finalize & Reset for Next Day resets all quantities to 0 across all 4 branches', () => {
  const finalized = store.finalizeOrderAndResetForNextDay({ source: 'LIVE_TEST' });
  assert(finalized !== null, 'Order finalization must succeed');
  assert.strictEqual(store.isReadyForNextDay, true, 'isReadyForNextDay must be true');

  const consolidatedAfter = store.getConsolidatedProcurement();
  assert.strictEqual(consolidatedAfter.length, 0, 'Consolidated demand must be 0 after next day reset');

  const branches = ['BR001', 'BR002', 'BR003', 'BR004'];
  branches.forEach(bId => {
    assert.strictEqual(store.getRequiredItemsForBranch(bId).length, 0, `Branch ${bId} must have 0 required items after reset`);
    assert.strictEqual(store.isBranchSubmitted(bId), false, `Branch ${bId} submission must be reset to false for tomorrow`);
  });
});

console.log('\n============================================================');
console.log(`   CRITICAL TEST SUMMARY: ${passed} PASSED, ${failed} FAILED (TOTAL: ${passed + failed})`);
console.log('============================================================\n');

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
