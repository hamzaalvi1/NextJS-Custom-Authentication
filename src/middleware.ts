import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // const authRegex = /^\/api\/auth\/(.*)$/;
  // if(authRegex.test(request.nextUrl.pathname)){
  //   console.log("condition successful");
  // }
  //   return NextResponse.redirect(new URL('/home', request.url))

  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/login" || path == "/signup";
  const token = request.cookies.get("access_token");

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
