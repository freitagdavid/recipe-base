import {Recipe} from "@/pages/Home";
import "../../app/globals.css";
import Image from "next/image";
// @ts-ignore
import {UilClock, UilStar} from "@iconscout/react-unicons";
// @ts-ignore
import markdownJson from "markdown-json";
import {useState} from "react";

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
                prepTime: files[key].prepTime || "",
                difficulty: files[key].difficulty || "",
                id: files[key].title.replace(/\s+/g, "-").toLowerCase(),
            };
        }
    });
    return {
        props: {recipe: out},
    };
};

interface RawRecipe {
    layout: string;
    title: string;
    image: string;
    tags: string[];
    ingredients: string[];
    directions: string[];
    excerpt: {
        text: string;
    };
    prepTime?: string;
    difficulty?: string;
    rating?: number;
    servings?: number;
    dietType?: string[];
    nutrition?: {
        calories?: number;
        fat?: number;
        protein?: number;
        carbs?: {
            total?: number;
            fiber?: number;
            sugar?: number;
            net?: number;
        };
    };
    tip?: string;
}

const recipeSchema = (recipe: RawRecipe): Recipe => {
    return {
        layout: recipe.layout || "",
        title: recipe.title || "",
        image: recipe.image || "",
        tags: recipe.tags || [],
        ingredients: recipe.ingredients || [],
        directions: recipe.directions || [],
        description: recipe.excerpt.text || "",
        id: recipe.title.replace(/\s+/g, "-").toLowerCase(),
        prepTime: recipe.prepTime || "",
        difficulty: recipe.difficulty || "",
        rating: recipe.rating || 0,
        servings: recipe.servings || 0,
        nutrition: recipe.nutrition || {},
        tip: recipe.tip || "",
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
        return recipeSchema(file);
    });
    return {
        paths: recipes.map((recipe) => {
            return {params: {title: recipe.id}};
        }),
        fallback: false,
    };
};

const Ingredient = ({key, ingredient, index}: { key: string; ingredient: string; index: number; }) => {
    return (
        <div className="flex border boder-black border-solid">
            <input type="checkbox" className="ml-8 mr-1"/>
            <li>{ingredient}</li>
        </div>
    );
};

const Direction = ({key, direction, index}: { key: string; direction: string; index: number; }) => {
    return (
        <li className="pl-2 py-2 flex align-middle h-16">
            <div className="h-full flex flex-col justify-center pr-3">
                <div
                    className='mr-2 bg-slate-600 p-2 text-white rounded-full w-8 h-8 flex flex-col justify-center text-center'>{index + 1}</div>
            </div>
            <div className="h-full flex flex-col justify-center">
                {direction}
            </div>
        </li>
    );
};

const DurationDifficulty = ({
                                duration,
                                difficulty,
                                className,
                            }: {
    duration?: string;
    difficulty?: string;
    className?: string;
}) => {
    return (
        <div className={`${className} flex justify-around w-full`}>
            {duration && (
                <div className="flex items-center h-fit">
                    <UilClock size="1rem" className="text-white m-1"/>
                    <div className="text-white flex text-md m-1">{`${duration}`}</div>
                </div>
            )}
            {duration && difficulty && <div>{` | `}</div>}
            {difficulty && (
                <div className="text-white flex text-md m-1">{`${difficulty}`}</div>
            )}
        </div>
    );
};

const Stars = ({rating}: { rating: number; }) => {
    const genstars = (rating: number) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<UilStar key={i}/>);
            }
        }
        return stars;
    };
    return (
        <div className="overflow-hidden w-32 relative">
            <div className="flex absolute left-0 top-0">{genstars(rating)}</div>
        </div>
    );
};

const RecipeHeader = ({
                          title,
                          image,
                          description,
                          duration,
                          difficulty,
                          rating,
                          style,
                          className,
                      }: {
    title: string;
    image: string;
    description: string;
    duration: string;
    difficulty: string;
    rating: number;
    className: string;
}) => {
    return (
        <div
            className={`relative w-full h-96 ${className}`}
            style={{...style}}
        >
            <div
                className="relative top-10 left-10 w-1/3 max-h-1/3 bg-black opacity-80 z-10 rounded-xl text-white p-8 flex flex-wrap flex-col">
                <DurationDifficulty
                    duration={duration}
                    difficulty={difficulty}
                    className="pb-2"
                />
                <div className="text-white text-2xl font-bold pb-2">
                    {title}
                </div>
                <div className="text-white text-sm w-full flex pb-2">
                    <Stars rating={rating}/>
                    <div className="text-white">{rating}</div>
                </div>
                <div className="text-white text-lg">{description}</div>
            </div>
            <Image
                src={`/images/${image}`}
                alt={title}
                fill={true}
                className="object-cover"
            />
        </div>
    );
};

const Ingredients = ({recipe, servings}: { recipe: Recipe; servings: number }) => {
    return (
        <div className="bg-gray-200 px-4 py-6 rounded-md" style={{gridArea: "leftPanel"}}>
            <div className="flex gap-x-2">
                <p>Servings: </p>
                <input type="number"
                       className="w-full border-black border-solid border-2 rounded-md overflow-hidden appearance-none"
                       value={servings}/>
            </div>
            <h2 className="text-3xl">Ingredients: </h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => {
                    return (
                        <Ingredient
                            key={ingredient}
                            ingredient={ingredient}
                            index={index}
                        />
                    );
                })}
            </ul>
        </div>
    )
}

const RecipePage = ({recipe}: { recipe: Recipe }) => {
    const [servings, setServings] = useState(recipe.servings || 1);
    return (
        <div
            className="w-full mx-auto min-h-screen"
        >
            <RecipeHeader
                image={recipe.image}
                title={recipe.title}
                description={recipe.description}
                duration={recipe.prepTime}
                difficulty={recipe.difficulty}
                rating={5}
                style={{gridArea: "header"}}
            />
            <div className="flex px-12 pt-8">
                <Ingredients recipe={recipe} servings={servings}/>
                <div className="pl-10">
                    <h2 className="text-3xl">Directions: </h2>
                    <ol>
                        {recipe.directions.map((direction, index) => {
                            return (
                                <Direction key={direction} direction={direction} index={index}/>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipePage;
