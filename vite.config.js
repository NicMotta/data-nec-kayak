import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  site: 'https://nicmotta.github.io',
  base: '/data-nec-kayak/',
  plugins: [
    react(),
    VitePWA({
      workbox: {
        runtimeCaching: [{
          handler: 'NetworkOnly',
          urlPattern: /\/api\/.*\/*.json/,
          method: 'POST',
          options: {
            backgroundSync: {
              name: 'myQueueName',
              options: {
              maxRetentionTime: 24 * 60
              }
            }
          }
        }]
      }
    })
  ],
})

