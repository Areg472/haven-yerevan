import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { SITE_EVENT_SLUG } from "$lib/consts";

/** The public landing page is the Haven Yerevan event page. */
export const load: PageServerLoad = ({ url }) => {
  redirect(307, `/${SITE_EVENT_SLUG}${url.search}`);
};
