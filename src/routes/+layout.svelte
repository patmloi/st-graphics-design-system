<script>
  import { page } from '$app/stores'
  import '$styles/app.scss'
  import { FacebookSDK, Favicon, Footer, Main, Navbar, Meta, Skippy } from '$components/layout'

  const { title, meta } = $page.data

  const assetsBaseURI =
    import.meta.env.MODE === 'production'
      ? 'https://www.straitstimes.com/multimedia/graphics/assets'
      : 'https://st-graphics-dev-assets.s3-ap-southeast-1.amazonaws.com'

  const fontsBaseURI = `${assetsBaseURI}/fonts/v2`
</script>

<Meta {title} {meta} />

<svelte:head>
  <Favicon />

  <link
    rel="preload"
    href="{fontsBaseURI}/SelaneTextRegular.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

<FacebookSDK />

<Skippy />

<div id="st-content-graphic" class="st-content-graphic scroll-content">
  <Navbar />

  <Main>
    <slot />
  </Main>

  <Footer />
</div>

<style lang="scss">
  div {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    min-height: 100vh;

    @supports (min-height: 100dvh) {
      // TODO: Uncomment this after Safari fixes issue introduced in 15.6 where dvh is larger than expected on macOS.
      // (https://bugs.webkit.org/show_bug.cgi?id=242758)

      /*
      min-height: 100dvh; // 1
      */
    }
  }
</style>
