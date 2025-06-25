import { auth } from "@/config/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthUserContext";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthUserProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return "loading";
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
