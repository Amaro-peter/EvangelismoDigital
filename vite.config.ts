import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import prerender from '@prerenderer/rollup-plugin'

const articleRoutes = [
  '/artigo/deusExiste',
  '/artigo/caminhos',
  '/artigo/oMal'
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/', ...articleRoutes],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterTime: 2000,
        maxConcurrentRoutes: 1,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html.replace(
          /<script(?![^>]*type="application\/ld\+json")([^>]*)>/gi,
          '<script$1 defer>'
        )
      }
    })
  ],
  build: {
    outDir: 'dist'
  }
})