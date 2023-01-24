<div><slot /></div>

<style lang="scss">
  div {
    font-size: px-to-rem(20);
    line-height: px-to-rem(28);
    color: var(--deck-color, #{$deck-color});

    @media (min-width: $screen-md) {
      font-size: px-to-rem(23);
      line-height: px-to-rem(30);
    }

    :global(p) {
      padding-bottom: 12px;
    }
  }
</style>
