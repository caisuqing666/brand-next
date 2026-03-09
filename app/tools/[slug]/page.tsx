import { notFound } from 'next/navigation';
import GrowingPage from '../../components/GrowingPage';
import { getGrowingChildPage, getGrowingChildSlugs } from '../../../lib/slowroot-growing';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getGrowingChildSlugs('tools').map((slug) => ({ slug }));
}

export default async function ToolsGrowingPage({ params }: Props) {
  const { slug } = await params;
  const entry = getGrowingChildPage('tools', slug);

  if (!entry) {
    notFound();
  }

  return <GrowingPage sectionName={entry.sectionName} hint={entry.hint} activeNav={entry.activeNav} />;
}
