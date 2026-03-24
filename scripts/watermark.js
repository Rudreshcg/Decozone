import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';

const watermarkText = 'TVASHTA INTERIOR';
const assetsDir = 'src/assets';
const projectDirs = ['project_1', 'project_2', 'project_3'];

async function addWatermark(imagePath) {
    try {
        const image = await Jimp.read(imagePath);
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        
        // Calculate text width/height
        const textWidth = Jimp.measureText(font, watermarkText);
        const textHeight = Jimp.measureTextHeight(font, watermarkText);
        
        // Position: Bottom Right
        const posX = image.getWidth() - textWidth - 20;
        const posY = image.getHeight() - textHeight - 20;
        
        // Add semi-transparent background for text visibility if needed, or just draw
        image.print(font, posX, posY, watermarkText);
        
        await image.writeAsync(imagePath);
        console.log(`Watermarked: ${imagePath}`);
    } catch (err) {
        console.error(`Error watermarking ${imagePath}:`, err);
    }
}

async function main() {
    for (const projectDir of projectDirs) {
        const fullDir = path.join(assetsDir, projectDir);
        if (!fs.existsSync(fullDir)) continue;
        
        const files = fs.readdirSync(fullDir);
        for (const file of files) {
            if (file.match(/\.(jpe?g|png|avif)$/i)) {
                await addWatermark(path.join(fullDir, file));
            }
        }
    }
}

main();
