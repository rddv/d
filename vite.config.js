import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
  server: {
    host: true,
    watch: { usePolling: true, interval: 300 },
  },
  plugins: [
    react(),
    viteSingleFile(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false,
      },
      includeAssets: ['icon-512.png'],
      manifest: {
        name: 'Дія',
        short_name: 'Дія',
        description: 'Дія — PWA',
        lang: 'uk',
        start_url: './',
        scope: './',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#B3D3EA',
        theme_color: '#B3D3EA',
        icons: [
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
