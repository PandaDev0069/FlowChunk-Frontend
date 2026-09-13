"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@hooks/use-auth";

export default function LoginForm() {
  const router = useRouter();
  const loginMutation = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: () => {
          // Handle login error
        },
      },
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
            onChange={(event) => setPassword(event.target.value)}
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

      <button
        type="button"
        className="text-xs text-white/80 hover:text-white"
      >
        Forgot Password?
      </button>

      {loginMutation.isError && (
        <p className="text-sm text-red-300">
          Login failed. Please check your email and password.
        </p>
      )}

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full rounded-md bg-blue-950 py-2.5 font-semibold text-white transition hover:bg-blue-900 disabled:opacity-50"
      >
        {loginMutation.isPending ? "Signing in..." : "Sign in"}
      </button>

      <p className="text-center text-xs text-white/80">
        Don&apos;t have an account yet?{" "}
        <button
          type="button"
          className="font-semibold text-white hover:underline"
        >
          Register for free
        </button>
      </p>
    </form>
  );

}

  
