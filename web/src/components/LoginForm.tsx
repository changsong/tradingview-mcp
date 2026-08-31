"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password })
    });
    setPending(false);
    if (!response.ok) {
      setError("Invalid password");
      return;
    }
    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <form className="login-card" onSubmit={submit}>
      <h1>TradingView Signals</h1>
      <label>
        Password
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} autoFocus />
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      <button type="submit" disabled={pending}>
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
