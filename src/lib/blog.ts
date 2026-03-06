import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

export interface FAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  meta_description: string;
  date: string;
  author: string;
  category: string;
  service_area: string;
  journey_stage: string;
  target_keyword: string;
  related_hub: string;
  schema_types: string[];
  faqs: FAQ[];
  content: string;
  contentHtml: string;
  readingTime: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || '',
    h1: data.h1 || data.title || '',
    meta_description: data.meta_description || '',
    date: data.date || '',
    author: data.author || 'Viking HVAC Team',
    category: data.category || '',
    service_area: data.service_area || 'Phoenix Metro Valley',
    journey_stage: data.journey_stage || 'Awareness',
    target_keyword: data.target_keyword || '',
    related_hub: data.related_hub || '',
    schema_types: data.schema_types || ['Article', 'FAQPage', 'BreadcrumbList'],
    faqs: data.faqs || [],
    content,
    contentHtml: '',
    readingTime: stats.text,
  };
}

export async function getPostWithHtml(slug: string): Promise<BlogPost | null> {
  const post = getPostBySlug(slug);
  if (!post) return null;

  const processedContent = await remark().use(html).process(post.content);
  post.contentHtml = processedContent.toString();

  return post;
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
