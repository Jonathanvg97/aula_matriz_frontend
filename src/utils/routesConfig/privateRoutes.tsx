import { MainLayout } from "@/components/ui/layouts/mainLayout/MainLayout";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  //Hook
  const { isAuthenticated } = useAuth();

  // validation
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  // const token = sessionStorage.getItem("token");
  // if (!token) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
