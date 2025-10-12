import { copyFileSync, existsSync, readdirSync, rmSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Automatically detect HTML files in src/html directory
const htmlDir = resolve(__dirname, 'src/html');
const htmlFiles = readdirSync(htmlDir)
    .filter(file => file.endsWith('.html'))
    .reduce((acc, file) => {
        const name = file.replace('.html', '');
        acc[name] = resolve(htmlDir, file);
        return acc;
    }, {});

// Custom plugin to move HTML files to dist root
const moveHtmlToRoot = () => {
    return {
        name: 'move-html-to-root',
        writeBundle(options) {
            // Move HTML files from dist/src/html/ to dist/
            const distDir = options.dir || 'dist';
            const htmlDir = join(distDir, 'src', 'html');
            
            if (existsSync(htmlDir)) {
                const files = readdirSync(htmlDir);
                files.forEach(file => {
                    if (file.endsWith('.html')) {
                        const sourcePath = join(htmlDir, file);
                        const destPath = join(distDir, file);
                        copyFileSync(sourcePath, destPath);
                    }
                });
                
                // Clean up the src directory in dist
                rmSync(join(distDir, 'src'), { recursive: true, force: true });
            }
        }
    };
};

export default defineConfig({
    plugins: [moveHtmlToRoot()],
    build: {
        rollupOptions: {
            input: htmlFiles
        },
        outDir: 'dist'
    },
    // Configure public directory
    publicDir: 'public',
    // Configure root for development server
    root: __dirname,
    // Configure how assets are resolved
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    // Custom middleware to serve HTML files from root paths
    configureServer(server) {
        server.middlewares.use((req, res, next) => {
            // Serve HTML files at root paths during development
            if (req.url && req.url.endsWith('.html') && !req.url.startsWith('/src/')) {
                req.url = `/src/html${req.url}`;
            }
            next();
        });
    }
}); 