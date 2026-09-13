import LoginForm from "@components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-blue-950 via-blue-800 to-blue-600 px-4">
      <div className="absolute left-[15%] top-[15%] h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute right-[20%] top-[25%] h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute bottom-[10%] left-[25%] h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute inset-[8%] rounded-2xl bg-blue-950/25" />

      <section className="relative z-10 w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            focusFlow
          </h1>
        </div>

        <h2 className="mb-6 text-2xl font-semibold text-white">
          Login
        </h2>

        <LoginForm />
      </section>
    </main>
  );
}