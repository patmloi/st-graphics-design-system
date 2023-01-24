<script>
  import { base } from '$app/paths'

  let filepathMobile
  export { filepathMobile as src }

  let posterMobile
  export { posterMobile as poster }

  export let autoplay
  export let loop
  export let controls

  export let hasDesktop

  let filepathDesktop
  let posterDesktop

  $: autoplay = autoplay || undefined
  $: loop = loop || undefined
  $: controls = controls || undefined
  $: {
    if (hasDesktop) {
      const [name, ext] = filepathMobile.split('.')

      filepathDesktop = `${name}-desktop.${ext}`

      if (posterMobile) {
        const [posterName, posterExt] = posterMobile.split('.')

        posterDesktop = `${posterName}-desktop.${posterExt}`
      }
    }
  }
  $: src = `${base}/assets/videos/${filepathDesktop || filepathMobile}`
  $: poster =
    posterDesktop || posterMobile
      ? `${base}/assets/videos/${posterDesktop || posterMobile}`
      : undefined
</script>

<video {src} {poster} {autoplay} {loop} {controls} playsinline muted controlslist="nodownload" />
