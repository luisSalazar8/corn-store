import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
import { API_LINK } from "@/const/Api";

export const LogIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const LogOut = () => {
  return signOut(auth);
};

export const SignUp = async (fields: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_LINK}user`, fields, {
    headers: { "Content-Type": "application/json" },
  });

  return response.data;
};
