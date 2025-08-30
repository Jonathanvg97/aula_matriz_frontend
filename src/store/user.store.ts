import { create } from "zustand";
import { UserProfileInterface } from "@/features/userProfile/types/userResponse.interface";

interface UserState {
  profile: UserProfileInterface | null;
  loading: boolean;
  loadingUpdate: boolean;
  setProfile: (profile: UserProfileInterface | null) => void;
  setLoading: (loading: boolean) => void;
  setLoadingUpdate: (loading: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  loading: false,
  loadingUpdate: false,
  setProfile: (profile) => set({ profile }),
  setLoading: (loading) => set({ loading }),
  setLoadingUpdate: (loading) => set({ loading }),
}));
