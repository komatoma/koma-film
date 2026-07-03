import { useI18n, LANGS, type Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur">
      <Globe className="ml-1.5 hidden h-4 w-4 text-muted-foreground sm:block" />
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code as Lang)}
          aria-label={l.label}
          aria-pressed={lang === l.code}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
            lang === l.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <span className="mr-1">{l.flag}</span>
          {l.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
