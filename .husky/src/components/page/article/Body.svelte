<script>
  import {
    Bullets,
    Datawrapper,
    FacebookPost,
    GraphTitle,
    IFrameResize,
    Paragraph,
    Paywall,
    Photo,
    PhotoGrid,
    Pullout,
    Quote,
    ReadMore,
    Scrolly,
    Subheading,
    Tweet,
    Video,
    PhotoScrolly,
  } from '$components/page/article/body'

  export let sections

  const componentMapping = {
    bullets: Bullets,
    datawrapper: Datawrapper,
    fbpost: FacebookPost,
    graphtitle: GraphTitle,
    iframeresize: IFrameResize,
    login: Paywall,
    morearticles: ReadMore,
    paragraph: Paragraph,
    paywall: Paywall,
    photo: Photo,
    photogrid: PhotoGrid,
    pullout: Pullout,
    quote: Quote,
    readmore: ReadMore,
    scrolly: Scrolly,
    subheading: Subheading,
    subtitle: Subheading, // FIXME: Use correct identifier on ArchieML.
    tweet: Tweet,
    video: Video,
    videocontent: Video,
    photoscrolly: PhotoScrolly,
  }

  const defaultLayout = {
    bullets: 'inline',
    datawrapper: 'inline',
    fbpost: 'inline',
    graphtitle: 'inline',
    iframeresize: 'container',
    morearticles: 'inline',
    paragraph: 'inline',
    photo: 'spread',
    photogrid: 'container',
    pullout: 'inline',
    quote: 'inline',
    scrolly: 'container',
    subheading: 'inline',
    subtitle: 'inline', // FIXME: Use correct identifier on ArchieML
    tweet: 'inline',
    video: 'spread',
    videocontent: 'spread',
  }
</script>

<div>
  {#each sections as { id, class: className, bg: background, components }}
    <section {id} class={className} style:background>
      {#each components as { id, class: className, bg: background, type, align: layout, ...props }}
        <div
          {id}
          class={className}
          style:background
          data-type={type}
          data-layout={layout || defaultLayout[type]}
        >
          <div>
            <svelte:component this={componentMapping[type]} {...props} />
          </div>
        </div>
      {/each}
    </section>
  {/each}
</div>

<style lang="scss">
  section {
    margin-top: px-to-rem(25);
    margin-bottom: px-to-rem(20);

    @media (min-width: $screen-md) {
      margin-top: px-to-rem(20);
    }
  }

  [data-type] {
    padding: px-to-rem(10) $spacing-x;

    @media (min-width: $screen-md) {
      padding: px-to-rem(10) $md-spacing-x;
    }

    // TODO: Review this.
    & > div {
      margin: 0 auto;

      // FIXME: Might be unnecessary.
      // text-align: center;

      // & > * {
      //   display: inline-block;
      //   width: 100%;
      //   text-align: left;
      //   vertical-align: bottom;
      // }
    }

    & + [data-type] {
      margin-top: px-to-rem(20);
    }
  }

  [data-type='paragraph'] {
    & + [data-type='paragraph'] {
      margin-top: 0;
    }
  }

  [data-type='subheading'],
  [data-type='subtitle'] {
    & + [data-type] {
      margin-top: 0;
    }
  }

  [data-type='photo'],
  [data-type='photogrid'],
  [data-type='scrolly'],
  [data-type='svgfolder'],
  [data-type='videocontent'] {
    padding: px-to-rem(10) 0;
  }

  [data-type='photogrid'] {
    @media (min-width: $screen-md) {
      padding: px-to-rem(10) $md-spacing-x;
    }
  }

  [data-layout='spread'] > div {
    max-width: px-to-rem(700);

    @media (min-width: $screen-lg) {
      max-width: px-to-rem(860);
      padding: 0 px-to-rem(10);
    }
  }

  [data-layout='inline'] > div {
    max-width: px-to-rem(700);
  }

  // [data-layout='fullwidth'] > div {
  //   max-width: none;
  // }

  [data-layout='container'] > div {
    max-width: px-to-rem(1200);
  }

  // [data-layout='immersive'] > div {
  //   padding: 0;
  // }
</style>
