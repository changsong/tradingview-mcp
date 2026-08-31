import { getSession } from "@/lib/auth";
import { LoginForm } from "@/components/LoginForm";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  if (await getSession()) redirect("/dashboard");
  return (
    <main className="login-page">
      <LoginForm />
    </main>
  );
}
