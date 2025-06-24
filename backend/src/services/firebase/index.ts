import admin from "firebase-admin";
import path from "path";
import fs from "fs";

function initFirebase() {
  if (admin.apps.length > 0) return;

  const keyPath = path.resolve(process.env.FIREBASE_KEY_PATH || "");
  if (!keyPath || !fs.existsSync(keyPath)) {
    throw new Error("FIREBASE_KEY_PATH is missing or invalid");
  }

  admin.initializeApp({
    credential: admin.credential.cert(keyPath),
  });
}

export { admin, initFirebase };
