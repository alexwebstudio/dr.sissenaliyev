import type { Metadata } from "next";
import Link from "next/link";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Heading";
import { ArrowRight } from "@/components/ui/Icons";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { QuestionCard, ServiceCard } from "@/components/ui/ServiceCard";
import { minPrice, priceNote } from "@/content/prices";
import { services } from "@/content/services";
import { formatPrice, site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Услуги стоматологии, ${site.city}`,
  description: "Имплантация, брекеты, хирургия, терапия, ортопедия, детская стоматология и 3D КТ в клинике dr.Sissenaliyev. Консультация врача — бесплатно.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Все направления в *одной* клинике" lead="От лечения молочных зубов до имплантации и брекетов. Консультация врача — бесплатно." crumbs={[{ name: "Услуги", path: "/services" }]}>
        <Button booking arrow variant="light">
          Записаться онлайн
        </Button>
        <Button href="/prices" variant="outline-light">
          Смотреть цены
        </Button>
      </PageHero>

      <SectionCard tone="surface-2" clip>
        <SectionHead eyebrow="Направления" title="Выберите *своё* направление" lead="Откройте карточку: показания, этапы, цены и частые вопросы." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
          <QuestionCard />
        </div>
      </SectionCard>

      <SectionCard>
        <SectionHead eyebrow="Сравнение" title="Что входит и *сколько* стоит" lead={priceNote} link={{ label: "Полный прайс", href: "/prices" }} />
        <Reveal>
          <ul>
            {services.map((service) => (
              <li key={service.slug} className="hair-row">
                <Link href={`/services/${service.slug}`} className="group grid items-center gap-1 py-4 md:grid-cols-[1fr_1.4fr_auto] md:gap-6">
                  <span className="flex items-center justify-between gap-3 text-[18px] font-bold transition-colors group-hover:text-accent-press">
                    {service.title} <ArrowRight className="md:hidden" />
                  </span>
                  <span className="text-[15px] leading-snug text-ink-muted">{service.includes}</span>
                  <Mono className="!text-[15px] font-bold md:text-right">от {formatPrice(minPrice(service.slug))}</Mono>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionCard>

      <CtaForm />
    </>
  );
}
