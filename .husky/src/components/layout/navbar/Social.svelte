<script>
  import { Facebook, Twitter } from '$components/layout/navbar/social'
</script>

<ul>
  <li><Facebook /></li>
  <li><Twitter /></li>
</ul>

<style lang="scss">
  ul {
    display: flex;
    gap: px-to-rem(4);
    align-items: center;

    :global(a) {
      display: block;
    }
  }
</style>
