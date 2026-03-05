import { WaitlistForm } from "./WaitlistForm";
import { BuddyAvatar } from "./HeroSection";

/**
 * Section 12: Final CTA — PRD-16 §4.12
 * Fix #5: Inspired by littlebird.ai "Ready to work smarter" — 
 * vibrant rounded card, centered headline, single CTA.
 */

interface Props {
  onJoinWaitlist: (email: string) => Promise<{ success: boolean; alreadyJoined: boolean }>;
  waitlistCount: number;
}

export function FinalCTASection({ onJoinWaitlist, waitlistCount }: Props) {
  return (
    <section className="py-16 lg:py-24 bg-[#FFFAF7] px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Vibrant card — inspired by littlebird.ai */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral via-[#FF8A7A] to-[#FF6B5C] px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl shadow-coral/20">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute top-8 left-[8%] text-[60px] sm:text-[100px] rotate-12">🐾</div>
            <div className="absolute bottom-6 right-[10%] text-[50px] sm:text-[80px] -rotate-12">🐾</div>
            <div className="absolute top-[30%] right-[25%] text-[40px] sm:text-[60px] rotate-45 hidden sm:block">🐾</div>
            <div className="absolute bottom-[20%] left-[20%] text-[35px] sm:text-[50px] -rotate-6 hidden sm:block">🐾</div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Buddy icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <BuddyAvatar size={48} />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
              Your puppy is learning every&nbsp;day.
              <br />
              The question is&nbsp;what.
            </h2>

            <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto">
              Every day shapes the dog they'll become. Make them&nbsp;count.
            </p>

            {/* CTA form */}
            <div className="max-w-md mx-auto mb-6">
              <WaitlistForm
                onSubmit={onJoinWaitlist}
                buttonText="Get Early Access"
                dark
              />
            </div>

            {/* Trust line */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/60">
              <span>🔒 No credit card required</span>
              <span className="hidden sm:inline">·</span>
              <span>3-day free trial at launch</span>
              {waitlistCount > 50 && (
                <>
                  <span className="hidden sm:inline">·</span>
                  <span className="text-white/90 font-medium">
                    Join {waitlistCount.toLocaleString()} puppy&nbsp;parents
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
