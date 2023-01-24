<script>
  import { Article } from '$components/page'
  import { nextGenImages } from '../store'

  /** @type {import('./$types').PageData} */
  export let data

  const { ...copy } = data

  // NextGenImages
  const imagesDir = import.meta.glob('../assets/images/**/*.{jpg,jpeg}', {
    query: '?run',
    eager: true,
  })
  let images = {}
  for (const path in imagesDir) {
    const shortPath = path.split('images/')[1]
    images[shortPath] = imagesDir[path].default
  }
  nextGenImages.set(images)
</script>

<Article {copy} />
