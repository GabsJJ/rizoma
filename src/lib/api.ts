import axios from "axios";
import { useAuthStore } from "./zustandStore";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});