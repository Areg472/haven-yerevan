import { env } from "$env/dynamic/private";

export const SITE_EVENT_SLUG = "yerevan";

export const EXTERNAL_URL =
  env.EXTERNAL_URL || env.SITE || "https://haven.hackclub.com";
