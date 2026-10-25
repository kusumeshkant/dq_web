import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CTA } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="relative bg-enterprise-navy overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <p className="text-sm font-semibold text-enterprise-link tracking-widest uppercase">Error 404</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
          This page isn&apos;t here.
        </h1>
        <p className="mt-5 text-lg text-enterprise-muted leading-relaxed">
          The link may be old, or the address may have a typo.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" size="lg" className="rounded-lg">Go to the home page</Button>
          <Button
            href="/how-it-works"
            size="lg"
            variant="outline"
            className="rounded-lg border-enterprise-elevated text-enterprise-muted hover:bg-transparent hover:border-enterprise-muted hover:text-white"
          >
            {CTA.secondary}
          </Button>
        </div>
        <p className="mt-8 text-sm text-enterprise-muted">
          Looking to try DQ in your store?{' '}
          <Link href="/contact" className="text-enterprise-link font-semibold hover:underline underline-offset-2">
            {CTA.primary} →
          </Link>
        </p>
      </div>
    </section>
  )
}
