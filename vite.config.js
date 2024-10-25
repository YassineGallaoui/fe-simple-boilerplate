import postcssHash from 'postcss-hash';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',  // Set src as root
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    css: {
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