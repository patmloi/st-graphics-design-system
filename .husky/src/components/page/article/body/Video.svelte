<script>
  import { Brightcove, IFrame, Local } from './video'
  import { bool } from '$utils'
  import { Figure } from '$components/page/article/body'

  export let value
  export let mode = 'local'
  export let autoplay = true
  export let loop = true
  export let controls = true
  export let caption = undefined

  let aspectRatio = '16/9'
  export { aspectRatio as aspectratio }

  // Local
  export let poster = undefined

  let hasDesktop = true
  export { hasDesktop as hasdesktop }

  // IFrame
  let title = undefined

  // Brightcove
  let account = undefined
  export { account as accountid }

  const componentMapping = {
    brightcove: Brightcove,
    iframe: IFrame,
    local: Local,
  }

  $: autoplay = bool(autoplay)
  $: loop = bool(loop)
  $: controls = bool(controls)
  $: hasDesktop = bool(hasDesktop)
  $: props = {
    brightcove: {
      autoplay,
      loop,
      controls,
      account,
      videoId: value,
    },
    iframe: {
      title,
      src: value,
    },
    local: {
      poster,
      autoplay,
      loop,
      controls,
      hasDesktop,
      src: value,
    },
  }[mode]
</script>

<Figure {caption}>
  <div style:--video-aspect-ratio={aspectRatio} data-video-mode={mode}>
    <svelte:component this={componentMapping[mode]} {...props} />
  </div>
</Figure>

<style lang="scss">
  div {
    position: relative;
    aspect-ratio: var(--video-aspect-ratio);

    & :global(> :first-child) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  @supports not (aspect-ratio: 1) {
    div {
      &::before {
        display: block;
        padding-bottom: calc(100% / (var(--video-aspect-ratio)));
        content: '';
      }
    }
  }
</style>
