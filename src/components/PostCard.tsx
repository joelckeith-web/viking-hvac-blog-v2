import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:border-viking-navy transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-viking-red bg-red-50 px-2 py-1 rounded">
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.readingTime}</span>
      </div>
      <Link href={`/blog/${post.slug}/`}>
        <h2 className="text-xl font-bold text-viking-navy hover:text-viking-red transition-colors mb-2">
          {post.h1}
        </h2>
      </Link>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {post.meta_description}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{dateFormatted}</span>
        <span>{post.service_area}</span>
      </div>
    </article>
  );
}
