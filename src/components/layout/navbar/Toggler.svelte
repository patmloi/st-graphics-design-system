<script>
  export let controls

  // TODO: When opening the menu, set `aria-modal="true"` and `role="dialog"`.
</script>

<button type="button" aria-controls={controls} aria-label="Toggle navigation">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 96 96"
    aria-hidden="true"
  >
    <circle cx="48" cy="48" r="42" fill="none" />

    <path d="M27 36h42M27 48h42M27 60h42" stroke-width="4.5" stroke="currentColor" fill="none" />
  </svg>
</button>

<style lang="scss">
  button {
    position: fixed;
    margin-right: px-to-rem(-9);
    color: var(--#{$prefix}navbar-toggler-lines-color);

    circle {
      fill: var(--#{$prefix}navbar-toggler-circle-color);
    }

    @media (min-width: $screen-md) {
      display: none;
    }
  }
</style>
