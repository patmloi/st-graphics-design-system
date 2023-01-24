<script>
  import { md } from '$utils'

  export let value

  export let author = undefined

  let moreInfo = undefined
  export { moreInfo as moreinfo }
</script>

<!-- TODO: Update style to use new markup -->
<!-- {#if author || moreInfo}
    <figure>
      <blockquote class="blockquote">
        <div class="quote">
          <p>{@html md(value)}</p>
        </div>
      </blockquote>

      <figcaption>
        {#if author}
          <div class="author">{@html md(author)}</div>
        {/if}

        {#if moreInfo}
          <div class="more-info">{@html md(moreInfo)}</div>
        {/if}
      </figcaption>
    </figure>
  {:else}
    <blockquote>
      <p>{@html md(value)}</p>
    </blockquote>
  {/if} -->
<blockquote class="blockquote">
  <div class="quotes">
    <q>{@html md(value)}</q>
  </div>

  {#if author}
    <cite>
      <span class="author">{@html md(author)}</span>
    </cite>
  {/if}

  {#if moreInfo}
    <div class="more-info">{@html md(moreInfo)}</div>
  {/if}

  <div class="close-quote" />
</blockquote>

<style lang="scss">
  cite {
    font: inherit;
  }

  .blockquote {
    position: relative;
    quotes: '\201C''\201D';

    .quotes {
      padding-bottom: px-to-rem(12);

      q {
        font-family: $font-selane-twenty;
        font-size: px-to-rem(30);
        line-height: px-to-rem(34);
        color: $black;
        quotes: none;
      }
    }

    .author {
      display: inline-block;
      font-family: var(--#{$prefix}font-sans);
      font-size: px-to-rem(16);
      line-height: px-to-rem(20);
      color: #9d9d9d;
      text-transform: uppercase;
    }

    .more-info {
      font-family: var(--#{$prefix}font-sans);
      font-size: px-to-rem(16);
      line-height: px-to-rem(22);
      color: #9d9d9d;
    }

    .close-quote {
      position: relative;
      top: 0;
      height: 0;
      margin-bottom: px-to-rem(55);

      &::after {
        top: px-to-rem(-33);
        left: px-to-rem(-5);
        height: 0;
        font-size: px-to-rem(160);
        text-align: left;
        content: close-quote;
      }

      &::before {
        position: absolute;
        height: 1px;
        content: open-quote;
        opacity: 0;
      }

      &::before,
      &::after {
        position: absolute;
        font-family: $font-selane-forty;
        font-style: normal;
        color: #9da6b0;
      }
    }
  }

  .inverse {
    .blockquote {
      q,
      .author,
      .more-info {
        color: #fff;
      }

      .close-quote::after {
        color: #fff;
        opacity: 1;
      }
    }
  }
</style>
