<script>
  import { Tweet } from 'sveltekit-embed'

  let tweetLink
  export { tweetLink as value }

  let maxWidth = null
  export { maxWidth as maxwidth }
</script>

<div style:--tweet-max-width={maxWidth}>
  <Tweet {tweetLink} />
</div>

<style lang="scss">
  div {
    max-width: var(--tweet-max-width, #{$tweet-max-width});
    margin: 0 auto;
  }
</style>
