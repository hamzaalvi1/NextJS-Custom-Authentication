import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const authRegex = /^\/api\/auth\/(.*)$/;
  
  if(authRegex.test(request.nextUrl.pathname)){
    
    console.log("condition successful");
 
  }
 
   
  
  //   return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: ["/api/auth/:path*"],
};
