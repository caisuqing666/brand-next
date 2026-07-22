// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import './tailwind.css';
import './brand.css';
import { getSiteConfigByHost, getSiteUrlByHost } from '../lib/siteConfig';

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host');
  const protocol = requestHeaders.get('x-forwarded-proto');
  const siteConfig = getSiteConfigByHost(host);

  const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    metadataBase: new URL(getSiteUrlByHost(host, protocol)),
  };

  if (siteConfig.googleSiteVerification) {
    metadata.verification = {
      google: siteConfig.googleSiteVerification,
    };
  }

  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
