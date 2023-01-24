<script>
  import { base } from '$app/paths'
  import { md } from '$utils'

  export let value
  export let icon = undefined

  let level
  export { level as mode }

  let textAlign = null
  export { textAlign as textalign }

  $: src = `${base}/assets/images/${icon}`
</script>

<div style:--subheading-text-align={textAlign}>
  {#if icon}
    <img {src} alt="" width="96" height="96" />
  {/if}

  <svelte:element this={level}>{@html md(value)}</svelte:element>
</div>

<style lang="scss">
  div {
    text-align: var(--subheading-text-align, #{subheading-text-align});

    :global(h2) {
      font-family: $font-selane-twenty;
      font-size: px-to-rem(26);
      font-weight: $font-normal;
      line-height: px-to-rem(32);
      color: var(--subheading-2-color, var(--subheading-color, #{subheading-2-color}));

      :global(span) {
        color: var(
          --subheading-2-span-color,
          var(--subheading-span-color, #{subheading-2-span-color})
        );
      }
    }

    :global(h3) {
      font-family: $font-selane-forty;
      font-size: px-to-rem(22);
      font-weight: $font-normal;
      line-height: px-to-rem(30);
      color: var(--subheading-3-color, var(--subheading-color, #{subheading-3-color}));

      :global(span) {
        color: var(
          --subheading-3-span-color,
          var(--subheading-span-color, #{subheading-3-span-color})
        );
      }
    }

    :global(h4) {
      font-family: $font-sans;
      font-size: px-to-rem(17);
      font-weight: $font-bold;
      line-height: px-to-rem(21);
      color: var(--subheading-4-color, var(--subheading-color, #{subheading-4-color}));

      :global(span) {
        color: var(
          --subheading-4-span-color,
          var(--subheading-span-color, #{subheading-4-span-color})
        );
      }
    }
  }

  img {
    display: inline-block;
    width: px-to-rem(80);
    height: px-to-rem(80);
    margin-bottom: px-to-rem(10);
    vertical-align: top;
  }
</style>
