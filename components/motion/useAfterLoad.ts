'use client'

import { useEffect, useState } from 'react'
import { afterLoad } from '@/lib/after-load'

/** False until the page has loaded and the browser is idle (see lib/after-load). */
export function useAfterLoad(): boolean {
  const [done, setDone] = useState(false)
  useEffect(() => {
    let live = true
    afterLoad().then(() => { if (live) setDone(true) })
    return () => { live = false }
  }, [])
  return done
}
