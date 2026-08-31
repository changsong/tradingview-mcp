import { setSessionCookie, verifyPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  if (!body?.password || !verifyPassword(body.password)) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }
  await setSessionCookie();
  return Response.json({ ok: true });
}
