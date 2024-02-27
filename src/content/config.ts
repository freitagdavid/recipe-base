import { defineCollection, z } from 'astro:content';
import { Recipe } from 'src/schemas';

const blog = defineCollection({
	type: 'content',

	// Type-check frontmatter using a schema
	schema: z.object({

		title: z.string(),
		author: z.string(),
	}),
})

const nutritionInformation = z.object({
	calories: z.number(),
	carbohydrateContent: z.number(),
	cholesterolContent: z.number(),

})

// const recipes = defineCollection({
// 	type: 'content',
// 	schema: ({ image, }) => z.object({
// 		title: z.string(),
// 		image: image(),
// 		imagecredit: z.string().optional(),
// 		tags: z.string().transform((val) => val.split(',')).optional(),
// 		ingredients: z.array(z.string()).optional(),
// 		components: z.array(z.string()).optional(),
// 		directions: z.array(z.string()),
// 		// In seconds
// 		cookTime: z.number().optional(),
// 		cookingMethod: z.string().optional(),
// 		nutrition: 
// 	})
// })

const recipes = defineCollection({
	type: 'content',
	schema: ({ image }) => Recipe.extend({
		image: image(),
	})
})

export const collections = { blog, recipes };
