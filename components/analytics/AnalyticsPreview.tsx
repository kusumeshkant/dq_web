// Concept D wrapper: server renders the complete static end state; after page
// load LazyAnalyticsPreview swaps in the animated version (same markup).
import AnalyticsPanels, { FINAL_KPIS } from './AnalyticsPanels'
import LazyAnalyticsPreview from './LazyAnalyticsPreview'

export default function AnalyticsPreview() {
  return (
    <LazyAnalyticsPreview>
      <AnalyticsPanels shown kpis={FINAL_KPIS} />
    </LazyAnalyticsPreview>
  )
}
