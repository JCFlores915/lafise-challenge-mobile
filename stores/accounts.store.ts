import { create } from "zustand";
import { getAcounts } from "@/api/axios";

interface Account {
  alias: string;
  account_number: number;
  balance: number;
  currency: string;
}

interface AccountStore {
  accounts: Account;
  loading: boolean;
  error: string | null;
  fetched: boolean;
  fetchAccounts: () => Promise<void>;
  updateBalanceAccount: (amount: number) => Promise<void>;
}

export const useAccountStore = create<AccountStore>((set, get) => ({
  accounts: {
    alias: "",
    account_number: 0,
    balance: 0,
    currency: "",
  },
  loading: true,
  error: null,
  fetched: false,
  fetchAccounts: async () => {
    const { fetched } = get();
    if (fetched) return;

    set({ loading: true, error: null });

    try {
      const response = await getAcounts(1);
      set({ accounts: response.data, fetched: true });
    } catch (error: any) {
      set({ error: error.message || "Error fetching accounts" });
    } finally {
      set({ loading: false });
    }
  },
  updateBalanceAccount: async (amount: number) => {
    set((state) => ({
      accounts: {
        ...state.accounts,
        balance: state.accounts.balance - amount,
      },
    }));
  },
}));
