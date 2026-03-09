import { notFound } from 'next/navigation';
import GrowingPage from '../../components/GrowingPage';
import { getGrowingChildPage, getGrowingChildSlugs } from '../../../lib/slowroot-growing';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getGrowingChildSlugs('library').map((slug) => ({ slug }));
}

export default async function LibraryGrowingPage({ params }: Props) {
  const { slug } = await params;
  const entry = getGrowingChildPage('library', slug);

  if (!entry) {
    notFound();
  }

  return <GrowingPage sectionName={entry.sectionName} hint={entry.hint} activeNav={entry.activeNav} />;
}
