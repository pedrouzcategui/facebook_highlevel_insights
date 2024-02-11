import { NextResponse } from "next/server";
import { getAdAccountInsights } from "@/actions/facebook";

export async function GET(request: Request) {
  const ad_account_id = getAdAccountId(request.url);
  const insights = await getAdAccountInsights(ad_account_id);
  return NextResponse.json({ insights });
}

function getAdAccountId(url: string) {
  let url_segments = url.split("/");
  return `act_${url_segments[url_segments.length - 1]}`;
}
