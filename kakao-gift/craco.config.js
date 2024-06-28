import { defineConfig } from '@craco/craco'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
})
