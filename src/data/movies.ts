export type CategoryKey =
  | "animation"
  | "drama"
  | "romance"
  | "horror"
  | "action"
  | "sci-fi"
  | "war"
  | "comedy";

export interface Category {
  key: CategoryKey;
  label: string;
}

export const categories: Category[] = [
  { key: "animation", label: "მულტფილმები" },
  { key: "drama", label: "დრამა" },
  { key: "romance", label: "სიყვარული" },
  { key: "horror", label: "საშიში" },
  { key: "action", label: "ექშენი" },
  { key: "sci-fi", label: "ფანტასტიკა" },
  { key: "war", label: "ომი" },
  { key: "comedy", label: "კომედია" },
];

export const getCategoryLabel = (key: CategoryKey) =>
  categories.find((c) => c.key === key)?.label ?? key;

export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number;
  duration: string;
  category: CategoryKey;
  description: string;
  keywords: string[];
  image: string;
  /** YouTube video ID used for the embedded trailer */
  trailer: string;
}

const poster = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;

export const movies: Movie[] = [
  // ─────────────── ფანტასტიკა (sci-fi) ───────────────
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    duration: "2სთ 28წთ",
    category: "sci-fi",
    description:
      "გამოცდილი ქურდი, რომელიც სხვათა სიზმრებში იპარება, ბოლო დავალებას იღებს — იდეის დათესვას მიზნის გონებაში. რეალობასა და ილუზიას შორის საზღვარი ქრება და ის კარგავს ორიენტაციას საკუთარ ცნობიერებაში.",
    keywords: ["dream", "სიზმარი", "heist", "lost", "დაკარგვა", "sci-fi", "ფანტასტიკა", "thriller"],
    image: poster("/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"),
    trailer: "YoHD9XEInc0",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    duration: "2სთ 49წთ",
    category: "sci-fi",
    description:
      "როცა დედამიწა კვდება, მამა და ასტრონავტთა ჯგუფი ჭიის ხვრელში მოგზაურობენ კაცობრიობის გადასარჩენად. დაკარგული დროის და დაკარგული ოჯახის ისტორია სივრცისა და სიყვარულის ფონზე.",
    keywords: ["space", "კოსმოსი", "lost", "დაკარგვა", "sci-fi", "ფანტასტიკა", "family", "love"],
    image: poster("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"),
    trailer: "zSWdZVtXT7E",
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    duration: "2სთ 16წთ",
    category: "sci-fi",
    description:
      "ჰაკერი აღმოაჩენს, რომ რეალობა, რომელშიც ცხოვრობს, მანქანების მიერ შექმნილი ილუზიაა. მას ურჩევნია ჭეშმარიტება, რაც არ უნდა მძიმე იყოს, და კაცობრიობის ბრძოლას უერთდება.",
    keywords: ["sci-fi", "ფანტასტიკა", "action", "ექშენი", "cyberpunk", "reality"],
    image: poster("/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"),
    trailer: "vKQi3bBA1y8",
  },
  {
    id: "avatar",
    title: "Avatar",
    year: 2009,
    rating: 7.6,
    duration: "2სთ 42წთ",
    category: "sci-fi",
    description:
      "პარაპლეგიკი ჯარისკაცი პლანეტა პანდორაზე იგზავნება, სადაც ავატარის სხეულით ადგილობრივ ხალხს ერწყმის. მალე მას მათი სამყაროს დაცვა უწევს დამპყრობლებისგან.",
    keywords: ["sci-fi", "ფანტასტიკა", "adventure", "action", "ექშენი", "alien"],
    image: poster("/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"),
    trailer: "5PSNL1qE6VY",
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    duration: "2სთ 44წთ",
    category: "sci-fi",
    description:
      "ახალგაზრდა ბლეიდ რანერი აღმოაჩენს დიდი ხნის დაფარულ საიდუმლოს, რომელსაც შეუძლია საზოგადოების ქაოსში ჩაძირვა. მისი ძიება მას დაკარგული გმირის კვალზე მიიყვანს.",
    keywords: ["sci-fi", "ფანტასტიკა", "noir", "future", "lost", "დაკარგვა"],
    image: poster("/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"),
    trailer: "gCcx85zbxz4",
  },
  {
    id: "dune",
    title: "Dune",
    year: 2021,
    rating: 8.0,
    duration: "2სთ 35წთ",
    category: "sci-fi",
    description:
      "ნიჭიერი ახალგაზრდა პოლ ატრეიდესი უდაბნო პლანეტა არაკისზე ხვდება, სადაც სამყაროს ყველაზე ძვირფასი რესურსი მოიპოვება. მას ბედი დიდი ბრძოლისკენ უბიძგებს.",
    keywords: ["sci-fi", "ფანტასტიკა", "epic", "desert", "adventure"],
    image: poster("/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"),
    trailer: "8g18jFHCLXk",
  },
  {
    id: "arrival",
    title: "Arrival",
    year: 2016,
    rating: 7.9,
    duration: "1სთ 56წთ",
    category: "sci-fi",
    description:
      "როცა უცხოპლანეტელთა ხომალდები დედამიწაზე ჩნდება, ლინგვისტი ცდილობს მათ ენას გაუგოს. ამ პროცესში ის დროის აღქმას სრულიად ახლებურად აღიქვამს.",
    keywords: ["sci-fi", "ფანტასტიკა", "alien", "language", "drama"],
    image: poster("/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg"),
    trailer: "tFMo3UJ4B4g",
  },

  // ─────────────── სიყვარული (romance) ───────────────
  {
    id: "titanic",
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    duration: "3სთ 14წთ",
    category: "romance",
    description:
      "სხვადასხვა ფენის ორი ახალგაზრდა უიღბლო გემ ტიტანიკზე ერთმანეთს შეუყვარდებათ. სიყვარულის ისტორია, რომელიც კატასტროფად იქცევა ისტორიაში ცნობილ ღამეს.",
    keywords: ["love", "romance", "სიყვარული", "drama", "tragedy"],
    image: poster("/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"),
    trailer: "kVrqfYjkTdQ",
  },
  {
    id: "la-la-land",
    title: "La La Land",
    year: 2016,
    rating: 8.0,
    duration: "2სთ 8წთ",
    category: "romance",
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
    category: "romance",
    description:
      "ღარიბი ბიჭისა და მდიდარი გოგოს სიყვარულის ისტორია, რომელსაც დრო, ომი და საზოგადოება ცდილობს გათიშოს. მარადიული სიყვარულის შესახებ დაუვიწყარი მოთხრობა.",
    keywords: ["love", "romance", "სიყვარული", "drama"],
    image: poster("/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg"),
    trailer: "FC6biTjEyZw",
  },
  {
    id: "eternal-sunshine",
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    rating: 8.3,
    duration: "1სთ 48წთ",
    category: "romance",
    description:
      "წყვილი გადაწყვეტს, წაშალონ ერთმანეთის მოგონებები განშორების შემდეგ. მაგრამ პროცესის დროს კაცი ხვდება, რომ არ სურს დაკარგოს სიყვარული, რომელიც ერთხელ ჰქონდა.",
    keywords: ["love", "სიყვარული", "lost", "დაკარგვა", "sci-fi", "drama"],
    image: poster("/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg"),
    trailer: "07-QBnEkgXU",
  },
  {
    id: "pride-and-prejudice",
    title: "Pride & Prejudice",
    year: 2005,
    rating: 7.8,
    duration: "2სთ 9წთ",
    category: "romance",
    description:
      "ჭკვიანი და დამოუკიდებელი ელიზაბეტ ბენეტი და ამაყი მისტერ დარსი ერთმანეთს იჯერებენ სიამაყისა და წინასწარგანწყობის მიღმა. კლასიკური სიყვარულის ისტორია.",
    keywords: ["love", "romance", "სიყვარული", "drama", "classic"],
    image: poster("/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg"),
    trailer: "cD2i-i0LNIM",
  },

  // ─────────────── მულტფილმები (animation) ───────────────
  {
    id: "toy-story",
    title: "Toy Story",
    year: 1995,
    rating: 8.3,
    duration: "1სთ 21წთ",
    category: "animation",
    description:
      "სათამაშოები ცოცხლდებიან, როცა ადამიანები არ უყურებენ. კოვბოი ვუდი და კოსმონავტი ბაზ ლაითიარი მეგობრდებიან თავგადასავლების შემდეგ.",
    keywords: ["animation", "მულტფილმი", "family", "adventure", "comedy"],
    image: poster("/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"),
    trailer: "v-PjgYDrg70",
  },
  {
    id: "the-lion-king",
    title: "The Lion King",
    year: 1994,
    rating: 8.5,
    duration: "1სთ 28წთ",
    category: "animation",
    description:
      "ლომის ბელი სიმბა უნდა შეეჯახოს მამის დაკარგვის ტკივილს და დაიბრუნოს კუთვნილი სამეფო. ზრდის, პასუხისმგებლობისა და გამბედაობის ისტორია.",
    keywords: ["animation", "მულტფილმი", "family", "lost", "დაკარგვა", "adventure"],
    image: poster("/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"),
    trailer: "4sj1MT05lAA",
  },
  {
    id: "finding-nemo",
    title: "Finding Nemo",
    year: 2003,
    rating: 8.2,
    duration: "1სთ 40წთ",
    category: "animation",
    description:
      "მოშიშარა თევზი მარლინი მთელ ოკეანეს გადაივლის დაკარგული შვილის, ნემოს საპოვნელად. მამობრივი სიყვარულისა და გამბედაობის თბილი ისტორია.",
    keywords: ["animation", "მულტფილმი", "family", "lost", "დაკარგვა", "ocean"],
    image: poster("/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg"),
    trailer: "SPHfeNgogVs",
  },
  {
    id: "up",
    title: "Up",
    year: 2009,
    rating: 8.3,
    duration: "1სთ 36წთ",
    category: "animation",
    description:
      "მოხუცი კარლი ათასობით ბუშტს აბამს სახლზე და ცხოვრების ოცნებისკენ მიფრინავს. გზად ის მარტოობასა და დაკარგულ სიყვარულს პატარა მეგობართან ერთად ამარცხებს.",
    keywords: ["animation", "მულტფილმი", "family", "adventure", "love", "lost", "დაკარგვა"],
    image: poster("/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg"),
    trailer: "F2bk_9T482g",
  },
  {
    id: "frozen",
    title: "Frozen",
    year: 2013,
    rating: 7.4,
    duration: "1სთ 42წთ",
    category: "animation",
    description:
      "პრინცესა ანა უშიშარი გულით ეძებს დას ელზას, რომლის ჯადოსნურმა ძალამ სამეფო მარადიულ ზამთარში ჩააგდო. დობის სიყვარულის ისტორია.",
    keywords: ["animation", "მულტფილმი", "family", "musical", "love"],
    image: poster("/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg"),
    trailer: "TbQm5doF_Uc",
  },
  {
    id: "coco",
    title: "Coco",
    year: 2017,
    rating: 8.4,
    duration: "1სთ 45წთ",
    category: "animation",
    description:
      "ბიჭი მიგელი მიცვალებულთა სამყაროში ხვდება ოჯახის საიდუმლოს გასაგებად და მუსიკის სიყვარულის დასაცავად. ოჯახის, მეხსიერებისა და მუსიკის ისტორია.",
    keywords: ["animation", "მულტფილმი", "family", "music", "love"],
    image: poster("/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"),
    trailer: "Ga6RYejo6Hk",
  },
  {
    id: "shrek",
    title: "Shrek",
    year: 2001,
    rating: 7.9,
    duration: "1სთ 30წთ",
    category: "animation",
    description:
      "მარტოსული ჭაობის ურჩხული შრეკი მოგზაურობს პრინცესა ფიონას გამოსახსნელად. სახუმარო და გულთბილი ისტორია იმაზე, რომ სილამაზე შიგნიდან მოდის.",
    keywords: ["animation", "მულტფილმი", "comedy", "family", "love", "სიყვარული"],
    image: poster("/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"),
    trailer: "CwXOrWvPBPk",
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    year: 2001,
    rating: 8.5,
    duration: "2სთ 5წთ",
    category: "animation",
    description:
      "გოგონა ჩიჰირო მოხვდება სულების ჯადოსნურ სამყაროში, სადაც მშობლები ღორებად იქცნენ. მათი გადასარჩენად მას გამბედაობა და სიმტკიცე მართებს.",
    keywords: ["animation", "მულტფილმი", "anime", "fantasy", "adventure"],
    image: poster("/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"),
    trailer: "ByXuk9QqQkk",
  },

  // ─────────────── დრამა (drama) ───────────────
  {
    id: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    duration: "2სთ 22წთ",
    category: "drama",
    description:
      "უდანაშაულოდ გასამართლებული ბანკირი წლების განმავლობაში ინარჩუნებს იმედს ციხის კედლებში. მეგობრობის, თავისუფლებისა და შეურყევლობის ისტორია.",
    keywords: ["drama", "დრამა", "prison", "hope", "friendship"],
    image: poster("/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"),
    trailer: "6hB3S9bIaco",
  },
  {
    id: "the-godfather",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    duration: "2სთ 55წთ",
    category: "drama",
    description:
      "მაფიის კლანის დაბერებული ბელადი ძალაუფლებას ვაჟს გადასცემს. ოჯახის, ერთგულებისა და ძალაუფლების ეპიკური ისტორია.",
    keywords: ["drama", "დრამა", "crime", "family", "mafia"],
    image: poster("/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"),
    trailer: "sY1S34973zA",
  },
  {
    id: "forrest-gump",
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    duration: "2სთ 22წთ",
    category: "drama",
    description:
      "მარტივი გულის მქონე კაცი უნებურად ხდება მე-20 საუკუნის უდიდესი მოვლენების მონაწილე — ომიდან სიყვარულამდე. ცხოვრების, დანაკარგისა და იმედის შთამბეჭდავი ისტორია.",
    keywords: ["love", "სიყვარული", "war", "ომი", "life", "drama", "დრამა"],
    image: poster("/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"),
    trailer: "bLvqoHBptjg",
  },
  {
    id: "cast-away",
    title: "Cast Away",
    year: 2000,
    rating: 7.8,
    duration: "2სთ 23წთ",
    category: "drama",
    description:
      "თვითმფრინავის კატასტროფის შემდეგ კაცი მარტო რჩება უკაცრიელ კუნძულზე. დაკარგული ცივილიზაციისგან, ის იბრძვის გადარჩენისთვის და საკუთარი თავის ხელახლა აღმოჩენისთვის.",
    keywords: ["lost", "დაკარგვა", "survival", "drama", "დრამა", "island"],
    image: poster("/7lLJgKnAicAcR5UEuo8xhSMj18w.jpg"),
    trailer: "qGuOZPwLayY",
  },
  {
    id: "fight-club",
    title: "Fight Club",
    year: 1999,
    rating: 8.4,
    duration: "2სთ 19წთ",
    category: "drama",
    description:
      "უძილობით დაქანცული ოფისის თანამშრომელი ჰარიზმატულ ტაილერ დერდენს ხვდება და მიწისქვეშა კლუბს ქმნიან. თვითდაკარგვისა და იდენტობის ბნელი ისტორია.",
    keywords: ["drama", "დრამა", "thriller", "lost", "დაკარგვა", "psychological"],
    image: poster("/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"),
    trailer: "qtRKdVHc-cE",
  },
  {
    id: "the-green-mile",
    title: "The Green Mile",
    year: 1999,
    rating: 8.6,
    duration: "3სთ 9წთ",
    category: "drama",
    description:
      "სიკვდილმისჯილთა ბლოკის ზედამხედველი ხვდება პატიმარს, რომელსაც უჩვეულო, სასწაულებრივი ძალა აქვს. თანაგრძნობის, სამართლიანობისა და ადამიანურობის ისტორია.",
    keywords: ["drama", "დრამა", "prison", "supernatural", "emotional"],
    image: poster("/velWPhVMQeQKcxggNEU8YmIo52R.jpg"),
    trailer: "Ki4haFrqSrw",
  },
  {
    id: "joker",
    title: "Joker",
    year: 2019,
    rating: 8.4,
    duration: "2სთ 2წთ",
    category: "drama",
    description:
      "უგულებელყოფილი კომიკოსი არტურ ფლეკი ნელ-ნელა ეშვება სიგიჟისა და ძალადობის უფსკრულში. საზოგადოებისგან მიტოვებული ადამიანის ბნელი ფსიქოლოგიური პორტრეტი.",
    keywords: ["drama", "დრამა", "thriller", "crime", "psychological"],
    image: poster("/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"),
    trailer: "zAGVQLHvwOY",
  },

  // ─────────────── საშიში (horror) ───────────────
  {
    id: "the-conjuring",
    title: "The Conjuring",
    year: 2013,
    rating: 7.5,
    duration: "1სთ 52წთ",
    category: "horror",
    description:
      "პარანორმალურ მოვლენათა მკვლევრები ოჯახს ეხმარებიან, რომელსაც ბოროტი სული ტანჯავს განდეგილ ფერმაში. რეალურ მოვლენებზე დაფუძნებული საშინელებათა ისტორია.",
    keywords: ["horror", "საშიში", "supernatural", "thriller", "scary"],
    image: poster("/wVYREutTvI2tmxr6ujrHT704wGF.jpg"),
    trailer: "k10ETZ41q5o",
  },
  {
    id: "it",
    title: "It",
    year: 2017,
    rating: 7.3,
    duration: "2სთ 15წთ",
    category: "horror",
    description:
      "ბავშვთა ჯგუფი დაუპირისპირდება ბოროტ არსებას, რომელიც კლოუნ პენივაიზის სახით მათ შიშებს იკვებება. მეგობრობისა და გამბედაობის საშინელებათა ისტორია.",
    keywords: ["horror", "საშიში", "clown", "thriller", "scary"],
    image: poster("/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg"),
    trailer: "FnCdOQsX5kc",
  },
  {
    id: "the-shining",
    title: "The Shining",
    year: 1980,
    rating: 8.2,
    duration: "2სთ 26წთ",
    category: "horror",
    description:
      "მწერალი ოჯახთან ერთად ზამთრის სეზონზე მიტოვებულ სასტუმროში მუშაობს. იზოლაცია და ბოროტი ძალები მას ნელ-ნელა სიგიჟისკენ უბიძგებს.",
    keywords: ["horror", "საშიში", "psychological", "thriller", "classic"],
    image: poster("/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg"),
    trailer: "S014oGZiSdI",
  },
  {
    id: "a-quiet-place",
    title: "A Quiet Place",
    year: 2018,
    rating: 7.5,
    duration: "1სთ 30წთ",
    category: "horror",
    description:
      "ოჯახი სრულ სიჩუმეში ცხოვრობს, რადგან ხმაზე მონადირე ბრმა არსებები მათ ემუქრებიან. დაძაბულობითა და მშობლური სიყვარულით სავსე საშინელებათა ისტორია.",
    keywords: ["horror", "საშიში", "thriller", "family", "survival"],
    image: poster("/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"),
    trailer: "WR7cc5t7tv8",
  },
  {
    id: "get-out",
    title: "Get Out",
    year: 2017,
    rating: 7.8,
    duration: "1სთ 44წთ",
    category: "horror",
    description:
      "ახალგაზრდა კაცი შეყვარებულის ოჯახს სტუმრობს და თანდათან საშინელ საიდუმლოს აღმოაჩენს. სოციალური თრილერი ბნელი ატმოსფეროთი.",
    keywords: ["horror", "საშიში", "thriller", "mystery", "psychological"],
    image: poster("/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"),
    trailer: "DzfpyUB60YY",
  },

  // ─────────────── ექშენი (action) ───────────────
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    duration: "2სთ 32წთ",
    category: "action",
    description:
      "ბეტმენი ქაოსში ჩაძირულ გოთემს იცავს ჯოკერისგან — გენიოსი კრიმინალისგან, რომელსაც ქალაქის სულის მოსპობა სურს. სიკეთისა და ბოროტების ეპიკური დაპირისპირება.",
    keywords: ["action", "ექშენი", "crime", "superhero", "thriller"],
    image: poster("/qJ2tW6WMUDux911r6m7haRef0WH.jpg"),
    trailer: "EXeTwQWrcwY",
  },
  {
    id: "gladiator",
    title: "Gladiator",
    year: 2000,
    rating: 8.2,
    duration: "2სთ 35წთ",
    category: "action",
    description:
      "მოღალატე იმპერატორის მიერ ღალატში ჩავარდნილი რომაელი გენერალი გლადიატორად იქცევა და შურისძიებას ესწრაფვის. ღირსებისა და გამბედაობის ეპოსი.",
    keywords: ["action", "ექშენი", "history", "epic", "revenge"],
    image: poster("/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"),
    trailer: "owK1qxDselE",
  },
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    duration: "2სთ 0წთ",
    category: "action",
    description:
      "პოსტ-აპოკალიფსურ უდაბნოში მაქსი და მეამბოხე ფურიოსა ტირანს გაურბიან საშიშ დევნაში. დაუსრულებელი ადრენალინითა და მოძრაობით სავსე ექშენი.",
    keywords: ["action", "ექშენი", "post-apocalyptic", "chase", "survival"],
    image: poster("/hA2ple9q4qnwxp3hKVNhroipsir.jpg"),
    trailer: "hEJnMQG9ev8",
  },
  {
    id: "john-wick",
    title: "John Wick",
    year: 2014,
    rating: 7.4,
    duration: "1სთ 41წთ",
    category: "action",
    description:
      "პენსიაზე გასული კილერი შურისძიების გზას უბრუნდება, როცა კრიმინალები მას ყველაზე ძვირფასს ართმევენ. სტილური და დაუნდობელი ექშენი.",
    keywords: ["action", "ექშენი", "revenge", "thriller", "crime"],
    image: poster("/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"),
    trailer: "C0BMx-qxsP4",
  },

  // ─────────────── ომი (war) ───────────────
  {
    id: "saving-private-ryan",
    title: "Saving Private Ryan",
    year: 1998,
    rating: 8.6,
    duration: "2სთ 49წთ",
    category: "war",
    description:
      "მეორე მსოფლიო ომის დროს ჯარისკაცთა ჯგუფი მიემართება მტრის ხაზების მიღმა, რათა იპოვონ და სახლში დააბრუნონ ერთი ჯარისკაცი. ომის სისასტიკისა და ძმობის ძლიერი ისტორია.",
    keywords: ["war", "ომი", "history", "drama", "military"],
    image: poster("/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg"),
    trailer: "zwhP5b4tD6g",
  },
  {
    id: "1917",
    title: "1917",
    year: 2019,
    rating: 8.2,
    duration: "1სთ 59წთ",
    category: "war",
    description:
      "პირველი მსოფლიო ომის დროს ორ ახალგაზრდა ჯარისკაცს ავალებენ საშიშ მისიას — გადასცენ შეტყობინება, რომელიც ათასობით სიცოცხლეს გადაარჩენს. ერთი დაუსრულებელი კადრით გადაღებული ომის ეპოსი.",
    keywords: ["war", "ომი", "history", "drama", "military"],
    image: poster("/iZf0KyrE25z1sage4SYFLCCrMi9.jpg"),
    trailer: "YqNYrYUiMfg",
  },

  // ─────────────── კომედია (comedy) ───────────────
  {
    id: "the-grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.1,
    duration: "1სთ 39წთ",
    category: "comedy",
    description:
      "ლეგენდარული სასტუმროს კონსიერჟი და მისი ახალგაზრდა შეგირდი ძვირფასი ნახატის ქურდობასა და ოჯახური მემკვიდრეობის ბრძოლაში ეხვევიან. ფერადოვანი და ესთეტიკური კომედია.",
    keywords: ["comedy", "კომედია", "adventure", "quirky", "drama"],
    image: poster("/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg"),
    trailer: "1Fg5iWmQjwk",
  },
];

export const getMovieById = (id: string) =>
  movies.find((movie) => movie.id === id);

export const getMoviesByCategory = (key: CategoryKey) =>
  movies.filter((movie) => movie.category === key);
