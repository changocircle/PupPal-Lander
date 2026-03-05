import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  waitlist: defineTable({
    email: v.string(),
    utmSource: v.optional(v.string()),
    utmMedium: v.optional(v.string()),
    utmCampaign: v.optional(v.string()),
    utmContent: v.optional(v.string()),
    referralCode: v.optional(v.string()),
    deviceType: v.optional(v.string()),
    joinedAt: v.number(),
  }).index("by_email", ["email"]),
});

export default schema;
