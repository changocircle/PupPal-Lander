/**
 * PupPal Welcome Email Templates
 * Three-email welcome sequence for new waitlist signups.
 * Brand: Navy #1B2333, Coral #FF6B5C, Cream #FFFAF7, Sage #7BAE7F
 */

export interface EmailTemplate {
  subject: string;
  from: string;
  html: string;
  text: string;
}

function baseLayout(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PupPal</title>
</head>
<body style="margin:0;padding:0;background:#f5f0eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f0eb;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
          <!-- Header -->
          <tr>
            <td style="background:#1B2333;border-radius:16px 16px 0 0;padding:24px 32px;text-align:center;">
              <span style="font-size:28px;">🐾</span>
              <span style="font-size:22px;font-weight:800;color:#FF6B5C;">Pup</span><span style="font-size:22px;font-weight:800;color:#ffffff;">Pal</span>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="background:#ffffff;padding:32px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#1B2333;border-radius:0 0 16px 16px;padding:20px 32px;text-align:center;">
              <p style="margin:0;color:rgba(255,255,255,0.4);font-size:12px;">
                &copy; ${new Date().getFullYear()} PupPal. Made with 🐾 for puppy parents everywhere.<br/>
                <a href="https://puppal.dog/privacy" style="color:rgba(255,255,255,0.4);text-decoration:underline;">Privacy Policy</a>
                &nbsp;&middot;&nbsp;
                <a href="mailto:support@puppal.dog" style="color:rgba(255,255,255,0.4);text-decoration:underline;">Support</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function ctaButton(text: string, url: string): string {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">
    <tr>
      <td align="center">
        <a href="${url}" style="display:inline-block;background:#FF6B5C;color:#ffffff;font-size:14px;font-weight:700;padding:14px 28px;border-radius:100px;text-decoration:none;letter-spacing:0.3px;">${text}</a>
      </td>
    </tr>
  </table>`;
}

/**
 * Email 1: Immediate on signup
 * From: Buddy the golden retriever AI mentor
 */
export function getEmail1(name: string): EmailTemplate {
  const displayName = name.trim().split(" ")[0] || "there";
  const subject = `Welcome to PupPal, ${displayName}! 🐾`;

  const html = baseLayout(`
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:64px;margin-bottom:8px;">🐕</div>
      <h1 style="margin:0;font-size:26px;font-weight:800;color:#1B2333;line-height:1.2;">
        Hey ${displayName}, I'm Buddy!
      </h1>
      <p style="margin:8px 0 0;font-size:15px;color:#7BAE7F;font-weight:600;">Your AI puppy training mentor</p>
    </div>

    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
      You just joined the PupPal waitlist and I could not be more excited. Raising a puppy is one of the most rewarding things you will ever do, and I am going to be right there with you every step of the way.
    </p>

    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
      I'm Buddy, PupPal's golden retriever AI mentor. I know the science of positive reinforcement inside and out, and I know that every puppy is different. When PupPal launches, I will know your puppy's name, breed, age, and exactly where they are in their training journey.
    </p>

    <div style="background:#FFFAF7;border-left:3px solid #FF6B5C;border-radius:4px;padding:16px 20px;margin:20px 0;">
      <p style="margin:0;font-size:14px;color:#1B2333;font-weight:600;">What's coming your way:</p>
      <ul style="margin:8px 0 0;padding-left:20px;color:#555;font-size:14px;line-height:1.8;">
        <li>A personalized 12-week training plan for your puppy's exact breed</li>
        <li>Me, available 24/7 to answer any question at any hour</li>
        <li>Health and vaccination tracking in one place</li>
        <li>The Good Boy Score, a 5-dimension wellness metric for your pup</li>
      </ul>
    </div>

    <p style="margin:0 0 4px;font-size:15px;color:#555;line-height:1.6;">
      You're on the early access list. When PupPal launches, you will hear from us first.
    </p>

    ${ctaButton("You're on the list! 🎉", "https://puppal.dog")}

    <p style="margin:24px 0 0;font-size:13px;color:#999;text-align:center;">
      Questions? Reply to this email or reach us at <a href="mailto:support@puppal.dog" style="color:#FF6B5C;text-decoration:none;">support@puppal.dog</a>
    </p>

    <p style="margin:16px 0 0;font-size:13px;color:#bbb;font-style:italic;text-align:center;">
      Woof! — Buddy 🐾
    </p>
  `);

  const text = `Hey ${displayName},

You just joined the PupPal waitlist and I could not be more excited!

I'm Buddy, PupPal's AI puppy training mentor. When PupPal launches, I'll know your puppy's name, breed, age, and exactly where they are in their training journey.

What's coming your way:
- A personalized 12-week training plan for your puppy's exact breed
- Me, available 24/7 to answer any question at any hour
- Health and vaccination tracking in one place
- The Good Boy Score, a 5-dimension wellness metric

You're on the early access list. We'll message you first when we launch.

Visit PupPal: https://puppal.dog

Questions? Email us: support@puppal.dog

Woof! - Buddy`;

  return {
    subject,
    from: "Buddy at PupPal <buddy@puppal.dog>",
    html,
    text,
  };
}

/**
 * Email 2: 2 days after signup
 * Training tip about positive reinforcement vs punishment
 */
export function getEmail2(name: string): EmailTemplate {
  const displayName = name.trim().split(" ")[0] || "there";
  const subject = "The #1 mistake new puppy parents make...";

  const html = baseLayout(`
    <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#1B2333;line-height:1.3;">
      The #1 mistake new puppy parents make
    </h1>
    <p style="margin:0 0 20px;font-size:13px;color:#999;">A training tip from the PupPal team</p>

    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
      Hey ${displayName},
    </p>

    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
      If your puppy is biting, you've probably said "No!" pretty loudly at least once this week. We do not blame you. It hurts. But here's the thing: that response actually makes the biting worse.
    </p>

    <div style="background:#fff3f2;border:1px solid #ffccc8;border-radius:12px;padding:20px;margin:20px 0;">
      <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#1B2333;">The mistake:</p>
      <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
        Saying "No!" when your puppy bites, or pushing them away. To a puppy, any attention, even negative attention, is still attention. You've just accidentally rewarded the bite.
      </p>
      <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#1B2333;">The fix:</p>
      <p style="margin:0;font-size:15px;color:#555;line-height:1.6;">
        Yelp like a puppy ("Ouch!"), then immediately ignore them completely for 30 seconds. Turn your back, fold your arms, no eye contact. The moment you turn away, play stops. That's the message: biting ends the fun.
      </p>
    </div>

    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
      This is what littermates do naturally. When a puppy bites too hard, their brother or sister yelps and walks away. The puppy learns "that was too much" through social feedback, not punishment.
    </p>

    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
      PupPal is built entirely on positive reinforcement. No punishment, no dominance theory, no intimidation. Just what actually works, applied consistently.
    </p>

    <div style="background:#f0f7f0;border-left:3px solid #7BAE7F;border-radius:4px;padding:16px 20px;margin:20px 0;">
      <p style="margin:0;font-size:14px;color:#1B2333;font-weight:600;">Buddy's tip:</p>
      <p style="margin:8px 0 0;font-size:14px;color:#555;line-height:1.6;">
        Keep a toy in your pocket during play sessions. When your puppy goes for your hand, redirect to the toy immediately. You're giving their mouthy energy somewhere appropriate to go, and that's faster than any correction.
      </p>
    </div>

    ${ctaButton("Get the full training plan with PupPal", "https://puppal.dog/#waitlist")}

    <p style="margin:0;font-size:13px;color:#999;text-align:center;">
      More tips coming your way. Reply anytime with questions, we read everything.
    </p>
  `);

  const text = `The #1 mistake new puppy parents make

Hey ${displayName},

If your puppy is biting, you've probably said "No!" pretty loudly at least once this week. But that response actually makes the biting worse.

THE MISTAKE:
Saying "No!" when your puppy bites, or pushing them away. Any attention, even negative, is still attention. You've accidentally rewarded the bite.

THE FIX:
Yelp like a puppy ("Ouch!"), then immediately ignore them for 30 seconds. Turn your back, fold your arms, no eye contact. Biting ends the fun.

This is what littermates do. PupPal is built entirely on positive reinforcement. No punishment, no dominance theory. Just what actually works.

Buddy's tip: Keep a toy in your pocket during play sessions. Redirect to the toy when your puppy goes for your hand.

Get the full training plan: https://puppal.dog/#waitlist

More tips coming. Reply anytime with questions.`;

  return {
    subject,
    from: "PupPal Team <hello@puppal.dog>",
    html,
    text,
  };
}

/**
 * Email 3: 5 days after signup
 * App launch teaser and early access promise
 */
export function getEmail3(name: string): EmailTemplate {
  const displayName = name.trim().split(" ")[0] || "there";
  const subject = "PupPal is almost ready for you...";

  const html = baseLayout(`
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:48px;margin-bottom:8px;">🚀</div>
      <h1 style="margin:0;font-size:24px;font-weight:800;color:#1B2333;line-height:1.2;">
        PupPal is almost ready
      </h1>
    </div>

    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
      Hey ${displayName},
    </p>

    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.6;">
      We've been heads down building and PupPal is getting really close to launch. As someone on the early access list, you will be among the first to know the moment it's live.
    </p>

    <p style="margin:0 0 8px;font-size:15px;font-weight:700;color:#1B2333;">
      Here's what Buddy can do when you get in:
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 20px;">
      <tr>
        <td style="padding:10px 16px;background:#FFFAF7;border-radius:12px;margin-bottom:8px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="32" style="font-size:20px;vertical-align:top;padding-top:2px;">📸</td>
              <td style="padding-left:12px;">
                <p style="margin:0;font-size:14px;font-weight:600;color:#1B2333;">Breed Detection</p>
                <p style="margin:4px 0 0;font-size:13px;color:#777;line-height:1.5;">Take a photo of your puppy and Buddy identifies the breed. Works on mixed breeds too.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:10px 16px;background:#FFFAF7;border-radius:12px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="32" style="font-size:20px;vertical-align:top;padding-top:2px;">📋</td>
              <td style="padding-left:12px;">
                <p style="margin:0;font-size:14px;font-weight:600;color:#1B2333;">12-Week Personalized Plan</p>
                <p style="margin:4px 0 0;font-size:13px;color:#777;line-height:1.5;">A complete training program built specifically for your puppy's breed, age, and challenges.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:10px 16px;background:#FFFAF7;border-radius:12px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="32" style="font-size:20px;vertical-align:top;padding-top:2px;">💬</td>
              <td style="padding-left:12px;">
                <p style="margin:0;font-size:14px;font-weight:600;color:#1B2333;">Buddy, 24/7 AI Mentor</p>
                <p style="margin:4px 0 0;font-size:13px;color:#777;line-height:1.5;">Ask anything about your puppy at 2am. Buddy knows your dog's name, breed, and training history.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:10px 16px;background:#FFFAF7;border-radius:12px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="32" style="font-size:20px;vertical-align:top;padding-top:2px;">📊</td>
              <td style="padding-left:12px;">
                <p style="margin:0;font-size:14px;font-weight:600;color:#1B2333;">Good Boy Score</p>
                <p style="margin:4px 0 0;font-size:13px;color:#777;line-height:1.5;">A 5-dimension wellness score tracking Training, Health, Socialization, Routine, and Bond.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <div style="background:#1B2333;border-radius:12px;padding:20px;margin:20px 0;text-align:center;">
      <p style="margin:0 0 4px;font-size:18px;font-weight:800;color:#ffffff;">$39.99/year</p>
      <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.5);">$3.33/month. 41% below market average. 3-day free trial.</p>
    </div>

    ${ctaButton("You're on the early access list", "https://puppal.dog")}

    <p style="margin:0;font-size:13px;color:#999;text-align:center;line-height:1.6;">
      We will send you a direct notification the moment PupPal launches. You won't miss it. Thank you for being here early.
    </p>

    <p style="margin:16px 0 0;font-size:13px;color:#bbb;font-style:italic;text-align:center;">
      The PupPal Team 🐾
    </p>
  `);

  const text = `PupPal is almost ready for you...

Hey ${displayName},

We've been heads down building and PupPal is getting really close. As someone on the early access list, you'll be first to know when it's live.

Here's what Buddy can do when you get in:

BREED DETECTION
Take a photo of your puppy and Buddy identifies the breed instantly. Works on mixed breeds too.

12-WEEK PERSONALIZED PLAN
A complete training program built for your puppy's breed, age, and challenges.

BUDDY, 24/7 AI MENTOR
Ask anything about your puppy at 2am. Buddy knows your dog's name, breed, and training history.

GOOD BOY SCORE
A 5-dimension wellness score tracking Training, Health, Socialization, Routine, and Bond.

$39.99/year ($3.33/month). 3-day free trial. 41% below market average.

You're on the early access list: https://puppal.dog

We'll notify you the moment PupPal launches.

The PupPal Team`;

  return {
    subject,
    from: "PupPal Team <hello@puppal.dog>",
    html,
    text,
  };
}
