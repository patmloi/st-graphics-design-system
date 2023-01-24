<script>
  const assetsBaseURI =
    import.meta.env.MODE === 'production'
      ? 'https://www.straitstimes.com/multimedia/graphics/assets'
      : 'https://st-graphics-dev-assets.s3-ap-southeast-1.amazonaws.com'

  const faviconBaseURI = `${assetsBaseURI}/favicon`
</script>

<link rel="apple-touch-icon" sizes="180x180" href="{faviconBaseURI}/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="{faviconBaseURI}/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="{faviconBaseURI}/favicon-16x16.png" />
<link rel="manifest" href="{faviconBaseURI}/site.webmanifest" />
<link rel="mask-icon" href="{faviconBaseURI}/safari-pinned-tab.svg" color="#0c2b57" />
<link rel="shortcut icon" href="{faviconBaseURI}/favicon.ico" />
<meta name="apple-mobile-web-app-title" content="Straits Times" />
<meta name="application-name" content="The Straits Times" />
<meta name="msapplication-TileColor" content="#0c2b57" />
<meta name="msapplication-config" content="{faviconBaseURI}/browserconfig.xml" />
<meta name="theme-color" content="#ffffff" />
