import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginWithGoogle as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: () => loginApi(),

    onSuccess: (user) => {
      //allows us to manually set some data in to the react-query cache
      queryClient.setQueryData(["user"], user.user);
      //with replace true, we erase the login page from the history
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { login, isLoading };
}
