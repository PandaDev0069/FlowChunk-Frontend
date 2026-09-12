import { apiFetch } from "./api";
import type { LoginRequest, TokenResponse } from "../types/auth";

export function login(data: LoginRequest) {
  return apiFetch<TokenResponse>("/users/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
