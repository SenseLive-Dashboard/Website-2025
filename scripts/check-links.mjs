#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globby } from 'globby';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

async function checkLinks() {
  console.log('Checking for broken links and asset references...');
  
  // Find all TSX/JSX files
  const files = await globby([
    'app/**/*.tsx',
    'app/**/*.jsx',
    'components/**/*.tsx',
    'components/**/*.jsx',
  ], { cwd: ROOT_DIR });
  
  const issues = [];
  const seenAssets = new Set();
  
  // Check each file for image references and links
  for (const file of files) {
    const content = fs.readFileSync(path.join(ROOT_DIR, file), 'utf8');
    const filePath = path.join(ROOT_DIR, file);
    
    // Look for image src attributes
    const imgMatches = content.matchAll(/src=["']([^"']+)["']/g);
    for (const match of imgMatches) {
      const src = match[1];
      if (src.startsWith('/') && !src.startsWith('//') && !src.startsWith('/api/')) {
        const assetPath = path.join(ROOT_DIR, 'public', src);
        seenAssets.add(assetPath);
        if (!fs.existsSync(assetPath)) {
          issues.push(`Missing asset: ${src} referenced in ${file}`);
        }
      }
    }
    
    // Look for href attributes
    const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);
    for (const match of hrefMatches) {
      const href = match[1];
      if (href.startsWith('/') && !href.startsWith('//') && !href.includes('#') && !href.startsWith('/api/')) {
        // Check if it's a route that should exist
        const routePath = href === '/' ? '/app/page.tsx' : `/app${href}${href.endsWith('/') ? 'page.tsx' : '/page.tsx'}`;
        const fullRoutePath = path.join(ROOT_DIR, routePath.replace(/\/\//g, '/'));
        if (!fs.existsSync(fullRoutePath) && !fs.existsSync(fullRoutePath.replace('page.tsx', 'index.tsx'))) {
          issues.push(`Potential broken link: ${href} referenced in ${file}`);
        }
      }
    }
  }
  
  // Check for unused assets
  const publicAssets = await globby(['**/*.*'], { cwd: path.join(ROOT_DIR, 'public') });
  for (const asset of publicAssets) {
    const assetPath = path.join(ROOT_DIR, 'public', asset);
    if (!seenAssets.has(assetPath) && !asset.includes('favicon') && !asset.includes('.ico') && !asset.includes('robots.txt')) {
      issues.push(`Potentially unused asset: /public/${asset}`);
    }
  }
  
  if (issues.length > 0) {
    console.log('Issues found:');
    issues.forEach(issue => console.log(`- ${issue}`));
  } else {
    console.log('No broken links or missing assets found!');
  }
}

checkLinks().catch(console.error);

