import { Link } from "@tanstack/react-router";
import { Star, Clock } from "lucide-react";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      to="/movie/$movieId"
      params={{ movieId: movie.id }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image}
          alt={`${movie.title} — პოსტერი`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-primary" />
          {movie.rating.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-bold text-foreground">
            {movie.title}
          </h3>
          <span className="shrink-0 text-sm text-muted-foreground">
            {movie.year}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {movie.description}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {movie.duration}
          </span>
          {movie.keywords.slice(0, 2).map((kw) => (
            <span
              key={kw}
              className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
