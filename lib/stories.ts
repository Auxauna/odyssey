import type { HeroJourney } from "./schema";

export const STORIES: Record<string, HeroJourney> = {
  gumroad: {
    company: "Gumroad",
    industry: "Creator Economy",
    tagline: "Gumroad's email provider ghosted them during the holidays. Resend picked up the phone.",
    foundations: {
      wound: "Their email provider blocked them mid-holiday season. No warning, no support ticket answered, no emails going out for days. Creators couldn't reach their buyers.",
      lie: "Email is just plumbing. Any provider will do.",
      want: "Someone who could get their emails working again. Fast.",
      need: "Email isn't background noise. It's how creators stay connected to the people who buy their stuff.",
      shadow: "The old provider that cut them off at the worst possible moment and never picked up the phone.",
      elixir: "Being able to focus on the product and trust that every receipt, every notification, every message gets delivered.",
    },
    stages: [
      {
        number: 1,
        name: "The Ordinary World",
        act: "DEPARTURE",
        narrative: "Gumroad started in 2012 as a way for artists, writers, and makers to sell directly to their fans. By the time this story begins, hundreds of thousands of creators depended on the platform. Email held it all together. Purchase receipts, product updates, audience messages. It worked so well that nobody thought about it. The team had bigger things on their plate.",
      },
      {
        number: 2,
        name: "The Call to Adventure",
        act: "DEPARTURE",
        narrative: "Then the holidays hit. Their email provider blocked Gumroad's account without warning. Purchase confirmations stopped going out. Creator notifications disappeared. Buyers had no idea what happened to their orders. Sahil Lavingia, Gumroad's CEO, watched the support tickets pile up while his creators scrambled.",
      },
      {
        number: 3,
        name: "Refusal of the Call",
        act: "DEPARTURE",
        narrative: "The first instinct was to wait. Moving email providers during a crisis sounded insane. Every template, every integration, every sending domain would need to be rebuilt. They'd spent years on the current setup. Maybe it was just a glitch. But days went by. No response from the provider. No fix. The damage kept growing.",
      },
      {
        number: 4,
        name: "Meeting the Mentor",
        act: "DEPARTURE",
        narrative: "Gumroad had been testing Resend for some smaller projects already. They knew the API was clean. When Sahil reached out during the crisis, someone answered right away. Not a bot. Not a ticket number. Real engineers on a Slack channel, building a migration plan within hours. For the first time in days, it felt like someone was actually helping.",
      },
      {
        number: 5,
        name: "Crossing the Threshold",
        act: "DEPARTURE",
        narrative: "They made the call: move everything to Resend. Setup started the same day. The Resend team worked alongside Gumroad's engineers, configuring domains, moving templates, testing pipelines. What should have taken weeks happened in focused, precise hours. Every receipt, every notification, every creator email was rerouted. They didn't look back.",
      },
      {
        number: 6,
        name: "Tests, Allies, and Enemies",
        act: "INITIATION",
        narrative: "First came the small tests. Internal emails, low-stakes messages. Each one was watched closely. The Resend team stayed on Slack for every test, every edge case. They showed Gumroad how inbox placement worked, how sender reputation mattered, and how to actually monitor delivery. Email went from a black box to something the team could see and understand.",
      },
      {
        number: 7,
        name: "Approach to the Inmost Cave",
        act: "INITIATION",
        narrative: "Then came the big move: production traffic. This was the real thing. Millions of creators depended on these messages. A missed purchase receipt could lose a customer. A dropped notification could break years of trust. Both teams mapped every email flow, every webhook, every possible failure point before flipping the switch.",
      },
      {
        number: 8,
        name: "The Ordeal",
        act: "INITIATION",
        narrative: "They picked a quiet window and made the switch. The first hour was tense. The team stared at dashboards, refreshed logs, and waited. Would emails land in inboxes? Would the new domains hold up? Would the system handle Gumroad's volume? One by one, the green lights came on. Delivery rates held. Then they climbed. Emails weren't just sending. They were arriving.",
      },
      {
        number: 9,
        name: "The Reward",
        act: "INITIATION",
        narrative: "Creators reported that their audiences were responding again. Receipts showed up instantly. The support queue shrank. Sahil put it simply: they were getting email expertise, not just email service. The monitoring tools gave them visibility they'd never had. Delivery data, reputation tracking, engagement numbers. Email went from a constant worry to a reliable system.",
      },
      {
        number: 10,
        name: "The Road Back",
        act: "RETURN",
        narrative: "With the crisis over, Gumroad put everything through Resend. Marketing, product announcements, onboarding emails. The Resend team kept flagging issues before Gumroad even noticed them. What started as emergency help turned into a real partnership. Engineers spent less time on email problems and more time building features creators actually wanted.",
      },
      {
        number: 11,
        name: "The Resurrection",
        act: "RETURN",
        narrative: "Gumroad came out of this differently. Email wasn't invisible anymore. They saw it as part of the product, not background plumbing. They learned that infrastructure partners aren't interchangeable. The gap between a vendor and a partner shows up when things break, in how fast someone answers, in whether they actually know what they're doing.",
      },
      {
        number: 12,
        name: "Return with the Elixir",
        act: "RETURN",
        narrative: "Today, hundreds of thousands of creators on Gumroad send messages without thinking twice. They don't know how close the whole system came to going silent. That's the point. Sahil's takeaway stuck: Resend gives you email expertise, not just email service. The real win isn't reliable email. It's being free to work on what actually matters.",
      },
    ],
    transformationArc: "Gumroad learned something the hard way that most companies figure out too late: your infrastructure is only as good as the people running it. A holiday-season emergency forced them to move fast, and they found out that the gap between a vendor and a partner only shows up when things go wrong. Resend didn't just fix their email. They gave Gumroad's creators back the trust they'd almost lost.",
  },

  replit: {
    company: "Replit",
    industry: "Developer Tools & AI",
    tagline: "Replit is building the future of coding. They needed email that worked without adding to the to-do list.",
    foundations: {
      wound: "Millions of developers use Replit to build apps. Every one of those apps that sends email inherits whatever email setup Replit picks. The stakes add up fast.",
      lie: "Email is a solved problem. You can handle it with enough engineering time.",
      want: "A plug-and-play email tool that doesn't add overhead to an already packed roadmap.",
      need: "An infrastructure partner that cares about developer experience as much as they do. Email should disappear, not become a project.",
      shadow: "The creeping complexity of email at scale. Edge cases, deliverability puzzles, and maintenance that pulls engineers away from what they're supposed to be building.",
      elixir: "A connector so simple that Replit's users can add email to their apps without thinking about what's underneath.",
    },
    stages: [
      {
        number: 1,
        name: "The Ordinary World",
        act: "DEPARTURE",
        narrative: "Replit launched in 2016 as a browser-based code editor. By now, it's grown into something bigger: the best place to build AI apps. Backed by Y Combinator, the platform lets anyone go from an idea to a live application in minutes. But every app that sends email has the same old problem. You need those emails to actually arrive. As Replit's user base passed the millions, that problem got heavier.",
      },
      {
        number: 2,
        name: "The Call to Adventure",
        act: "DEPARTURE",
        narrative: "Amadeo Pellicce ran the Connectors, Agents, and Automations team. He noticed a gap. Developers on Replit needed to send emails for login flows, notifications, and user messages. The available tools added complexity that broke Replit's promise of simplicity. Every hour a developer spent setting up email was an hour they weren't building their app.",
      },
      {
        number: 3,
        name: "Refusal of the Call",
        act: "DEPARTURE",
        narrative: "They thought about building something in-house or stacking abstractions on top of existing tools. Email is an old protocol. How hard could it be? But the team had seen this movie before. Every custom email setup eventually turns into a maintenance project, full of weird edge cases and deliverability headaches. Building it themselves would mean owning a problem they weren't experts in.",
      },
      {
        number: 4,
        name: "Meeting the Mentor",
        act: "DEPARTURE",
        narrative: "Resend showed up not as a sales pitch but as a shared way of thinking. Both teams believed developer experience isn't a nice-to-have. It's the whole product. The API was clean. The docs were clear. The path from zero to production was obvious. Amadeo's team started building a Resend connector for the Replit platform.",
      },
      {
        number: 5,
        name: "Crossing the Threshold",
        act: "DEPARTURE",
        narrative: "They moved fast. The integration was simple enough that they had a working system end-to-end from the start. No long setup phase. No weeks of debugging. The connector would let any Replit user add email to their app as easily as adding a database. The line between trying it out and running it in production barely existed.",
      },
      {
        number: 6,
        name: "Tests, Allies, and Enemies",
        act: "INITIATION",
        narrative: "Testing against real use cases, Amadeo found what he'd later call the most important quality: no weird edge cases, no surprises. In email, that's rare. Delivery confirmations came back as expected. Errors were predictable. The Resend support team answered questions that went deeper than basic API calls, getting into deliverability details and sender reputation.",
      },
      {
        number: 7,
        name: "Approach to the Inmost Cave",
        act: "INITIATION",
        narrative: "The real question wasn't whether it worked for Replit's team. It was whether it could handle millions of developers being creative. Users would build apps that send email in ways nobody planned for. High-volume notifications, login flows at scale, AI-triggered workflows. The connector had to handle anything while staying simple enough for a beginner.",
      },
      {
        number: 8,
        name: "The Ordeal",
        act: "INITIATION",
        narrative: "Scaling email for a platform like Replit means dealing with every email challenge at once. Different apps, different sending patterns, different deliverability needs. Some users send five emails a day. Others build systems that fire off thousands. The connector had to handle the full range without showing users the complexity underneath.",
      },
      {
        number: 9,
        name: "The Reward",
        act: "INITIATION",
        narrative: "It worked. Engineers across Replit stopped thinking about email and started thinking about features. Amadeo's take was simple: Resend let them stop worrying about email. For a company building the future of AI-powered development, that focus was everything.",
      },
      {
        number: 10,
        name: "The Road Back",
        act: "RETURN",
        narrative: "With the connector proven, Replit expanded it across the platform. What started as a specific fix became a default feature. Email sending was now as natural to Replit as running code or connecting a database. The relationship with Resend grew from a basic integration into a real technical partnership.",
      },
      {
        number: 11,
        name: "The Resurrection",
        act: "RETURN",
        narrative: "Replit's shift wasn't about email. It was about a principle: every piece of infrastructure should match the developer experience of the platform itself. The Resend connector proved that partners can meet that bar. A first-time developer on Replit could now send production emails without reading a deliverability guide. The complexity just vanished.",
      },
      {
        number: 12,
        name: "Return with the Elixir",
        act: "RETURN",
        narrative: "The proof is in what disappeared. When a student in Nairobi or a founder in São Paulo builds an app on Replit and sends their first email, they don't think about SMTP or SPF records. They think about their users. That's the highest compliment an infrastructure partnership gets. It worked because of what it made invisible.",
      },
    ],
    transformationArc: "Replit's story isn't about a crisis or a big migration. It's about two companies that think the same way about developer experience finding each other at the right time. The result isn't a feature. It's an absence. Email complexity disappeared for millions of developers building the next wave of software. The partnerships that matter most are the ones that remove problems so quietly you forget they existed.",
  },

  raycast: {
    company: "Raycast",
    industry: "Productivity & Developer Tools",
    tagline: "They built the launcher that replaced Spotlight. Then they found an email partner worth the same standard.",
    foundations: {
      wound: "Raycast's old email tool made every send feel nerve-wracking. The interface was clunky, and the team dreaded hitting the button on big broadcasts.",
      lie: "All email tools are roughly the same. The hassle of switching isn't worth it.",
      want: "A sending tool that matched their obsession with clean, fast developer experience. No anxiety before hitting send.",
      need: "A company built on removing friction can't have friction in its own tools. Your standards have to apply everywhere.",
      shadow: "SendGrid. Complicated interface, confusing workflows, and a knot in your stomach before every large send.",
      elixir: "Confidence. Hit send, know it works, move on.",
    },
    stages: [
      {
        number: 1,
        name: "The Ordinary World",
        act: "DEPARTURE",
        narrative: "Raycast launched in London in 2020 and pulled off something hard: they built a launcher so good that developers replaced Apple's Spotlight with it. The product was fast, extensible, and beautifully made. But behind the scenes, the team's own email setup told a different story. SendGrid handled their sends. It worked, technically. But using it felt like a step backward from the standards Raycast set for their own product.",
      },
      {
        number: 2,
        name: "The Call to Adventure",
        act: "DEPARTURE",
        narrative: "Thomas Mann, Raycast's CEO, felt the gap most clearly. His company obsessed over milliseconds of response time. But sending an email meant hours navigating a tangled dashboard. Every broadcast to their waitlist felt nerve-wracking. SendGrid turned simple tasks into complicated ones. It wasn't one bad moment. It was hundreds of sends, each one a small compromise of their own standards.",
      },
      {
        number: 3,
        name: "Refusal of the Call",
        act: "DEPARTURE",
        narrative: "Switching email providers is never simple. Raycast had templates in SendGrid, domains configured, and a deliverability history built up. The move would touch everything: waitlist emails, product announcements, investor updates, marketing campaigns. Was the pain really bad enough to justify the hassle? For a while, they put up with it. They clicked through SendGrid with the patience of someone who knows something better exists but hasn't committed to finding it.",
      },
      {
        number: 4,
        name: "Meeting the Mentor",
        act: "DEPARTURE",
        narrative: "Resend came to their attention through word of mouth in the developer community. Here was a company that believed email tools could actually be enjoyable to use. Thomas saw a team that thought like his own: developer experience isn't a feature, it's the foundation. The API docs read like someone who used their own product wrote them. The interface was clean and intentional.",
      },
      {
        number: 5,
        name: "Crossing the Threshold",
        act: "DEPARTURE",
        narrative: "Raycast started small. They tested with their iOS and Windows waitlist emails. High-visibility sends that would show any problems right away. The setup took thirty minutes. Not thirty days. Not thirty hours. Thirty minutes from creating an account to sending production emails. For a team used to long vendor evaluations, the speed was surprising. Not careless speed. The kind of simplicity that comes from good design.",
      },
      {
        number: 6,
        name: "Tests, Allies, and Enemies",
        act: "INITIATION",
        narrative: "The waitlist emails went out clean. They expanded to marketing emails, then investor updates, where professionalism and deliverability aren't optional. Each new test passed. The anxiety that came with every SendGrid send started to fade. For the first time, Raycast's email workflow matched the quality bar they set for everything else.",
      },
      {
        number: 7,
        name: "Approach to the Inmost Cave",
        act: "INITIATION",
        narrative: "The biggest test was the large broadcasts. Emails to tens of thousands of users at once. This was where the old anxiety peaked with SendGrid. A formatting error or delivery failure at this scale would be visible and damaging. Resend's workflow made the pre-send checks feel natural, but the stakes were still real.",
      },
      {
        number: 8,
        name: "The Ordeal",
        act: "INITIATION",
        narrative: "Thomas reviewed the email one last time in Resend's preview, checked the list, and sent. The next few minutes were quiet. Either peaceful or bad. Then the data started coming in: opens, clicks, replies. The emails didn't just arrive. People read them and acted on them. The test didn't end with a celebration. It ended with a breath out.",
      },
      {
        number: 9,
        name: "The Reward",
        act: "INITIATION",
        narrative: "Thomas summed it up in one line: Resend is a sending partner that gets DX, so we can spend time building our product. For a company that judges everything by developer experience, that's the highest praise. The win wasn't a metric or a feature. It was the absence of the old anxiety. Email became what it should have been all along: reliable and invisible.",
      },
      {
        number: 10,
        name: "The Road Back",
        act: "RETURN",
        narrative: "Raycast moved everything to Resend. iOS invites, Windows waitlist, marketing, investor updates, targeted sends. All through one platform. The simplicity built on itself. Each new use case was easier than the last because the patterns were consistent. The team spent less time thinking about email mechanics and more time thinking about what to say.",
      },
      {
        number: 11,
        name: "The Resurrection",
        act: "RETURN",
        narrative: "The change was quiet but real. Raycast had been accepting friction in their own tools that they'd never accept in their product. Now everything matched. From the launcher's instant response time to an investor update landing at the right moment, every touchpoint reflected the same care.",
      },
      {
        number: 12,
        name: "Return with the Elixir",
        act: "RETURN",
        narrative: "The takeaway is simple: never accept worse tools for yourself than what you build for your users. The thirty-minute switch proved that switching costs are usually inflated by habit. Thomas's experience sent a signal through the dev tools world: the company that reinvented the desktop launcher found an email partner that met the same bar. The worry is gone. The emails work. The team builds.",
      },
    ],
    transformationArc: "Raycast's switch from SendGrid to Resend is a story about standards. A company that would never ship a slow launcher was, for years, putting up with that same sluggishness in their email tools. The change happened when they decided their internal tools deserved the same thinking as their product. It took thirty minutes. The lesson applies to everyone: the tools you use shape the company you become.",
  },

  liveblocks: {
    company: "Liveblocks",
    industry: "Real-Time Collaboration Infrastructure",
    tagline: "They make apps collaborative in minutes. Switching their email took about the same.",
    foundations: {
      wound: "The design team hated updating email templates in SendGrid. The tool that was supposed to help them was fighting them every step of the way.",
      lie: "Email templates are just painful. Designers should accept that email will never match the quality of the actual product.",
      want: "An email setup where designers could build and update templates as naturally as they design everything else.",
      need: "Email is a product surface. The tools used to create it should respect the people building it.",
      shadow: "SendGrid's template editor. Rigid, developer-focused, and hostile to designers who needed it most.",
      elixir: "React Email templates that feel like building components, not fighting a content management system.",
    },
    stages: [
      {
        number: 1,
        name: "The Ordinary World",
        act: "DEPARTURE",
        narrative: "Liveblocks launched in Paris in 2021 with a sharp focus: let any app become collaborative in minutes. Their tech powered the real-time features users expect now. Cursors moving together, changes showing up instantly, indicators showing who's looking at what. But while their product made collaboration smooth for others, their own email setup was a headache. SendGrid handled their sends, and the designers maintaining the templates had accepted it was just going to be painful.",
      },
      {
        number: 2,
        name: "The Call to Adventure",
        act: "DEPARTURE",
        narrative: "Guillaume Salles, co-founder and CTO, saw the irony. His company made collaboration easy for everyone else, but his own design team struggled with a tool that fought them at every turn. Templates were fragile and hard to update. Version control was basically impossible. On top of the template headaches, deliverability mattered a lot. Liveblocks needed to warn customers approaching plan limits, and those emails had to land.",
      },
      {
        number: 3,
        name: "Refusal of the Call",
        act: "DEPARTURE",
        narrative: "Staying put had its own pull. They had domains set up, flows working, and workarounds built for SendGrid's quirks. The designers had learned to cope. The engineers had built layers on top. Ripping out the email system felt like unnecessary trouble when there were collaboration features to ship and customers to serve.",
      },
      {
        number: 4,
        name: "Meeting the Mentor",
        act: "DEPARTURE",
        narrative: "Then they found React Email. The idea was simple: build email templates with the same React components and Tailwind CSS the team already used for their product. Designers and developers could work in their normal setup with their existing design system. Same version control, same review process, same everything. Guillaume didn't just see a better email provider. He saw a totally different way to handle email.",
      },
      {
        number: 5,
        name: "Crossing the Threshold",
        act: "DEPARTURE",
        narrative: "The migration started in November 2023. Instead of copying old SendGrid templates, the team rebuilt them as proper components with React Email and Tailwind. The components were versioned, reviewable, and composable. Same standards they held for product code. When the first test emails rendered, the difference was clear right away. These weren't templates. They were components.",
      },
      {
        number: 6,
        name: "Tests, Allies, and Enemies",
        act: "INITIATION",
        narrative: "Guillaume described the integration with the kind of quiet satisfaction only an engineer shows: everything went smoothly. The API was clear. The docs answered questions before they came up. But the real test of an email partner isn't the easy stuff. It's what happens when deliverability questions pop up. Resend's support team helped with issues that went beyond their own platform, tackling problems that weren't strictly their job.",
      },
      {
        number: 7,
        name: "Approach to the Inmost Cave",
        act: "INITIATION",
        narrative: "The critical emails were usage alerts. Messages sent to customers about to hit their plan limits. These weren't marketing emails that could sit in a promotions tab. They were operational messages tied directly to revenue and trust. If a customer blew past their limit without warning because an alert didn't arrive, the damage would be real.",
      },
      {
        number: 8,
        name: "The Ordeal",
        act: "INITIATION",
        narrative: "The hard part wasn't one big moment. It was migrating a live email system without breaking the customer experience. Every template rebuilt. Every flow retested. Every edge case covered. They ran both systems side by side for a while, SendGrid handling some flows, Resend handling others. Making sure nothing got dropped and branding stayed consistent took careful coordination.",
      },
      {
        number: 9,
        name: "The Reward",
        act: "INITIATION",
        narrative: "The payoff came on gradually, then all at once. Designers who used to dread email work started treating it like any other design task. Open a PR, preview it, ship it. The branded components became something the team took pride in. Deliverability got better. The team spent less time fighting tools and more time making emails that actually looked like Liveblocks.",
      },
      {
        number: 10,
        name: "The Road Back",
        act: "RETURN",
        narrative: "With the first move validated, they went all in. Every remaining email flow moved to Resend, each one easier than the last as the component library grew. The design system now covered everything from the product UI to transactional emails to marketing. Consistency across every customer touchpoint, finally.",
      },
      {
        number: 11,
        name: "The Resurrection",
        act: "RETURN",
        narrative: "The deeper shift was how they thought about email. It stopped being a chore managed in some third-party dashboard. It became a product surface, built with the same tools, reviewed with the same rigor, held to the same standards. The designers who once avoided email work now owned it. The engineers who'd built SendGrid workarounds shipped clean components instead.",
      },
      {
        number: 12,
        name: "Return with the Elixir",
        act: "RETURN",
        narrative: "Liveblocks proved that the pain companies accept with their email tools isn't something they have to live with. Treat email as a design surface, pick tools that respect both designers and engineers, and every customer interaction gets better. Guillaume's story hits home for any CTO who's watched a design team fight a rigid template editor. If your email tools don't match your product quality, it's not because good tools don't exist.",
      },
    ],
    transformationArc: "Liveblocks' move from SendGrid to React Email mirrors their own product: make the complex feel simple. A company that builds real-time collaboration for others found that their own communication tools needed the same rethinking. The switch wasn't just a vendor swap. It was the moment they decided that every surface of the company, including the emails that reach customers at 3 AM, deserved the same care as the product itself.",
  },

  "better-auth": {
    company: "Better Auth",
    industry: "Authentication & Developer Infrastructure",
    tagline: "The auth framework that trusts Resend with its most important job: proving you are who you say you are.",
    foundations: {
      wound: "Every email Better Auth sends is a trust moment. A magic link, a password reset, an OTP code. If the email doesn't arrive, the user is locked out.",
      lie: "Email delivery is a commodity. Auth emails are simple enough that any provider handles them fine.",
      want: "An email provider good enough to put in the official demos and recommend to every developer using the framework.",
      need: "For an auth framework, email is the critical path. Every magic link that doesn't arrive is a user who can't log in.",
      shadow: "A mess of email providers that forces developers to evaluate, configure, and debug email infrastructure before they can ship a login flow.",
      elixir: "Making Resend the default recommendation. Not as a vendor, but as the layer that completes the authentication experience.",
    },
    stages: [
      {
        number: 1,
        name: "The Ordinary World",
        act: "DEPARTURE",
        narrative: "Bereket Engida had a clear idea: the TypeScript world needed a complete authentication framework. Not a patchwork of libraries. One tool that handles sessions, OAuth, multi-factor auth, and email verification. He started building Better Auth in Ethiopia in 2025. But auth without email is like a lock without a key. Every magic link, every password reset, every OTP depended on emails showing up fast.",
      },
      {
        number: 2,
        name: "The Call to Adventure",
        act: "DEPARTURE",
        narrative: "From the very first waitlist email, Bereket needed delivery he could count on. This wasn't a crisis. It was just the ground-level requirement of building auth tools. Every developer who picks up Better Auth inherits whatever email choice he makes. That decision reaches every app built on the framework, touching end users who'll never hear of Better Auth but will definitely notice if their magic link doesn't show up.",
      },
      {
        number: 3,
        name: "Refusal of the Call",
        act: "DEPARTURE",
        narrative: "The easy route was to stay neutral. Let developers pick their own email provider and just offer an interface. That would let Better Auth off the hook for delivery. But Bereket saw the trap: if the default setup forces developers to evaluate, pick, and configure an email provider before they can test a login flow, the friction kills adoption. The framework needed a recommendation, not just an interface.",
      },
      {
        number: 4,
        name: "Meeting the Mentor",
        act: "DEPARTURE",
        narrative: "Resend showed up at the earliest moment: that first waitlist email. Bereket described it as so smooth that it became the obvious pick for everything after. The API matched the developer experience Better Auth was built around. There was no gap between the quality of the auth framework and the email powering it.",
      },
      {
        number: 5,
        name: "Crossing the Threshold",
        act: "DEPARTURE",
        narrative: "The integration grew from waitlist emails to the framework's official demos. This was a big call. Better Auth's demos would be the first thing thousands of developers see when checking out the framework. By putting Resend in the demos, Bereket was making a recommendation to everyone building on Better Auth. He wasn't just picking it for himself. He was setting the default.",
      },
      {
        number: 6,
        name: "Tests, Allies, and Enemies",
        act: "INITIATION",
        narrative: "Auth emails face a rough testing environment. Magic links need to show up in seconds or users give up. OTP codes expire in minutes. Password resets happen when users are already frustrated. Every problem, whether it's a delayed delivery, a spam filter, or a formatting issue, isn't just a bad experience. It's a complete auth failure. Bereket tested against these scenarios over and over.",
      },
      {
        number: 7,
        name: "Approach to the Inmost Cave",
        act: "INITIATION",
        narrative: "The big decision was making Resend the default for Better Auth's own products, community tools, and recommended setup. This wasn't a casual pick. It was a statement that Resend could handle the most security-sensitive emails an app sends. Every magic link carries a promise: the sender is real, the link is valid, the delivery is guaranteed. Bereket was staking his framework's reputation on it.",
      },
      {
        number: 8,
        name: "The Ordeal",
        act: "INITIATION",
        narrative: "Building a community around an auth framework meant emails beyond simple transactional messages. Infrastructure invites, marketing sends, investor updates, community notifications. All needed the same reliability as the auth flows. Bereket focused on making emails clear enough that users could handle issues on their own. Every confusing email or missed delivery turned into a support ticket, and every ticket took time from building the framework.",
      },
      {
        number: 9,
        name: "The Reward",
        act: "INITIATION",
        narrative: "Bereket's take: Resend is built by people who care. It has the best DX and UX. For a solo founder building something ambitious, the support changed the game. Not just ticket responses, but direct engagement from Resend's team on implementation questions and a dedicated Slack channel. Better Auth's developers could ship production emails in minutes. Bereket could focus on auth logic instead of email problems.",
      },
      {
        number: 10,
        name: "The Road Back",
        act: "RETURN",
        narrative: "With Resend proven across every use case, Bereket wove it deeper into Better Auth's world. The docs pointed developers to Resend. The community ran on it. The integration patterns Better Auth published became templates for thousands of developers building login flows. Each new developer who picked up the framework inherited Resend as the recommended email layer.",
      },
      {
        number: 11,
        name: "The Resurrection",
        act: "RETURN",
        narrative: "Better Auth grew from a solo project in Ethiopia into trusted developer infrastructure used around the world. Email was the unglamorous but essential layer that made it possible. Without reliable magic links, even the most polished auth framework is dead on arrival. Bereket changed how developers think about the full auth experience, from the first API call to the magic link landing in someone's inbox.",
      },
      {
        number: 12,
        name: "Return with the Elixir",
        act: "RETURN",
        narrative: "The lesson from Better Auth is that infrastructure choices add up. By picking Resend early and building it in deep, Bereket made sure that every app on the framework gets reliable email by default. Developers using Better Auth don't think about email infrastructure. They think about auth flows, user experience, and security. The email just works, finishing the loop that starts with a click and ends with proving you're you.",
      },
    ],
    transformationArc: "Better Auth's story folds back on itself in the best way: an auth framework that proves user identity chose its email partner by testing the same question. Is this a company that actually cares about developers? Bereket's path from solo founder in Ethiopia to building a widely used auth framework was possible because partners treated his work seriously regardless of size. Resend didn't just send emails for Better Auth. It delivered the trust that makes authentication work.",
  },
};

// Map various URL patterns to story keys
export function getStoryKey(url: string): string | null {
  const lower = url.toLowerCase();
  if (lower.includes("gumroad")) return "gumroad";
  if (lower.includes("replit")) return "replit";
  if (lower.includes("raycast")) return "raycast";
  if (lower.includes("liveblocks")) return "liveblocks";
  if (lower.includes("better-auth")) return "better-auth";
  return null;
}

export const AVAILABLE_STORIES = [
  { label: "Gumroad", key: "gumroad" },
  { label: "Replit", key: "replit" },
  { label: "Raycast", key: "raycast" },
  { label: "Liveblocks", key: "liveblocks" },
  { label: "Better Auth", key: "better-auth" },
];
