import { categoryLabels } from "@/lib/site";
import { BriefcaseIcon, NewsIcon } from "@/components/Icons";

const palettes = [
  "from-navy-900 via-navy-800 to-navy-700",
  "from-[#0a3a61] via-[#0b4d80] to-[#14639e]",
  "from-[#05203a] via-[#0a3a61] to-[#0b4d80]",
  "from-[#123a52] via-[#17506e] to-[#1d6689]",
];

export default function NewsThumb({
  category,
  index = 0,
  className = "aspect-[16/10]",
}: {
  category: "hoat-dong" | "tuyen-dung";
  index?: number;
  className?: string;
}) {
  const isRecruit = category === "tuyen-dung";
  const Icon = isRecruit ? BriefcaseIcon : NewsIcon;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${palettes[index % palettes.length]} ${className}`}
      aria-hidden
    >
      <div className="gov-pattern absolute inset-0 opacity-60" />
      <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full border border-gold-400/25" />
      <div className="absolute -bottom-10 -left-6 h-24 w-24 rotate-12 border border-white/10" />
      <Icon className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-white/25" strokeWidth={1} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950/80 to-transparent" />
      <span className="absolute left-3 top-3 border border-white/25 bg-navy-950/45 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
        {categoryLabels[category]}
      </span>
      <span className="absolute bottom-3 left-3 h-[3px] w-9 bg-gold-400" />
    </div>
  );
}
