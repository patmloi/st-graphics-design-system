<script>
  import { md } from '$utils'

  export let remarks
</script>

{#if remarks !== ''}
  <div>
    {@html md(remarks)}
  </div>
{/if}

<style lang="scss">
  div {
    margin-top: px-to-rem(15);
  }
</style>
