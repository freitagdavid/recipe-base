import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',

	// Type-check frontmatter using a schema
	schema: z.object({
		layout: z.string(),
		title: z.string(),
		author: z.string(),
	}),
})

const recipes = defineCollection({
	type: 'content',
	schema: z.object({
		layout: z.string(),
		title: z.string(),
		image: z.string(),
		imagecredit: z.string(),
		// tags: z.string(),
		// ingredients: z.array(z.string()),
		// directions: z.array(z.string())
	})
})

export const collections = { blog, recipes };
