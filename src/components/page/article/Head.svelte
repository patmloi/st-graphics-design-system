<script>
  import { base } from '$app/paths'
  import { md } from '$utils'
  import { Byline, Dateline, Deck, Headline, PremiumLabel } from '$components/page/article/head'

  let classList = ''
  export { classList as class }

  $: className = `st-header-page ${classList}`.trim()

  export let headline
  export let deck

  let bylineAndDateline
  export { bylineAndDateline as byline }

  export let datetime

  let background = undefined
  export { background as bg }

  let heroImage = undefined
  export { heroImage as bannerimage }

  let heroVideo = undefined
  export { heroVideo as bannervideo }

  // const {
  //   headline,
  //   deck,
  //   byline: bylineAndDateline, // Combined byline and dateline.
  //   datetime,
  //   bg,
  //   bannerimage,
  //   bannervideo,
  //   // textwidth,
  //   // bannerwidth,
  //   // desktopheight,
  //   // mobileheight,
  //   // poster,
  //   // hasdesktop,
  // } = header

  const splitBylineAndDateline = (str) => {
    const [rawByline, rawDateline] = str.split(' | ')

    const removeFirstWord = (str) => {
      const indexOfSpace = str.indexOf(' ')

      return indexOfSpace !== -1 ? str.substring(indexOfSpace + 1).trim() : ''
    }

    const byline = removeFirstWord(rawByline)
    const dateline = removeFirstWord(rawDateline)

    return [byline, dateline]
  }

  const [byline, dateline] = splitBylineAndDateline(bylineAndDateline)

  const isPremium = false

  let imageFilepath
  let videoFilepath

  $: {
    if (heroImage) {
      const [name, ext] = heroImage.split('.')

      imageFilepath = name + '-desktop.' + ext
    }
  }

  $: {
    if (heroVideo) {
      const [name, ext] = heroVideo.split('.')

      videoFilepath = name + '-desktop.' + ext
    }
  }
</script>

<header class={className} style:background class:plain={!heroImage && !heroVideo && !background}>
  <div class="main-headline-head-wrapper">
    {#if (heroImage && heroImage !== '') || (heroVideo && heroVideo !== '')}
      <div class="st-header-hero">
        <div class="st-content-banner">
          {#if heroImage}
            <img src={`${base}/assets/images/${imageFilepath}`} alt="" />
          {:else}
            <video loop muted autoplay playsinline src={`${base}/assets/videos/${videoFilepath}`} />
          {/if}
        </div>
      </div>
    {/if}

    <div class="main-headline-head">
      <div class="main-headline">
        {#if isPremium}
          <PremiumLabel />
        {/if}

        <Headline>{@html md(headline)}</Headline>
      </div>
    </div>
  </div>

  <div class="main-headline-content-wrapper">
    <div class="main-headline-content">
      <Deck>
        {#each deck as p}
          <p>{@html md(p)}</p>
        {/each}
      </Deck>

      <div class="st-byline">
        <Byline>{@html md(byline)}</Byline>
        |
        <Dateline {datetime}>{@html md(dateline)}</Dateline>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  header {
    color: var(--header-color, #{$header-color});
    text-align: var(--header-text-align, #{$header-text-align});

    :global(a) {
      color: var(--header-link-color, #{$header-link-color});

      &:hover,
      &:focus {
        color: var(--header-link-hover-color, #{$header-link-hover-color});
      }
    }

    &:global(.plain) {
      .main-headline-content {
        border-bottom: var(--st-border-width) dotted var(--st-black);
      }
    }
  }

  .st-byline {
    font-family: var(--st-font-sans);
    font-size: px-to-rem(12);
    line-height: 1.2;
    color: var(--byline-color, #{$byline-color});
    text-transform: uppercase;
  }
</style>
