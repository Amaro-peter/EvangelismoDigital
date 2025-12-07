import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import prerender from '@prerenderer/rollup-plugin'
import chromium from '@sparticuz/chromium'

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
        renderAfterTime: 5000,
        maxConcurrentRoutes: 1,
        headless: 'new',
        executablePath: process.env.VERCEL 
          ? await chromium.executablePath()
          : undefined,
        args: process.env.VERCEL
          ? chromium.args
          : [
              '--no-sandbox', 
              '--disable-setuid-sandbox',
              '--disable-dev-shm-usage',
              '--disable-gpu'
            ],
        puppeteerLaunchOptions: {
          timeout: 60000
        }
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