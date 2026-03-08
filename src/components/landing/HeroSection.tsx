import { WaitlistForm } from "./WaitlistForm";

/**
 * Section 1: Hero
 * "World Class" before dog trainer, $4/month in coral color.
 * No em dashes anywhere.
 */

interface Props {
  onJoinWaitlist: (email: string) => Promise<{ success: boolean; alreadyJoined: boolean }>;
  waitlistCount: number;
  referralCode?: string;
}

export function HeroSection({ onJoinWaitlist, waitlistCount, referralCode }: Props) {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-end lg:items-center pb-12 lg:pb-0 pt-24 bg-[#FFFAF7] px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-coral font-semibold text-sm tracking-wide uppercase mb-4">
              Your puppy's first year is everything.
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-navy leading-tight mb-6">
              Like having a world class dog trainer on call 24/7, for less
              than{" "}
              <span className="text-coral">$4/month.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              {referralCode
                ? "Your friend thinks you'll love this. They're probably right. Buddy is your AI puppy mentor. He knows your breed, adapts as your puppy grows, and answers every panicked 2am question you are too embarrassed to Google."
                : "Buddy is your AI puppy mentor. He knows your breed, adapts as your puppy grows, and answers every panicked 2am question you are too embarrassed to Google."}
            </p>

            {/* CTA */}
            <div className="mb-6 max-w-lg" id="get-early-access">
              <WaitlistForm onSubmit={onJoinWaitlist} buttonText="Get Early Access" />
            </div>

            {/* Trust line */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 text-sm text-gray-400">
              <span>🔒 No credit card required</span>
              <span className="hidden sm:inline">·</span>
              <span>Coming soon to iOS & Android</span>
              {waitlistCount > 50 && (
                <>
                  <span className="hidden sm:inline">·</span>
                  <span className="text-coral font-medium">
                    {waitlistCount.toLocaleString()} puppy parents on the waitlist
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Visual: phone mockup */}
          <div className="flex-shrink-0 relative pl-2">
            <div className="w-[260px] sm:w-[300px] bg-white rounded-[2.5rem] shadow-2xl shadow-coral/10 border border-gray-100 overflow-hidden lg:transform lg:[perspective:1000px] lg:[transform:rotateY(-5deg)]">
              <div className="bg-navy px-6 pt-3 pb-2 flex items-center justify-between">
                <span className="text-white/70 text-xs font-medium">9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2.5 rounded-sm bg-white/70" />
                  <div className="w-1.5 h-2.5 rounded-sm bg-white/30" />
                </div>
              </div>

              <div className="bg-[#FFFAF7] p-4 space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center overflow-hidden">
                    <BuddyAvatar size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy">Buddy</p>
                    <p className="text-[10px] text-gray-400">AI Puppy Mentor</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-coral text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-br-md max-w-[200px]">
                    My 10-week Golden keeps biting everything. Is this normal?
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white text-navy text-xs px-3.5 py-2.5 rounded-2xl rounded-bl-md max-w-[220px] shadow-sm border border-gray-50">
                    Totally normal for a 10-week Golden! They're peak teething right now.
                    Here's exactly what to do...
                    <span className="text-coral font-medium block mt-1">Read more →</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 font-medium">GOOD BOY SCORE</p>
                      <p className="text-lg font-extrabold text-navy">78</p>
                    </div>
                    <div className="text-3xl">⭐</div>
                  </div>
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-coral rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 sm:-left-10 -bottom-4 w-14 sm:w-16 h-14 sm:h-16">
              <BuddyAvatar size={64} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Buddy character SVG */
function BuddyAvatar({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#FFE4CC" />
      <ellipse cx="14" cy="20" rx="10" ry="14" fill="#D4915E" transform="rotate(-15 14 20)" />
      <ellipse cx="50" cy="20" rx="10" ry="14" fill="#D4915E" transform="rotate(15 50 20)" />
      <ellipse cx="14" cy="22" rx="6" ry="9" fill="#C4814E" transform="rotate(-15 14 22)" />
      <ellipse cx="50" cy="22" rx="6" ry="9" fill="#C4814E" transform="rotate(15 50 22)" />
      <circle cx="32" cy="34" r="22" fill="#F5C78E" />
      <ellipse cx="32" cy="40" rx="12" ry="10" fill="#FFE4CC" />
      <circle cx="24" cy="32" r="3.5" fill="#1B2333" />
      <circle cx="40" cy="32" r="3.5" fill="#1B2333" />
      <circle cx="25.5" cy="30.5" r="1.2" fill="white" />
      <circle cx="41.5" cy="30.5" r="1.2" fill="white" />
      <ellipse cx="32" cy="38" rx="4" ry="3" fill="#1B2333" />
      <ellipse cx="33" cy="37" rx="1.5" ry="1" fill="#444" />
      <path d="M28 42 Q32 46 36 42" stroke="#1B2333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="32" cy="45" rx="3" ry="2.5" fill="#FF6B5C" />
      <circle cx="20" cy="38" r="3" fill="#FFB5A0" opacity="0.5" />
      <circle cx="44" cy="38" r="3" fill="#FFB5A0" opacity="0.5" />
    </svg>
  );
}

export { BuddyAvatar };
