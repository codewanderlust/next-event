// useDeleteUser.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteApi } from "../../services/apiAuth";
import { useUser } from "./useUser";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const id = user?.id;

  const { mutate: deleteUser, isLoading } = useMutation({
    mutationFn: () => {
      // Fetch the current user before deleting
      return deleteApi(id); // Assuming deleteApi expects a user ID
    },

    onSuccess: () => {
      // Invalidate the user data in the cache after deletion
      queryClient.invalidateQueries(["user"]);
      // You might want to redirect the user or perform other actions after deletion
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { deleteUser, isLoading };
}
