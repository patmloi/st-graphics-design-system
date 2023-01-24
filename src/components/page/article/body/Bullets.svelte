<script>
  import { md } from '$utils'

  let list = []
  export { list as text }

  let listStyleType = null
  export { listStyleType as liststyletype }

  let textAlign = null
  export { textAlign as textalign }
</script>

<ul style:--bullets-text-align={textAlign} style:--bullets-list-style={listStyleType}>
  {#each list as item}
    <li>{@html md(item)}</li>
  {/each}
</ul>

<style lang="scss">
  ul {
    padding-left: px-to-rem(20);
    color: var(--bullets-color, #{$bullets-color});
    text-align: var(--bullets-text-align, #{$bullets-text-align});
    list-style: var(--bullets-list-style, #{$bullets-list-style});
  }

  li + li {
    margin-top: px-to-rem(20);
  }
</style>
