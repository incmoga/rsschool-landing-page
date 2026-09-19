import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: './', // чтобы пути были относительными (важно для деплоя)

  build: {
    sourcemap: true,   // включить source maps
    minify: false,     // отключить минификацию JS
    cssMinify: false,  // отключить минификацию CSS
    rollupOptions: {
      input: {
        // Указываем точку входа для главной страницы
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        menu: fileURLToPath(new URL('./menu.html', import.meta.url)),
      },
    },
  },
});