import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 3600000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export function proxy(request: NextRequest) {
  if (request.method === "POST") {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (isRateLimited(ip)) {
      return new NextResponse("Too many requests. Please try again later.", {
        status: 429,
        headers: { "Retry-After": "3600" },
      });
    }
  }

  const response = NextResponse.next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
