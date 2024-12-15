import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/data/projects",
  }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    tags: z.array(z.string()),
    highlighted: z.boolean().optional().default(false),
    imgUrl: z.string(),
    yearStart: z.number().optional(),
    yearEnd: z.number(),
    url: z.string().url(),
  }),
});

export const collections = { blog, projects };
