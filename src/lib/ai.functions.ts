import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { movies } from "@/data/movies";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const inputSchema = z.object({
  messages: z.array(messageSchema).min(1).max(20),
  lang: z.enum(["ka", "en", "ru"]).default("ka"),
});

const langInstruction: Record<string, string> = {
  ka: "Always answer in Georgian (ქართული).",
  en: "Always answer in English.",
  ru: "Always answer in Russian (Русский).",
};

export const askMovieAssistant = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      throw new Error("AI is not configured");
    }

    const catalog = movies
      .map((m) => `${m.title} (${m.year}) — ${m.category}`)
      .join("; ");

    const systemPrompt = [
      "You are a friendly movie recommendation assistant for a movie streaming website.",
      "Recommend movies ONLY from the catalog below. Be concise (max 4 recommendations).",
      "For each recommendation give the title, year and one short reason.",
      langInstruction[data.lang] ?? langInstruction.ka,
      "",
      `CATALOG: ${catalog}`,
    ].join("\n");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: systemPrompt }, ...data.messages],
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("AI gateway error", res.status, body);
      if (res.status === 429) throw new Error("rate_limited");
      if (res.status === 402) throw new Error("payment_required");
      throw new Error("ai_failed");
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = json.choices?.[0]?.message?.content?.trim();
    return { reply: reply || "" };
  });
