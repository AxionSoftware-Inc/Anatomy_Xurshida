export type Accent = "mint" | "blue" | "sand" | "lilac";

export type Lesson = {
  number: number;
  title: string;
  duration: string;
  videoId: string;
  summary: string;
};

export type Resource = {
  kind: "ebook" | "language";
  title: string;
  meta: string;
  href: string;
};

export type Course = {
  slug: string;
  subjectSlug: string;
  subjectName: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  lessonCount: number;
  accent: Accent;
  updated: string;
  lessons: Lesson[];
  resources: Resource[];
};

export type Subject = {
  slug: string;
  name: string;
  code: string;
  symbol: string;
  description: string;
  longDescription: string;
  accent: Accent;
  courseCount: number;
  topicCount: number;
};

export const subjects: Subject[] = [
  { slug: "anatomiya", name: "Anatomiya", code: "ANAT", symbol: "01", description: "Tana tuzilishini tizimlar bo‘yicha aniq va vizual o‘rganing.", longDescription: "Organlar, tizimlar va ularning o‘zaro bog‘liqligini klinik fikrlashga tayanch bo‘ladigan tartibda o‘rganing.", accent: "mint", courseCount: 6, topicCount: 18 },
  { slug: "oftalmologiya", name: "Oftalmologiya", code: "OPHT", symbol: "02", description: "Ko‘rish analizatori va ko‘z kasalliklari haqida asosiy kurslar.", longDescription: "Ko‘z anatomiyasidan tekshiruv asoslarigacha bo‘lgan mavzularni bir tizimda ko‘rib chiqing.", accent: "blue", courseCount: 5, topicCount: 14 },
  { slug: "asab-va-ruhiy-kasalliklar", name: "Asab va ruhiy kasalliklar", code: "NEUR", symbol: "03", description: "Asab tizimi, stress va ruhiy holatlar bo‘yicha izchil darslar.", longDescription: "Asab tizimi faoliyati, simptomlar va ruhiy salomatlikni tushunish uchun soddalashtirilgan o‘quv yo‘li.", accent: "lilac", courseCount: 7, topicCount: 21 },
  { slug: "valeologiya", name: "Valeologiya", code: "VALE", symbol: "04", description: "Sog‘lom turmush va kasalliklarning oldini olish asoslari.", longDescription: "Sog‘liqni saqlash, kundalik odatlar va profilaktik fikrlashni amaliy mavzular orqali o‘rganing.", accent: "sand", courseCount: 4, topicCount: 12 },
];

export const courses: Course[] = [
  {
    slug: "yurak-anatomiyasi", subjectSlug: "anatomiya", subjectName: "Anatomiya", title: "Yurak anatomiyasi", description: "Yurakning tuzilishi, kameralar, klapanlar va qon oqimi yo‘nalishini bir modulda ko‘rib chiqing.", level: "Boshlang‘ich → klinik", duration: "48 daqiqa", lessonCount: 6, accent: "mint", updated: "2026-yil 12-avgust",
    lessons: [
      { number: 1, title: "Yurakning umumiy joylashuvi", duration: "07:20", videoId: "M7lc1UVf-VE", summary: "Yurakning ko‘krak qafasidagi joylashuvi va yo‘nalishlari." },
      { number: 2, title: "Yurak kameralari", duration: "08:45", videoId: "M7lc1UVf-VE", summary: "Bo‘lmachalar va qorinchalarning asosiy vazifalari." },
      { number: 3, title: "Klapanlar tizimi", duration: "07:55", videoId: "M7lc1UVf-VE", summary: "Qon oqimini boshqaradigan klapanlarni farqlash." },
      { number: 4, title: "Koronar qon aylanishi", duration: "09:10", videoId: "M7lc1UVf-VE", summary: "Yurak mushagining qon bilan ta’minlanishi." },
      { number: 5, title: "O‘tkazuvchi tizim", duration: "06:38", videoId: "M7lc1UVf-VE", summary: "Impulsning yurak bo‘ylab tarqalish ketma-ketligi." },
      { number: 6, title: "Klinik bog‘liqlik", duration: "08:12", videoId: "M7lc1UVf-VE", summary: "Tuzilish va keng tarqalgan klinik belgilar o‘rtasidagi aloqa." },
    ],
    resources: [
      { kind: "ebook", title: "Anatomy & Physiology 2e", meta: "Elektron kitob · EN", href: "https://openstax.org/details/books/anatomy-and-physiology-2e" },
      { kind: "language", title: "Heart anatomy lectures", meta: "Boshqa tildagi videolar · EN", href: "https://www.youtube.com/results?search_query=heart+anatomy+lecture" },
    ],
  },
  {
    slug: "koz-anatomiyasi", subjectSlug: "oftalmologiya", subjectName: "Oftalmologiya", title: "Ko‘z anatomiyasi", description: "Ko‘z olmasi, yordamchi apparat va ko‘rish yo‘lining asosiy qismlarini tizimli o‘rganing.", level: "Boshlang‘ich", duration: "42 daqiqa", lessonCount: 5, accent: "blue", updated: "2026-yil 8-avgust",
    lessons: [
      { number: 1, title: "Ko‘z olmasining qavatlari", duration: "08:10", videoId: "M7lc1UVf-VE", summary: "Ko‘z olmasi devorining uchta asosiy qavati." },
      { number: 2, title: "Optik muhitlar", duration: "07:40", videoId: "M7lc1UVf-VE", summary: "Yorug‘likning ko‘z ichidagi yo‘li." },
      { number: 3, title: "To‘r parda", duration: "09:05", videoId: "M7lc1UVf-VE", summary: "Fotoreseptorlar va to‘r pardaning funksional zonalari." },
      { number: 4, title: "Ko‘rish nervi", duration: "08:28", videoId: "M7lc1UVf-VE", summary: "Ko‘rish yo‘lining boshlang‘ich qismi." },
      { number: 5, title: "Tekshiruvga kirish", duration: "09:12", videoId: "M7lc1UVf-VE", summary: "Anatomik bilimni oddiy tekshiruv bilan bog‘lash." },
    ],
    resources: [
      { kind: "ebook", title: "Basic Ophthalmology Notes", meta: "Elektron kitob · EN", href: "https://www.ncbi.nlm.nih.gov/books/" },
      { kind: "language", title: "Eye anatomy explained", meta: "Boshqa tildagi videolar · EN", href: "https://www.youtube.com/results?search_query=eye+anatomy+lecture" },
    ],
  },
  {
    slug: "stress-va-asab-tizimi", subjectSlug: "asab-va-ruhiy-kasalliklar", subjectName: "Asab va ruhiy kasalliklar", title: "Stress va asab tizimi", description: "Stress javobi, asab tizimi va kundalik ruhiy holat o‘rtasidagi bog‘liqlikni tushuning.", level: "Boshlang‘ich", duration: "36 daqiqa", lessonCount: 4, accent: "lilac", updated: "2026-yil 4-avgust",
    lessons: [
      { number: 1, title: "Stress nima?", duration: "08:20", videoId: "M7lc1UVf-VE", summary: "Stressning fiziologik va psixologik ta’rifi." },
      { number: 2, title: "Asab tizimining javobi", duration: "09:15", videoId: "M7lc1UVf-VE", summary: "Organizmning tezkor javob mexanizmi." },
      { number: 3, title: "Uyqu va tiklanish", duration: "08:05", videoId: "M7lc1UVf-VE", summary: "Uyquning asab tizimi uchun tiklovchi roli." },
      { number: 4, title: "Kundalik profilaktika", duration: "10:20", videoId: "M7lc1UVf-VE", summary: "Ruhiy zo‘riqishni kamaytirish uchun oddiy yondashuvlar." },
    ],
    resources: [
      { kind: "ebook", title: "Mental Health Basics", meta: "Elektron kitob · EN", href: "https://www.who.int/health-topics/mental-health" },
      { kind: "language", title: "The nervous system and stress", meta: "Boshqa tildagi videolar · EN", href: "https://www.youtube.com/results?search_query=nervous+system+stress+lecture" },
    ],
  },
];

export const featuredCourses = courses;

export function getSubject(slug: string) {
  return subjects.find((subject) => subject.slug === slug);
}

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getCoursesForSubject(slug: string) {
  return courses.filter((course) => course.subjectSlug === slug);
}
