// РЕАЛЬНАЯ КОМАНДА dr.Sissenaliyev: ФИО, специализация и стаж — из сторис клиники, без изменений.
// Фото вырезаны из тех же сторис (без статус-бара и интерфейса Instagram).

export type Doctor = {
  slug: string;
  name: string;
  /** Для крупного заголовка: *акцент* на фамилии. */
  headline: string;
  role: string;
  experience: string;
  /** Образование — только то, что опубликовала клиника. */
  education: string[];
  serviceSlugs: string[];
  image: string;
  imageAlt: string;
};

function doctor(slug: string, name: string, role: string, experience: string, serviceSlugs: string[], education: string[] = []): Doctor {
  const [first, ...rest] = name.split(" ");
  return {
    slug,
    name,
    headline: `*${first}* ${rest.join(" ")}`.trim(),
    role,
    experience,
    education,
    serviceSlugs,
    image: `/images/doctors/${slug}.jpg`,
    imageAlt: `${name}, ${role.toLowerCase()} клиники dr.Sissenaliyev`,
  };
}

export const doctors: Doctor[] = [
  doctor("sissenaliyev", "Сисеналиев Айбек", "Главный врач", "13 лет", [], [
    "Выпускник Западно-Казахстанского государственного медицинского университета имени Марата Оспанова (ЗКГМУ)",
    "Магистр медицинских наук",
  ]),
  doctor("khisapov", "Хисапов Жандос Калымтаевич", "Врач-стоматолог, терапевт-ортодонт", "8 лет", ["orthodontics", "therapy"]),
  doctor("auezkhanov", "Әуезханов Сырым Рахатұлы", "Врач-ортопед", "6 лет", ["orthopedics"]),
  doctor("madeniyetov", "Мәдениетов Нұрдәулет Бақытжанұлы", "Врач-терапевт", "5 лет", ["therapy"]),
  doctor("anesov", "Әнесов Бекібай Айдынбекұлы", "Врач-терапевт", "5 лет", ["therapy"]),
  doctor("mereke", "Мереке Айдос", "Хирург-имплантолог", "5 лет", ["implantation", "surgery"]),
  doctor("sabitbek", "Сәбитбек Әділет Камалұлы", "Врач-ортопед", "5 лет", ["orthopedics"]),
  doctor("umirzakova", "Умирзакова Елизавета Владимировна", "Стоматолог-терапевт", "5 лет", ["therapy"]),
  doctor("kaliyev", "Калиев Куаныш Ербулатович", "Стоматолог-терапевт", "5 лет", ["therapy"]),
  doctor("ziyapedenova", "Зияпеденова Асылай Бериковна", "Врач-терапевт, ставит брекеты", "2 года", ["therapy", "orthodontics"]),
  doctor("galym", "Ғалым Дамир", "Врач-терапевт", "1 год", ["therapy"]),
];

export function getDoctor(slug: string) {
  return doctors.find((item) => item.slug === slug);
}

export function doctorsFor(serviceSlug: string) {
  return doctors.filter((item) => item.serviceSlugs.includes(serviceSlug));
}
