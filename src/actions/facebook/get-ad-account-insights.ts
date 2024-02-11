"use server";

import { BASE_URL } from "@/lib/api/facebook";

export async function getAdAccountInsights(ad_account_id: string) {
  const searchParams = new URLSearchParams({
    date_preset: "last_7d",
    access_token: process.env.LONG_LIVED_FACEBOOK_ACCESS_TOKEN,
    fields:
      "account_name,account_id,actions,campaign_id,campaign_name,clicks,cost_per_action_type,cpc,cpm,ctr,frequency,impressions,objective,reach,spend",
  });
  const URL = `${BASE_URL}/${ad_account_id}/insights?` + searchParams;
  const insights = await fetch(URL).then((response) => response.json());
  return insights;
}
