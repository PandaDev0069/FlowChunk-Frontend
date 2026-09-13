"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegister } from "@hooks/use-auth";

export default function RegisterForm() {
  const router = useRouter();
  const registerMutation = useRegister();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");

    registerMutation.mutate(
      { username, email, password },
      {
        onSuccess: () => {
          router.push("/login");
        },
        onError: () => {
          // Handle registration error
        },
      },
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="username" className="text-sm text-white">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          required
          className="w-full rounded-md bg-white px-3 py-2 text-sm text-black outline-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="username@gmail.com"
          required
          className="w-full rounded-md bg-white px-3 py-2 text-sm text-black outline-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm text-white">
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setPasswordError("");
            }}
            placeholder="Password"
            required
            className="w-full rounded-md bg-white px-3 py-2 pr-10 text-sm text-black outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="confirm-password" className="text-sm text-white">
          Confirm Password
        </label>

        <div className="relative">
          <input
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              setPasswordError("");
            }}
            placeholder="Confirm password"
            required
            className="w-full rounded-md bg-white px-3 py-2 pr-10 text-sm text-black outline-none"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {passwordError && (
        <p className="text-sm text-red-300">
          {passwordError}
        </p>
      )}

      {registerMutation.isError && (
        <p className="text-sm text-red-300">
          Registration failed. Please check your information.
        </p>
      )}

      <button
        type="submit"
        disabled={registerMutation.isPending}
        className="w-full rounded-md bg-blue-950 py-2.5 font-semibold text-white transition hover:bg-blue-900 disabled:opacity-50"
      >
        {registerMutation.isPending ? "Creating account..." : "Create account"}
      </button>

      <p className="text-center text-xs text-white/80">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="font-semibold text-white hover:underline"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}