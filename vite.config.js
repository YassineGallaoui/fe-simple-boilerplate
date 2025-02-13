import postcssHash from 'postcss-hash';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about.html'),
            },
        },

    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
        postcss: {
            plugins: [
                postcssHash({
                    algorithm: 'sha256',
                    trim: 8,
                    manifest: 'asset-manifest.json'
                })
            ]
        }
    }
});