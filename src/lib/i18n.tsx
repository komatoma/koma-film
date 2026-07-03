import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CategoryKey } from "@/data/movies";

export type Lang = "ka" | "en" | "ru";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "ka", label: "ქართული", flag: "🇬🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

type Dict = Record<string, string>;

const ka: Dict = {
  brand: "კინოს ბიბლიოთეკა",
  nav_home: "მთავარი",
  nav_ai: "AI ასისტენტი",
  hero_badge: "კინოს ბიბლიოთეკა",
  hero_title_1: "იპოვე შენი შემდეგი",
  hero_title_2: "ფილმი",
  hero_subtitle: "მოძებნე სახელით ან თემით და უყურე პირდაპირ საიტზე.",
  search_placeholder: "ჩაწერე ფილმის სახელი ან თემა...",
  search_aria: "ფილმის ძიება",
  clear: "გასუფთავება",
  all: "ყველა",
  results: "ძიების შედეგები",
  movies: "ფილმები",
  count_suffix: "ფილმი",
  empty_title: "ფილმი ვერ მოიძებნა",
  empty_desc: "სცადე სხვა საკვანძო სიტყვა.",
  footer: "დამზადებულია React + Tailwind CSS-ით 🎬",
  back: "დაბრუნება",
  watch_now: "ყურება",
  trailer: "ტრეილერი",
  related: "მსგავსი ფილმები",
  not_found_title: "ფილმი ვერ მოიძებნა",
  not_found_desc: "მოთხოვნილი ფილმი არ არსებობს ან წაშლილია.",
  home: "მთავარი",
  watch_title: "ფილმის ყურება",
  no_video: "ამ ფილმისთვის ვიდეო ჯერ არ არის ხელმისაწვდომი.",
  ai_title: "AI კინო ასისტენტი",
  ai_subtitle: "მკითხე ფილმის რეკომენდაცია ან ჟანრის მიხედვით არჩევანი.",
  ai_placeholder: "მაგ: მირჩიე დრამა ცრემლების დასაღვრელად",
  ai_send: "გაგზავნა",
  ai_thinking: "ვფიქრობ...",
  ai_error: "დაფიქსირდა შეცდომა. სცადე თავიდან.",
  ai_greeting:
    "გამარჯობა! მე კინო ასისტენტი ვარ. მითხარი განწყობა ან ჟანრი და შესანიშნავ ფილმს გირჩევ.",
  cat_animation: "მულტფილმები",
  cat_drama: "დრამა",
  cat_romance: "სიყვარული",
  cat_horror: "საშიში",
  cat_action: "ექშენი",
  "cat_sci-fi": "ფანტასტიკა",
  cat_war: "ომი",
  cat_comedy: "კომედია",
};

const en: Dict = {
  brand: "Cine Library",
  nav_home: "Home",
  nav_ai: "AI Assistant",
  hero_badge: "Movie Library",
  hero_title_1: "Find your next",
  hero_title_2: "movie",
  hero_subtitle: "Search by title or theme and watch right here on the site.",
  search_placeholder: "Type a movie title or theme...",
  search_aria: "Search movies",
  clear: "Clear",
  all: "All",
  results: "Search results",
  movies: "Movies",
  count_suffix: "movies",
  empty_title: "No movies found",
  empty_desc: "Try a different keyword.",
  footer: "Built with React + Tailwind CSS 🎬",
  back: "Back",
  watch_now: "Watch",
  trailer: "Trailer",
  related: "Related movies",
  not_found_title: "Movie not found",
  not_found_desc: "The requested movie does not exist or was removed.",
  home: "Home",
  watch_title: "Watch movie",
  no_video: "Video is not available for this movie yet.",
  ai_title: "AI Movie Assistant",
  ai_subtitle: "Ask for a recommendation or pick by genre and mood.",
  ai_placeholder: "e.g. recommend a drama that makes me cry",
  ai_send: "Send",
  ai_thinking: "Thinking...",
  ai_error: "Something went wrong. Please try again.",
  ai_greeting:
    "Hi! I'm your movie assistant. Tell me your mood or a genre and I'll recommend something great.",
  cat_animation: "Animation",
  cat_drama: "Drama",
  cat_romance: "Romance",
  cat_horror: "Horror",
  cat_action: "Action",
  "cat_sci-fi": "Sci-Fi",
  cat_war: "War",
  cat_comedy: "Comedy",
};

const ru: Dict = {
  brand: "Кинобиблиотека",
  nav_home: "Главная",
  nav_ai: "AI ассистент",
  hero_badge: "Кинобиблиотека",
  hero_title_1: "Найди свой следующий",
  hero_title_2: "фильм",
  hero_subtitle: "Ищи по названию или теме и смотри прямо на сайте.",
  search_placeholder: "Введите название или тему фильма...",
  search_aria: "Поиск фильмов",
  clear: "Очистить",
  all: "Все",
  results: "Результаты поиска",
  movies: "Фильмы",
  count_suffix: "фильмов",
  empty_title: "Фильмы не найдены",
  empty_desc: "Попробуйте другое ключевое слово.",
  footer: "Сделано на React + Tailwind CSS 🎬",
  back: "Назад",
  watch_now: "Смотреть",
  trailer: "Трейлер",
  related: "Похожие фильмы",
  not_found_title: "Фильм не найден",
  not_found_desc: "Запрошенный фильм не существует или был удалён.",
  home: "Главная",
  watch_title: "Смотреть фильм",
  no_video: "Видео для этого фильма пока недоступно.",
  ai_title: "AI кино-ассистент",
  ai_subtitle: "Спросите рекомендацию или выберите по жанру и настроению.",
  ai_placeholder: "напр: посоветуй драму, чтобы поплакать",
  ai_send: "Отправить",
  ai_thinking: "Думаю...",
  ai_error: "Произошла ошибка. Попробуйте снова.",
  ai_greeting:
    "Привет! Я ваш кино-ассистент. Скажите настроение или жанр — и я порекомендую отличный фильм.",
  cat_animation: "Мультфильмы",
  cat_drama: "Драма",
  cat_romance: "Романтика",
  cat_horror: "Ужасы",
  cat_action: "Боевик",
  "cat_sci-fi": "Фантастика",
  cat_war: "Война",
  cat_comedy: "Комедия",
};

const dicts: Record<Lang, Dict> = { ka, en, ru };

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  catLabel: (key: CategoryKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "cine-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "ka" || saved === "en" || saved === "ru") {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const t = (key: string) => dicts[lang][key] ?? dicts.en[key] ?? key;
    const catLabel = (key: CategoryKey) => t(`cat_${key}`);
    return { lang, setLang, t, catLabel };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
