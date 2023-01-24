<script>
  import { md } from '$utils'

  export let value
  export let description = undefined

  let textAlign = null
  export { textAlign as textalign }
</script>

<div style:--pullout-text-align={textAlign}>
  <h4>{@html md(value)}</h4>

  {#if description}
    <p>{@html md(description)}</p>
  {/if}
</div>

<style lang="scss">
  div {
    font-family: var(--st-font-sans);
    color: var(--pullout-color, #{$pullout-color});
    text-align: var(--pullout-text-align, #{$pullout-text-align});
  }

  h4 {
    padding: px-to-rem(10) 0;
    font-size: px-to-rem(24);
    font-weight: $font-bold;
    line-height: px-to-rem(21);
    color: var(--pullout-heading-color, #{$pullout-heading-color});
  }

  p {
    display: inline-block;
    max-width: px-to-rem(500);
    padding: 0;
    font-size: px-to-rem(17);
    line-height: px-to-rem(22);
    text-transform: uppercase;
  }
</style>
