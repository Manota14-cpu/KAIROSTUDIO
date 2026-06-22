export function qs<T extends HTMLElement = HTMLElement>(sel: string, parent?: ParentNode): T | null {
  return (parent ?? document).querySelector<T>(sel)
}

export function qsa<T extends HTMLElement = HTMLElement>(sel: string, parent?: ParentNode): T[] {
  return Array.from((parent ?? document).querySelectorAll<T>(sel))
}

export function on(
  el: Element | Window | Document,
  event: string,
  handler: EventListener,
  opts: AddEventListenerOptions = {},
): void {
  el.addEventListener(event, handler, opts)
}

export function createImgObserver(
  onIntersect: (img: HTMLImageElement) => void,
  rootMargin = '200px',
): IntersectionObserver {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          onIntersect(img)
          observer.unobserve(img)
        }
      })
    },
    { rootMargin },
  )
  return observer
}
