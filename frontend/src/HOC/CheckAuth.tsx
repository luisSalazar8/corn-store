import UseAuthUserContext from "@/context/authUser/AuthUserContext";
import { Navigate } from "react-router";

interface CheckAuth {
  children: React.ReactNode;
}

const CheckAuth = ({ children }: CheckAuth) => {
  const User = UseAuthUserContext();

  if (!User) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default CheckAuth;
