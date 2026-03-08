import { useState } from "react";

/**
 * Section 11: FAQ
 * Accordion-style FAQs addressing objections.
 * No em dashes. Updated pricing language for annual retention.
 */

const FAQS = [
  {
    q: "Is PupPal good for first-time dog owners?",
    a: "PupPal was literally built for first-time dog owners. Everything is explained in plain language, step-by-step. Buddy (your AI mentor) can answer any question, no matter how basic. No judgment, just help.",
  },
  {
    q: "How is this different from YouTube or Google?",
    a: "YouTube gives you generic advice for generic dogs. PupPal knows your specific breed, age, and challenges. When you ask 'is my puppy biting too much?', Buddy gives you an answer tailored to YOUR puppy, not a 20-minute video that might not even be relevant.",
  },
  {
    q: "Does it work for all breeds?",
    a: "Yes! PupPal supports 51+ breeds with breed-specific training insights. Each breed has unique characteristics. A Border Collie's mental stimulation needs are very different from a Bulldog's exercise tolerance. Buddy knows the difference.",
  },
  {
    q: "What age should my puppy be?",
    a: "PupPal is designed for puppies 8 weeks and up. The sweet spot is the first year, when the right training habits make the biggest difference. But your plan keeps evolving past 12 months with new skills, challenges, and maintenance exercises as your dog grows up.",
  },
  {
    q: "Can it replace a professional trainer?",
    a: "For most puppy basics (biting, potty training, basic commands, socialization), PupPal covers everything a trainer would teach, and more. For serious behavioral issues (aggression, severe anxiety), we'll always recommend consulting a professional. But 95% of puppy training? We've got you.",
  },
  {
    q: "How much does PupPal cost?",
    a: "PupPal is $39.99/year ($3.33/month), less than a single 30-minute session with most trainers. We also offer a monthly plan at $9.99/month. Every new user gets a 3-day free trial at launch, no credit card required to get started.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. Your data is encrypted and stored securely. We never sell your personal information. You can export or delete your data at any time from Settings.",
  },
  {
    q: "What if I have multiple dogs?",
    a: "Premium users can add multiple dogs, each with their own personalized training plan, health records, and progress tracking. Switch between profiles with one tap.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mb-3">
            Got questions? Good.
          </h2>
          <p className="text-base text-gray-500">
            Here are the ones we hear most.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3 animate-on-scroll">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-coral/20 bg-coral/[0.02] shadow-sm"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-navy text-base pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`text-xl text-gray-400 transition-transform flex-shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <p className="px-6 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
