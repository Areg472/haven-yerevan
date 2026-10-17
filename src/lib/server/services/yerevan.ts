import { SITE_EVENT_SLUG } from "$lib/consts";
import { event as defaultEvent, faqs } from "$lib/data/content";
import { resolveSiteData } from "$lib/data/site";
import { getEventBySlug, parseSiteData } from "./events";

/** The dedicated event page also works before Airtable has been configured. */
export async function getYerevanPageData() {
  const event = await getEventBySlug(SITE_EVENT_SLUG);
  const data = event ? parseSiteData(event) : {};

  return {
    site: resolveSiteData(
      {
        ...data,
        meta: {
          ...data.meta,
          title: "Haven Երևան",
          description:
            "Haven Երևանը խաղերի ստեղծման մարաթոն է պատանիների համար՝ Երևանում։ Ստեղծիր տեսախաղ, սովորիր նոր հմտություններ ու ծանոթացիր այլ պատանիների հետ։",
        },
        tagline: [
          "Խաղերի ստեղծման մարաթոն պատանիների համար՝ Երևանում",
          ...defaultEvent.tagline.slice(1),
        ],
        faq: { ...data.faq, items: faqs },
        // Keep both local Shushi weights on the Armenian site.
        fonts: {},
      },
      { name: "Երևան" },
    ),
    eventId: event?.id ?? null,
  };
}
