import { z } from "zod";

export const heroJourneySchema = z.object({
  company: z.string().describe("The customer company name, e.g. 'Gumroad'"),
  industry: z.string().describe("The industry or space they operate in, e.g. 'Creator Economy'"),
  tagline: z.string().describe("A compelling one-line hook for this hero's journey"),
  foundations: z.object({
    wound: z.string().describe("The deep pain or trauma the hero carried before the journey"),
    lie: z.string().describe("The false belief the hero held"),
    want: z.string().describe("The surface-level desire"),
    need: z.string().describe("The deeper truth they needed to discover"),
    shadow: z.string().describe("The antagonist force"),
    elixir: z.string().describe("The gift they bring back — the transformation achieved"),
  }),
  stages: z.array(z.object({
    number: z.number().describe("Stage number, 1 through 12"),
    name: z.string().describe("The Hero's Journey stage name, e.g. 'The Ordinary World'"),
    act: z.enum(["DEPARTURE", "INITIATION", "RETURN"]).describe("Which act this stage belongs to"),
    narrative: z.string().describe("4-6 sentences of rich, compelling narrative prose. Write like a brand storyteller crafting an epic tale."),
  })).describe("All 12 stages of the Hero's Journey"),
  transformationArc: z.string().describe("A closing paragraph (4-6 sentences) that ties the entire journey together, reflecting on the transformation from wound to elixir"),
});

export type HeroJourney = z.infer<typeof heroJourneySchema>;
