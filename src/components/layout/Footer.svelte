<script>
  import { onMount } from 'svelte'

  let colophon = `Published by SPH Media Limited, Co. Regn. No. 202120748H. Copyright © ${new Date().getFullYear()} SPH Media Limited. All rights reserved.`

  onMount(async () => {
    const url = 'https://www.straitstimes.com/multimedia/graphics/assets/json/sph-footer.json'
    const response = await fetch(url)
    const data = await response.json()

    colophon = data.footer
  })
</script>

<footer>
  <div>{colophon}</div>
</footer>

<style lang="scss">
  footer {
    text-align: center;
    background-color: $white;
    border-top-width: var(--#{$prefix}default-border-width);

    div {
      padding: px-to-rem(15);
      font-family: var(--#{$prefix}font-sans);
      font-size: px-to-rem(13);
      line-height: 1.5;
      color: #333;

      @media (min-width: $screen-md) {
        padding: px-to-rem(20);
      }
    }
  }
</style>
