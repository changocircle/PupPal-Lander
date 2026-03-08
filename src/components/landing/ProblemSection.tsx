import { useEffect, useRef, useState } from "react";

/**
 * Section 2: Problem Validation
 * Bigger, more prominent section. "your dog" in green.
 * Apple-style scroll word-by-word illumination on headline.
 * "2am" is always coral. No orphan words. No em dashes.
 */

const HEADLINE_WORDS = [
  { text: "You're", highlight: false },
  { text: "Googling", highlight: false },
  { text: "at", highlight: false },
  { text: "2am.", highlight: true, alwaysCoral: true },
  { text: "YouTube", highlight: false },
  { text: "has", highlight: false },
  { text: "47\u00A0answers.", highlight: false },
  { text: "None", highlight: false, bold: true },
  { text: "of", highlight: false, bold: true },
  { text: "them", highlight: false, bold: true },
  { text: "know", highlight: false, bold: true },
  { text: "your", highlight: false, green: true },
  { text: "dog.", highlight: false, green: true },
];

const SEARCH_BUBBLES = [
  { text: "puppy won't stop biting", delay: "0s" },
  { text: "is it normal for puppies to...", delay: "-1.5s" },
  { text: "help my puppy is...", delay: "-0.8s" },
  { text: "golden retriever potty training", delay: "-2s" },
  { text: "puppy crying at night", delay: "-1s" },
  { text: "when do puppies stop teething", delay: "-0.3s" },
];

export function ProblemSection() {
  const [illuminatedCount, setIlluminatedCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;

    const updateIllumination = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const triggerStart = windowHeight * 0.85;
      const triggerEnd = windowHeight * 0.25;

      if (sectionTop > triggerStart) {
        setIlluminatedCount(0);
      } else if (sectionTop < triggerEnd) {
        setIlluminatedCount(HEADLINE_WORDS.length);
      } else {
        const progress = 1 - (sectionTop - triggerEnd) / (triggerStart - triggerEnd);
        const count = Math.floor(progress * HEADLINE_WORDS.length);
        setIlluminatedCount(Math.min(count, HEADLINE_WORDS.length));
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(updateIllumination);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateIllumination();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#F5EDE4]" id="problem">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1">
            {/* Apple-style scroll-illuminated headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-10">
              {HEADLINE_WORDS.map((word, i) => {
                const isIlluminated = i < illuminatedCount;
                const isCoral = word.alwaysCoral;
                const isGreen = word.green;
                const isBold = word.bold;

                return (
                  <span
                    key={i}
                    className={`transition-colors duration-300 ${
                      isCoral
                        ? isIlluminated
                          ? "text-coral"
                          : "text-coral/20"
                        : isGreen
                        ? isIlluminated
                          ? "text-emerald-600 font-black"
                          : "text-emerald-600/20"
                        : isBold
                        ? isIlluminated
                          ? "text-navy"
                          : "text-navy/15"
                        : isIlluminated
                        ? "text-gray-500"
                        : "text-gray-300"
                    }`}
                  >
                    {word.text}{" "}
                  </span>
                );
              })}
            </h2>

            <div className="space-y-5 text-xl text-gray-600">
              <p>"Is my puppy biting too much, or is&nbsp;this&nbsp;normal?"</p>
              <p>Every breed is different. Every puppy is&nbsp;different.</p>
              <p className="font-semibold text-navy text-xl">
                You need answers built around <em className="text-emerald-600 not-italic font-bold">YOUR</em>&nbsp;puppy, not some generic retriever in a YouTube video.
              </p>
            </div>
          </div>

          {/* Visual: floating search bubbles */}
          <div className="flex-1 overflow-hidden">
            <div className="relative flex flex-wrap items-center justify-center gap-3 py-6">
              {SEARCH_BUBBLES.map((bubble, i) => (
                <div
                  key={i}
                  className={`bg-white shadow-lg rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base text-gray-500 border border-gray-100 ${
                    i % 3 === 0
                      ? "bubble-float"
                      : i % 3 === 1
                      ? "bubble-float-slow"
                      : "bubble-float-fast"
                  }`}
                  style={{ animationDelay: bubble.delay }}
                >
                  <span className="text-gray-300 mr-1.5 sm:mr-2">🔍</span>
                  {bubble.text}
                </div>
              ))}
              {/* Overwhelm indicator */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
