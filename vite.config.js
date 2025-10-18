import { copyFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// Custom plugin to copy HTML files to root for production routing
const copyHtmlPlugin = () => {
    return {
        name: 'copy-html',
        writeBundle() {
            // Copy HTML files to root for proper routing in production
            const srcDir = resolve(__dirname, 'dist/src/html');
            const destDir = resolve(__dirname, 'dist');
            
            try {
                copyFileSync(resolve(srcDir, 'auth.html'), resolve(destDir, 'auth.html'));
                copyFileSync(resolve(srcDir, 'page2.html'), resolve(destDir, 'page2.html'));
            } catch (error) {
                // Files may not exist in dev mode, ignore error
            }
        }
    };
};

export default defineConfig({
    root: '.', // Set root to current directory
    base: '/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                auth: resolve(__dirname, 'src/html/auth.html'),
                page2: resolve(__dirname, 'src/html/page2.html')
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
            '@helpers': resolve(__dirname, 'src/js/helpers'),
            '@utils': resolve(__dirname, 'src/styles/utils')
        }
    },
    server: {
        open: true,
        host: true
    },
    plugins: [copyHtmlPlugin()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@utils/variables" as *;`
            }
        }
    }
});