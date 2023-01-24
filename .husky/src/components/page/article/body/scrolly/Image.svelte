<script>
  import { Photo } from '$components/page/article/body'

  export let value

  let sections
  export { sections as p }

  export let index
  export let offset
  export let transitionOffset = 0.1 // Proportion of the offset to transition the opacity of the section

  function clampedInterpolate(v, v0, v1) {
    return Math.min(Math.max((v - v0) / (v1 - v0), 0), 1)
  }
</script>

{#each sections as section, i}
  {@const firstSection = i === 0}
  {@const nextSection = i === index + 1}
  {@const toDisplay = i <= index}
  <div
    style:opacity={firstSection
      ? 1
      : nextSection
      ? clampedInterpolate(offset, 1 - transitionOffset, 1)
      : toDisplay
      ? 1
      : 0}
  >
    <Photo value={`${value}/${i + 1}.jpg`} width={null} height={null} />
  </div>
{/each}

<style lang="scss">
  div {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
