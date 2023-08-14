import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const authRegex = /^\/api\/auth\/(.*)$/;
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/login" || path == "/signup";
  const token = request.cookies.get("token");

  if (isPublicPath && token?.value) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token?.value) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/", "/login", "/signup"],
};
