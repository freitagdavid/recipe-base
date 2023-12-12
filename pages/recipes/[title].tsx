import { Recipe } from "@/pages/Home";
import "../../app/globals.css"
import Image from "next/image";
// @ts-ignore
import markdownJson from "markdown-json";

export const getStaticProps = async (props: { params: { title: string } }) => {
    const files = await markdownJson({
        name: "recipes",
        cwd: "./",
        src: "data/_recipes",
        filePattern: "*.md",
    });
    let out = {};
    Object.keys(files).forEach((key) => {
        const id = files[key].title.replace(/\s+/g, "-").toLowerCase();
        if (id === props.params.title) {
            out = {
                layout: files[key].layout || "",
                title: files[key].title || "",
                image: files[key].image || "",
                tags: files[key].tags || [],
                ingredients: files[key].ingredients || [],
                directions: files[key].directions || [],
                description: files[key].excerpt.text || "",
                id: files[key].title.replace(/\s+/g, "-").toLowerCase(),
            };
        }
    });
    return {
        props: { recipe: out },
    };
};

export const getStaticPaths = async () => {
    const files = await markdownJson({
        name: "recipes",
        cwd: "./",
        src: "data/_recipes",
        filePattern: "*.md",
    });
    const recipes = Object.keys(files).map((key) => {
        let file = files[key];
        return {
            layout: file.layout || "",
            title: file.title || "",
            image: file.image || "",
            tags: file.tags || [],
            ingredients: file.ingredients || [],
            directions: file.directions || [],
            description: file.excerpt.text || "",
            id: file.title.replace(/\s+/g, "-").toLowerCase(),
        };
    });
    return {
        paths: recipes.map((recipe) => {
            return { params: { title: recipe.id } };
        }),
        fallback: false,
    };
};

const Ingredient = ({ key, ingredient }) => {
    return (
        <li className="border border-solid border-gray-400 p-2">{ingredient}</li>
    );
};

const RecipePage = ({ recipe }: { recipe: Recipe }) => {
    return (
        <div className="border border-red-500 border-solid max-w-7xl mx-auto mt-8 grid" style={{
            gridTemplateAreas: `
            "image image"
            "title title"
            "ingredients directions"
            "description description"
        `}}>
            <div className='relative h-96 aspect-auto w-full' style={{ gridArea: 'image' }}>
                <Image src={`/images/${recipe.image}`} alt={recipe.title} fill={true} className='aspect-auto object-cover' />
            </div>
            <h1 className='text-4xl font-medium w-full text-center' style={{ gridArea: 'title' }}>{recipe.title}</h1>
            <div className="ingredients" style={{ gridArea: 'ingredients' }}>{recipe.ingredients.map((ingredient) => {
                return <Ingredient key={ingredient} ingredient={ingredient} />;
            })}</div>
            <div style={{ gridArea: 'directions' }}>{recipe.directions}</div>
            <p style={{ gridArea: 'description' }}>{recipe.description}</p>
        </div>
    );
};

export default RecipePage;
