import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  //Hook
  const { isAuthenticated } = useAuth();

  // validation
  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return <Outlet />;
};
