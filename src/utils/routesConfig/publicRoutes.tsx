import { useAuthActions } from "@/features/auth/hooks/useAuthActions";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  //Hook
  const { isAuthenticated } = useAuthActions();

  // validation
  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return <Outlet />;
};
