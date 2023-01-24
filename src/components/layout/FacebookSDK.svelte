<script>
  import { browser } from '$app/environment'
  import { injectScript } from '$utils'

  if (browser) {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: 748050775275737,
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v14.0',
      })
    }

    injectScript({
      src: 'https://connect.facebook.net/en_GB/sdk.js',
      async: true,
      defer: true,
      crossOrigin: 'anonymous',
    })
  }
</script>

<div id="fb-root" />
