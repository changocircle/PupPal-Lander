/**
 * Section 6: Training Plan
 * No "12-week" language. Emphasize ongoing/year-round value.
 * No em dashes.
 */

const CATEGORIES = [
  { icon: "🎯", name: "Obedience", count: "25+" },
  { icon: "🏠", name: "House Training", count: "15+" },
  { icon: "🐕", name: "Socialization", count: "20+" },
  { icon: "🦷", name: "Bite Inhibition", count: "12+" },
  { icon: "🚶", name: "Leash Walking", count: "15+" },
  { icon: "🎪", name: "Tricks", count: "30+" },
  { icon: "🧩", name: "Mental Games", count: "18+" },
  { icon: "💪", name: "Physical Exercise", count: "15+" },
];

const PLAN_FEATURES = [
  {
    icon: "🧬",
    title: "Built for your breed",
    desc: "Golden Retrievers need different training than Frenchies. Buddy knows the difference, down to energy levels and instincts.",
  },
  {
    icon: "📅",
    title: "Grows with your puppy",
    desc: "Your plan evolves as your puppy does. New challenges, new skills, new milestones all year.",
  },
  {
    icon: "🔄",
    title: "Adaptive pacing",
    desc: "Stuck on something? Buddy adjusts. Cruising through? Level up.",
  },
];

export function TrainingPlanSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFAF7]">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-coral font-semibold text-sm tracking-wide uppercase mb-3">
            Personalized Training
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
            160+ exercises. One plan built just for your puppy.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Features */}
          <div className="flex-1 animate-on-scroll">
            <div className="space-y-5 mb-8">
              {PLAN_FEATURES.map((feat, i) => (
                <div key={i} className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center text-xl">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base mb-0.5">{feat.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <a
                href="#get-early-access"
                className="inline-block bg-coral hover:bg-coral/90 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors no-underline"
              >
                Get Your Personalized Plan →
              </a>
            </div>
          </div>

          {/* Right: Category grid */}
          <div className="flex-1 animate-on-scroll w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.map((cat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-coral/20 transition-all text-center lg:text-left"
                >
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <p className="font-semibold text-navy text-sm">{cat.name}</p>
                  <p className="text-xs text-gray-400">{cat.count} exercises</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-400">
                <span className="font-bold text-navy">164</span> exercises across{" "}
                <span className="font-bold text-navy">12</span> categories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
