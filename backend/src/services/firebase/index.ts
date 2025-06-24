import admin from "firebase-admin";
import path from "path";
import fs from "fs";

function initFirebase() {
  if (admin.apps.length > 0) return;

  const relativePath = process.env.relativePath;
  const keyPath = path.resolve(relativePath || "");
  if (!relativePath || !keyPath || !fs.existsSync(keyPath)) {
    throw new Error("firebase cert file is missing or invalid");
  }

  admin.initializeApp({
    credential: admin.credential.cert(keyPath),
  });
}

export { admin, initFirebase };
