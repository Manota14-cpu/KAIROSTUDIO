import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('gsap')) return 'gsap'
          if (id.includes('lenis')) return 'lenis'
          if (id.includes('framer-motion') || id.includes('motion')) return 'motion'
          if (id.includes('react-dom') || id.includes('react/')) return 'react'
        },
      },
    },
  },
})
