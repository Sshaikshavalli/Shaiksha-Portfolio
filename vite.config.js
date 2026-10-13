import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// viteSingleFile bundles JS, CSS and fonts into one dist/index.html,
// so the built site also opens by double-clicking the file.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
})
