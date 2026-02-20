import {
    defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: [{
            find: "@",
            replacement: path.resolve(__dirname, "src")
        }],
    },
    optimizeDeps: {
        exclude: ['js-big-decimal']
    },
    build: {
        cssMinify: 'lightningcss',
        minify: 'esbuild',
        cssCodeSplit: true,
    }
})