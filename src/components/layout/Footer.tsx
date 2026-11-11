import Link from "next/link";
import { footer } from "@/content/copy";
import { addressLine, site } from "@/content/site";
import { ArrowUpRight, Instagram, LogoMark, WhatsApp } from "@/components/ui/Icons";

const socials = [
  { href: site.whatsapp, label: "WhatsApp", Icon: WhatsApp },
  { href: site.instagram, label: "Instagram", Icon: Instagram },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-line sky" style={{ paddingInline: "var(--inline)" }}>
      <div className="flex flex-col items-center pt-12 text-center lg:pt-16">
        <LogoMark className="h-14 w-auto text-accent lg:h-20" />
        <p className="footer-wordmark mt-4">{site.brand}</p>
        <p className="mt-2 font-[family-name:var(--font-brand)] text-[15px] text-accent-press lg:text-[18px]">{site.descriptor}</p>
      </div>

      <div className="mt-10 grid gap-10 border-t border-line py-10 lg:grid-cols-12 lg:py-12">
        <div className="lg:col-span-5">
          <p className="font-display text-[22px] font-extrabold uppercase leading-tight lg:text-[28px]">{site.slogan}</p>
          <p className="mt-4 max-w-[40ch] text-ink-muted">{footer.description}</p>
        </div>

        <nav aria-label="Навигация в подвале" className="lg:col-span-3">
          <p className="t-eyebrow mb-4">Разделы</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 lg:grid-cols-1">
            {footer.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[16px] transition-colors hover:text-accent-press">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="t-eyebrow mb-4">Контакты</p>
          <address className="space-y-2.5 not-italic">
            <a href={site.phoneHref} className="t-mono block !text-[22px] font-bold transition-colors hover:text-accent-press">
              {site.phone}
            </a>
            <p className="text-ink-muted">{addressLine}</p>
            <p className="text-ink-muted">{site.hours}</p>
          </address>
          <div className="mt-5 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors hover:bg-accent-press hover:text-white">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line py-5 text-[13px] text-ink-muted">
        <div className="grid items-center gap-3 text-center md:grid-cols-3">
          <p className="md:text-left">© 2026 {site.brand}</p>
          <Link href="/privacy" className="justify-self-center transition-colors hover:text-accent-press">
            Политика конфиденциальности
          </Link>
          <p className="md:text-right">
            {site.developer.label} —{" "}
            <a href={site.developer.href} target="_blank" rel="noopener" className="group inline-flex items-center gap-1 font-semibold text-ink transition-colors hover:text-accent-press">
              {site.developer.name}
              <ArrowUpRight width={13} height={13} className="transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
