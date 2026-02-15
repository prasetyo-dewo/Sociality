import { api } from "@/lib/me";

export const getMe = () => api("/api/me");
