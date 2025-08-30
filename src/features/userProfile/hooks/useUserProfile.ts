import { useUserStore } from "@/store/user.store";
import { useCallback } from "react";
import {
  getUserProfile,
  updateUserProfile,
  updateUserProfilePhoto,
} from "../services/user.service";
import { toast } from "sonner";
import { UserProfileFormValues } from "../validators/userProfile.validators";
import { useNavigate } from "react-router-dom";

export const useUserProfile = () => {
  //store
  const { setProfile, setLoading, setLoadingUpdate } = useUserStore();
  //hooks
  const navigate = useNavigate();
  //get profile
  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getUserProfile();
      setProfile(data);
    } catch (err) {
      toast.error("Error al obtener perfil");
      console.error("❌ Error al obtener perfil:", err);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setProfile]);
  //update profile
  const updateProfile = useCallback(
    async (payload: UserProfileFormValues) => {
      try {
        setLoadingUpdate(true);
        await updateUserProfile(payload);
        toast.success("Perfil actualizado correctamente ✅");
        navigate("/dashboard");
      } catch (err) {
        toast.error("Error al actualizar el perfil");
        console.error("❌ Error al actualizar perfil:", err);
      } finally {
        setLoadingUpdate(false);
      }
    },
    [setLoadingUpdate, navigate]
  );
  //update profile|photo
  const updateProfilePhoto = useCallback(
    async (file: File) => {
      try {
        setLoadingUpdate(true);
        await updateUserProfilePhoto(file);
        toast.success("Foto de perfil actualizada ✅");
        return true;
      } catch (err) {
        toast.error("Error al actualizar la foto de perfil");
        console.error("❌ Error al actualizar foto:", err);
        return false;
      } finally {
        setLoadingUpdate(false);
      }
    },
    [setLoadingUpdate]
  );
  return { fetchProfile, updateProfile, updateProfilePhoto };
};
