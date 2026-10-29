import type { SVGProps } from "react";

export function Emblem({ className = "", ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      className={className}
      role="img"
      aria-label="Biểu trưng Công ty TNHH Dịch vụ Kế toán Song Hành"
      {...props}
    >
      <circle cx="36" cy="36" r="35" fill="#072b4b" />
      <circle cx="36" cy="36" r="31" fill="none" stroke="#e0ad46" strokeWidth="1.4" />
      <circle cx="36" cy="36" r="28.5" fill="none" stroke="#e0ad46" strokeWidth="0.7" opacity="0.65" />
      <path d="M36 12.5v4M36 55.5v4M12.5 36h4M55.5 36h4" stroke="#e0ad46" strokeWidth="1" opacity="0.7" />
      <text
        x="36"
        y="42.5"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="23"
        fontWeight="700"
        letterSpacing="1.5"
      >
        SH
      </text>
      <path d="M22 48.5h28" stroke="#c8102e" strokeWidth="2" />
      <path d="M25 53h22" stroke="#e0ad46" strokeWidth="0.9" opacity="0.8" />
    </svg>
  );
}

export function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Emblem className={compact ? "h-11 w-11 shrink-0" : "h-14 w-14 shrink-0 md:h-16 md:w-16"} />
      <div className="leading-tight">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-600 md:text-[11px]">
          Công ty TNHH Dịch vụ Kế toán
        </p>
        <p className="font-serif text-2xl font-bold uppercase tracking-[0.08em] text-flag-600 md:text-[30px]">
          Song Hành
        </p>
        {!compact && (
          <p className="mt-0.5 text-[11px] font-medium tracking-[0.06em] text-muted md:text-xs">
            Kế toán chuẩn mực · Thuế minh bạch · Đồng hành bền vững
          </p>
        )}
      </div>
    </div>
  );
}
