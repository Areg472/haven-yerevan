import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { SITE_EVENT_SLUG } from "$lib/consts";

export const GET: RequestHandler = ({ url }) => {
  redirect(307, `/${SITE_EVENT_SLUG}${url.search}`);
};
