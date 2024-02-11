import { getLongLivedAccessToken } from "@/actions/facebook/get-long-lived-access-token";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const long_lived_access_token_object = await getLongLivedAccessToken(
    "EAAD2ow8ZCC4ABOzyRMdAQBJgl4CMl4pJUoJ9LZBAPy4cGNJe1Pb9tahuFxHSTh9nrpTZCbAhFny3BanwYrippYJRgoU5c1zxeLd0lnPx2hueLdRUGZCxOWsxj0PSrBw4pK6oNLhSt4O2SYHOLkmVk1YYa83SBM6sZC9uL9dxSnZB8Vb0ZBDwnsZBRdhH18jZAZAigNrEw3MvPJXnZA5jlMlJMSq3nbqGCmWapBfZAQZDZD"
  );
  return NextResponse.json({ long_lived_access_token_object });
}

function getAdAccountId(url: string) {
  let url_segments = url.split("/");
  return `act_${url_segments[url_segments.length - 1]}`;
}
