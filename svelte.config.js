import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/assets/styles/`;

console.log(sassPath)

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      scss: {
        prependData: `@import '${sassPath}global';`
      }
    }),
  ],
  onwarn: (warning, handler) => {
    if (warning.code === 'css-unused-selector') return;
    handler(warning);
  },
};
