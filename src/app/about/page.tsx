import type { Metadata } from "next";
import Image from "next/image";
import { CtaForm } from "@/components/home/CtaForm";
import { Tech } from "@/components/home/Tech";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { AnimatedTitle } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `О клинике, ${site.city}`,
  description: `${site.brand} — отбасылық стоматология в Атырау. 11 врачей, 3D КТ в клинике, рейтинг 5.0 в 2ГИС по 63 отзывам.`,
  path: "/about",
});

const figures = [
  { value: `${site.stats.doctors}`, label: "врачей в команде" },
  { value: `${site.stats.chiefExperience}`, label: "лет стажа у главного врача" },
  { value: site.stats.rating.toFixed(1), label: `рейтинг в 2ГИС · ${site.stats.reviews} отзыва` },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Отбасылық *стоматология*"
        lead="Семейная стоматология dr.Sissenaliyev в Атырау: лечим взрослых и детей одной командой."
        crumbs={[{ name: "О клинике", path: "/about" }]}
        image="/images/clinic/facade.jpg"
        imageAlt="Фасад клиники dr.Sissenaliyev с вывеской"
        objectPosition="50% 10%"
      >
        <Button booking arrow variant="light">
          Записаться онлайн
        </Button>
      </PageHero>

      <SectionCard>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-eyebrow mb-4">О нас</p>
            <AnimatedTitle text="Клиника для *всей* семьи" />
            <Reveal delay={0.15} className="t-lead mt-6 max-w-[54ch] text-ink-muted">
              <p>Главный врач — Сисеналиев Айбек, выпускник ЗКГМУ им. Марата Оспанова и магистр медицинских наук. В команде 11 врачей: терапевты, ортопеды, терапевт-ортодонт и хирург-имплантолог.</p>
            </Reveal>
          </div>
          <Reveal group className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {figures.map((item) => (
              <div key={item.label} data-reveal-item="" className="hair-row flex items-baseline justify-between gap-4 py-3">
                <span className="t-stat text-accent-press">{item.value}</span>
                <span className="text-right text-ink-muted">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:gap-4">
          <Reveal className="photo-card aspect-[4/5] sm:aspect-[4/3]">
            <Image src="/images/clinic/reception.jpg" alt="Холл клиники: стойка администратора и неоновый знак-зуб" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-[60%_20%]" />
          </Reveal>
          <Reveal delay={0.08} className="photo-card aspect-[4/5] sm:aspect-[4/3]">
            <Image src="/images/clinic/sign.jpg" alt="Световая вывеска dr.Sissenaliyev над стойкой администратора" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-[50%_38%]" />
          </Reveal>
        </div>
      </SectionCard>

      <Tech id="tech" />

      <CtaForm />
    </>
  );
}
