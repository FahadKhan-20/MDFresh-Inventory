// PIN Authorization Modal Component for Restricted Access
import { store } from '../utils/store.js';
import { icon } from '../utils/icons.js';

export function renderAuthModal() {
  const isOpen = store.authModalOpen;

  return `
    <div id="authPinModalBackdrop" class="modal-backdrop ${isOpen ? 'open' : ''}">
      <div class="modal-content" style="max-width: 400px; text-align: center; border-radius: var(--radius-lg);">
        <div class="modal-body" style="padding: 32px 26px;">
          <!-- Lock Icon -->
          <div style="width: 54px; height: 54px; background: #FEF3C7; color: #D97706; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 1.5rem;">
            🔒
          </div>

          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--md-secondary-dark); margin-bottom: 6px;">
            Manager & Owner Access
          </h3>
          <p style="font-size: 0.82rem; color: var(--md-text-muted); margin-bottom: 22px; line-height: 1.4;">
            Staff access is restricted to Daily Stock Check & Branch Matrix. All other features require Manager or Owner authorization.
          </p>

          <form id="authPinForm">
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 0.76rem; font-weight: 700; color: var(--md-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
                Enter Security PIN
              </label>
              <input 
                type="password" 
                id="managerPinInput" 
                inputmode="numeric" 
                maxlength="6" 
                placeholder="••••" 
                style="width: 140px; text-align: center; font-size: 1.6rem; letter-spacing: 0.4em; padding: 8px 12px; border: 2px solid var(--md-border-strong); border-radius: var(--radius-md); outline: none; font-weight: 800; font-family: monospace; transition: border-color 0.2s;"
                autocomplete="off"
                required
              />
              <div id="pinErrorMsg" style="display: none; color: var(--status-danger-text); font-size: 0.78rem; font-weight: 700; margin-top: 8px;">
                Incorrect PIN. Please try again.
              </div>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 22px;">
              <button type="button" class="btn btn-secondary" id="btnCancelAuthModal" style="flex: 1;">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary" id="btnSubmitPin" style="flex: 1; font-weight: 800;">
                Unlock Access
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function setupAuthModalEvents() {
  const form = document.getElementById('authPinForm');
  const pinInput = document.getElementById('managerPinInput');
  const errorMsg = document.getElementById('pinErrorMsg');
  const cancelBtn = document.getElementById('btnCancelAuthModal');
  const backdrop = document.getElementById('authPinModalBackdrop');

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      store.closeAuthModal();
      if (errorMsg) errorMsg.style.display = 'none';
      if (pinInput) pinInput.value = '';
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        store.closeAuthModal();
        if (errorMsg) errorMsg.style.display = 'none';
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPin = pinInput ? pinInput.value.trim() : '';
      const success = store.unlockAuthorization(enteredPin);
      if (success) {
        if (errorMsg) errorMsg.style.display = 'none';
        if (pinInput) pinInput.value = '';
      } else {
        if (errorMsg) errorMsg.style.display = 'block';
        if (pinInput) {
          pinInput.focus();
          pinInput.select();
        }
      }
    });
  }
}
