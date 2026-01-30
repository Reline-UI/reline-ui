import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'RelineUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `reline-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } }
    }
  }
})
