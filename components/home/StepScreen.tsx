'use client'

import Screen from '@/components/phone/Screen'
import { BarcodeScanScreen, CartScreen, ExitPassScreen, PaymentSheetScreen } from '@/components/phone/screens'
import { STORY_STEPS } from '@/lib/site'

const SCREENS = [BarcodeScanScreen, CartScreen, PaymentSheetScreen, ExitPassScreen] as const

/** One shopper-story screen inside <Screen> (Illustrative until a real capture is passed). */
export default function StepScreen({ index, play }: { index: number; play: boolean }) {
  const Comp = SCREENS[index]
  return (
    <Screen label={STORY_STEPS[index].screen}>
      <Comp play={play} />
    </Screen>
  )
}
