import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    // loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image(),
        // relacion
        author: z.string(),

        // relacion
        tags: z.array(z.string())
    })
});

export const collections = { blog };