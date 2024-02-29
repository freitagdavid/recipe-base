import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',

	// Type-check frontmatter using a schema
	schema: z.object({

		title: z.string(),
		author: z.string(),
	}),
})

const recipes = defineCollection({
	type: 'content',
	schema: ({ image, }) => z.object({
		title: z.string(),
		image: image(),
		imagecredit: z.string().optional(),
		tags: z.string().transform((val) => val.split(',')).optional(),
		ingredients: z.array(z.string()).optional(),
		components: z.array(z.string()).optional(),
		directions: z.array(z.string()),
		layout: z.string().transform(() => '')
	})
})

const recipesJson = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({

	})
})

export const collections = { blog, recipes };
