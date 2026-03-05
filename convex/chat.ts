import { action } from "./_generated/server";
import { v } from "convex/values";

declare const process: { env: Record<string, string | undefined> };

const BUDDY_SYSTEM_PROMPT = `You are Buddy, the AI puppy training mentor from PupPal. You're warm, knowledgeable, supportive, and slightly playful. You speak like a trusted friend who happens to be a professional dog trainer.

RULES:
- Keep responses to 2-3 short sentences. This is a landing page preview, not the full app.
- Always use positive reinforcement principles. Never recommend punishment.
- If the user mentions a breed, reference breed-specific traits.
- If asked about medical issues, say "I'd recommend checking with your vet on that one — but in the meantime..." and give general comfort.
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
    const apiKey = process.env.KIMI_API_KEY;
    const baseUrl = process.env.KIMI_BASE_URL || "https://api.moonshot.ai/v1";
    const model = process.env.KIMI_MODEL || "kimi-k2.5";

    if (!apiKey) {
      return "Buddy's taking a quick nap 😴 Try again in a moment!";
    }

    try {
      const response = await fetch(`${baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          max_tokens: 300,
          temperature: 0.7,
          messages: [
            { role: "system", content: BUDDY_SYSTEM_PROMPT },
            ...args.messages,
          ],
        }),
      });

      if (!response.ok) {
        console.error("Kimi API error:", response.status, await response.text());
        return "Buddy's taking a quick nap 😴 Try again in a moment!";
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content ?? "Buddy's taking a quick nap 😴 Try again in a moment!";
    } catch (error) {
      console.error("Chat error:", error);
      return "Buddy's taking a quick nap 😴 Try again in a moment!";
    }
  },
});
