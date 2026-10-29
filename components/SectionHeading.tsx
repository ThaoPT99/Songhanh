import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b-2 border-navy-800 pb-3">
      <div className="max-w-2xl border-l-4 border-flag-500 pl-3.5">
        {eyebrow && (
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-navy-600">{eyebrow}</p>
        )}
        <h2 className="mt-0.5 text-xl font-bold uppercase tracking-tight text-navy-900 md:text-[22px]">
          {title}
        </h2>
        {description && <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="group inline-flex items-center gap-1.5 pb-0.5 text-[12.5px] font-semibold text-navy-700 hover:text-flag-600"
        >
          {action.label}
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
