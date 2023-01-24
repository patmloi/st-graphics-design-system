<script>
  import { md } from '$utils'

  export let caption = undefined
  export let maxWidth = null
</script>

<figure style:--figure-max-width={maxWidth}>
  <slot />

  {#if caption}
    <figcaption>{@html md(caption)}</figcaption>
  {/if}
</figure>

<style lang="scss">
  figure {
    width: 100%;
    max-width: var(--figure-max-width, #{$figure-max-width});
    margin: 0 auto;
  }

  figcaption {
    padding: px-to-rem(10) $spacing-x 0;
    font-family: var(--st-font-sans);
    font-size: px-to-rem(15);
    line-height: px-to-rem(22);
    color: var(--figure-caption-color, #{$figure-caption-color});

    @media (min-width: $screen-md) {
      padding: px-to-rem(10) $md-spacing-x 0;
    }
  }
</style>
