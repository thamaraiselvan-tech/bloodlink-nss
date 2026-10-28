// ================================================================
// BloodLink NSS Portal — Firebase Cloud Database Configuration
// Real-time Cloud Sync for Donors, Users, Events & Activities
// ================================================================

// ── 1. Your Firebase Configuration ──────────────────────────────
// To connect your real shared cloud database:
// 1. Go to https://console.firebase.google.com/
// 2. Click "Create a project" (e.g. "bloodlink-nss")
// 3. Click the Web icon (</>) to create a Web App
// 4. Copy the firebaseConfig object and paste it below:
const firebaseConfig = {
  apiKey: "AIzaSyB8mNJ5uLy6CyYyrsRCAcv0u_8T0bnHv_o",
  authDomain: "bloodlink-nss.firebaseapp.com",
  projectId: "bloodlink-nss",
  storageBucket: "bloodlink-nss.firebasestorage.app",
  messagingSenderId: "780413368682",
  appId: "1:780413368682:web:6834284bacb46e7a7fcd13",
  measurementId: "G-KB40CNX9VF"
};

// ── 2. Firebase Initialization & State ───────────────────────────
let db = null;
let isFirebaseReady = false;

(function initFirebase() {
  if (typeof firebase !== 'undefined' && firebaseConfig.apiKey && firebaseConfig.apiKey !== 'YOUR_API_KEY') {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      db = firebase.firestore();
      isFirebaseReady = true;
      console.log('✅ Firebase Cloud Database Connected: Multi-device real-time sync active.');
    } catch (err) {
      console.warn('Firebase initialization notice:', err);
    }
  } else {
    console.log('ℹ️ Running with browser storage. Set your Firebase credentials in js/firebase-config.js to activate cross-device cloud sync.');
  }
})();

// ── 3. Real-time Cloud Synchronizer ──────────────────────────────
const CloudSync = {
  initialized: false,

  init() {
    if (!isFirebaseReady || !db || this.initialized) return;
    this.initialized = true;

    // Realtime listener for Donors (Cloud is definitive source of truth)
    db.collection('donors').onSnapshot((snapshot) => {
      const cloudDonors = [];
      snapshot.forEach(doc => cloudDonors.push(doc.data()));

      // Mirror cloud directly into local cache (handles empty, additions & deletions)
      localStorage.setItem('bloodlink_donors', JSON.stringify(cloudDonors));

      // Auto-refresh active views if present
      if (typeof renderDonorsTable === 'function' && typeof loadDashboard === 'function') {
        loadDashboard();
      } else if (typeof render === 'function' && document.getElementById('donorListBody')) {
        render();
      } else if (typeof runSearch === 'function' && document.getElementById('donorsResultGrid')) {
        runSearch();
      }
    }, (error) => console.warn('CloudSync donors listener warning:', error));

    // Realtime listener for Users (Cloud is definitive source of truth)
    db.collection('users').onSnapshot((snapshot) => {
      const cloudUsers = [];
      snapshot.forEach(doc => cloudUsers.push(doc.data()));
      localStorage.setItem('bloodlink_users', JSON.stringify(cloudUsers));
    }, (error) => console.warn('CloudSync users listener warning:', error));

    // Realtime listener for Recent Activities
    db.collection('activities').orderBy('timestamp', 'desc').limit(30).onSnapshot((snapshot) => {
      const activities = [];
      snapshot.forEach(doc => activities.push(doc.data()));
      if (activities.length > 0) {
        localStorage.setItem('bloodlink_activities', JSON.stringify(activities));
        if (typeof loadDashboard === 'function') {
          loadDashboard();
        }
      }
    }, (error) => console.warn('CloudSync activities listener warning:', error));
  },

  // Save or update donor in cloud
  async saveDonor(donor) {
    if (!isFirebaseReady || !db) return;
    try {
      await db.collection('donors').doc(String(donor.id)).set(donor, { merge: true });
    } catch (err) {
      console.warn('CloudSync saveDonor error:', err);
    }
  },

  // Delete donor in cloud
  async deleteDonor(id) {
    if (!isFirebaseReady || !db) return;
    try {
      await db.collection('donors').doc(String(id)).delete();
    } catch (err) {
      console.warn('CloudSync deleteDonor error:', err);
    }
  },

  // Save or update user account in cloud
  async saveUser(user) {
    if (!isFirebaseReady || !db) return;
    try {
      await db.collection('users').doc(String(user.id)).set(user, { merge: true });
    } catch (err) {
      console.warn('CloudSync saveUser error:', err);
    }
  },

  // Delete user account in cloud
  async deleteUser(id) {
    if (!isFirebaseReady || !db) return;
    try {
      await db.collection('users').doc(String(id)).delete();
    } catch (err) {
      console.warn('CloudSync deleteUser error:', err);
    }
  },

  // Delete user by donorId in cloud
  async deleteUserByDonorId(donorId) {
    if (!isFirebaseReady || !db) return;
    try {
      const snapshot = await db.collection('users').where('donorId', '==', donorId).get();
      snapshot.forEach(doc => doc.ref.delete());
    } catch (err) {
      console.warn('CloudSync deleteUserByDonorId error:', err);
    }
  },

  // Log activity in cloud
  async logActivity(activity) {
    if (!isFirebaseReady || !db) return;
    try {
      await db.collection('activities').doc(String(activity.id)).set(activity, { merge: true });
    } catch (err) {
      console.warn('CloudSync logActivity error:', err);
    }
  }
};

// Auto start sync on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => CloudSync.init());
} else {
  CloudSync.init();
}
