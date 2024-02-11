"use server";

import { OAUTH_BASE_URL } from "@/lib/api/facebook";

type Response = {
  access_token: string;
  token_type: string;
};

type Error = {
  message: string;
};

export const generateAccessToken = async (): Promise<Response | Error> => {
  try {
    let urlSearchParams = new URLSearchParams({
      client_id: process.env.FACEBOOK_APP_CLIENT_ID,
      client_secret: process.env.FACEBOOK_APP_CLIENT_SECRET,
      grant_type: "client_credentials",
    });
    const response = await fetch(`${OAUTH_BASE_URL}?${urlSearchParams}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      message: "There was an error",
    };
  }
};
