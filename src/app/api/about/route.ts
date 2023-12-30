import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	console.log("REq", headers());
	// return Response.json({ data: searchParams.get("name"), status: 200 });
	return new Response(JSON.stringify({ data: searchParams.get("name") }), {
		status: 200,
		// headers: { referer: referer },
	});
}
