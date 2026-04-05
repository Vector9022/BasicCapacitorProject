import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../prebuild',
    emptyOutDir: true
  }
})