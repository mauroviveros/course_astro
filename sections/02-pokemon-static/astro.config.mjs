// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/": "/pokemon/1",
        "/pokemon": "/pokemon/1",
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
