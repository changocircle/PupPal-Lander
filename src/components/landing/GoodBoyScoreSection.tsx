import { useEffect, useRef, useState } from "react";

/**
 * Section 7: Good Boy Score
 * Updated dimension labels to PRD-04 user-facing names.
 * Fixed headline color treatment. No em dashes.
 */

export function GoodBoyScoreSection() {
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !isVisible) {
          setIsVisible(true);
          let current = 0;
          const interval = setInterval(() => {
            current += 1;
            setScore(current);
            if (current >= 78) clearInterval(interval);
          }, 25);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (score / 100) * circumference;

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Gauge visual */}
          <div className="flex-1 flex items-center justify-center animate-on-scroll">
            <div className="relative w-52 h-52" style={{ willChange: "transform", transform: "translateZ(0)" }}>
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#F3F4F6"
                  strokeWidth="12"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#FF6B5C"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="transition-all duration-100"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-extrabold text-navy">{score}</span>
                <span className="text-sm font-medium text-gray-400">/ 100</span>
              </div>

              <div
                className="absolute -top-2 -right-2 text-3xl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.5s ease-out 1.5s",
                }}
              >
                ⭐
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 animate-on-scroll">
            <p className="text-coral font-semibold text-sm tracking-wide uppercase mb-3">
              Gamification That Actually Works
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
              The Good Boy Score.{" "}
              <span className="text-navy">
                Stop guessing. Start knowing.
              </span>
            </h2>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed mb-8">
              <p>
                Every training session, every milestone, every day you show up counts
                toward a single number. Watch it climb. Know it is working.
              </p>
            </div>

            {/* Score breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: "🎯", label: "Training", value: "35%" },
                { icon: "❤️", label: "Health", value: "20%" },
                { icon: "🔥", label: "Consistency", value: "25%" },
                { icon: "🐕", label: "Socialization", value: "10%" },
                { icon: "🤝", label: "Bonding", value: "10%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-xs text-gray-500">{item.label}</span>
                  </div>
                  <p className="text-sm font-bold text-coral">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
