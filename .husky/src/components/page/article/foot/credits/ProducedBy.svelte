<script>
  import { md } from '$utils'

  export let producedBy = ''
  export let lang = 'en'
</script>

{#if producedBy.length > 0}
  <div>
    <strong>{lang.toLowerCase() === 'zh-cn' ? '制作' : 'Produced by'}: </strong>

    <ul>
      {#each producedBy as collaborator}
        <li>{@html md(collaborator)}</li>
      {/each}
    </ul>
  </div>
{/if}

<style lang="scss">
  ul {
    display: inline;
  }

  li {
    display: inherit;

    &::after {
      content: ', ';
    }

    &:nth-last-child(2)::after {
      content: ' ';
    }

    &:last-child::before {
      content: 'and ';
    }

    &:only-of-type::before {
      content: '';
    }

    &:last-child::after {
      content: '.';
    }
  }
</style>
