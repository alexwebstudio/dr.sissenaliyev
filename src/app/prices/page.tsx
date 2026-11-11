import type { Metadata } from "next";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { PriceTable } from "@/components/ui/PriceTable";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { priceNote, prices } from "@/content/prices";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Цены на стоматологию, ${site.city}`,
  description: `Полный прайс ${site.brand}: хирургия, имплантация, детская и терапевтическая стоматология, ортопедия, брекеты, рентгенология и 3D КТ. Консультация врача — бесплатно.`,
  path: "/prices",
});

export default function PricesPage() {
  const total = prices.reduce((sum, section) => sum + section.items.length, 0);

  return (
    <>
      <PageHero title="Прайс *клиники*" lead={`${priceNote} Позиций в прайсе: ${total}.`} crumbs={[{ name: "Цены", path: "/prices" }]}>
        <Button booking arrow variant="light">
          Записаться на консультацию
        </Button>
      </PageHero>

      <SectionCard>
        {/* Бесплатная консультация — главный плюс прайса. */}
        <Reveal className="mb-8 flex flex-col gap-4 rounded-[18px] bg-tint p-5 sm:flex-row sm:items-center sm:justify-between lg:mb-10 lg:rounded-[22px] lg:p-6">
          <p className="flex items-center gap-3 text-[17px] font-semibold leading-snug lg:text-[19px]">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-accent-press text-white">
              <Check />
            </span>
            Консультация врача — бесплатно
          </p>
          <span className="text-[15px] text-ink-muted">хирургия · ортопедия · детская стоматология</span>
        </Reveal>

        <nav aria-label="Разделы прайса" className="price-nav -mx-[var(--gutter)] mb-10 flex gap-2 overflow-x-auto px-[var(--gutter)] pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {prices.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="inline-flex h-11 flex-none items-center rounded-full border border-line bg-white px-4 text-[14px] font-semibold transition-colors hover:border-accent-press hover:text-accent-press">
              {section.title}
            </a>
          ))}
        </nav>

        <div className="space-y-12 lg:space-y-16">
          {prices.map((section, index) => (
            <Reveal key={section.id}>
              <section id={section.id} className="grid scroll-mt-28 gap-5 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="t-mono !text-[13px] font-bold text-accent">0{index + 1}</span>
                  <h2 className="mt-2 font-display text-[clamp(22px,2.2vw,32px)] font-extrabold uppercase leading-[1.1]">{section.title}</h2>
                  <p className="mt-2 text-[14px] text-ink-muted">Позиций: {section.items.length} · цены в тенге</p>
                </div>
                <div className="lg:col-span-8">
                  <PriceTable items={section.items} caption={`Цены: ${section.title}`} />
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </SectionCard>

      <CtaForm />
    </>
  );
}
