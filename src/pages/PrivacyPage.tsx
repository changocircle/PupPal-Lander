import { StickyHeader } from "../components/landing/StickyHeader";
import { Footer } from "../components/landing/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF7]">
      <StickyHeader scrolled={true} />
      <main className="container mx-auto max-w-3xl pt-28 pb-20 px-6">
        <h1 className="text-3xl font-extrabold text-navy mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: March 5, 2026</p>

        <div className="prose prose-navy max-w-none space-y-6 text-gray-600 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">1. Introduction</h2>
            <p>PupPal ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the PupPal mobile application and website (collectively, the "Service").</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">2. Information We Collect</h2>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">2.1 Personal Information</h3>
            <p>When you create an account, we collect:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Email address</li>
              <li>Name (optional)</li>
              <li>Profile photo (optional)</li>
            </ul>

            <h3 className="text-base font-semibold text-navy mt-4 mb-2">2.2 Pet Information</h3>
            <p>To personalize your experience, we collect information about your dog(s):</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name, breed, age, weight</li>
              <li>Photos (for breed detection and journal)</li>
              <li>Health records (vaccinations, medications)</li>
              <li>Training progress and activity data</li>
            </ul>

            <h3 className="text-base font-semibold text-navy mt-4 mb-2">2.3 Usage Data</h3>
            <p>We automatically collect:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Device type, operating system, app version</li>
              <li>Feature usage patterns and session data</li>
              <li>Crash reports and performance metrics</li>
              <li>IP address and approximate location (country/region)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and personalize the Service (breed-specific training plans, AI mentor responses)</li>
              <li>Track your puppy's training progress and health milestones</li>
              <li>Send notifications (training reminders, health alerts), with your consent</li>
              <li>Improve our AI models and training recommendations</li>
              <li>Process payments and manage subscriptions</li>
              <li>Communicate with you about the Service (updates, support)</li>
              <li>Ensure the security and integrity of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">4. AI & Chat Data</h2>
            <p>When you chat with Buddy (our AI mentor):</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Chat messages are processed to generate responses</li>
              <li>We may use anonymized conversation patterns to improve Buddy's training advice</li>
              <li>We do NOT sell your chat data to third parties</li>
              <li>Chat history is stored on your device and our secure servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">5. Data Sharing</h2>
            <p>We do NOT sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Service providers:</strong> Hosting (Supabase), payments (RevenueCat), analytics (PostHog), error tracking (Sentry)</li>
              <li><strong>AI providers:</strong> For processing chat messages (data is not retained for training by third parties)</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">6. Data Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Encryption in transit (TLS/SSL) and at rest</li>
              <li>Row-level security on all database tables</li>
              <li>Regular security audits</li>
              <li>Secure authentication with encrypted credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and all associated data</li>
              <li>Export your data (training logs, health records, journal entries)</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at <a href="mailto:hello@puppal.dog" className="text-coral hover:underline">hello@puppal.dog</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">8. Children's Privacy</h2>
            <p>PupPal is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">9. Data Retention</h2>
            <p>We retain your data for as long as your account is active. Upon account deletion, we remove your personal data within 30 days, except where required by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or in-app notification.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mt-8 mb-3">11. Contact</h2>
            <p>For questions about this Privacy Policy, contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:hello@puppal.dog" className="text-coral hover:underline">hello@puppal.dog</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
