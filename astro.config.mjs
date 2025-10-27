// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  output: 'server',
  adapter: vercel(),
  
  // Optimizaciones de rendimiento
  compressHTML: true,
  
  // Configuración de imágenes
  image: {
    domains: ['www.novoformaserveis.es'],
    remotePatterns: [{ protocol: 'https' }],
  },
  
  // Configuración de build
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  
  // Configuración de prefetch
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});