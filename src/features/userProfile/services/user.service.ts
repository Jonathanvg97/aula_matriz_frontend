import axios from "axios";
import axiosInstance from "@/api/axiosInstance";
import {
  GET_PROFILEUSER_ENDPOINT,
  UPDATE_PROFILE_PHOTO_ENDPOINT,
  UPDATE_PROFILEUSER_ENDPOINT,
} from "@/utils/paths";
import { UserProfileInterface } from "../types/userResponse.interface";
import { UserProfileFormValues } from "../validators/userProfile.validators";

export const getUserProfile =
  async (): Promise<UserProfileInterface | null> => {
    try {
      const { data } = await axiosInstance.get(GET_PROFILEUSER_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        const basic = data.data.basic_info;
        const perfil: UserProfileInterface = {
          user: {
            first_name: basic.first_name,
            last_name: basic.last_name,
          },
          telefono: basic.telefono,
          tipo_usuario: data.data.tipo_usuario,
          biografia: basic.biografia,
          documento: basic.documento,
          redes_sociales: {
            linkedin: basic.redes_sociales?.linkedin,
            twitter: basic.redes_sociales?.twitter,
            github: basic.redes_sociales?.github,
            sitio_web: basic.redes_sociales?.sitio_web,
          },
          esta_verificado: data.data.esta_verificado,
        };

        return perfil;
      }

      return null;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("❌ Error al obtener el perfil:", error.response?.data);
        throw new Error(
          error.response?.data?.message ||
            "Error al obtener el perfil de usuario"
        );
      }
      throw error;
    }
  };

export const updateUserProfile = async (
  payload: UserProfileFormValues
): Promise<UserProfileInterface> => {
  const { data } = await axiosInstance.put<UserProfileInterface>(
    UPDATE_PROFILEUSER_ENDPOINT,
    payload
  );
  return data;
};

export const updateUserProfilePhoto = async (file: File): Promise<void> => {
  const formData = new FormData();
  formData.append("foto", file);

  const { data } = await axiosInstance.patch(
    UPDATE_PROFILE_PHOTO_ENDPOINT,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};
