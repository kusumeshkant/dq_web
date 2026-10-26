// Concept E: "Live in 3 screens". Static end state (all three screens, done)
// rendered on the server for no-JS; after page load LazyOnboardingStepper
// swaps in the interactive stepper (tabs + auto-advance on desktop, stacked
// cards that play on view on mobile). Reduced-motion users get the
// interactive stepper without auto-advance.
import { CodePanel, DetailsPanel, PanelFrame, StepText, UploadPanel, type Tone } from './OnboardingPanels'
import LazyOnboardingStepper from './LazyOnboardingStepper'
import { ONBOARDING as O } from '@/lib/site'

function StaticStepper({ tone }: { tone: Tone }) {
  const panels = [<DetailsPanel key="d" />, <UploadPanel key="u" />, <CodePanel key="c" />]
  return (
    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {O.steps.map((s, i) => (
        <li key={s.key}>
          <PanelFrame>{panels[i]}</PanelFrame>
          <div className="mt-4"><StepText index={i} tone={tone} /></div>
        </li>
      ))}
    </ol>
  )
}

export default function OnboardingStepper({ tone = 'dark' }: { tone?: Tone }) {
  return (
    <div>
      <LazyOnboardingStepper tone={tone}>
        <StaticStepper tone={tone} />
      </LazyOnboardingStepper>
      <p className={`mt-6 text-center text-sm ${tone === 'dark' ? 'text-enterprise-muted' : 'text-ink-muted'}`}>
        {O.caption} <span className="font-semibold">Illustrative.</span>
      </p>
    </div>
  )
}
