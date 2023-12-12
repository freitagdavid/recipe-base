// @ts-ignore
import markdownJson from 'markdown-json'
import "../../app/globals.css"
import RecipeCard from "@/components/RecipeCard";

export interface Recipe {
    layout: string,
    title: string,
    image: string,
    tags: string[],
    ingredients: string[],
    directions: string[],
    description: string,
    id: string,
}

export const getStaticProps = async () => {
    const files = await markdownJson({
        name: 'recipes',
        cwd: './',
        src: './data/_recipes',
        filePattern: '*.md',
    });
    const recipes = Object.keys(files).map(key => {
        let file = files[key];
        return {
            layout: file.layout || '',
            title: file.title || '',
            image: file.image || '',
            tags: file.tags || [],
            ingredients: file.ingredients || [],
            directions: file.directions || [],
            description: file.excerpt.text || '',
            id: file.title.replace(/\s+/g, '-').toLowerCase(),
        }
    })
    return {
        props: { recipes: recipes }
    }
}

export default function Home({ recipes }: { recipes: Recipe[] }) {
    return (
        <div className='flex flex-wrap gap-5 justify-center bg-white px-12' >
            {
                recipes.map(recipe => {
                    return <RecipeCard recipe={recipe} key={recipe.title} />
                })
            }
        </div >
    )
}