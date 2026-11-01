// ================================================================
// BloodLink — Home Page Script
// ================================================================

// ── Events preview ────────────────────────────────────────────────
function renderEventsPreview() {
  const grid = document.getElementById('eventsPreviewGrid');
  if (!grid) return;
  const events = EventStore.getUpcoming().slice(0, 3);
  if (events.length === 0) {
    grid.innerHTML = '<p style="color:var(--gray-400);text-align:center;width:100%;padding:40px 0;">No upcoming events. Check back soon!</p>';
    return;
  }
  grid.innerHTML = events.map(ev => {
    const d = formatDateShort(ev.date);
    const pct = Math.round((ev.filledSlots / ev.totalSlots) * 100);
    return `
    <div class="event-card">
      <div class="event-header">
        <div class="event-date-box">
          <div class="month">${d.month}</div>
          <div class="day">${d.day}</div>
        </div>
        <div class="event-title-wrap">
          <h3>${ev.title}</h3>
          <span>${ev.organizer}</span>
        </div>
      </div>
      <div class="event-body">
        <div class="event-meta">
          <div class="event-meta-item"><span>🕐</span><span>${ev.time}</span></div>
          <div class="event-meta-item"><span>📍</span><span>${ev.venue}</span></div>
        </div>
        <div class="event-slots">
          <span class="slots-label">${ev.filledSlots} registered</span>
          <div class="slots-bar"><div class="slots-fill" style="width:${pct}%"></div></div>
          <span class="slots-count">${ev.totalSlots - ev.filledSlots} left</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── Top donors carousel ───────────────────────────────────────────
function renderTopDonors() {
  const container = document.getElementById('donorsCarousel');
  if (!container) return;
  const allDonors = typeof DonorStore !== 'undefined' ? DonorStore.getAll() : [];

  if (allDonors.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:48px 24px;color:var(--gray-500);background:white;border-radius:var(--radius-2xl);border:1px dashed var(--gray-200);width:100%;box-shadow:var(--shadow-sm);">
        <div style="font-size:2.8rem;margin-bottom:12px;">🩸</div>
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--gray-900);margin-bottom:6px;font-family:var(--font-display);">Join Our Campus Donor Community</h3>
        <p style="font-size:0.9rem;color:var(--gray-500);max-width:440px;margin:0 auto 18px;line-height:1.6;">
          Be someone's lifeline today. Register as an NSS student donor to help patients in emergency need across our college and community.
        </p>
        <a href="register.html" class="btn btn-primary btn-sm" style="display:inline-flex;align-items:center;gap:6px;">
          <span>➕</span> Register as a Donor
        </a>
      </div>`;
    return;
  }

  // Prioritize active donors with donations, then newly registered donors
  const donors = [...allDonors]
    .sort((a,b) => (b.donations || 0) - (a.donations || 0) || (b.id || 0) - (a.id || 0))
    .slice(0, 4);

  const colors = ['#e11d48','#be123c','#9f1239','#881337','#c2185b','#ad1457'];
  container.innerHTML = donors.map((d, i) => {
    const donationCount = d.donations || 0;
    const donationBadge = donationCount > 0
      ? `Donated <strong>${donationCount}×</strong>`
      : `<span style="color:#059669;font-weight:700;">✓ Ready to Donate</span>`;

    return `
      <div class="donor-card">
        <div class="donor-avatar" style="background:${colors[i % colors.length]}">${(d.name || 'D').charAt(0).toUpperCase()}</div>
        <div class="donor-name">${d.name}</div>
        <div class="donor-dept">${d.dept || ''} ${d.year ? '· ' + d.year : ''}</div>
        <div class="donor-blood">${d.blood}</div>
        <div class="donor-donations">${donationBadge}</div>
      </div>
    `;
  }).join('');
}

// ── Urgency banner dynamic check ──────────────────────────────────
function checkUrgencyBanner() {
  const banner = document.getElementById('urgencyBanner');
  if (!banner) return;
  const urgentReqs = typeof UrgentRequestStore !== 'undefined' ? UrgentRequestStore.getAll() : [];
  if (urgentReqs.length > 0) {
    const latest = urgentReqs[0];
    const details = document.getElementById('urgencyDetails');
    if (details) details.textContent = `${latest.bloodGroup || 'Blood'} urgently needed for ${latest.patient || 'emergency'}`;
    banner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }
}

// ── Hero and impact stats sync ────────────────────────────────────
function syncHomeStats() {
  const donors = typeof DonorStore !== 'undefined' ? DonorStore.getAll() : [];
  const events = typeof EventStore !== 'undefined' ? EventStore.getAll() : [];
  const heroDonor = document.getElementById('heroDonorCount');
  if (heroDonor) {
    heroDonor.dataset.count = donors.length;
    heroDonor.textContent = donors.length;
  }
  const heroCamps = document.getElementById('heroCampsOrganized');
  if (heroCamps) {
    heroCamps.dataset.count = events.length;
    heroCamps.textContent = events.length;
  }
  const impactCamps = document.getElementById('impactCamps');
  if (impactCamps) {
    impactCamps.dataset.count = events.length;
    impactCamps.textContent = events.length;
  }
}

// ── Initialize ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderEventsPreview();
  renderTopDonors();
  checkUrgencyBanner();
  syncHomeStats();

  // Re-check after 500ms and 1500ms so cloud-synced donors immediately display
  setTimeout(() => {
    renderTopDonors();
    syncHomeStats();
    checkUrgencyBanner();
  }, 500);

  setTimeout(() => {
    renderTopDonors();
    syncHomeStats();
    checkUrgencyBanner();
  }, 1500);
});
