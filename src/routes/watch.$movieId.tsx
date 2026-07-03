import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Star, Clock, Calendar, Film } from "lucide-react";
import { getMovieById, movies } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/watch/$movieId")({
  head: ({ params }) => {
    const movie = getMovieById(params.movieId);
    const title = movie ? `${movie.title} — ${"Watch"}` : "Watch";
    const description = movie?.description ?? "Watch movie.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(movie?.image ? [{ property: "og:image", content: movie.image }] : []),
      ],
    };
  },
  component: WatchPage,
  notFoundComponent: WatchNotFound,
});

function WatchPage() {
  const { movieId } = Route.useParams();
  const { t, catLabel } = useI18n();
  const movie = getMovieById(movieId);

  if (!movie) return <WatchNotFound />;

  const related = movies
    .filter((m) => m.id !== movie.id && m.category === movie.category)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <Link
          to="/movie/$movieId"
          params={{ movieId: movie.id }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("back")}
        </Link>

        {/* Player */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-black shadow-2xl">
          <div className="aspect-video w-full">
            {movie.trailer ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${movie.trailer}?autoplay=1&rel=0`}
                title={movie.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-muted-foreground">
                <Film className="h-10 w-10 text-primary/60" />
                <p className="px-6 text-sm">{t("no_video")}</p>
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="mt-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {movie.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              {catLabel(movie.category)}
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/90">
            {movie.description}
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-6 text-xl font-bold text-foreground">{t("related")}</h2>
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

function WatchNotFound() {
  const router = useRouter();
  const { t } = useI18n();
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <h1 className="text-2xl font-bold text-foreground">{t("not_found_title")}</h1>
      <p className="text-muted-foreground">{t("not_found_desc")}</p>
      <div className="flex gap-3">
        <button
          onClick={() => router.history.back()}
          className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          {t("back")}
        </button>
        <Link
          to="/"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t("home")}
        </Link>
      </div>
    </main>
  );
}
