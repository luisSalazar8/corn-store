import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APIKEY,
  authDomain: import.meta.env.VITE_FB_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECTID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER,
  appId: import.meta.env.VITE_FB_APP,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
