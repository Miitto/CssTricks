import { defineConfig } from 'astro/config';
import { transformerNotationDiff } from '@shikijs/transformers';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://Miitto.github.io',
  base: 'WebRef',
  integrations: [svelte()],
  markdown: {
    syntaxHighlighting: 'shiki',
    shikiConfig: {
      wrap: false,
      transformers: [
        transformerNotationDiff(),
      ]
    }
  }
});