// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import lodash from 'lodash';
import MT from 'mark-twain';
const recipes = import.meta.glob('$lib/data/_recipes/*.md', { eager: true, as: 'raw' });

const parse = (markdown: string) => {
	return MT(markdown);
};

export const load = () => {
	const parsedRecipes = lodash.map(recipes, (recipe, key) => {
		return {
			...parse(recipe),
			filePath: key
		};
	});
	return {
		recipes: parsedRecipes
	};
};
