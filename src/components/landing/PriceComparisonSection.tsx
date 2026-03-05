import { WaitlistForm } from "./WaitlistForm";

/**
 * Section 9: Price Comparison
 * "$39.99" on its own line. Green best value box. No em/en dashes.
 * No "12-week" language (annual plan, ongoing value).
 */

interface Props {
  onJoinWaitlist: (email: string) => Promise<{ success: boolean; alreadyJoined: boolean }>;
}

const COMPARISONS = [
  {
    icon: "👨‍🏫",
    name: "Private Trainer",
    price: "$50-75",
    unit: "per session",
    sessions: "6-8 sessions typical",
    total: "$400-600",
    caveat: "Limited availability, not breed-specific",
    highlighted: false,
  },
  {
    icon: "🎓",
    name: "Group Classes",
    price: "$150-300",
    unit: "per course",
    sessions: "6-week course",
    total: "$150-300",
    caveat: "Generic curriculum, no ongoing support",
    highlighted: false,
  },
  {
    icon: "🐾",
    name: "PupPal",
    price: "$3.33",
    unit: "per month",
    sessions: "Personalized training + AI mentor year-round",
    total: "$39.99/year",
    caveat: "24/7 access, breed-specific, 160+ exercises",
    highlighted: true,
  },
];

export function PriceComparisonSection({ onJoinWaitlist }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFAF7]">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-2">
            A single training session: $50-75.
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-coral leading-tight mb-4">
            PupPal for a whole year: $39.99.
          </h2>
          <p className="text-base text-gray-500 max-w-lg mx-auto">
            Everything a trainer does, plus an AI mentor available 24/7 who actually
            knows your breed.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {COMPARISONS.map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll rounded-2xl p-6 transition-all ${
                item.highlighted
                  ? "bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 scale-[1.02] border-2 border-emerald-400"
                  : "bg-white shadow-sm border border-gray-100"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Best value tag */}
              {item.highlighted && (
                <div className="bg-white text-emerald-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  🏆 BEST VALUE
                </div>
              )}

              <div className="text-3xl mb-3">{item.icon}</div>
              <h3
                className={`text-lg font-bold mb-1 ${
                  item.highlighted ? "text-white" : "text-navy"
                }`}
              >
                {item.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span
                  className={`text-3xl font-extrabold ${
                    item.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {item.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    item.highlighted ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  {item.unit}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <p className={item.highlighted ? "text-white/90" : "text-gray-500"}>
                  {item.sessions}
                </p>
                <p
                  className={`font-semibold ${
                    item.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  Total: {item.total}
                </p>
                <p
                  className={`text-xs ${
                    item.highlighted ? "text-emerald-100" : "text-gray-400"
                  }`}
                >
                  {item.caveat}
                </p>
              </div>

              {/* Paw decorations on green card */}
              {item.highlighted && (
                <div className="mt-4 flex justify-center gap-2 text-lg opacity-40">
                  🐾 🐾 🐾
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll max-w-lg mx-auto">
          <WaitlistForm onSubmit={onJoinWaitlist} buttonText="Join the Waitlist (It's Free)" compact />
          <p className="text-xs text-gray-400 mt-3">
            Launch pricing: $39.99/year with 3-day free trial. Lock in early access pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
