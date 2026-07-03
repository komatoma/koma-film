import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Star, Clock, Calendar, Play } from "lucide-react";
import { getMovieById, movies, getCategoryLabel } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Poster } from "@/components/Poster";
import { useI18n } from "@/lib/i18n";

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
        ...(movie?.image ? [{ property: "og:image", content: movie.image }] : []),
      ],
    };
  },
  component: MovieDetailsPage,
  notFoundComponent: MovieNotFound,
});

function MovieDetailsPage() {
  const { movieId } = Route.useParams();
  const { t, catLabel } = useI18n();
  const movie = getMovieById(movieId);

  if (!movie) return <MovieNotFound />;

  const related = movies
    .filter((m) => m.id !== movie.id && m.keywords.some((k) => movie.keywords.includes(k)))
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-background">
      {/* Backdrop header */}
      <div className="relative">
        <div className="absolute inset-0 h-[420px] overflow-hidden">
          {movie.image && (
            <img
              src={movie.image}
              alt=""
              aria-hidden
              className="h-full w-full object-cover object-top opacity-25 blur-2xl"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr]">
            {/* Poster */}
            <div className="mx-auto w-full max-w-[280px]">
              <div className="aspect-[2/3] w-full overflow-hidden rounded-2xl border border-border shadow-2xl">
                <Poster movie={movie} />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{movie.title}</h1>

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
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {catLabel(movie.category)}
                </span>
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

              <div className="mt-6">
                <Link
                  to="/watch/$movieId"
                  params={{ movieId: movie.id }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
                >
                  <Play className="h-4 w-4 fill-current" />
                  {t("watch_now")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer */}
      {movie.trailer && (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-4 text-xl font-bold text-foreground">{t("trailer")}</h2>
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
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16">
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

function MovieNotFound() {
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
