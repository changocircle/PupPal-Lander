/**
 * PupPal Blog Post Data
 * Full content for 10 SEO-targeted articles.
 * Target reader: sleep-deprived new puppy parent, often at 2am.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: number; // minutes
  content: string; // HTML content
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "when-do-puppies-stop-biting",
    title: "When Do Puppies Stop Biting? (Complete Guide)",
    excerpt:
      "Puppies bite because it is how they explore the world, not because they are mean. Here is exactly what to expect month by month, and how to make it stop faster.",
    publishedAt: "2026-03-01",
    readTime: 8,
    relatedSlugs: ["puppy-teething-timeline", "stop-puppy-jumping", "puppy-socialization-timeline"],
    content: `<h2>Why Puppies Bite</h2>
<p>If you just got a puppy and your hands look like you lost a fight with a rosebush, welcome to the club. Puppy biting (technically called "mouthing" or "play biting") is one of the most common concerns new owners have, and it is 100% normal.</p>
<p>Puppies are born without hands. Their mouth is how they explore their world, communicate with littermates, and play. In the litter, when a puppy bites too hard, their sibling yelps and stops playing. That feedback loop teaches bite inhibition — the learned control of how much pressure to apply when mouthing.</p>
<p>When you take a puppy away from that litter at 8 weeks, they still have plenty of practicing to do. You become the substitute littermate. That is both the good news and the reason your ankles are bruised.</p>
<p>The other thing worth knowing: puppy teeth are like little needles. Their jaws are not actually that strong yet, but those 28 baby teeth are razor sharp. Nature designed them that way so puppies would get feedback from their biting at low pressure levels.</p>

<h2>The Biting Timeline by Age</h2>
<p>Here is what to expect as your puppy grows:</p>

<h3>8-10 Weeks: Peak Chaos</h3>
<p>This is the worst of it, and it is normal. Your new puppy has literally just left their littermates and is still in "bite everything to learn about it" mode. Expect frequent mouthing, especially during play and when overtired. The biting is not aggression. It is exploration.</p>

<h3>10-12 Weeks: Learning the Rules</h3>
<p>This is the window where your feedback matters most. Consistent responses to biting during this period will shape their behavior for months. Start yelping and ignoring immediately. Some puppies start to show improvement by week 12.</p>

<h3>3-4 Months: Teething Begins</h3>
<p>Around 12-16 weeks, baby teeth start falling out as adult teeth come in. This makes chewing and mouthing more intense. Your puppy is not regressing — they are uncomfortable. Frozen chew toys and extra patience help here. Labs and Golden Retrievers, in particular, are notorious for intense chewing during this phase.</p>

<h3>4-6 Months: Getting Better</h3>
<p>Most puppies start showing clear improvement between 4 and 6 months. Adult teeth are mostly in by month 6. The urge to mouth people becomes much less intense. Consistent training during the prior months starts paying off noticeably.</p>

<h3>6-8 Months: The Finish Line</h3>
<p>Puppies typically stop biting in the hard, reflexive way by 6-8 months as adult teeth come in fully and bite inhibition is well established. Some puppies still mouth playfully, but the needle-sharp intensity is gone. If you have been consistent, most play biting resolves by this point.</p>

<h2>How to Stop Biting Faster</h2>
<p>The most effective method is also the simplest, and it mirrors what littermates do naturally.</p>

<h3>The Yelp and Ignore Method</h3>
<ol>
<li>The moment teeth touch skin, let out a sharp, high-pitched "Ouch!" or yelp.</li>
<li>Immediately stop all play. Stand up, turn away, fold your arms.</li>
<li>Ignore your puppy completely for 30-60 seconds.</li>
<li>Resume play calmly.</li>
<li>Repeat every single time.</li>
</ol>
<p>This works because it communicates, in dog language, that biting ends the fun. For social dogs (and most puppies are highly social), losing your attention is a meaningful consequence.</p>

<h3>Redirect to a Toy</h3>
<p>Before your puppy starts biting during play, put a toy in their mouth. Keep a tug toy or chew toy in your pocket during play sessions. The goal is to give their mouthy energy somewhere acceptable to go.</p>

<h3>Time-Outs</h3>
<p>If yelping does not work (some puppies actually get more excited by it), use a brief time-out instead. Put your puppy in a calm space — not as punishment, but simply to end the play session. One to two minutes is enough. Then try again.</p>

<h3>Do Not Do These Things</h3>
<ul>
<li><strong>Do not tap or flick their nose.</strong> This can make some puppies hand-shy and does not actually teach bite inhibition.</li>
<li><strong>Do not hold their mouth shut.</strong> Aversive corrections create anxiety without teaching the right behavior.</li>
<li><strong>Do not let it slide "just this once."</strong> Inconsistency is the enemy. Every person in the house needs to respond the same way, every time.</li>
<li><strong>Do not play rough with your hands.</strong> If you let your puppy wrestle with your hands, you are teaching them that hands are toys.</li>
</ul>

<h2>Breed-Specific Notes</h2>
<p><strong>Labrador Retrievers:</strong> Labs are mouthy by breed design. They were literally bred to use their mouths gently to retrieve game. Labs often take longer to stop mouthing and need more consistent redirect-to-toy work. The good news: they have naturally soft mouths and learn bite inhibition well.</p>
<p><strong>Golden Retrievers:</strong> Similar to Labs, Goldens are extremely mouthy puppies. Their enthusiasm for mouthing usually peaks around 3-4 months. Very food motivated, so treat-based training works exceptionally well to redirect them.</p>
<p><strong>Terriers:</strong> Terriers tend to bite with more intensity and shake their heads when they grab. They need very clear and consistent yelp-and-ignore responses, and ideally tug toys so they have an outlet for their natural grab-shake behavior.</p>
<p><strong>Small Breeds:</strong> People often let small breed puppies bite because it does not hurt as much. This is a mistake. A 6-pound adult Chihuahua with untrained biting behavior is still a behavioral problem.</p>

<h2>When to Actually Worry</h2>
<p>Normal puppy biting is playful and happens during excited states. Signs that something might be beyond normal:</p>
<ul>
<li>Growling, snarling, or a stiff body posture while biting — this is different from play</li>
<li>Biting that draws blood consistently and does not respond to any correction over several weeks</li>
<li>Biting accompanied by fear responses (ears back, tail tucked)</li>
<li>Biting that only happens in specific contexts (near the food bowl, when picked up) — this can indicate resource guarding or pain</li>
</ul>
<p>If you are seeing any of these, talk to your vet to rule out pain, and consider consulting a certified dog behaviorist. But for most puppies under 6 months, hard biting is just a normal phase that passes with consistent training.</p>
<p>Hang in there. Your puppy is not trying to hurt you. They are trying to play with you.</p>`,
  },
  {
    slug: "puppy-potty-training-schedule",
    title: "Puppy Potty Training Schedule by Age",
    excerpt:
      "The schedule is the secret weapon. Here is exactly when to take your puppy outside based on their age, plus what to do when accidents happen.",
    publishedAt: "2026-03-02",
    readTime: 9,
    relatedSlugs: ["how-to-crate-train-a-puppy", "first-week-new-puppy-checklist", "stop-puppy-whining-at-night"],
    content: `<h2>The Golden Rule of Potty Training</h2>
<p>Here is the one thing that changes everything: puppies cannot physically hold their bladder for more than a certain number of hours, and that number is directly tied to their age. Fighting biology will frustrate you both. Working with it makes training dramatically faster.</p>
<p>The rule of thumb: a puppy can hold it for approximately one hour per month of age, plus one. So:</p>
<ul>
<li>8-week-old puppy: about 2-3 hours maximum</li>
<li>12-week-old puppy: about 3-4 hours maximum</li>
<li>16-week-old puppy: about 4-5 hours maximum</li>
<li>6-month-old puppy: about 6-7 hours maximum</li>
</ul>
<p>These are maximums. During active play or after eating/drinking, it can be much less. This is why you need a schedule, not willpower.</p>
<p>The second rule: when accidents happen, they are your fault, not the puppy's. If your 9-week-old puppy pees on the floor, you waited too long. Accept this now and you will train your puppy twice as fast.</p>

<h2>Potty Training Schedule by Age</h2>

<h3>8-10 Weeks Old</h3>
<p>This is the hardest stretch. Your puppy has almost no bladder control and will need to go outside very frequently.</p>

<table>
<thead><tr><th>Time</th><th>Action</th></tr></thead>
<tbody>
<tr><td>First thing in morning</td><td>Outside immediately (before anything else)</td></tr>
<tr><td>Every 30-45 minutes during the day</td><td>Outside, especially after waking, eating, or playing</td></tr>
<tr><td>Immediately after eating or drinking</td><td>Outside within 5-10 minutes</td></tr>
<tr><td>Immediately after napping</td><td>Outside the moment they wake up</td></tr>
<tr><td>Before bed</td><td>Last outing of the night, as late as possible</td></tr>
<tr><td>Middle of the night</td><td>At least once (set an alarm if needed)</td></tr>
</tbody>
</table>

<h3>11-12 Weeks Old</h3>
<p>Stretching slightly, but still needs very frequent trips.</p>
<ul>
<li>Outside every 45-60 minutes during active awake time</li>
<li>Always after eating, napping, or playing</li>
<li>One middle-of-the-night trip still needed for most puppies</li>
<li>Watch for circling, sniffing the ground, or squatting — these are the go signals</li>
</ul>

<h3>3 Months (12-16 Weeks)</h3>
<p>Starting to see real progress if you have been consistent. Accidents become less frequent.</p>
<ul>
<li>Every 1-2 hours during the day</li>
<li>After every meal (within 15 minutes)</li>
<li>After every nap</li>
<li>Some puppies can make it through the night; others still need one trip</li>
</ul>

<h3>4-6 Months</h3>
<p>Most puppies have the physical control to succeed reliably if training has been consistent.</p>
<ul>
<li>Every 2-4 hours, depending on activity level</li>
<li>After meals and naps</li>
<li>Most puppies sleep through the night by 4-5 months</li>
<li>Watch for your puppy going to the door — they may start signaling</li>
</ul>

<h3>6 Months and Beyond</h3>
<p>With consistent training, most puppies are reliably potty trained by 6 months. Some toy breeds take longer due to their tiny bladder size.</p>

<h2>Night Training</h2>
<p>The nighttime is the hardest part for most owners. A few strategies that work:</p>
<p><strong>Crate next to your bed:</strong> If you can hear your puppy stir, you can take them out before they go in the crate. This is much better than waking up to a mess.</p>
<p><strong>Set an alarm:</strong> For young puppies, set an alarm for 3-4 hours after their last outing. Yes, this is miserable. It also prevents a cleanup at 2am, which is more miserable.</p>
<p><strong>Limit water after 7pm:</strong> You do not need to deprive your puppy, but cutting off open-access water a couple of hours before bed reduces the overnight challenge significantly.</p>
<p><strong>Keep nighttime outings boring:</strong> Leash on, outside, wait for them to go, quietly praise, leash off, back to crate. No play, no big deal. The goal is to teach that nighttime is for sleeping, not fun.</p>

<h2>Common Mistakes</h2>
<p><strong>Punishing accidents:</strong> Do not do this. Puppies cannot connect "I peed on the floor 30 seconds ago" with your current reaction. Punishment only makes them afraid to go to the bathroom around you, which makes training harder. Clean it up with an enzymatic cleaner and move on.</p>
<p><strong>Letting them roam free too soon:</strong> Freedom is earned. Until your puppy is reliably trained, they should be either supervised directly or in their crate. Giving them access to the whole house before they have earned it leads to accidents in hidden corners you will not discover until tomorrow.</p>
<p><strong>Inconsistent schedule:</strong> Potty training requires a schedule, not sporadic trips outside. If you take them out at unpredictable times, training takes much longer.</p>
<p><strong>Not cleaning up properly:</strong> Dogs have an extremely good sense of smell. If an accident is not cleaned up with an enzymatic cleaner (not just soap and water), the smell will draw them back to that spot. Use a product designed for pet accidents.</p>

<p>PupPal's health tracking lets you log your puppy's bathroom habits so you can spot patterns and predict when accidents might happen. It is one of the fastest ways to understand your individual puppy's rhythms.</p>`,
  },
  {
    slug: "how-to-crate-train-a-puppy",
    title: "How to Crate Train a Puppy (Step by Step)",
    excerpt:
      "Crate training done right gives your puppy a safe den they actually want to be in. Done wrong, it creates anxiety. Here is the right way.",
    publishedAt: "2026-03-03",
    readTime: 8,
    relatedSlugs: ["puppy-potty-training-schedule", "stop-puppy-whining-at-night", "first-week-new-puppy-checklist"],
    content: `<h2>Why Crate Training Works</h2>
<p>Dogs are den animals. In the wild, dogs and wolves seek out small, enclosed spaces to sleep and rest because those spaces feel safe and calm. A properly introduced crate taps into this instinct. Done right, your puppy will choose to go into their crate voluntarily to nap, de-stress, or sleep. That is the goal.</p>
<p>Done wrong — rushed, forced, or used as punishment — the crate becomes a source of anxiety and a management nightmare.</p>
<p>Crate training also solves several problems at once. It accelerates potty training (puppies do not want to soil where they sleep), prevents destructive chewing when you cannot supervise, and gives your puppy a safe space when the house is chaotic.</p>
<p>One rule that is not negotiable: <strong>the crate is never used as punishment.</strong> If your puppy goes into the crate when they have done something wrong, you are teaching them that the crate is something bad. The crate must always be associated with good things.</p>

<h2>Choosing the Right Size</h2>
<p>The crate should be just big enough for your puppy to stand up, turn around, and lie down comfortably. That is it. If the crate is too large, your puppy will use one end as a bathroom and sleep at the other, which completely defeats the potty training advantage.</p>
<p>If you have a breed that will grow significantly, buy a crate with a divider panel. Start with the smaller section and expand it as your puppy grows.</p>

<table>
<thead><tr><th>Adult Dog Size</th><th>Crate Size</th></tr></thead>
<tbody>
<tr><td>Under 25 lbs (small breeds)</td><td>24 inches</td></tr>
<tr><td>25-40 lbs (medium breeds)</td><td>30 inches</td></tr>
<tr><td>40-70 lbs (Labs, Goldens, etc.)</td><td>36-42 inches</td></tr>
<tr><td>70+ lbs (large breeds)</td><td>42-48 inches</td></tr>
</tbody>
</table>

<p>For wire crates vs. plastic: wire crates offer better airflow and visibility, which most puppies prefer. Plastic crates (airline-style) feel more den-like and work well for anxious dogs. Either is fine to start with.</p>

<h2>Week-by-Week Crate Training Process</h2>

<h3>Week 1: Making It Inviting</h3>
<p>Do not force your puppy into the crate. Let them explore it on their own terms.</p>
<ul>
<li>Place the crate in a high-traffic area, not a back room. Puppies want to be near their people.</li>
<li>Leave the door open. Toss treats and kibble into the crate throughout the day. Let your puppy go in, get the treat, and come out at will.</li>
<li>Feed meals inside the crate with the door open.</li>
<li>Put a worn T-shirt or blanket that smells like you inside. This is genuinely comforting to puppies.</li>
<li>Every time your puppy voluntarily enters, quietly say "crate" or "bed" (whatever word you choose, use it consistently) and drop a treat in.</li>
</ul>

<h3>Week 2: Closing the Door</h3>
<p>Once your puppy is comfortable going in and out, start closing the door briefly.</p>
<ul>
<li>Lure your puppy in with a treat or Kong. Close the door for 10 seconds. Open it.</li>
<li>Gradually extend: 30 seconds, then 1 minute, then 5 minutes.</li>
<li>Always let your puppy out before they get anxious. You are building a positive history, not testing their limits.</li>
<li>Give a Kong filled with peanut butter (check it's xylitol-free) or cream cheese to make crate time associated with something amazing.</li>
<li>Try leaving the room for a few minutes while they are crated.</li>
</ul>

<h3>Weeks 3-4: Alone Time and Nights</h3>
<ul>
<li>Gradually extend crate time to 30-60 minutes while you are in another room.</li>
<li>Start putting your puppy in their crate at nighttime. Put the crate in your bedroom at first — the sound of you breathing is comforting and helps them settle.</li>
<li>Maintain a consistent "crate time" routine: Kong, crate word, close door, quiet praise.</li>
<li>Avoid letting your puppy out when they are crying or whining. Wait for a pause in the crying, even a brief one, then release.</li>
</ul>

<h2>Common Crate Training Problems</h2>

<h3>Puppy Cries Nonstop</h3>
<p>Some crying is normal and expected, especially the first few nights. If the crying is truly nonstop and hours-long, you may have moved too fast. Go back to shorter durations and build back up. Make sure your puppy has been exercised and toileted before crating.</p>
<p>There is a difference between "I'm uncomfortable" crying, which fades, and "I'm in distress" panic, which escalates. If your puppy escalates rather than settles, they need more gradual introduction, not more endurance.</p>

<h3>Puppy Refuses to Enter</h3>
<p>You introduced the door too fast, or the crate has some negative association. Start fresh: crate door removed entirely, treats scattered inside, meals fed inside. Give it a week of purely positive associations with no door at all.</p>

<h3>Accidents in the Crate</h3>
<p>This usually means the crate is too big, or you are leaving your puppy crated longer than they can hold it. Check the size first. Then adjust the schedule. Young puppies simply cannot be crated all day while you are at work — they need midday bathroom breaks.</p>

<h3>Escaped or Destroyed the Crate</h3>
<p>Some puppies are escape artists. Make sure latches are secure. Wire crates can be reinforced with zip ties on the corners. If your puppy is consistently destroying their bedding, remove soft items temporarily — some puppies do better on the wire floor with a mat than with blankets they can shred.</p>`,
  },
  {
    slug: "first-week-new-puppy-checklist",
    title: "First Week with a New Puppy Checklist",
    excerpt:
      "The first week sets the tone for everything. Here is exactly what to do each day, from the moment your puppy comes home.",
    publishedAt: "2026-03-04",
    readTime: 7,
    relatedSlugs: ["how-to-crate-train-a-puppy", "puppy-potty-training-schedule", "puppy-socialization-timeline"],
    content: `<h2>Before Puppy Comes Home</h2>
<p>The prep work you do before your puppy walks through the door will make the first 72 hours dramatically less chaotic. Do not skip this step.</p>

<h3>Supplies to Have Ready</h3>
<ul>
<li>Crate (right size for adult weight, with divider if needed)</li>
<li>Food and water bowls (stainless steel is easiest to clean)</li>
<li>Collar with ID tag (include your phone number, not your puppy's name)</li>
<li>Leash (4-6 foot standard leash to start)</li>
<li>The exact food your puppy has been eating from their breeder or shelter (switching food too fast causes stomach upset)</li>
<li>Enzymatic cleaner for accidents</li>
<li>Several chew toys and a Kong</li>
<li>Puppy training treats (small, soft, high-value)</li>
<li>Puppy-safe shampoo</li>
<li>Brush appropriate for coat type</li>
<li>Baby gate if needed to restrict room access</li>
</ul>

<h3>Puppy-Proof the House</h3>
<ul>
<li>Get down on your hands and knees and look at the room from puppy height</li>
<li>Remove electrical cords or cover with cord protectors</li>
<li>Move houseplants (many common ones are toxic to dogs)</li>
<li>Secure cabinets that contain cleaning products</li>
<li>Remove area rugs from high-traffic areas until potty training is solid</li>
<li>Identify where your puppy will eat, sleep, and toilet</li>
</ul>

<h3>Have the Vet Already Booked</h3>
<p>Schedule your first vet appointment for within 3-5 days of bringing your puppy home. Many breeders and shelters have a health guarantee that requires a vet visit within this window.</p>

<h2>Day 1</h2>
<p>This is the most overwhelming day. Keep it calm. Less is more.</p>

<h3>The Car Ride Home</h3>
<ul>
<li>Have someone ride in the back seat with the puppy in their lap or in a carrier — not loose in the back</li>
<li>Expect some car sickness; bring a towel</li>
<li>The car ride is the first experience in a long series of "this is new and fine" moments</li>
</ul>

<h3>First Few Hours at Home</h3>
<ul>
<li>Take your puppy directly to the toilet area before going inside</li>
<li>Let them sniff and explore the yard or designated toilet spot</li>
<li>Then bring them inside and let them explore one room at a time</li>
<li>Keep it quiet. This is not the day to invite all your friends over to meet the puppy</li>
<li>Let your puppy come to you rather than overwhelming them with affection immediately</li>
</ul>

<h3>First Night</h3>
<ul>
<li>Expect it to be rough. Your puppy has never been alone before</li>
<li>Put the crate in your bedroom so they can hear you</li>
<li>A ticking clock wrapped in a towel can mimic a heartbeat and soothe some puppies</li>
<li>Set your alarm for a middle-of-the-night bathroom trip</li>
<li>Do not bring them into your bed unless you are prepared to do that forever</li>
</ul>

<h2>Days 2-3</h2>

<h3>Start the Potty Routine</h3>
<ul>
<li>Take puppy out first thing in the morning, every 30-45 minutes during the day, after every meal and nap</li>
<li>Use the same toilet spot every time</li>
<li>Use the same word ("go potty", "outside", whatever you choose)</li>
<li>Quietly praise and treat the moment they finish outside, not after you walk back inside</li>
</ul>

<h3>Introduce the Crate</h3>
<ul>
<li>Leave the crate door open with treats inside throughout the day</li>
<li>Feed meals inside the crate</li>
<li>Do not force them in yet — let it be their idea</li>
</ul>

<h3>Start One Simple Training Exercise</h3>
<ul>
<li>"Sit" is the perfect first command: easy to lure, fast to learn, immediately useful</li>
<li>Hold a treat above their nose and move it back slightly — most puppies naturally sit</li>
<li>Say "sit" as their bottom touches the floor, then treat immediately</li>
<li>Keep sessions to 3-5 minutes, 2-3 times a day</li>
</ul>

<h3>Begin Handling Practice</h3>
<ul>
<li>Gently touch ears, paws, mouth, and tail daily</li>
<li>This prevents handling sensitivity that makes vet visits and grooming much harder later</li>
<li>Give a treat with each handling moment</li>
</ul>

<h2>The Rest of Week 1</h2>

<h3>Days 4-5</h3>
<ul>
<li>Continue potty schedule without exception</li>
<li>Close the crate door for brief periods (10-30 seconds) while you are present</li>
<li>Add "down" or "come" to your training sessions</li>
<li>Carry puppy outside to experience the sounds and sights of the neighborhood</li>
<li>Make the first vet visit if you have not already</li>
</ul>

<h3>Days 6-7</h3>
<ul>
<li>Your puppy is starting to learn the layout of their world</li>
<li>Extend crate door closures to 5 minutes while you are in the room</li>
<li>Keep a consistent wake time, meal times, and bedtime — routine is stability for puppies</li>
<li>Note patterns: when does your puppy usually need to go out? When are they calmest? Build around that</li>
</ul>

<h2>What to Expect This Week</h2>
<p>Accidents daily — sometimes multiple per day. This is normal. Consistency plus time is the cure, not frustration.</p>
<p>Broken sleep. For most owners, nights 1-3 are the worst. It gets better fast.</p>
<p>Crying when alone. Perfectly normal. The world is very new and you are their person.</p>
<p>Intense mouthing and biting. See our guide on bite inhibition.</p>
<p>Energy in bursts followed by hard crashes. Puppies need 16-20 hours of sleep per day. The "zoomies" followed by a dead-asleep nap is a completely normal puppy pattern.</p>
<p>PupPal walks you through every day of week 1 with a structured training program customized for your puppy's breed, age, and your experience level. You do not have to figure this out alone.</p>`,
  },
  {
    slug: "stop-puppy-jumping",
    title: "How to Stop a Puppy from Jumping on People",
    excerpt:
      "Jumping is the number one complaint from puppy owners who have guests. The fix is counterintuitive but it works every time.",
    publishedAt: "2026-03-05",
    readTime: 6,
    relatedSlugs: ["when-do-puppies-stop-biting", "puppy-socialization-timeline", "first-week-new-puppy-checklist"],
    content: `<h2>Why Puppies Jump</h2>
<p>Before you can fix the jumping, it helps to understand why it happens. Puppies jump on people for a simple reason: it works. When your puppy was with their mother and littermates, jumping up was how they greeted other dogs and got face-to-face contact. When your puppy jumps on you and you smile, push them down (still attention), or squeal (still exciting), you are confirming that jumping gets a response. From the puppy's perspective, that is a win.</p>
<p>Jumping is also partly about scent. Your puppy wants to reach your face because that is where the important social information is. In dog communication, face-to-face greeting is significant.</p>
<p>The good news: jumping is one of the easier behaviors to change, because the cure is simple attention withdrawal, and puppies are very motivated by your attention.</p>

<h2>The Most Common Mistake</h2>
<p>The mistake almost every owner makes: physically pushing the puppy down while saying "No, down, off" repeatedly.</p>
<p>Here is why this fails. When you push your puppy, you are still engaging with them. Your hands are touching them, your eyes are on them, you are speaking to them. From your puppy's view, this is still interaction. You have rewarded the jump with physical contact and vocal attention.</p>
<p>Some puppies actually think the push-down is a game and jump right back up because it was fun. You accidentally taught them that jumping starts a great game.</p>
<p>The solution involves zero physical engagement when they jump.</p>

<h2>The Turn Away Method</h2>
<p>This is the foundation technique and it is non-negotiable.</p>
<ol>
<li>When your puppy jumps, immediately turn your back. Do not look at them, touch them, or speak to them.</li>
<li>Cross your arms and look up or to the side.</li>
<li>The moment all four paws are on the floor, turn around and calmly greet them. Mark the moment with "yes" or a click, and treat or pet.</li>
<li>If they jump again the moment you turn back, repeat immediately.</li>
</ol>
<p>The key is the timing. You must turn away the instant their paws leave the floor, and return attention the instant all four paws land. The faster and more consistent your timing, the faster your puppy learns.</p>
<p>Walk out of the room if needed. If your puppy is very persistent, say nothing, walk into another room, and close the door for 10 seconds. Then re-enter calmly. Repeat as needed.</p>

<h2>Four on the Floor</h2>
<p>Pair the turn-away method with actively rewarding the behavior you want: four paws on the ground.</p>
<p>When your puppy approaches you with four paws on the floor, immediately reward them with attention, praise, or a treat. You are teaching them: "paws on the floor is what gets me good things." Make sure the reward for four-on-the-floor is bigger and better than anything jumping ever got them.</p>
<p>Ask for a "sit" as an incompatible behavior. A puppy cannot be sitting and jumping at the same time. When you come home, before engaging, ask for a sit. If they hold it, pour on the praise. If they break the sit to jump, turn away. Come back and ask again.</p>

<h2>Breed-Specific Notes</h2>
<p><strong>Labs and Golden Retrievers:</strong> These breeds are notorious jumpers. They are exuberant greeters by nature and their enthusiasm is part of their charm, which makes it hard for owners to stay consistent. Be extra committed to the turn-away, especially at the door.</p>
<p><strong>Vizslas:</strong> Vizslas are velcro dogs with almost no off switch. They need a lot of alternative greeting outlets, like asking them to sit and then doing a full-body rub rather than a quick pat.</p>
<p><strong>Boxers:</strong> Boxers physically jump with force and often land their front paws on chests or shoulders. This can knock over children and elderly adults. Boxers need very firm turn-away training, and owners need to be consistent even when the jumping "seems cute" as a puppy because a 60-pound adult Boxer greeting enthusiastically is a safety issue.</p>
<p><strong>Toy Breeds:</strong> Owners often skip jump training for small breeds because being jumped on by a 5-pound dog feels harmless. Do not skip it. A senior person or a young child can still be knocked off balance, and the behavior pattern is harder to change later.</p>

<h2>Consistency Tips</h2>
<p><strong>Everyone must follow the rules.</strong> If one family member lets the puppy jump "just this once" or "only on me," training resets. Jumping behaviors survive on partial reinforcement. If jumping works 20% of the time, your puppy will try it 100% of the time. Every person who interacts with your puppy must use the same protocol.</p>
<p><strong>Warn guests before they come in.</strong> Tell them: "Please do not pet him if he jumps. Turn away and wait for four paws on the floor." Most people will comply if you explain it. Some will not, and that one interaction can set training back significantly. If a guest absolutely cannot follow the rules, put your puppy on a leash during the greeting.</p>
<p><strong>Stay calm throughout.</strong> High-pitched excited voices increase arousal, and higher arousal means more jumping. When greeting your puppy, even excitedly, keep your voice lower than you think you need to.</p>
<p><strong>Be patient with setbacks.</strong> Jumping tends to spike when puppies are excited, overtired, or when someone new visits. This is normal. Consistency over weeks, not perfection over days, is what produces lasting change.</p>`,
  },
  {
    slug: "puppy-socialization-timeline",
    title: "Puppy Socialization Timeline (What to Do and When)",
    excerpt:
      "The window between 8 and 16 weeks shapes your dog's personality for life. Here is exactly what to expose your puppy to, and when.",
    publishedAt: "2026-03-06",
    readTime: 9,
    relatedSlugs: ["first-week-new-puppy-checklist", "how-much-sleep-does-a-puppy-need", "puppy-potty-training-schedule"],
    content: `<h2>The Critical Window (8-16 Weeks)</h2>
<p>The most important developmental period of your dog's life happens in the first 16 weeks. This is the socialization window, and what happens during it has more influence on your dog's adult temperament than almost anything else you can do.</p>
<p>During this window, your puppy's brain is primed to file away new experiences as "normal." Things they encounter frequently and positively during this period will not frighten them as adults. Things they never experience, or experience badly, may create lasting fears and reactive behavior.</p>
<p>This is not an exaggeration and it is not optional. The science on the socialization window is some of the most robust in all of dog behavior research.</p>
<p>The challenge: this period overlaps with the vaccine schedule, so many vets still tell owners to "keep puppies home until fully vaccinated." The risk of behavioral problems from under-socialization is arguably greater than the risk of parvo or distemper in a properly managed low-risk environment. Talk to your vet about a balanced approach: puppy classes with vaccinated dogs, visits to homes where dogs are known healthy, and carrying your puppy in areas where you cannot verify ground safety.</p>

<h2>Socialization Checklist</h2>
<p>Aim to expose your puppy to all of these before 16 weeks. The goal is brief, positive exposures, not overwhelming flooding.</p>

<h3>People</h3>
<ul>
<li>Men (especially with hats, beards, or glasses — these can startle puppies)</li>
<li>Women</li>
<li>Children (including infants, toddlers, running kids)</li>
<li>People of different ethnicities and appearances</li>
<li>People in uniforms (postal workers, delivery people)</li>
<li>People wearing backpacks, helmets, umbrellas</li>
<li>Elderly people with canes or walkers</li>
<li>People using wheelchairs</li>
</ul>

<h3>Other Animals</h3>
<ul>
<li>Well-vaccinated, calm adult dogs</li>
<li>Puppies in supervised play</li>
<li>Cats (if you can arrange it safely)</li>
</ul>

<h3>Environments</h3>
<ul>
<li>Hardwood floors, tile, carpet, grass, gravel, concrete</li>
<li>Stairs (both directions)</li>
<li>Elevators</li>
<li>Car rides</li>
<li>Crates and kennels</li>
<li>Busy streets and quiet streets</li>
<li>Pet-friendly stores</li>
</ul>

<h3>Sounds</h3>
<ul>
<li>Thunderstorms (recordings work)</li>
<li>Fireworks (recordings work)</li>
<li>Vacuums and brooms</li>
<li>Loud music</li>
<li>Traffic and construction sounds</li>
<li>Door bells</li>
<li>Children crying or screaming</li>
</ul>

<h3>Handling</h3>
<ul>
<li>Ears examined and touched</li>
<li>Mouth and teeth handled</li>
<li>Paws held and nails touched</li>
<li>Tail handled</li>
<li>Being picked up and carried</li>
<li>Being held still briefly (for restraint training)</li>
<li>Collar and harness wearing</li>
</ul>

<h2>The Fear Period</h2>
<p>Around 8-10 weeks (which coincides with when most puppies come home), there is a brief "first fear period." During this period, frightening experiences have an outsized negative impact. A single very scary event can create a lasting fear.</p>
<p>This does not mean you should avoid socialization. It means you should be careful about the quality of early exposures. Keep first introductions gentle, brief, and positive. Do not flood your puppy with overwhelming stimuli. Let them approach things on their own terms when possible.</p>
<p>There is a second fear period around 6-14 months. This is when adolescent dogs suddenly become reactive or fearful about things they handled fine as young puppies. This is normal, temporary, and manageable with the right approach (continued positive exposure, patience, and not forcing them through fear).</p>

<h2>Socialization Timeline Table</h2>

<table>
<thead><tr><th>Age</th><th>Priority</th></tr></thead>
<tbody>
<tr><td>8-10 weeks</td><td>Home environment, family members, crate, handling; be gentle with first fear period</td></tr>
<tr><td>10-12 weeks</td><td>Visitors to your home; carried outings in low-risk areas; puppy class (first one)</td></tr>
<tr><td>12-14 weeks</td><td>New environments (stores, parks where dogs do not congregate); more people types</td></tr>
<tr><td>14-16 weeks</td><td>Maximize novel experiences before window closes; sounds, surfaces, handling</td></tr>
<tr><td>16 weeks onward</td><td>Maintenance socialization; varies, but brain is no longer in the primary critical window</td></tr>
</tbody>
</table>

<h2>After 16 Weeks</h2>
<p>The critical window has closed, but socialization is not over. Dogs need ongoing exposure to the world throughout their lives to maintain their social comfort. A dog that was well-socialized as a puppy but then spent a year in a back yard with no stimulation can develop new fears and reactivity.</p>
<p>Continue taking your dog to new places, introducing them to new people, and making those experiences positive with treats and praise. This is a lifelong practice, not a 16-week sprint.</p>
<p>PupPal's developmental milestones tracker helps you stay on top of what your puppy should be experiencing at each age, with reminders and checklists organized around the socialization window.</p>`,
  },
  {
    slug: "how-much-sleep-does-a-puppy-need",
    title: "How Much Sleep Does a Puppy Need?",
    excerpt:
      "If your puppy seems to sleep constantly, that is because they should. Sleep is when puppies grow, process, and recover. Here is what is normal.",
    publishedAt: "2026-03-07",
    readTime: 6,
    relatedSlugs: ["stop-puppy-whining-at-night", "how-to-crate-train-a-puppy", "first-week-new-puppy-checklist"],
    content: `<h2>Sleep by Age</h2>
<p>Puppies need 16-20 hours of sleep per day. This seems absurd until you consider that puppies' bodies are growing at an extraordinary rate, their brains are processing massive amounts of new information daily, and their immune systems are developing rapidly. Sleep is doing serious work.</p>

<table>
<thead><tr><th>Age</th><th>Sleep Needed per Day</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>8-10 weeks</td><td>18-20 hours</td><td>Very frequent naps; active periods last 15-30 minutes</td></tr>
<tr><td>10-12 weeks</td><td>17-18 hours</td><td>Slightly longer active stretches</td></tr>
<tr><td>3-4 months</td><td>16-18 hours</td><td>More predictable nap/wake pattern emerging</td></tr>
<tr><td>4-6 months</td><td>14-16 hours</td><td>Adolescence brings more energy in bursts</td></tr>
<tr><td>6-12 months</td><td>12-16 hours</td><td>Still significantly more than adult dogs</td></tr>
<tr><td>Adult</td><td>12-14 hours</td><td>Varies by breed; large breeds sleep more</td></tr>
</tbody>
</table>

<p>If your 9-week-old puppy sleeps three hours, wakes up for 20 minutes of explosive chaos, and then crashes again for another hour and a half, that is exactly normal. You have a healthy puppy.</p>

<h2>Why Sleep Matters</h2>
<p>The practical implications of this sleep requirement are significant:</p>
<p><strong>Over-tired puppies behave badly.</strong> This is one of the most underrated facts about puppies. A puppy who is past their comfortable awake time becomes increasingly manic, bitey, and out of control. This is not defiance — this is the puppy equivalent of a toddler meltdown. If your puppy suddenly seems to go haywire, check if they have been awake for more than 2 hours and need a nap.</p>
<p><strong>Sleep interruption affects training.</strong> Learning during the day is consolidated during sleep. Short, consistent training sessions followed by a nap actually produce better results than longer training marathons without adequate rest.</p>
<p><strong>Sleep supports immune function.</strong> During their first 16 weeks, puppies are developing immunity. Sleep is a direct contributor to immune health. An under-rested puppy is more vulnerable to the illnesses you are working so hard to vaccinate against.</p>

<h2>Creating a Sleep Routine</h2>
<p>Puppies thrive on predictable schedules. A rough daily rhythm for an 8-12 week old:</p>
<ul>
<li>Wake up, immediate potty trip, 15-20 minutes of active interaction</li>
<li>Nap (1-2 hours in crate)</li>
<li>Potty, meal, play session and short training (15-20 min)</li>
<li>Nap</li>
<li>Repeat throughout the day</li>
<li>Final potty trip late evening</li>
<li>Bed for the night (with likely 1 middle-of-the-night trip)</li>
</ul>
<p>The structure does not have to be minute-by-minute. But puppies who have a predictable rhythm are calmer, easier to crate, and generally better behaved than puppies whose schedule is completely unpredictable.</p>
<p>Enforce nap time. Especially with young children in the house, puppies are often kept awake far past their comfortable limit because everyone wants to interact with them. An overtired puppy is a bitey, chaotic puppy. Putting a puppy in their crate to nap when they need it, even if they resist briefly, is one of the most important things you can do for their behavior and development.</p>

<h2>Night Waking</h2>
<p>Most puppies wake at least once during the night for the first several weeks. This is not a behavioral problem — young puppies simply cannot hold their bladder for 7-8 hours.</p>
<p>What typically happens:</p>
<ul>
<li>Weeks 1-2: Wake up 1-2 times a night, sometimes more for very young puppies</li>
<li>Weeks 3-4: Usually down to one wake-up if you are managing food and water timing</li>
<li>Months 2-3: Most puppies begin sleeping through the night, or very nearly so</li>
</ul>
<p>The fastest path to sleeping through the night: consistent crating in your bedroom, limiting water 2 hours before bed, and setting an alarm to take them out before they wake up crying. The proactive approach (you take them out before they ask) is faster than the reactive approach (waiting until they cry).</p>
<p>If your puppy is still consistently waking multiple times a night past 4 months, consider:</p>
<ul>
<li>Is the crate in your bedroom? Sound of you helps.</li>
<li>Is the crate the right size? Too big means they can use a corner as a bathroom.</li>
<li>Is there a health issue? Urinary issues can cause increased frequency. Check with your vet.</li>
<li>Is this actually a behavioral habit that has been reinforced? Some puppies learn that crying at night gets you to come in. The solution there is the hardest thing: not going in unless you hear an urgency to the cry that sounds like a real bathroom need.</li>
</ul>`,
  },
  {
    slug: "best-training-treats-for-puppies",
    title: "Best Training Treats for Puppies",
    excerpt:
      "The right treat makes training go 3x faster. The wrong treat wastes your session. Here is exactly what to look for and what to avoid.",
    publishedAt: "2026-03-08",
    readTime: 7,
    relatedSlugs: ["when-do-puppies-stop-biting", "stop-puppy-jumping", "first-week-new-puppy-checklist"],
    content: `<h2>What Makes a Good Training Treat</h2>
<p>Not all treats are created equal for training. A good training treat has four qualities:</p>
<ol>
<li><strong>High value:</strong> It should be something your puppy would do almost anything for. If your puppy is indifferent to it, it will not motivate learning.</li>
<li><strong>Small:</strong> Training treats should be tiny — about the size of a pea for most breeds. Training sessions involve many repetitions, and you do not want to fill your puppy up in 10 minutes or throw off their daily nutrition.</li>
<li><strong>Soft:</strong> Soft treats can be consumed quickly, keeping the training rhythm going. Hard crunchy biscuits take 30 seconds to chew, killing the momentum of a training session.</li>
<li><strong>Low-calorie:</strong> Because you will use many of them. Treats should make up no more than 10% of your puppy's daily caloric intake.</li>
</ol>
<p>Two additional practical qualities: treats should not be crumbly (falling apart in your training pouch creates a mess), and they should not have a strong smell that lingers on your hands for the rest of the day. Though for some puppies, strong-smelling treats are exactly what you need for high-distraction environments.</p>

<h2>Size Matters</h2>
<p>Seriously. The treat size calibration for training is one of those details that sounds minor until you try it the right way and see the difference.</p>

<table>
<thead><tr><th>Dog Size</th><th>Training Treat Size</th></tr></thead>
<tbody>
<tr><td>Small breeds (under 15 lbs)</td><td>Rice grain to pea sized</td></tr>
<tr><td>Medium breeds (15-40 lbs)</td><td>Pea to blueberry sized</td></tr>
<tr><td>Large breeds (40+ lbs)</td><td>Pea to marble sized</td></tr>
</tbody>
</table>

<p>For large breeds, the size illusion matters. A large breed puppy is not going to value a tiny treat less just because it is small — their motivation comes from the frequency and the interaction, not the quantity per treat. Keep them small.</p>

<h2>Best Treat Categories for Training</h2>

<h3>Freeze-Dried Meat (Highest Value)</h3>
<p>Freeze-dried chicken, liver, beef heart, and salmon are typically at the top of the preference hierarchy for most dogs. Single-ingredient, high protein, zero artificial anything. Break them into small pieces and they work as both everyday training treats and high-value rewards for harder behaviors.</p>
<p>Use these for:</p>
<ul>
<li>Teaching a new behavior for the first time</li>
<li>Training in high-distraction environments</li>
<li>Recall training (come when called — this needs the highest value treat you have)</li>
</ul>

<h3>Small Soft Training Treats (Everyday Training)</h3>
<p>Many brands make small, soft training treats in various flavors. Look for treats with meat as the first ingredient and minimal filler. Avoid treats with artificial colors, xylitol (toxic to dogs), or grapes/raisins. These work well for most daily training sessions.</p>

<h3>Real Food (Excellent and Cheap)</h3>
<p>Small pieces of plain cooked chicken, plain cooked beef, or small cubes of cheese are often more motivating than commercial treats and cost less. A cooked chicken breast shredded into tiny pieces gives you hundreds of training treats for a dollar. Most dogs rank real meat above everything.</p>
<p>Safe human foods for treats:</p>
<ul>
<li>Plain cooked chicken, turkey, beef</li>
<li>Small pieces of cheese (use sparingly due to fat content)</li>
<li>Plain cooked egg</li>
<li>Blueberries, apple slices (without seeds), banana</li>
<li>Plain cooked carrot or green bean</li>
</ul>

<h3>Kibble as Treats (Low Value but Useful)</h3>
<p>For low-distraction environments and basic maintenance training, your puppy's regular kibble can work as treats. Feed a portion of their daily meal through training sessions instead of the bowl. This is a great way to make mealtime training time without adding extra calories. However, kibble is not motivating enough for challenging new behaviors or distracting environments.</p>

<h2>Treats to Avoid</h2>
<ul>
<li><strong>Anything containing xylitol</strong> — this artificial sweetener is toxic to dogs and found in some peanut butter brands, candies, and chewing gums</li>
<li><strong>Grapes and raisins</strong> — even small amounts can cause kidney failure</li>
<li><strong>Macadamia nuts</strong> — toxic to dogs</li>
<li><strong>Chocolate</strong> — well known but worth repeating</li>
<li><strong>Onion, garlic, and chives</strong> — toxic even in small amounts over time</li>
<li><strong>Very large treats</strong> — the Milk-Bone sized biscuits your grandparents used to give dogs are not training treats; they are too large, too caloric, and too slow to consume</li>
<li><strong>Rawhide for young puppies</strong> — choking hazard; use appropriately sized chews from a vet-recommended source instead</li>
</ul>

<h2>Breed-Specific Notes</h2>
<p><strong>Small breeds (Chihuahuas, Yorkies, Maltese):</strong> These dogs have tiny stomachs and can fill up very fast. Use the absolute smallest pieces you can manage and consider using a portion of their daily kibble for most training sessions, reserving high-value treats for new behaviors.</p>
<p><strong>Labs and Golden Retrievers:</strong> These dogs are notoriously food motivated — almost anything will work. You can get away with lower-value treats for basic obedience. Save the high-value for recall and impulse control.</p>
<p><strong>Terriers and Hounds:</strong> Often more motivated by play or prey-driven rewards than food. Some terriers would rather chase a ball than get a chicken piece. Experiment to find what your individual dog values most.</p>
<p><strong>Very food-motivated breeds (Beagles, Cocker Spaniels):</strong> These dogs can become so focused on the treat that they stop paying attention to you. Practice asking for a behavior before the treat is visible, and gradually reduce treat frequency as a behavior is learned to prevent "only works for food" syndrome.</p>`,
  },
  {
    slug: "stop-puppy-whining-at-night",
    title: "How to Stop Puppy Whining at Night",
    excerpt:
      "It is 2am and your puppy will not stop crying. You are exhausted and wondering if you made a terrible mistake. You did not. Here is what actually works.",
    publishedAt: "2026-03-09",
    readTime: 7,
    relatedSlugs: ["how-to-crate-train-a-puppy", "how-much-sleep-does-a-puppy-need", "first-week-new-puppy-checklist"],
    content: `<h2>Why Puppies Whine</h2>
<p>If you are reading this at 2am with a crying puppy, first: you are not alone. This is the most common scenario for new puppy parents in the first two weeks. It is also temporary.</p>
<p>Your puppy is whining at night for a very understandable reason: they have never been alone before. Up until a few days ago, they were sleeping in a pile with their mother and littermates. They could feel body heat, hear breathing, smell familiar smells. Now they are in an unfamiliar place, in a box, by themselves in the dark.</p>
<p>The whining is not manipulation. It is not defiance. It is a puppy who is genuinely distressed about a new and confusing situation. Understanding this makes it easier to respond thoughtfully instead of reactively.</p>
<p>There are also some practical reasons for nighttime crying beyond emotional distress:</p>
<ul>
<li>They actually need to go to the bathroom (very common in the first weeks)</li>
<li>They are too hot or too cold</li>
<li>They are uncomfortable in the crate (bedding, size)</li>
<li>They are hungry</li>
<li>They are unwell</li>
</ul>
<p>Rule out the practical issues first, then address the behavioral ones.</p>

<h2>The First Night</h2>
<p>The first night is usually the hardest, and it does not always predict how the rest of the week will go. Some puppies settle after one night of crying. Some take two weeks. Neither means you are doing it wrong.</p>
<p>What to do on night one:</p>
<ul>
<li>Put the crate in your bedroom. Not the hallway, not the kitchen, not the garage. Your bedroom. The sound of you breathing is genuinely soothing to a puppy and can dramatically reduce crying.</li>
<li>Make the crate comfortable but not extravagant. A soft blanket or shirt that smells like you is more valuable than any fancy bed right now.</li>
<li>Put the puppy in after their last bathroom trip of the night. Keep it low-key: crate word, treat, door closed. No prolonged goodbye.</li>
<li>Expect some crying. Let it be. If it is steady moderate crying that stays the same or gradually decreases, wait it out. Most puppies will settle within 10-20 minutes if you do not respond.</li>
<li>If the crying escalates significantly (becomes more frantic rather than less), take them out briefly for a bathroom trip. Keep it boring: outside, business, back in crate. No play, no extended cuddle.</li>
</ul>

<h2>Week 1-2 Strategy</h2>
<p>The goal for the first two weeks is to establish that night equals quiet crate time, and to stack up as many quiet nights as possible to build that pattern.</p>
<p><strong>Before bed:</strong></p>
<ul>
<li>Do a good exercise session in the late afternoon or early evening (not right before bed, which can wind them up)</li>
<li>Limit water 2 hours before bed</li>
<li>Last bathroom trip as late as you can manage</li>
<li>A Kong with frozen peanut butter or kibble in the crate at bedtime is not a bribe — it is an association builder. Crate equals something good.</li>
</ul>
<p><strong>Middle of the night:</strong></p>
<ul>
<li>Set an alarm for 3-4 hours after their last outing. Going to them proactively before they are desperate prevents the urgent crying altogether.</li>
<li>When you take them out at night, use dim lights. Bright lights signal "day" to a puppy's brain.</li>
<li>Go outside, wait, praise quietly when they go, back inside, back in crate. The whole trip should be less than 5 minutes.</li>
<li>No talking, no playing, no prolonged petting. You are a boring bathroom assistant, not a friend who wants to hang out at 3am.</li>
</ul>

<h2>What Not to Do</h2>
<p><strong>Do not take them into your bed.</strong> Or rather: do this only if you want to share your bed with a dog forever. There is nothing wrong with having a dog in your bed if that is a conscious choice. But if you bring them in at 2am to stop the crying, you have just taught them that crying at 2am is the magic password for getting into the bed. You will do this again tomorrow night.</p>
<p><strong>Do not go in just to comfort them without taking them to the bathroom.</strong> Going in, petting them, and going back to bed teaches them that crying eventually produces your company. If you are going to check on them, either do the bathroom trip (if they have been in the crate long enough to need it) or do not go in at all.</p>
<p><strong>Do not put the crate far away.</strong> If the crate is in a back room, you cannot hear the difference between "I'm upset about being alone" crying and "I genuinely need to go to the bathroom" crying. Being close enough to hear the quality of the crying helps you make better decisions.</p>
<p><strong>Do not punish the crying.</strong> Your puppy does not understand why you are angry with them. Punishment at night creates fear and anxiety, which makes the crying worse over time.</p>

<h2>When It Won't Stop</h2>
<p>If your puppy is still crying intensely every night after two weeks, or if the crying is escalating rather than improving, check these things:</p>
<ul>
<li><strong>Crate placement:</strong> Still in your bedroom? This is the single biggest factor.</li>
<li><strong>Crate size:</strong> Too big means your puppy feels exposed, not cozy. Use the divider.</li>
<li><strong>Exercise:</strong> Is your puppy getting enough physical and mental activity during the day? A puppy with pent-up energy will struggle to settle at night.</li>
<li><strong>Daytime crate habits:</strong> Is your puppy ever in the crate during the day in a calm way? Build positive daytime associations to carry over to night.</li>
<li><strong>Medical:</strong> Puppies with parasites, urinary tract infections, or other health issues will have more trouble at night. If the crying is accompanied by signs of distress beyond "I'm lonely" — excessive squirming, repeated attempts to go to the bathroom, whimpering rather than barking — check with your vet.</li>
</ul>
<p>The arc of nighttime is almost always: terrible, then less terrible, then fine. Most puppies sleep reliably through the night by 3-4 months. You are in the hard part. It ends.</p>`,
  },
  {
    slug: "puppy-teething-timeline",
    title: "Puppy Teething Timeline and What to Expect",
    excerpt:
      "Teething makes the biting worse and explains why your puppy is destroying everything in sight. Here is the full timeline and how to get through it.",
    publishedAt: "2026-03-10",
    readTime: 7,
    relatedSlugs: ["when-do-puppies-stop-biting", "best-training-treats-for-puppies", "first-week-new-puppy-checklist"],
    content: `<h2>When Do Puppies Teethe?</h2>
<p>Puppies are born without teeth. Their baby teeth (also called milk teeth or deciduous teeth) start coming in around 2-4 weeks of age. By the time you bring your puppy home at 8 weeks, they will have a full set of 28 razor-sharp baby teeth.</p>
<p>The teething process — where baby teeth fall out and adult teeth grow in — happens in two phases starting around 3-4 months and usually completing by 6-7 months. During this process, your puppy's gums are sore, itchy, and uncomfortable. Chewing relieves that discomfort. This is why puppies who were manageable in the first few months suddenly seem to destroy everything in sight around month 3-4.</p>

<h2>The Teething Timeline</h2>

<table>
<thead><tr><th>Age</th><th>What is Happening</th></tr></thead>
<tbody>
<tr><td>0-2 weeks</td><td>No teeth yet</td></tr>
<tr><td>2-4 weeks</td><td>Baby teeth start erupting (stays with litter at this age)</td></tr>
<tr><td>8 weeks</td><td>28 baby teeth present when puppy comes home</td></tr>
<tr><td>12-16 weeks (3-4 months)</td><td>Baby incisors start falling out; adult incisors come in</td></tr>
<tr><td>16-20 weeks (4-5 months)</td><td>Baby canines (the sharp pointy ones) fall out; adult canines erupt; most intense phase</td></tr>
<tr><td>5-6 months</td><td>Adult premolars and molars come in; 12 new teeth</td></tr>
<tr><td>6-7 months</td><td>All 42 adult teeth should be present; teething essentially complete</td></tr>
</tbody>
</table>

<p>You may find baby teeth on your floor, in your puppy's bedding, or never at all. Many puppies swallow them, which is harmless. If you see a small, sharp, somewhat translucent tooth on the floor, that is completely normal.</p>

<h2>Signs Your Puppy is Teething</h2>
<ul>
<li><strong>Increased chewing and mouthing</strong> — especially of firm items like chair legs, shoes, and your hands</li>
<li><strong>Red, slightly swollen gums</strong> — you may see this when your puppy yawns</li>
<li><strong>Drooling more than usual</strong></li>
<li><strong>Decreased appetite</strong> — sore gums make eating painful; do not be alarmed if your puppy eats less during peak teething</li>
<li><strong>Blood spots on chew toys</strong> — a small amount of blood when baby teeth fall out is normal; a lot of blood is not</li>
<li><strong>More irritability</strong> — some puppies are grumpier, more sensitive to handling, or more reactive during heavy teething</li>
<li><strong>Visible missing teeth</strong> — gaps in their smile are normal; adult teeth usually follow quickly</li>
</ul>

<h2>Helpful Products During Teething</h2>
<p>The right chews make a real difference. The goal is to give your puppy something appropriate to relieve gum discomfort before they relieve it on your furniture.</p>

<h3>Frozen Items</h3>
<p>Cold reduces inflammation and numbs sore gums. Freeze a wet washcloth and let your puppy chew on it. Freeze a Kong stuffed with kibble, peanut butter (xylitol-free), or plain yogurt. Most puppies will go straight for frozen items when teething is intense.</p>

<h3>Appropriate Chew Toys</h3>
<p>Rubber chew toys designed for puppies — the moderate hardness varieties — work well. Avoid anything so hard that you cannot indent it with your thumbnail. If you cannot dent it, it can crack your puppy's adult teeth. This rules out real bones, hard nylon toys, and antlers for young teething puppies.</p>
<p>Rope toys are popular but shed fibers that can be swallowed and cause GI issues. If you use rope toys, supervise their use and discard them when they start fraying significantly.</p>

<h3>Bully Sticks and Natural Chews</h3>
<p>Single-ingredient dried meat chews (bully sticks, collagen sticks, yak milk chews) give puppies a long-duration chewing experience that is safe and satisfying. Monitor for pieces that become small enough to swallow.</p>

<h2>Training Through Teething</h2>
<p>Teething is not an excuse to pause training — in fact, structure and positive training sessions can actually help redirect chewing energy productively. But you should adjust your expectations and approach:</p>
<p><strong>Keep sessions shorter.</strong> A puppy with sore gums has less patience for focus. Five minutes of good training beats 20 minutes of frustration for both of you.</p>
<p><strong>Use softer treats.</strong> During peak teething (around 4-5 months), harder treats may hurt. Switch to soft, moist training treats temporarily.</p>
<p><strong>Be patient with the biting regression.</strong> Puppies who were making good progress on bite inhibition often seem to go backward during teething. They are uncomfortable and mouthing things more. This is temporary. Stay consistent with your response (yelp and ignore, redirect to toy), and progress will resume when the discomfort eases.</p>
<p><strong>Protect your stuff proactively.</strong> Move items off low shelves and tables. Protect chair legs with bitter spray if needed. Give your puppy designated chew zones. Manage the environment rather than correcting constantly during this phase — your puppy genuinely needs to chew, and they will find a way to do it. Your job is to make sure the target is something appropriate.</p>
<p>The biting will get better. The teething will finish. By 7 months, most owners report a dramatic change in their puppy's chewing intensity. You will get there.</p>`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);
}
