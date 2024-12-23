import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '127.0.0.1', // Задаём хост
    port: 8080,        // Устанавливаем порт
    strictPort: true   // Если порт занят, приложение не будет переключаться на другой
  }
});