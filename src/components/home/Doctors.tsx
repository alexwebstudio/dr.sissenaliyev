import { doctorsBlock } from "@/content/copy";
import { doctors } from "@/content/doctors";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";

// Полная команда — 11 врачей с фото из сторис клиники. Общего фото команды нет, поэтому без него.
export function Doctors() {
  return (
    <SectionCard>
      <SectionHead eyebrow={doctorsBlock.eyebrow} title={doctorsBlock.title} lead={doctorsBlock.lead} link={{ label: doctorsBlock.all, href: "/doctors" }} />
      {/* На телефоне — свайп-лента со снапом, на планшете и десктопе — сетка. */}
      <Reveal group className="doc-rail -mx-[var(--gutter)] flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--gutter)] pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-5">
        {doctors.map((doctor) => (
          <div key={doctor.slug} data-reveal-item="" className="w-[76vw] max-w-[320px] flex-none snap-center sm:w-auto sm:max-w-none">
            <DoctorCard doctor={doctor} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 76vw" />
          </div>
        ))}
      </Reveal>
      <p className="mt-3 text-center text-[13px] text-ink-muted sm:hidden">Листайте вбок → {doctors.length} врачей</p>
    </SectionCard>
  );
}
