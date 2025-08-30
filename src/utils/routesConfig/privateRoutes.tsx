import { MainLayout } from "@/components/ui/layouts/mainLayout/MainLayout";
import { useAuthActions } from "@/features/auth/hooks/useAuthActions";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  //Hook
  const { isAuthenticated } = useAuthActions();

  // validation
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  const token = sessionStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
