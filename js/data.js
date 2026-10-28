// ================================================================
// BloodLink NSS Portal — Shared Data Store & Authentic NSS Volunteer Credentials
// ================================================================

// ── Official NSS Volunteers List ──────────────────────────────────
// Batch number acts as both Username & Password for volunteer portal login
const NSS_VOLUNTEERS = [
  { id: 0,  name: 'G. SRIRAM (Program Officer)', batchNo: '9445613698', dept: 'NSS Cell / Program Officer',            deptCode: 'OFFICER' },
  { id: 1,  name: 'K MUTHAMIZH CHELVAN',     batchNo: '281232', dept: 'Artificial Intelligence and Machine Learning', deptCode: 'AIML' },
  { id: 2,  name: 'S. SRISHANGARI',          batchNo: '281254', dept: 'Artificial Intelligence and Machine Learning', deptCode: 'AIML' },
  { id: 3,  name: 'RAGHUL N',                batchNo: '288075', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 4,  name: 'RISHE VARTHANAA S',       batchNo: '288080', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 5,  name: 'B. SAKTHIPRIYA',          batchNo: '288083', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 6,  name: 'SAMHITHA S',              batchNo: '288085', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 7,  name: 'SANJANA',                 batchNo: '288088', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 8,  name: 'SANTHIYA',                batchNo: '288089', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 9,  name: 'SARANYA S',               batchNo: '288091', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 10, name: 'SHALINI J',               batchNo: '288093', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 11, name: 'SINDHUJA S',              batchNo: '288098', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 12, name: 'SWETHA V',                batchNo: '288110', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 13, name: 'THAMARAI SELVAN S',       batchNo: '288112', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 14, name: 'THARAGAI S',              batchNo: '288114', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 15, name: 'VIJAYARAGAVAN V',         batchNo: '288121', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 16, name: 'M. VIJAYAROHINI',         batchNo: '288122', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 17, name: 'P. VIJI',                 batchNo: '288124', dept: 'Artificial Intelligence and Data Science',      deptCode: 'AIDS' },
  { id: 18, name: 'AAKASH P',                batchNo: '289001', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 19, name: 'AARTHI R',                batchNo: '289002', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 20, name: 'ABISHEK ANDREW M A',      batchNo: '289004', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 21, name: 'DHARUNA R A',             batchNo: '289014', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 22, name: 'DHIVASKAR R',             batchNo: '289015', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 23, name: 'JASHVANTHI N',            batchNo: '289022', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 24, name: 'MOHNISH SURYANARAYANAN',  batchNo: '289033', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 25, name: 'NANDINI V',               batchNo: '289034', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 26, name: 'PRAKYA SHREE K',          batchNo: '289039', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 27, name: 'PRITHISH S',              batchNo: '289042', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 28, name: 'VIVEK VIYAS N',           batchNo: '289060', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 29, name: 'YUVA BALAJI B',           batchNo: '289063', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 30, name: 'YOGARAJA D R',            batchNo: '289064', dept: 'Computer Science and Business System',          deptCode: 'CSBS' },
  { id: 31, name: 'DHARSHINI J',             batchNo: '282020', dept: 'Electronics and Communication Engineering',    deptCode: 'ECE'  },
  { id: 32, name: 'SAI RAM P',               batchNo: '282093', dept: 'Electronics and Communication Engineering',    deptCode: 'ECE'  },
  { id: 33, name: 'SRI HARIHARAN G',         batchNo: '282103', dept: 'Electronics and Communication Engineering',    deptCode: 'ECE'  },
  { id: 34, name: 'SRI HARINI S',            batchNo: '282104', dept: 'Electronics and Communication Engineering',    deptCode: 'ECE'  },
  { id: 35, name: 'SRI LUXME',               batchNo: '282105', dept: 'Electronics and Communication Engineering',    deptCode: 'ECE'  },
  { id: 36, name: 'VARUN KUMAR K',           batchNo: '282118', dept: 'Electronics and Communication Engineering',    deptCode: 'ECE'  },
  { id: 37, name: 'YOGESHWAR S',             batchNo: '282124', dept: 'Electronics and Communication Engineering',    deptCode: 'ECE'  },
  { id: 38, name: 'AKSARA K S',              batchNo: '284004', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 39, name: 'T. ANBUTHAMILAZHAKI',     batchNo: '284005', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 40, name: 'E. HARINI',               batchNo: '284011', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 41, name: 'JAMUNA',                  batchNo: '284014', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 42, name: 'MADHUMITHA P',            batchNo: '284024', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 43, name: 'MADHUMITHA R',            batchNo: '284025', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 44, name: 'NATHIYA',                 batchNo: '284030', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 45, name: 'PRATHIBA',                batchNo: '284034', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 46, name: 'S. PRIYADHARSHINI',       batchNo: '284037', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 47, name: 'SUBIKSHA',                batchNo: '284037', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 48, name: 'PRIYANKA R',              batchNo: '284038', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 49, name: 'RAJA LAKSHMI R',          batchNo: '284040', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 50, name: 'R.S. SAMYUKTA',           batchNo: '284045', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 51, name: 'SANJAYKUMAR. M',          batchNo: '284046', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 52, name: 'SATHYAN S',               batchNo: '284048', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 53, name: 'THARIKA G',               batchNo: '284054', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 54, name: 'VIDHIYASREE Y',           batchNo: '284059', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 55, name: 'VIGNESHWAR K',            batchNo: '284060', dept: 'Information Technology',                        deptCode: 'IT'   },
  { id: 56, name: 'MARI ESWARAN V',          batchNo: '286035', dept: 'Mechanical Engineering',                        deptCode: 'MECH' },
];

// ── User store (localStorage) ─────────────────────────────────────
const UserStore = {
  getDefaultUsers() {
    return [
      {
        id: 'officer_sriram',
        name: 'G. SRIRAM',
        username: '9445613698',
        batchNo: '9445613698',
        phone: '9445613698',
        password: '9445613698',
        role: 'admin',
        title: 'NSS Program Officer',
        dept: 'NSS Cell',
        deptCode: 'OFFICER',
        donorId: null
      },
      {
        id: 'admin',
        name: 'G. SRIRAM (Program Officer)',
        username: 'admin',
        batchNo: 'admin',
        phone: '9445613698',
        password: 'admin123',
        role: 'admin',
        title: 'NSS Program Officer',
        donorId: null
      },
      ...NSS_VOLUNTEERS.filter(v => v.id !== 0).map(v => ({
        id: v.id,
        name: v.name,
        username: v.batchNo,
        password: v.batchNo,
        batchNo: v.batchNo,
        role: 'volunteer',
        dept: v.dept,
        deptCode: v.deptCode,
        donorId: null
      }))
    ];
  },

  getCustomUsers() {
    const stored = localStorage.getItem('bloodlink_users');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return [];
      }
    }
    return [];
  },

  saveCustomUsers(users) {
    localStorage.setItem('bloodlink_users', JSON.stringify(users));
  },

  getAll() {
    const defaults = this.getDefaultUsers();
    const customs = this.getCustomUsers();
    return [...defaults, ...customs];
  },

  add(user) {
    const custom = this.getCustomUsers();
    const userEmail = (user.email || '').toString().toLowerCase().trim();
    const userRoll = (user.rollNo || '').toString().toUpperCase().trim();
    const userPhoneDigits = (user.phone || '').toString().replace(/\D/g, '');

    const existingIdx = custom.findIndex(u => {
      const uEmail = (u.email || '').toString().toLowerCase().trim();
      const uRoll = (u.rollNo || '').toString().toUpperCase().trim();
      const uPhoneDigits = (u.phone || '').toString().replace(/\D/g, '');
      return (
        (u.id && user.id && u.id === user.id) ||
        (uEmail && userEmail && uEmail === userEmail) ||
        (uRoll && userRoll && uRoll === userRoll) ||
        (uPhoneDigits && userPhoneDigits && uPhoneDigits.endsWith(userPhoneDigits) && userPhoneDigits.length >= 10)
      );
    });

    if (existingIdx > -1) {
      custom[existingIdx] = { ...custom[existingIdx], ...user };
    } else {
      if (!user.id) user.id = 'donor_' + Date.now();
      custom.push(user);
    }
    this.saveCustomUsers(custom);
    if (typeof CloudSync !== 'undefined' && CloudSync.saveUser) {
      CloudSync.saveUser(user);
    }
    return user;
  },

  update(id, updates) {
    const custom = this.getCustomUsers();
    const idx = custom.findIndex(u => u.id === id);
    if (idx > -1) {
      custom[idx] = { ...custom[idx], ...updates };
      this.saveCustomUsers(custom);
      if (typeof CloudSync !== 'undefined' && CloudSync.saveUser) {
        CloudSync.saveUser(custom[idx]);
      }
      return custom[idx];
    }
    return null;
  },

  delete(id) {
    const custom = this.getCustomUsers().filter(u => u.id !== id);
    this.saveCustomUsers(custom);
    if (typeof CloudSync !== 'undefined' && CloudSync.deleteUser) {
      CloudSync.deleteUser(id);
    }
  },

  deleteByDonorId(donorId) {
    const custom = this.getCustomUsers().filter(u => String(u.donorId) !== String(donorId));
    this.saveCustomUsers(custom);
    if (typeof CloudSync !== 'undefined' && CloudSync.deleteUserByDonorId) {
      CloudSync.deleteUserByDonorId(donorId);
    }
  }
};

const DB = {
  // ── Blood Groups ──────────────────────────────────────────────
  bloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'A1+', 'A1-', 'A1B+', 'A1B-'],

  // ── College Departments ─────────────────────────────────────────
  departments: [
    'Artificial Intelligence and Machine Learning (AIML)',
    'Artificial Intelligence and Data Science (AIDS)',
    'Computer Science and Business System (CSBS)',
    'Electronics and Communication Engineering (ECE)',
    'Information Technology (IT)',
    'Mechanical Engineering (MECH)',
    'Computer Science & Engineering (CSE)',
    'Electrical & Electronics Engineering (EEE)',
    'Civil Engineering (CIVIL)',
    'Other'
  ],

  // ── Donors Database (Cleared — ready for real donors data) ────
  donors: [],

  // ── Volunteers Directory ──────────────────────────────────────
  volunteers: NSS_VOLUNTEERS,

  // ── Events (Empty — awaiting real camp details) ────────────────
  events: [],

  // ── Urgent Blood Requests (Empty — awaiting real requests) ───
  urgentRequests: [],

  // ── Eligibility criteria ──────────────────────────────────────
  eligibility: [
    { label: 'Age', value: '18 – 65 years' },
    { label: 'Weight', value: 'Minimum 45 kg' },
    { label: 'Hemoglobin', value: 'Min 12.5 g/dL (Female), 13.0 g/dL (Male)' },
    { label: 'Blood Pressure', value: '100/60 – 160/100 mmHg' },
    { label: 'Pulse', value: '60–100 per minute, regular rhythm' },
    { label: 'Last Donation', value: '3 months gap required (Whole Blood)' },
    { label: 'Meal', value: 'Light meal at least 2 hours before donation' },
  ],

  // ── FAQs ──────────────────────────────────────────────────────
  faqs: [
    { q: 'Is blood donation safe?', a: 'Yes, completely safe. Sterile, single-use needles are used. There is no risk of infection.' },
    { q: 'How long does it take?', a: 'The whole process takes about 45 minutes. The actual blood draw is only 10-15 minutes.' },
    { q: 'How often can I donate?', a: 'Every 3 months (90 days) for whole blood donation.' },
    { q: 'Will I feel weak after donating?', a: 'You may feel slightly dizzy for a few minutes. Resting and drinking fluids helps recover quickly.' },
    { q: 'Who cannot donate blood?', a: 'People with certain medical conditions, those who recently had surgery, or those who are pregnant cannot donate. Please consult our volunteers.' },
    { q: 'What happens to my donated blood?', a: 'Your blood is tested, processed into components (RBC, plasma, platelets), and distributed to hospitals in need.' },
  ],

  // ── Blood compatibility ───────────────────────────────────────
  compatibility: {
    'O-':   { canDonateTo: ['O-','O+','A-','A+','B-','B+','AB-','AB+','A1-','A1+','A1B-','A1B+'], canReceiveFrom: ['O-'] },
    'O+':   { canDonateTo: ['O+','A+','B+','AB+','A1+','A1B+'],                                   canReceiveFrom: ['O-','O+'] },
    'A-':   { canDonateTo: ['A-','A+','AB-','AB+','A1-','A1+','A1B-','A1B+'],                      canReceiveFrom: ['O-','A-'] },
    'A+':   { canDonateTo: ['A+','AB+','A1+','A1B+'],                                              canReceiveFrom: ['O-','O+','A-','A+'] },
    'B-':   { canDonateTo: ['B-','B+','AB-','AB+','A1B-','A1B+'],                                  canReceiveFrom: ['O-','B-'] },
    'B+':   { canDonateTo: ['B+','AB+','A1B+'],                                                   canReceiveFrom: ['O-','O+','B-','B+'] },
    'AB-':  { canDonateTo: ['AB-','AB+','A1B-','A1B+'],                                            canReceiveFrom: ['O-','A-','B-','AB-'] },
    'AB+':  { canDonateTo: ['AB+','A1B+'],                                                        canReceiveFrom: ['O-','O+','A-','A+','B-','B+','AB-','AB+'] },
    'A1-':  { canDonateTo: ['A1-','A1+','A-','A+','AB-','AB+','A1B-','A1B+'],                      canReceiveFrom: ['O-','A-','A1-'] },
    'A1+':  { canDonateTo: ['A1+','A+','AB+','A1B+'],                                              canReceiveFrom: ['O-','O+','A-','A+','A1-','A1+'] },
    'A1B-': { canDonateTo: ['A1B-','A1B+','AB-','AB+'],                                            canReceiveFrom: ['O-','A-','A1-','B-','AB-','A1B-'] },
    'A1B+': { canDonateTo: ['A1B+','AB+'],                                                        canReceiveFrom: ['O-','O+','A-','A+','A1-','A1+','B-','B+','AB-','AB+','A1B-','A1B+'] },
  },

  // ── Users (System Admin + 56 NSS Volunteers + Registered Donors) ──
  get users() {
    return UserStore.getAll();
  }
};

// ── Auth helpers ─────────────────────────────────────────────────
const Auth = {
  currentUser: null,

  login(identifier, password) {
    if (!identifier || !password) return null;
    const idClean = (identifier || '').toString().trim().toLowerCase();
    const idCleanDigits = idClean.replace(/\D/g, '');
    const embeddedRoll = (idClean.match(/\d{5,8}/)?.[0]) || '';
    const passClean = (password || '').toString();

    // STRICT: Look for exact user matching identifier AND exact matching password
    const user = UserStore.getAll().find(u => {
      if (!u || !u.password) return false;
      const matchBatch    = (u.batchNo || '').toString().toLowerCase() === idClean;
      const matchUsername = (u.username || '').toString().toLowerCase() === idClean;
      const matchEmail    = (u.email || '').toString().toLowerCase() === idClean;
      const uPhoneDigits  = (u.phone || '').toString().replace(/\D/g, '');
      const matchPhone    = (uPhoneDigits && idCleanDigits && uPhoneDigits.endsWith(idCleanDigits) && idCleanDigits.length >= 10);
      const matchRoll     = (u.rollNo || '').toString().toLowerCase() === idClean || (embeddedRoll && (u.rollNo || '').toString().toLowerCase() === embeddedRoll);
      const idMatches     = matchBatch || matchUsername || matchEmail || matchPhone || matchRoll;

      // STRICT: Password must match exactly.
      return idMatches && u.password === passClean;
    });

    if (user) {
      this.currentUser = user;
      localStorage.setItem('bloodlink_user', JSON.stringify(user));
      return user;
    }
    return null;
  },

  async loginRemote(identifier, password) {
    if (!identifier || !password) return null;
    if (typeof isFirebaseReady === 'undefined' || !isFirebaseReady || typeof db === 'undefined' || !db) return null;
    const idClean = (identifier || '').toString().trim().toLowerCase();
    const idCleanDigits = idClean.replace(/\D/g, '');
    const embeddedRoll = (idClean.match(/\d{5,8}/)?.[0]) || '';
    const passClean = (password || '').toString();

    try {
      const snapshot = await db.collection('users').get();
      let matchedUser = null;
      const cloudUsers = [];
      snapshot.forEach(doc => {
        const u = doc.data();
        if (u) {
          cloudUsers.push(u);
          const matchBatch    = (u.batchNo || '').toString().toLowerCase() === idClean;
          const matchUsername = (u.username || '').toString().toLowerCase() === idClean;
          const matchEmail    = (u.email || '').toString().toLowerCase() === idClean;
          const uPhoneDigits  = (u.phone || '').toString().replace(/\D/g, '');
          const matchPhone    = (uPhoneDigits && idCleanDigits && uPhoneDigits.endsWith(idCleanDigits) && idCleanDigits.length >= 10);
          const matchRoll     = (u.rollNo || '').toString().toLowerCase() === idClean || (embeddedRoll && (u.rollNo || '').toString().toLowerCase() === embeddedRoll);
          const idMatches     = matchBatch || matchUsername || matchEmail || matchPhone || matchRoll;

          // STRICT: Password must match exactly.
          if (idMatches && u.password === passClean) {
            matchedUser = u;
          }
        }
      });

      if (cloudUsers.length > 0) {
        let localCustoms = [];
        try { localCustoms = JSON.parse(localStorage.getItem('bloodlink_users') || '[]'); } catch (e) {}
        const map = new Map();
        localCustoms.forEach(u => { if (u && u.id) map.set(String(u.id), u); });
        cloudUsers.forEach(u => { if (u && u.id) map.set(String(u.id), u); });
        localStorage.setItem('bloodlink_users', JSON.stringify(Array.from(map.values())));
      }

      if (matchedUser) {
        this.currentUser = matchedUser;
        localStorage.setItem('bloodlink_user', JSON.stringify(matchedUser));
        return matchedUser;
      }
    } catch (err) {
      console.warn('loginRemote lookup warning:', err);
    }
    return null;
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('bloodlink_user');
    const path = (window.location.pathname || '').replace(/\\/g, '/');
    const isInsideAdmin = path.includes('/admin/') || path.endsWith('/admin');
    window.location.href = isInsideAdmin ? '../login.html' : 'login.html';
  },

  loadSession() {
    const stored = localStorage.getItem('bloodlink_user');
    if (stored) {
      try {
        this.currentUser = JSON.parse(stored);
      } catch (e) {
        this.currentUser = null;
      }
    }
    return this.currentUser;
  },

  isLoggedIn() { return !!this.currentUser; },
  isAdmin() { return this.currentUser?.role === 'admin'; },
  isVolunteer() { return ['admin', 'volunteer'].includes(this.currentUser?.role); },
};

// ── Donor store (localStorage) ────────────────────────────────────
const DonorStore = {
  getAll() {
    const stored = localStorage.getItem('bloodlink_donors');
    if (stored !== null) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return [...DB.donors];
      }
    }
    return [...DB.donors];
  },
  save(donors) {
    localStorage.setItem('bloodlink_donors', JSON.stringify(donors));
  },
  add(donor) {
    const donors = this.getAll();
    if (!donor.id) donor.id = Date.now();
    donors.push(donor);
    this.save(donors);
    if (typeof CloudSync !== 'undefined' && CloudSync.saveDonor) {
      CloudSync.saveDonor(donor);
    }
    return donor;
  },
  update(id, updates) {
    const donors = this.getAll();
    const idx = donors.findIndex(d => String(d.id) === String(id));
    if (idx > -1) {
      donors[idx] = { ...donors[idx], ...updates };
      this.save(donors);
      if (typeof CloudSync !== 'undefined' && CloudSync.saveDonor) {
        CloudSync.saveDonor(donors[idx]);
      }
    }
  },
  delete(id) {
    const donors = this.getAll().filter(d => String(d.id) !== String(id));
    this.save(donors);
    if (typeof CloudSync !== 'undefined' && CloudSync.deleteDonor) {
      CloudSync.deleteDonor(id);
    }
  },
  clearAll() {
    this.save([]);
  },
  search({ bloodGroup, dept, available, query }) {
    return this.getAll().filter(d => {
      if (bloodGroup && d.blood !== bloodGroup) return false;
      if (dept && !(d.dept || '').toLowerCase().includes(dept.toLowerCase())) return false;
      if (available === true && !d.available) return false;
      if (query) {
        const q = query.toLowerCase();
        return (d.name || '').toLowerCase().includes(q) || (d.rollNo || '').toLowerCase().includes(q);
      }
      return true;
    });
  },
};

// ── Event store ───────────────────────────────────────────────────
const EventStore = {
  getAll() {
    const stored = localStorage.getItem('bloodlink_events');
    return stored ? JSON.parse(stored) : [...DB.events];
  },
  save(events) { localStorage.setItem('bloodlink_events', JSON.stringify(events)); },
  add(event) {
    const events = this.getAll();
    event.id = Date.now();
    events.push(event);
    this.save(events);
    return event;
  },
  delete(id) {
    const events = this.getAll().filter(e => e.id !== id);
    this.save(events);
  },
  getUpcoming() {
    const today = new Date();
    return this.getAll()
      .filter(e => new Date(e.date) >= today)
      .sort((a,b) => new Date(a.date) - new Date(b.date));
  },
};

// ── Activity store (localStorage) ─────────────────────────────────
const ActivityStore = {
  getAll() {
    const stored = localStorage.getItem('bloodlink_activities');
    return stored ? JSON.parse(stored) : [];
  },
  save(activities) {
    localStorage.setItem('bloodlink_activities', JSON.stringify(activities));
  },
  add(item) {
    const activities = this.getAll();
    const newActivity = {
      id: Date.now(),
      type: item.type || 'register',
      icon: item.icon || '📋',
      title: item.title,
      desc: item.desc,
      time: item.time || 'Just now',
      timestamp: Date.now()
    };
    activities.unshift(newActivity);
    this.save(activities.slice(0, 30));
    if (typeof CloudSync !== 'undefined' && CloudSync.logActivity) {
      CloudSync.logActivity(newActivity);
    }
    return newActivity;
  }
};

// ── Urgent Requests store (localStorage) ──────────────────────────
const UrgentRequestStore = {
  getAll() {
    const stored = localStorage.getItem('bloodlink_urgent');
    return stored ? JSON.parse(stored) : [...DB.urgentRequests];
  },
  save(requests) {
    localStorage.setItem('bloodlink_urgent', JSON.stringify(requests));
  },
  add(req) {
    const requests = this.getAll();
    req.id = Date.now();
    requests.unshift(req);
    this.save(requests);
    return req;
  },
  delete(id) {
    const requests = this.getAll().filter(r => r.id !== id);
    this.save(requests);
  }
};
