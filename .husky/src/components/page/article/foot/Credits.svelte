<script>
  import { ProducedBy, Sources, Remarks } from './credits'

  export let source = ''

  let producedBy = []

  export { producedBy as producedby }

  export let remarks = ''
  export let lang = 'en'
</script>

<footer>
  <Sources {lang} {source} />
  <ProducedBy {lang} {producedBy} />
  <Remarks {remarks} />
</footer>

<style lang="scss">
  footer {
    box-sizing: content-box; // FIXME: Don’t use this.
    max-width: px-to-rem(1200);
    padding: px-to-rem(20) $spacing-x px-to-rem(30);
    margin: px-to-rem(70) auto 0;
    font-family: var(--st-font-sans);
    font-size: px-to-rem(13);
    line-height: px-to-rem(22);
    color: var(--credits-color, #{$credits-color});
    border-top: dotted var(--credits-border-color, #{$credits-border-color}) var(--st-border-width);

    @media (min-width: $screen-md) {
      padding: px-to-rem(20) $md-spacing-x px-to-rem(30);
    }

    :global(strong) {
      color: var(--credits-label-color, #{$credits-label-color});
    }

    :global(a) {
      color: var(--credits-link-color, #{$credits-link-color});

      &:hover,
      &:focus {
        color: var(--credits-link-hover-color, #{$credits-link-hover-color});
      }
    }
  }
</style>
