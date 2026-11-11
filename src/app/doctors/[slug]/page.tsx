import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Heading";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { doctors, getDoctor } from "@/content/doctors";
import { services } from "@/content/services";
import { addressLine, site } from "@/content/site";
import { absoluteUrl, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doctor = getDoctor((await params).slug);
  if (!doctor) return {};
  return pageMeta({
    title: `${doctor.name} — ${doctor.role.toLowerCase()}, ${site.city}`,
    description: `${doctor.name}, ${doctor.role.toLowerCase()} клиники ${site.brand}. Стаж ${doctor.experience}. Запись онлайн, консультация бесплатно.`,
    path: `/doctors/${doctor.slug}`,
    image: doctor.image,
    imageAlt: doctor.imageAlt,
  });
}

export default async function DoctorPage({ params }: Props) {
  const doctor = getDoctor((await params).slug);
  if (!doctor) notFound();

  const doctorServices = services.filter((service) => doctor.serviceSlugs.includes(service.slug));
  const facts = [
    { label: "Специализация", value: doctor.role },
    { label: "Стаж", value: doctor.experience },
    { label: "Приём", value: addressLine },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Physician",
          name: doctor.name,
          medicalSpecialty: "Dentistry",
          image: absoluteUrl(doctor.image),
          url: absoluteUrl(`/doctors/${doctor.slug}`),
          worksFor: { "@id": absoluteUrl("/#clinic") },
        }}
      />

      <PageHero
        split
        title={doctor.headline}
        lead={`${doctor.role}. Стаж ${doctor.experience}.`}
        crumbs={[
          { name: "Врачи", path: "/doctors" },
          { name: doctor.name, path: `/doctors/${doctor.slug}` },
        ]}
        image={doctor.image}
        imageAlt={doctor.imageAlt}
        objectPosition="50% 0%"
      >
        <Button booking arrow variant="light">
          Записаться к врачу
        </Button>
      </PageHero>

      <SectionCard>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="t-h3 mb-5">{doctor.name}</h2>
            <dl>
              {facts.map((fact) => (
                <div key={fact.label} className="hair-row grid gap-1 py-3.5 sm:grid-cols-[170px_1fr]">
                  <dt className="text-ink-muted">{fact.label}</dt>
                  <dd className="font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          {doctor.education.length > 0 && (
            <Reveal delay={0.1}>
              <h2 className="t-h3 mb-5">Образование</h2>
              <ul>
                {doctor.education.map((item) => (
                  <li key={item} className="hair-row py-3.5">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </SectionCard>

      {doctorServices.length > 0 && (
        <SectionCard tone="surface-2">
          <SectionHead eyebrow="Направления" title="С чем *поможет*" lead="Откройте услугу, чтобы посмотреть этапы и цены." />
          <Reveal group className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {doctorServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} data-reveal-item="" className="group flex items-center justify-between gap-4 rounded-[18px] bg-surface p-5 lg:rounded-[22px] lg:p-6">
                <span>
                  <span className="block text-[19px] font-bold leading-tight">{service.title}</span>
                  <span className="mt-1 block text-[15px] leading-snug text-ink-muted">{service.short}</span>
                </span>
                <ArrowButton tone="accent" />
              </Link>
            ))}
          </Reveal>
        </SectionCard>
      )}

      <CtaForm title="Запишитесь к *этому* врачу" submitLabel="Записаться к врачу" defaultService={doctorServices[0]?.title} />
    </>
  );
}
