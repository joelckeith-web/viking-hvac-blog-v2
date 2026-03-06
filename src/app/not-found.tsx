import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-viking-navy mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you&apos;re looking for doesn&apos;t exist. It may have been moved or removed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="bg-viking-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Browse Blog Posts
        </Link>
        <a
          href={siteConfig.mainSiteUrl}
          className="border border-viking-navy text-viking-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Visit Main Site
        </a>
      </div>
    </div>
  );
}
