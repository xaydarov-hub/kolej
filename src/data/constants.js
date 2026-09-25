// Site-wide constants
export const SITE_NAME = "Qo'qon shahar 2-son texnikumi";
export const SITE_NAME_SHORT = "2-son texnikum";
export const SITE_TAGLINE = "Kelajak kasbingizni biz bilan boshlang";
export const SITE_DESCRIPTION =
  "Zamonaviy ta'lim, amaliy bilim va kelajak uchun mustahkam poydevor.";

// Contact info
export const CONTACT_INFO = {
  phone: "+998 73 544 00 00",
  phone2: "+998 73 544 00 01",
  email: "info@texnikum2.uz",
  address: "O'zbekiston, Qo'qon shahar, Yengi Hayot ko'chasi, 45",
  workingHours: {
    weekdays: "Dushanba - Juma: 08:00 - 17:00",
    saturday: "Shanba: 09:00 - 13:00",
    sunday: "Yakshanba: Dam olish kuni",
  },
  telegram: "https://t.me/texnikum2qoqon",
  instagram: "https://instagram.com/texnikum2qoqon",
  facebook: "https://facebook.com/texnikum2qoqon",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.0!2d70.9406!3d40.5283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMxJzQxLjkiTiA3MMKwNTYnMjYuMiJF!5e0!3m2!1suz!2suz!4v1234567890",
};

// Statistics
export const STATISTICS = [
  {
    id: "students",
    value: 500,
    suffix: "+",
    labelKey: "stats.students",
    icon: "Users",
  },
  {
    id: "teachers",
    value: 20,
    suffix: "+",
    labelKey: "stats.teachers",
    icon: "UserCheck",
  },
  {
    id: "directions",
    value: 10,
    suffix: "+",
    labelKey: "stats.directions",
    icon: "BookOpen",
  },
  {
    id: "experience",
    value: 30,
    suffix: "+",
    labelKey: "stats.experience",
    icon: "Award",
  },
];

// Official 2026-2027 education directions
export const DIRECTIONS_DATA = [
  {
    id: "axborot-xavfsizligi",
    icon: "ShieldCheck",
    name: "50610301 - Axborot xavfsizligi",
    description: "11-sinf bitiruvchilari va 11-sinf negizida hujjati borlar uchun. Grand, kunduzgi ta'lim shakli.",
    duration: "2 yil",
    qualification: "Grand, kunduzgi",
    category: "11-sinf",
  },
  {
    id: "kompyuter-injiniringi",
    icon: "Monitor",
    name: "50610401 - Kompyuter injiniring",
    description: "11-sinf bitiruvchilari va 11-sinf negizida hujjati borlar uchun. Grand, dual ta'lim shakli.",
    duration: "2 yil",
    qualification: "Grand, dual",
    category: "11-sinf",
  },
  {
    id: "avtomobillar-servisi",
    icon: "Truck",
    name: "30711605 - Avtomobillar servisi",
    description: "9-sinf bitiruvchilari uchun. Dual va kunduzgi ta'lim shakli. Bitiruvchilarga B yoki BC toifali haydovchilik kvalifikatsiyasi beriladi.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
  {
    id: "tekstil-galantereya",
    icon: "Scissors",
    name: "30720433 - Tekstil-galantereya buyumlarini to'quvchisi",
    description: "9-sinf bitiruvchilari uchun. Dual va kunduzgi ta'lim shakli.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
  {
    id: "sartarosh-modeler",
    icon: "Scissors",
    name: "31010202 - Sartarosh (modeler)",
    description: "9-sinf bitiruvchilari uchun. Dual va kunduzgi ta'lim shakli.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
  {
    id: "moda-tikuv",
    icon: "Shirt",
    name: "30720436 - Moda va tikuv ishlab chiqarish texnologiyasi",
    description: "9-sinf bitiruvchilari uchun. Dual va kunduzgi ta'lim shakli.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
  {
    id: "grafik-dizayn",
    icon: "Palette",
    name: "30610105 - Grafik va dizayn texnologiyasi",
    description: "9-sinf bitiruvchilari uchun. Ta'lim shakli: dual va kunduzgi.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
  {
    id: "toqimachilik-jihozlari",
    icon: "Settings",
    name: "30720430 - To'qimachilik ishlab chiqarish jihozlariga texnik xizmat ko'rsatish va ta'mirlash",
    description: "9-sinf bitiruvchilari uchun. Ta'lim shakli: dual va kunduzgi.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
  {
    id: "zargar",
    icon: "Gem",
    name: "31010802 - Zargar",
    description: "9-sinf bitiruvchilari uchun. Ta'lim shakli: dual va kunduzgi.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
  {
    id: "it-dasturchi",
    icon: "Code2",
    name: "30610203 - IT Dasturchi",
    description: "9-sinf bitiruvchilari uchun. Ta'lim shakli: dual va kunduzgi.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
  {
    id: "agro-dron-operatori",
    icon: "Drone",
    name: "30810106 - Agro-dron operatori",
    description: "9-sinf bitiruvchilari uchun. Ta'lim shakli: dual va kunduzgi.",
    duration: "2 yil",
    qualification: "Dual va kunduzgi",
    category: "9-sinf",
  },
];

// Teachers static data (fallback)
export const TEACHERS_DATA = [
  {
    id: "1",
    name: "Karimov Behruz Nematovich",
    position: "Direktor",
    subject: "Boshqaruv",
    experience: "20+ yil",
    image: null,
  },
  {
    id: "2",
    name: "Rahimova Dilnoza Abdullayevna",
    position: "O'quv ishlari bo'yicha direktor o'rinbosari",
    subject: "Pedagogika",
    experience: "15+ yil",
    image: null,
  },
  {
    id: "3",
    name: "Toshmatov Sardor Yusupovich",
    position: "Informatika o'qituvchisi",
    subject: "Informatika va dasturlash",
    experience: "10+ yil",
    image: null,
  },
  {
    id: "4",
    name: "Xoliqova Mahbuba Rustamovna",
    position: "Iqtisodiyot o'qituvchisi",
    subject: "Iqtisodiyot va buxgalteriya",
    experience: "12+ yil",
    image: null,
  },
  {
    id: "5",
    name: "Mirzayev Akbar Hamidovich",
    position: "Matematika o'qituvchisi",
    subject: "Matematika va fizika",
    experience: "18+ yil",
    image: null,
  },
  {
    id: "6",
    name: "Qodirov Mansur Davlatovich",
    position: "Qurilish fanlari o'qituvchisi",
    subject: "Qurilish va loyihalash",
    experience: "8+ yil",
    image: null,
  },
];

// Admission documents
export const ADMISSION_DOCUMENTS = [
  { id: 1, icon: "FileText", textKey: "admission.docs.passport" },
  { id: 2, icon: "FileText", textKey: "admission.docs.diploma" },
  { id: 3, icon: "Image", textKey: "admission.docs.photo" },
  { id: 4, icon: "FileText", textKey: "admission.docs.medical" },
  { id: 5, icon: "FileText", textKey: "admission.docs.application" },
];

// Admission steps
export const ADMISSION_STEPS = [
  {
    id: 1,
    icon: "ClipboardList",
    titleKey: "admission.step1.title",
    descKey: "admission.step1.desc",
  },
  {
    id: 2,
    icon: "Upload",
    titleKey: "admission.step2.title",
    descKey: "admission.step2.desc",
  },
  {
    id: 3,
    icon: "FileCheck",
    titleKey: "admission.step3.title",
    descKey: "admission.step3.desc",
  },
  {
    id: 4,
    icon: "CheckCircle",
    titleKey: "admission.step4.title",
    descKey: "admission.step4.desc",
  },
];

// FAQ
export const ADMISSION_FAQ = [
  {
    id: 1,
    questionKey: "admission.faq.q1",
    answerKey: "admission.faq.a1",
    question: "Qabul qachon boshlanadi?",
    answer:
      "Qabul har yili 1-iyuldan boshlanib, 25-avgustgacha davom etadi. Hujjatlar qabul qilish vaqti 08:00 dan 17:00 gacha.",
  },
  {
    id: 2,
    questionKey: "admission.faq.q2",
    answerKey: "admission.faq.a2",
    question: "Qanday ta'lim shakllarida o'qish mumkin?",
    answer:
      "Texnikumda kunduzgi va sirtqi ta'lim shakllari mavjud. Kunduzgi ta'lim muddati 3 yil, sirtqi ta'lim - 3.5 yil.",
  },
  {
    id: 3,
    questionKey: "admission.faq.q3",
    answerKey: "admission.faq.a3",
    question: "Talabalar yotoqxonasi bormi?",
    answer:
      "Ha, texnikumda talabalar yotoqxonasi mavjud. Yotoqxonaga joylashtirish uchun ariza topshirish talab etiladi.",
  },
  {
    id: 4,
    questionKey: "admission.faq.q4",
    answerKey: "admission.faq.a4",
    question: "O'qish narxi qancha?",
    answer:
      "Davlat granti asosida o'qish bepul. Shartnoma asosida o'qish narxlari yo'nalishga qarab farq qiladi.",
  },
  {
    id: 5,
    questionKey: "admission.faq.q5",
    answerKey: "admission.faq.a5",
    question: "Diplom qanday tan olinadi?",
    answer:
      "Texnikum diplomlari O'zbekiston Respublikasi tomonidan tan olingan. Mezxoriy bitiruvchilarga diplom beriladi.",
  },
];

// Gallery categories
export const GALLERY_CATEGORIES = [
  { id: "all", labelKey: "gallery.all" },
  { id: "campus", labelKey: "gallery.campus" },
  { id: "events", labelKey: "gallery.events" },
  { id: "labs", labelKey: "gallery.labs" },
  { id: "sports", labelKey: "gallery.sports" },
  { id: "graduation", labelKey: "gallery.graduation" },
];

// Supported languages
export const LANGUAGES = [
  { code: "uz", label: "UZ", name: "O'zbek" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "en", label: "EN", name: "English" },
];

// Default language
export const DEFAULT_LANGUAGE = "uz";

// Firebase collections
export const COLLECTIONS = {
  NEWS: "news",
  DIRECTIONS: "directions",
  GALLERY: "gallery",
  TEACHERS: "teachers",
  ADMISSIONS: "admissions",
  SETTINGS: "settings",
};

// Page meta
export const PAGE_META = {
  home: {
    title: "Bosh sahifa",
    description:
      "Qo'qon shahar 2-son texnikumi - zamonaviy ta'lim va professional kasbiy tayyorgarlik.",
  },
  about: {
    title: "Biz haqimizda",
    description:
      "Texnikum tarixi, missiyasi, maqsadlari va rahbariyati haqida ma'lumot.",
  },
  directions: {
    title: "Ta'lim yo'nalishlari",
    description:
      "Texnikumda mavjud barcha ta'lim yo'nalishlari va ixtisosliklar.",
  },
  students: {
    title: "O'quvchilar",
    description: "O'quvchi hayoti, imkoniyatlar va yutuqlar haqida.",
  },
  news: {
    title: "Yangiliklar",
    description: "Texnikumdagi so'nggi yangiliklar va tadbirlar.",
  },
  gallery: {
    title: "Galereya",
    description: "Texnikum hayotidan fotosurat va videolar.",
  },
  contact: {
    title: "Aloqa",
    description: "Texnikum bilan bog'lanish uchun aloqa ma'lumotlari.",
  },
  admission: {
    title: "Qabul",
    description:
      "Texnikumga qabul haqida ma'lumot, hujjatlar va ariza topshirish.",
  },
};
