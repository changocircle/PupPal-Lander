import { useState, useEffect, useRef, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { BuddyAvatar } from "./HeroSection";

/**
 * Live Buddy Chat Widget (PRD-16 feedback item #9)
 *
 * Floating chat widget that lets visitors talk to Buddy (via Kimi K2.5)
 * before downloading the app. "Try before you buy" conversion driver.
 *
 * - 3 free messages per session
 * - Persists in sessionStorage
 * - Rate limited server-side
 */

const MAX_FREE_MESSAGES = 3;
const MAX_MESSAGE_LENGTH = 500;
const SESSION_KEY = "puppal_buddy_chat";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function loadSession(): { messages: ChatMessage[]; messageCount: number } {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { messages: [], messageCount: 0 };
}

function saveSession(messages: ChatMessage[], messageCount: number) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ messages, messageCount }));
  } catch { /* ignore */ }
}

export function BuddyChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageCount, setMessageCount] = useState(0);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sendMessage = useAction(api.chat.sendMessage);

  // Load session on mount
  useEffect(() => {
    const session = loadSession();
    if (session.messages.length > 0) {
      setMessages(session.messages);
      setMessageCount(session.messageCount);
      setHasGreeted(true);
    }
  }, []);

  // Show button after 2s, then auto-open chat after 5s on desktop only (once per session)
  useEffect(() => {
    const buttonTimer = setTimeout(() => setShowButton(true), 2000);

    const AUTO_OPEN_KEY = "puppal_buddy_auto_opened";
    const alreadyAutoOpened = sessionStorage.getItem(AUTO_OPEN_KEY);
    const isMobile = window.innerWidth < 1024;

    let openTimer: ReturnType<typeof setTimeout> | undefined;
    if (!alreadyAutoOpened && !isMobile) {
      openTimer = setTimeout(() => {
        setShowButton(true);
        setIsOpen(true);
        sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      }, 5000);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShowButton(true);
        }
      },
      { threshold: 0.3 }
    );

    const meetBuddyEl = document.querySelector('[class*="bg-coral-light"]');
    if (meetBuddyEl) observer.observe(meetBuddyEl);

    return () => {
      clearTimeout(buttonTimer);
      if (openTimer) clearTimeout(openTimer);
      observer.disconnect();
    };
  }, []);

  // Auto-scroll chat messages to bottom (scroll container only, not the page)
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, isLoading]);

  // Focus input when opened (preventScroll so the page doesn't jump)
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 300);
    }
  }, [isOpen]);

  // Send Buddy greeting on first open
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      const greeting: ChatMessage = {
        role: "assistant",
        content:
          "Hey! I'm Buddy 🐾 I help puppy parents like you train their dogs with personalized plans. What breed is your puppy? (Or tell me what's driving you crazy and I'll help!)",
      };
      setMessages([greeting]);
      saveSession([greeting], 0);
    }
  }, [isOpen, hasGreeted]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().slice(0, MAX_MESSAGE_LENGTH);
    if (!trimmed || isLoading || messageCount >= MAX_FREE_MESSAGES) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const newMessages = [...messages, userMsg];
    const newCount = messageCount + 1;

    setMessages(newMessages);
    setMessageCount(newCount);
    setInput("");
    setIsLoading(true);
    saveSession(newMessages, newCount);

    try {
      // Only send the conversation (skip system-level greeting)
      const apiMessages = newMessages
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await sendMessage({ messages: apiMessages });

      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: response,
      };
      const finalMessages = [...newMessages, assistantMsg];
      setMessages(finalMessages);
      saveSession(finalMessages, newCount);
    } catch {
      const errorMsg: ChatMessage = {
        role: "assistant",
        content: "Buddy's taking a quick nap 😴 Try again in a moment!",
      };
      const finalMessages = [...newMessages, errorMsg];
      setMessages(finalMessages);
      saveSession(finalMessages, newCount);
    } finally {
      setIsLoading(false);
    }
  };

  const atLimit = messageCount >= MAX_FREE_MESSAGES;

  if (!showButton) return null;

  // Portal to document.body so no ancestor transforms/overflow can break fixed positioning
  return createPortal(
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-coral rounded-full shadow-lg shadow-coral/30 flex items-center justify-center hover:bg-coral/90 transition-all hover:scale-105 buddy-pulse"
          aria-label="Chat with Buddy"
        >
          <BuddyAvatar size={36} />
        </button>
      )}

      {/* Chat panel — mobile: full screen sheet, desktop: fixed panel */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed z-50 bottom-0 right-0 lg:bottom-6 lg:right-6 w-full lg:w-[380px] h-[60vh] max-h-[500px] lg:h-[520px] lg:max-h-none bg-white rounded-t-2xl lg:rounded-2xl shadow-2xl shadow-navy/20 flex flex-col overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-navy px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-coral/20 flex items-center justify-center overflow-hidden">
                <BuddyAvatar size={32} />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Buddy</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <p className="text-white/50 text-xs">AI Puppy Mentor</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors text-lg p-1"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FFFAF7]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full flex-shrink-0 mr-2 mt-1 overflow-hidden">
                      <BuddyAvatar size={24} />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-coral text-white rounded-2xl rounded-br-md"
                        : "bg-white text-navy rounded-2xl rounded-bl-md shadow-sm border border-gray-100"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 mr-2 mt-1 overflow-hidden">
                    <BuddyAvatar size={24} />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                      <div className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                      <div className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                    </div>
                  </div>
                </div>
              )}

              {/* Upgrade card after limit */}
              {atLimit && !isLoading && (
                <div className="bg-gradient-to-br from-coral/5 to-coral/10 rounded-xl p-4 border border-coral/20 text-center">
                  <p className="text-sm font-semibold text-navy mb-1">
                    Want unlimited Buddy? 🐾
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    Download PupPal. 3-day free trial, no credit card.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      // Scroll to CTA after closing, without the chat causing the jump
                      requestAnimationFrame(() => {
                        document.getElementById("get-early-access")?.scrollIntoView({ behavior: "smooth" });
                      });
                    }}
                    className="inline-block bg-coral hover:bg-coral/90 text-white font-semibold px-5 py-2 rounded-full text-xs transition-colors cursor-pointer"
                  >
                    Get Early Access →
                  </button>
                </div>
              )}

              {/* bottom spacer for scroll padding */}
              <div aria-hidden="true" />
            </div>

            {/* Input bar */}
            <div className="border-t border-gray-100 p-3 flex-shrink-0 bg-white">
              {/* Message counter */}
              {!atLimit && messageCount > 0 && (
                <div className="flex justify-center mb-2">
                  <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {messageCount}/{MAX_FREE_MESSAGES} free messages
                  </span>
                </div>
              )}

              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={atLimit ? "Download PupPal for more..." : "Ask Buddy anything..."}
                  disabled={atLimit}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="flex-1 px-4 py-2.5 rounded-full text-sm bg-gray-50 border border-gray-200 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-navy placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={atLimit || isLoading || !input.trim()}
                  className="bg-coral text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-coral/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Send message"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>,
    document.body
  );
}
