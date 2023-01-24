<script>
  import { base } from '$app/paths'
  import { bool } from '$utils'
  import { Figure } from '$components/page/article/body'

  let filepathMobile
  export { filepathMobile as value }

  let hasDesktop = true
  export { hasDesktop as hasdesktop }

  let maxWidth = null
  export { maxWidth as maxwidth }

  // TODO: Add `width` and `height` to documentation.
  export let width = 720
  export let height = 480

  export let alt = undefined
  export let caption = undefined
  export let lazy = true

  let filepathDesktop

  $: hasDesktop = bool(hasDesktop)
  $: {
    if (hasDesktop) {
      const [name, ext] = filepathMobile.split('.')

      filepathDesktop = `${name}-desktop.${ext}`
    }
  }
  $: alt = alt || caption || ''
  $: src = `${base}/assets/images/${filepathMobile}`
  $: srcset = `${base}/assets/images/${filepathDesktop}`
  $: loading = bool(lazy) ? 'lazy' : 'eager'
</script>

<Figure {caption} {maxWidth}>
  <picture>
    {#if hasDesktop}
      <!-- <source media="(min-width: 768px)" {srcset} data-gumlet="false" /> -->
      <source {srcset} media="(min-width: 768px)" />
    {/if}

    <!-- <img {src} {alt} loading="lazy" {width} {height} data-gumlet="false" /> -->
    <img {alt} {src} {width} {height} {loading} />
  </picture>
</Figure>

<style lang="scss">
  img {
    width: 100%;
  }
</style>
