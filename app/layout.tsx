// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import './tailwind.css';
import './brand.css';

export const metadata: Metadata = {
  title: 'slowroot',
  description: 'slowroot：一个关于结构、判断与慢生长的个人实验场。',
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
