<script>
  export let title
  export let meta
</script>

<svelte:head>
  <title>{title}</title>

  {#each meta as { name, content, property }}
    <meta {name} {property} {content} />
  {/each}
</svelte:head>
