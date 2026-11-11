import type { Metadata } from "next";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { doctors } from "@/content/doctors";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Врачи клиники, ${site.city}`,
  description: `Команда ${site.brand}: 11 врачей — главный врач Сисеналиев Айбек, терапевты, ортопеды, терапевт-ортодонт и хирург-имплантолог. Стаж и специализация каждого врача.`,
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero title="Наша *команда*" lead="11 врачей: специализация и стаж — как в профиле клиники. Выберите врача и запишитесь онлайн." crumbs={[{ name: "Врачи", path: "/doctors" }]}>
        <Button booking arrow variant="light">
          Записаться к врачу
        </Button>
      </PageHero>

      <SectionCard>
        <SectionHead eyebrow="Врачи" title="Найдите *своего* врача" lead="Откройте карточку: специализация, стаж и направления." />
        <Reveal group className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {doctors.map((doctor) => (
            <div key={doctor.slug} data-reveal-item="">
              <DoctorCard doctor={doctor} sizes="(min-width: 1024px) 24vw, (min-width: 480px) 46vw, 100vw" />
            </div>
          ))}
        </Reveal>
      </SectionCard>

      <CtaForm />
    </>
  );
}
