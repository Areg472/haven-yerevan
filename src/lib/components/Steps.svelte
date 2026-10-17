<script lang="ts">
  import { attendeeSteps, steps, stepsHeadingPoc } from "$lib/data/content";
  import { defaultSiteData } from "$lib/data/site";
  import type { SiteImages } from "$lib/data/images";
  import type { Link } from "$lib/data/types";

  interface Props {
    poc: boolean;
    heading?: string;
    subheading?: string;
    /** Only shown on the organizer page, but editable either way. */
    cta?: Link;
    images?: SiteImages;
  }

  let {
    poc,
    heading = poc ? stepsHeadingPoc : defaultSiteData.steps.heading,
    subheading = defaultSiteData.steps.subheading,
    cta = defaultSiteData.steps.cta,
    images = defaultSiteData.images,
  }: Props = $props();
</script>

<section
  class="relative z-20 pt-[clamp(2.5rem,6vw,5rem)] pb-[clamp(1.5rem,2vw,2rem)] bg-haven-green"
>
  <div class="relative z-10 flex justify-center">
    <img
      src={images.stepsFlowerBorder}
      alt=""
      aria-hidden="true"
      width="3586"
      height="819"
      class="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[80%] object-cover md:hidden"
    />
  </div>
  <div class="absolute inset-0">
    <img
      src={images.stepsFlowersTopRight}
      alt=""
      aria-hidden="true"
      width="872"
      height="1372"
      class="pointer-events-none absolute right-0 top-0 z-10 w-[clamp(6rem,26vw,20rem)] object-contain"
    />
    <img
      src={images.stepsFlowersTopLeft}
      alt=""
      aria-hidden="true"
      width="864"
      height="1945"
      class="pointer-events-none absolute left-0 top-0 z-10 w-[clamp(6rem,26vw,20rem)] object-contain"
    />
    <img
      src={images.stepsFlowersBottomRight}
      alt=""
      aria-hidden="true"
      width="660"
      height="967"
      class="pointer-events-none absolute right-0 bottom-0 z-10 w-[clamp(6rem,26vw,20rem)] object-contain"
    />
    <img
      src={images.stepsFlowersBottomLeft}
      alt=""
      aria-hidden="true"
      width="642"
      height="660"
      class="pointer-events-none absolute left-0 bottom-0 z-10 w-[clamp(6rem,26vw,20rem)] object-contain"
    />
  </div>
  <div class="relative shell mt-16">
    <h2
      class="relative mx-auto max-w-[24ch] z-10 text-center font-display text-display text-white sm:max-w-none sm:px-[clamp(0rem,6vw,10rem)] text-shadow-[0_0_10px_var(--color-haven-green-deep)] md:text-[clamp(2.5rem,6vw,8rem)] md:leading-[1.05]"
    >
      {heading}
    </h2>

    <h3
      class="relative mt-4 mx-auto max-w-[24ch] z-10 text-center font-display text-lead copy text-white sm:max-w-none"
    >
      {subheading}
    </h3>

    <ol class="relative z-10 mx-auto my-10 grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2 md:gap-8 md:px-12">
      {#each poc ? steps : attendeeSteps as step, i}
        <li class="rounded-3xl border-8 border-haven-brown-light bg-haven-butter p-5 shadow-lg sm:p-7">
          <h3 class="mb-5 flex items-start gap-4 font-display text-subheading leading-snug text-haven-orange-deep">
            <span class="text-5xl" aria-hidden="true">{i + 1}</span>
            <span class="min-w-0 [overflow-wrap:anywhere]">{step.title}</span>
          </h3>
          <img src={step.image} alt={step.alt} loading="lazy" decoding="async" class="aspect-[3/2] w-full rounded-xl object-cover" />
        </li>
      {/each}
    </ol>

    <div
      class="relative mt-[clamp(1.5rem,3vw,2.5rem)] flex z-10 justify-center md:mt-0"
    >
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        class={[
          "flex items-center gap-[clamp(0.5rem,1vw,0.75rem)] rounded-[1.25rem] bg-haven-green-deep/80 px-[clamp(1.25rem,2.4vw,2.25rem)] py-[clamp(0.6rem,1.1vw,1rem)] font-display text-[clamp(1.15rem,1.9vw,1.875rem)] leading-none tracking-[-0.05em] text-white transition-transform hover:scale-[1.04] active:scale-100 shadow-[0_0_10px_var(--color-haven-green-deep)]",
          poc ? "block" : "hidden",
        ]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-[0.85em] w-[0.85em] shrink-0"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          ></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          ></path>
        </svg>
        {cta.label}
      </a>
    </div>
  </div>
</section>
