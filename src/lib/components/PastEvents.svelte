<script lang="ts">
  import { defaultSiteData } from "$lib/data/site";
  import type { Linked, PastEvent } from "$lib/data/types";

  interface Props {
    /** One line per entry. */
    heading?: string[];
    items?: PastEvent[];
    safety?: Linked;
  }

  let {
    heading = defaultSiteData.pastEvents.heading,
    items = defaultSiteData.pastEvents.items,
    safety = defaultSiteData.pastEvents.safety,
  }: Props = $props();
</script>

<section
  class="past-events relative flex flex-col gap-[clamp(3rem,5vw,6rem)] px-[clamp(1.5rem,7vw,8rem)] py-[clamp(6rem,10vw,10rem)]"
>
  <h2
    class="mx-auto max-w-[65ch] text-center font-display text-[clamp(1.25rem,2vw,2rem)] text-white [text-wrap:balance]"
  >
    {#each heading as line, lineIndex (lineIndex)}<span class="block"
        >{line}</span
      >{/each}
  </h2>

  <div class="mx-auto grid w-full max-w-[88rem] grid-cols-1 gap-12 py-4 lg:grid-cols-3 lg:gap-[clamp(2rem,4vw,5rem)]">
    {#each items as item, i (i)}
      <article
        class="polaroid mx-auto flex w-full max-w-[26rem] min-w-0 flex-col items-center gap-4 p-[clamp(1.25rem,2vw,2rem)] text-center lg:max-w-none"
      >
        <h3
          class="font-display text-[clamp(1.75rem,2.8vw,3rem)] text-white"
        >
          {item.title}
        </h3>

        <a
          href={item.href}
          target="_blank"
          rel="noopener"
          class="relative block w-full overflow-hidden rounded-[1.25rem] border-2 border-white"
        >
          <span class="sr-only">Դիտել {item.title}-ի տեսանյութը</span>
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            class={["aspect-[3/2] w-full object-cover ", item.position]}
          />
          <img
            src={item.play}
            alt=""
            aria-hidden="true"
            width="72"
            height="65"
            class="pointer-events-none absolute top-1/2 left-1/2 w-[19%] -translate-x-1/2 -translate-y-1/2 -rotate-[40deg] select-none drop-shadow-[0_2px_6px_rgb(0_0_0/0.35)]"
          />
        </a>

        <p
          class="font-body text-[clamp(1rem,1.3vw,1.5rem)] text-white"
        >
          {item.caption}
        </p>
      </article>
    {/each}
  </div>

  <p
    class="mx-auto max-w-5xl text-center font-body text-[clamp(1rem,1.2vw,1.375rem)] text-white [overflow-wrap:anywhere]"
  >
    {#each safety as seg, i (i)}{#if seg.href}<a
          class="text-haven-butter underline"
          href={seg.href}
          target={seg.href.startsWith("http") ? "_blank" : undefined}
          rel={seg.href.startsWith("http") ? "noopener" : undefined}
          >{seg.text}</a
        >{:else}{seg.text}{/if}{/each}
  </p>
</section>
