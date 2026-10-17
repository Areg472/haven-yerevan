import adapterVercel from "@sveltejs/adapter-vercel";
import adapterNode from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// Vercel builds get the Vercel adapter (serverless SSR); everything else
// (Docker etc.) gets the self-hosted Node adapter.
const adapter = process.env.VERCEL ? adapterVercel() : adapterNode();

export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter,

    // Our own same-origin check lives in src/hooks.server.ts so the routes
    // Airtable, Fillout and Slack call can be exempted by path — SvelteKit's
    // built-in check has no such escape hatch.
    csrf: { checkOrigin: false },
  },
};