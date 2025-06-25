import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const LogIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const LogOut = () => {
  return signOut(auth);
};
