import type { ReactNode } from "react";

// ─── Stacked card block (always visible, no accordion) ───────────────────────
export function LabeledBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
      <h3 className="mb-4 text-base font-semibold text-[#0d0d0d] sm:text-lg">
        {title}
      </h3>
      {children}
    </div>
  );
}

// ─── Bullet list ──────────────────────────────────────────────────────────────
export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4C4BE0]"
            aria-hidden="true"
          />
          <span className="text-[15px] leading-relaxed text-[#636363] sm:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ─── Labeled point list (label: bold, body: paragraph) ───────────────────────
export function LabeledPointList({
  items,
}: {
  items: { label: string; body: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <p className="text-sm font-semibold text-[#0d0d0d] sm:text-base">
            {item.label}
          </p>
          <p className="text-[15px] leading-relaxed text-[#636363] sm:text-base">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Notice / warning block ───────────────────────────────────────────────────
export function NoticeBlock({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-[#4C4BE0]/15 bg-[#4C4BE0]/5 p-5">
      <p className="mb-2 text-sm font-semibold text-[#0d0d0d] sm:text-base">
        {label}
      </p>
      <p className="text-[15px] leading-relaxed text-[#636363] sm:text-base">
        {body}
      </p>
    </div>
  );
}
