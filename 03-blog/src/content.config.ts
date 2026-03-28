import { defineCollection, reference, z } from "astro:content";

const author = defineCollection({
    type: "data",
    schema: ({image}) => z.object({
        name: z.string(),
        avatar: image(),
        twitter: z.string().optional(),
        linkedIn: z.string().url(),
        github: z.string().url(),
        bio: z.string(),
        subtitle: z.string(),
    })
})

const blog = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image(),
        author: reference('author'),
        tags: z.array(z.string()), // relacion
        published: z.boolean().default(true)
    }),
    
});

export const collections = { blog, author };