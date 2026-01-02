import {
  mutationOptions,
  QueryClient,
  queryOptions,
} from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const createQuery = <T = any>(url: string, key: string) =>
  queryOptions({
    queryKey: [key],
    staleTime: Infinity,
    retry: 1,
    queryFn: async () => {
      const response = await fetch(url, {
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message);

      const { success, message, data } = await result;

      if (!success) throw new Error(message);

      return data as T;
    },
  });

export const createMutation = <T = any, R = any>(
  url: string,
  method: "POST" | "PATCH" | "DELETE" = "POST",
) =>
  mutationOptions({
    mutationFn: async (payload: T) => {
      const response = await fetch(url, {
        method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message);

      const { success, message, data } = await result;

      if (!success) throw new Error(message);

      return data as R;
    },
  });
