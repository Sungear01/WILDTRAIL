/**
 * WILDTRAIL - Login & Registration Script (js/login.js)
 * Implements: Tab Switcher, Password Strength Meter, Inline Validation (Blur),
 * Postel's Law (Auto-trim email), Mock Auth with Redirect, Double-Click Prevention.
 */

(function () {
  'use strict';

  // DOM Elements
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const viewLogin = document.getElementById('view-login');
  const viewRegister = document.getElementById('view-register');

  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');

  const loginEmail = document.getElementById('login-email');
  const loginPassword = document.getElementById('login-password');
  const btnSubmitLogin = document.getElementById('btn-submit-login');
  const btnGoogle = document.getElementById('btn-google-login');

  const regName = document.getElementById('reg-name');
  const regEmail = document.getElementById('reg-email');
  const regPassword = document.getElementById('reg-password');
  const regConfirm = document.getElementById('reg-confirm');
  const regTerms = document.getElementById('reg-terms');
  const btnSubmitRegister = document.getElementById('btn-submit-register');

  const strengthBar = document.getElementById('strength-bar');
  const strengthLabel = document.getElementById('strength-label');

  // URL redirect target
  const urlParams = new URLSearchParams(window.location.search);
  const redirectTarget = urlParams.get('redirect') || 'index.html';

  // ============================================================
  // 1. TAB SWITCHER
  // ============================================================
  function switchTab(tab) {
    if (tab === 'register') {
      tabRegister.classList.add('active');
      tabRegister.setAttribute('aria-selected', 'true');
      tabLogin.classList.remove('active');
      tabLogin.setAttribute('aria-selected', 'false');

      viewRegister.classList.add('active');
      viewLogin.classList.remove('active');
      if (regName) regName.focus();
    } else {
      tabLogin.classList.add('active');
      tabLogin.setAttribute('aria-selected', 'true');
      tabRegister.classList.remove('active');
      tabRegister.setAttribute('aria-selected', 'false');

      viewLogin.classList.add('active');
      viewRegister.classList.remove('active');
      if (loginEmail) loginEmail.focus();
    }
  }

  if (tabLogin) tabLogin.addEventListener('click', () => switchTab('login'));
  if (tabRegister) tabRegister.addEventListener('click', () => switchTab('register'));

  // Switch to register if URL has #register or ?tab=register
  if (window.location.hash === '#register' || urlParams.get('tab') === 'register') {
    switchTab('register');
  }

  // ============================================================
  // 2. SHOW / HIDE PASSWORD TOGGLE
  // ============================================================
  document.querySelectorAll('.btn-toggle-pwd').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      const iconContainer = btn.querySelector('svg');
      if (iconContainer) {
        if (isPassword) {
          btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`;
        } else {
          btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
        }
      }
    });
  });

  // ============================================================
  // 3. PASSWORD STRENGTH METER
  // ============================================================
  function evaluatePasswordStrength(password) {
    if (!password) {
      return { score: 0, text: 'ความปลอดภัยของรหัสผ่าน: ยังไม่ได้กรอก', color: 'transparent', width: '0%' };
    }
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 1) {
      return { score: 1, text: 'ความปลอดภัย: ระดับเริ่มต้น (ควรเพิ่มความยาวหรือตัวเลข)', color: '#EF4444', width: '25%' };
    } else if (score <= 3) {
      return { score: 2, text: 'ความปลอดภัย: ปานกลาง (สามารถใช้งานได้)', color: '#F59E0B', width: '60%' };
    } else {
      return { score: 3, text: 'ความปลอดภัย: แข็งแรงมาก (ยอดเยี่ยม)', color: '#22C55E', width: '100%' };
    }
  }

  if (regPassword && strengthBar && strengthLabel) {
    regPassword.addEventListener('input', () => {
      const pwd = regPassword.value;
      const res = evaluatePasswordStrength(pwd);
      strengthBar.style.width = res.width;
      strengthBar.style.backgroundColor = res.color;
      strengthLabel.textContent = res.text;
    });
  }

  // ============================================================
  // 4. INLINE VALIDATION UTILITIES (Postel's Law & Blur check)
  // ============================================================
  function validateEmail(email) {
    // Postel's Law: trim whitespace and check format
    const clean = email.trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(clean);
  }

  function setFieldError(groupEl, isError) {
    if (!groupEl) return;
    if (isError) {
      groupEl.classList.add('has-error');
    } else {
      groupEl.classList.remove('has-error');
    }
  }

  // Setup Blur Validation for Login
  if (loginEmail) {
    loginEmail.addEventListener('blur', () => {
      const valid = validateEmail(loginEmail.value);
      setFieldError(document.getElementById('group-login-email'), !valid);
    });
    loginEmail.addEventListener('input', () => {
      if (validateEmail(loginEmail.value)) {
        setFieldError(document.getElementById('group-login-email'), false);
      }
    });
  }

  if (loginPassword) {
    loginPassword.addEventListener('blur', () => {
      const valid = loginPassword.value.length > 0;
      setFieldError(document.getElementById('group-login-password'), !valid);
    });
    loginPassword.addEventListener('input', () => {
      if (loginPassword.value.length > 0) {
        setFieldError(document.getElementById('group-login-password'), false);
      }
    });
  }

  // Setup Blur Validation for Registration
  if (regName) {
    regName.addEventListener('blur', () => {
      setFieldError(document.getElementById('group-reg-name'), regName.value.trim().length === 0);
    });
    regName.addEventListener('input', () => {
      if (regName.value.trim().length > 0) setFieldError(document.getElementById('group-reg-name'), false);
    });
  }

  if (regEmail) {
    regEmail.addEventListener('blur', () => {
      setFieldError(document.getElementById('group-reg-email'), !validateEmail(regEmail.value));
    });
    regEmail.addEventListener('input', () => {
      if (validateEmail(regEmail.value)) setFieldError(document.getElementById('group-reg-email'), false);
    });
  }

  if (regPassword) {
    regPassword.addEventListener('blur', () => {
      setFieldError(document.getElementById('group-reg-password'), regPassword.value.length < 8);
    });
    regPassword.addEventListener('input', () => {
      if (regPassword.value.length >= 8) setFieldError(document.getElementById('group-reg-password'), false);
    });
  }

  if (regConfirm) {
    regConfirm.addEventListener('blur', () => {
      const matches = regConfirm.value === regPassword.value && regConfirm.value.length > 0;
      setFieldError(document.getElementById('group-reg-confirm'), !matches);
    });
    regConfirm.addEventListener('input', () => {
      if (regConfirm.value === regPassword.value) setFieldError(document.getElementById('group-reg-confirm'), false);
    });
  }

  if (regTerms) {
    regTerms.addEventListener('change', () => {
      setFieldError(document.getElementById('group-reg-terms'), !regTerms.checked);
    });
  }

  // ============================================================
  // 5. LOGIN SUBMISSION (Loading Spinner, Double-Click Prevention)
  // ============================================================
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();

      // Postel's Law: Trim and lower case email
      const email = loginEmail.value.trim().toLowerCase();
      const pwd = loginPassword.value;

      const emailValid = validateEmail(email);
      const pwdValid = pwd.length > 0;

      setFieldError(document.getElementById('group-login-email'), !emailValid);
      setFieldError(document.getElementById('group-login-password'), !pwdValid);

      if (!emailValid || !pwdValid) {
        if (!emailValid) loginEmail.focus();
        else loginPassword.focus();
        return;
      }

      // Prevent double submit & show loading state
      btnSubmitLogin.disabled = true;
      const originalText = btnSubmitLogin.innerHTML;
      btnSubmitLogin.innerHTML = `
        <svg class="spin-animate" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
        <span>กำลังเข้าสู่ระบบ...</span>
      `;

      // Mock login process
      setTimeout(() => {
        // Derive clean user name from email prefix if persona not explicitly known
        let userName = email.split('@')[0];
        userName = userName.charAt(0).toUpperCase() + userName.slice(1);
        if (email.includes('ton')) userName = 'ต้น';

        // Save user to localStorage (NEVER store password!)
        if (window.WILDTRAIL && window.WILDTRAIL.setUser) {
          window.WILDTRAIL.setUser(userName, email);
          window.WILDTRAIL.showToast(`เข้าสู่ระบบสำเร็จ ยินดีต้อนรับคุณ ${userName}`);
        }

        setTimeout(() => {
          window.location.href = redirectTarget;
        }, 600);
      }, 700);
    });
  }

  // ============================================================
  // 6. REGISTRATION SUBMISSION
  // ============================================================
  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = regName.value.trim();
      const email = regEmail.value.trim().toLowerCase();
      const pwd = regPassword.value;
      const confirm = regConfirm.value;
      const terms = regTerms.checked;

      const nameValid = name.length > 0;
      const emailValid = validateEmail(email);
      const pwdValid = pwd.length >= 8;
      const confirmValid = confirm === pwd && confirm.length > 0;
      const termsValid = terms;

      setFieldError(document.getElementById('group-reg-name'), !nameValid);
      setFieldError(document.getElementById('group-reg-email'), !emailValid);
      setFieldError(document.getElementById('group-reg-password'), !pwdValid);
      setFieldError(document.getElementById('group-reg-confirm'), !confirmValid);
      setFieldError(document.getElementById('group-reg-terms'), !termsValid);

      if (!nameValid || !emailValid || !pwdValid || !confirmValid || !termsValid) {
        if (!nameValid) regName.focus();
        else if (!emailValid) regEmail.focus();
        else if (!pwdValid) regPassword.focus();
        else if (!confirmValid) regConfirm.focus();
        return;
      }

      btnSubmitRegister.disabled = true;
      btnSubmitRegister.innerHTML = `
        <svg class="spin-animate" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
        <span>กำลังสร้างบัญชีผู้ใช้...</span>
      `;

      setTimeout(() => {
        if (window.WILDTRAIL && window.WILDTRAIL.setUser) {
          window.WILDTRAIL.setUser(name, email);
          window.WILDTRAIL.showToast(`สร้างบัญชีสำเร็จ ยินดีต้อนรับคุณ ${name}`);
        }

        setTimeout(() => {
          window.location.href = redirectTarget;
        }, 600);
      }, 700);
    });
  }

  // Google Demo Sign In
  if (btnGoogle) {
    btnGoogle.addEventListener('click', () => {
      btnGoogle.disabled = true;
      btnGoogle.innerHTML = `
        <svg class="spin-animate" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
        <span>กำลังเชื่อมต่อกับ Google...</span>
      `;
      setTimeout(() => {
        if (window.WILDTRAIL && window.WILDTRAIL.setUser) {
          window.WILDTRAIL.setUser('ต้น', 'ton.outdoor@gmail.com');
          window.WILDTRAIL.showToast('เข้าสู่ระบบด้วย Google สำเร็จ');
        }
        setTimeout(() => {
          window.location.href = redirectTarget;
        }, 500);
      }, 600);
    });
  }

})();
