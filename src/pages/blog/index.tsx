/**
 * PupPal Blog Index Page
 * Lists all 10 SEO articles with cards.
 */

import { StickyHeader } from "../../components/landing/StickyHeader";
import { Footer } from "../../components/landing/Footer";
import { blogPosts } from "../../data/blog-posts";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF7]">
      <StickyHeader scrolled={true} />

      <main className="container mx-auto max-w-5xl pt-28 pb-20 px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-[#1B2333] mb-4">Puppy Training Blog</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Practical, honest advice for new puppy parents. No fluff, no jargon — just what works.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#FF6B5C]/30 transition-all no-underline group"
            >
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <span>{formatDate(post.publishedAt)}</span>
                <span>·</span>
                <span>{post.readTime} min read</span>
              </div>
              <h2 className="text-lg font-bold text-[#1B2333] mb-2 group-hover:text-[#FF6B5C] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
              <div className="mt-4 text-[#FF6B5C] text-sm font-semibold">
                Read article →
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#1B2333] rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">🐾</div>
          <h2 className="text-2xl font-extrabold text-white mb-2">Train smarter with PupPal</h2>
          <p className="text-white/60 mb-6 max-w-md mx-auto text-sm">
            Get a personalized 12-week training plan for your puppy's exact breed, with Buddy the AI mentor available 24/7.
          </p>
          <a
            href="/#waitlist"
            className="inline-block bg-[#FF6B5C] hover:bg-[#FF6B5C]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors no-underline text-sm"
          >
            Get Early Access
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
