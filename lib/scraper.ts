import * as cheerio from "cheerio";

export async function scrapeUrl(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch URL: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  // Remove non-content elements
  $("script, style, nav, footer, header, noscript, iframe, svg").remove();
  $("[role='navigation'], [role='banner'], [role='contentinfo']").remove();

  // Try to find the main content area
  const selectors = [
    "main",
    "article",
    "[role='main']",
    ".prose",
    ".content",
    ".case-study",
    ".customer-story",
  ];

  let content = "";
  for (const sel of selectors) {
    const el = $(sel);
    if (el.length && el.text().trim().length > 200) {
      content = el.text();
      break;
    }
  }

  // Fallback to body
  if (!content) {
    content = $("body").text();
  }

  // Clean up whitespace
  content = content
    .replace(/\s+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (content.length < 100) {
    throw new Error("Could not extract meaningful content from this URL. The page may be JavaScript-rendered.");
  }

  // Truncate to avoid token limits
  if (content.length > 15000) {
    content = content.slice(0, 15000);
  }

  return content;
}
