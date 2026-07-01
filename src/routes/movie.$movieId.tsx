import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Star, Clock, Calendar } from "lucide-react";
import { getMovieById, movies } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";

export const Route = createFileRoute("/movie/$movieId")({
  head: ({ params }) => {
    const movie = getMovieById(params.movieId);
    const title = movie ? `${movie.title} (${movie.year}) — კინოს ბიბლიოთეკა` : "ფილმი";
    const description = movie?.description ?? "ფილმის დეტალები და ტრეილერი.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(movie ? [{ property: "og:image", content: movie.image }] : []),
      ],
    };
  },
  component: MovieDetailsPage,
  notFoundComponent: MovieNotFound,
});

function MovieDetailsPage() {
  const { movieId } = Route.useParams();
  const movie = getMovieById(movieId);

  if (!movie) return <MovieNotFound />;

  const related = movies
    .filter(
      (m) =>
        m.id !== movie.id &&
        m.keywords.some((k) => movie.keywords.includes(k)),
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-background">
      {/* Backdrop header */}
      <div className="relative">
        <div className="absolute inset-0 h-[420px] overflow-hidden">
          <img
            src={movie.image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-top opacity-25 blur-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            დაბრუნება
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr]">
            {/* Poster */}
            <div className="mx-auto w-full max-w-[280px]">
              <img
                src={movie.image}
                alt={`${movie.title} — პოსტერი`}
                className="w-full rounded-2xl border border-border shadow-2xl"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {movie.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5 font-semibold text-primary">
                  <Star className="h-4 w-4 fill-primary" />
                  {movie.rating.toFixed(1)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {movie.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {movie.duration}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {movie.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed text-foreground/90">
                {movie.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-4 text-xl font-bold text-foreground">ტრეილერი</h2>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${movie.trailer}`}
            title={`${movie.title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="mb-6 text-xl font-bold text-foreground">
            მსგავსი ფილმები
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function MovieNotFound() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <h1 className="text-2xl font-bold text-foreground">ფილმი ვერ მოიძებნა</h1>
      <p className="text-muted-foreground">
        მოთხოვნილი ფილმი არ არსებობს ან წაშლილია.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => router.history.back()}
          className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          უკან
        </button>
        <Link
          to="/"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          მთავარი
        </Link>
      </div>
    </main>
  );
}
