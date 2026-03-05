import { useState } from "react";
import { StickyHeader } from "../components/landing/StickyHeader";
import { Footer } from "../components/landing/Footer";
import { WaitlistForm } from "../components/landing/WaitlistForm";
import { BuddyAvatar } from "../components/landing/HeroSection";

interface Props {
  onJoinWaitlist: (email: string) => Promise<{ success: boolean; alreadyJoined: boolean }>;
}

const TIERS = [
  {
    name: "Starter",
    requirement: "0-10 referrals/mo",
    commission: "20%",
    perks: ["Unique referral link", "Real-time dashboard", "Monthly payouts"],
    color: "border-gray-200",
    bg: "bg-white",
  },
  {
    name: "Pro",
    requirement: "11-50 referrals/mo",
    commission: "25%",
    perks: ["Everything in Starter", "Custom promo codes", "Priority support", "Early feature access"],
    color: "border-coral",
    bg: "bg-coral/5",
    featured: true,
  },
  {
    name: "Partner",
    requirement: "50+ referrals/mo",
    commission: "30%",
    perks: ["Everything in Pro", "Custom landing pages", "Dedicated account manager", "Co-marketing opportunities", "Lifetime commission"],
    color: "border-navy",
    bg: "bg-navy/5",
  },
];

const WHO_ITS_FOR = [
  { icon: "📝", title: "Pet Bloggers & Content Creators", desc: "Share honest reviews with your audience and earn on every signup." },
  { icon: "🐕", title: "Dog Trainers & Behaviorists", desc: "Recommend PupPal as a companion tool and earn recurring income." },
  { icon: "📱", title: "Social Media Influencers", desc: "Create content showing your puppy's progress and earn per referral." },
  { icon: "🏪", title: "Pet Shops & Breeders", desc: "Add value for your customers with a training app recommendation." },
  { icon: "🎙️", title: "Podcasters", desc: "Integrate PupPal into your episodes with a custom promo code." },
  { icon: "💼", title: "Anyone with a Dog-Loving Audience", desc: "If your audience has puppies, they need PupPal." },
];

const STEPS = [
  { num: "1", title: "Apply", desc: "Fill out the form below. We review applications within 48 hours." },
  { num: "2", title: "Get Your Link", desc: "Receive your unique tracking link and access to the affiliate dashboard." },
  { num: "3", title: "Share", desc: "Promote PupPal to your audience with honest content and your link." },
  { num: "4", title: "Earn", desc: "Get 20-30% recurring commission on every subscription you refer." },
];

const FAQS = [
  {
    q: "How long do cookies last?",
    a: "Our tracking cookie lasts 90 days. If someone clicks your link today and signs up within 90 days, you get credit.",
  },
  {
    q: "When do I get paid?",
    a: "Payouts are processed monthly via PayPal or bank transfer. Minimum payout threshold is $50.",
  },
  {
    q: "Do I earn on renewals?",
    a: "Yes! You earn commission on the initial signup AND every renewal for as long as the customer stays subscribed.",
  },
  {
    q: "Can I promote PupPal on social media?",
    a: "Absolutely! We encourage it. We'll even provide you with branded assets, talking points, and content ideas.",
  },
  {
    q: "Is there a cost to join?",
    a: "No. The PupPal affiliate program is completely free to join.",
  },
  {
    q: "Can I be an affiliate outside the US?",
    a: "Yes! Our affiliate program is open to partners worldwide.",
  },
];

export default function AffiliatePage({ onJoinWaitlist }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FFFAF7]">
      <StickyHeader scrolled={true} />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-coral-light">
        <div className="container mx-auto max-w-5xl text-center px-6">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-coral/10 flex items-center justify-center overflow-hidden">
            <BuddyAvatar size={52} />
          </div>
          <p className="text-coral font-semibold text-sm tracking-wide uppercase mb-3">PupPal Affiliate Program</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
            Earn up to <span className="text-coral">30% recurring</span> commission
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Help puppy parents discover smarter training. Earn recurring revenue for every customer you refer to PupPal.
          </p>
          <a
            href="#affiliate-apply"
            className="inline-block bg-coral hover:bg-coral/90 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors no-underline"
          >
            Apply Now (It's Free)
          </a>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-20 lg:py-28 bg-[#FFFAF7]">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-3">Commission Tiers</h2>
            <p className="text-gray-500">The more you refer, the more you earn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 ${tier.color} ${tier.bg} relative ${tier.featured ? "shadow-lg" : "shadow-sm"}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-navy mb-1">{tier.name}</h3>
                <p className="text-xs text-gray-400 mb-4">{tier.requirement}</p>
                <p className="text-4xl font-extrabold text-coral mb-6">{tier.commission}</p>
                <ul className="space-y-2.5">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-3">Who It's For</h2>
            <p className="text-gray-500">If your audience loves dogs, this program is for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_ITS_FOR.map((item, i) => (
              <div key={i} className="bg-[#FFFAF7] rounded-2xl p-6 border border-gray-100">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-base font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-[#FFFAF7]">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-3">How It Works</h2>
          </div>

          <div className="space-y-5">
            {STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-coral text-white font-bold text-lg flex items-center justify-center">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy mb-0.5">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-navy text-sm">{faq.q}</span>
                  <span className="text-gray-400 ml-4 text-lg">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 lg:py-28 bg-navy" id="affiliate-apply">
        <div className="container mx-auto max-w-xl text-center px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to earn with PupPal?
          </h2>
          <p className="text-white/60 mb-8">
            Join the waitlist and we'll notify you the moment the affiliate program launches.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm onSubmit={onJoinWaitlist} buttonText="Join Affiliate Waitlist" dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
