import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard", "/practice", "/profile", "/settings"];
const publicRoutes = ["/login", "/register", "/"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  // 3. Decrypt the session from the cookie
  const cookie = req.cookies.get("session")?.value;
  if (cookie) {
    console.log("🔍 Session cookie found, length:", cookie.length);
  } else if (isProtectedRoute) {
    console.log("⚠️ No session cookie found for protected route");
  }
  const session = await decrypt(cookie);

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    (path === "/login" || path === "/register")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
