/**
 * Shuffle an array using the Fisher-Yates-Durstenfeld algorithm.
 *
 * @param {*[]} arr Array to be shuffled.
 *
 * @returns Shuffled array.
 */
const shuffleArray = (arr) => {
  const a = [...arr]

  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    ;[a[i], a[j]] = [a[j], a[i]]
  }

  return a
}

export default shuffleArray
