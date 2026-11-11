import { site } from "@/content/site";
import { hero } from "@/content/copy";
import { cx } from "@/lib/utils";
import { Star } from "./Icons";

export function reviewsWord(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "отзыв";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "отзыва";
  return "отзывов";
}

export function RatingCard({ className }: { className?: string }) {
  return (
    <div className={cx("flex items-center gap-5 rounded-[18px] bg-white/85 p-5 shadow-[var(--shadow-soft)] backdrop-blur lg:rounded-[22px] lg:p-6", className)}>
      <div className="flex items-start gap-1.5">
        {/* Без счётчика: перезапись текста на первом экране сдвигает LCP. */}
        <span className="font-display text-[52px] font-extrabold leading-none text-accent-press">{site.stats.rating.toFixed(1)}</span>
        <Star className="mt-1 text-[#f2b33d]" />
      </div>
      <div className="min-w-0 border-l border-line pl-5">
        <p className="text-[15px] font-semibold leading-snug">{hero.ratingLabel}</p>
        <p className="mt-0.5 flex gap-0.5 text-[#f2b33d]" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} width={14} height={14} />
          ))}
        </p>
        <p className="t-mono mt-1 text-ink-muted">
          {site.stats.reviews} {reviewsWord(site.stats.reviews)}
        </p>
      </div>
    </div>
  );
}
