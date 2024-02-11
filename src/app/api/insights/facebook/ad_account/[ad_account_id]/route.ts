export async function GET(request: Request) {
  const AD_ACCOUNT_ID = getAdAccountId(request.url);
}

function getAdAccountId(url: string) {
  let url_segments = url.split("/");
  return `act_${url_segments[url_segments.length - 1]}`;
}
