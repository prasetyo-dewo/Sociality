const BASE_URL =
  "https://social-media-be-400174736012.asia-southeast2.run.app/api";

export const api = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/me`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  const data = await res.json();
  if (!res.ok) throw data;
  return data;
};
