export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number;
  duration: string;
  description: string;
  keywords: string[];
  image: string;
  /** YouTube video ID used for the embedded trailer */
  trailer: string;
}

const poster = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;

export const movies: Movie[] = [
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    duration: "2სთ 28წთ",
    description:
      "გამოცდილი ქურდი, რომელიც სხვათა სიზმრებში იპარება, ბოლო დავალებას იღებს — იდეის დათესვას მიზნის გონებაში. რეალობასა და ილუზიას შორის საზღვარი ქრება და ის კარგავს ორიენტაციას საკუთარ ცნობიერებაში.",
    keywords: ["dream", "heist", "lost", "დაკარგვა", "sci-fi", "thriller"],
    image: poster("/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"),
    trailer: "YoHD9XEInc0",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    duration: "2სთ 49წთ",
    description:
      "როცა დედამიწა კვდება, მამა და ასტრონავტთა ჯგუფი ჭიის ხვრელში მოგზაურობენ კაცობრიობის გადასარჩენად. დაკარგული დროის და დაკარგული ოჯახის ისტორია სივრცისა და სიყვარულის ფონზე.",
    keywords: ["space", "lost", "დაკარგვა", "sci-fi", "family", "love"],
    image: poster("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"),
    trailer: "zSWdZVtXT7E",
  },
  {
    id: "titanic",
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    duration: "3სთ 14წთ",
    description:
      "სხვადასხვა ფენის ორი ახალგაზრდა უიღბლო გემ ტიტანიკზე ერთმანეთს შეუყვარდებათ. სიყვარულის ისტორია, რომელიც კატასტროფად იქცევა ისტორიაში ცნობილ ღამეს.",
    keywords: ["love", "romance", "სიყვარული", "drama", "tragedy"],
    image: poster("/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"),
    trailer: "kVrqfYjkTdQ",
  },
  {
    id: "saving-private-ryan",
    title: "Saving Private Ryan",
    year: 1998,
    rating: 8.6,
    duration: "2სთ 49წთ",
    description:
      "მეორე მსოფლიო ომის დროს ჯარისკაცთა ჯგუფი მიემართება მტრის ხაზების მიღმა, რათა იპოვონ და სახლში დააბრუნონ ერთი ჯარისკაცი. ომის სისასტიკისა და ძმობის ძლიერი ისტორია.",
    keywords: ["war", "ომი", "history", "drama", "military"],
    image: poster("/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg"),
    trailer: "zwhP5b4tD6g",
  },
  {
    id: "cast-away",
    title: "Cast Away",
    year: 2000,
    rating: 7.8,
    duration: "2სთ 23წთ",
    description:
      "თვითმფრინავის კატასტროფის შემდეგ კაცი მარტო რჩება უკაცრიელ კუნძულზე. დაკარგული ცივილიზაციისგან, ის იბრძვის გადარჩენისთვის და საკუთარი თავის ხელახლა აღმოჩენისთვის.",
    keywords: ["lost", "დაკარგვა", "survival", "drama", "island"],
    image: poster("/7lLJgKnAicAcR5UEuo8xhSMj18w.jpg"),
    trailer: "qGuOZPwLayY",
  },
  {
    id: "la-la-land",
    title: "La La Land",
    year: 2016,
    rating: 8.0,
    duration: "2სთ 8წთ",
    description:
      "ჯაზ პიანისტი და მსახიობობის მოსურნე ქალი ლოს-ანჯელესში ერთმანეთს შეუყვარდებათ. სიყვარულის, ოცნებისა და მსხვერპლის მუსიკალური ისტორია.",
    keywords: ["love", "romance", "სიყვარული", "music", "musical", "drama"],
    image: poster("/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"),
    trailer: "0pdqf4P9MB8",
  },
  {
    id: "the-notebook",
    title: "The Notebook",
    year: 2004,
    rating: 7.8,
    duration: "2სთ 3წთ",
    description:
      "ღარიბი ბიჭისა და მდიდარი გოგოს სიყვარულის ისტორია, რომელსაც დრო, ომი და საზოგადოება ცდილობს გათიშოს. მარადიული სიყვარულის შესახებ დაუვიწყარი მოთხრობა.",
    keywords: ["love", "romance", "სიყვარული", "drama"],
    image: poster("/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg"),
    trailer: "FC6biTjEyZw",
  },
  {
    id: "1917",
    title: "1917",
    year: 2019,
    rating: 8.2,
    duration: "1სთ 59წთ",
    description:
      "პირველი მსოფლიო ომის დროს ორ ახალგაზრდა ჯარისკაცს ავალებენ საშიშ მისიას — გადასცენ შეტყობინება, რომელიც ათასობით სიცოცხლეს გადაარჩენს. ერთი დაუსრულებელი კადრით გადაღებული ომის ეპოსი.",
    keywords: ["war", "ომი", "history", "drama", "military"],
    image: poster("/iZf0KyrE25z1sage4SYFLCCrMi9.jpg"),
    trailer: "YqNYrYUiMfg",
  },
  {
    id: "eternal-sunshine",
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    rating: 8.3,
    duration: "1სთ 48წთ",
    description:
      "წყვილი გადაწყვეტს, წაშალონ ერთმანეთის მოგონებები განშორების შემდეგ. მაგრამ პროცესის დროს კაცი ხვდება, რომ არ სურს დაკარგოს სიყვარული, რომელიც ერთხელ ჰქონდა.",
    keywords: ["love", "სიყვარული", "lost", "დაკარგვა", "sci-fi", "drama"],
    image: poster("/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg"),
    trailer: "07-QBnEkgXU",
  },
  {
    id: "forrest-gump",
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    duration: "2სთ 22წთ",
    description:
      "მარტივი გულის მქონე კაცი უნებურად ხდება მე-20 საუკუნის უდიდესი მოვლენების მონაწილე — ომიდან სიყვარულამდე. ცხოვრების, დანაკარგისა და იმედის შთამბეჭდავი ისტორია.",
    keywords: ["love", "სიყვარული", "war", "ომი", "life", "drama"],
    image: poster("/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"),
    trailer: "bLvqoHBptjg",
  },
];

export const getMovieById = (id: string) =>
  movies.find((movie) => movie.id === id);
