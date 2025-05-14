import { create } from "zustand";
import { getAcountsTransactions, createTransaction } from "@/api/axios";
import { useAccountStore } from "@/stores/accounts.store";
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

interface createTransactionBody {
  origin: string;
  destination: string;
  amount: {
    currency: string;
    value: number;
  };
}
export interface TransactionsStore {
  transactions: transactions;
  loading: boolean;
  error: string | null;
  fetched: boolean;
  fetchTransactions: () => Promise<void>;
  postTransaction: (transaction: createTransactionBody) => Promise<void>;
}

export const useTransactionsStore = create<TransactionsStore>((set, get) => ({
  transactions: {
    page: 0,
    size: 0,
    next: 0,
    total_count: 0,
    items: [],
  },
  loading: true,
  error: null,
  fetched: false,
  fetchTransactions: async () => {
    const { fetched } = get();
    if (fetched) return;

    set({ loading: true, error: null });

    try {
      const response = await getAcountsTransactions(1);
      set({ transactions: response.data, fetched: true });
    } catch (error: any) {
      set({ error: error.message || "Error fetching transactions" });
    } finally {
      set({ loading: false });
    }
  },
  postTransaction: async (transaction: createTransactionBody) => {
    set({ loading: true, error: null });
    const { updateBalanceAccount } = useAccountStore.getState();
    try {
      const response = await createTransaction(transaction);
      set((state) => ({
        transactions: {
          ...state.transactions,
          items: [
            ...state.transactions.items,
            {
              ...response.data,
              amount: {
                currency: transaction.amount.currency,
                value: transaction.amount.value,
              },
              transaction_date: new Date().toISOString(),
            },
          ],
        },
      }));
      await updateBalanceAccount(transaction.amount.value);
    } catch (error: any) {
      set({ error: error.message || "Error creating transaction" });
    } finally {
      set({ loading: false });
    }
  },
}));
