import fs from 'fs/promises';

export const readRecipes = async () => {
    const files = await fs.readdir('./src/_recipes');
    const recipesMD = await files.map(async (file) => {
        return await fs.readFile(`./src/_recipes/${file}`)
    })
    const readFiles = await Promise.all(recipesMD);
    return readFiles.map((item) => String(item))
}