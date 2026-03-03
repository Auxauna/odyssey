import { streamObject } from "ai";
import { gateway } from "@ai-sdk/gateway";
import { heroJourneySchema } from "@/lib/schema";
import { HERO_JOURNEY_SYSTEM_PROMPT } from "@/lib/prompt";
import { scrapeUrl } from "@/lib/scraper";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return Response.json({ error: "URL is required" }, { status: 400 });
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return Response.json({ error: "Invalid URL format" }, { status: 400 });
    }

    // Scrape the case study content
    let content: string;
    try {
      content = await scrapeUrl(url);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to fetch URL";
      return Response.json({ error: message }, { status: 422 });
    }

    // Stream structured Hero's Journey
    const result = streamObject({
      model: gateway("google/gemini-2.5-flash-preview-05-20"),
      schema: heroJourneySchema,
      system: HERO_JOURNEY_SYSTEM_PROMPT,
      prompt: `Here is the case study content to transform into a Hero's Journey narrative:\n\n---\n\nSource URL: ${url}\n\n${content}\n\n---\n\nTransform this into a compelling 12-stage Hero's Journey. The customer company is the hero, Resend is the mentor. Use specific details from the content above.`,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (e) {
    console.error("Generate error:", e);
    return Response.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
