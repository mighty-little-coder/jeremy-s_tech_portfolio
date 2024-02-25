// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '127.0.0.1',
//     port: 3018,
//     open: true
//   }
// })




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true
//   },
//   build: {
//     outDir: 'dist', // Specify the output directory
//     rollupOptions: {
//       input: {
//         main: './src/main.jsx'
//       }
//     },
//     base: '/', // Adjust this if your app is not deployed at the root of the domain
//     assetsDir: 'assets', // Folder for static assets
//     emptyOutDir: true, // Clear output directory before building
//     manifest: true, // Generate manifest.json file
//     minify: 'esbuild', // Minify the output using esbuild
//     sourcemap: true, // Generate sourcemaps
//     target: 'modules', // Build target (modern browsers)
//     publicDir: 'public' // Specify the public directory
//   }
// })



// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    rollupOptions: {
      input: {
        main: './src/main.jsx'
      }
    },
    base: '/', // Adjust this if your app is not deployed at the root of the domain
  },
});
