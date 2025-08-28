import { useNavigate } from "react-router-dom";
import { singIn } from "../services/auth.service";
import { AuthBodyInterface, AuthResponse } from "../types";
import { toast } from "sonner";

export const useAuthActions = () => {
  //Hooks
  const navigate = useNavigate();

  //Function login
  const login = async (
    data: AuthBodyInterface
  ): Promise<AuthResponse | null> => {
    try {
      const response = await singIn(data);

      if (response?.success) {
        sessionStorage.setItem("token", response.message.token);
        sessionStorage.setItem("refreshToken", response.message.refreshToken);

        navigate("/dashboard");
        return response;
      }

      return null;
    } catch (error) {
      if (
        error instanceof Error &&
        error.message === "Invalid email or password"
      ) {
        toast.error("Credenciales incorrectas");
      } else {
        toast.error("Error al iniciar sesión, intente nuevamente.");
        console.error("Error login:", error);
      }

      return null;
    }
  };

  //Function logout
  const logout = async () => {
    sessionStorage.clear();
    navigate("/");
  };

  return {
    login,
    logout,
  };
};
