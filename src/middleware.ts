import withAuth from "./middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function mainMidleware(req: NextRequest) {
    const res = NextResponse.next();
    return res;
}

export default withAuth(mainMidleware, ["/admin"]);