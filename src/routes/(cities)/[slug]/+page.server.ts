import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { SITE_EVENT_SLUG } from "$lib/consts";

/** Render the configured event page only for this site's Yerevan event. */
export const load: PageServerLoad = ({ params, url }) => {
  if (params.slug !== SITE_EVENT_SLUG) error(404, "Էջը չի գտնվել");

  const ref = url.searchParams.get("ref") || undefined;

  return {
    ref,
  };
};
