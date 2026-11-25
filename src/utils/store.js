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
    const catPriority = {
      'Vegetables': 1,
      'Fruits': 2,
      'Dairy & Others': 3
    };
    this.products = [...INITIAL_PRODUCTS].sort((a, b) => {
      const pA = catPriority[a.category] || 99;
      const pB = catPriority[b.category] || 99;
      if (pA !== pB) return pA - pB;
      return 0;
    });
    this.requirements = []; // Clean slate for live production
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

    // Initialize deleted products recycle bin
    this.deletedProducts = [];
    try {
      if (typeof localStorage !== 'undefined') {
        const cachedDeleted = localStorage.getItem('md_fresh_deleted_products_cache');
        if (cachedDeleted) {
          const parsed = JSON.parse(cachedDeleted);
          if (Array.isArray(parsed)) {
            this.deletedProducts = parsed;
          }
        }
      }
    } catch (e) {
      // ignore
    }

    // Purge any deleted product IDs saved in localStorage and ensure they are in this.deletedProducts
    const initialFullCatalog = [...this.products];
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

          // Ensure any deletedId is recorded in this.deletedProducts so it can be restored
          deletedIds.forEach(id => {
            if (!this.deletedProducts.some(p => p.id === id)) {
              const orig = initialFullCatalog.find(p => p.id === id);
              if (orig) {
                this.deletedProducts.push({
                  ...orig,
                  deletedAt: 'Previously deleted'
                });
              }
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
        this.isAuthenticated = true;
      }
    } else {
      this.isAuthenticated = true;
      this.currentUser = {
        name: 'MD FRESH STAFF',
        email: 'staff@mdfresh.in',
        role: 'Store Staff',
        branch: 'ANNASANDRAPALYA',
        avatar: 'MS'
      };
      this.activeView = 'stock-check';
    }

    this.sidebarCollapsed = false;
    this.mobileNavOpen = false;
    this.notificationDrawerOpen = false;

    // Production Clean Slate: All branch stock check drafts start at clean 0 (empty)
    this.stockCheckDrafts = {
      BR001: {},
      BR002: {},
      BR003: {},
      BR004: {}
    };

    // Production Zero-State Initialization Flag (Clean slate for live store operations)
    const PROD_RELEASE_KEY = 'md_fresh_live_zero_v20261125_01';
    try {
      if (typeof localStorage !== 'undefined') {
        const hasCleaned = localStorage.getItem(PROD_RELEASE_KEY);
        if (!hasCleaned) {
          localStorage.removeItem('md_fresh_stock_check_drafts');
          localStorage.removeItem('md_fresh_branch_submission_status');
          localStorage.setItem(PROD_RELEASE_KEY, 'CLEAN_ZERO_ACTIVE');
        } else {
          // Restore user's live inputs saved today
          const savedDrafts = localStorage.getItem('md_fresh_stock_check_drafts');
          if (savedDrafts) {
            const parsed = JSON.parse(savedDrafts);
            if (parsed && typeof parsed === 'object') {
              this.stockCheckDrafts = parsed;
            }
          }
        }
      }
    } catch (e) {
      // ignore
    }

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

    // 4-Branch Daily Requirement Submission Tracking
    // All branches start unsubmitted (false) ready for today's live morning audit
    this.branchSubmitted = {
      BR001: false,
      BR002: false,
      BR003: false,
      BR004: false
    };
    this.branchSubmissionDetails = {};
    try {
      if (typeof localStorage !== 'undefined') {
        const hasCleaned = localStorage.getItem('md_fresh_live_zero_v20261125_01');
        if (hasCleaned) {
          const savedSub = localStorage.getItem('md_fresh_branch_submission_status');
          if (savedSub) {
            const parsed = JSON.parse(savedSub);
            if (parsed && typeof parsed === 'object') {
              this.branchSubmitted = parsed;
            }
          }
        }
      }
    } catch (e) {
      // ignore
    }

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
      if (idx !== -1) return idx < 62 ? "Vegetables" : "Fruits";
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
      const catPriority = {
        'Vegetables': 1,
        'Fruits': 2,
        'Dairy & Others': 3
      };
      return [...productList].sort((a, b) => {
        const idA = a.id || a.productId;
        const idB = b.id || b.productId;
        const idxA = this.getBranchItemSequenceIndex(branchId, idA);
        const idxB = this.getBranchItemSequenceIndex(branchId, idB);
        if (idxA !== idxB) {
          return idxA - idxB;
        }
        const catA = this.getProductCategoryForBranch(branchId, idA) || a.category || 'Vegetables';
        const catB = this.getProductCategoryForBranch(branchId, idB) || b.category || 'Vegetables';
        const pA = catPriority[catA] || 99;
        const pB = catPriority[catB] || 99;
        if (pA !== pB) {
          return pA - pB;
        }
        return (a.name || '').localeCompare(b.name || '');
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

    // Persist draft updates to localStorage
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('md_fresh_stock_check_drafts', JSON.stringify(this.stockCheckDrafts));
      }
    } catch (e) {
      // ignore
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

    // Mark branch as submitted
    if (!this.branchSubmitted) this.branchSubmitted = {};
    this.branchSubmitted[branchId] = true;
    if (!this.branchSubmissionDetails) this.branchSubmissionDetails = {};
    this.branchSubmissionDetails[branchId] = {
      time: this.getLiveTimeString(now, true),
      timestamp: this.getLiveDateTimeString(now, true),
      count: items.length
    };

    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('md_fresh_branch_submission_status', JSON.stringify(this.branchSubmitted));
      }
    } catch (e) {
      // ignore
    }

    // Keep submitted branch draft in sync with submitted items
    if (!this.stockCheckDrafts[branchId]) {
      this.stockCheckDrafts[branchId] = {};
    }
    items.forEach(it => {
      this.stockCheckDrafts[branchId][it.productId] = it.requiredQty;
    });

    this.notifications.unshift({
      id: `NOTIF-${Date.now()}`,
      title: 'Stock Requirement Submitted',
      message: `${reference} recorded for ${branch.name} (${items.length} items at ${newReq.time}). Draft inputs reset to 0 for next count.`,
      type: 'info',
      time: 'Just now',
      unread: true,
      branch: branch.name
    });

    // If this submission completes all 4 branches, send high-priority alert to download PDF & share on WhatsApp
    if (this.areAllBranchesSubmitted()) {
      const alreadyHasAll4 = this.notifications.some(n => n.title && n.title.includes("All 4 Shops' Items Have Been Listed"));
      if (!alreadyHasAll4) {
        this.notifications.unshift({
          id: `NOTIF-${Date.now()}-ALL4`,
          title: "🎉 All 4 Shops' Items Have Been Listed!",
          message: "All 4 retail stores (Annasandrapalya, Kodihalli, LB Shastri Nagar, Basavanagar) have completed and submitted their morning stock requirements! PDF download is now unlocked. Please download the purchase order PDF and share it on WhatsApp.",
          type: 'success',
          time: 'Just now',
          unread: true,
          action: 'SHARE_WHATSAPP'
        });
      }
    }

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

    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('md_fresh_stock_check_drafts', JSON.stringify(this.stockCheckDrafts));
      }
    } catch (e) {
      // ignore
    }

    // 3. Reset branch submission statuses so all 4 branches must submit fresh for next day's morning order
    this.branchSubmitted = {
      BR001: false,
      BR002: false,
      BR003: false,
      BR004: false
    };
    this.branchSubmissionDetails = {};
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('md_fresh_branch_submission_status', JSON.stringify(this.branchSubmitted));
      }
    } catch (e) {
      // ignore
    }

    // 4. Update next-day readiness state
    this.isReadyForNextDay = true;
    this.lastFinalizedTimestamp = now;
    this.matrixLastRecorded = now;

    // 5. Add notification to drawer
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

  // 4-Branch Daily Requirement Submission Guardrail
  isBranchSubmitted(branchId) {
    if (this.branchSubmitted && this.branchSubmitted[branchId] !== undefined) {
      return Boolean(this.branchSubmitted[branchId]);
    }
    // Fallback: check if active requirement exists
    const hasActiveReq = this.requirements && this.requirements.some(r => r.branchId === branchId && r.status !== 'FINALIZED' && r.status !== 'REJECTED');
    return Boolean(hasActiveReq);
  }

  markBranchSubmitted(branchId, status = true) {
    if (!this.branchSubmitted) this.branchSubmitted = {};
    this.branchSubmitted[branchId] = Boolean(status);

    const branch = this.branches.find(b => b.id === branchId);
    const branchName = branch ? branch.name : branchId;
    const now = new Date();

    if (status) {
      if (!this.branchSubmissionDetails) this.branchSubmissionDetails = {};
      const reqCount = this.getRequiredItemsForBranch(branchId).length;
      this.branchSubmissionDetails[branchId] = {
        time: this.getLiveTimeString(now, true),
        timestamp: this.getLiveDateTimeString(now, true),
        count: reqCount
      };

      this.auditLogs.unshift({
        id: `LOG-${Date.now()}`,
        timestamp: this.getLiveDateTimeString(now, true),
        user: this.currentUser?.name || 'MD FRESH STAFF',
        role: this.currentUser?.role || 'Store Staff',
        action: 'BRANCH_REQUIREMENT_VERIFIED',
        details: `Confirmed ${branchName} requirements submitted for today's APMC Mandi purchase order.`
      });

      if (this.areAllBranchesSubmitted()) {
        const alreadyHasAll4 = this.notifications.some(n => n.title && n.title.includes("All 4 Shops' Items Have Been Listed"));
        if (!alreadyHasAll4) {
          this.notifications.unshift({
            id: `NOTIF-${Date.now()}-ALL4`,
            title: "🎉 All 4 Shops' Items Have Been Listed!",
            message: "All 4 retail stores (Annasandrapalya, Kodihalli, LB Shastri Nagar, Basavanagar) have completed and submitted their morning stock requirements! PDF download is now unlocked. Please download the purchase order PDF and share it on WhatsApp.",
            type: 'success',
            time: 'Just now',
            unread: true,
            action: 'SHARE_WHATSAPP'
          });
        }
      }
    }

    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('md_fresh_branch_submission_status', JSON.stringify(this.branchSubmitted));
      }
    } catch (e) {
      // ignore
    }

    this.notify();
  }

  areAllBranchesSubmitted() {
    const activeBranchIds = ['BR001', 'BR002', 'BR003', 'BR004'];
    return activeBranchIds.every(id => this.isBranchSubmitted(id));
  }

  getPendingBranches() {
    const activeBranchIds = ['BR001', 'BR002', 'BR003', 'BR004'];
    return this.branches.filter(b => activeBranchIds.includes(b.id) && !this.isBranchSubmitted(b.id));
  }

  getSubmittedBranches() {
    const activeBranchIds = ['BR001', 'BR002', 'BR003', 'BR004'];
    return this.branches.filter(b => activeBranchIds.includes(b.id) && this.isBranchSubmitted(b.id));
  }

  getBranchSubmissionSummary() {
    const activeBranches = this.branches.filter(b => ['BR001', 'BR002', 'BR003', 'BR004'].includes(b.id));
    return activeBranches.map(b => {
      const submitted = this.isBranchSubmitted(b.id);
      const detail = this.branchSubmissionDetails ? this.branchSubmissionDetails[b.id] : null;
      const activeReq = this.requirements && this.requirements.find(r => r.branchId === b.id && r.status !== 'FINALIZED' && r.status !== 'REJECTED');
      const count = activeReq ? activeReq.itemCount : (detail ? detail.count : this.getRequiredItemsForBranch(b.id).length);
      const time = detail ? detail.time : (activeReq ? (activeReq.time || activeReq.timestamp) : null);

      return {
        branchId: b.id,
        branchName: b.name,
        branchCode: b.code,
        isSubmitted: submitted,
        itemCount: count,
        time: time || (submitted ? 'Recorded' : 'Pending ⏳'),
        status: submitted ? 'Submitted' : 'Pending Verification'
      };
    });
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

    // Sort: Vegetables first, then Fruits, then sequence / name
    return Object.values(consolidated).sort((a, b) => {
      const catA = a.product.category || '';
      const catB = b.product.category || '';
      if (catA === 'Vegetables' && catB !== 'Vegetables') return -1;
      if (catA !== 'Vegetables' && catB === 'Vegetables') return 1;
      return (a.product.sequenceNumber || 999) - (b.product.sequenceNumber || 999) || (a.product.name || '').localeCompare(b.product.name || '');
    });
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

    // Store in deletedProducts recycle bin (prevent duplicates)
    if (!this.deletedProducts) this.deletedProducts = [];
    if (!this.deletedProducts.some(p => p.id === productId)) {
      this.deletedProducts.unshift({
        ...deleted,
        deletedAt: this.getLiveDateTimeString(new Date(), true)
      });
    }

    // Persist deleted product ID and cache in localStorage so it persists across refreshes
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem('md_fresh_deleted_product_ids');
        const deletedIds = raw ? JSON.parse(raw) : [];
        if (!deletedIds.includes(productId)) {
          deletedIds.push(productId);
          localStorage.setItem('md_fresh_deleted_product_ids', JSON.stringify(deletedIds));
        }
        localStorage.setItem('md_fresh_deleted_products_cache', JSON.stringify(this.deletedProducts));
      }
    } catch (e) {
      console.error('Failed to store deleted product ID in localStorage', e);
    }

    // Add audit log
    this.auditLogs.unshift({
      id: `LOG-${Date.now()}`,
      timestamp: this.getLiveDateTimeString(new Date(), true),
      user: this.currentUser?.name || 'MD FRESH STAFF',
      role: this.currentUser?.role || 'Store Staff',
      action: 'PRODUCT_DELETED',
      details: `Product "${deleted.name}" (${deleted.sku}) removed from catalog.`
    });

    this.notify();
    return { success: true, product: deleted };
  }

  // Restore product from recycle bin back to catalog and branch sequences
  restoreProduct(productId) {
    if (!this.deletedProducts) this.deletedProducts = [];
    const delIdx = this.deletedProducts.findIndex(p => p.id === productId);
    if (delIdx === -1) {
      return { success: false, message: 'Product not found in deleted list' };
    }

    const [restored] = this.deletedProducts.splice(delIdx, 1);
    const cleanRestored = { ...restored };
    delete cleanRestored.deletedAt;

    // Add back to active catalog if not already present
    if (!this.products.some(p => p.id === productId)) {
      this.products.push(cleanRestored);
    }

    // Restore into branch sequences
    if (this.branchSequences) {
      const canonicalSequences = {
        BR001: ANNASANDRAPALYA_SEQUENCE,
        BR002: KODIHALLI_SEQUENCE,
        BR003: LBS_NAGAR_SEQUENCE,
        BR004: BASAVANAGAR_SEQUENCE
      };

      Object.keys(canonicalSequences).forEach(bId => {
        if (!this.branchSequences[bId]) this.branchSequences[bId] = [];
        if (!this.branchSequences[bId].includes(productId)) {
          const canonical = canonicalSequences[bId];
          const canonicalIdx = canonical.indexOf(productId);
          if (canonicalIdx !== -1 && canonicalIdx <= this.branchSequences[bId].length) {
            this.branchSequences[bId].splice(canonicalIdx, 0, productId);
          } else {
            this.branchSequences[bId].push(productId);
          }
        }
      });
    }

    // Remove from localStorage deleted IDs
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem('md_fresh_deleted_product_ids');
        let deletedIds = raw ? JSON.parse(raw) : [];
        deletedIds = deletedIds.filter(id => id !== productId);
        localStorage.setItem('md_fresh_deleted_product_ids', JSON.stringify(deletedIds));
        localStorage.setItem('md_fresh_deleted_products_cache', JSON.stringify(this.deletedProducts));
      }
    } catch (e) {
      // ignore
    }

    // Add audit log
    this.auditLogs.unshift({
      id: `LOG-${Date.now()}`,
      timestamp: this.getLiveDateTimeString(new Date(), true),
      user: this.currentUser?.name || 'MD FRESH STAFF',
      role: this.currentUser?.role || 'Store Staff',
      action: 'PRODUCT_RESTORED',
      details: `Product "${cleanRestored.name}" (${cleanRestored.sku}) restored back to catalog.`
    });

    this.notify();
    return { success: true, product: cleanRestored };
  }

  // Restore all deleted products at once
  restoreAllDeletedProducts() {
    if (!this.deletedProducts || this.deletedProducts.length === 0) {
      return { success: false, message: 'No deleted products to restore' };
    }
    const toRestore = [...this.deletedProducts];
    let count = 0;
    toRestore.forEach(p => {
      const res = this.restoreProduct(p.id);
      if (res.success) count++;
    });
    return { success: true, count };
  }

  // Get all currently deleted products
  getDeletedProducts() {
    return Array.isArray(this.deletedProducts) ? [...this.deletedProducts] : [];
  }

  // Get requirements across all 4 branches for combined list & PDF generation
  getAllBranchesRequirements() {
    const result = {};
    this.branches.forEach(branch => {
      const branchItems = [];

      this.products.forEach(prod => {
        const qty = this.getBranchRequiredQty(branch.id, prod.id);
        if (qty > 0) {
          branchItems.push({
            productId: prod.id,
            productName: prod.name,
            sku: prod.sku,
            unit: prod.unit,
            qty,
            category: prod.category
          });
        }
      });

      // Sort branch items: Vegetables first, then Fruits
      branchItems.sort((a, b) => {
        if (a.category === 'Vegetables' && b.category !== 'Vegetables') return -1;
        if (a.category !== 'Vegetables' && b.category === 'Vegetables') return 1;
        return (a.productName || '').localeCompare(b.productName || '');
      });

      result[branch.id] = branchItems;
    });
    return result;
  }

  // Get requirement for a specific branch & product
  getBranchRequiredQty(branchId, productId) {
    const draft = this.getBranchStockCheck(branchId);
    if (draft && draft[productId] !== undefined && draft[productId] > 0) {
      return draft[productId];
    }

    // Check submitted active requirements
    const reqs = (this.requirements || []).filter(r => r.branchId === branchId && (r.status === 'PENDING APPROVAL' || r.status === 'APPROVED'));
    for (const r of reqs) {
      const it = (r.items || []).find(i => i.productId === productId);
      if (it && it.qty !== undefined && it.qty > 0) {
        return it.qty;
      }
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

