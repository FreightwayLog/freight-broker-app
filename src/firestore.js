// src/firestore.js
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const loadsRef = collection(db, "loads");

export const getAllLoads = async () => {
  const snapshot = await getDocs(loadsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const saveLoad = async (load) => {
  if (load.id) {
    const docRef = doc(db, "loads", load.id);
    await updateDoc(docRef, load);
    return load.id;
  } else {
    const docRef = await addDoc(loadsRef, load);
    return docRef.id;
  }
};

export const deleteLoad = async (id) => {
  const docRef = doc(db, "loads", id);
  await deleteDoc(docRef);
};