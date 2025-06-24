import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export const LogIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
