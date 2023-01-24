import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

// https://kit.svelte.dev/docs/configuration#paths
let base = ''

switch (process.env.NODE_ENV) {
  case 'staging':
  case 'production':
    break

  default:
    base = ''
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // The deploy tool expects a `dist` folder.
    // Not to be confused with the `outDir` configuration.
    // https://kit.svelte.dev/docs/configuration#outdir
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
    }),

    alias: {
      $components: 'src/components',
      // '$components/*': 'src/components/*',
      $styles: 'src/styles',
      // '$styles/*': 'src/styles/*',
      $utils: 'src/utils',
      // '$utils/*': 'src/utils/*',
      $src: 'src/*',
      // '$src/*': 'src/*',
    },

    paths: {
      base,
    },
  },

  preprocess: [
    preprocess({
      postcss: true,

      scss: {
        prependData: `
          @use "src/styles/_functions.scss" as *;
          @use "src/styles/_variables.scss" as *;
        `,
      },
    }),
  ],
}

export default config
