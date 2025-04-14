import { readdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Find all HTML files in the root directory
const htmlFiles = readdirSync(__dirname)
    .filter((file) => file.endsWith('.html'))
    .reduce((acc, file) => {
        const name = file.split('.')[0]; // Use filename without extension as the key
        acc[name] = resolve(__dirname, file);
        return acc;
    }, {});

export default defineConfig({
    build: {
        rollupOptions: {
            input: htmlFiles, // Use the dynamically generated object
        },
    },
}); 