import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHmac, createHash, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "tv_web_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function secret() {
  const value = process.env.WEB_SESSION_SECRET;
  if (!value || value.length < 24) {
    throw new Error("WEB_SESSION_SECRET must be set to a long random value.");
  }
  return value;
}

function base64url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function hashPassword(password: string) {
  return createHash("sha256").update(password).digest("hex");
}

export function verifyPassword(password: string) {
  const expected = process.env.WEB_ADMIN_PASSWORD_HASH;
  if (!expected) {
    throw new Error("WEB_ADMIN_PASSWORD_HASH is not configured.");
  }
  const normalized = expected.startsWith("sha256:") ? expected.slice("sha256:".length) : expected;
  const actual = hashPassword(password);
  return normalized.length === actual.length && timingSafeEqual(Buffer.from(actual), Buffer.from(normalized));
}

export function createSessionToken() {
  const payload = JSON.stringify({ sub: "admin", exp: Date.now() + SESSION_TTL_MS });
  const encoded = base64url(payload);
  return `${encoded}.${sign(encoded)}`;
}

export function verifySessionToken(token?: string) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = sign(payload);
  if (signature.length !== expected.length || !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { exp?: number };
    return typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

export async function setSessionCookie() {
  const store = await cookies();
  store.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000
  });
}

export async function getSession() {
  const store = await cookies();
  return verifySessionToken(store.get(COOKIE_NAME)?.value);
}

export async function requireSession() {
  if (!(await getSession())) redirect("/login");
}

export async function requireApiSession() {
  if (!(await getSession())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
