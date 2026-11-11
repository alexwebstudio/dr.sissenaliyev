import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Button } from "@/components/ui/Button";
import { CaseCard } from "@/components/ui/CaseCard";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { AnimatedTitle, SectionHead } from "@/components/ui/Heading";
import { Check } from "@/components/ui/Icons";
import { JsonLd } from "@/components/ui/JsonLd";
import { PriceTable } from "@/components/ui/PriceTable";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { cases } from "@/content/cases";
import { doctorsFor } from "@/content/doctors";
import { minPrice, priceNote, servicePrices } from "@/content/prices";
import { getService, services } from "@/content/services";
import { formatPrice, site } from "@/content/site";
import { absoluteUrl, faqSchema, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMeta({
    title: `${service.title}: цены и этапы, ${site.city}`,
    description: `${service.title} в клинике ${site.brand}, ${site.city}: ${service.short}. Цены по прайсу, консультация бесплатно.`.slice(0, 155),
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const items = servicePrices[service.slug] ?? [];
  const team = doctorsFor(service.slug);
  const gallery = service.caseCategory ? cases.filter((item) => item.category === service.caseCategory).slice(0, 3) : [];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.lead,
          url: absoluteUrl(`/services/${service.slug}`),
          provider: { "@id": absoluteUrl("/#clinic") },
        }}
      />
      <JsonLd data={faqSchema(service.faq)} />

      <PageHero
        title={service.headline}
        lead={service.lead}
        crumbs={[
          { name: "Услуги", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      >
        <Button booking arrow variant="light">
          Записаться на приём
        </Button>
        <span className="t-mono self-center !text-[15px] text-on-accent-muted">
          от {formatPrice(minPrice(service.slug))} · консультация бесплатно
        </span>
      </PageHero>

      <SectionCard>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-eyebrow mb-4">Об услуге</p>
            <AnimatedTitle text="Что важно *знать*" />
            <Reveal delay={0.15} className="prose-clinic t-lead mt-6 max-w-[56ch] text-ink-muted">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
          <Reveal className="inner-card self-start p-6 lg:col-span-5 lg:p-8">
            <h2 className="t-h3 mb-5">Показания</h2>
            <ul className="space-y-3">
              {service.indications.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 flex-none text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionCard>

      <SectionCard tone="surface-2">
        <SectionHead eyebrow="Этапы" title="Как проходит *лечение*" lead="Общая схема. Точный план врач составит после осмотра." />
        <Reveal as="ol" group className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {service.stages.map((stage, index) => (
            <li key={stage.title} data-reveal-item="" className="rounded-[18px] bg-surface p-5 lg:rounded-[22px] lg:p-6">
              <span className="t-stat block">0{index + 1}</span>
              <h3 className="mt-5 text-[19px] font-semibold leading-tight">{stage.title}</h3>
              <p className="mt-2 text-[15px] leading-snug text-ink-muted">{stage.text}</p>
            </li>
          ))}
        </Reveal>
      </SectionCard>

      <SectionCard>
        <SectionHead eyebrow="Цены" title="Сколько *стоит*" lead={priceNote} link={{ label: "Полный прайс", href: "/prices" }} />
        <Reveal>
          <PriceTable items={items} caption={`Цены: ${service.title}`} />
        </Reveal>
      </SectionCard>

      <SectionCard tone="surface-2">
        <SectionHead eyebrow="Преимущества" title="Почему *у нас*" />
        <Reveal group className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {service.benefits.map((benefit) => (
            <div key={benefit.title} data-reveal-item="" className="rounded-[18px] bg-surface p-5 lg:rounded-[22px] lg:p-6">
              <h3 className="text-[19px] font-semibold leading-tight">{benefit.title}</h3>
              <p className="mt-2 text-[15px] leading-snug text-ink-muted">{benefit.text}</p>
            </div>
          ))}
        </Reveal>
      </SectionCard>

      {gallery.length > 0 && (
        <SectionCard tone="accent">
          <SectionHead eyebrow="Работы" title="Примеры *лечения*" lead="Сравните до и после, откройте кейс и посмотрите план." link={{ label: "Все работы", href: "/cases" }} />
          <div className="grid gap-5 md:grid-cols-3 md:gap-4">
            {gallery.map((item) => (
              <CaseCard key={item.slug} item={item} sizes="(min-width: 768px) 31vw, 100vw" />
            ))}
          </div>
        </SectionCard>
      )}

      <SectionCard>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-eyebrow mb-4">Вопросы</p>
            <AnimatedTitle text="Частые *вопросы*" className="mb-8" />
            <Reveal>
              <Accordion items={service.faq} />
            </Reveal>
          </div>
          {team.length > 0 && (
            <Reveal className="lg:col-span-4 lg:col-start-9">
              <p className="t-eyebrow mb-4">{team.length > 1 ? `Врачи направления · ${team.length}` : "Ведёт направление"}</p>
              <div className="doc-rail -mx-[var(--gutter)] flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--gutter)] pb-2 lg:mx-0 lg:block lg:space-y-4 lg:overflow-visible lg:px-0">
                {team.slice(0, 4).map((member) => (
                  <div key={member.slug} className="w-[72vw] max-w-[300px] flex-none snap-center lg:w-auto lg:max-w-none">
                    <DoctorCard doctor={member} sizes="(min-width: 1024px) 30vw, 72vw" />
                  </div>
                ))}
              </div>
              <Link href="/doctors" className="group mt-4 flex items-center justify-between gap-3 font-medium">
                Все врачи клиники <ArrowButton tone="ghost" />
              </Link>
            </Reveal>
          )}
        </div>
      </SectionCard>

      <CtaForm defaultService={service.title} />
    </>
  );
}
