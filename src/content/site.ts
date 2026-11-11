// ЕДИНАЯ ТОЧКА ПРАВКИ ДАННЫХ КЛИНИКИ dr.Sissenaliyev (Атырау).
// Реальные данные: название, телефон, Instagram, режим работы (табличка на входе), рейтинг 2ГИС.
// ПЛЕЙСХОЛДЕРЫ, которые пришлёт владелец, помечены комментарием «ПЛЕЙСХОЛДЕР».

export const site = {
  brand: "dr.Sissenaliyev",
  descriptor: "отбасылық стоматология",
  descriptorRu: "семейная стоматология",
  slogan: "Семейная стоматология в Атырау",
  domain: "https://dr-sissenaliyev.vercel.app", // ПЛЕЙСХОЛДЕР: заменить на боевой домен
  city: "Атырау",

  phone: "+7 702 540 9289",
  phoneHref: "tel:+77025409289",
  whatsapp: "https://wa.me/77025409289",
  instagram: "https://instagram.com/dr.sissenaliyev", // аккаунт с таблички на входе; владелец может дать другую ссылку
  instagramHandle: "@dr.sissenaliyev",

  address: "", // ПЛЕЙСХОЛДЕР: адрес уточнит владелец
  addressFallback: "адрес уточняется",
  addressRegion: "Атырауская область",
  country: "KZ",
  // С таблички на входе в клинику.
  hours: "Пн–Пт 09:00–18:00, Сб 09:00–17:00, обед 13:00–14:00, Вс — выходной",
  hoursRows: [
    { days: "Понедельник — пятница", time: "09:00–18:00" },
    { days: "Суббота", time: "09:00–17:00" },
    { days: "Обеденный перерыв", time: "13:00–14:00" },
    { days: "Воскресенье", time: "выходной" },
  ],
  hoursSchema: ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00"],
  mapEmbed: "", // ПЛЕЙСХОЛДЕР: iframe 2ГИС, когда будет точный адрес
  map2gis: "https://2gis.kz/atyrau/search/dr.Sissenaliyev",

  developer: { label: "Разработка сайта", name: "AlexWebStudio", href: "https://alexwebstudio.ru" },

  // Рейтинг и число отзывов — карточка клиники в 2ГИС.
  stats: {
    rating: 5.0,
    reviews: 63,
    doctors: 11,
    chiefExperience: 13,
  },
} as const;

const NBSP = " ";

export function formatAmount(value: number) {
  return value.toLocaleString("ru-RU").replace(/\s/g, NBSP);
}

export function formatPrice(value: number) {
  return `${formatAmount(value)}${NBSP}₸`;
}

export function formatCount(value: number) {
  return formatAmount(value);
}

export const addressLine = site.address ? `${site.city}, ${site.address}` : `${site.city}, ${site.addressFallback}`;
