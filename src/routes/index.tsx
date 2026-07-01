import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Search, Film, Frown } from "lucide-react";
import { movies } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // მცირე loading მდგომარეობა პირველი რენდერისას
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return movies;
    return movies.filter((movie) => {
      const haystack = [
        movie.title,
        movie.description,
        ...movie.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero-glow relative border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <Film className="h-4 w-4 text-primary" />
            კინოს ბიბლიოთეკა
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            იპოვე შენი შემდეგი <span className="text-gradient-gold">ფილმი</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            მოძებნე სახელით ან თემით — „დაკარგვა", „love", „war" და მრავალი სხვა.
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-ring/40 transition-colors">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ჩაწერე ფილმის სახელი ან თემა..."
              aria-label="ფილმის ძიება"
              className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="shrink-0 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                გასუფთავება
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">
            {query ? "ძიების შედეგები" : "ყველა ფილმი"}
          </h2>
          {!loading && (
            <span className="text-sm text-muted-foreground">
              {filtered.length} ფილმი
            </span>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[2/3] animate-pulse rounded-2xl border border-border bg-card"
              />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
            <Frown className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-semibold text-foreground">
              ფილმი ვერ მოიძებნა
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              სცადე სხვა საკვანძო სიტყვა, მაგ: „love" ან „war".
            </p>
          </div>
        )}
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        დამზადებულია React + TanStack Router + Tailwind CSS-ით 🎬
      </footer>
    </main>
  );
}
