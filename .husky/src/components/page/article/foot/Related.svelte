<script>
  import { onMount } from 'svelte'
  import { md, shuffleArray } from '$utils'

  export let header = 'Like to see more graphics?'
  export let blurb =
    'Here are some other original graphics you might enjoy. Or visit our <a href="https://www.straitstimes.com/multimedia/graphics">graphics homepage</a>.'
  export let custom = undefined
  export let articles = []

  let list = []

  const fetchData = async () => {
    const baseURI =
      import.meta.env.MODE === 'production'
        ? 'https://www.straitstimes.com/multimedia/graphics/json'
        : 'https://st-graphics-dev-json.s3-ap-southeast-1.amazonaws.com'

    const url = `${baseURI}/${custom || '1jaEjJMg_Hd-_e6_WJggRtswhTOqY-1UQ7J6D116-9YE/0.json'}`
    const response = await fetch(url)

    return await response.json()
  }

  onMount(async () => {
    // TODO: If provided list has less than four, fetch additional articles.
    // TODO: Filter if a related article is the same as current one.
    list = shuffleArray(articles.length >= 4 ? articles : await fetchData()).slice(0, 4)
  })
</script>

<aside>
  <h2>{@html md(header)}</h2>

  <p>{@html md(blurb)}</p>

  <ul>
    <!-- TODO: Add placeholders while fetching. -->
    {#if list.length === 0}{:else}
      {#each list as { premium, title, link: href, image: src }}
        <li>
          <a {href}>
            <figure>
              <img alt="" {src} loading="lazy" />
            </figure>

            <h3>{@html title}</h3>
          </a>
        </li>
      {/each}
    {/if}
  </ul>
</aside>

<style lang="scss">
  aside {
    --related-thumbnail-aspect-ratio: #{$related-thumbnail-aspect-ratio};

    position: relative;
    box-sizing: content-box; // FIXME: Don’t use this.
    max-width: px-to-rem(1200);
    padding: px-to-rem(20) $spacing-x;
    margin: 0 auto;
    font-family: var(--st-font-serif);
    line-height: 1.2;
    color: var(--related-color, #{$related-color});
    background-color: #fff;
    border-top-width: var(--st-border-width);
    @media (min-width: $screen-md) {
      padding: px-to-rem(20) $md-spacing-x;
    }

    &::before {
      position: absolute;
      top: 5px;
      left: 0;
      width: 100%;
      content: '';
      border-top-width: var(--st-border-width);
    }
  }

  h2 {
    margin-bottom: px-to-rem(10);
    font-family: inherit;
    font-size: px-to-rem(26);
    line-height: inherit;
    color: var(--related-heading-color, #{$related-heading-color});

    @media (min-width: $screen-md) {
      font-size: px-to-rem(28);
    }
  }

  p {
    font-size: px-to-rem(16);

    @media (min-width: $screen-md) {
      font-size: px-to-rem(19);
    }

    :global(a) {
      color: var(--related-link-color, #{$related-link-color});

      &:hover,
      &:focus {
        color: var(--related-link-hover-color, #{$related-link-hover-color});
      }
    }
  }

  ul {
    padding-bottom: px-to-rem(20);
    margin-top: px-to-rem(20);

    @include grid-template(1);

    @media (min-width: $screen-sm) {
      @include grid-template(2);
    }

    @media (min-width: $screen-md) {
      @include grid-template(3);
    }

    @media (min-width: $screen-xl) {
      @include grid-template(4);
    }
  }

  li {
    display: flex;
    flex-direction: column;

    :global(> *) {
      width: 100%;
    }
  }

  a {
    color: inherit;

    &:hover,
    &:focus {
      text-decoration-color: transparent;
    }
  }

  figure {
    aspect-ratio: var(--related-thumbnail-aspect-ratio);
    margin-bottom: px-to-rem(10);
  }

  img {
    width: 100%;
  }

  h3 {
    font-family: inherit;
    font-size: px-to-rem(18);
    line-height: inherit;
  }

  @supports not (aspect-ratio: 1) {
    figure {
      position: relative;

      &::before {
        display: block;
        padding-bottom: calc(100% / (var(--related-thumbnail-aspect-ratio)));
        content: '';
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
</style>
