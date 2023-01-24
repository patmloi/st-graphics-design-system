<script>
  import { onMount } from 'svelte'
  import 'iframe-resizer/js/iframeResizer'
  import { Figure } from '$components/page/article/body'

  let src
  export { src as value }

  let maxWidth = null
  export { maxWidth as maxwidth }

  export let title = undefined

  let iframe

  onMount(() => {
    window.iFrameResize({ heightCalculationMethod: 'lowestElement' }, iframe)
  })
</script>

<Figure {maxWidth}>
  <iframe bind:this={iframe} {src} {title} />
</Figure>

<style lang="scss">
  iframe {
    display: block;
    width: 1px;
    min-width: 100%;
    overflow: hidden;
    border: 0;
  }
</style>
