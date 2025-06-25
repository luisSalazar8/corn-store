import type { User } from "@firebase/auth";
import { createContext, useContext } from "react";

export const AuthContext = createContext<User | null>(null);

const UseAuthUserContext = () => useContext(AuthContext);

export default UseAuthUserContext;
