import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/config';
import PostCard from '@/components/PostCard';

export default function BlogHome() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-viking-navy mb-3">
          HVAC Tips &amp; Guides for Phoenix Valley Homeowners
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Expert advice from {siteConfig.name} — your family-owned HVAC team in Chandler, AZ.
          Practical tips for Arizona&apos;s extreme climate, equipment guides, and money-saving insights.
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl mb-2">Blog posts coming soon.</p>
          <p>Check back for expert HVAC advice tailored to the Phoenix Metro Valley.</p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-xl font-bold text-viking-navy mb-2">
          Need HVAC Service Now?
        </h2>
        <p className="text-gray-600 mb-4">
          We&apos;re available 24/7 for emergency repairs across the Phoenix Metro Valley.
        </p>
        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
          className="inline-block bg-viking-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Call {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
