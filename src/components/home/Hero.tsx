import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { hero } from "@/content/copy";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Button } from "@/components/ui/Button";
import { AnimatedTitle } from "@/components/ui/Heading";
import { Mono } from "@/components/ui/Mono";
import { PillLabel } from "@/components/ui/PillLabel";
import { RatingCard } from "@/components/ui/RatingCard";
import { Reveal } from "@/components/ui/Reveal";
import { Swirl } from "@/components/ui/Swirl";

export function Hero() {
  const { photos, labels } = hero;

  return (
    <section className="section-card sky page-top relative !pb-6 lg:!pb-8" data-tone="sky" data-clip="true">
      {/* Настроение их сторис: небо с облаками и мягкие бирюзовые завихрения. */}
      <span aria-hidden="true" className="cloud left-[52%] top-[14%] h-[90px] w-[260px] opacity-80 lg:h-[130px] lg:w-[420px]" />
      <span aria-hidden="true" className="cloud -left-16 bottom-[18%] h-[80px] w-[240px] opacity-70" />
      <Swirl className="swirl -right-[30%] -top-[10%] w-[120%] opacity-[0.22] lg:-right-[8%] lg:w-[70%]" />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal instant>
            <Mono className="mb-5 block !text-[14px] font-semibold text-accent-press">{hero.stamp}</Mono>
          </Reveal>
          <AnimatedTitle as="h1" text={hero.title} />
          <Reveal instant delay={0.15} className="t-lead mt-6 max-w-[46ch] text-ink-muted">
            <p>{hero.subtitle}</p>
          </Reveal>
          <Reveal instant delay={0.2} className="mt-7 flex flex-wrap gap-3">
            <Button booking arrow className="w-full sm:w-auto">
              {hero.primary}
            </Button>
            <Button href="/prices" variant="light" className="w-full sm:w-auto">
              {hero.secondary}
            </Button>
          </Reveal>
          <Reveal instant delay={0.28} className="mt-8 max-w-[440px]">
            <RatingCard />
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:col-span-6 lg:gap-4">
          <Link href="/about" className="group photo-card col-span-2 aspect-[4/3] sm:aspect-[16/10]">
            <Image src={photos.clinic.src} alt={photos.clinic.alt} fill priority quality={75} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[50%_6%]" />
            <PillLabel className="absolute bottom-3 left-3 z-10">{labels.clinic}</PillLabel>
            <span className="absolute bottom-3 right-3 z-10">
              <ArrowButton />
            </span>
          </Link>
          <Link href="/about" className="group photo-card aspect-square">
            <Image src={photos.scan.src} alt={photos.scan.alt} fill quality={70} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-[60%_18%]" />
            <PillLabel className="absolute bottom-3 left-3 z-10">{labels.scan}</PillLabel>
          </Link>
          <Link href="/about" className="group photo-card aspect-square">
            <Image src={photos.room.src} alt={photos.room.alt} fill quality={70} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-[50%_36%]" />
            <PillLabel className="absolute bottom-3 left-3 z-10">{labels.room}</PillLabel>
          </Link>
        </div>
      </div>

      <Reveal instant delay={0.3} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[rgb(62_138_141/0.25)] pt-5 lg:mt-8">
        {hero.params.map((param, index) => (
          <Fragment key={param}>
            {index > 0 && (
              <span aria-hidden="true" className="t-mono text-accent">
                ·
              </span>
            )}
            <Mono className="font-semibold text-ink">{param}</Mono>
          </Fragment>
        ))}
      </Reveal>
    </section>
  );
}
