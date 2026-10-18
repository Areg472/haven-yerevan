import type {
  Linked,
  Link,
  PastEvent,
  Perk,
  PitchItem,
  ScheduleDay,
  Sponsor,
} from "./types";

export const meta = {
  title: "Haven — Միացի՛ր քո քաղաքի խաղերի ստեղծման մրցույթին",
  description:
    "Hack Club Haven-ը խաղերի ստեղծման համաշխարհային մրցույթ է 13–18 տարեկանների համար՝ աշխարհի ավելի քան 200 քաղաքներում։",
  image: "https://haven.hackclub.com/images/haven-logo-color.webp",
} as const;

export const event = {
  name: "Haven",
  title: [],
  tagline: ["Խաղերի ստեղծման մրցույթ պատանիների համար՝ 200+ քաղաքներում", "14–15 նոյեմբերի, 2026 թ․"],
} as const;

export const organizeCta = {
  label: "Ուզո՞ւմ ես կազմակերպել քո Hack Club Haven-ը։",
} as const;

export const eventPoc = {
  name: "Haven",
  title: ["Կազմակերպի՛ր խաղերի ստեղծման մրցույթ", "քո քաղաքում։"],
  tagline: ["14–15 նոյեմբերի", "Աշխարհի 13–18 տարեկան պատանիների համար"],
} as const;

export const organizeCtaPoc = {
  label: "Ուզո՞ւմ ես քո քաղաքում կազմակերպել Hack Club Haven։",
} as const;

/** Copy for the hero that is not the title or the tagline. */
export const heroCopy = {
  mapLabel: "գտիր միջոցառում քո մոտակայքում",
  scrollLabel: "ավելին",
} as const;

export const signupCopy = {
  placeholder: "քո էլ․ հասցեն",
  button: "գրանցվել",
} as const;

export const signupCopyPoc = {
  placeholder: "գրանցվելու համար նշիր էլ․ հասցեդ",
  button: "գրանցվել",
} as const;

export const about = {
  title: "Ի՞նչ է խաղերի ստեղծման մրցույթը։",
  body: "Սա ծրագրավորման միջոցառում է, որտեղ ընկերներիդ հետ տեսախաղ ես ստեղծում։ Ուտելիքն էլ՝ անվճար։",
} as const;

export const perks: Perk[] = [
  {
    id: "build",
    title: "Սովորիր ու ստեղծիր",
    side: "start",
    blurb: ["մասնակցիր աշխատարանների կամ ստեղծիր քո տեմպով"],
    photos: [
      {
        src: "/images/projects-1.webp",
        alt: "Return to the Sender՝ նախորդ միջոցառումներից մեկի ընթացքում ստեղծված խաղ",
        href: "https://i1rs7.itch.io/return-to-the-sender",
        caption: { title: "Return to the Sender", author: "հեղինակ՝ i1rs7" },
      },
      {
        src: "/images/projects-3.webp",
        alt: "Office Click Clack՝ նախորդ միջոցառումներից մեկի ընթացքում ստեղծված խաղ",
        href: "https://theavgeekbee.itch.io/office-click-clack",
        caption: {
          title: "Office Click Clack",
          author: "հեղինակներ՝ bunnyguy և nathan",
        },
      },
    ],
  },
  {
    id: "friends",
    title: "Նոր ընկերներ գտիր",
    side: "end",
    blurb: ["ծանոթացիր նոր մարդկանց հետ ու ձեռք բեր երկար տարիների ընկերներ"],
    photos: [
      { src: "/images/friends-1.webp", alt: "Մասնակիցները միասին ժամանակ են անցկացնում" },
      {
        src: "/images/friends-2.webp",
        alt: "Մի խումբ պատանիներ աշխատում են ընդհանուր սեղանի շուրջ",
      },
    ],
  },
  {
    id: "food",
    title: "Անվճար սնունդ ու մրցանակներ",
    side: "start",
    blurb: ["ո՞վ կհրաժարվի անվճար հյուրասիրությունից :)"],
    photos: [
      { src: "/images/food-1.webp", alt: "Հյուրասիրություն և հուշանվերներ" },
      { src: "/images/food-3.webp", alt: "Մասնակիցները ցույց են տալիս իրենց մրցանակները" },
    ],
  },
];

export const pitchHeading = "Հետաքրքիր է հնչում, չէ՞։";

export const pitches: PitchItem[] = [
  {
    id: "invite",
    align: "end",
    body: [
      { text: "Այս նոյեմբերին " },
      { text: "ԴՈՒ կարող ես միանալ պատանիների համար աշխարհի ամենամեծ խաղերի ստեղծման մրցույթին։", mark: true },
      {
        text: " Այո՛, հենց դու։ Կարևոր չէ՝ տարիների փորձ ունես, թե այսպիսի միջոցառման մասին առաջին անգամ ես լսում։",
      },
    ],
  },
  {
    id: "support",
    align: "start",
    body: [
      { text: "Դու " },
      { text: "կմիանաս հազարավոր պատանիների", mark: true },
      {
        text: ", որոնք խաղեր են ստեղծում ամբողջ աշխարհում։ Դեռ խաղեր չե՞ս մշակել։ Խնդիր չկա․ մեր աշխատարանները կօգնեն քեզ ստեղծել քո խաղը։",
      },
    ],
  },
  {
    id: "impact",
    align: "center",
    body: [
      { text: "Սա քո հնարավորությունն է՝ " },
      { text: "նոր բան սովորելու,", mark: true },
      { text: " " },
      { text: "նոր ընկերներ գտնելու", mark: true },
      { text: " ու " },
      { text: "միասին անմոռանալի արկածներ ունենալու։", mark: true },
    ],
  },
];

export const pitchesPoc: PitchItem[] = [
  {
    id: "invite",
    align: "end",
    body: [
      { text: "Այս նոյեմբերին " },
      { text: "հենց ՔԵԶ ենք փնտրում", mark: true },
      {
        text: "՝ խաղերի ստեղծման մրցույթ կազմակերպելու համար։ Այո՛, հենց քեզ։ Կարևոր չէ՝ տարիների փորձ ունես, թե նոր ես լսել այսպիսի միջոցառումների մասին։",
      },
    ],
  },
  {
    id: "support",
    align: "start",
    body: [
      { text: "Դու " },
      { text: "կմիանաս հարյուրավոր պատանիների", mark: true },
      {
        text: ", որոնք իրենց քաղաքներում խաղերի ստեղծման մրցույթներ են կազմակերպում։ Hack Club միջազգային ոչ առևտրային կազմակերպությունը կտրամադրի ուղեցույցներ, ֆինանսավորում, հուշանվերներ և անհատական մենթորություն։",
      },
    ],
  },
  {
    id: "impact",
    align: "center",
    body: [
      { text: "Հնարավոր է՝ դժվարություններ լինեն, բայց սա քո հնարավորությունն է՝ " },
      { text: "սկսելու մի բան, որը շատերի կյանքում փոփոխություն կբերի", mark: true },
      {
        text: ", զարգացնելու առաջնորդական հմտություններդ ու ձեռք բերելու կյանքդ փոխող ընկերներ։",
      },
    ],
  },
];

export const scheduleHeading = "Ի՞նչ է լինելու միջոցառման օրերին։";

export const scheduleTbd = {
  title: "Շուտով կհայտարարենք։",
  body: "Դեռ պատրաստում ենք օրակարգը։ Գրանցվիր, և մենք կտեղեկացնենք քեզ, հենց այն պատրաստ լինի։",
} as const;

export const schedule: ScheduleDay[] = [
  {
    day: "Շաբաթ",
    items: [
      {
        time: "10:00",
        title: "Մասնակիցների ընդունում",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
      {
        time: "11:00",
        title: "Մանրամասները՝ շուտով",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
      {
        time: "00:00",
        title: "Մանրամասները՝ շուտով",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
      {
        time: "00:00",
        title: "Մանրամասները՝ շուտով",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
      {
        time: "13:00",
        title: "Մանրամասները՝ շուտով",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
      {
        time: "14:00",
        title: "Մանրամասները՝ շուտով",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
      {
        time: "15:00",
        title: "Մանրամասները՝ շուտով",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
      {
        time: "16:00",
        title: "Մանրամասները՝ շուտով",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
    ],
  },
  {
    day: "Կիրակի",
    items: [
      {
        time: "10:00",
        title: "Մասնակիցների ընդունում",
        body: "Օրագրի մանրամասները՝ շուտով։",
      },
    ],
  },
];

export const stepsHeading =
  "Ահա թե ինչպես միանալ այս նոյեմբերի մրցույթին։";

export const stepsHeadingPoc =
  "Ահա թե ինչպես կազմակերպել խաղերի ստեղծման մրցույթ այս նոյեմբերին։";

export const stepsSubheading =
  "(Մի՛ անհանգստացիր, ամեն քայլում կօգնենք քեզ)";

export const steps = [
  {
    title: "Հավաքիր կազմակերպիչների թիմ",
    image: "/images/step-1.webp",
    alt: "Կազմակերպիչները միասին միջոցառման ընթացքում",
  },
  {
    title: "Գտիր միջոցառման անցկացման վայր",
    image: "/images/step-2.webp",
    alt: "Կազմակերպիչը միջոցառման համար ընտրված վայրում",
  },
  {
    title: "Գտիր հովանավորներ հուշանվերների ու մրցանակների համար",
    image: "/images/step-3.webp",
    alt: "Մրցանակների սեղանին դրված գավաթներ",
  },
  {
    title: "Գնիր անհրաժեշտ պարագաներն ու պատրաստիր աշխատարանները",
    image: "/images/step-4.webp",
    alt: "Մասնակիցների համար անցկացվող աշխատարան",
  },
];

export const attendeeSteps = [
  {
    title: "Գրանցվիր Երևանի Haven-ին",
    image: "/images/step-1.webp",
    alt: "Միջոցառման մասնակիցները միասին",
  },
  {
    title: "Ծանոթացիր մյուսների հետ ու թիմ կազմիր կամ աշխատիր մենակ",
    image: "/images/step-2.webp",
    alt: "Մասնակիցները միջոցառման վայրում",
  },
  {
    title: "Սովորիր աշխատարաններում, վայելիր անվճար սնունդն ու հուշանվերները",
    image: "/images/step-3.webp",
    alt: "Մասնակիցների համար պատրաստված մրցանակները",
  },
  {
    title: "Ստեղծիր քո խաղն ու հրապարակիր այն itch.io-ում",
    image: "/images/step-4.webp",
    alt: "Մասնակիցները ներկայացնում են իրենց աշխատանքը",
  },
];

export const stepsCta: Link = {
  label: "Մանրամասների համար կարդա կազմակերպչի ուղեցույցը։",
  href: "https://docs.google.com/document/d/1CHgiBmXzeSj7Ng21wMoXsnwjzrLzSbg0siVn8AUoqQ0/edit",
};

export const pastEventsHeading = [
  "Hack Club-ն օգնել է պատանիներին հարյուրավոր միջոցառումներ կազմակերպել ամբողջ աշխարհում։",
  "Ծանոթացիր մեր նախորդ միջոցառումներին։",
];

export const pastEventsSafety: Linked = [
  { text: "Մենք կարևորում ենք անվտանգությունը։ Ծնողների ուղեցույցը կարող ես կարդալ " },
  {
    text: "այստեղ",
    href: "https://docs.google.com/document/d/1NKjI_6sksQOKyrdeE1wEJZYSWEvix8LB74sIF2vokoI/edit?usp=sharing",
  },
  { text: ", իսկ հարցերի դեպքում կարող եք գրել " },
  { text: "haven@hackclub.com", href: "mailto:haven@hackclub.com" },
  { text: " հասցեին։" },
];

export const pastEvents: PastEvent[] = [
  {
    title: "Scrapyard",
    caption:
      "Ստեղծիր անսովոր բաներ ու ստացիր անսովոր մրցանակներ։ Առկա հաքաթոն՝ ավելի քան 70 քաղաքներում։",
    image: "/images/scrapyard-pic.webp",
    alt: "Պատանիները նախագծեր են ստեղծում Scrapyard-ում",
    play: "/images/play-triangle-1.svg",
    href: "https://www.youtube.com/watch?v=8iM1W8kXrQA",
  },
  {
    title: "Daydream",
    caption:
      "Աշակերտները խաղերի ստեղծման մրցույթներ կազմակերպեցին աշխարհի 200 քաղաքներում՝ Լոնդոնից ու Նյու Յորքից մինչև Պենանգ։",
    image: "/images/daydream-pic.webp",
    alt: "Daydream խաղերի ստեղծման մրցույթի մասնակիցները",
    play: "/images/play-triangle-2.svg",
    href: "https://www.youtube.com/watch?v=vvdoW2gh9YU",
  },
  {
    title: "Campfire",
    caption:
      "Մեր ամենամեծ մրցույթը․ 10 հազար պատանի մեկ հանգստյան օրերի ընթացքում միաժամանակ խաղեր էին ստեղծում։",
    image: "/images/scrapyard-pic-2.webp",
    alt: "Campfire-ի մասնակից պատանիներով լեցուն սրահը",
    play: "/images/play-triangle-3.svg",
    href: "https://www.youtube.com/watch?v=0aMAHuLxg3s",
    position: "object-bottom",
  },
];

export const supportersHeading = "Մեր աջակիցները";

export const supporters: Sponsor[] = [
  {
    name: "HCB 1",
    href: "https://hcb.hackclub.com",
    image: "/images/sponsors/logos/hcb-icon.webp",
  },
  {
    name: "HCB 2",
    href: "https://hcb.hackclub.com",
    image: "/images/sponsors/logos/hcb-icon.webp",
  },
  {
    name: "HCB 3",
    href: "https://hcb.hackclub.com",
    image: "/images/sponsors/logos/hcb-icon.webp",
  },
];

export const sponsorsHeading = "Մեր հովանավորները";

const HAVEN_GUIDE_LINK =
  "https://docs.google.com/document/d/1NKjI_6sksQOKyrdeE1wEJZYSWEvix8LB74sIF2vokoI/edit?usp=sharing";
const HAVEN_EMAIL = "mailto:haven@hackclub.com";

export const faqHeading = "Հաճախ տրվող հարցեր";

/** The button under the FAQ column, which scrolls back up to the signup box. */
export const faqCta = "Գրանցվել";

export const faqs: { q: string; a: Linked }[] = [
  {
    q: "Կարո՞ղ եմ մասնակցել։",
    a: [
      {
        text: "Եթե 13–18 տարեկան ես, կարող ես մասնակցել։ Նախնական փորձ չի պահանջվում։",
      },
    ],
  },
  {
    q: "Մասնակցությունն անվճա՞ր է։",
    a: [
      {
        text: "Այո՛։ Hack Club-ը ոչ առևտրային կազմակերպություն է, որն օգնում է պատանիներին անվճար ստեղծել տեխնոլոգիական նախագծեր։",
      },
    ],
  },
  {
    q: "Բայց ես երբեք չեմ ծրագրավորել։",
    a: [
      {
        text: "Հիանալի է։ Այս մրցույթները հարմար են նաև սկսնակների համար։ Աշխատարանները, մենթորներն ու թիմակիցներդ կօգնեն քեզ ամեն քայլում։",
      },
    ],
  },
  {
    q: "Իսկ եթե ծնողներս անհանգստանո՞ւմ են։",
    a: [
      {
        text: "Մենք պատրաստ ենք օգնել։ Կարող ես կարդալ մեր ",
      },
      { text: "ծնողների ուղեցույցը", href: HAVEN_GUIDE_LINK },
      { text: " կամ հարցերի դեպքում գրել մեզ՝ " },
      { text: "haven@hackclub.com", href: HAVEN_EMAIL },
      { text: " հասցեին։" },
    ],
  },
  {
    q: "Դեռ հարցեր ունեմ։",
    a: [
      { text: "Միացիր #haven-help ալիքին՝ " },
      { text: "Slack", href: "https://hackclub.com/slack/" },
      { text: "-ում, կամ գրիր մեզ՝ " },
      { text: "haven@hackclub.com", href: HAVEN_EMAIL },
      { text: " հասցեին։" },
    ],
  },
];

/** Keyed like `navLinks`: a city page may reword a label, never the link. */
export const footerLinks = [
  { key: "hackClub", label: "Hack Club", href: "https://hackclub.com" },
  { key: "slack", label: "Slack", href: "https://hackclub.com/slack/" },
  { key: "clubs", label: "Ակումբներ", href: "https://hackclub.com/clubs/" },
  {
    key: "hackathons",
    label: "Հաքաթոններ",
    href: "https://hackathons.hackclub.com",
  },
] as const satisfies (Link & { key: string })[];

export type FooterLinkKey = (typeof footerLinks)[number]["key"];

/** One entry per paragraph of the "who is Hack Club" blurb in the footer. */
export const footerBody: Linked[] = [
  [
    {
      text: "Hack Club-ը 501(c)(3) կարգավիճակով ոչ առևտրային կազմակերպություն է և տեխնոլոգիաներով հետաքրքրված ավելի քան 100 հազար ավագ դպրոցականների ցանց։ Մենք հավատում ենք, որ լավագույնս սովորում ես ստեղծելով, ուստի ձևավորում ենք համայնք և տրամադրում դրամաշնորհներ, որպեսզի կարողանաս իրականացնել հետաքրքիր նախագծեր։ Վերջին տարիներին մենք ",
    },
    {
      text: "30 պատանի ծրագրավորողի ուղարկել ենք արշավի՝ Pacific Crest Trail արահետով",
      href: "https://www.youtube.com/watch?v=ufMUJ9D1fi8",
    },
    { text: ", " },
    {
      text: "կազմակերպել ենք ամենավատ գաղափարների հաքաթոն",
      href: "https://www.youtube.com/watch?v=8iM1W8kXrQA",
    },
    { text: " և " },
    {
      text: "GitHub-ի գլխավոր գրասենյակում անցկացրել ենք պատանիների ամենամեծ սարքաշինական հաքաթոնը",
      href: "https://www.youtube.com/watch?v=kaEFv7e49mo",
    },
    { text: "։" },
  ],
  [
    { text: "Hack Club-ի մասին կարդա այս աղբյուրներում՝ " },
    {
      text: "The Wall Street Journal",
      href: "https://www.wsj.com/articles/teen-hackers-try-to-convince-parents-they-are-up-to-good-11569922200",
    },
    { text: ", " },
    {
      text: "CBS News",
      href: "https://www.cbsnews.com/sanfrancisco/news/hack-club-hosts-teen-coders-san-francisco/",
    },
    { text: " և " },
    {
      text: "NASA.gov",
      href: "https://www.nasa.gov/learning-resources/space-out-this-summer-with-variety-of-nasa-stem-activities/",
    },
    { text: ", կամ դիտիր մեր ելույթը՝ " },
    {
      text: "CES-ի բեմում՝ AMD-ի գործադիր տնօրեն Լիզա Սուի հետ",
      href: "https://www.youtube.com/live/UbfAhFxDomE?si=5DiK1_hGqKrB_r50&t=7033",
    },
    { text: "։" },
  ],
  [{ text: "Ստեղծված է սիրով՝ Hack Club-ի պատանիների կողմից, պատանիների համար ♥" }],
];

/** Keyed so a city page can reword a label without touching where it goes. */
export const navLinks = [
  { key: "signup", label: "Գրանցվել", href: "#top" },
  { key: "about", label: "Մեր մասին", href: "#about" },
  { key: "faq", label: "Հարցեր", href: "#faq" },
] as const satisfies (Link & { key: string })[];

export type NavKey = (typeof navLinks)[number]["key"];
