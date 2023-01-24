<script>
  import {
    Brand,
    // Menu,
    Social,
    // Toggler,
  } from '$components/layout/navbar'
</script>

<header>
  <nav aria-label="Main navigation">
    <Brand />
    <!-- <Toggler controls="menu" /> -->

    <div id="menu" tabindex="-1">
      <!-- <Menu /> -->
      <Social />
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    padding: px-to-rem(4) $spacing-x;
    border-bottom-width: var(--navbar-border-bottom-width, #{$navbar-border-bottom-width});

    @media (min-width: $screen-md) {
      padding: px-to-rem(5) $md-spacing-x;
    }
  }

  nav {
    display: grid;
    grid-template-columns: min-content 1fr;
    justify-items: end;
    max-width: px-to-rem(1440);
    margin: 0 auto;
  }

  div {
    display: flex;
  }
</style>
