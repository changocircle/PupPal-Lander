import { useState, type FormEvent } from "react";

interface Props {
  onSubmit: (email: string) => Promise<{ success: boolean; alreadyJoined: boolean }>;
  buttonText?: string;
  darkMode?: boolean;
  dark?: boolean; // alias for darkMode
  compact?: boolean;
}

export function WaitlistForm({
  onSubmit,
  buttonText = "Get Early Access",
  darkMode = false,
  dark,
  compact = false,
}: Props) {
  const isDark = dark ?? darkMode;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const result = await onSubmit(email.trim());
      setStatus("success");
      setMessage(
        result.alreadyJoined
          ? "You're already on the list! We'll be in touch soon. 🐾"
          : "You're in! We'll let you know when PupPal launches. 🎉"
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-2 rounded-2xl px-6 py-4 ${
          isDark ? "bg-white/10" : "bg-green-50 border border-green-200"
        }`}
      >
        <span className="text-2xl">✅</span>
        <p className={`text-sm font-medium ${isDark ? "text-white" : "text-green-800"}`}>
          {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex flex-col sm:flex-row gap-3 ${
          compact ? "max-w-md mx-auto" : ""
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Enter your email"
          className={`flex-1 px-5 py-3.5 rounded-full text-base outline-none transition-all ${
            isDark
              ? "bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-coral focus:ring-2 focus:ring-coral/30"
              : "bg-white border border-gray-200 text-navy placeholder:text-gray-400 focus:border-coral focus:ring-2 focus:ring-coral/20"
          } ${status === "error" ? "border-red-400" : ""}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`bg-coral hover:bg-coral/90 text-white font-semibold rounded-full transition-all whitespace-nowrap disabled:opacity-70 ${
            compact ? "px-6 py-3.5 text-sm" : "px-8 py-3.5 text-base"
          }`}
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Joining...
            </span>
          ) : (
            buttonText
          )}
        </button>
      </div>
      {status === "error" && (
        <p className={`text-sm mt-2 ${compact ? "text-center" : ""} ${isDark ? "text-red-300" : "text-red-500"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
