import fs from 'fs/promises';

export const readRecipes = async () => {
    const files = await fs.readdir('./src/_recipes');
    console.log(files);
}