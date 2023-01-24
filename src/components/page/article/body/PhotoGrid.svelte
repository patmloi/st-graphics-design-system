<script>
  import Photo from './Photo.svelte'

  let path
  export { path as value }

  let hasDesktop = true
  export { hasDesktop as hasdesktop }

  export let width = undefined
  export let height = undefined

  export let src = []
  export let alt = []
  export let caption = []
</script>

<div class:max-column={src.length >= 3}>
  {#each src as source, i}
    <Photo
      value={`${path}/${src[i]}`}
      hasdesktop={hasDesktop}
      {width}
      {height}
      alt={alt[i]}
      caption={caption[i]}
    />
  {/each}
</div>

<style lang="scss">
  div {
    max-width: px-to-rem(1200);
    margin: 0 auto;

    & :global(> *) {
      margin-bottom: px-to-rem(20);

      &:last-of-type {
        margin-bottom: 0;
      }

      :global(figcaption) {
        padding-bottom: 0;
      }
    }

    @media (min-width: $screen-md) {
      @include grid_template(2);

      &.max-column {
        @include grid_template(3);
      }
    }
  }
</style>
