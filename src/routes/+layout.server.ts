import type { LayoutServerLoad } from "./$types";
import { getYerevanPageData } from "$lib/server/services/yerevan";

/** Referral codes arrive as `?r=` and outlive the landing page they came in on. */
const REFERRAL_COOKIE = "haven_referral";
const REFERRAL_MAX_AGE = 60 * 60 * 24 * 90; // 90 days

/**
 * The referral code is stashed in a cookie on the way through, so someone who
 * lands on `/?r=abc` and then wanders the site still signs up with the code
 * attached.
 */
export const load: LayoutServerLoad = async ({ url, cookies }) => {
  const incoming = url.searchParams.get("r");

  if (incoming) {
    cookies.set(REFERRAL_COOKIE, incoming, {
      path: "/",
      maxAge: REFERRAL_MAX_AGE,
      sameSite: "lax",
    });
  }

  return {
    signupUrl: "https://forms.hackclub.com/haven-signup?event=recmUJr9zzc0kfk6J",
    referral: incoming ?? cookies.get(REFERRAL_COOKIE) ?? null,
    ...(await getYerevanPageData()),
  };
};
