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
  const donors = DonorStore.getAll()
    .filter(d => d.donations > 0)
    .sort((a,b) => b.donations - a.donations)
    .slice(0, 4);

  if (donors.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:36px 20px;color:var(--gray-500);background:white;border-radius:var(--radius-xl);border:1px dashed var(--gray-200);width:100%;">
        <div style="font-size:2rem;margin-bottom:8px;">🩸</div>
        <p style="font-size:1.05rem;font-weight:700;color:var(--gray-800);margin-bottom:4px;">Donor Database Ready</p>
        <p style="font-size:0.85rem;color:var(--gray-400);">Sample data removed. Real donor records will appear here as they are added.</p>
        <a href="register.html" class="btn btn-outline btn-sm" style="margin-top:12px;display:inline-flex;">+ Register First Donor</a>
      </div>`;
    return;
  }

  const colors = ['#e11d48','#be123c','#9f1239','#881337','#c2185b','#ad1457'];
  container.innerHTML = donors.map((d, i) => `
    <div class="donor-card">
      <div class="donor-avatar" style="background:${colors[i % colors.length]}">${d.name.charAt(0)}</div>
      <div class="donor-name">${d.name}</div>
      <div class="donor-dept">${d.dept} · ${d.year} Year</div>
      <div class="donor-blood">${d.blood}</div>
      <div class="donor-donations">Donated <strong>${d.donations}×</strong></div>
    </div>
  `).join('');
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
});
