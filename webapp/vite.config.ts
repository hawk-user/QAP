import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// 💡 Vite config reference → https://vite.dev/config/

export default defineConfig({
	plugins: [ react() ],
  	root: 'source',
	resolve: {
  		alias: { '@libs': path.resolve(__dirname, '../libs') }
	}
})