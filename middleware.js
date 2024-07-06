import { NextResponse } from "next/server";
// import config from "./postcss.config.mjs";
export function middleware(req) {

//   if (req.nextUrl.pathname!="/Login") {
    return NextResponse.redirect(new URL("/Login", req.url));
//   }
}

export const config={
matcher:"/products/:path+"
}