import type { Metadata } from "next";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Instagram, Phone, WhatsApp } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tooth3D } from "@/components/ui/Tooth3D";
import { addressLine, site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Контакты клиники, ${site.city}`,
  description: `Телефон, WhatsApp и режим работы ${site.brand} в Атырау. Запишитесь на бесплатную консультацию онлайн.`,
  path: "/contacts",
});

const channels = [
  { label: "Позвонить", value: site.phone, href: site.phoneHref, Icon: Phone },
  { label: "WhatsApp", value: site.phone, href: site.whatsapp, Icon: WhatsApp },
  { label: "Instagram", value: site.instagramHandle, href: site.instagram, Icon: Instagram },
];

export default function ContactsPage() {
  return (
    <>
      <PageHero title="Контакты и *запись*" lead="Позвоните, напишите в WhatsApp или оставьте заявку на сайте." crumbs={[{ name: "Контакты", path: "/contacts" }]}>
        <Button href="#booking" arrow variant="light">
          Оставить заявку
        </Button>
      </PageHero>

      <SectionCard>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="t-h2 mb-6">Где мы</h2>
            <address className="not-italic">
              <dl>
                <div className="hair-row py-3.5">
                  <dt className="text-[14px] text-ink-muted">Адрес</dt>
                  <dd className="text-[18px] font-semibold">{addressLine}</dd>
                </div>
                <div className="hair-row py-3.5">
                  <dt className="mb-1 text-[14px] text-ink-muted">Режим работы</dt>
                  {site.hoursRows.map((row) => (
                    <dd key={row.days} className="flex justify-between gap-4 py-0.5 text-[16px]">
                      <span>{row.days}</span>
                      <span className="t-mono !text-[16px] font-bold">{row.time}</span>
                    </dd>
                  ))}
                </div>
              </dl>
            </address>
            <ul className="mt-6 grid gap-2">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("tel:") ? undefined : "_blank"} rel="noopener noreferrer" className="inner-card flex items-center gap-3 p-3.5 transition-colors hover:bg-tint">
                    <Icon className="flex-none text-accent-press" />
                    <span className="min-w-0">
                      <span className="block text-[13px] text-ink-muted">{label}</span>
                      <span className="block truncate text-[16px] font-semibold">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            {site.mapEmbed ? (
              <iframe title={`Карта: ${site.brand}`} src={site.mapEmbed} loading="lazy" className="aspect-[4/3] h-full min-h-[420px] w-full rounded-[22px] border-0" />
            ) : (
              <div className="on-accent relative isolate flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[18px] p-6 text-on-accent lg:rounded-[22px] lg:p-10" style={{ background: "var(--bright)" }}>
                <span aria-hidden="true" className="cloud right-8 top-10 -z-10 h-[70px] w-[240px] opacity-25" />
                <div>
                  <p className="font-display text-[clamp(30px,3.6vw,52px)] font-extrabold uppercase leading-[1.04]">{site.city}</p>
                  <p className="mt-3 max-w-[38ch] text-on-accent-muted">Точный адрес и карта появятся здесь, как только клиника их подтвердит. Найти нас можно в 2ГИС по названию.</p>
                </div>
                <div className="relative z-10 flex flex-wrap gap-2">
                  <Button href={site.map2gis} external variant="light" arrow>
                    Найти в 2ГИС
                  </Button>
                </div>
                <Tooth3D sizes="300px" className="absolute -bottom-10 -right-6 w-[200px] opacity-95 lg:w-[290px]" />
              </div>
            )}
          </Reveal>
        </div>
      </SectionCard>

      <CtaForm />
    </>
  );
}
