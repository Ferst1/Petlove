// src/services/authService.js
import { auth, firestore } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const signup = async (name, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(firestore, 'users', user.uid), { name, email, avatar: '' });
  return { uid: user.uid, name, email, avatar: '' };
};

export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  const userDoc = await getDoc(doc(firestore, 'users', user.uid));
  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    throw new Error('No such user!');
  }
};

export const updateUser = async (userData) => {
  const userRef = doc(firestore, 'users', userData.uid);
  await setDoc(userRef, userData, { merge: true });
  return userData;
};