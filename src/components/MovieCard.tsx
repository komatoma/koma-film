import { Link } from "@tanstack/react-router";
import { Star, Clock, Play } from "lucide-react";
import type { Movie } from "@/data/movies";
import { Poster } from "@/components/Poster";
import { useI18n } from "@/lib/i18n";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { t, catLabel } = useI18n();
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
      <Link
        to="/movie/$movieId"
        params={{ movieId: movie.id }}
        className="relative block aspect-[2/3] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <Poster movie={movie} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-primary" />
          {movie.rating.toFixed(1)}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
          {catLabel(movie.category)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-bold text-foreground">{movie.title}</h3>
          <span className="shrink-0 text-sm text-muted-foreground">{movie.year}</span>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{movie.description}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {movie.duration}
          </span>
          <Link
            to="/watch/$movieId"
            params={{ movieId: movie.id }}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            {t("watch_now")}
          </Link>
        </div>
      </div>
    </div>
  );
}
