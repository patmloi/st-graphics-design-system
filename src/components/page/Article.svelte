<script>
  import { Body, Foot, Head } from '$components/page/article'

  export let copy

  const {
    header: head,
    sections,
    lang,
    credits,
    relatedarticles: related,
    fbcomment: comments,
  } = copy

  const body = { sections }
  const foot = { lang, credits, related, comments }
</script>

<article>
  {#if head}
    <Head {...head} />
  {/if}

  <Body {...body} />

  <Foot {...foot} />
</article>
