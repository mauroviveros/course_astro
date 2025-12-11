// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
      "/pokemons": "/pokemons/1",
  },
  vite: {
      plugins: [tailwindcss()],
  },
  integrations: [icon()],
});