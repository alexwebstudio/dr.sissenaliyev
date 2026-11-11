import Image from "next/image";
import { reviewsBlock } from "@/content/copy";
import { reviews, videoReview } from "@/content/reviews";
import { site } from "@/content/site";
import { AnimatedTitle } from "@/components/ui/Heading";
import { ArrowUpRight, Instagram, Play, Star } from "@/components/ui/Icons";
import { Mono } from "@/components/ui/Mono";
import { reviewsWord } from "@/components/ui/RatingCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";

const stars = (size: number) => Array.from({ length: 5 }, (_, i) => <Star key={i} width={size} height={size} />);

export function Reviews() {
  return (
    <SectionCard tone="sky" clip>
      <span aria-hidden="true" className="cloud right-[6%] top-10 h-[90px] w-[300px] opacity-80" />

      <header className="mb-9 grid gap-6 lg:mb-14 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="t-eyebrow mb-4 !text-accent-press">{reviewsBlock.eyebrow}</p>
          <AnimatedTitle text={reviewsBlock.title} />
          <p data-reveal="" data-blur="" data-delay="0.15" className="t-lead mt-5 max-w-[50ch] text-ink-muted">
            {reviewsBlock.lead}
          </p>
        </div>
        <div data-reveal="" data-delay="0.15" className="lg:col-span-4 lg:justify-self-end">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn w-full lg:w-auto" data-variant="primary">
            <Instagram /> {reviewsBlock.instagram} <ArrowUpRight />
          </a>
        </div>
      </header>

      <div className="grid gap-3 md:grid-cols-3 lg:gap-4">
        {/* Рейтинг — крупно, как показатель доверия. */}
        <Reveal className="on-accent relative isolate flex flex-col justify-between gap-6 overflow-hidden rounded-[18px] p-6 text-white lg:rounded-[22px] lg:p-8" >
          <span aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "var(--bright)" }} />
          <span aria-hidden="true" className="cloud -right-8 top-6 h-[60px] w-[200px] opacity-25" />
          <p className="t-eyebrow !text-on-accent-muted">Рейтинг в 2ГИС</p>
          <div>
            <p className="font-display text-[clamp(84px,9vw,132px)] font-extrabold leading-[0.9]">{site.stats.rating.toFixed(1)}</p>
            <p className="mt-3 flex gap-1 text-[#f6c55a]" role="img" aria-label="Оценка 5 из 5">
              {stars(22)}
            </p>
            <Mono className="mt-3 block !text-[16px] font-semibold">
              {site.stats.reviews} {reviewsWord(site.stats.reviews)} пациентов
            </Mono>
          </div>
        </Reveal>

        {/* Видеоотзыв: превью → Instagram. */}
        <Reveal delay={0.08} className="md:row-span-2">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${videoReview.label}: смотреть в Instagram`} className="group photo-card relative block aspect-[4/5] h-full md:aspect-auto md:min-h-[520px]">
            <Image src={videoReview.poster} alt={videoReview.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-[50%_30%]" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[rgb(20_58_59/0.78)] via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="play-btn relative">
                <Play />
              </span>
            </span>
            <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-white">
              <span>
                <span className="block text-[18px] font-bold leading-tight">{videoReview.label}</span>
                <span className="mt-0.5 flex items-center gap-1.5 text-[14px] opacity-90">
                  <Instagram width={16} height={16} /> {site.instagramHandle}
                </span>
              </span>
              <span className="arrow-btn" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </span>
          </a>
        </Reveal>

        <Reveal group className="contents">
          {reviews.map((review) => (
            <figure key={review.date + review.text.slice(0, 12)} data-reveal-item="" className="flex flex-col justify-between gap-6 rounded-[18px] bg-white p-5 shadow-[var(--shadow-soft)] lg:rounded-[22px] lg:p-6">
              <div>
                <div className="mb-3 flex gap-0.5 text-[#f2b33d]" role="img" aria-label={`Оценка ${review.rating} из 5`}>
                  {stars(16)}
                </div>
                <blockquote className="text-[15.5px] leading-relaxed">{review.text}</blockquote>
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-line pt-3">
                <span className="text-[14px] font-semibold">Пациент клиники</span>
                <Mono className="!text-[13px] text-ink-muted">
                  {review.source} · {review.date}
                </Mono>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </SectionCard>
  );
}
