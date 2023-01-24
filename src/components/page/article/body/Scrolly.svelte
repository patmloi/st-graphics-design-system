<script>
  import { base } from '$app/paths'
  import Scroller from '@sveltejs/svelte-scroller'
  import { Image, SVG, MyCustomScrolly } from './scrolly'
  import { bool, md } from '$utils'

  export let value
  export let mode = 'svg'
  export let p = []
  export let thumbnail = []

  let hasDesktop = true
  export { hasDesktop as hasdesktop }

  export let top = 0
  export let bottom = 0
  export let threshold = 1
  export let parallax = false

  let count
  let index
  let offset
  let progress

  const componentMapping = {
    image: Image,
    svg: SVG,
    mycustomscrolly: MyCustomScrolly,
  }

  $: hasDesktop = bool(hasDesktop)
  $: parallax = bool(parallax)
  $: props = {
    image: { value, p, index, offset },
    svg: { value, p, count, index, offset, progress },
    mycustomscrolly: {
      count,
      index,
      offset,
      progress,
    },
  }[mode]
</script>

<Scroller {top} {bottom} {threshold} {parallax} bind:count bind:index bind:offset bind:progress>
  <div slot="background">
    <svelte:component this={componentMapping[mode]} {...props} />
  </div>

  <div slot="foreground">
    {#each p as text, i}
      <section>
        {#if thumbnail[i]}
          <img src={`${base}/assets/images/${thumbnail[i]}`} alt="" />
        {/if}

        <p>{@html md(text)}</p>
      </section>
    {/each}
  </div>
</Scroller>

<style lang="scss">
  // TODO: Replace vh units with dvh after support increased.

  // FIXME: At this moment, svelte-scroller uses `fixed` or `absolute`.
  :global(svelte-scroller-background-container) {
    position: sticky !important;
    transform: translate(0, 0) !important;
  }

  [slot='background'] {
    position: relative;
    height: 100vh;
  }

  [slot='foreground'] {
    max-width: px-to-rem(1200);
    padding-bottom: max(px-to-rem(800), 100vh);
    margin: 0 auto;
  }

  section {
    max-width: px-to-rem(400);
    margin: 0 $spacing-x max(px-to-rem(800), 100vh);
    font-size: px-to-rem(20);
    line-height: px-to-rem(31);
    color: var(--scrolly-section-color, #{$scrolly-section-color});
    background: var(--scrolly-section-background, #{$scrolly-section-background});

    @media (min-width: $screen-md) {
      font-size: px-to-rem(22);
    }

    @media (min-width: $screen-md) {
      margin: 0 $md-spacing-x max(px-to-rem(800), 100vh);
    }

    &:last-child {
      margin-bottom: 0;
    }

    :global(a) {
      color: var(--scrolly-section-link-color, #{$scrolly-section-link-color});

      &:hover,
      &:focus {
        color: var(--scrolly-section-link-hover-color, #{$scrolly-section-link-hover-color});
      }
    }

    :global(span) {
      color: var(--scrolly-section-span-color, #{$scrolly-section-span-color});
      background: var(--scrolly-section-span-background, #{$scrolly-section-span-background});
    }
  }

  p {
    padding: px-to-rem(10) px-to-rem(15) px-to-rem(20);

    &:only-child {
      padding-top: px-to-rem(15);
    }
  }
</style>
