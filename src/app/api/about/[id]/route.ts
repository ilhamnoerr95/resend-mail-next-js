import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
	const { searchParams } = new URL(req.url);
	const { id } = params;
	console.log("req ===>", req);
	// queryString.stringify({});
	return Response.json({ data: "test " + id });
}
