<script>
  import { md } from '$utils'

  export let source = ''
  export let lang = 'en'
</script>

{#if source !== ''}
  <div>
    <strong>{lang.toLowerCase() === 'zh-cn' ? '来源' : 'Source'}: </strong>

    {@html md(source)}
  </div>
{/if}

<style lang="scss">
  div {
    margin-bottom: px-to-rem(15);
  }
</style>
