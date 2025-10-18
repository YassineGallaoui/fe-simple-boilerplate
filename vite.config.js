import { copyFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// Function to recursively find all HTML files
const findHtmlFiles = (dir, baseDir = __dirname) => {
    const files = {};
    
    try {
        const items = readdirSync(dir);
        
        for (const item of items) {
            const fullPath = join(dir, item);
            const stat = statSync(fullPath);
            
            if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
                // Recursively search subdirectories
                Object.assign(files, findHtmlFiles(fullPath, baseDir));
            } else if (stat.isFile() && item.endsWith('.html')) {
                // Generate a key name from the file path
                const relativePath = fullPath.replace(baseDir + '/', '');
                const keyName = relativePath.replace(/[/\\]/g, '-').replace('.html', '');
                files[keyName] = fullPath;
            }
        }
    } catch (error) {
        // Silently ignore directory read errors
    }
    
    return files;
};

// Custom plugin to copy HTML files to root for production routing
const copyHtmlPlugin = () => {
    return {
        name: 'copy-html',
        writeBundle() {
            // Copy HTML files to root for proper routing in production
            const srcDir = resolve(__dirname, 'dist/src/html');
            const destDir = resolve(__dirname, 'dist');
            
            try {
                // Find all HTML files in src/html and copy them
                const htmlFiles = readdirSync(srcDir).filter(file => file.endsWith('.html'));
                
                for (const file of htmlFiles) {
                    copyFileSync(resolve(srcDir, file), resolve(destDir, file));
                }
            } catch (error) {
                // Files may not exist in dev mode, ignore error
            }
        }
    };
};

export default defineConfig({
    root: '.',
    base: '/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                // Main index.html file
                main: resolve(__dirname, 'index.html'),
                // Dynamically find all HTML files in src/html
                ...findHtmlFiles(resolve(__dirname, 'src/html'))
            },
            output: {
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]'
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@js': resolve(__dirname, 'src/js'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@html': resolve(__dirname, 'src/html'),
            '@helpers': resolve(__dirname, 'src/js/helpers')
        }
    },
    server: {
        open: true,
        host: true
    },
    plugins: [copyHtmlPlugin()],
});