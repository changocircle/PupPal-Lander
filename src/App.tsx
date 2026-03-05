import { useEffect, useState, useCallback } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import ErrorBoundary from "./components/ErrorBoundary";
import LandingPage from "./pages/LandingPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AffiliatePage from "./pages/AffiliatePage";

/**
 * PupPal Landing — Simple path-based routing.
 * No library needed — just window.location.pathname.
 */

// UTM parameter capture
function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
    utmContent: params.get("utm_content") ?? undefined,
    referralCode: params.get("ref") ?? params.get("inf") ?? undefined,
  };
}

function getDeviceType(): string {
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return "mobile";
  if (/Tablet|iPad/i.test(ua)) return "tablet";
  return "desktop";
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [utmParams] = useState(getUTMParams);

  // Waitlist
  const joinWaitlist = useMutation(api.waitlist.join);

  const handleJoinWaitlist = useCallback(
    async (email: string) => {
      const result = await joinWaitlist({
        email,
        ...utmParams,
        deviceType: getDeviceType(),
      });
      return result;
    },
    [joinWaitlist, utmParams]
  );

  // Dynamic page title and meta description for sub-pages
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "PupPal — AI-Powered Puppy Training App | Personalized Plans for Your Breed",
      "/privacy": "Privacy Policy — PupPal",
      "/terms": "Terms of Service — PupPal",
      "/affiliate": "Affiliate Program — Earn With PupPal",
    };
    const descriptions: Record<string, string> = {
      "/": "Train your puppy with an AI mentor that knows your breed. Personalized training plans, 160+ exercises, health tracking, and the Good Boy Score. $3.33/month.",
      "/privacy": "PupPal's privacy policy. Learn how we protect your data and your puppy's information.",
      "/terms": "PupPal's terms of service. Read about our terms and conditions for using the app.",
      "/affiliate": "Join PupPal's affiliate program. Earn 20-30% commission promoting the #1 AI puppy training app.",
    };

    document.title = titles[path] || titles["/"]!;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", descriptions[path] || descriptions["/"]!);
    }
  }, [path]);

  // Handle navigation without reload
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) return;

      // Internal navigation
      e.preventDefault();
      window.history.pushState({}, "", href);
      setPath(href);
      window.scrollTo(0, 0);
    };

    const handlePopState = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <ErrorBoundary>
      {path === "/privacy" ? (
        <PrivacyPage />
      ) : path === "/terms" ? (
        <TermsPage />
      ) : path === "/affiliate" ? (
        <AffiliatePage onJoinWaitlist={handleJoinWaitlist} />
      ) : (
        <LandingPage onJoinWaitlist={handleJoinWaitlist} utmParams={utmParams} />
      )}
    </ErrorBoundary>
  );
}

export default App;
