// Central Store for MD Fresh Inventory Management
// Updated with Authorized Access Control & 4 Specific Branches

import {
  INITIAL_BRANCHES,
  INITIAL_PRODUCTS,
  INITIAL_REQUIREMENTS,
  INITIAL_PURCHASE_ORDERS,
  INITIAL_NOTIFICATIONS,
  INITIAL_STOCK_MOVEMENTS,
  INITIAL_SUPPLIERS,
  ANNASANDRAPALYA_SEQUENCE,
  KODIHALLI_SEQUENCE,
  LBS_NAGAR_SEQUENCE,
  BASAVANAGAR_SEQUENCE
} from '../data/mockData.js';

class InventoryStore {
  constructor() {
    this.branches = [...INITIAL_BRANCHES];
    this.suppliers = [...INITIAL_SUPPLIERS];
    this.products = [...INITIAL_PRODUCTS];
    this.requirements = [...INITIAL_REQUIREMENTS];
    this.purchaseOrders = [...INITIAL_PURCHASE_ORDERS];
    this.notifications = [...INITIAL_NOTIFICATIONS];
    this.stockMovements = [...INITIAL_STOCK_MOVEMENTS];
    // Branch-specific produce sequences (mutable for custom serial number insertion)
    this.branchSequences = {
      BR001: [...ANNASANDRAPALYA_SEQUENCE],
      BR002: [...KODIHALLI_SEQUENCE],
      BR003: [...LBS_NAGAR_SEQUENCE],
      BR004: [...BASAVANAGAR_SEQUENCE]
    };

    // Purge any deleted product IDs saved in localStorage
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem('md_fresh_deleted_product_ids');
        const deletedIds = raw ? JSON.parse(raw) : [];
        if (Array.isArray(deletedIds) && deletedIds.length > 0) {
          this.products = this.products.filter(p => !deletedIds.includes(p.id));
          Object.keys(this.branchSequences).forEach(bId => {
            if (Array.isArray(this.branchSequences[bId])) {
              this.branchSequences[bId] = this.branchSequences[bId].filter(id => !deletedIds.includes(id));
            }
          });
        }
      }
    } catch (e) {
      // ignore
    }

    this.auditLogs = [
      {
        id: 'LOG-001',
        timestamp: '03 Oct 2026, 06:45 pm',
        user: 'MD FRESH STAFF',
        role: 'Store Staff',
        action: 'REQUIREMENT_DRAFT_SAVE',
        details: 'Updated required stock quantities for Annasandra Palya (BR001)',
        branch: 'Annasandra Palya'
      },
      {
        id: 'LOG-002',
        timestamp: '03 Oct 2026, 07:15 pm',
        user: 'MD FRESH STAFF',
        role: 'Store Manager',
        action: 'MANDI_PO_GENERATE',
        details: 'Generated consolidated APMC Mandi purchase list for 4 branches',
        branch: 'Central Operations'
      },
      {
        id: 'LOG-003',
        timestamp: '03 Oct 2026, 07:22 pm',
        user: 'MD Fresh Central',
        role: 'Owner & Manager',
        action: 'PDF_MANIFEST_EXPORT',
        details: 'Generated & downloaded Unified Multi-Branch APMC Purchase Manifest PDF',
        branch: 'All Branches'
      }
    ];

    // Branch state
    this.currentBranchId = 'BR001'; // ANNASANDRAPALYA
    this.selectedDashboardBranch = 'all';
    this.currentDate = '02 October 2026';

    // Authorization & Access Control
    this.authPin = '1902'; // Secret PIN for Manager & Owner unlocking (no hints displayed)
    this.isAuthorized = false;
    this.authModalOpen = false;
    this.pendingView = null;
    
    // Device Authentication & Persistence (stays logged in on device)
    const savedSession = typeof localStorage !== 'undefined' ? localStorage.getItem('md_fresh_auth_session') : null;
    if (savedSession) {
      try {
        const sess = JSON.parse(savedSession);
        this.isAuthenticated = true;
        this.currentBranchId = sess.branchId || 'BR001';
        this.isAuthorized = sess.isAuthorized ?? (sess.role && (sess.role.includes('Manager') || sess.role.includes('Owner')));
        this.currentUser = {
          name: sess.name || 'Store User',
          email: sess.email || 'user@mdfresh.in',
          role: sess.role || (this.isAuthorized ? 'Manager & Owner (Authorized)' : 'Store Staff'),
          branch: this.branches.find(b => b.id === this.currentBranchId)?.name || 'ANNASANDRAPALYA',
          avatar: (sess.name || 'MD').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
        };
        this.activeView = this.isAuthorized ? 'requirements' : 'stock-check';
      } catch (e) {
        this.isAuthenticated = false;
      }
    } else {
      this.isAuthenticated = false;
      this.currentUser = {
        name: 'MD FRESH STAFF',
        email: 'staff@mdfresh.in',
        role: 'Store Staff',
        branch: 'ANNASANDRAPALYA',
        avatar: 'MS'
      };
    }

    this.sidebarCollapsed = false;
    this.mobileNavOpen = false;
    this.notificationDrawerOpen = false;

    // Daily Stock Check Draft State: branchId -> { productId: requiredQty }
    this.stockCheckDrafts = {
      BR001: { PRD001: 3, PRD002: 6, PRD003: 2, PRD004: 5, PRD005: 1, PRD006: 4, PRD007: 7, PRD008: 3, PRD009: 6, PRD010: 2, PRD013: 5, PRD017: 1, PRD021: 4, PRD022: 7, PRD023: 3, PRD025: 6, PRD027: 2, PRD028: 5, PRD031: 1, PRD043: 4, PRD045: 7, PRD070: 3, PRD071: 6, PRD076: 2, PRD077: 5, PRD086: 1, PRD088: 4, PRD114: 7, PRD183: 3 },
      BR002: { PRD001: 5, PRD002: 7, PRD003: 1, PRD004: 3, PRD005: 5, PRD006: 7, PRD007: 1, PRD008: 3, PRD009: 5, PRD010: 7, PRD013: 1, PRD017: 3, PRD021: 5, PRD022: 7, PRD023: 1, PRD025: 3, PRD027: 5, PRD028: 7, PRD031: 1, PRD043: 3, PRD045: 5, PRD070: 7, PRD071: 1, PRD076: 3, PRD077: 5, PRD086: 7, PRD088: 1, PRD114: 3, PRD183: 5 },
      BR003: { PRD001: 1, PRD002: 5, PRD003: 3, PRD004: 1, PRD005: 5, PRD006: 3, PRD007: 1, PRD008: 5, PRD009: 3, PRD010: 1, PRD013: 5, PRD017: 3, PRD021: 1, PRD022: 5, PRD023: 3, PRD025: 1, PRD027: 5, PRD028: 3, PRD031: 1, PRD043: 5, PRD045: 3, PRD070: 1, PRD071: 5, PRD076: 3, PRD077: 1, PRD086: 5, PRD088: 3, PRD114: 1, PRD183: 5 },
      BR004: { PRD001: 2, PRD002: 3, PRD003: 4, PRD004: 5, PRD005: 6, PRD006: 7, PRD007: 1, PRD008: 2, PRD009: 3, PRD010: 4, PRD013: 7, PRD017: 4, PRD021: 1, PRD022: 5, PRD023: 2, PRD025: 6, PRD027: 3, PRD028: 7, PRD031: 4, PRD043: 1, PRD045: 5, PRD070: 2, PRD071: 6, PRD076: 3, PRD077: 7, PRD086: 4, PRD088: 1, PRD114: 5, PRD183: 2 }
    };

    // Finalized orders archive & next-day state
    this.finalizedOrders = [];
    this.isReadyForNextDay = false;
    this.lastFinalizedTimestamp = null;
    this.latestDispatchPOId = null;

    // Morning Stock Receiving Drafts per branch & History
    this.receivingDrafts = {
      BR001: {},
      BR002: {},
      BR003: {},
      BR004: {}
    };
    this.receivingHistory = [];

    // Live Real-Time Date & Time Tracking
    this.matrixLastRecorded = new Date();
    this.branchLastRecorded = {
      BR001: new Date(),
      BR002: new Date(),
      BR003: new Date(),
      BR004: new Date()
    };
    this.currentDate = this.getLiveDateString();

    this.listeners = [];
  }

  // Live Date & Time formatting utilities
  getLiveDateString(dateObj = new Date()) {
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  getLiveTimeString(dateObj = new Date(), withSeconds = false) {
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: withSeconds ? '2-digit' : undefined,
      hour12: true
    });
  }

  getLiveDateTimeString(dateObj = new Date(), withSeconds = false) {
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return `${this.getLiveDateString(d)}, ${this.getLiveTimeString(d, withSeconds)}`;
  }

  getMatrixRecordedTimestampString() {
    return this.getLiveDateTimeString(this.matrixLastRecorded, true);
  }

  getBranchLastRecordedString(branchId) {
    const dt = this.branchLastRecorded[branchId] || this.matrixLastRecorded;
    return this.getLiveTimeString(dt, false);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  login({ name, email, role, branchId = 'BR001', isAuthorized = false, staySignedIn = true }) {
    this.isAuthenticated = true;
    this.currentBranchId = branchId;
    this.isAuthorized = !!isAuthorized;
    const branchName = this.branches.find(b => b.id === branchId)?.name || 'ANNASANDRAPALYA';
    const avatar = (name || 'MD').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    this.currentUser = {
      name: name || (this.isAuthorized ? 'Store Manager' : 'MD FRESH STAFF'),
      email: email || (this.isAuthorized ? 'manager@mdfresh.in' : 'staff@mdfresh.in'),
      role: role || (this.isAuthorized ? 'Manager & Owner (Authorized)' : 'Store Staff'),
      branch: branchName,
      avatar
    };

    if (staySignedIn && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('md_fresh_auth_session', JSON.stringify({
          name: this.currentUser.name,
          email: this.currentUser.email,
          role: this.currentUser.role,
          branchId: this.currentBranchId,
          isAuthorized: this.isAuthorized,
          loginTime: new Date().toISOString()
        }));
      } catch (e) {
        console.error('Failed to persist session to localStorage', e);
      }
    }

    this.activeView = this.isAuthorized ? 'requirements' : 'stock-check';
    this.notify();
  }

  logout() {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.removeItem('md_fresh_auth_session');
      } catch (e) {
        console.error('Failed to remove session from localStorage', e);
      }
    }
    this.isAuthenticated = false;
    this.isAuthorized = false;
    this.currentUser = {
      name: 'MD FRESH STAFF',
      email: 'staff@mdfresh.in',
      role: 'Store Staff',
      branch: 'ANNASANDRAPALYA',
      avatar: 'MS'
    };
    this.activeView = 'stock-check';
    this.notify();
  }

  // Authorization controls
  unlockAuthorization(pin) {
    if (pin === this.authPin) {
      this.isAuthorized = true;
      this.currentUser.role = 'Manager & Owner (Authorized)';
      this.authModalOpen = false;
      if (this.pendingView) {
        this.activeView = this.pendingView;
        this.pendingView = null;
      }
      this.notify();
      return true;
    }
    return false;
  }

  lockAuthorization() {
    this.isAuthorized = false;
    this.currentUser.role = 'Store Staff';
    this.pendingView = null;
    const isStaffAllowed = this.activeView === 'stock-check' || this.activeView === 'requirements' || this.activeView === 'receiving';
    if (!isStaffAllowed) {
      this.activeView = 'stock-check';
    }
    this.notify();
  }

  openAuthModal(targetView = null) {
    if (targetView) {
      this.pendingView = targetView;
    }
    this.authModalOpen = true;
    this.notify();
  }

  closeAuthModal() {
    this.authModalOpen = false;
    this.pendingView = null;
    this.notify();
  }

  setView(viewName) {
    const isStaffAllowed = viewName === 'stock-check' || viewName === 'requirements' || viewName === 'receiving';
    if (!isStaffAllowed && !this.isAuthorized) {
      this.openAuthModal(viewName);
      return;
    }
    this.activeView = viewName;
    this.mobileNavOpen = false;
    this.notify();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setBranch(branchId) {
    this.currentBranchId = branchId;
    this.notify();
  }

  setDashboardBranch(branchId) {
    this.selectedDashboardBranch = branchId;
    this.notify();
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.notify();
  }

  toggleMobileNav(force) {
    this.mobileNavOpen = force !== undefined ? force : !this.mobileNavOpen;
    this.notify();
  }

  toggleNotifications(force) {
    this.notificationDrawerOpen = force !== undefined ? force : !this.notificationDrawerOpen;
    this.notify();
  }

  getProductStockHealth(product, branchId = 'BR001') {
    if (!product) return { label: 'Healthy', status: 'healthy' };
    const stock = product.stocks ? (product.stocks[branchId] ?? 0) : 0;
    const reorder = product.reorderLevel ?? 5;
    if (stock === 0) {
      return { label: 'Out of Stock', status: 'out_of_stock' };
    } else if (stock <= reorder) {
      return { label: 'Low Stock', status: 'low' };
    } else {
      return { label: 'Healthy', status: 'healthy' };
    }
  }

  // Branch-specific product sequence & category helpers
  getProductCategoryForBranch(branchId, productId) {
    const seq = this.branchSequences ? this.branchSequences[branchId] : null;
    if (branchId === "BR001") {
      const idx = seq ? seq.indexOf(productId) : ANNASANDRAPALYA_SEQUENCE.indexOf(productId);
      if (idx !== -1) return idx < 62 ? "Vegetables" : "Fruits";
    }
    if (branchId === "BR002") {
      const idx = seq ? seq.indexOf(productId) : KODIHALLI_SEQUENCE.indexOf(productId);
      if (idx !== -1) return idx < 53 ? "Vegetables" : "Fruits";
    }
    if (branchId === "BR003") {
      const idx = seq ? seq.indexOf(productId) : LBS_NAGAR_SEQUENCE.indexOf(productId);
      if (idx !== -1) return idx < 62 ? "Vegetables" : "Fruits";
    }
    if (branchId === "BR004") {
      const idx = seq ? seq.indexOf(productId) : BASAVANAGAR_SEQUENCE.indexOf(productId);
      if (idx !== -1) return idx < 40 ? "Fruits" : "Vegetables";
    }
    const prod = this.products.find(p => p.id === productId);
    return prod ? prod.category : "General";
  }

  getBranchItemSequenceIndex(branchId, productId) {
    const seq = this.branchSequences ? this.branchSequences[branchId] : null;
    if (seq) {
      const idx = seq.indexOf(productId);
      return idx !== -1 ? idx : 9999;
    }
    if (branchId === "BR001") {
      const idx = ANNASANDRAPALYA_SEQUENCE.indexOf(productId);
      return idx !== -1 ? idx : 9999;
    }
    if (branchId === "BR002") {
      const idx = KODIHALLI_SEQUENCE.indexOf(productId);
      return idx !== -1 ? idx : 9999;
    }
    if (branchId === "BR003") {
      const idx = LBS_NAGAR_SEQUENCE.indexOf(productId);
      return idx !== -1 ? idx : 9999;
    }
    if (branchId === "BR004") {
      const idx = BASAVANAGAR_SEQUENCE.indexOf(productId);
      return idx !== -1 ? idx : 9999;
    }
    return 9999;
  }

  getBranchItemSerialNo(branchId, productId, fallbackIndex = null) {
    const idx = this.getBranchItemSequenceIndex(branchId, productId);
    if (idx !== -1 && idx < 9999) {
      return idx + 1;
    }
    const seq = this.branchSequences ? this.branchSequences[branchId] : null;
    const baseLen = seq ? seq.length : 100;
    return fallbackIndex !== null ? baseLen + fallbackIndex + 1 : baseLen + 1;
  }

  sortProductsForBranch(branchId, productList) {
    if (Array.isArray(productList)) {
      return [...productList].sort((a, b) => {
        const idA = a.id || a.productId;
        const idB = b.id || b.productId;
        const idxA = this.getBranchItemSequenceIndex(branchId, idA);
        const idxB = this.getBranchItemSequenceIndex(branchId, idB);
        if (idxA !== idxB) {
          return idxA - idxB;
        }
        return 0;
      });
    }
    return productList;
  }

  // Stock check methods
  getBranchStockCheck(branchId) {
    if (!this.stockCheckDrafts[branchId]) {
      this.stockCheckDrafts[branchId] = {};
    }
    return this.stockCheckDrafts[branchId];
  }

  updateRequiredQuantity(branchId, productId, qty, shouldNotify = true) {
    if (!this.stockCheckDrafts[branchId]) {
      this.stockCheckDrafts[branchId] = {};
    }
    const val = Math.max(0, parseInt(qty, 10) || 0);
    this.stockCheckDrafts[branchId][productId] = val;
    this.matrixLastRecorded = new Date();
    this.branchLastRecorded[branchId] = new Date();

    // If zeroed or deleted manually, also purge from pending submitted requirements for this branch
    if (val === 0 && this.requirements) {
      this.requirements.forEach(req => {
        if (req.branchId === branchId && (req.status === 'PENDING APPROVAL' || req.status === 'APPROVED')) {
          if (req.items) {
            req.items = req.items.filter(it => it.productId !== productId);
            req.itemCount = req.items.length;
          }
        }
      });
    }

    if (val > 0) {
      this.isReadyForNextDay = false;
    }
    if (shouldNotify) {
      this.notify();
    }
  }

  deleteBranchRequiredItem(branchId, productId) {
    return this.updateRequiredQuantity(branchId, productId, 0, true);
  }

  getRequiredItemsForBranch(branchId) {
    const draft = this.getBranchStockCheck(branchId);
    const requiredItems = [];
    for (const [prodId, qty] of Object.entries(draft)) {
      if (qty > 0) {
        const prod = this.products.find(p => p.id === prodId);
        if (prod) {
          requiredItems.push({
            productId: prod.id,
            productName: prod.name,
            sku: prod.sku,
            category: prod.category,
            unit: prod.unit,
            requiredQty: qty,
            unitCost: prod.unitCost,
            estimatedAmount: qty * prod.unitCost
          });
        }
      }
    }
    return requiredItems;
  }

  submitDailyStockRequirement(branchId) {
    const branch = this.branches.find(b => b.id === branchId) || this.branches[0];
    const items = this.getRequiredItemsForBranch(branchId);
    if (items.length === 0) return null;

    const now = new Date();
    const todayStr = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
    const refNum = (this.requirements.length + 1).toString().padStart(4, '0');
    const reference = `SC-${todayStr}-${refNum}`;

    const newReq = {
      id: `REQ-${Date.now()}`,
      reference,
      branchId: branch.id,
      branchName: branch.name,
      branchCode: branch.code,
      date: this.getLiveDateString(now),
      time: this.getLiveTimeString(now, true),
      timestamp: this.getLiveDateTimeString(now, true),
      submittedBy: this.currentUser.name,
      itemCount: items.length,
      status: 'PENDING APPROVAL',
      items: items.map(it => ({
        productId: it.productId,
        productName: it.productName,
        qty: it.requiredQty,
        unit: it.unit
      }))
    };

    this.matrixLastRecorded = now;
    this.branchLastRecorded[branchId] = now;
    this.requirements.unshift(newReq);

    // Reset this branch's active input drafts to 0 so inputs become clean 0
    if (this.stockCheckDrafts[branchId]) {
      this.products.forEach(p => {
        this.stockCheckDrafts[branchId][p.id] = 0;
      });
    }

    this.notifications.unshift({
      id: `NOTIF-${Date.now()}`,
      title: 'Stock Requirement Submitted',
      message: `${reference} recorded for ${branch.name} (${items.length} items at ${newReq.time}). Draft inputs reset to 0 for next count.`,
      type: 'info',
      time: 'Just now',
      unread: true,
      branch: branch.name
    });

    this.notify();
    return newReq;
  }

  // Finalizes the current day's order manifest, archives it, and resets ALL products to 0 across all 4 branches
  finalizeOrderAndResetForNextDay(options = {}) {
    const now = new Date();
    const dateStr = this.getLiveDateString(now);
    const timeStr = this.getLiveTimeString(now, true);

    // Snapshot consolidated procurement demand before reset
    const consolidated = this.getConsolidatedProcurement();
    const allBranchesReqs = this.getAllBranchesRequirements();
    const totalQty = consolidated.reduce((sum, item) => sum + item.totalQty, 0);
    const totalCost = consolidated.reduce((sum, item) => sum + item.totalEstCost, 0);

    const refNum = (this.finalizedOrders.length + 1).toString().padStart(3, '0');
    const todayNum = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
    const refCode = `MF-FINAL-${todayNum}-${refNum}`;

    const manifestRecord = {
      id: `MANIFEST-${Date.now()}`,
      reference: refCode,
      date: dateStr,
      time: timeStr,
      timestamp: this.getLiveDateTimeString(now, true),
      finalizedBy: this.currentUser?.name || 'Authorized Manager',
      totalProducts: consolidated.length,
      totalUnits: totalQty,
      totalEstCost: totalCost,
      source: options.source || 'ORDER_FINALIZATION',
      branches: this.branches.map(b => b.name),
      items: consolidated,
      branchBreakdown: allBranchesReqs
    };

    if (!this.finalizedOrders) {
      this.finalizedOrders = [];
    }
    if (totalQty > 0 || consolidated.length > 0) {
      this.finalizedOrders.unshift(manifestRecord);

      // Create Incoming Delivery Dispatch PO for Dockside Receiving Portal
      const dispatchPOId = `DISPATCH-${todayNum}-${refNum}`;
      const dispatchPO = {
        id: dispatchPOId,
        poNumber: `DSP-${todayNum}-${refNum}`,
        supplierName: 'APMC Central Mandi Delivery',
        date: dateStr,
        time: timeStr,
        timestamp: this.getLiveDateTimeString(now, true),
        source: options.source || 'DAILY_STOCK_CHECK_PDF',
        manifestReference: refCode,
        totalAmount: totalCost,
        totalUnits: totalQty,
        status: 'Incoming Delivery',
        timeline: [
          { step: 'Stock Check', status: 'completed', timestamp: timeStr },
          { step: 'PDF Exported & Finalized', status: 'completed', timestamp: 'Just now' },
          { step: 'APMC Procured', status: 'completed', timestamp: 'Ready' },
          { step: 'In Transit to Branches', status: 'active', timestamp: 'Arriving Morning' },
          { step: 'Dockside Receiving', status: 'pending', timestamp: 'Morning Unloading' }
        ],
        items: consolidated.map(item => ({
          productId: item.product.id,
          productName: item.product.name,
          sku: item.product.sku,
          category: item.product.category,
          unit: item.unit,
          rate: item.unitCost,
          totalQty: item.totalQty,
          amount: item.totalEstCost,
          allocations: item.branches.map(b => ({
            branchId: b.branchId,
            branch: b.branchName,
            qty: b.qty,
            received: b.qty
          }))
        }))
      };

      this.purchaseOrders.unshift(dispatchPO);
      this.latestDispatchPOId = dispatchPOId;

      // Clear receiving drafts so staff starts with fresh delivery counts matching the PDF dispatch
      this.receivingDrafts = {
        BR001: {},
        BR002: {},
        BR003: {},
        BR004: {}
      };
    }

    // 1. Mark existing active requirements as FINALIZED so they don't leak into tomorrow
    this.requirements.forEach(req => {
      if (req.status !== 'REJECTED') {
        req.status = 'FINALIZED';
      }
    });

    // 2. Reset EVERY product in EVERY branch draft to 0
    this.branches.forEach(b => {
      if (!this.stockCheckDrafts[b.id]) {
        this.stockCheckDrafts[b.id] = {};
      }
      this.products.forEach(p => {
        this.stockCheckDrafts[b.id][p.id] = 0;
      });
      this.branchLastRecorded[b.id] = now;
    });

    // 3. Update next-day readiness state
    this.isReadyForNextDay = true;
    this.lastFinalizedTimestamp = now;
    this.matrixLastRecorded = now;

    // 4. Add notification to drawer
    this.notifications.unshift({
      id: `NOTIF-${Date.now()}`,
      title: 'Order Finalized & System Reset',
      message: `Daily order (${totalQty} units across ${consolidated.length} products) finalized & PDF exported. Every product demand reset to 0. Ready for next day!`,
      type: 'success',
      time: 'Just now',
      unread: true
    });

    this.notify();
    return manifestRecord;
  }

  // Alias for manual reset
  resetAllRequirementsToZero() {
    return this.finalizeOrderAndResetForNextDay({ source: 'MANUAL_RESET' });
  }

  updateRequirementStatus(reqId, newStatus) {
    const req = this.requirements.find(r => r.id === reqId);
    if (req) {
      req.status = newStatus;
      this.notify();
    }
  }

  getConsolidatedProcurement() {
    const consolidated = {};
    this.products.forEach(prod => {
      const branchReqs = [];
      let totalQty = 0;

      this.branches.forEach(b => {
        const qty = this.getBranchRequiredQty(b.id, prod.id);
        if (qty > 0) {
          branchReqs.push({
            branchId: b.id,
            branchName: b.name,
            qty,
            unit: prod.unit
          });
          totalQty += qty;
        }
      });

      if (totalQty > 0) {
        consolidated[prod.id] = {
          product: prod,
          branches: branchReqs,
          totalQty,
          unit: prod.unit,
          unitCost: prod.unitCost,
          totalEstCost: totalQty * prod.unitCost
        };
      }
    });

    return Object.values(consolidated);
  }

  getConsolidatedRequirements() {
    return this.getConsolidatedProcurement();
  }

  createPurchaseOrderFromConsolidated(selectedItems, supplierName = 'ABC Fruit Market') {
    const poNum = (this.purchaseOrders.length + 8).toString().padStart(4, '0');
    const poId = `PO-20261002-${poNum}`;

    let totalAmount = 0;
    const items = selectedItems.map(item => {
      const lineCost = item.totalQty * item.unitCost;
      totalAmount += lineCost;
      return {
        productId: item.product.id,
        productName: item.product.name,
        qty: item.totalQty,
        unit: item.unit,
        rate: item.unitCost,
        amount: lineCost,
        allocations: item.branches.map(b => ({
          branch: b.branchName,
          branchId: b.branchId,
          qty: b.qty,
          received: 0
        }))
      };
    });

    const newPO = {
      id: poId,
      supplierName,
      date: '02 Oct 2026',
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      totalAmount,
      items,
      timeline: [
        { step: 'Requirement', status: 'completed', timestamp: '08:45 AM' },
        { step: 'Approved', status: 'completed', timestamp: '09:00 AM' },
        { step: 'Purchase Order', status: 'completed', timestamp: 'Just now' },
        { step: 'Purchasing', status: 'active', timestamp: 'In progress' },
        { step: 'Dispatched', status: 'pending', timestamp: 'Est. 01:00 PM' },
        { step: 'Received', status: 'pending', timestamp: 'Est. 03:00 PM' }
      ],
      status: 'Purchasing'
    };

    this.purchaseOrders.unshift(newPO);
    this.notify();
    return newPO;
  }

  // Retrieve incoming order items for a specific branch during morning unloading
  getBranchIncomingOrder(branchId, poId = null) {
    const branch = this.branches.find(b => b.id === branchId) || this.branches[0];
    let items = [];

    // Find PO or delivery source: prioritize passed poId, or latestDispatchPOId, or top PO
    const targetPOId = poId || this.latestDispatchPOId || (this.purchaseOrders[0] ? this.purchaseOrders[0].id : null);
    const po = targetPOId ? this.purchaseOrders.find(p => p.id === targetPOId) : this.purchaseOrders[0];
    if (po && po.items && po.items.length > 0) {
      po.items.forEach(it => {
        const alloc = (it.allocations || []).find(a => a.branchId === branchId || a.branch === branch.name || (a.branch && a.branch.includes(branch.code)));
        const allocQty = alloc ? (alloc.qty !== undefined ? alloc.qty : (alloc.allocated !== undefined ? alloc.allocated : 0)) : 0;
        if (alloc && allocQty > 0) {
          const prod = this.products.find(p => p.id === it.productId);
          items.push({
            productId: it.productId,
            productName: it.productName || (prod ? prod.name : 'Unknown Product'),
            sku: prod ? prod.sku : it.productId,
            image: prod ? prod.image : '📦',
            category: prod ? prod.category : 'General',
            unit: it.unit || (prod ? prod.unit : 'Units'),
            orderedQty: allocQty,
            receivedQty: (this.receivingDrafts[branchId] && this.receivingDrafts[branchId][it.productId] !== undefined)
              ? this.receivingDrafts[branchId][it.productId]
              : (alloc && alloc.received !== undefined ? alloc.received : (alloc ? alloc.qty : 0)),
            unitCost: it.rate || (prod ? prod.unitCost : 0)
          });
        }
      });
    }

    // If still empty, check if finalized order manifest has allocations
    if (items.length === 0 && this.finalizedOrders && this.finalizedOrders.length > 0) {
      const manifest = this.finalizedOrders[0];
      const branchReqs = manifest.branchBreakdown ? manifest.branchBreakdown[branchId] : [];
      (branchReqs || []).forEach(it => {
        const prod = this.products.find(p => p.id === it.productId || p.name === it.productName);
        if (it.qty > 0) {
          items.push({
            productId: it.productId || (prod ? prod.id : `PRD-${Date.now()}`),
            productName: it.productName,
            sku: it.sku || (prod ? prod.sku : ''),
            image: prod ? prod.image : '📦',
            category: prod ? prod.category : 'General',
            unit: it.unit,
            orderedQty: it.qty,
            receivedQty: (this.receivingDrafts[branchId] && this.receivingDrafts[branchId][it.productId] !== undefined)
              ? this.receivingDrafts[branchId][it.productId]
              : it.qty,
            unitCost: prod ? prod.unitCost : 0
          });
        }
      });
    }

    // If still empty and no POs exist, provide fallback items for demo purposes
    if (items.length === 0 && this.purchaseOrders.length === 0) {
      const defaultProducts = this.products.slice(0, 10);
      items = defaultProducts.map((p, idx) => {
        const ord = [8, 12, 6, 15, 10, 5, 20, 7, 9, 14][idx % 10];
        return {
          productId: p.id,
          productName: p.name,
          sku: p.sku,
          image: p.image,
          category: p.category,
          unit: p.unit,
          orderedQty: ord,
          receivedQty: (this.receivingDrafts[branchId] && this.receivingDrafts[branchId][p.id] !== undefined)
            ? this.receivingDrafts[branchId][p.id]
            : ord,
          unitCost: p.unitCost
        };
      });
    }

    if (items.length > 0) {
      items = this.sortProductsForBranch(branchId, items);
    }
    return items;
  }

  receiveBranchStock(poId, branchId, receivedMap, extraItems = []) {
    const branch = this.branches.find(b => b.id === branchId) || this.branches[0];
    const incomingItems = this.getBranchIncomingOrder(branchId, poId);

    // Merge any extra/unscheduled items delivered
    extraItems.forEach(extra => {
      if (!incomingItems.some(it => it.productId === extra.productId)) {
        incomingItems.push({
          productId: extra.productId,
          productName: extra.productName,
          sku: extra.sku,
          image: extra.image || '📦',
          category: extra.category || 'General',
          unit: extra.unit || 'Units',
          orderedQty: 0,
          unitCost: extra.unitCost || 0
        });
      }
    });

    let totalOrdered = 0;
    let totalReceived = 0;
    let surplusCount = 0;
    let shortageCount = 0;
    let exactCount = 0;
    const verifiedItems = [];

    incomingItems.forEach(item => {
      const rec = receivedMap[item.productId] !== undefined ? Math.max(0, parseInt(receivedMap[item.productId], 10) || 0) : item.orderedQty;
      const diff = rec - item.orderedQty;
      totalOrdered += item.orderedQty;
      totalReceived += rec;

      if (diff > 0) surplusCount++;
      else if (diff < 0) shortageCount++;
      else exactCount++;

      // Credit received stock to this branch
      const prod = this.products.find(p => p.id === item.productId);
      if (prod) {
        prod.stocks[branch.id] = (prod.stocks[branch.id] || 0) + rec;
        prod.lastUpdated = 'Just now';
      }

      verifiedItems.push({
        productId: item.productId,
        productName: item.productName,
        unit: item.unit,
        ordered: item.orderedQty,
        received: rec,
        difference: diff,
        status: diff === 0 ? 'EXACT' : diff > 0 ? 'SURPLUS' : 'SHORTAGE'
      });
    });

    const now = new Date();
    const grnRef = `GRN-${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${(this.receivingHistory.length + 1).toString().padStart(4, '0')}`;

    const report = {
      id: `RECV-${Date.now()}`,
      grn: grnRef,
      branchId: branch.id,
      branchName: branch.name,
      branchCode: branch.code,
      date: this.getLiveDateString(now),
      time: this.getLiveTimeString(now, true),
      timestamp: this.getLiveDateTimeString(now, true),
      receivedBy: this.currentUser?.name || 'MD FRESH STAFF',
      totalOrdered,
      totalReceived,
      surplusCount,
      shortageCount,
      exactCount,
      status: (shortageCount > 0 && surplusCount > 0) ? 'VARIANCE (MORE & LESS)' :
              shortageCount > 0 ? 'DEFICIT (LESS STOCK)' :
              surplusCount > 0 ? 'SURPLUS (MORE STOCK)' : 'EXACT VERIFIED',
      items: verifiedItems
    };

    if (!this.receivingHistory) {
      this.receivingHistory = [];
    }
    this.receivingHistory.unshift(report);

    // Also update PO allocations if matching PO exists
    const targetPOId = poId || this.latestDispatchPOId || (this.purchaseOrders[0] ? this.purchaseOrders[0].id : null);
    const po = targetPOId ? this.purchaseOrders.find(p => p.id === targetPOId) : null;
    if (po && po.items) {
      po.items.forEach(it => {
        const alloc = (it.allocations || []).find(a => a.branchId === branchId || a.branch === branch.name);
        if (alloc && receivedMap[it.productId] !== undefined) {
          alloc.received = receivedMap[it.productId];
        }
      });
    }

    // Add audit log
    this.auditLogs.unshift({
      id: `LOG-${Date.now()}`,
      timestamp: this.getLiveDateTimeString(now, true),
      user: this.currentUser?.name || 'MD FRESH STAFF',
      role: this.currentUser?.role || 'Store Staff',
      action: 'STOCK_UNLOADING_RECEIVE',
      details: `${grnRef}: Received ${totalReceived} units at ${branch.name} (${shortageCount} shortages, ${surplusCount} surplus)`
    });

    // Add notification
    this.notifications.unshift({
      id: `NOTIF-${Date.now()}`,
      title: 'Morning Stock Unloading Confirmed',
      message: `${branch.name}: ${totalReceived} units inwarded (${report.status}). GRN: ${grnRef}.`,
      type: shortageCount > 0 ? 'warning' : 'success',
      time: 'Just now',
      unread: true,
      branch: branch.name
    });

    this.notify();
    return { success: true, status: report.status, report };
  }

  // Add new product manually to catalog with target branch & serial number positioning
  addProduct(newProd, sequenceOptions = null) {
    const nextNum = (this.products.length + 1).toString().padStart(3, '0');
    const prefix = newProd.category === 'Vegetables' ? 'VEG' : 'FRU';
    const sku = newProd.sku || `${prefix}-${nextNum}`;
    const id = `PRD${nextNum}`;

    let image = '🥬';
    const nameLower = (newProd.name || '').toLowerCase();
    if (newProd.category === 'Fruits') image = '🍎';
    if (nameLower.includes('apple')) image = '🍎';
    else if (nameLower.includes('mango')) image = '🥭';
    else if (nameLower.includes('banana')) image = '🍌';
    else if (nameLower.includes('tomato')) image = '🍅';
    else if (nameLower.includes('onion')) image = '🧅';
    else if (nameLower.includes('potato')) image = '🥔';
    else if (nameLower.includes('orange')) image = '🍊';
    else if (nameLower.includes('pomegranate') || nameLower.includes('anar')) image = '🫐';
    else if (nameLower.includes('watermelon')) image = '🍉';
    else if (nameLower.includes('coriander') || nameLower.includes('kothmir')) image = '🌿';
    else if (nameLower.includes('chilli')) image = '🌶️';
    else if (nameLower.includes('corn')) image = '🌽';
    else if (nameLower.includes('carrot')) image = '🥕';
    else if (nameLower.includes('papaya')) image = '🍈';

    const p = {
      id,
      name: newProd.name,
      variety: newProd.variety || newProd.name,
      sku,
      category: newProd.category || 'Fruits',
      unit: newProd.unit || 'Crates',
      reorderLevel: parseInt(newProd.reorderLevel, 10) || 4,
      unitCost: parseInt(newProd.unitCost, 10) || 500,
      supplierName: newProd.supplierName || 'ABC Fruit Market',
      image,
      stocks: {
        BR001: parseInt(newProd.stockBR001, 10) || 0,
        BR002: parseInt(newProd.stockBR002, 10) || 0,
        BR003: parseInt(newProd.stockBR003, 10) || 0,
        BR004: parseInt(newProd.stockBR004, 10) || 0
      },
      lastUpdated: 'Just now'
    };

    if (newProd.initialStock !== undefined) {
      p.stocks[this.currentBranchId] = parseInt(newProd.initialStock, 10) || 0;
    }

    // Sequence & Serial Number Placement
    const targetBranch = sequenceOptions?.targetBranch || newProd.targetBranch || 'ALL';
    const rawPos = sequenceOptions?.serialNo || sequenceOptions?.position || newProd.targetSerialNo || newProd.serialNo;
    const targetSerialNo = rawPos !== undefined && rawPos !== null && rawPos !== '' ? parseInt(rawPos, 10) : null;

    if (this.branchSequences) {
      const branchesToUpdate = targetBranch === 'ALL'
        ? ['BR001', 'BR002', 'BR003', 'BR004']
        : [targetBranch];

      branchesToUpdate.forEach(bId => {
        const seq = this.branchSequences[bId];
        if (seq) {
          if (targetSerialNo !== null && !isNaN(targetSerialNo) && targetSerialNo >= 1) {
            const insertIdx = Math.min(Math.max(0, targetSerialNo - 1), seq.length);
            seq.splice(insertIdx, 0, p.id);
          } else {
            seq.push(p.id);
          }
        }
      });
    }

    this.products.unshift(p);
    this.notify();
    return p;
  }

  // Update an existing or added product
  updateProduct(productId, updatedFields = {}) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return { success: false, message: 'Product not found' };

    const oldName = prod.name;

    if (updatedFields.name !== undefined && updatedFields.name.trim()) prod.name = updatedFields.name.trim();
    if (updatedFields.variety !== undefined) prod.variety = updatedFields.variety.trim();
    if (updatedFields.sku !== undefined && updatedFields.sku.trim()) prod.sku = updatedFields.sku.trim();
    if (updatedFields.category !== undefined) prod.category = updatedFields.category;
    if (updatedFields.unit !== undefined) prod.unit = updatedFields.unit;
    if (updatedFields.reorderLevel !== undefined) prod.reorderLevel = Math.max(1, parseInt(updatedFields.reorderLevel, 10) || prod.reorderLevel);
    if (updatedFields.unitCost !== undefined) prod.unitCost = Math.max(0, parseInt(updatedFields.unitCost, 10) || prod.unitCost);
    if (updatedFields.supplierName !== undefined) prod.supplierName = updatedFields.supplierName;

    // Detect image/emoji if requested or if name changed significantly
    if (updatedFields.image !== undefined && updatedFields.image) {
      prod.image = updatedFields.image;
    } else if (updatedFields.name) {
      const nameLower = prod.name.toLowerCase();
      if (nameLower.includes('apple')) prod.image = '🍎';
      else if (nameLower.includes('mango')) prod.image = '🥭';
      else if (nameLower.includes('banana')) prod.image = '🍌';
      else if (nameLower.includes('tomato')) prod.image = '🍅';
      else if (nameLower.includes('onion')) prod.image = '🧅';
      else if (nameLower.includes('potato')) prod.image = '🥔';
      else if (nameLower.includes('orange')) prod.image = '🍊';
      else if (nameLower.includes('pomegranate') || nameLower.includes('anar')) prod.image = '🫐';
      else if (nameLower.includes('watermelon')) prod.image = '🍉';
      else if (nameLower.includes('coriander') || nameLower.includes('kothmir')) prod.image = '🌿';
      else if (nameLower.includes('chilli')) prod.image = '🌶️';
      else if (nameLower.includes('corn')) prod.image = '🌽';
      else if (nameLower.includes('carrot')) prod.image = '🥕';
      else if (nameLower.includes('papaya')) prod.image = '🍈';
      else if (nameLower.includes('grape')) prod.image = '🍇';
      else if (nameLower.includes('lemon') || nameLower.includes('lime')) prod.image = '🍋';
      else if (nameLower.includes('cucumber') || nameLower.includes('kheera')) prod.image = '🥒';
      else if (nameLower.includes('capsicum') || nameLower.includes('pepper')) prod.image = '🫑';
      else if (nameLower.includes('garlic')) prod.image = '🧄';
      else if (nameLower.includes('ginger')) prod.image = '🫚';
      else if (nameLower.includes('strawberry')) prod.image = '🍓';
      else if (nameLower.includes('avocado')) prod.image = '🥑';
      else if (nameLower.includes('mushroom')) prod.image = '🍄';
      else if (nameLower.includes('cabbage') || nameLower.includes('cauliflower')) prod.image = '🥬';
      else if (prod.category === 'Fruits' && (!prod.image || prod.image === '🥬')) prod.image = '🍎';
    }

    // Update branch stocks if provided
    if (updatedFields.stocks && typeof updatedFields.stocks === 'object') {
      Object.keys(updatedFields.stocks).forEach(bId => {
        if (prod.stocks[bId] !== undefined) {
          prod.stocks[bId] = Math.max(0, parseInt(updatedFields.stocks[bId], 10) || 0);
        }
      });
    }

    prod.lastUpdated = 'Just now';

    // Add audit log
    this.auditLogs.unshift({
      id: `LOG-${Date.now()}`,
      timestamp: this.getLiveDateTimeString(new Date(), true),
      user: this.currentUser?.name || 'Authorized Manager',
      role: this.currentUser?.role || 'Authorized Manager',
      action: 'PRODUCT_UPDATED',
      details: `Product "${oldName}" updated (SKU: ${prod.sku}, Unit: ${prod.unit}, Reorder: ${prod.reorderLevel})`
    });

    // Add notification
    this.notifications.unshift({
      id: `NOTIF-${Date.now()}`,
      title: 'Product Updated',
      message: `"${prod.name}" (${prod.sku}) details updated successfully.`,
      type: 'info',
      time: 'Just now',
      unread: true
    });

    this.notify();
    return { success: true, product: prod };
  }

  // Delete product from catalog
  deleteProduct(productId) {
    const idx = this.products.findIndex(p => p.id === productId);
    if (idx === -1) return { success: false, message: 'Product not found' };

    const deleted = this.products.splice(idx, 1)[0];

    // Clean up from branch sequences across all branches
    if (this.branchSequences) {
      Object.keys(this.branchSequences).forEach(bId => {
        if (Array.isArray(this.branchSequences[bId])) {
          this.branchSequences[bId] = this.branchSequences[bId].filter(id => id !== productId);
        }
      });
    }

    // Clean up from drafts
    this.branches.forEach(b => {
      if (this.stockCheckDrafts[b.id] && this.stockCheckDrafts[b.id][productId] !== undefined) {
        delete this.stockCheckDrafts[b.id][productId];
      }
      if (this.receivingDrafts[b.id] && this.receivingDrafts[b.id][productId] !== undefined) {
        delete this.receivingDrafts[b.id][productId];
      }
    });

    // Clean up from requirements
    if (this.requirements) {
      this.requirements.forEach(req => {
        if (req.items) {
          req.items = req.items.filter(it => it.productId !== productId);
          req.itemCount = req.items.length;
        }
      });
    }

    // Clean up from purchase orders
    if (this.purchaseOrders) {
      this.purchaseOrders.forEach(po => {
        if (po.items) {
          po.items = po.items.filter(it => it.productId !== productId);
        }
      });
    }

    // Persist deleted product ID in localStorage so it never resurrects on refresh
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem('md_fresh_deleted_product_ids');
        const deletedIds = raw ? JSON.parse(raw) : [];
        if (!deletedIds.includes(productId)) {
          deletedIds.push(productId);
          localStorage.setItem('md_fresh_deleted_product_ids', JSON.stringify(deletedIds));
        }
      }
    } catch (e) {
      console.error('Failed to store deleted product ID in localStorage', e);
    }

    // Add audit log
    this.auditLogs.unshift({
      id: `LOG-${Date.now()}`,
      timestamp: this.getLiveDateTimeString(new Date(), true),
      user: this.currentUser?.name || 'Authorized Manager',
      role: this.currentUser?.role || 'Authorized Manager',
      action: 'PRODUCT_DELETED',
      details: `Product "${deleted.name}" (${deleted.sku}) removed from catalog.`
    });

    this.notify();
    return { success: true, product: deleted };
  }

  // Get requirements across all 4 branches for combined list & PDF generation
  getAllBranchesRequirements() {
    const result = {};
    this.branches.forEach(branch => {
      const branchItems = [];
      const draft = this.getBranchStockCheck(branch.id);

      // Check current draft entries
      for (const [prodId, qty] of Object.entries(draft)) {
        if (qty > 0) {
          const prod = this.products.find(p => p.id === prodId);
          if (prod) {
            branchItems.push({
              productId: prod.id,
              productName: prod.name,
              sku: prod.sku,
              unit: prod.unit,
              qty
            });
          }
        }
      }

      // Check submitted active requirement manifests ONLY for products not already in draft
      this.requirements.filter(r => r.branchId === branch.id && (r.status === 'PENDING APPROVAL' || r.status === 'APPROVED')).forEach(req => {
        req.items.forEach(it => {
          // If the product is explicitly in draft (even as 0, meaning deleted/cleared), draft takes precedence!
          if (draft[it.productId] !== undefined) return;
          if (!branchItems.some(bi => bi.productName === it.productName || bi.productId === it.productId)) {
            branchItems.push({
              productId: it.productId,
              productName: it.productName,
              sku: it.productId,
              unit: it.unit,
              qty: it.qty
            });
          }
        });
      });

      result[branch.id] = branchItems;
    });
    return result;
  }

  // Get requirement for a specific branch & product
  getBranchRequiredQty(branchId, productId) {
    const draft = this.getBranchStockCheck(branchId);
    // Direct draft takes absolute precedence (0 means 0: deleted / cleared by user!)
    if (draft[productId] !== undefined) {
      return draft[productId];
    }
    // Only check submitted active requirements if not present in draft
    const reqs = this.requirements.filter(r => r.branchId === branchId && (r.status === 'PENDING APPROVAL' || r.status === 'APPROVED'));
    for (const r of reqs) {
      const it = r.items.find(i => i.productId === productId);
      if (it && it.qty !== undefined && it.qty > 0) return it.qty;
    }
    return 0;
  }

  // Set requirement directly for any branch in matrix
  setBranchRequiredQty(branchId, productId, qty) {
    return this.updateRequiredQuantity(branchId, productId, qty, true);
  }

  // Returns formatted rows for the multi-branch master matrix table
  getCombinedRequirementsMatrix(filterOnlyWithDemand = false) {
    const matrix = [];
    let slNo = 1;

    this.products.forEach(p => {
      const branchBreakdown = {};
      let totalQty = 0;

      this.branches.forEach(b => {
        const qty = this.getBranchRequiredQty(b.id, p.id);
        branchBreakdown[b.id] = qty;
        totalQty += qty;
      });

      if (!filterOnlyWithDemand || totalQty > 0) {
        matrix.push({
          slNo: slNo++,
          productId: p.id,
          product: p,
          branches: branchBreakdown,
          totalQty,
          unit: p.unit,
          unitCost: p.unitCost,
          totalEstimatedCost: totalQty * p.unitCost,
          hasDemand: totalQty > 0
        });
      }
    });

    return matrix;
  }
}

export const store = new InventoryStore();

