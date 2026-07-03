import { useState } from "react";
import { Film } from "lucide-react";
import type { Movie } from "@/data/movies";
import { cn } from "@/lib/utils";

interface PosterProps {
  movie: Movie;
  className?: string;
  imgClassName?: string;
}

/**
 * Renders a movie poster with a graceful gradient fallback when the
 * remote image is missing or fails to load. This keeps the grid looking
 * intentional even for movies without a verified poster.
 */
export function Poster({ movie, className, imgClassName }: PosterProps) {
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(movie.image) && !failed;

  if (hasImage) {
    return (
      <img
        src={movie.image}
        alt={`${movie.title} — poster`}
        loading="lazy"
        onError={() => setFailed(true)}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary via-card to-background p-4 text-center",
        className,
      )}
    >
      <Film className="h-10 w-10 text-primary/70" />
      <span className="line-clamp-3 text-sm font-bold text-foreground">{movie.title}</span>
      <span className="text-xs text-muted-foreground">{movie.year}</span>
    </div>
  );
}
