// РЕАЛЬНЫЙ ПРАЙС dr.Sissenaliyev — перенесён 1:1 со сторис клиники, цены в тенге.
// price: null — бесплатно; priceTo — верхняя граница диапазона.

import { formatAmount } from "./site";

export type PriceItem = { name: string; price: number | null; priceTo?: number };
export type PriceSection = { id: string; title: string; note?: string; items: PriceItem[] };

export const priceNote = "Консультация врача — бесплатно. Цены в тенге, по прайсу клиники.";

const free: PriceItem = { name: "Консультация врача", price: null };

export const prices: PriceSection[] = [
  {
    id: "surgery",
    title: "Хирургическая стоматология",
    items: [
      free,
      { name: "Удаление молочного зуба (простое)", price: 10000 },
      { name: "Удаление молочного зуба (сложное)", price: 12000 },
      { name: "Удаление однокорневого зуба", price: 14000 },
      { name: "Удаление многокорневого зуба", price: 18000 },
      { name: "Сложное удаление зуба", price: 20000, priceTo: 25000 },
      { name: "Удаление зуба мудрости", price: 18000 },
      { name: "Удаление зуба мудрости (ретинированный, полуретинированный, дистопированный)", price: 29000, priceTo: 35000 },
      { name: "Удаление пародонтозного зуба", price: 10000, priceTo: 12000 },
      { name: "Удаление зубов в гайморовой пазухе", price: 70000 },
      { name: "Удаление резорцин-формалиновых зубов", price: 24000 },
      { name: "Анестезия", price: 3500 },
      { name: "Наложение шва", price: 3500 },
      { name: "Иссечение капюшона", price: 6000, priceTo: 9000 },
      { name: "Резекция верхушки однокорневого зуба", price: 47000 },
      { name: "Резекция верхушки многокорневого зуба", price: 70000 },
      { name: "Дренаж", price: 3500 },
      { name: "Лечение альвеолита", price: 21000 },
      { name: "Удаление радикулярной кисты", price: 18000 },
      { name: "Укорочение уздечки языка, губ", price: 24000 },
      { name: "Углубление преддверия полости рта", price: 18000 },
      { name: "Пересадка свободного соединительно-тканного трансплантата", price: 35000 },
      { name: "Апикальная хирургия", price: 35000 },
      { name: "Синус-лифтинг", price: 350000 },
      { name: "Искусственная кость", price: 175000 },
      { name: "Имплантация зуба 1 шт (без коронки)", price: 128000 },
      { name: "Формирователь десны", price: 29000 },
      { name: "Абатмент цементный", price: 41000 },
      { name: "Аутотрансплантация", price: 105000 },
      { name: "Периостотомия", price: 18000 },
      { name: "Реплантация", price: 81000 },
      { name: "Киста для декомпрессии", price: 81000 },
      { name: "Снятие шин", price: 30000 },
    ],
  },
  {
    id: "kids",
    title: "Детская терапевтическая стоматология",
    items: [
      free,
      { name: "Кариес молочного зуба", price: 19000 },
      { name: "Пульпит молочного зуба", price: 22000 },
      { name: "Периодонтит молочного зуба", price: 26000 },
    ],
  },
  {
    id: "kids-permanent",
    title: "Лечение постоянных зубов (до 15 лет)",
    items: [
      { name: "Поверхностный кариес постоянного зуба", price: 24000 },
      { name: "Средний кариес постоянного зуба", price: 27000 },
      { name: "Глубокий кариес постоянного зуба", price: 29000 },
      { name: "Лечение пульпита и периодонтита", price: 34000 },
    ],
  },
  {
    id: "therapy",
    title: "Терапевтическая стоматология",
    items: [
      { name: "Чистка зубов ультразвуковым аппаратом (2 этап)", price: 22000 },
      { name: "Чистка зубов аппаратом «AIR FLOW» (3 этап)", price: 25000 },
      { name: "Лечение заболеваний слизистой полости рта и пародонта", price: 3500 },
      { name: "Поверхностный кариес постоянного зуба", price: 24000 },
      { name: "Средний кариес постоянного зуба", price: 27000 },
      { name: "Глубокий кариес постоянного зуба", price: 29000 },
      { name: "Пульпит однокорневого зуба", price: 35000 },
      { name: "Пульпит двухкорневого зуба", price: 38000 },
      { name: "Пульпит многокорневого зуба", price: 42000 },
      { name: "Периодонтит однокорневого зуба", price: 43000 },
      { name: "Периодонтит двухкорневого зуба", price: 45000 },
      { name: "Периодонтит многокорневого зуба", price: 49000 },
      { name: "Депульпирование однокорневого зуба", price: 33000 },
      { name: "Депульпирование двух- и многокорневого зуба", price: 36000 },
      { name: "Замена пломбы", price: 31000 },
      { name: "Наращивание зуба под коронку", price: 31000 },
      { name: "Восстановление коронковой части (ранее депульпированного)", price: 31000 },
    ],
  },
  {
    id: "orthopedics",
    title: "Ортопедическая стоматология",
    items: [
      free,
      { name: "Микропротез", price: 29000 },
      { name: "Металлокерамическая коронка 1 ед.", price: 35000 },
      { name: "Циркониевая коронка 1 ед.", price: 70000 },
      { name: "Циркониевая коронка 1 ед.", price: 90000 },
      { name: "Циркониевая коронка 1 ед.", price: 120000 },
      { name: "Протезирование зубов (1 челюсть)", price: 47000 },
      { name: "«BIO DENTA PLAST» протез (1 челюсть)", price: 105000 },
      { name: "Вакуумный протез (1 челюсть)", price: 100000 },
      { name: "Нейлоновый протез", price: 105000 },
      { name: "Бюгельный протез из металла с аттачменами (1 челюсть)", price: 163000 },
      { name: "Цельнолитая коронка", price: 18000 },
      { name: "Временная коронка", price: 24000 },
      { name: "Снятие коронки", price: 3500 },
      { name: "Снятие слепка", price: 12000 },
      { name: "Починка протеза", price: 6000 },
      { name: "Приварка протеза (1 челюсть)", price: 6000 },
      { name: "Коррекция протеза", price: 2000 },
      { name: "Индивидуальная ложка (1 челюсть)", price: 18000 },
      { name: "Фиксация коронки", price: 6000 },
      { name: "Имплантация зуба (без коронки)", price: 128000 },
      { name: "Коронка диоксид циркония на импланте 1 ед", price: 128000 },
      { name: "Металлокерамические коронки ALL ON 4 (10–12 ед)", price: 900000 },
      { name: "Циркониевые коронки ZRO2 ALL ON 4 (10–12 ед)", price: 1100000 },
      { name: "Металлокерамические коронки MKK ALL ON 6 (12–14 ед)", price: 1100000 },
      { name: "Циркониевые коронки ZRO2 ALL ON 6 (12–14 ед)", price: 1400000 },
      { name: "Брекет (1 челюсть)", price: 150000 },
      { name: "Коррекция брекета", price: 5000 },
    ],
  },
  {
    id: "retreatment",
    title: "Зубы, пролеченные в другой клинике",
    items: [
      { name: "Перелечение однокорневого зуба под бинокуляром и микроскопом", price: 60000 },
      { name: "Перелечение двухкорневого зуба под бинокуляром и микроскопом", price: 72000 },
      { name: "Перелечение многокорневого зуба под бинокуляром и микроскопом", price: 78000 },
      { name: "Шинирование зубов", price: 22000 },
    ],
  },
  {
    id: "xray",
    title: "Рентгенология",
    items: [
      { name: "Панорамный снимок (взрослый)", price: 5000 },
      { name: "Панорамный снимок (детский)", price: 3000 },
      { name: "3D КТ", price: 12000 },
      { name: "3D КТ (верхняя челюсть)", price: 6000 },
      { name: "3D КТ (нижняя челюсть)", price: 6000 },
    ],
  },
];

export function priceSection(id: string) {
  const section = prices.find((item) => item.id === id);
  if (!section) throw new Error(`Нет раздела цен: ${id}`);
  return section;
}

/** Позиции из разных разделов прайса, без изменений названий и цен. */
function pick(sectionId: string, names: string[]) {
  const section = priceSection(sectionId);
  return names.map((name) => {
    const item = section.items.find((entry) => entry.name === name);
    if (!item) throw new Error(`Нет позиции «${name}» в разделе ${sectionId}`);
    return item;
  });
}

// Подборки прайса для страниц услуг. Каждая позиция — дословно из прайса выше.
export const servicePrices: Record<string, PriceItem[]> = {
  implantation: [
    ...pick("surgery", ["Консультация врача", "Имплантация зуба 1 шт (без коронки)", "Формирователь десны", "Абатмент цементный", "Синус-лифтинг", "Искусственная кость"]),
    ...pick("orthopedics", [
      "Коронка диоксид циркония на импланте 1 ед",
      "Металлокерамические коронки ALL ON 4 (10–12 ед)",
      "Циркониевые коронки ZRO2 ALL ON 4 (10–12 ед)",
      "Металлокерамические коронки MKK ALL ON 6 (12–14 ед)",
      "Циркониевые коронки ZRO2 ALL ON 6 (12–14 ед)",
    ]),
    ...pick("xray", ["3D КТ"]),
  ],
  orthodontics: [...pick("orthopedics", ["Консультация врача", "Брекет (1 челюсть)", "Коррекция брекета"]), ...pick("xray", ["Панорамный снимок (взрослый)", "Панорамный снимок (детский)"])],
  surgery: priceSection("surgery").items.filter((item) => !/Имплантация|Формирователь|Абатмент|Синус|Искусственная кость/.test(item.name)),
  therapy: [...priceSection("therapy").items, ...priceSection("retreatment").items],
  orthopedics: priceSection("orthopedics").items.filter((item) => !/Брекет|брекета|Имплантация|ALL ON|на импланте/.test(item.name)),
  kids: [...priceSection("kids").items, ...priceSection("kids-permanent").items, ...pick("surgery", ["Удаление молочного зуба (простое)", "Удаление молочного зуба (сложное)"]), ...pick("xray", ["Панорамный снимок (детский)"])],
  xray: priceSection("xray").items,
};

export function minPrice(serviceSlug: string) {
  const items = servicePrices[serviceSlug] ?? [];
  return Math.min(...items.flatMap((item) => (item.price === null ? [] : [item.price])));
}

/** «бесплатно», «18 000» или «20 000–25 000» — без знака валюты. */
export function priceLabel(item: PriceItem) {
  if (item.price === null) return "бесплатно";
  return item.priceTo ? `${formatAmount(item.price)}–${formatAmount(item.priceTo)}` : formatAmount(item.price);
}
