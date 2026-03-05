/**
 * Features Showcase
 * Shows other cool features: journal, encyclopedia, multi-dog, tricks, etc.
 * No em dashes.
 */

const FEATURES = [
  {
    icon: "📔",
    title: "Growth Journal",
    desc: "Auto-recorded milestones plus your own photos and notes. Watch your puppy grow up in a beautiful timeline.",
    color: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: "📚",
    title: "Breed Encyclopedia",
    desc: "50+ breeds with detailed profiles covering temperament, exercise needs, health risks, and training tips specific to your dog.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "🐕‍🦺",
    title: "Multi-Dog Support",
    desc: "Got more than one? Each dog gets their own personalized plan, health tracker, and Good Boy Score.",
    color: "bg-green-50 border-green-100",
    iconBg: "bg-green-100",
  },
  {
    icon: "🎪",
    title: "Trick Library",
    desc: "30 tricks across 6 packs, from Sit to Backflip. Unlock new packs as your puppy progresses.",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    icon: "👥",
    title: "Community & Referrals",
    desc: "Share your journey, invite friends, and earn rewards. Puppy parenting is better together.",
    color: "bg-pink-50 border-pink-100",
    iconBg: "bg-pink-100",
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    desc: "Training streaks, vaccination due dates, medication schedules. Never miss what matters.",
    color: "bg-coral/5 border-coral/10",
    iconBg: "bg-coral/10",
  },
];

export function FeaturesShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-coral font-semibold text-sm tracking-wide uppercase mb-3">
            Everything You Need
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
            More than training.{" "}
            <span className="text-coral">A complete puppy toolkit.</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              className={`animate-on-scroll rounded-2xl p-6 border ${feat.color} hover:shadow-md transition-shadow`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${feat.iconBg} flex items-center justify-center text-2xl mb-4`}>
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-navy mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
