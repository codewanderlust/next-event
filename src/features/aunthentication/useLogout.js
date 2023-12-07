import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries("user"); // Invalidate user-related queries
      queryClient.setQueryData("user", null); // Reset user data in the cache
      // Optionally redirect user to home page or login
    },
    onError: (error) => {
      console.error("Logout failed", error);
    },
  });

  return { logout, isLoading };
}
