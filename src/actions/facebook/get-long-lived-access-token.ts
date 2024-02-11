"use server";

import { OAUTH_BASE_URL } from "@/lib/api/facebook";

type LongLivedAccessTokenResponse = {
  access_token: string;
  token_type: "bearer";
  expires_in: number; //Number of seconds until the token expires
};

export async function getLongLivedAccessToken(access_token: string) {
  const long_lived_access_token_object: LongLivedAccessTokenResponse =
    await fetch(
      `${OAUTH_BASE_URL}?` +
        new URLSearchParams({
          grant_type: "fb_exchange_token",
          client_id: process.env.FACEBOOK_APP_CLIENT_ID,
          client_secret: process.env.FACEBOOK_APP_CLIENT_SECRET,
          fb_exchange_token: access_token,
        })
    ).then((response) => {
      return response.json();
    });
  return long_lived_access_token_object;
}
