const copyId = '1sNR0GjVTo8YCbciTRSr5lVrNrfjyiljsm0PHa7MsdNo' // Google Document ID

const jsonBaseURI =
  import.meta.env.MODE === 'production'
    ? 'https://www.straitstimes.com/multimedia/graphics/json'
    : 'https://st-graphics-dev-json.s3.ap-southeast-1.amazonaws.com'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const url = `${jsonBaseURI}/${copyId}.json`
  const response = await fetch(url)

  return await response.json()
}
