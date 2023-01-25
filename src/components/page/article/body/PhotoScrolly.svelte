<script>
  import { get } from 'svelte/store'
  import PhotoScrollyDesktop from './PhotoScrolly/PhotoScrollyDesktop.svelte'
  import PhotoScrollyMobile from './PhotoScrolly/PhotoScrollyMobile.svelte'
  import { nextGenImages } from '$src/store'

  export let value
  let scrollY
  let mobileScreen = 1024
  $: innerWidth = 0
  $: innerHeight = 0

  const getImages = (link) =>
    get(nextGenImages)[link] ? get(nextGenImages)[link] : get(nextGenImages)['placeholder.jpg']

  console.log(get(nextGenImages)['news/news-1.jpg'])
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

{#each value as v}
  <div class="photoscrolly">
    {#if innerWidth <= mobileScreen}
      <PhotoScrollyMobile
        {v}
        images={getImages(v.photo)}
        {innerWidth}
        {scrollY}
        justify={v.justify}
      />
    {/if}
    {#if innerWidth > mobileScreen}
      <PhotoScrollyDesktop {v} images={getImages(v.photo)} {innerWidth} {innerHeight} />
    {/if}
  </div>
{/each}

<style lang="scss" scoped>
  .photoscrolly {
    width: 100%;
    height: 100%;
    padding: 0;
  }
</style>
