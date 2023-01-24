<script>
  import { Comments, Credits, Related } from '$components/page/article/foot'

  export let lang
  export let credits
  export let related
  export let comments
</script>

<Credits {...credits} {lang} />

<Related {...related} />

{#if comments}
  <Comments />
{/if}
