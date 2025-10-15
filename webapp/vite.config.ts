import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

// 💡 Vite config reference → https://vite.dev/config/

export default defineConfig({
	plugins: [ react() ],
  	root: 'source',
	base: './',
	resolve: {
  		alias: { '@libs': path.resolve(__dirname, '../libs') }
	},
	build: {
    	outDir: path.resolve(__dirname, 'dist'),
    	emptyOutDir: true,
    	rollupOptions: {
      		input: [ 
				'@libs/react-material',
				'source/index.html' 
			]
    	}
  	}
})