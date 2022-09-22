// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getApp, getApps } from 'firebase/app';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGQoDpGFa8xO2BcEvR4kYdypvjy4ieCq8',
  authDomain: 'something-special-dddf8.firebaseapp.com',
  projectId: 'something-special-dddf8',
  storageBucket: 'something-special-dddf8.appspot.com',
  messagingSenderId: '253056162141',
  appId: '1:253056162141:web:7a4cd99842a0adf5d130b4',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
