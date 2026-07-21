import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function LegalAccordion({ children }: { children: ReactNode }) {
  return (
    <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col">
      {children}
    </Accordion>
  );
}

export function LegalAccordionItem({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <AccordionItem
      value={value}
      className="mb-4 overflow-hidden rounded-2xl border-0 bg-white shadow-sm ring-1 ring-black/5 transition-shadow last:mb-0 hover:shadow-md data-[state=open]:shadow-md data-[state=open]:ring-[#4C4BE0]/30"
    >
      <AccordionTrigger className="px-5 py-5 text-start text-base font-semibold text-[#0d0d0d] hover:no-underline sm:px-6 sm:py-6 sm:text-lg [&[data-state=open]>svg]:text-[#4C4BE0]">
        {title}
      </AccordionTrigger>
      <AccordionContent className="px-5 pb-6 pt-0 text-[15px] leading-relaxed text-[#636363] sm:px-6 sm:text-base">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4C4BE0]"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LabeledPointList({
  items,
}: {
  items: { label: string; body: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <p className="font-semibold text-[#0d0d0d]">{item.label}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
