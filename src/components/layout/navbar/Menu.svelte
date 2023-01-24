<!-- ./src/components/menu/index.vue -->
<script>
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import { bool } from '$utils'

  const { menu } = $page.data

  console.log(menu)

  // TODO: Find a better way to check this.
  const isRelativeURI = (uri) => {
    if (uri.indexOf(':') !== -1) return false // http:, https:, mailto:, etc.
    if (uri[0] === '#') return false // hash
    if (uri[0] === '?') return false // query string
  }
</script>

{#key $page.data}
  <ul>
    {#each menu as { name, href, selected } (name)}
      <li class:active={bool(selected)} aria-current={bool(selected) || undefined}>
        <a href={isRelativeURI(href) ? `${base}/${href}` : href}>{name}</a>
      </li>
    {/each}
  </ul>
{/key}

<style lang="scss">
  ul {
    display: flex;
    gap: px-to-rem(30);
    align-items: center;
    margin-right: px-to-rem(15);
    font-family: var(--#{$prefix}font-sans);
    font-size: px-to-rem(14);
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }

  // TODO: Make link hit area bigger.
  a {
    display: block;
  }
</style>
