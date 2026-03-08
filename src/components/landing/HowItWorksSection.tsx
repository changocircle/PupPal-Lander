/**
 * Section 4: How It Works
 * "A whole training plan" in coral. No "12-week" language.
 * No em dashes.
 */

const STEPS = [
  {
    icon: "📸",
    num: 1,
    title: "Snap a photo",
    desc: "Buddy identifies your breed instantly. 51 breeds supported, each with its own training profile.",
    detail: "Golden Retriever ✓",
  },
  {
    icon: "📋",
    num: 2,
    title: "Get your plan",
    desc: "A personalized training program built for your puppy's exact breed, age, and the problems you are already dealing with.",
    detail: "164 exercises · 12 categories",
  },
  {
    icon: "🚀",
    num: 3,
    title: "Start training",
    desc: "Daily exercises, Buddy on call, health tracking, and a score that shows you it is actually working.",
    detail: "Results in 2 weeks",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFAF7]">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mb-3">
            3 steps. 2 minutes.{" "}
            <span className="text-coral">A whole training plan.</span>
          </h2>
        </div>

        {/* Steps: flush aligned */}
        <div className="space-y-6 mb-14">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="animate-on-scroll flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral text-white font-bold text-lg flex items-center justify-center">
                {step.num}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{step.icon}</span>
                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">{step.desc}</p>
                <span className="text-xs font-medium text-coral bg-coral/5 px-3 py-1 rounded-full">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <a
            href="#get-early-access"
            className="inline-block bg-coral hover:bg-coral/90 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors no-underline"
          >
            Get Early Access (It Takes 2 Minutes)
          </a>
        </div>
      </div>
    </section>
  );
}
