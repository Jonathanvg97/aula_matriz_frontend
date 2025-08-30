// src/features/auth/hooks/useAuthActions.ts
import { useNavigate } from "react-router-dom";
import { AuthBodyInterface, AuthResponse } from "../types";
import { toast } from "sonner";
import { signIn } from "../services/auth.service";

export const useAuthActions = () => {
  const navigate = useNavigate();

  // 🔑 LOGIN
  const login = async (
    data: AuthBodyInterface
  ): Promise<AuthResponse | null> => {
    try {
      const response = await signIn(data);

      if (response?.status === "success") {
        sessionStorage.setItem("token", response.data.access);
        sessionStorage.setItem("refreshToken", response.data.refresh);

        navigate("/dashboard");
        return response;
      }

      return null;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message); 
      } else {
        toast.error("Ocurrió un error inesperado");
      }
      return null;
    }
  };

  // 🔑 LOGOUT
  const logout = async () => {
    sessionStorage.clear();
    navigate("/");
  };

  const isAuthenticated = !!sessionStorage.getItem("token");

  return {
    login,
    logout,
    isAuthenticated,
  };
};
