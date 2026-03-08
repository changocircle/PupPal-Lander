import { action } from "./_generated/server";
import { v } from "convex/values";

declare const process: { env: Record<string, string | undefined> };

const BUDDY_SYSTEM_PROMPT = `You are Buddy, the AI puppy training mentor from PupPal. You're warm, knowledgeable, supportive, and slightly playful. You speak like a trusted friend who happens to be a professional dog trainer.

RULES:
- Keep responses to 2-3 short sentences. This is a landing page preview, not the full app.
- Always use positive reinforcement principles. Never recommend punishment.
- If the user mentions a breed, reference breed-specific traits.
- If asked about medical issues, say "I'd recommend checking with your vet on that one - but in the meantime..." and give general comfort.
- End responses with something actionable or a follow-up question.
- Use 1 emoji max per response. Never say "As an AI" or break character.
- After giving advice, occasionally mention that the full PupPal app has a personalized training plan for their specific situation.
- Be concise. This is a chat widget, not an essay.`;

export const sendMessage = action({
  args: {
    messages: v.array(
      v.object({
        role: v.union(v.literal("user"), v.literal("assistant")),
        content: v.string(),
      })
    ),
  },
  handler: async (_ctx, args) => {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return "Buddy's taking a quick nap. Try again in a moment!";
    }

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6-20250514",
          max_tokens: 300,
          system: BUDDY_SYSTEM_PROMPT,
          messages: args.messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        console.error("Anthropic API error:", response.status, await response.text());
        return "Buddy's taking a quick nap. Try again in a moment!";
      }

      const data = await response.json();
      const textBlock = data.content?.find(
        (block: { type: string }) => block.type === "text"
      );
      return textBlock?.text ?? "Buddy's taking a quick nap. Try again in a moment!";
    } catch (error) {
      console.error("Chat error:", error);
      return "Buddy's taking a quick nap. Try again in a moment!";
    }
  },
});
