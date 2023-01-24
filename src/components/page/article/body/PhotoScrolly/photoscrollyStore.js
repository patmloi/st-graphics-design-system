import { writable } from 'svelte/store'

let intersectionObserver
const ensureIntersectionObserver = () => {
  if (intersectionObserver) return
  intersectionObserver = new IntersectionObserver((entries) =>
    entries.forEach((e) => {
      const eventName = e.isIntersecting ? 'enterViewport' : 'exitViewport'
      e.target.dispatchEvent(new CustomEvent(eventName))
    })
  )
}

export const viewport = (element) => {
  ensureIntersectionObserver()
  intersectionObserver.observe(element)
  return () => intersectionObserver.unobserve(element)
}

export const currentMenu = writable('')
