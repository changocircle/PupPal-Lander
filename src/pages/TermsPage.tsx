import { StickyHeader } from "../components/landing/StickyHeader";
import { Footer } from "../components/landing/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF7]">
      <StickyHeader scrolled={true} />
      <main className="container mx-auto max-w-3xl pt-28 pb-20 px-6">
        <h1 className="text-3xl font-extrabold text-navy mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: March 5, 2026</p>

        <div className="prose prose-navy max-w-none space-y-6 text-gray-600 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>By downloading, installing, or using PupPal ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">2. The Service</h2>
            <p>PupPal provides AI-powered puppy training tools including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Personalized training plans based on your dog's breed, age, and challenges</li>
              <li>AI chat mentor ("Buddy") for training advice and support</li>
              <li>Health tracking (vaccinations, weight, medications)</li>
              <li>Gamification features (Good Boy Score, achievements, streaks)</li>
              <li>Growth journal and breed encyclopedia</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">3. Not Veterinary Advice</h2>
            <p><strong>PupPal is not a substitute for professional veterinary care.</strong> Our AI mentor provides general training and behavioral guidance. For medical emergencies, health concerns, or behavioral issues that may indicate injury or illness, always consult a licensed veterinarian.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">4. Accounts</h2>
            <p>You must create an account to use the full Service. You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Providing accurate account information</li>
              <li>Maintaining the security of your login credentials</li>
              <li>All activity that occurs under your account</li>
            </ul>
            <p className="mt-2">You must be at least 13 years old to create an account.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">5. Subscriptions & Payments</h2>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">5.1 Free Tier</h3>
            <p>PupPal offers limited free features including Week 1 training access, limited AI chat messages, and basic health tracking.</p>

            <h3 className="text-base font-semibold text-navy mt-4 mb-2">5.2 Premium Plans</h3>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Annual:</strong> $39.99/year ($3.33/month) with 3-day free trial</li>
              <li><strong>Monthly:</strong> $9.99/month</li>
              <li><strong>Lifetime:</strong> $79.99 one-time payment</li>
            </ul>

            <h3 className="text-base font-semibold text-navy mt-4 mb-2">5.3 Billing</h3>
            <p>Subscriptions are billed through the App Store (iOS) or Google Play Store (Android). Payments are processed by the respective platform. Subscriptions auto-renew unless canceled at least 24 hours before the renewal date.</p>

            <h3 className="text-base font-semibold text-navy mt-4 mb-2">5.4 Refunds</h3>
            <p>Refund requests are handled by Apple or Google per their respective refund policies. Contact the relevant app store for refund inquiries.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Use the Service for any illegal purpose</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble the Service</li>
              <li>Abuse, harass, or send inappropriate content through any feature</li>
              <li>Attempt to circumvent subscription restrictions or payment systems</li>
              <li>Use the Service in any way that could damage or impair it</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">7. Intellectual Property</h2>
            <p>All content, features, and functionality of PupPal, including training exercises, AI models, design, and branding, are owned by PupPal and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
            <p className="mt-2">Content you create (journal entries, photos) remains yours. By uploading content, you grant us a license to use it for providing the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">8. Limitation of Liability</h2>
            <p>PupPal is provided "as is" without warranties of any kind. We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Training outcomes or dog behavior</li>
              <li>Accuracy of AI-generated advice</li>
              <li>Any injuries resulting from following training suggestions</li>
              <li>Service interruptions or data loss</li>
            </ul>
            <p className="mt-2">Our total liability is limited to the amount you paid for the Service in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">9. Termination</h2>
            <p>We may suspend or terminate your account if you violate these Terms. You may delete your account at any time through Settings → Data & Privacy → Delete Account. Upon deletion, your data will be removed within 30 days.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">10. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance. Material changes will be communicated via email or in-app notification.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">11. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:hello@puppal.app" className="text-coral hover:underline">hello@puppal.app</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
