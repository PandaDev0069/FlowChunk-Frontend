import { useMutation } from "@tanstack/react-query";
import { login, register } from "@lib/auth";
import type { LoginRequest, RegisterRequest } from "@localtypes/auth";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
  });
}
