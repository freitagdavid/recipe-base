import Image from 'next/image'
import { truncate } from '@/utils'

const RecipeCard = ({ recipe, key }) => {
    return (
        // <div style={{ border: '1px solid red', width: "100%", display: 'flex', flexDirection: 'column' }}></div>
        <div className="rounded-md w-80 border border-gray-400 border-solid shadow-md hover:scale-105 hover:shadow-xl hover:z-10 duration-100" key={key}>
            <div className='relative h-72 aspect-auto'>
                <Image src={`/images/${recipe.image}`} alt={recipe.title} fill={true} className='aspect-auto object-cover' />
            </div>
            <h1 className='p-2 border-solid border-gray-400 border-b'>{recipe.title}</h1>
            <p className='p-2'>{truncate(recipe.description, 100)}</p>
        </div>
    )
}

export default RecipeCard;