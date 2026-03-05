/**
 * Sticky Header — PRD-16 §5
 * Transparent on hero, white with shadow on scroll.
 * Logo left, CTA right. No nav links.
 */

interface Props {
  scrolled: boolean;
}

export function StickyHeader({ scrolled }: Props) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      style={{ willChange: "background-color, box-shadow", transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5 no-underline">
          <span className="text-2xl">🐾</span>
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-coral">Pup</span>
            <span className="text-navy">Pal</span>
          </span>
        </a>

        {/* CTA */}
        <a
          href="#get-early-access"
          className="bg-coral hover:bg-coral/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors no-underline"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}
