<script>
  import { bool, md } from '$utils'

  export let value
  console.log(value)
  let hasDropcap = false
  export { hasDropcap as hasdropcap }

  let textAlign = null
  export { textAlign as textalign }
</script>

<p class:has-dropcap={bool(hasDropcap)} style:--paragraph-text-align={textAlign}>
  {@html md(value)}
</p>

<style lang="scss">
  p {
    color: var(--paragraph-color, #{$paragraph-color});
    text-align: var(--paragraph-text-align, #{$paragraph-text-align});
  }

  // FIXME: Selection styling doesn’t work.
  .has-dropcap:first-child::first-letter {
    float: left;
    margin-right: px-to-rem(4);
    margin-bottom: -0.1em;
    font-size: 3em;
    line-height: 1;
    color: var(--paragraph-dropcap-color, #{$paragraph-dropcap-color});
  }

  // TODO: Use `initial-letter` property only if support increases.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter
  @supports (initial-letter: 2) or (-webkit-initial-letter: 2) {
    .has-dropcap:first-child::first-letter {
      -webkit-initial-letter: 2;
      initial-letter: 2;
    }
  }
</style>
