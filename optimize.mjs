import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

async function processImages() {
  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    // change extension to webp
    const ext = path.extname(file);
    const outPath = path.join(assetsDir, file.replace(ext, '.webp'));
    
    try {
      await sharp(filePath)
        // Sharpen to help low quality images
        .sharpen({ sigma: 1, m1: 0.5, m2: 2 }) 
        // Enhance colors to make them look more professional
        .modulate({
          brightness: 1.05,
          saturation: 1.15
        })
        // Convert to WebP for massive speed gains
        .webp({ quality: 80 })
        .toFile(outPath);
        
      console.log(`Converted and enhanced ${file}`);
      // Remove original
      if (filePath !== outPath) {
          fs.unlinkSync(filePath);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
  console.log("All images processed successfully!");
}

processImages();
