import { z } from "zod";

export const heroJourneySchema = z.object({
  company: z.string().describe("The customer company name, e.g. 'Gumroad'"),
  industry: z.string().describe("The industry or space they operate in, e.g. 'Creator Economy'"),
  tagline: z.string().describe("A compelling one-line hook for this hero's journey"),
  foundations: z.object({
    wound: z.string().describe("The deep pain or trauma the hero carried before the journey — the broken email infrastructure, the lost trust, the system that failed them"),
    lie: z.string().describe("The false belief the hero held — 'email is just a commodity', 'we have to build it ourselves', 'deliverability can't be solved'"),
    want: z.string().describe("The surface-level desire — better deliverability, easier integration, cost savings"),
    need: z.string().describe("The deeper truth they needed to discover — that email is a product experience, that developer experience matters, that infrastructure should be invisible"),
    shadow: z.string().describe("The antagonist force — the old provider, the legacy system, the complexity that held them back"),
    elixir: z.string().describe("The gift they bring back — the transformation achieved, the insight gained, shared with the world"),
  }),
  stages: z.array(z.object({
    number: z.number().describe("Stage number, 1 through 12"),
    name: z.string().describe("The Hero's Journey stage name, e.g. 'The Ordinary World'"),
    act: z.enum(["DEPARTURE", "INITIATION", "RETURN"]).describe("Which act this stage belongs to"),
    narrative: z.string().describe("3-5 sentences of rich, compelling narrative prose telling this part of the customer's story. Use specific details from the case study. Write like a brand storyteller, not a technical writer."),
    emoji: z.string().describe("A single emoji that captures the emotional tone of this stage"),
  })).describe("All 12 stages of the Hero's Journey"),
  transformationArc: z.string().describe("A closing paragraph (4-6 sentences) that ties the entire journey together, reflecting on the transformation from wound to elixir, from the old world to the new"),
});

export type HeroJourney = z.infer<typeof heroJourneySchema>;
