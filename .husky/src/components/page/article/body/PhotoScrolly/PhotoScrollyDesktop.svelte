<script>
  import Scroller from '@sveltejs/svelte-scroller'
  import { md } from '$utils'
  import { viewport, currentMenu } from './photoscrollyStore.js'
  import Img from '@zerodevx/svelte-img'

  //  export let title
  //  export let caption
  //  export let credits
  //  export let photo
  export let position
  export let innerWidth
  export let images
  export let innerHeight
  export let v
  //  export let images
  //  console.log(images)
  //  let img
  let img_width = images[0].width
  let img_height = images[0].height

  $: imgRatio = img_width / img_height
  $: screenRatio = innerWidth / innerHeight

  const checkPosition = (pos) => (pos === 'bottom' ? 'bottom' : '')
  const onEnterViewport = () => currentMenu.set(v.photo)
</script>

<div>
  <Scroller>
    <div slot="background" use:viewport on:enterViewport={() => onEnterViewport()}>
      <div class="pict">
        <Img
          class="picture {imgRatio > screenRatio
            ? `portrait ${checkPosition(v.position)}`
            : `landscape ${checkPosition(v.position)}`}"
          src={images}
          alt="img"
        />
      </div>
    </div>
    <div slot="foreground">
      <div class="card-container">
        <div class="card">
          <h1 class="title">{v.title}</h1>
          <p class="caption">{@html md(v.caption)}</p>
          <p class="credits">{@html md(v.credits)}</p>
        </div>
      </div>
    </div>
  </Scroller>
</div>

<style lang="scss" scoped>
  :global(svelte-scroller-background-container) {
    position: sticky !important;
    z-index: -1 !important;
    transform: translate(0, 0) !important;
  }

  [slot='background'] {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: #000;
  }

  [slot='foreground'] {
    max-width: px-to-rem(1200);
    padding-bottom: max(px-to-rem(800), 100vh);
    margin: 0 auto;
  }

  .pict {
    min-width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: grey;
  }

  .card-container {
    max-width: 1200px;
    height: 130vh;
    margin: 0 auto;

    .card {
      max-width: 450px;
      padding: 15px 20px 30px;
      margin: 15px;
      color: #fff;
      background: rgb(0 0 0 / 60%);

      .title {
        display: block;
        padding-bottom: 10px;
        margin-bottom: 15px;
        font-family: $font-curator-bold;
        font-size: 20px;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 5px;
        border-bottom: solid 1px #9da6b0;
      }

      .caption {
        padding: 0;
        font-family: $font-selane-text-regular;
        font-size: 22px;
      }

      .credits {
        padding: 10px 0 0;
        font-family: $font-curator-regular;
        font-size: 15px;
        color: #9da6b0;
      }
    }
  }
</style>
