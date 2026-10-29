import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import CtaBand from "@/components/CtaBand";
import { categoryLabels, getPost, posts, site } from "@/lib/site";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
} from "@/components/Icons";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Bài viết không tồn tại" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const related = posts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 2);
  const isRecruitment = post.category === "tuyen-dung";

  return (
    <>
      <PageHero
        eyebrow={categoryLabels[post.category]}
        title={post.title}
        crumbs={[
          { label: "Tin tức", href: "/tin-tuc" },
          { label: categoryLabels[post.category], href: `/tin-tuc/${post.category}` },
        ]}
      />

      <section className="py-8 md:py-10">
        <div className="container-page grid gap-7 lg:grid-cols-[1fr_320px]">
          <article className="min-w-0">
            <div className="border border-line bg-white">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-b border-line bg-paper px-5 py-2.5 text-[11.5px] text-muted">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  {post.dateLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldIcon className="h-3.5 w-3.5" />
                  {post.author}
                </span>
              </div>

              <div className="p-5 md:p-7">
                <p className="border-l-4 border-flag-500 bg-navy-50/70 py-3 pl-4 pr-3 text-[13px] font-medium leading-relaxed text-navy-900">
                  {post.excerpt}
                </p>

                <div className="prose-gov mt-5 text-[13.5px] text-navy-900/90">
                  {post.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                {post.bullets && (
                  <div className="mt-5 border border-line bg-paper p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy-900">
                      {isRecruitment ? "Thông tin vị trí" : "Nội dung cần lưu ý"}
                    </p>
                    <ul className="prose-gov mt-2 text-[12.5px] text-navy-900/85">
                      {post.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {isRecruitment && (
                  <div className="mt-5 flex flex-col gap-3 border border-navy-800 bg-navy-800 p-4 text-white sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-2.5">
                      <BriefcaseIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                      <div>
                        <p className="text-[13px] font-bold">Ứng tuyển vị trí này</p>
                        <p className="mt-0.5 text-[11.5px] text-white/70">
                          Gửi CV và bảng điểm về tuyendung@songhanh.vn
                        </p>
                      </div>
                    </div>
                    <a
                      href="mailto:tuyendung@songhanh.vn"
                      className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 bg-gold-400 px-4 text-[11px] font-bold uppercase tracking-[0.06em] text-navy-950 hover:bg-gold-300"
                    >
                      <MailIcon className="h-3.5 w-3.5" />
                      Gửi hồ sơ
                    </a>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                  <p className="text-[11.5px] text-muted">
                    Nguồn: <span className="font-medium text-navy-800">songhanh.vn</span>
                  </p>
                  <Link
                    href={`/tin-tuc/${post.category}`}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-navy-700 hover:text-flag-600"
                  >
                    Xem thêm {categoryLabels[post.category].toLowerCase()}
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-7">
                <h2 className="border-b-2 border-navy-800 pb-2 text-[14px] font-bold uppercase tracking-[0.04em] text-navy-900">
                  Bài viết cùng chuyên mục
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {related.map((item, index) => (
                    <PostCard key={item.slug} post={item} index={index + 2} />
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="space-y-5">
            <div className="border border-line bg-white">
              <h2 className="border-b border-line px-4 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy-900">
                Chuyên mục
              </h2>
              <ul className="divide-y divide-line/80">
                {(
                  [
                    ["Tất cả tin tức", "/tin-tuc"],
                    ["Tin hoạt động", "/tin-tuc/hoat-dong"],
                    ["Tin tuyển dụng", "/tin-tuc/tuyen-dung"],
                  ] as const
                ).map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center justify-between px-4 py-2.5 text-[12px] text-navy-900 hover:bg-navy-50 hover:text-flag-600"
                    >
                      {label}
                      <ChevronRightIcon className="h-3.5 w-3.5 text-muted/60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line bg-white p-4">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy-900">Cần tư vấn thêm?</p>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted">
                Đội ngũ Song Hành giải đáp miễn phí các vấn đề kế toán, thuế của doanh nghiệp.
              </p>
              <a href={site.hotlineHref} className="mt-3 flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-flag-600" />
                <span className="text-[14px] font-bold text-navy-900">{site.hotline}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-1.5 flex items-center gap-2 text-[11.5px] text-muted hover:text-navy-800"
              >
                <MailIcon className="h-3.5 w-3.5" />
                {site.email}
              </a>
              <Link
                href="/#tu-van"
                className="mt-3 flex h-9 items-center justify-center bg-flag-600 text-[11px] font-bold uppercase tracking-[0.06em] text-white hover:bg-flag-700"
              >
                Gửi câu hỏi
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
