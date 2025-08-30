import axios from "axios";
import { LOGIN_ENDPOINT } from "@/utils/paths";
import { AuthBodyInterface, AuthResponse } from "../types";

export const signIn = async (
  body: AuthBodyInterface
): Promise<AuthResponse | null> => {
  try {
    const { data } = await axios.post<AuthResponse>(LOGIN_ENDPOINT, body);

    if (data.status === "success") {
      localStorage.setItem("access_token", data.data.access);
      localStorage.setItem("refresh_token", data.data.refresh);
      return data;
    }

    return null;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error("Credenciales incorrectas");
      }
      throw new Error("Error en el servidor de autenticación");
    }
    throw error;
  }
};
