<h1><slot /></h1>

<style lang="scss">
  h1 {
    font-family: $font-selane-forty;
    font-size: px-to-rem(32);
    font-weight: $font-normal;
    line-height: px-to-rem(35);
    color: var(--headline-color, #{$headline-color});

    @media (min-width: $screen-md) {
      font-family: $font-selane-twenty;
      font-size: #{px-to-rem(50)};
      line-height: #{px-to-rem(52)};
    }

    :global(span) {
      color: var(--headline-span-color, #{$headline-span-color});
    }
  }
</style>
