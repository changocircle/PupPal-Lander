/**
 * Footer — PRD-16
 * Fix #10: Real links to privacy/terms/affiliate pages.
 */

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/5 py-10">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5 no-underline">
            <span className="text-xl">🐾</span>
            <span className="text-lg font-extrabold">
              <span className="text-coral">Pup</span>
              <span className="text-white">Pal</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="mailto:hello@puppal.dog" className="hover:text-white/70 transition-colors no-underline">
              Contact
            </a>
            <span>·</span>
            <a href="/privacy" className="hover:text-white/70 transition-colors no-underline">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="/terms" className="hover:text-white/70 transition-colors no-underline">
              Terms of Service
            </a>
            <span>·</span>
            <a href="/affiliate" className="hover:text-white/70 transition-colors no-underline">
              Affiliates
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center text-xs text-white/30">
          © {year} PupPal. All rights reserved. Made with 🐾 for puppy parents everywhere.
        </div>
      </div>
    </footer>
  );
}
