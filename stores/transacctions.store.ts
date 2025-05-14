import { create } from "zustand";
import { getAcountsTransactions } from "@/api/axios";

interface amount {
  currency: string;
  value: number;
}
interface transaction {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: string;
  amount: amount;
  origin: string;
  destination: string;
  transaction_date: string;
}

interface transactions {
  page: number;
  size: number;
  next: number;
  total_count: number;
  items: transaction[];
}

export interface TransactionsStore {
  transactions: transactions;
  loading: boolean;
  error: string | null;
  fetched: boolean;
  fetchTransactions: (accountId: number) => Promise<void>;
}

export const useTransactionsStore = create<TransactionsStore>((set, get) => ({
  transactions: {
    page: 0,
    size: 0,
    next: 0,
    total_count: 0,
    items: [],
  },
  loading: false,
  error: null,
  fetched: false,
  fetchTransactions: async (accountId: number) => {
    const { fetched } = get();
    if (fetched) return;

    set({ loading: true, error: null });

    try {
      const response = await getAcountsTransactions(accountId);
      set({ transactions: response.data, fetched: true });
    } catch (error: any) {
      set({ error: error.message || "Error fetching transactions" });
    } finally {
      set({ loading: false });
    }
  },
}));

