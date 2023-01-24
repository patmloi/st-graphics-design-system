<script>
  import { onMount } from 'svelte'
  import { injectScript } from '$utils'

  export let autoplay
  export let loop
  export let controls
  export let account
  export let videoId

  $: autoplay = autoplay || undefined
  $: loop = loop || undefined
  $: controls = controls || undefined

  onMount(() => {
    injectScript({
      src: `https://players.brightcove.net/${account}/default_default/index.min.js`,
      async: true,
    })
  })
</script>

<video
  class="video-js"
  {autoplay}
  {loop}
  {controls}
  playsinline
  muted
  controlsList="nodownload"
  data-application-id
  data-playlist-id
  data-account={account}
  data-video-id={videoId}
  data-player="default"
  data-embed="default"
/>

<style lang="scss">
  :global(.vjs-dock-shelf, .vjs-social-overlay) {
    display: none;
  }
</style>
