import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
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
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),
    tags: z.array(z.string()),
    highlighted: z.boolean().optional().default(false),
    imgUrl: z.string(),
    yearStart: z.number().optional(),
    yearEnd: z.number(),
  }),
});

export const collections = { blog, projects };
