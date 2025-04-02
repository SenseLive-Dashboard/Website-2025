#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globby } from 'globby';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

async function optimizeImages() {
  console.log('Optimizing images...');
  
  // Find all image files in public directory
  const imageFiles = await globby([
    'public/**/*.{jpg,jpeg,png,gif}',
  ], { cwd: ROOT_DIR });
  
  let optimizedCount = 0;
  
  for (const file of imageFiles) {
    const filePath = path.join(ROOT_DIR, file);
    const fileSize = fs.statSync(filePath).size;
    
    // Skip already optimized images or very small images
    if (fileSize < 10000) {
      console.log(`Skipping ${file} (already small: ${Math.round(fileSize / 1024)}KB)`);
      continue;
    }
    
    try {
      // Process the image
      const image = sharp(filePath);
      const metadata = await image.metadata();
      
      // Resize large images
      if (metadata.width > 1920) {
        console.log(`Resizing ${file} from ${metadata.width}x${metadata.height} to 1920px width`);
        image.resize(1920);
      }
      
      // Compress the image
      if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
        await image.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      } else if (metadata.format === 'png') {
        await image.png({ compressionLevel: 9, palette: true }).toBuffer();
      } else {
        await image.toBuffer();
      }
      
      // Save the optimized image
      await image.toFile(filePath);
      
      const newSize = fs.statSync(filePath).size;
      const savedPercent = Math.round((1 - newSize / fileSize) * 100);
      
      console.log(`Optimized ${file}: ${Math.round(fileSize / 1024)}KB → ${Math.round(newSize / 1024)}KB (${savedPercent}% smaller)`);
      optimizedCount++;
      
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log(`Optimization complete. Processed ${optimizedCount} of ${imageFiles.length} images.`);
}

optimizeImages().catch(console.error);

