import Image from 'next/image';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import { useRouter } from 'next/navigation';

const Header = () => {
  return (
    <header className="text-white border-white w-full text-center pt-4">My Recipes</header>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8">

    </main>
  )
}
