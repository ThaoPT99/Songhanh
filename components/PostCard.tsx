import Link from "next/link";
import type { Post } from "@/lib/site";
import { categoryLabels } from "@/lib/site";
import NewsThumb from "@/components/NewsThumb";
import { ArrowRightIcon, CalendarIcon } from "@/components/Icons";

export default function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-white transition-colors hover:border-navy-600">
      <Link href={`/tin-tuc/${post.slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden>
        <NewsThumb category={post.category} index={index} />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-[11px] text-muted">
          <span className="font-semibold uppercase tracking-[0.08em] text-flag-600">
            {categoryLabels[post.category]}
          </span>
          <span className="h-3 w-px bg-line" aria-hidden />
          <span className="flex items-center gap-1">
            <CalendarIcon className="h-3.5 w-3.5" />
            {post.dateLabel}
          </span>
        </div>
        <h3 className="mt-2 text-[14.5px] font-bold leading-snug text-navy-900">
          <Link href={`/tin-tuc/${post.slug}`} className="transition-colors hover:text-flag-600">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[12.5px] leading-relaxed text-muted">{post.excerpt}</p>
        <Link
          href={`/tin-tuc/${post.slug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-navy-700 transition-colors hover:text-flag-600"
        >
          Xem chi tiết
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
