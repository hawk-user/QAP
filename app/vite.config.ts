import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// 💡 Vite config reference → https://vite.dev/config/

export default defineConfig({
	plugins: [react()],
  	root: 'source'
})
