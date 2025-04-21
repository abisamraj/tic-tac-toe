import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/tic-tac-toe/',
  plugins: [
    react({
      jsxRuntime: 'automatic', // Optional: Specify JSX runtime
    }),
  ],
  build: {
    outDir: 'docs',
    sourcemap: true, // Optional: Include source maps for debugging
  },
  server: {
    port: 3000, // Optional: Customize dev server port
  },
})
