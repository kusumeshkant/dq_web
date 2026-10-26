import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Generated at build time (static export writes out/sitemap.xml). lastmod is
// the build date, so it never needs a hand edit.
const ROUTES: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '/',             changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/for-stores/',  changeFrequency: 'monthly', priority: 0.9 },
  { path: '/how-it-works/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pricing/',     changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about/',       changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact/',     changeFrequency: 'monthly', priority: 0.8 },
  { path: '/privacy/',     changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/terms/',       changeFrequency: 'yearly',  priority: 0.3 },
]

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().slice(0, 10)
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
