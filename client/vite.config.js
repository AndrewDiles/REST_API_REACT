import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
		port: 5555,
    proxy: {
      '/api': {
        target: 'http://localhost:8042/',
        changeOrigin: true,
        secure: false,
				rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})