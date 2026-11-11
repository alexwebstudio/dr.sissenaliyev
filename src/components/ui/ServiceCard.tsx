import Link from "next/link";
import type { Service } from "@/content/services";
import { servicesBlock } from "@/content/copy";
import { ArrowButton } from "./ArrowButton";
import { Button } from "./Button";
import { LogoMark } from "./Icons";
import { Mono } from "./Mono";
import { PillLabel } from "./PillLabel";

// Без стоковых фото: фирменный градиент, крупный номер и знак клиники водяным знаком.
export function ServiceCard({ service }: { service: Service; sizes?: string }) {
  return (
    <Link href={`/services/${service.slug}`} aria-label={`${service.title}: ${service.short}`} className="service-tile group flex aspect-[5/4] flex-col sm:aspect-[4/5] justify-between p-4 lg:p-5" data-tone={service.tone}>
      <LogoMark className="tile-mark h-auto" />
      <div className="flex items-start justify-between">
        <span className="font-display text-[44px] font-extrabold leading-none opacity-90">{service.number}</span>
        <ArrowButton tone={service.tone === "deep" ? "light" : "accent"} />
      </div>
      <div>
        <PillLabel className={service.tone === "mint" ? "mb-2.5 !bg-accent-press !text-white" : "mb-2.5"}>{service.title}</PillLabel>
        <p className="text-[15px] leading-snug">{service.short}</p>
        <Mono className="mt-2 block !text-[13px] font-bold">{service.highlight}</Mono>
      </div>
    </Link>
  );
}

export function QuestionCard() {
  const { question } = servicesBlock;
  return (
    <div className="on-accent relative isolate flex h-full min-h-[280px] flex-col justify-between gap-8 overflow-hidden rounded-[18px] p-5 text-on-accent lg:min-h-[320px] lg:rounded-[22px] lg:p-6" style={{ background: "var(--bright)" }}>
      <span aria-hidden="true" className="cloud -right-10 top-6 h-[60px] w-[180px] opacity-25" />
      <p className="font-display text-[clamp(26px,2.4vw,34px)] font-extrabold uppercase leading-[1.05]">{question.title}</p>
      <div>
        <p className="mb-5 max-w-[34ch]">{question.text}</p>
        <Button booking arrow variant="light">
          {question.cta}
        </Button>
      </div>
    </div>
  );
}
