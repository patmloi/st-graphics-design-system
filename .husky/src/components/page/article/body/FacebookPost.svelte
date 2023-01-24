<script>
  let href
  export { href as value }

  let maxWidth = null
  export { maxWidth as maxwidth }
</script>

<div class="fb-post" style:--fb-post-max-width={maxWidth} data-href={href} data-show-text="true" />

<style lang="scss">
  div {
    display: block;
    width: 100%;
    max-width: var(--fb-post-max-width, #{$fb-post-max-width});
    margin: 0 auto;
  }
</style>
