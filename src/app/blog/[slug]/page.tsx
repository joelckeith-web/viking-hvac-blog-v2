import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostWithHtml } from '@/lib/blog';
import { siteConfig } from '@/lib/config';
import SchemaMarkup from '@/components/SchemaMarkup';
import FAQSection from '@/components/FAQSection';
import AuthorBio from '@/components/AuthorBio';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostWithHtml(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | ${siteConfig.shortName}`,
    description: post.meta_description,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: 'article',
      publishedTime: post.date,
      authors: [siteConfig.name],
      siteName: siteConfig.name,
      url: `${siteConfig.url}/blog/${post.slug}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description,
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostWithHtml(params.slug);
  if (!post) notFound();

  const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <SchemaMarkup post={post} />
      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href={siteConfig.mainSiteUrl} className="hover:text-viking-navy">Home</Link></li>
            <li>/</li>
            <li><Link href="/" className="hover:text-viking-navy">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-700 truncate max-w-[200px]">{post.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-viking-red bg-red-50 px-2 py-1 rounded">
              {post.category}
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              {post.journey_stage}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-viking-navy mb-4 leading-tight">
            {post.h1}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By {post.author}</span>
            <span>&bull;</span>
            <time dateTime={post.date}>{dateFormatted}</time>
            <span>&bull;</span>
            <span>{post.readingTime}</span>
            <span>&bull;</span>
            <span>{post.service_area}</span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-viking-navy prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-viking-navy prose-a:underline hover:prose-a:text-viking-red
            prose-strong:text-viking-navy
            prose-li:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CTA */}
        <CTABanner variant={post.category === 'Emergency' ? 'emergency' : 'standard'} />

        {/* FAQ Section */}
        <FAQSection faqs={post.faqs} />

        {/* Author Bio */}
        <AuthorBio />
      </article>
    </>
  );
}
