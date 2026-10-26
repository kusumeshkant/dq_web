// Resolves once the page has finished loading and the browser is idle.
// Used to start non-critical downloads (animation engine, scroll story, the
// home form) after the hero has painted, so they never compete with LCP.
let ready: Promise<void> | null = null

export function afterLoad(): Promise<void> {
  if (ready) return ready
  ready = new Promise<void>((resolve) => {
    const idle = () => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
      if (ric) ric(() => resolve(), { timeout: 1500 })
      else setTimeout(resolve, 200)
    }
    if (document.readyState === 'complete') idle()
    else window.addEventListener('load', idle, { once: true })
  })
  return ready
}
