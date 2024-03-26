import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; //default to auto
export async function GET(request: NextRequest) {
    //Something here, google maps API call to retrieve info
}
