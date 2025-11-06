import { copyFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// Function to recursively find all HTML files and return them with clean names
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
                // Use just the filename without .html as the key (e.g., 'page2' instead of 'src-html-page2')
                const fileName = item.replace('.html', '');
                files[fileName] = fullPath;
            }
        }
    } catch (error) {
        // Silently ignore directory read errors
    }
    
    return files;
};

// Plugin to move HTML files from dist/src/html/* to dist/* for production routing
const flattenHtmlPlugin = () => {
    return {
        name: 'flatten-html',
        writeBundle() {
            const srcHtmlDir = resolve(__dirname, 'dist/src/html');
            const distRoot = resolve(__dirname, 'dist');
            
            try {
                const htmlFiles = readdirSync(srcHtmlDir).filter(file => file.endsWith('.html'));
                
                for (const file of htmlFiles) {
                    copyFileSync(resolve(srcHtmlDir, file), resolve(distRoot, file));
                }
            } catch (error) {
                // Directory may not exist, ignore
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
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@js': resolve(__dirname, 'src/js'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@html': resolve(__dirname, 'src/html'),
            '@helpers': resolve(__dirname, 'src/js')
        }
    },
    server: {
        open: true,
        host: true
    },
    plugins: [flattenHtmlPlugin()]
});