<script lang="ts">
  import { event, eventPoc, organizeCtaPoc } from "$lib/data/content";
  import { defaultSiteData } from "$lib/data/site";
  import { cssUrl, type SiteImages } from "$lib/data/images";
  import SignupForm from "./SignupForm.svelte";
  import VideoPanel from "./VideoPanel.svelte";

  const ORGANIZE_PATH = "/api/auth/redirect";

  interface Props {
    title?: readonly string[];
    tagline?: readonly string[];
    poc: boolean;
    /** Attendee signup form; absent falls the box back to the organizer signup. */
    signupUrl?: string | undefined;
    /** Referral code from `?r=`, forwarded to the signup form. */
    referral?: string | null;
    /** Link under the signup box, over to the organizer signup. */
    organizeCta?: string;
    /** Caption on the arrow down to the rest of the page. */
    scrollLabel?: string;
    signup?: { placeholder: string; button: string };
    images?: SiteImages;
  }

  let {
    poc,
    title = poc ? eventPoc.title : event.title,
    tagline = poc ? eventPoc.tagline : event.tagline,
    signupUrl,
    referral = null,
    organizeCta = poc
      ? organizeCtaPoc.label
      : defaultSiteData.hero.organizeCta,
    scrollLabel = defaultSiteData.hero.scrollLabel,
    signup = defaultSiteData.hero.signup,
    images = defaultSiteData.images,
  }: Props = $props();

  // Carry whatever the visitor typed into the signup box over to the organizer
  // signup, so they do not have to type their address twice.
  let email = $state("");
  let emailValid = $state(false);

  const signupAction = $derived.by(() => {
    if (!signupUrl) return undefined;
    const url = new URL(signupUrl);
    if (referral) url.searchParams.set("r", referral);
    return url.toString();
  });

  const formAction = $derived(signupAction ?? ORGANIZE_PATH);

  const organizeHref = $derived(
    emailValid && email
      ? `${ORGANIZE_PATH}?email=${encodeURIComponent(email)}`
      : ORGANIZE_PATH,
  );
</script>

<svelte:head>
  {#if signupUrl}<link rel="preconnect" href={new URL(signupUrl).origin} />{/if}
</svelte:head>

<section
  id="top"
  style="background-image: {cssUrl(images.heroBackground)}"
  class={[
    "rule-frame relative isolate flex min-h-svh flex-col bg-haven-green bg-cover bg-top bg-no-repeat px-4 [--frame-gap:clamp(0.75rem,1.1vw,1rem)] [--frame-offset:clamp(0.5rem,1.1vw,1rem)] [--frame-weight:clamp(3px,0.35vw,5px)]",
    !poc && "attendee-hero",
    poc
      ? "pb-[36vw] sm:pb-[clamp(3rem,10vw,min(8rem,8svh))]"
      : "pb-[clamp(3rem,5vw,5rem)]",
  ]}
>
  <div class={poc ? "hidden" : "attendee-layout flex flex-1 flex-col"}>
    <div
      class="attendee-content pointer-events-none relative z-10 flex flex-1 items-center justify-center mt-[clamp(5rem,14vw,20rem)] sm:mt-[clamp(1rem,2vw,15rem)]"
    >
      <div
        class="attendee-copy mx-auto flex w-full max-w-5xl flex-col items-center px-[clamp(1rem,4vw,4rem)] text-center"
      >
        <div class="attendee-brand grid w-full max-w-4xl grid-cols-2">
          <img
            src={images.logo}
            alt="Hack Club Haven"
            width="778"
            height="445"
            class="attendee-logo w-[120%] max-w-none"
          />
          <h1
            class="attendee-city m-0 font-display text-[clamp(1rem,8vw,10rem)] leading-[clamp(1rem,6vw,8rem)] text-white translate-y-[75%] translate-x-[-10%] sm:text-hero sm:leading-[clamp(1rem,4vw,8rem)]"
          >
            {title.join(" ")}
          </h1>
        </div>

        <p
          class="attendee-tagline glow-orange mt-[clamp(1rem,10vw,10rem)] text-[clamp(1rem,4vw,8rem)] leading-[clamp(1rem,4.75vw,5rem)] font-body text-center text-white sm:mt-[clamp(1rem,5vw,10rem)] sm:text-[clamp(1.25rem,2vw,4rem)] sm:leading-[clamp(1.5rem,2.75vw,5rem)]"
        >
          {#each tagline as part, i}
            <span class="block">{part}</span>
          {/each}
        </p>

        <SignupForm
          {poc}
          action={formAction}
          id="signup-email"
          placeholder={signup.placeholder}
          button={signup.button}
          arrow={images.signupArrow}
          bind:email
          bind:valid={emailValid}
          class="pointer-events-auto mt-[clamp(1rem,1vw,5rem)] w-full max-w-[45rem]"
        />
      </div>
    </div>

    <div
      class="attendee-scroll relative z-10 mx-auto mt-[clamp(2rem,5svh,4rem)] flex justify-center"
    >
      <a href="#about" class="flex flex-col items-center gap-2">
        <span
          class="font-body text-[clamp(0.5rem,4vw,3rem)] text-white/60 md:text-[clamp(0.5rem,2vw,3rem)]"
          >{scrollLabel}</span
        >
        <img
          src={images.scrollArrow}
          alt=""
          aria-hidden="true"
          width="207"
          height="69"
          class="w-[clamp(2rem,16vw,12rem)] -scale-y-100 md:w-[clamp(2rem,8vw,12rem)]"
        />
      </a>
    </div>

    <img
      src={images.hedgehog}
      alt=""
      aria-hidden="true"
      width="422"
      height="308"
      class="attendee-hedgehog pointer-events-none absolute object-contain bottom-0 right-[6%] z-20 w-[clamp(8rem,40vw,14rem)] scale-x-[-1] aspect-422/308 select-none sm:right-[9.6%] sm:max-h-[30svh] sm:w-[15%] sm:max-w-[21rem]"
    />

    <img
      src={images.heroForeground}
      alt=""
      aria-hidden="true"
      width="1414"
      height="501"
      class="pointer-events-none absolute inset-x-0 bottom-0 z-20 w-full max-w-none translate-y-[55%] select-none"
    />
  </div>

  <!-- poc version ok don't change thisss -->
  <div class={poc ? "block" : "hidden"}>
    <div class="relative z-10 flex flex-1 items-center justify-center">
      <div
        class="mx-auto flex w-full mt-[clamp(10rem,15vw,25rem)] max-w-[120rem] flex-col items-center text-center"
      >
        <h1
          class="glow-orange font-display text-hero text-white [word-spacing:0.18em]"
        >
          {#each title as line, i}
            <span class="block">{i > 0 ? " " : ""}{line}</span>
          {/each}
        </h1>

        <p
          class="glow-orange mt-[clamp(1rem,2.5vw,4rem)] font-body text-subheading text-white"
        >
          {#each tagline as part, i}
            {#if i > 0}
              <span aria-hidden="true" class="mx-2 hidden sm:inline"
                >&hearts;</span
              >
            {/if}
            <span class="block sm:inline">
              {part}
            </span>
          {/each}
        </p>

        <SignupForm
          {poc}
          action={formAction}
          id="signup-email-poc"
          placeholder={signup.placeholder}
          button={signup.button}
          arrow={images.signupArrow}
          bind:email
          bind:valid={emailValid}
          class="mt-[clamp(1.5rem,3vw,4rem)] w-[clamp(15rem,35vw,52rem)]"
        />

        {#if signupAction}
          <a
            href={organizeHref}
            class="glow-orange mt-[clamp(0.75rem,1.5vw,1.25rem)] font-body text-[clamp(0.9rem,1.6vw,1.75rem)] text-white underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-80"
          >
            {organizeCta}
          </a>
        {/if}
      </div>
    </div>

    <div
      class="absolute z-10 shell left-1/2 -translate-x-1/2 bottom-[clamp(3rem,3vw,10rem)] justify-center"
    >
      <a href="#about" class="flex-col items-center gap-1">
        <span class="font-body text-[clamp(0.5rem,3vw,1.5rem)] text-white/60"
          >{scrollLabel}</span
        >
        <img
          src={images.scrollArrow}
          alt=""
          aria-hidden="true"
          width="207"
          height="69"
          class="w-[clamp(2rem,12vw,6rem)] -scale-y-100"
        />
      </a>
    </div>

    <VideoPanel
      videoId="8tNEPMI5wss"
      chevron={images.videoChevron}
      playIcon={images.videoPlay}
      class="relative z-20 mx-auto mt-8 w-full max-w-[25rem] sm:absolute sm:right-[clamp(1.25rem,2.4vw,2.5rem)] sm:bottom-[clamp(1.25rem,2.4vw,2.5rem)] sm:m-0 sm:w-[min(24vw,26rem,34svh)] sm:max-w-none"
    />

    <img
      src={images.hedgehog}
      alt=""
      aria-hidden="true"
      width="422"
      height="308"
      class="pointer-events-none absolute object-contain bottom-0 left-[6%] z-10 w-[clamp(8rem,40vw,14rem)] aspect-422/308 select-none sm:left-[9.6%] sm:max-h-[30svh] sm:w-[24%] sm:max-w-[21rem]"
    />

    <img
      src={images.heroForeground}
      alt=""
      aria-hidden="true"
      width="1414"
      height="501"
      class="pointer-events-none absolute inset-x-0 bottom-0 z-20 w-full max-w-none translate-y-[55%] select-none"
    />
  </div>

</section>

<style>
  @media (width < 40rem) {
    .attendee-hero {
      padding-top: clamp(2.5rem, 7svh, 4rem);
      padding-bottom: 4rem;
    }

    .attendee-layout {
      gap: 2rem;
    }

    .attendee-content {
      flex: none;
      margin-top: 0;
    }

    .attendee-copy {
      max-width: 26rem;
      padding-inline: 0.5rem;
    }

    .attendee-brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }

    .attendee-logo {
      width: min(72vw, 20rem);
      max-width: 100%;
    }

    .attendee-city {
      font-size: clamp(2rem, 8.5vw, 2.75rem);
      translate: none;
      transform: none;
    }

    .attendee-tagline {
      margin-top: 1.5rem;
      font-size: 1rem;
      text-wrap: balance;
    }

    .attendee-copy :global(form) {
      margin-top: 1.5rem;
    }

    .attendee-scroll {
      margin-top: auto;
      padding-top: 1.5rem;
    }

    .attendee-hedgehog {
      width: clamp(6rem, 26vw, 8rem);
    }
  }
</style>
