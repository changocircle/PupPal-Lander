import { useEffect, useRef, useState, useCallback } from "react";
import { BuddyAvatar } from "./HeroSection";

/**
 * Section 3: Meet Buddy
 * Full animated demo conversation flow that LOOPS.
 * Shows user panicking → Buddy calming them → actionable advice → problem solved.
 * No em dashes.
 */

const DEMO_MESSAGES = [
  {
    role: "user" as const,
    text: "HELP 😭 My 10-week Golden just bit my daughter and drew blood. Is this aggressive?? Should I be worried???",
    delay: 0,
  },
  {
    role: "buddy" as const,
    text: "Hey, take a breath. This is completely normal for a 10-week Golden Retriever! This isn't aggression, it's teething + play biting. Golden puppies actually have the MOST mouthy phase of almost any breed. 🐾",
    delay: 1200,
  },
  {
    role: "user" as const,
    text: "Really? So he's not aggressive? What do I do to stop it?",
    delay: 2400,
  },
  {
    role: "buddy" as const,
    text: "Not aggressive at all, just a puppy being a puppy! Here's what works specifically for Goldens:\n\n1. When he bites, say \"ouch\" and freeze for 3 seconds\n2. Redirect to a frozen washcloth (their teething gums love it)\n3. Practice the \"gentle mouth\" exercise in your training plan\n\nMost Golden parents see 80% improvement in 2 weeks with consistency.",
    delay: 3800,
  },
  {
    role: "user" as const,
    text: "Omg thank you 🙏 I feel so much better. Starting the gentle mouth exercise now!",
    delay: 5200,
  },
];

const FEATURE_PILLS = [
  { icon: "🐾", text: "Knows your breed, age, and challenges" },
  { icon: "💬", text: "Available 24/7, even at 2am" },
  { icon: "🧠", text: "Learns as your puppy grows" },
];

const LOOP_PAUSE_MS = 4000; // pause before restarting

export function MeetBuddySection() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const startAnimation = useCallback(() => {
    clearAllTimeouts();
    setVisibleMessages(0);

    DEMO_MESSAGES.forEach((msg, i) => {
      const t = setTimeout(() => setVisibleMessages(i + 1), msg.delay);
      timeoutsRef.current.push(t);
    });

    // After all messages shown + pause, restart
    const lastDelay = DEMO_MESSAGES[DEMO_MESSAGES.length - 1]!.delay;
    const restartT = setTimeout(() => {
      startAnimation();
    }, lastDelay + LOOP_PAUSE_MS);
    timeoutsRef.current.push(restartT);
  }, [clearAllTimeouts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearAllTimeouts();
    };
  }, [startAnimation, clearAllTimeouts]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-coral-light" id="meet-buddy">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mb-4">
            Meet Buddy. Your AI puppy mentor.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            {FEATURE_PILLS.map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-coral/10"
              >
                <span className="text-lg">{pill.icon}</span>
                <span className="text-sm font-medium text-navy">{pill.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo chat flow */}
        <div className="max-w-xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-3xl shadow-xl shadow-coral/5 overflow-hidden border border-coral/10">
            {/* Chat header */}
            <div className="bg-navy px-5 py-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center overflow-hidden">
                <BuddyAvatar size={36} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Buddy</p>
                <p className="text-white/50 text-xs">AI Puppy Mentor · Online</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
            </div>

            {/* Messages */}
            <div className="p-5 space-y-4 min-h-[280px]">
              {DEMO_MESSAGES.map((msg, i) => {
                if (i >= visibleMessages) return null;
                const isUser = msg.role === "user";
                return (
                  <div
                    key={`${i}-${visibleMessages}`}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                    style={{ animation: "fadeInUp 0.4s ease-out forwards" }}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 rounded-full flex-shrink-0 mr-2 mt-1 overflow-hidden">
                        <BuddyAvatar size={28} />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                        isUser
                          ? "bg-coral text-white rounded-2xl rounded-br-md"
                          : "bg-gray-50 text-navy rounded-2xl rounded-bl-md border border-gray-100"
                      }`}
                    >
                      {msg.text.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < msg.text.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator between messages */}
              {visibleMessages > 0 && visibleMessages < DEMO_MESSAGES.length && (
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full flex-shrink-0 mr-2 mt-1 overflow-hidden">
                    <BuddyAvatar size={28} />
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-bl-md px-4 py-3 border border-gray-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                      <div className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                      <div className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                    </div>
                  </div>
                </div>
              )}

              {/* Resolution: shows after all messages */}
              {visibleMessages >= DEMO_MESSAGES.length && (
                <div
                  className="bg-green-50 border border-green-200 rounded-xl p-3.5 text-center"
                  style={{ animation: "fadeInUp 0.5s ease-out forwards" }}
                >
                  <span className="text-green-600 text-sm font-medium">
                    ✅ Crisis resolved in 60 seconds. That's Buddy.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* CTA below chat */}
          <div className="text-center mt-8">
            <a
              href="#get-early-access"
              className="inline-block bg-coral hover:bg-coral/90 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors no-underline"
            >
              Get Buddy in Your Pocket →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
