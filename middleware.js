import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("authToken");
 

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If token is present, proceed to the requested route
  return NextResponse.next();
}

export const config = {
  matcher: "/ShoppingCart/:path+",
};


