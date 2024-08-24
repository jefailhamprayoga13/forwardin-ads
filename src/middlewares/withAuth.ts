import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const onlyAdmin =["/admin"]


export default function withAuth(middleware : NextMiddleware, requireAuth: string[] = []) {
    return async function (req: NextRequest, next: NextFetchEvent) {
        const pathname = req.nextUrl.pathname;
        if(requireAuth.includes(pathname)) {
            const token  = await getToken({
                req,
                secret: "gAAOOwtGMN/pdDGE3YkS7A=="
            });
            if(!token) {
                const url = new URL('/', req.url);
                return NextResponse.redirect(url);
            }
            if(token.role !== "admin" && onlyAdmin.includes(pathname)) {
                const url = new URL('/', req.url);
                return NextResponse.redirect(url);
            }
    }
    return middleware(req, next);
}}