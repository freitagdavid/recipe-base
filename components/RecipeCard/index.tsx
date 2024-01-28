import Image from 'next/image'
import { truncate } from '@/utils'
import { Recipe } from '@/pages/Home';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardImage, CardTitle} from "@/components/ui/card";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
    return (
        <Link href={{ pathname: `/recipes/[title]`, query: { title: recipe.id } }}
            className='flex'
        >
            <Card className='w-80 hover:scale-105 hover:shadow-xl hover:z-10 duration-100'>
                <CardImage src={`/images/${recipe.image}`} alt={recipe.title} />
                <CardHeader>
                    <CardTitle>
                        {recipe.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                        {truncate(recipe.description, 100)}
                </CardContent>
            </Card>
        </Link>
    )
}

{/*<div*/}
{/*    className="rounded-md w-80 border border-gray-400 border-solid shadow-md hover:scale-105 hover:shadow-xl hover:z-10 duration-100"*/}
{/*    key={key}>*/}
{/*</div>*/}

export default RecipeCard;