import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = dirname(fileURLToPath(import.meta.url));
const scssPath = `${filePath}/src/assets/styles/`;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "${scssPath}global";`,
			}
		},
	},
});
