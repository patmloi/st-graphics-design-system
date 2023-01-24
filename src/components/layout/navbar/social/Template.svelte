<script>
  export let name
  export let href
  export let path
</script>

<a {href} target="_blank" rel="noopener" aria-label="Share on {name}">
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 96 96" role="img">
      <title>{name}</title>

      <path d={path} />
    </svg>
  </span>
</a>

<style lang="scss">
  span {
    position: relative;
    display: inherit;
    margin: px-to-rem(2);
    transition: transform 300ms;

    &::before {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: '';
      background: var(--navbar-social-circle-background, #{$navbar-social-circle-background});
      border-color: var(--navbar-social-circle-border-color, #{$navbar-social-circle-border-color});
      border-width: 0.5px;
      border-radius: 9999px;
      opacity: var(--navbar-social-circle-opacity, #{$navbar-social-circle-opacity});
    }
  }

  svg {
    width: px-to-rem(28);

    @media (min-width: $screen-md) {
      width: px-to-rem(34);
    }

    path {
      fill: var(--navbar-social-icon-color, #{$navbar-social-icon-color});
    }
  }

  a {
    display: inline-block;

    &:hover,
    &:focus {
      span {
        transform: scale(1.1);
      }
    }
  }
</style>
