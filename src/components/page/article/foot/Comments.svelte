<script>
  import { page } from '$app/stores'
</script>

<aside>
  <div
    class="fb-comments"
    data-href={$page.url.href}
    data-lazy="true"
    data-numposts="5"
    data-width="100%"
  />
</aside>

<style lang="scss">
  aside {
    max-width: px-to-rem(1200);
    padding: px-to-rem(15) px-to-rem(2);
    margin: px-to-rem(20) auto 0;
  }
</style>
