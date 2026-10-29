import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { categoryLabels, posts, services } from "@/lib/site";
import { ArrowRightIcon, SearchIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Tìm kiếm",
  description: "Tìm kiếm dịch vụ và tin tức trên website của Công ty TNHH Dịch vụ Kế toán Song Hành.",
};

type SearchParams = Promise<{ q?: string | string[] }>;

export default function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}

function SearchFallback() {
  return (
    <>
      <PageHero
        eyebrow="Tìm kiếm"
        title="Tìm kiếm trên website"
        description="Nhập từ khóa để tìm dịch vụ, tin tức và hướng dẫn chuyên môn."
        crumbs={[{ label: "Tìm kiếm" }]}
      />
      <section className="py-8 md:py-10">
        <div className="container-page">
          <div className="h-11 max-w-2xl animate-pulse border border-line bg-white" />
        </div>
      </section>
    </>
  );
}

async function SearchResults({ searchParams }: { searchParams: SearchParams }) {
  const { q } = await searchParams;
  const keyword = (Array.isArray(q) ? q[0] : q)?.toString().trim() ?? "";
  const needle = keyword.toLowerCase();

  const serviceResults = needle
    ? services.filter((service) =>
        [service.title, service.summary, ...service.intro, ...service.highlights]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      )
    : [];

  const postResults = needle
    ? posts.filter((post) => [post.title, post.excerpt, ...post.body].join(" ").toLowerCase().includes(needle))
    : [];

  const total = serviceResults.length + postResults.length;

  return (
    <>
      <PageHero
        eyebrow="Tìm kiếm"
        title={keyword ? `Kết quả cho “${keyword}”` : "Tìm kiếm trên website"}
        description={
          keyword
            ? `Tìm thấy ${total} kết quả phù hợp với từ khóa.`
            : "Nhập từ khóa để tìm dịch vụ, tin tức và hướng dẫn chuyên môn."
        }
        crumbs={[{ label: "Tìm kiếm" }]}
      />

      <section className="py-8 md:py-10">
        <div className="container-page">
          <form action="/tim-kiem" role="search" className="flex h-11 max-w-2xl border border-line bg-white">
            <input
              name="q"
              defaultValue={keyword}
              type="search"
              placeholder="Ví dụ: kế toán trọn gói, hoàn thuế, thành lập công ty…"
              aria-label="Từ khóa tìm kiếm"
              className="min-w-0 flex-1 px-3.5 text-[13px] outline-none placeholder:text-muted/60 focus:bg-navy-50/50"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-flag-600 px-5 text-[12px] font-bold uppercase tracking-[0.06em] text-white hover:bg-flag-700"
            >
              <SearchIcon className="h-4 w-4" />
              Tìm kiếm
            </button>
          </form>

          {keyword && total === 0 && (
            <div className="mt-6 border border-line bg-white p-8 text-center">
              <p className="text-[14px] font-semibold text-navy-900">Không tìm thấy kết quả phù hợp</p>
              <p className="mx-auto mt-1.5 max-w-lg text-[12.5px] leading-relaxed text-muted">
                Quý khách thử từ khóa khác hoặc liên hệ trực tiếp để được chuyên viên hỗ trợ.
              </p>
              <Link
                href="/#tu-van"
                className="mt-4 inline-flex h-10 items-center gap-2 bg-navy-800 px-5 text-[11.5px] font-bold uppercase tracking-[0.06em] text-white hover:bg-navy-700"
              >
                Gửi yêu cầu tư vấn
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {serviceResults.length > 0 && (
            <div className="mt-7">
              <h2 className="border-b-2 border-navy-800 pb-2 text-[13px] font-bold uppercase tracking-[0.06em] text-navy-900">
                Dịch vụ ({serviceResults.length})
              </h2>
              <ul className="mt-3 space-y-3">
                {serviceResults.map((service) => (
                  <li key={service.slug} className="border border-line bg-white p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-flag-600">
                      Dịch vụ
                    </span>
                    <h3 className="mt-0.5 text-[14px] font-bold text-navy-900">
                      <Link href={`/dich-vu/${service.slug}`} className="hover:text-flag-600">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-muted">{service.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {postResults.length > 0 && (
            <div className="mt-7">
              <h2 className="border-b-2 border-navy-800 pb-2 text-[13px] font-bold uppercase tracking-[0.06em] text-navy-900">
                Tin tức ({postResults.length})
              </h2>
              <ul className="mt-3 space-y-3">
                {postResults.map((post) => (
                  <li key={post.slug} className="border border-line bg-white p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-flag-600">
                      {categoryLabels[post.category]} · {post.dateLabel}
                    </span>
                    <h3 className="mt-0.5 text-[14px] font-bold text-navy-900">
                      <Link href={`/tin-tuc/${post.slug}`} className="hover:text-flag-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-muted">{post.excerpt}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
