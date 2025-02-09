import postcssHash from 'postcss-hash';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true
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