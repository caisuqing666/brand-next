import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type GardenStatus = 'seed' | 'growing' | 'rooted';

export interface GardenNode {
  slug: string;
  title: string;
  status: GardenStatus;
  updated: string;
  summary: string;
  content: string;
}

const GARDEN_DIR = path.join(process.cwd(), 'content', 'garden');

export const STATUS_LABEL: Record<GardenStatus, string> = {
  seed: '冒芽',
  growing: '长着',
  rooted: '成立',
};

function readNodeFile(filename: string): GardenNode | null {
  if (!filename.endsWith('.mdx') && !filename.endsWith('.md')) return null;
  const fullPath = path.join(GARDEN_DIR, filename);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  const slug = (data.slug as string) || filename.replace(/\.mdx?$/, '');
  const status = (data.status as GardenStatus) || 'seed';
  const title = (data.title as string) || slug;
  const updated = (data.updated as string) || '';
  const summary = (data.summary as string) || '';

  return { slug, title, status, updated, summary, content };
}

export function getAllNodes(): GardenNode[] {
  if (!fs.existsSync(GARDEN_DIR)) return [];
  const files = fs.readdirSync(GARDEN_DIR);
  const nodes = files
    .map(readNodeFile)
    .filter((node): node is GardenNode => node !== null);
  return nodes.sort((a, b) => (a.updated < b.updated ? 1 : -1));
}

export function getNode(slug: string): GardenNode | null {
  const nodes = getAllNodes();
  return nodes.find((node) => node.slug === slug) ?? null;
}

export function getRecentNodes(limit = 3): GardenNode[] {
  return getAllNodes().slice(0, limit);
}
