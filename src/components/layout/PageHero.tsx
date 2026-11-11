import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { AnimatedTitle } from "@/components/ui/Heading";
import { LogoMark } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Swirl } from "@/components/ui/Swirl";

type PageHeroProps = {
  title: string;
  lead?: string;
  crumbs: Crumb[];
  /** Только реальные фото клиники. Без фото — фирменная бирюза с облаками. */
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  /** Для вертикальных снимков: текст слева на бирюзовой панели, фото справа. */
  split?: boolean;
  objectPosition?: string;
};

export function PageHero({ title, lead, crumbs, image, imageAlt = "", children, split, objectPosition = "center" }: PageHeroProps) {
  const text = (
    <>
      <div className="mb-auto pb-10">
        <Breadcrumbs items={crumbs} />
      </div>
      <AnimatedTitle as="h1" text={title} />
      {lead && (
        <Reveal instant delay={0.15} className="t-lead mt-5 max-w-[48ch]">
          <p>{lead}</p>
        </Reveal>
      )}
      {children && (
        <Reveal instant delay={0.2} className="mt-7 flex flex-wrap gap-3">
          {children}
        </Reveal>
      )}
    </>
  );

  if (split && image) {
    return (
      <section className="grid lg:grid-cols-12">
        <div className="on-accent page-top relative isolate flex min-h-[52svh] flex-col overflow-hidden pb-10 text-on-accent lg:col-span-7 lg:min-h-[66svh] lg:pb-14" style={{ background: "var(--bright)", paddingInline: "var(--gutter)" }}>
          <span aria-hidden="true" className="cloud right-[-40px] top-[22%] h-[80px] w-[260px] opacity-25" />
          {text}
        </div>
        <div className="relative aspect-square bg-[var(--brand)] lg:col-span-5 lg:aspect-auto">
          <Image src={image} alt={imageAlt} fill priority quality={75} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" style={{ objectPosition }} />
        </div>
      </section>
    );
  }

  return (
    <section className={`${image ? "hero-shade" : ""} on-accent page-top relative isolate flex min-h-[56svh] flex-col overflow-hidden pb-10 text-on-accent lg:min-h-[62svh] lg:pb-14`} style={{ background: "var(--bright)", paddingInline: "var(--inline)" }}>
      {image ? (
        <Image src={image} alt={imageAlt} fill priority quality={70} sizes="(min-width: 768px) 100vw, 100vw" className="-z-10 object-cover" style={{ objectPosition }} />
      ) : (
        <>
          <Swirl className="swirl -right-[20%] top-0 -z-10 h-full w-[120%] !text-white opacity-[0.08] lg:w-[80%]" />
          <span aria-hidden="true" className="cloud right-[8%] top-[24%] -z-10 h-[90px] w-[320px] opacity-30" />
          <LogoMark className="pointer-events-none absolute -bottom-[8%] -right-[6%] -z-10 h-auto w-[60%] max-w-[560px] text-white opacity-[0.08] lg:w-[38%]" />
        </>
      )}
      <div className="relative z-10 flex flex-1 flex-col">{text}</div>
    </section>
  );
}
