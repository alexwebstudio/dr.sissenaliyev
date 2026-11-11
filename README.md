# dr.Sissenaliyev — сайт семейной стоматологии (Атырау)

Самостоятельный проект на базе дентал-прототипа ЭМАЛЬ: структура и анимации сохранены, заменены бренд, цвета, шрифты, фото и контент. Next.js 16, TypeScript, Tailwind CSS v4, GSAP + Lenis.

```bash
npm install
npm run dev
```

Перед выкладкой: `npm run typecheck` и `npm run build`.

## Что реальное, а что ждёт владельца

| Данные | Статус | Где |
|---|---|---|
| Название, дескриптор, телефон/WhatsApp +7 702 540 9289 | реальные | `src/content/site.ts` |
| Режим работы | реальный, с таблички на входе | `src/content/site.ts` |
| Instagram @dr.sissenaliyev | с таблички на входе; заменить, если владелец даст другую ссылку | `site.instagram` |
| Рейтинг 5.0, 63 отзыва, тексты отзывов | реальные, 2ГИС | `src/content/reviews.ts` |
| 11 врачей, специализация, стаж, фото | реальные, из сторис | `src/content/doctors.ts`, `public/images/doctors/` |
| Прайс | реальный, перенесён 1:1 | `src/content/prices.ts` |
| Адрес, карта | **ПЛЕЙСХОЛДЕР** | `site.address`, `site.mapEmbed` |
| FAQ | **ЗАГЛУШКА** до вопросов из Instagram | `src/content/faq.ts` |
| Домен | **ПЛЕЙСХОЛДЕР** | `site.domain` |
| Политика конфиденциальности | заготовка, согласовать с юристом | `src/app/privacy/page.tsx` |

## Бренд

- Цвета — токены в `src/app/globals.css` (`--brand #5FA9AB`, `--accent #3E8A8D`, мятные подложки). Кнопки и мелкий текст на бирюзе — на `--accent-press #2C7073`, чтобы белый текст держал AA.
- Знак — векторизован из аватарки Instagram: `src/content/brandMark.ts`. Цвет через `currentColor`.
- Шрифты self-hosted в `public/fonts` (OFL): Comfortaa — вордмарк, Montserrat ExtraBold капсом — заголовки, Manrope — текст. В Manrope нет казахских ә ғ қ ң ұ, поэтому стек `Manrope, Montserrat` добирает их из Montserrat.
- Прелоадер — чистый CSS (`Preloader.tsx`): знак рисуется по контуру, орбита, вордмарк, линия загрузки. При `prefers-reduced-motion` — статичный логотип и быстрый fade.

## Фото

Только реальные: 11 врачей (вырезаны из сторис без статус-бара и UI Instagram), 3 фото клиники из 2ГИС (водяной знак обрезан), кадр видеоотзыва (без старого логотипа). Стоковых фото нет; там, где фото не было, — фирменные бирюзовые подложки.

## Заявки

`.env.local`: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`. Без них форма ведёт на `/thanks`, но заявка никуда не уходит.
