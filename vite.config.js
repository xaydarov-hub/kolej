import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const galleryModuleId = 'virtual:gallery-assets'
const resolvedGalleryModuleId = `\0${galleryModuleId}`
const imageExtensions = /\.(avif|gif|jpe?g|png|webp)$/i

function galleryAssetsPlugin() {
  return {
    name: 'gallery-assets',
    resolveId(id) {
      return id === galleryModuleId ? resolvedGalleryModuleId : undefined
    },
    load(id) {
      if (id !== resolvedGalleryModuleId) return undefined

      const publicDir = path.resolve(process.cwd(), 'public')
      const images = fs.existsSync(publicDir)
        ? fs.readdirSync(publicDir)
            .filter((fileName) => imageExtensions.test(fileName))
            .map((fileName) => {
              const filePath = path.join(publicDir, fileName)
              return {
                fileName,
                modifiedAt: fs.statSync(filePath).mtimeMs,
              }
            })
        : []

      return `export default ${JSON.stringify(images)}`
    },
    handleHotUpdate({ file, server }) {
      const publicDir = path.resolve(process.cwd(), 'public')
      if (!file.startsWith(publicDir)) return

      const module = server.moduleGraph.getModuleById(resolvedGalleryModuleId)
      if (module) server.moduleGraph.invalidateModule(module)
      server.ws.send({ type: 'full-reload' })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [galleryAssetsPlugin(), react()],
})
