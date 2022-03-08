import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADjBeAT117mVy79-yzA1ygZEZl0LvKxik",
  authDomain: "audiophile-fe-mentor.firebaseapp.com",
  projectId: "audiophile-fe-mentor",
  storageBucket: "audiophile-fe-mentor.appspot.com",
  messagingSenderId: "254428975044",
  appId: "1:254428975044:web:f79f6cd08c78dee45fde91",
  measurementId: "G-WDS2BPQ67K"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
