"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { steps } from "@/content/steps";
import { Mono } from "@/components/ui/Mono";

// Этапы переключаются вручную: слева список, справа крупная карточка шага с прогрессом.
export function StepsTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = steps[active] ?? steps[0];
  if (!step) return null;

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const shift = keys[event.key];
    if (!shift) return;
    event.preventDefault();
    const next = (active + shift + steps.length) % steps.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
      <div role="tablist" aria-label="Этапы лечения" aria-orientation="vertical" onKeyDown={onKeyDown} className="border-b border-line lg:col-span-5 lg:self-center">
        {steps.map((item, index) => (
          <button
            key={item.number}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            className="step-tab"
          >
            <Mono className="!text-[13px]">{item.number}</Mono>
            <span className="text-[18px] font-semibold leading-tight lg:text-[20px]">{item.title}</span>
            <Mono className="hidden !text-[13px] sm:inline">{item.time}</Mono>
          </button>
        ))}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="relative isolate flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[18px] p-5 text-white lg:col-span-7 lg:min-h-[560px] lg:rounded-[22px] lg:p-8" style={{ background: "var(--bright)" }}>
        <span aria-hidden="true" className="cloud -right-12 top-[18%] h-[90px] w-[300px] opacity-30" />
        <span aria-hidden="true" className="cloud -left-16 bottom-[8%] h-[70px] w-[240px] opacity-20" />

        <div className="step-progress" aria-hidden="true">
          {steps.map((item, index) => (
            <span key={item.number} data-on={index <= active} />
          ))}
        </div>

        <div key={step.number} className="swap-in">
          <span className="t-display block text-[clamp(84px,11vw,168px)] leading-none">{step.number}</span>
          <p className="mt-3 text-[22px] font-semibold leading-tight lg:text-[28px]">{step.title}</p>
          <p className="mt-2 max-w-[44ch] text-[17px] leading-snug">{step.text}</p>
          <Mono className="mt-4 inline-block rounded-full bg-white px-3 py-1 !text-[13px] text-ink">{step.time}</Mono>
        </div>
      </div>
    </div>
  );
}
