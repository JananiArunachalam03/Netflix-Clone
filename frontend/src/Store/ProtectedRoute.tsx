import { Navigate } from "react-router-dom";
import { useAuthStore } from "../Store/AuthStore.tsx"; 
import { JSX } from "react/jsx-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthStore((state) => state.user);

  return user ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
