<script>
  import { md } from '$utils'
  import { onMount } from 'svelte'
  import { viewport, currentMenu } from './photoscrollyStore.js'
  import Img from '@zerodevx/svelte-img'

  export let justify
  export let innerWidth
  export let images
  export let v
  export let scrollY

  let stack
  let card
  let innerHeight
  let offsetTop
  let stickyHeader = 0
  let img_width = images[0].width
  let img_height = images[0].height

  $: cardHeight = card?.offsetHeight
  $: dynamicHeight = (scrollY - offsetTop) / (innerHeight / 100)
  $: imgHeightValue = 100 - dynamicHeight
  $: imgHeight = imgHeightValue + '%'
  $: marginBottom = -1 * (innerHeight - cardHeight - stickyHeader - 20) + 'px'

  $: imgRatio = img_width / img_height
  $: currentImgWidth = (innerHeight / 100) * (imgHeightValue * imgRatio)

  const setJustify = (justify) =>
    justify === 'flex-start' ? 'flex-start' : justify === 'flex-end' ? 'flex-end' : ''
  const onEnterViewport = () => {
    offsetTop = stack?.offsetTop
    currentMenu.set(v.photo)
  }

  onMount(() => window.addEventListener('resize', () => (cardHeight = card?.offsetHeight)))
</script>

<div
  class="stack"
  bind:this={stack}
  use:viewport
  on:enterViewport={() => onEnterViewport()}
  style="

--margin-bottom: {marginBottom};"
>
  <div class="top" bind:clientHeight={innerHeight} style="

--top: {stickyHeader}px;">
    <div class={`zoom ${setJustify(justify)}`}>
      <Img
        class="image {currentImgWidth > innerWidth ? 'img-zoomed' : 'img-default'}"
        style="

--height: {imgHeight}; --min-width: {innerWidth}px !important"
        src={images}
        alt="img"
      />
    </div>
  </div>
  <div class="bottom">
    <div class="card" bind:this={card}>
      <h1 class="title">{v.title}</h1>
      <p class="caption">{@html md(v.caption)}</p>
      <p class="credits">{@html md(v.credits)}</p>
    </div>
  </div>
</div>

<style lang="scss" scoped>
  .stack {
    margin-bottom: var(--margin-bottom);

    .top {
      position: sticky;
      position: sticky;
      top: var(--top);
      width: 100%;
      height: 100vh;

      .zoom {
        position: inherit;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: #000;

        .img-default {
          width: 100%;
          min-width: var(--min-width);
          max-height: 100vh;
          transition: none;
          transform: translate(0, 0) !important;
        }
      }

      .zoom.flex-start {
        justify-content: flex-start !important;
      }

      .zoom.flex-end {
        justify-content: flex-end !important;
      }
    }

    .bottom {
      position: relative;
      top: 44px;
      height: 100vh;
      pointer-events: none;
      background: #000;

      .card {
        max-width: 600px;
        padding: 15px 20px 50px;
        margin: 0 auto;
        background: #000;

        .title {
          display: block;
          padding-bottom: 10px;
          margin-bottom: 15px;
          font-family: $font-curator-bold;
          font-size: 22px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 5px;
          border-bottom: solid 1px #9da6b0;
        }

        .caption {
          font-family: $font-selane-text-regular;
          font-size: 22px;
          color: #fff;
        }

        .credits {
          padding: 10px 0 0;
          font-family: $font-curator-regular;
          font-size: 15px;
          color: #9da6b0;
        }
      }
    }
  }

  :global(.image.img-zoomed) {
    width: auto;
    min-width: 100%;
    max-width: fit-content;
    height: var(--height);
    max-height: 100%;
    object-fit: contain;
  }
</style>
