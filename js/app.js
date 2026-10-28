// ================================================================
// BloodLink NSS Portal — Global App Script
// ================================================================

// ── Navbar scroll effect ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Hamburger menu ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close on nav link click (mobile)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── Highlight active nav link ─────────────────────────────────────
(function() {
  const links = document.querySelectorAll('.nav-link');
  const path  = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(l => {
    const href = l.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });
})();

// ── Auth state in navbar ──────────────────────────────────────────
(function() {
  const user = Auth.loadSession();
  const loginBtn    = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const navActions  = document.querySelector('.nav-actions');

  if (user && loginBtn && registerBtn) {
    const isVolunteerOrAdmin = (user.role === 'admin' || user.role === 'volunteer');
    const dashboardUrl = isVolunteerOrAdmin ? 'admin/index.html' : 'donor-portal.html';

    loginBtn.textContent  = `👋 ${user.name.split(' ')[0]}`;
    loginBtn.href = dashboardUrl;
    loginBtn.title = `Signed in as ${user.name} (${user.role === 'volunteer' ? 'Batch ' + (user.batchNo || '') : user.role})`;

    registerBtn.textContent = 'Dashboard';
    registerBtn.href = dashboardUrl;

    if (navActions && !document.getElementById('navLogoutBtn')) {
      const logoutBtn = document.createElement('button');
      logoutBtn.id = 'navLogoutBtn';
      logoutBtn.className = 'btn btn-outline btn-sm';
      logoutBtn.style.padding = '8px 16px';
      logoutBtn.style.fontSize = '0.82rem';
      logoutBtn.innerHTML = '🚪 Logout';
      logoutBtn.onclick = (e) => {
        e.preventDefault();
        Auth.logout();
      };
      navActions.appendChild(logoutBtn);
    }
  }
})();

// ── Toast notifications ───────────────────────────────────────────
function showToast(message, type = 'success', duration = 3500) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  toast.innerHTML = `${icons[type] || ''} ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; setTimeout(() => toast.remove(), 300); }, duration);
}

// ── Counter animation ─────────────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

// ── Intersection Observer for counters ────────────────────────────
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targets = entry.target.querySelectorAll('[data-count]');
      targets.forEach(el => animateCounter(el, parseInt(el.dataset.count)));
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.hero-stats, .impact-cards').forEach(el => counterObserver.observe(el));

// ── Modal utility ─────────────────────────────────────────────────
function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(overlay.id); });
});

// ── Format date helper ────────────────────────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}
function formatDateShort(dateStr) {
  const d = new Date(dateStr);
  return { day: d.getDate(), month: d.toLocaleString('en-IN', { month: 'short' }).toUpperCase() };
}
function daysSince(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  return Math.floor((now - d) / (1000 * 60 * 60 * 24));
}
function canDonateAgain(lastDonated) {
  return daysSince(lastDonated) >= 90;
}

// ── Password toggle ───────────────────────────────────────────────
document.querySelectorAll('.password-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
      btn.textContent = input.type === 'password' ? '👁️' : '🙈';
    }
  });
});

// ── Form validation helpers ───────────────────────────────────────
function showFieldError(inputId, message) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.style.borderColor = 'var(--red-500)';
  let err = input.parentElement.querySelector('.form-error');
  if (!err) { err = document.createElement('div'); err.className = 'form-error'; input.parentElement.appendChild(err); }
  err.textContent = message;
}
function clearFieldError(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.style.borderColor = '';
  const err = input.parentElement.querySelector('.form-error');
  if (err) err.remove();
}
function validatePhone(phone) { return /^(\+91\s?)?[6-9]\d{9}$/.test(phone.replace(/\s/g, '')); }
function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function validateRollNo(r)   { return /^[A-Z]{2}\d{5}$/.test(r.toUpperCase()); }

// ── Sticky scroll animation ───────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.step-card, .event-card, .donor-card, .testimonial-card, .impact-card, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});
