import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';


const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');


export default defineConfig({
    root: '/',
    base: '/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // Alias for src/ directory
            '@js': resolve(__dirname, 'src/js'), // Alias for src/js/
            '@styles': resolve(__dirname, 'src/styles'), // Alias for src/styles/
            '@html': resolve(__dirname, 'src/html'), // Alias for src/html/
            '/js': resolve(__dirname, 'src/js') // Fix /js/home.js to src/js/home.js
        }
    },
    server: {
        open: true,
    }
});