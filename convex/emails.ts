/**
 * PupPal Welcome Email Sequence
 *
 * Schedules a 3-email welcome drip for new waitlist signups:
 *   Email 1: Immediate — welcome from Buddy
 *   Email 2: 2 days later — top training tip (positive reinforcement)
 *   Email 3: 5 days later — app launch teaser
 *
 * Uses Convex scheduler for delayed delivery and Resend for email sending.
 */

import { internalMutation, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import { getEmail1, getEmail2, getEmail3 } from "./emailTemplates";

declare const process: { env: Record<string, string | undefined> };

const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;
const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

/**
 * Send a single email via Resend.
 * Called by the scheduler for delayed emails.
 */
export const sendWelcomeEmail = internalAction({
  args: {
    email: v.string(),
    name: v.string(),
    emailNumber: v.number(), // 1, 2, or 3
  },
  handler: async (_ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not configured — skipping welcome email");
      return;
    }

    let template;
    if (args.emailNumber === 1) {
      template = getEmail1(args.name);
    } else if (args.emailNumber === 2) {
      template = getEmail2(args.name);
    } else {
      template = getEmail3(args.name);
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: template.from,
        to: [args.email],
        subject: template.subject,
        html: template.html,
        text: template.text,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(
        `Failed to send welcome email ${args.emailNumber} to ${args.email}: ${error}`,
      );
      throw new Error(`Resend API error: ${error}`);
    }

    const result = (await response.json()) as { id?: string };
    console.log(
      `Welcome email ${args.emailNumber} sent to ${args.email} (Resend ID: ${result.id})`,
    );
  },
});

/**
 * Schedule the full 3-email welcome sequence.
 * Call this after a successful waitlist signup.
 */
export const scheduleWelcomeSequence = internalMutation({
  args: {
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.toLowerCase().trim();
    const name = args.name || "there";

    // Email 1: Immediate
    await ctx.scheduler.runAfter(0, internal.emails.sendWelcomeEmail, {
      email,
      name,
      emailNumber: 1,
    });

    // Email 2: 2 days later
    await ctx.scheduler.runAfter(TWO_DAYS_MS, internal.emails.sendWelcomeEmail, {
      email,
      name,
      emailNumber: 2,
    });

    // Email 3: 5 days later
    await ctx.scheduler.runAfter(FIVE_DAYS_MS, internal.emails.sendWelcomeEmail, {
      email,
      name,
      emailNumber: 3,
    });

    console.log(`Welcome sequence scheduled for ${email}`);
  },
});
