<script>
  import { onMount } from 'svelte'
  import { Figure } from '$components/page/article/body'

  let src
  export { src as value }

  let maxWidth = null
  export { maxWidth as maxwidth }

  export let height = null
  export let title = undefined

  let iframe

  $: chartId = src.substring(30, 35)

  onMount(() => {
    window.addEventListener('message', (e) => {
      if (e.data['datawrapper-height'] && e.source === iframe.contentWindow) {
        iframe.style.height = `${e.data['datawrapper-height'][chartId]}px`
      }
    })
  })
</script>

<Figure {maxWidth}>
  <iframe bind:this={iframe} id="datawrapper-chart-{chartId}" {src} style:height {title} />
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
