/**
 * PupPal Blog Article Page
 * Individual blog post with SEO schema, breadcrumb, related articles.
 */

import { useEffect } from "react";
import { StickyHeader } from "../../components/landing/StickyHeader";
import { Footer } from "../../components/landing/Footer";
import { getBlogPost, getRelatedPosts } from "../../data/blog-posts";

interface Props {
  slug: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPostPage({ slug }: Props) {
  const post = getBlogPost(slug);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | PupPal Blog`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", post.excerpt);
    }

    // Inject JSON-LD Article schema
    const existing = document.getElementById("blog-jsonld");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "blog-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "PupPal",
        url: "https://puppal.dog",
      },
      publisher: {
        "@type": "Organization",
        name: "PupPal",
        url: "https://puppal.dog",
        logo: {
          "@type": "ImageObject",
          url: "https://puppal.dog/favicon.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://puppal.dog/blog/${post.slug}`,
      },
    });
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("blog-jsonld");
      if (s) s.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FFFAF7]">
        <StickyHeader scrolled={true} />
        <main className="container mx-auto max-w-3xl pt-28 pb-20 px-6 text-center">
          <h1 className="text-3xl font-extrabold text-[#1B2333] mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-6">That article does not exist or may have moved.</p>
          <a href="/blog" className="text-[#FF6B5C] font-semibold hover:underline">
            Back to Blog
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post);

  // Find mid-article position: after the 2nd h2
  const insertCta = (html: string): string => {
    const h2Count = { count: 0 };
    return html.replace(/<h2>/g, () => {
      h2Count.count++;
      if (h2Count.count === 2) {
        return `</div><div class="mid-article-cta my-8 bg-[#FFFAF7] border border-[#FF6B5C]/20 rounded-2xl p-6 text-center">
          <p class="text-sm font-semibold text-[#1B2333] mb-1">Train your puppy the right way</p>
          <p class="text-xs text-gray-500 mb-3">PupPal gives you a personalized plan for your exact breed, plus Buddy the AI mentor to answer questions 24/7.</p>
          <a href="/#waitlist" class="inline-block bg-[#FF6B5C] text-white text-xs font-semibold px-5 py-2.5 rounded-full no-underline hover:bg-[#FF6B5C]/90 transition-colors">Train with PupPal</a>
        </div><div class="article-body"><h2>`;
      }
      return `<h2>`;
    });
  };

  const processedContent = insertCta(post.content);

  return (
    <div className="min-h-screen bg-[#FFFAF7]">
      <StickyHeader scrolled={true} />

      <main className="container mx-auto max-w-3xl pt-28 pb-20 px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <a href="/" className="hover:text-[#FF6B5C] transition-colors no-underline">Home</a>
          <span>/</span>
          <a href="/blog" className="hover:text-[#FF6B5C] transition-colors no-underline">Blog</a>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B2333] leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
            <span>·</span>
            <span className="text-[#7BAE7F] font-medium">PupPal Team</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="article-body">
          {/* biome-ignore lint: dangerouslySetInnerHTML is required for pre-authored HTML content */}
          <div
            className="prose prose-slate max-w-none text-[15px] leading-relaxed
              prose-h2:text-[#1B2333] prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-3
              prose-h3:text-[#1B2333] prose-h3:text-base prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-gray-600 prose-p:mb-4
              prose-ul:text-gray-600 prose-ul:pl-6 prose-ul:mb-4 prose-ul:space-y-1
              prose-ol:text-gray-600 prose-ol:pl-6 prose-ol:mb-4 prose-ol:space-y-1
              prose-li:mb-1
              prose-strong:text-[#1B2333] prose-strong:font-semibold
              prose-table:text-sm prose-table:border-collapse
              prose-th:bg-[#1B2333] prose-th:text-white prose-th:px-4 prose-th:py-2 prose-th:text-left
              prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2 prose-td:text-gray-600"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: pre-authored content
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>

        {/* End CTA */}
        <div className="mt-12 bg-[#1B2333] rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🐾</div>
          <h2 className="text-2xl font-extrabold text-white mb-2">Download PupPal</h2>
          <p className="text-sm text-white/60 mb-6 max-w-sm mx-auto">
            Your AI Puppy Trainer. Personalized plans, Buddy the AI mentor, health tracking, and more for $3.33/month.
          </p>
          <a
            href="/#waitlist"
            className="inline-block bg-[#FF6B5C] hover:bg-[#FF6B5C]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors no-underline text-sm"
          >
            Get Early Access
          </a>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-[#1B2333] mb-5">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <a
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#FF6B5C]/30 transition-all no-underline group"
                >
                  <div className="text-xs text-gray-400 mb-1">{related.readTime} min read</div>
                  <h3 className="text-sm font-semibold text-[#1B2333] group-hover:text-[#FF6B5C] transition-colors leading-snug">
                    {related.title}
                  </h3>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
