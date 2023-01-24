<script>
  import { md } from '$utils'

  export let value
  export let articles = []
</script>

<aside>
  <h2>{@html md(value || 'Read more')}</h2>

  <!-- `role="list"` is necessary because of Safari and `list-style: none`.  -->
  <!-- https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns -->
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <ul role="list">
    {#each articles as { text, link }}
      <li><a href={link} title={text}>{@html md(text)}</a></li>
    {/each}
  </ul>
</aside>

<style lang="scss">
  aside {
    padding: px-to-rem(15) px-to-rem(12) px-to-rem(10);
    color: var(--read-more-color, #{$read-more-color});
    background: var(--read-more-background, #{$read-more-background});
  }

  h2 {
    font-family: var(--st-font-sans);
    font-size: px-to-rem(14);
    font-weight: $font-bold;
    text-transform: uppercase;
  }

  li {
    padding: px-to-rem(5) 0;
  }

  a {
    color: var(--read-more-link-color, #{$read-more-link-color});

    &:hover,
    &:focus {
      color: var(--read-more-link-hover-color, #{$read-more-link-hover-color});
    }
  }
</style>
