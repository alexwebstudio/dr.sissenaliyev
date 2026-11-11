import { techBlock } from "@/content/copy";
import { SectionHead } from "@/components/ui/Heading";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { cx } from "@/lib/utils";

// Только оборудование, которое есть в прайсе клиники. Без стоковых фото — карточки с ценой.
export function Tech({ id }: { id?: string }) {
  return (
    <SectionCard tone="surface-2" id={id}>
      <SectionHead eyebrow={techBlock.eyebrow} title={techBlock.title} lead={techBlock.lead} link={id ? undefined : { label: "Полный прайс", href: "/prices" }} />
      <Reveal group className="grid gap-3 md:grid-cols-2 lg:grid-cols-6 lg:gap-4">
        {techBlock.items.map((item, index) => (
          <figure
            key={item.title}
            data-reveal-item=""
            className={cx(
              "relative isolate flex min-h-[200px] flex-col justify-between gap-8 overflow-hidden rounded-[18px] p-5 lg:rounded-[22px] lg:p-6",
              index < 2 ? "on-accent text-white lg:col-span-3 lg:min-h-[260px]" : "bg-surface lg:col-span-2",
            )}
            style={index < 2 ? { background: "var(--bright)" } : undefined}
          >
            {index < 2 && <span aria-hidden="true" className="cloud -right-10 top-4 h-[70px] w-[220px] opacity-25" />}
            <div className="flex items-start justify-between gap-4">
              <Mono className={cx("!text-[13px] font-bold", index < 2 ? "text-on-accent-muted" : "text-accent-press")}>0{index + 1}</Mono>
              <Mono className={cx("rounded-full px-3 py-1 !text-[13px] font-bold", index < 2 ? "bg-white text-accent-press" : "bg-tint text-accent-press")}>{item.tag}</Mono>
            </div>
            <figcaption>
              <span className={cx("block font-display font-extrabold uppercase leading-tight", index < 2 ? "text-[clamp(24px,2.6vw,38px)]" : "text-[20px]")}>{item.title}</span>
              <span className={cx("mt-2 block text-[15px] leading-snug", index < 2 ? "text-on-accent-muted" : "text-ink-muted")}>{item.text}</span>
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </SectionCard>
  );
}
