import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@/components/Icons";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="gov-pattern absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold-400/20"
        aria-hidden
      />
      <div
        className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-gold-400/15"
        aria-hidden
      />
      <div className="container-page relative py-8 md:py-11">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[11.5px] text-white/60">
          <Link href="/" className="flex items-center gap-1 hover:text-gold-300">
            <HomeIcon className="h-3.5 w-3.5" />
            <span>Trang chủ</span>
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              <ChevronRightIcon className="h-3 w-3 text-white/30" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-gold-300">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/85">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-5 max-w-3xl">
          {eyebrow && (
            <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span className="inline-block h-2 w-2 bg-flag-500" aria-hidden />
              {eyebrow}
            </p>
          )}
          <h1 className="text-2xl font-bold leading-snug tracking-tight md:text-[34px]">{title}</h1>
          {description && (
            <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-white/70 md:text-sm">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="h-1 w-full bg-gold-400" />
    </section>
  );
}
