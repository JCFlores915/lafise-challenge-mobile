import axios from "axios";
import { API_URL, TIMEOUT } from "@/constants/Constants";
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: TIMEOUT,
});

export const getUserId = async (userId: number) => api.get("/users/" + userId);
export const createTransaction = async (data: any) => api.post("/transactions", data);
export const getAcounts = async (accountId: number) => api.get("/accounts/" + accountId);
export const getAcountsTransactions = async (accountId: number) => api.get("/accounts/" + accountId + "/transactions");