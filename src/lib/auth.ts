import { apiFetch } from "@lib/api";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@localtypes/auth";

export function login(data: LoginRequest) {
  return apiFetch<LoginResponse>("/users/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function register(data: RegisterRequest) {
  return apiFetch<RegisterResponse>("/users/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
