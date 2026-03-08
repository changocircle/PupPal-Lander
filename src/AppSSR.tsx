/**
 * SSR-compatible App variant for static pre-rendering.
 *
 * Differences from App.tsx:
 * - Accepts `path` prop instead of reading window.location (no browser APIs)
 * - No Convex mutations (waitlist join is interactive-only; no-op stubs are fine)
 * - No useEffect (no browser APIs during renderToString)
 * - No ErrorBoundary (class component, compatible with SSR but unnecessary here)
 *
 * This component is only ever executed in a Node.js SSR context via
 * scripts/prerender.ts. Regular users always get the hydrated App.tsx.
 */

import LandingPage from "./pages/LandingPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AffiliatePage from "./pages/AffiliatePage";
import BlogIndexPage from "./pages/blog/index";
import BlogPostPage from "./pages/blog/[slug]";

interface Props {
  path: string;
}

// No-op stub: waitlist join is an interactive mutation — not called at render time.
const noopJoinWaitlist = async (_email: string) => ({
  success: false,
  alreadyJoined: false,
});

export default function AppSSR({ path }: Props) {
  if (path === "/privacy") {
    return <PrivacyPage />;
  }
  if (path === "/terms") {
    return <TermsPage />;
  }
  if (path === "/affiliate") {
    return <AffiliatePage onJoinWaitlist={noopJoinWaitlist} />;
  }
  if (path === "/blog" || path === "/blog/") {
    return <BlogIndexPage />;
  }
  if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "").replace(/\/$/, "");
    return <BlogPostPage slug={slug} />;
  }
  // Default: landing page
  return (
    <LandingPage
      onJoinWaitlist={noopJoinWaitlist}
      utmParams={{ referralCode: undefined }}
    />
  );
}
