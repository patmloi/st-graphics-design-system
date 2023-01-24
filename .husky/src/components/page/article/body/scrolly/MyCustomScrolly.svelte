<script>
  export let count
  export let index
  export let offset
  export let progress
</script>

<div>
  <p>current section: <strong>{index + 1}/{count}</strong></p>
  <progress value={count ? (index + 1) / count : 0} />

  <p>offset in current section</p>
  <progress value={offset || 0} />

  <p>total progress</p>
  <progress value={progress || 0} />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: var(--st-font-sans);
  }
</style>
