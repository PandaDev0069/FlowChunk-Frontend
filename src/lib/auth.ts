import { apiFetch } from "@lib/api";
import type { LoginRequest, LoginResponse } from "@localtypes/auth";

export function login(data: LoginRequest) {
  return apiFetch<LoginResponse>("/users/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
