<script lang="ts">
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>{page.status === 404 ? "Էջը չի գտնվել" : "Սխալ է առաջացել"} — Haven Երևան</title>
</svelte:head>

<main id="main" class="grid min-h-svh place-content-center gap-6 px-6 text-center text-white">
  <p class="font-display text-hero">{page.status}</p>
  <h1 class="font-display text-heading">
    {page.status === 404 ? "Էջը չի գտնվել։" : "Սխալ է առաջացել։ Փորձիր կրկին ավելի ուշ։"}
  </h1>
  <a href="/yerevan" class="font-body text-lead underline">Վերադառնալ գլխավոր էջ</a>
</main>
