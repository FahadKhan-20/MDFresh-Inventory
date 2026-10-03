// MD Fresh Authentication View (Login, Signup, Role Selection, Gmail & Device Persistence)
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

let currentAuthMode = 'signin'; // 'signin' or 'signup'
let selectedRole = 'staff'; // 'staff' or 'manager'
let showPassword = false;

export function renderLoginView() {
  const branches = store.branches;

  return `
    <div class="auth-page-container">
      <div class="auth-card">
        <!-- Brand Header with Official Logo -->
        <div class="auth-header">
          <div class="auth-logo-wrapper">
            <img src="/logo.png?v=3" alt="MD Fresh Logo" class="auth-logo-img" />
          </div>
          <h1 class="auth-brand-title">MD FRESH</h1>
          <p class="auth-brand-subtitle">
            Internal Inventory OS & APMC Mandi Procurement System
          </p>
        </div>

        <!-- 1. INITIAL ROLE SELECTION (Staff vs Manager) -->
        <div class="auth-role-section">
          <label class="auth-section-label">
            Step 1: Choose Your Store Role
          </label>
          <div class="auth-role-grid">
            <div class="auth-role-card ${selectedRole === 'staff' ? 'active' : ''}" id="roleCardStaff" role="button" tabindex="0">
              <div class="role-card-header">
                <span class="role-card-icon">👤</span>
                <span class="role-active-indicator">${selectedRole === 'staff' ? '✓' : ''}</span>
              </div>
              <div class="role-card-title">Store Staff</div>
              <div class="role-card-desc">Daily stock count verification & multi-branch demand entry</div>
            </div>

            <div class="auth-role-card ${selectedRole === 'manager' ? 'active' : ''}" id="roleCardManager" role="button" tabindex="0">
              <div class="role-card-header">
                <span class="role-card-icon">🛡️</span>
                <span class="role-active-indicator">${selectedRole === 'manager' ? '✓' : ''}</span>
              </div>
              <div class="role-card-title">Manager / Owner</div>
              <div class="role-card-desc">Full APMC Mandi POs, receiving, catalog management & analytics</div>
            </div>
          </div>
        </div>

        <!-- 2. AUTH MODE TOGGLE (Sign In vs Sign Up) -->
        <div class="auth-tabs-wrapper">
          <div class="auth-tabs">
            <button type="button" class="auth-tab-btn ${currentAuthMode === 'signin' ? 'active' : ''}" id="tabSignIn">
              Sign In
            </button>
            <button type="button" class="auth-tab-btn ${currentAuthMode === 'signup' ? 'active' : ''}" id="tabSignUp">
              Create Account
            </button>
          </div>
        </div>

        <!-- 3. ONE-CLICK GMAIL / GOOGLE LOGIN -->
        <div class="auth-google-wrapper">
          <button type="button" class="btn-google-auth" id="btnGoogleSignIn">
            <svg width="20" height="20" viewBox="0 0 18 18" class="google-svg-icon" aria-hidden="true">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.616z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.173 0 7.547 0 9s.347 2.827.957 4.039l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"/>
            </svg>
            <span>Continue with Gmail / Google</span>
          </button>
        </div>

        <div class="auth-divider">
          <span>or continue with email & password</span>
        </div>

        <!-- Inline Error Message -->
        <div id="authAlertBox" class="auth-alert" style="display: none;"></div>

        <!-- 4. EMAIL & PASSWORD FORM -->
        <form id="authMainForm" class="auth-form" autocomplete="on">
          ${currentAuthMode === 'signup' ? `
            <!-- Full Name (Sign Up only) -->
            <div class="auth-field-group">
              <label for="authFullNameInput" class="auth-field-label">Full Name</label>
              <div class="auth-input-wrapper">
                <span class="auth-input-icon">👤</span>
                <input 
                  type="text" 
                  id="authFullNameInput" 
                  class="auth-input" 
                  placeholder="e.g. Rahul Sharma"
                  required
                />
              </div>
            </div>

            <!-- Retail Branch Selection (Sign Up only) -->
            <div class="auth-field-group">
              <label for="authBranchSelect" class="auth-field-label">Assigned Branch</label>
              <div class="auth-input-wrapper">
                <span class="auth-input-icon">🏪</span>
                <select id="authBranchSelect" class="auth-input auth-select" required>
                  ${branches.map(b => `<option value="${b.id}">${b.name} (${b.code})</option>`).join('')}
                </select>
              </div>
            </div>
          ` : ''}

          <!-- Email / Gmail Input -->
          <div class="auth-field-group">
            <label for="authEmailInput" class="auth-field-label">
              ${currentAuthMode === 'signup' ? 'Gmail / Work Email' : 'Email or Gmail'}
            </label>
            <div class="auth-input-wrapper">
              <span class="auth-input-icon">✉️</span>
              <input 
                type="email" 
                id="authEmailInput" 
                class="auth-input" 
                placeholder="name@gmail.com"
                value="${selectedRole === 'manager' ? 'manager@mdfresh.in' : 'staff@mdfresh.in'}"
                required
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="auth-field-group">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <label for="authPasswordInput" class="auth-field-label" style="margin-bottom: 0;">Password</label>
            </div>
            <div class="auth-input-wrapper">
              <span class="auth-input-icon">🔑</span>
              <input 
                type="${showPassword ? 'text' : 'password'}" 
                id="authPasswordInput" 
                class="auth-input" 
                placeholder="Enter your password"
                value=""
                required
              />
              <button type="button" class="btn-toggle-password" id="btnTogglePasswordVisibility" title="Toggle password visibility">
                ${showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <!-- Device Persistence Checkbox (Stay Logged In) -->
          <div class="auth-checkbox-group">
            <label class="auth-checkbox-label">
              <input type="checkbox" id="authStaySignedIn" checked class="auth-checkbox" />
              <span>
                <strong>Stay signed in on this device</strong>
                <small style="display: block; color: var(--md-text-muted); font-size: 0.72rem;">
                  You will not be asked to log in again on this device.
                </small>
              </span>
            </label>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="btn btn-primary auth-submit-btn" id="btnSubmitAuth">
            ${currentAuthMode === 'signin' 
              ? (selectedRole === 'manager' ? 'Sign In as Manager 🛡️' : 'Sign In as Staff 👤')
              : 'Create Account & Access OS →'
            }
          </button>
        </form>

        <!-- Quick Demo Accounts (One-Click Testing) -->
        <div class="auth-quick-fill-section">
          <div class="quick-fill-title">Quick Demo Logins</div>
          <div class="quick-fill-buttons">
            <button type="button" class="quick-fill-chip" id="btnQuickStaff">
              <span>👤 Staff (Annasandrapalya)</span>
            </button>
            <button type="button" class="quick-fill-chip" id="btnQuickManager">
              <span>🛡️ Manager (All Access)</span>
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="auth-footer">
          <span>MD Fresh Enterprise Inventory OS &bull; Bengaluru</span>
        </div>
      </div>
    </div>
  `;
}

export function setupLoginEvents() {
  // Role selection clicks
  const roleCardStaff = document.getElementById('roleCardStaff');
  const roleCardManager = document.getElementById('roleCardManager');

  if (roleCardStaff) {
    roleCardStaff.addEventListener('click', () => {
      selectedRole = 'staff';
      updateLoginEmailDefaults();
      renderAppOrUpdate();
    });
  }

  if (roleCardManager) {
    roleCardManager.addEventListener('click', () => {
      selectedRole = 'manager';
      updateLoginEmailDefaults();
      renderAppOrUpdate();
    });
  }

  // Auth Mode tabs
  const tabSignIn = document.getElementById('tabSignIn');
  const tabSignUp = document.getElementById('tabSignUp');

  if (tabSignIn) {
    tabSignIn.addEventListener('click', () => {
      currentAuthMode = 'signin';
      renderAppOrUpdate();
    });
  }

  if (tabSignUp) {
    tabSignUp.addEventListener('click', () => {
      currentAuthMode = 'signup';
      renderAppOrUpdate();
    });
  }

  // Password visibility toggle
  const togglePassBtn = document.getElementById('btnTogglePasswordVisibility');
  const passInput = document.getElementById('authPasswordInput');
  if (togglePassBtn && passInput) {
    togglePassBtn.addEventListener('click', () => {
      showPassword = !showPassword;
      passInput.type = showPassword ? 'text' : 'password';
      togglePassBtn.textContent = showPassword ? '🙈' : '👁️';
    });
  }

  // Google / Gmail one-click login
  const googleBtn = document.getElementById('btnGoogleSignIn');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      handleGoogleLogin();
    });
  }

  // Quick fill chips
  const btnQuickStaff = document.getElementById('btnQuickStaff');
  if (btnQuickStaff) {
    btnQuickStaff.addEventListener('click', () => {
      selectedRole = 'staff';
      const staySignedIn = document.getElementById('authStaySignedIn')?.checked ?? true;
      store.login({
        name: 'Rahul Sharma',
        email: 'rahul.sharma@gmail.com',
        role: 'Store Staff',
        branchId: 'BR001',
        isAuthorized: false,
        staySignedIn
      });
    });
  }

  const btnQuickManager = document.getElementById('btnQuickManager');
  if (btnQuickManager) {
    btnQuickManager.addEventListener('click', () => {
      selectedRole = 'manager';
      const staySignedIn = document.getElementById('authStaySignedIn')?.checked ?? true;
      store.login({
        name: 'Store Manager',
        email: 'manager@mdfresh.in',
        role: 'Manager & Owner (Authorized)',
        branchId: 'BR001',
        isAuthorized: true,
        staySignedIn
      });
    });
  }

  // Main Form Submission
  const form = document.getElementById('authMainForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmit();
    });
  }
}

function updateLoginEmailDefaults() {
  const emailInput = document.getElementById('authEmailInput');
  const passInput = document.getElementById('authPasswordInput');
  if (emailInput && currentAuthMode === 'signin') {
    emailInput.value = selectedRole === 'manager' ? 'manager@mdfresh.in' : 'staff@mdfresh.in';
  }
  if (passInput && currentAuthMode === 'signin') {
    passInput.value = '';
  }
}

function showAlert(message, type = 'danger') {
  const alertBox = document.getElementById('authAlertBox');
  if (alertBox) {
    alertBox.textContent = message;
    alertBox.className = `auth-alert auth-alert-${type}`;
    alertBox.style.display = 'block';
  }
}

function handleFormSubmit() {
  const email = document.getElementById('authEmailInput')?.value.trim() || '';
  const password = document.getElementById('authPasswordInput')?.value.trim() || '';
  const staySignedIn = document.getElementById('authStaySignedIn')?.checked ?? true;
  const fullName = document.getElementById('authFullNameInput')?.value.trim() || '';
  const branchId = document.getElementById('authBranchSelect')?.value || 'BR001';

  if (!email || !email.includes('@')) {
    showAlert('Please enter a valid Gmail or work email address.');
    return;
  }

  if (!password || password.length < 3) {
    showAlert('Password must be at least 3 characters.');
    return;
  }

  if (currentAuthMode === 'signup' && !fullName) {
    showAlert('Please enter your full name.');
    return;
  }

  // If logging in as manager, verify manager password or secret PIN
  let isManager = selectedRole === 'manager';
  if (isManager && currentAuthMode === 'signin') {
    if (password !== '1902' && password !== 'manager123' && password !== 'admin') {
      showAlert('Invalid Manager Password or security code.');
      return;
    }
  }

  const displayName = currentAuthMode === 'signup' 
    ? fullName 
    : (isManager ? 'Store Manager' : (email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase())));

  store.login({
    name: displayName,
    email: email,
    role: isManager ? 'Manager & Owner (Authorized)' : 'Store Staff',
    branchId: branchId,
    isAuthorized: isManager,
    staySignedIn
  });
}

function handleGoogleLogin() {
  const staySignedIn = document.getElementById('authStaySignedIn')?.checked ?? true;
  const isManager = selectedRole === 'manager';
  const emailName = isManager ? 'Manager Account' : 'Store Staff User';

  store.login({
    name: emailName,
    email: isManager ? 'manager.mdfresh@gmail.com' : 'staff.mdfresh@gmail.com',
    role: isManager ? 'Manager & Owner (Authorized)' : 'Store Staff',
    branchId: 'BR001',
    isAuthorized: isManager,
    staySignedIn
  });
}

function renderAppOrUpdate() {
  const appRoot = document.getElementById('app');
  if (appRoot && !store.isAuthenticated) {
    appRoot.innerHTML = renderLoginView();
    setupLoginEvents();
  }
}
