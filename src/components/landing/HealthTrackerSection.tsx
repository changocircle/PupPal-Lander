/**
 * Section 8: Health Tracker
 * No em dashes.
 */

export function HealthTrackerSection() {
  return (
    <section className="py-20 lg:py-28 bg-coral-light">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 animate-on-scroll order-2 lg:order-1">
            <p className="text-coral font-semibold text-sm tracking-wide uppercase mb-3">
              Health & Wellness
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-6">
              Never miss a vaccination.{" "}
              Track weight, meds, and milestones in one place.
            </h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "💉",
                  title: "Vaccination schedule",
                  desc: "Auto-generated reminders based on your puppy's age and breed.",
                },
                {
                  icon: "⚖️",
                  title: "Weight tracking",
                  desc: "Chart growth over time. Know if your puppy is on track.",
                },
                {
                  icon: "💊",
                  title: "Medication reminders",
                  desc: "Flea, tick, heartworm. Never miss a dose.",
                },
                {
                  icon: "📔",
                  title: "Growth journal",
                  desc: "Auto-recorded milestones plus your own photos and notes.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base mb-0.5">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health card mockup */}
          <div className="flex-1 animate-on-scroll order-1 lg:order-2">
            <div className="max-w-[300px] mx-auto">
              <div className="bg-white rounded-3xl shadow-xl shadow-coral/5 overflow-hidden border border-coral/10">
                <div className="bg-navy px-5 py-3">
                  <p className="text-white font-semibold text-sm">Health Dashboard</p>
                  <p className="text-white/50 text-xs">Luna · Golden Retriever</p>
                </div>

                <div className="p-4 space-y-3">
                  <div className="bg-coral/5 rounded-xl p-3 border border-coral/10">
                    <p className="text-[10px] text-coral font-semibold uppercase mb-2">Coming Up</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center text-sm">💉</div>
                      <div>
                        <p className="text-xs font-semibold text-navy">DHPP (Booster)</p>
                        <p className="text-[10px] text-gray-400">Due March 15</p>
                      </div>
                      <span className="ml-auto text-[10px] text-coral font-medium bg-coral/5 px-2 py-1 rounded-full">In 10 days</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] text-gray-400 font-semibold uppercase">Weight Trend</p>
                      <p className="text-sm font-bold text-navy">18.2 <span className="text-[10px] text-gray-400">lbs</span></p>
                    </div>
                    <svg viewBox="0 0 200 60" className="w-full h-12">
                      <polyline
                        points="0,55 30,48 60,42 90,35 120,28 150,22 180,15 200,10"
                        fill="none" stroke="#FF6B5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      />
                      <circle cx="200" cy="10" r="3" fill="#FF6B5C" />
                    </svg>
                    <div className="flex justify-between text-[9px] text-gray-300">
                      <span>8 wk</span><span>10 wk</span><span>12 wk</span><span>14 wk</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gold-light rounded-xl p-3">
                    <span className="text-lg">💊</span>
                    <div>
                      <p className="text-xs font-semibold text-navy">Simparica Trio</p>
                      <p className="text-[10px] text-gray-400">Next dose: March 20</p>
                    </div>
                    <span className="ml-auto text-green-500 text-xs">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
