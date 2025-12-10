// app/layout.tsx
import type { Metadata } from 'next';
import './brand.css';

export const metadata: Metadata = {
  title: 'Brand Next',
  description: '蔡蔡的 brand-next 网站',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
