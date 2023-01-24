import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from '@zerodevx/svelte-img/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), imagetools()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/_functions.scss" as *;
          @use "src/styles/_variables.scss" as *;
        `,
      },
    },
  },
}

export default config
