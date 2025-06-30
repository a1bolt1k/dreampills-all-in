import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/dreampills-all-in/', // Замените на имя репозитория!
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dreampills: resolve(__dirname, 'project-dreampills.html'),
        posters: resolve(__dirname, 'project-posters-dreampills.html'),
        architecture: resolve(__dirname, 'project-architecture-dreampills.html')
      }
    },
    outDir: 'dist', // Или 'docs' для GitHub Pages
  }
})