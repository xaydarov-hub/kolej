import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from 'firebase/firestore';
import app from './config';
import { COLLECTIONS } from '../data/constants';

export const db = getFirestore(app);

// ============================================================
// NEWS
// ============================================================

export const getPublishedNews = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, COLLECTIONS.NEWS),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch {
    return [];
  }
};

export const getAllNews = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS.NEWS),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch {
    return [];
  }
};

export const getNewsById = async (id) => {
  try {
    const docRef = doc(db, COLLECTIONS.NEWS, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch {
    return null;
  }
};

export const createNews = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.NEWS), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

export const updateNews = async (id, data) => {
  try {
    const docRef = doc(db, COLLECTIONS.NEWS, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteNews = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTIONS.NEWS, id));
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ============================================================
// DIRECTIONS
// ============================================================

export const getDirections = async () => {
  try {
    const snapshot = await getDocs(collection(db, COLLECTIONS.DIRECTIONS));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch {
    return [];
  }
};

export const getDirectionById = async (id) => {
  try {
    const docRef = doc(db, COLLECTIONS.DIRECTIONS, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch {
    return null;
  }
};

export const createDirection = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.DIRECTIONS), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

export const updateDirection = async (id, data) => {
  try {
    const docRef = doc(db, COLLECTIONS.DIRECTIONS, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteDirection = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTIONS.DIRECTIONS, id));
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ============================================================
// GALLERY
// ============================================================

export const getGallery = async (categoryFilter = null) => {
  try {
    let q;
    if (categoryFilter && categoryFilter !== 'all') {
      q = query(
        collection(db, COLLECTIONS.GALLERY),
        where('category', '==', categoryFilter),
        orderBy('createdAt', 'desc')
      );
    } else {
      q = query(
        collection(db, COLLECTIONS.GALLERY),
        orderBy('createdAt', 'desc')
      );
    }
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch {
    return [];
  }
};

export const createGalleryItem = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.GALLERY), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

export const deleteGalleryItem = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTIONS.GALLERY, id));
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ============================================================
// ADMISSIONS
// ============================================================

export const createAdmission = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.ADMISSIONS), {
      ...data,
      status: 'pending',
      createdAt: serverTimestamp(),
    });
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

export const getAdmissions = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS.ADMISSIONS),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch {
    return [];
  }
};

// ============================================================
// SETTINGS
// ============================================================

export const getSettings = async () => {
  try {
    const docRef = doc(db, COLLECTIONS.SETTINGS, 'main');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch {
    return null;
  }
};

export const updateSettings = async (data) => {
  try {
    const docRef = doc(db, COLLECTIONS.SETTINGS, 'main');
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ============================================================
// CONTACT MESSAGES
// ============================================================

export const createContactMessage = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      ...data,
      createdAt: serverTimestamp(),
      read: false,
    });
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

// ============================================================
// DASHBOARD STATS
// ============================================================

export const getDashboardStats = async () => {
  try {
    const [newsSnap, directionsSnap, gallerySnap, admissionsSnap] =
      await Promise.all([
        getDocs(collection(db, COLLECTIONS.NEWS)),
        getDocs(collection(db, COLLECTIONS.DIRECTIONS)),
        getDocs(collection(db, COLLECTIONS.GALLERY)),
        getDocs(collection(db, COLLECTIONS.ADMISSIONS)),
      ]);

    return {
      news: newsSnap.size,
      directions: directionsSnap.size,
      gallery: gallerySnap.size,
      admissions: admissionsSnap.size,
    };
  } catch {
    return { news: 0, directions: 0, gallery: 0, admissions: 0 };
  }
};
