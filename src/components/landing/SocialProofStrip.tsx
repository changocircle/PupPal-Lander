import { useState, useEffect, useCallback } from "react";

/**
 * Social Proof — Fix #5: Bigger testimonial cards with manual slider.
 * Inspired by littlebird.ai "What Our Users Say" section.
 */

const TESTIMONIALS = [
  {
    text: "I was drowning in YouTube advice. Buddy gave me a clear, breed-specific plan on day one. No more guessing.",
    author: "Sarah K.",
    dog: "Golden Retriever, 10 weeks",
    rating: 5,
  },
  {
    text: "My puppy's biting reduced by 80% in week 2. The 'gentle mouth' exercise Buddy recommended was a game-changer.",
    author: "Mike T.",
    dog: "Labrador, 14 weeks",
    rating: 5,
  },
  {
    text: "It's like texting a friend who happens to be a dog trainer. At 2am when my puppy was howling, Buddy was there.",
    author: "Jess L.",
    dog: "Poodle mix, 11 weeks",
    rating: 5,
  },
  {
    text: "The Good Boy Score is genius. My kids are obsessed with keeping it high. It turned training into a family activity.",
    author: "David R.",
    dog: "Bernedoodle, 9 weeks",
    rating: 5,
  },
  {
    text: "Worth every penny. We tried three trainers before finding PupPal. Buddy knew more about our Frenchie than any of them.",
    author: "Nia W.",
    dog: "French Bulldog, 13 weeks",
    rating: 5,
  },
  {
    text: "The breed-specific advice is so accurate. It actually understands that my GSD needs different training than a Lab.",
    author: "Carlos M.",
    dog: "German Shepherd, 12 weeks",
    rating: 5,
  },
];

export function SocialProofStrip() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive items per view
  useEffect(() => {
    const updateView = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };
    updateView();
    window.addEventListener("resize", updateView, { passive: true });
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-coral font-semibold text-sm tracking-wide uppercase mb-3">
            What Puppy Parents Are Saying
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy">
            Real puppy parents. Real results.
          </h2>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(-${current * (100 / itemsPerView)}%, 0, 0)`,
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-[#FFFAF7] rounded-2xl p-8 h-full border border-gray-100 flex flex-col">
                  {/* Stars + badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <span key={j} className="text-amber-400 text-lg">★</span>
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                      Early Access Member
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-base text-navy leading-relaxed mb-6 flex-1">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-sm font-bold text-coral">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{t.author}</p>
                      <p className="text-xs text-gray-400">{t.dog}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-coral w-6" : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
