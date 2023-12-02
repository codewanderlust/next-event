import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
    },

    onError: (error) => {
      console.error("Logout failed", error);
      // Handle error states, update UI, or show error messages
    },
  });
  return { logout, isLoading };
}

export default useLogout;
