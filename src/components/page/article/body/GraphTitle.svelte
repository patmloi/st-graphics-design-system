<script>
  import { md } from '$utils'

  export let value

  let textAlign = null
  export { textAlign as textalign }
</script>

<p style:--graphtitle-text-align={textAlign}>
  {@html md(value)}
</p>

<style lang="scss">
  p {
    display: inline-block;
    max-width: px-to-rem(540);
    padding-top: px-to-rem(20);
    margin-bottom: px-to-rem(-10);
    font-family: var(--st-font-sans);
    font-size: px-to-rem(19);
    line-height: px-to-rem(25);
    color: var(--graphtitle-color, #{$graphtitle-color});
    text-align: var(--graphtitle-text-align, #{$graphtitle-text-align});
    vertical-align: bottom;
  }
</style>
