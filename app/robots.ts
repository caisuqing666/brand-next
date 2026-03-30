import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { getSiteUrlByHost } from '../lib/siteConfig'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers()
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host')
  const protocol = requestHeaders.get('x-forwarded-proto')
  const baseUrl = getSiteUrlByHost(host, protocol)

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
