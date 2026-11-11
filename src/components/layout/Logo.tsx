import Link from "next/link";
import { site } from "@/content/site";
import { LogoMark } from "@/components/ui/Icons";
import { cx } from "@/lib/utils";

/** Знак + вордмарк + дескриптор, как в логотипе клиники. tone="light" — белый вариант для бирюзы. */
export function Logo({ onClick, tone = "dark", className }: { onClick?: () => void; tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" onClick={onClick} className={cx("flex min-w-0 items-center gap-2.5", className)} aria-label={`${site.brand}, на главную`}>
      <LogoMark className={cx("h-9 w-auto flex-none sm:h-10", tone === "light" ? "text-white" : "text-accent")} />
      <span className="flex min-w-0 flex-col">
        <span className={cx("t-brand truncate text-[19px] leading-none sm:text-[22px]", tone === "light" ? "text-white" : "text-ink")}>{site.brand}</span>
        <span className={cx("mt-1 truncate font-[family-name:var(--font-brand)] text-[10.5px] leading-none sm:text-[11.5px]", tone === "light" ? "text-on-accent-muted" : "text-accent-press")}>{site.descriptor}</span>
      </span>
    </Link>
  );
}
