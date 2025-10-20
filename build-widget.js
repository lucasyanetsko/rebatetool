import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure dist-widget directory exists
const widgetDistDir = join(__dirname, 'dist-widget');
if (!existsSync(widgetDistDir)) {
  console.log('Widget build directory not found. Please run: npm run build:widget first');
  process.exit(1);
}

// Copy to public directory (for development and Vite to pick up)
const publicDir = join(__dirname, 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Copy widget files to public
try {
  copyFileSync(
    join(widgetDistDir, 'widget.iife.js'),
    join(publicDir, 'widget.iife.js')
  );
  console.log('✅ Copied widget.iife.js to public/');

  // Copy CSS if it exists
  try {
    copyFileSync(
      join(widgetDistDir, 'widget.css'),
      join(publicDir, 'widget.css')
    );
    console.log('✅ Copied widget.css to public/');
  } catch (err) {
    console.log('ℹ️  No widget.css file found (this is okay)');
  }

  console.log('✅ Widget files copied to public/ directory!');
  console.log('ℹ️  These files will be included in the main build automatically.');
} catch (err) {
  console.error('❌ Error copying widget files:', err);
  process.exit(1);
}

