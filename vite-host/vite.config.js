import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

const { dependencies } = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'vite-host',
      filename: 'remoteEntry.js',
      remotes:{
        remote: {
          external: 'http://localhost:3001/remoteEntry.js',
          format: 'var',
          from: 'webpack',
        },
      },
      shared: dependencies,
    }),
  ],
  build: {
    target: 'esnext'
  }
})
