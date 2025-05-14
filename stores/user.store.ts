import { create } from "zustand";
import { getUserId } from "@/api/axios";

interface Products {
  type: string;
  id: string;
}

interface User {
  full_name: string;
  profile_photo: string;
  products: Products[];
}

export interface UserStore {
  user: User;
  loading: boolean;
  error: string | null;
  fetched: boolean;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: {
    full_name: "",
    profile_photo: "",
    products: [],
  },
  loading: true,
  error: null,
  fetched: false,
  fetchUser: async () => {
    const { fetched } = get();
    if (fetched) return;

    set({ loading: true, error: null });

    try {
      const response = await getUserId(1);
      set({ user: response.data, fetched: true });
    } catch (error: any) {
      set({ error: error.message || "Error fetching user" });
    } finally {
      set({ loading: false });
    }
  },
}));
