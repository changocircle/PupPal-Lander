import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { StickyHeader } from "../components/landing/StickyHeader";
import { HeroSection } from "../components/landing/HeroSection";
import { ProblemSection } from "../components/landing/ProblemSection";
import { MeetBuddySection } from "../components/landing/MeetBuddySection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { SocialProofStrip } from "../components/landing/SocialProofStrip";
import { TrainingPlanSection } from "../components/landing/TrainingPlanSection";
import { GoodBoyScoreSection } from "../components/landing/GoodBoyScoreSection";
import { HealthTrackerSection } from "../components/landing/HealthTrackerSection";
import { FeaturesShowcase } from "../components/landing/FeaturesShowcase";
import { PriceComparisonSection } from "../components/landing/PriceComparisonSection";
import { FAQSection } from "../components/landing/FAQSection";
import { FinalCTASection } from "../components/landing/FinalCTASection";
import { Footer } from "../components/landing/Footer";
import { BuddyChatWidget } from "../components/landing/BuddyChatWidget";

/**
 * PupPal Landing Page — PRD-16
 *
 * Single-page, high-conversion sales page.
 * Pre-launch: email waitlist capture + live Buddy chat widget.
 *
 * Section order updated:
 * 1. Hero (with left-aligned email form)
 * 2. Problem (scroll-reveal headline)
 * 3. Meet Buddy (animated demo conversation flow)
 * 4. How It Works (flush aligned cards)
 * 5. Social Proof (bigger testimonials, slider)
 * 6. Training Plan (category grid, no phone mockup)
 * 7. Good Boy Score (animated gauge on scroll)
 * 8. Health Tracker
 * 9. Features Showcase (journal, encyclopedia, etc.)
 * 10. Price Comparison
 * 11. FAQ
 * 12. Final CTA
 */

interface Props {
  onJoinWaitlist: (email: string) => Promise<{ success: boolean; alreadyJoined: boolean }>;
  utmParams: { referralCode?: string };
}

export default function LandingPage({ onJoinWaitlist, utmParams }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const waitlistCount = useQuery(api.waitlist.count);

  // Scroll listener for sticky header (RAF-throttled)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.15 }
    );

    // Observe all elements — need to re-observe after render
    const timeout = setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  // Store UTM params in sessionStorage
  useEffect(() => {
    if (utmParams.referralCode) {
      sessionStorage.setItem("puppal_utm", JSON.stringify(utmParams));
    }
  }, [utmParams]);

  const referralCode = utmParams.referralCode;

  return (
    <div className="min-h-screen bg-[#FFFAF7] overflow-x-hidden">
      <StickyHeader scrolled={scrolled} />

      {/* Referral banner */}
      {referralCode && (
        <div className="bg-coral text-white text-center py-3 px-6 text-sm font-medium">
          🎁 You've been referred! Sign up now and you both get a&nbsp;bonus.
        </div>
      )}

      <main>
        <HeroSection
          onJoinWaitlist={onJoinWaitlist}
          waitlistCount={waitlistCount ?? 0}
          referralCode={referralCode}
        />
        <ProblemSection />
        <MeetBuddySection />
        <HowItWorksSection />
        <SocialProofStrip />
        <TrainingPlanSection />
        <GoodBoyScoreSection />
        <HealthTrackerSection />
        <FeaturesShowcase />
        <PriceComparisonSection onJoinWaitlist={onJoinWaitlist} />
        <FAQSection />
        <FinalCTASection
          onJoinWaitlist={onJoinWaitlist}
          waitlistCount={waitlistCount ?? 0}
        />
      </main>

      <Footer />

      {/* Live Buddy chat widget */}
      <BuddyChatWidget />
    </div>
  );
}
