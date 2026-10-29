import Link from "next/link";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import NewsThumb from "@/components/NewsThumb";
import CtaBand from "@/components/CtaBand";
import { categoryLabels, posts, site } from "@/lib/site";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
} from "@/components/Icons";

const tabs = [
  { label: "Tất cả tin tức", href: "/tin-tuc", value: "all" },
  { label: "Tin hoạt động", href: "/tin-tuc/hoat-dong", value: "hoat-dong" },
  { label: "Tin tuyển dụng", href: "/tin-tuc/tuyen-dung", value: "tuyen-dung" },
] as const;

export default function NewsArchive({
  category,
  title,
  description,
  eyebrow,
  crumbs,
}: {
  category: "all" | "hoat-dong" | "tuyen-dung";
  title: string;
  description: string;
  eyebrow: string;
  crumbs: { label: string; href?: string }[];
}) {
  const list = category === "all" ? posts : posts.filter((post) => post.category === category);
  const [lead, ...rest] = list;
  const latest = posts.slice(0, 4);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} crumbs={crumbs} />

      <div className="border-b border-line bg-white">
        <div className="container-page flex flex-wrap gap-1 py-2.5">
          {tabs.map((tab) => {
            const active = tab.value === category;
            return (
              <Link
                key={tab.value}
                href={tab.href}
                className={`px-3.5 py-1.5 text-[12px] font-semibold transition-colors ${
                  active
                    ? "bg-navy-800 text-white"
                    : "border border-line bg-paper text-navy-800 hover:border-navy-600"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
          <span className="ml-auto self-center text-[11px] text-muted">
            {list.length} bài viết
          </span>
        </div>
      </div>

      <section className="py-8 md:py-10">
        <div className="container-page grid gap-7 lg:grid-cols-[1fr_320px]">
          <div>
            {lead && (
              <article className="mb-4 grid border border-line bg-white md:grid-cols-[300px_1fr]">
                <Link href={`/tin-tuc/${lead.slug}`} aria-hidden tabIndex={-1} className="block">
                  <NewsThumb category={lead.category} className="h-full min-h-[190px]" />
                </Link>
                <div className="flex flex-col p-5">
                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <span className="bg-flag-600 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-white">
                      Mới nhất
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {lead.dateLabel}
                    </span>
                    <span className="hidden items-center gap-1 sm:flex">
                      <ClockIcon className="h-3.5 w-3.5" />
                      {lead.readTime}
                    </span>
                  </div>
                  <h2 className="mt-2.5 text-[17px] font-bold leading-snug text-navy-900 md:text-[19px]">
                    <Link href={`/tin-tuc/${lead.slug}`} className="transition-colors hover:text-flag-600">
                      {lead.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-muted">{lead.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
                    <span className="text-[11px] text-muted">
                      {lead.author} · {categoryLabels[lead.category]}
                    </span>
                    <Link
                      href={`/tin-tuc/${lead.slug}`}
                      className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-navy-700 hover:text-flag-600"
                    >
                      Đọc tiếp
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {rest.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index + 1} />
              ))}
            </div>

            {list.length === 0 && (
              <div className="border border-line bg-white p-8 text-center">
                <p className="text-[13px] text-muted">Chưa có bài viết trong danh mục này.</p>
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <div className="border border-line bg-white p-4">
              <h2 className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy-900">Tìm kiếm</h2>
              <form action="/tim-kiem" role="search" className="mt-2.5 flex h-9 border border-line">
                <input
                  name="q"
                  type="search"
                  placeholder="Nhập từ khóa…"
                  aria-label="Tìm kiếm tin tức"
                  className="min-w-0 flex-1 px-2.5 text-[12px] outline-none focus:bg-navy-50/60"
                />
                <button type="submit" aria-label="Tìm kiếm" className="flex w-9 items-center justify-center bg-flag-600 text-white hover:bg-flag-700">
                  <SearchIcon className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="border border-line bg-white">
              <h2 className="border-b border-line px-4 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy-900">
                Danh mục
              </h2>
              <ul className="divide-y divide-line/80">
                {tabs.map((tab) => (
                  <li key={tab.value}>
                    <Link
                      href={tab.href}
                      className={`flex items-center justify-between px-4 py-2.5 text-[12px] hover:bg-navy-50 ${
                        tab.value === category ? "font-semibold text-flag-600" : "text-navy-900"
                      }`}
                    >
                      {tab.label}
                      <ChevronRightIcon className="h-3.5 w-3.5 text-muted/60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line bg-white">
              <h2 className="border-b border-line px-4 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy-900">
                Bài viết gần đây
              </h2>
              <ul className="divide-y divide-line/80">
                {latest.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/tin-tuc/${post.slug}`} className="group block px-4 py-2.5 hover:bg-navy-50">
                      <p className="text-[12px] font-medium leading-snug text-navy-900 group-hover:text-flag-600">
                        {post.title}
                      </p>
                      <p className="mt-1 text-[10.5px] text-muted">{post.dateLabel}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line bg-navy-800 p-4 text-white">
              <h2 className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-gold-300">Cần hỗ trợ?</h2>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/70">
                Chuyên viên Song Hành sẵn sàng giải đáp thắc mắc về kế toán và thuế.
              </p>
              <a href={site.hotlineHref} className="mt-3 flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-gold-300" />
                <span className="text-[14px] font-bold">{site.hotline}</span>
              </a>
              <a href={`mailto:${site.email}`} className="mt-1.5 flex items-center gap-2 text-[11.5px] text-white/70 hover:text-white">
                <MailIcon className="h-3.5 w-3.5" />
                {site.email}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
