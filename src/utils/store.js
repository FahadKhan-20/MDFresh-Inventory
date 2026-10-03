// Central Store for MD Fresh Inventory Management
// Updated with Authorized Access Control & 4 Specific Branches

import {
  INITIAL_BRANCHES,
  INITIAL_PRODUCTS,
  INITIAL_REQUIREMENTS,
  INITIAL_PURCHASE_ORDERS,
  INITIAL_NOTIFICATIONS,
  INITIAL_STOCK_MOVEMENTS,
  INITIAL_SUPPLIERS
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
    this.auditLogs = [
      {
        id: 'LOG-001',
        timestamp: '03 Oct 2026, 06:45 pm',
        user: 'Ramesh Staff',
        role: 'Store Staff',
        action: 'REQUIREMENT_DRAFT_SAVE',
        details: 'Updated required stock quantities for Annasandra Palya (BR001)',
        branch: 'Annasandra Palya'
      },
      {
        id: 'LOG-002',
        timestamp: '03 Oct 2026, 07:15 pm',
        user: 'Kiran Kumar',
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
        name: 'Store Staff',
        email: 'staff@mdfresh.in',
        role: 'Store Staff',
        branch: 'ANNASANDRAPALYA',
        avatar: 'SS'
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
      name: name || (this.isAuthorized ? 'Store Manager' : 'Store Staff'),
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
      name: 'Store Staff',
      email: 'staff@mdfresh.in',
      role: 'Store Staff',
      branch: 'ANNASANDRAPALYA',
      avatar: 'SS'
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
    const isStaffAllowed = this.activeView === 'stock-check' || this.activeView === 'requirements';
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
    const isStaffAllowed = viewName === 'stock-check' || viewName === 'requirements';
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
    if (shouldNotify) {
      this.notify();
    }
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
            currentStock: prod.stocks[branchId] ?? 0,
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

    this.notifications.unshift({
      id: `NOTIF-${Date.now()}`,
      title: 'Stock Requirement Submitted',
      message: `${reference} recorded for ${branch.name} (${items.length} items at ${newReq.time}).`,
      type: 'info',
      time: 'Just now',
      unread: true,
      branch: branch.name
    });

    this.notify();
    return newReq;
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
        const draft = this.getBranchStockCheck(b.id);
        const qty = draft[prod.id] || 0;
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

  receiveBranchStock(poId, branchId, receivedMap) {
    const po = this.purchaseOrders.find(p => p.id === poId);
    if (!po) return false;

    const branch = this.branches.find(b => b.id === branchId) || this.branches[0];
    let anyDifference = false;

    po.items.forEach(item => {
      const alloc = item.allocations.find(a => a.branchId === branchId || a.branch === branch.name);
      if (alloc) {
        const receivedQty = receivedMap[item.productId] !== undefined ? receivedMap[item.productId] : alloc.qty;
        alloc.received = receivedQty;
        if (receivedQty !== alloc.qty) anyDifference = true;

        const prod = this.products.find(p => p.id === item.productId);
        if (prod) {
          prod.stocks[branch.id] = (prod.stocks[branch.id] || 0) + receivedQty;
          prod.lastUpdated = 'Just now';
        }
      }
    });

    const statusText = anyDifference ? 'PARTIALLY RECEIVED' : 'FULLY RECEIVED';
    this.notify();
    return { success: true, status: statusText };
  }

  // Add new product manually to catalog
  addProduct(newProd) {
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

    this.products.unshift(p);
    this.notify();
    return p;
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

      // Check any submitted requirement manifests
      this.requirements.filter(r => r.branchId === branch.id).forEach(req => {
        req.items.forEach(it => {
          if (!branchItems.some(bi => bi.productName === it.productName)) {
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
    if (draft[productId] !== undefined) {
      return draft[productId];
    }
    // Also check submitted requirements
    const reqs = this.requirements.filter(r => r.branchId === branchId && r.status !== 'REJECTED');
    for (const r of reqs) {
      const it = r.items.find(i => i.productId === productId);
      if (it && it.qty !== undefined) return it.qty;
    }
    return 0;
  }

  // Set requirement directly for any branch in matrix
  setBranchRequiredQty(branchId, productId, qty) {
    if (!this.stockCheckDrafts[branchId]) {
      this.stockCheckDrafts[branchId] = {};
    }
    const parsed = Math.max(0, parseInt(qty, 10) || 0);
    this.stockCheckDrafts[branchId][productId] = parsed;
    this.notify();
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

