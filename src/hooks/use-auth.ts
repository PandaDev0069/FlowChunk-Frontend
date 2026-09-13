import { useMutation } from "@tanstack/react-query";
import { login } from "@lib/auth";
import type { LoginRequest } from "@localtypes/auth";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
  });
}
