import Link from "next/link";
import { posts, services, site, team } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import PostCard from "@/components/PostCard";
import NewsThumb from "@/components/NewsThumb";
import ConsultationForm from "@/components/ConsultationForm";
import { Emblem } from "@/components/Logo";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  HeadsetIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ServiceIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/Icons";

const quickLinks = [
  {
    title: "Kế toán trọn gói",
    description: "Sổ sách, báo cáo tài chính",
    href: "/dich-vu/ke-toan",
    icon: "calculator" as const,
  },
  {
    title: "Tư vấn thuế",
    description: "Kê khai, quyết toán, hoàn thuế",
    href: "/dich-vu/tu-van-thue",
    icon: "scale" as const,
  },
  {
    title: "Thành lập doanh nghiệp",
    description: "Hồ sơ trọn gói trong 7 ngày",
    href: "/dich-vu/thanh-lap-doanh-nghiep",
    icon: "building" as const,
  },
  {
    title: "Liên hệ chuyên viên",
    description: "Tư vấn miễn phí 30 phút",
    href: "/#tu-van",
    icon: "headset" as const,
  },
];

const recruitment = posts.filter((post) => post.category === "tuyen-dung").slice(0, 3);
const latestPosts = posts.filter((post) => post.category === "hoat-dong").slice(0, 3);
const featuredPost = posts[0];

export default function HomePage() {
  return (
    <>
      {/* Thanh thông báo */}
      <div className="border-b border-line bg-white">
        <div className="container-page flex items-center gap-3 py-2 text-[12px]">
          <span className="shrink-0 bg-flag-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
            Thông báo
          </span>
          <Link
            href={`/tin-tuc/${posts[1].slug}`}
            className="min-w-0 truncate text-navy-800 transition-colors hover:text-flag-600"
          >
            {posts[1].title}
          </Link>
          <span className="ml-auto hidden shrink-0 items-center gap-1.5 text-[11px] text-muted sm:flex">
            <CalendarIcon className="h-3.5 w-3.5" />
            {posts[1].dateLabel}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-paper pt-6">
        <div className="container-page grid gap-5 lg:grid-cols-[1fr_352px]">
          <div className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 text-white">
            <div className="gov-pattern absolute inset-0 opacity-70" aria-hidden />
            <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-gold-400/20" aria-hidden />
            <div className="absolute -right-4 -top-8 h-52 w-52 rounded-full border border-gold-400/15" aria-hidden />
            <svg
              className="pointer-events-none absolute bottom-0 right-6 hidden h-[78%] w-[46%] opacity-[0.14] md:block"
              viewBox="0 0 220 280"
              fill="none"
              aria-hidden
            >
              <rect x="24" y="18" width="150" height="200" stroke="#f0c878" strokeWidth="2" />
              <path d="M44 48h110M44 72h110M44 96h84M44 120h110M44 144h64" stroke="#ffffff" strokeWidth="2" />
              <circle cx="150" cy="210" r="34" stroke="#e0ad46" strokeWidth="2" />
              <path d="M124 250h64M136 264h40" stroke="#e0ad46" strokeWidth="2" />
            </svg>

            <div className="relative flex h-full flex-col justify-between p-6 md:p-9">
              <div className="max-w-xl">
                <p className="flex items-center gap-2.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-gold-300">
                  <span className="h-[2px] w-6 bg-flag-500" aria-hidden />
                  Đồng hành cùng doanh nghiệp từ năm 2014
                </p>
                <h1 className="mt-4 text-[26px] font-bold leading-[1.28] tracking-tight md:text-[38px]">
                  Kế toán chuẩn mực,
                  <br className="hidden sm:block" /> thuế minh bạch,
                  <br className="hidden sm:block" /> doanh nghiệp an tâm phát triển
                </h1>
                <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-white/75 md:text-sm">
                  Song Hành cung cấp dịch vụ kế toán, tư vấn thuế và thủ tục pháp lý trọn gói cho doanh
                  nghiệp. Mỗi hồ sơ được một kế toán phụ trách và một kế toán trưởng soát xét độc lập.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/#tu-van"
                    className="inline-flex h-11 items-center gap-2 bg-gold-400 px-5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-navy-950 transition-colors hover:bg-gold-300"
                  >
                    Nhận tư vấn miễn phí
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/dich-vu"
                    className="inline-flex h-11 items-center gap-2 border border-white/35 px-5 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:border-gold-300 hover:text-gold-300"
                  >
                    Xem dịch vụ
                  </Link>
                </div>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-4 text-[11.5px] text-white/70">
                {["Chứng chỉ hành nghề dịch vụ kế toán", "Bảo mật dữ liệu khách hàng", "Phản hồi trong 4 giờ làm việc"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <CheckIcon className="h-3.5 w-3.5 text-gold-300" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Cột phải */}
          <div className="flex flex-col gap-5">
            <div className="border border-line bg-white">
              <h2 className="flex items-center gap-2 bg-navy-800 px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white">
                <span className="h-3.5 w-[3px] bg-gold-400" aria-hidden />
                Dịch vụ nổi bật
              </h2>
              <ul className="divide-y divide-line/80">
                {services.map((service, index) => {
                  return (
                    <li key={service.slug}>
                      <Link
                        href={`/dich-vu/${service.slug}`}
                        className="group flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-navy-50"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-line bg-paper text-navy-700 transition-colors group-hover:border-navy-600 group-hover:bg-white">
                          <ServiceIcon name={service.icon} className="h-4 w-4" />
                        </span>
                        <span className="flex-1 text-[12.5px] font-medium text-navy-900">{service.title}</span>
                        <span className="text-[10px] font-semibold tabular-nums text-muted/70">
                          0{index + 1}
                        </span>
                        <ChevronRightIcon className="h-3.5 w-3.5 text-muted/50 transition-transform group-hover:translate-x-0.5 group-hover:text-flag-600" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border border-line bg-white p-4">
              <h2 className="flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy-900">
                <HeadsetIcon className="h-4 w-4 text-flag-600" />
                Hỗ trợ trực tuyến
              </h2>
              <a
                href={site.hotlineHref}
                className="mt-2 block font-serif text-2xl font-bold tracking-wide text-flag-600 hover:text-flag-700"
              >
                {site.hotline}
              </a>
              <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{site.workingHours}</p>
              <div className="mt-3 space-y-1.5 border-t border-line pt-2.5 text-[11.5px] text-muted">
                <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-navy-800">
                  <MailIcon className="h-3.5 w-3.5" /> {site.email}
                </a>
                <p className="flex items-start gap-1.5">
                  <MapPinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {site.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Truy cập nhanh */}
      <section className="pt-5">
        <div className="container-page">
          <ul className="grid divide-y divide-line border border-line bg-white sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {quickLinks.map((link) => {
              return (
                <li key={link.title} className="border-line sm:[&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0">
                  <Link href={link.href} className="group flex items-center gap-3 px-4 py-4 transition-colors hover:bg-navy-50">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-100 bg-navy-50 text-navy-700">
                      {link.icon === "headset" ? (
                        <HeadsetIcon className="h-5 w-5" />
                      ) : (
                        <ServiceIcon name={link.icon} className="h-5 w-5" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12.5px] font-semibold text-navy-900 group-hover:text-flag-600">
                        {link.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-muted">{link.description}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Dịch vụ */}
      <section className="py-10 md:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Lĩnh vực hoạt động"
            title="Dịch vụ cung cấp"
            description="Giải pháp kế toán – thuế – pháp lý doanh nghiệp được thiết kế theo quy mô và đặc thù từng ngành."
            action={{ label: "Tất cả dịch vụ", href: "/dich-vu" }}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              return (
                <article
                  key={service.slug}
                  className="group flex flex-col border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-navy-600 hover:shadow-[0_10px_30px_rgba(6,31,54,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-navy-100 bg-navy-50 text-navy-700 transition-colors group-hover:border-navy-700 group-hover:bg-navy-800 group-hover:text-gold-300">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="h-8 w-8 border-b border-r border-line" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-navy-900">
                    <Link href={`/dich-vu/${service.slug}`} className="transition-colors hover:text-flag-600">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-muted">{service.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="border border-line bg-paper px-2 py-0.5 text-[10.5px] font-medium text-navy-700"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/dich-vu/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 border-t border-line pt-3 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-navy-700 transition-colors hover:text-flag-600"
                  >
                    Chi tiết dịch vụ
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </article>
              );
            })}

            <article className="flex flex-col justify-between bg-navy-800 p-5 text-white">
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-300">Tư vấn theo yêu cầu</p>
                <h3 className="mt-2 text-[17px] font-bold leading-snug">
                  Chưa xác định được gói dịch vụ phù hợp?
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-white/75">
                  Chuyên viên Song Hành khảo sát nhu cầu, đề xuất phạm vi công việc và báo giá trong 1 ngày
                  làm việc.
                </p>
              </div>
              <div className="mt-5 space-y-2">
                <Link
                  href="/#tu-van"
                  className="flex h-10 items-center justify-center gap-2 bg-gold-400 text-[12px] font-bold uppercase tracking-[0.06em] text-navy-950 transition-colors hover:bg-gold-300"
                >
                  Đặt lịch tư vấn
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={site.hotlineHref}
                  className="flex h-10 items-center justify-center gap-2 border border-white/30 text-[12px] font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {site.hotline}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="border-y border-line bg-white py-10 md:py-14">
        <div className="container-page grid items-center gap-8 lg:grid-cols-[440px_1fr] lg:gap-12">
          <div className="relative">
            <div className="border border-line bg-navy-50 p-5">
              <div className="relative rotate-[-1.5deg] border border-gold-400/60 bg-white p-5 shadow-[0_10px_30px_rgba(6,31,54,0.1)]">
                <div className="flex items-center gap-3 border-b border-dashed border-line pb-3">
                  <Emblem className="h-11 w-11 shrink-0" />
                  <div>
                    <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-muted">
                      Chứng nhận hành nghề
                    </p>
                    <p className="text-[13px] font-bold uppercase text-navy-900">Dịch vụ kế toán</p>
                  </div>
                </div>
                <div className="mt-3 space-y-1.5">
                  {[92, 76, 84, 60].map((width, index) => (
                    <span key={index} className="block h-1.5 bg-navy-100" style={{ width: `${width}%` }} />
                  ))}
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-[0.1em] text-muted">
                  Số đăng ký: 0109 – 876 – 543
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="h-7 w-24 border-b border-navy-800" />
                    <p className="mt-1 text-[9px] uppercase tracking-[0.08em] text-muted">Giám đốc</p>
                  </div>
                  <div className="flex h-16 w-16 -rotate-12 items-center justify-center rounded-full border-2 border-flag-600/70 text-center text-[7px] font-bold uppercase leading-tight text-flag-600/80">
                    Song Hành
                    <br />
                    Hà Nội
                  </div>
                </div>
              </div>

              <div className="relative mt-[-14px] ml-auto w-[86%] border border-line bg-white p-3 shadow-[0_8px_24px_rgba(6,31,54,0.1)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-800">
                  Hồ sơ đang phụ trách
                </p>
                <div className="mt-2 flex items-end justify-between">
                  <div className="space-y-1">
                    <span className="block h-1.5 w-28 bg-navy-100" />
                    <span className="block h-1.5 w-20 bg-navy-100" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-flag-600">800+</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 -top-3 bg-flag-600 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white shadow-sm">
              12 năm kinh nghiệm
            </div>
          </div>

          <div>
            <p className="flex items-center gap-2.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-navy-600">
              <span className="h-[2px] w-6 bg-flag-500" aria-hidden />
              Về Song Hành
            </p>
            <h2 className="mt-2 text-[22px] font-bold leading-snug text-navy-900 md:text-[27px]">
              Đơn vị kế toán – thuế đáng tin cậy của hơn 800 doanh nghiệp
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">
              Được thành lập năm 2014, Song Hành xây dựng quy trình phục vụ dựa trên nguyên tắc tuân thủ
              pháp luật, minh bạch số liệu và chịu trách nhiệm đến cùng với hồ sơ của khách hàng. Mỗi
              khách hàng có một kế toán phụ trách chính, một kế toán trưởng soát xét và một chuyên viên
              chăm sóc theo dõi tiến độ.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldIcon, title: "Tuân thủ chuẩn mực", detail: "Áp dụng VAS và chế độ kế toán hiện hành" },
                { icon: UsersIcon, title: "Soát xét hai lớp", detail: "Kế toán phụ trách và kế toán trưởng" },
                { icon: ClockIcon, title: "Đúng hạn nghĩa vụ", detail: "Theo dõi lịch kê khai, nộp thuế" },
                { icon: BriefcaseIcon, title: "Pháp lý trọn gói", detail: "Thành lập, thay đổi, giải thể doanh nghiệp" },
              ].map((item) => (
                <div key={item.title} className="flex gap-2.5 border-l-2 border-navy-100 pl-3">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-flag-600" />
                  <div>
                    <p className="text-[12.5px] font-semibold text-navy-900">{item.title}</p>
                    <p className="mt-0.5 text-[11.5px] leading-snug text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/gioi-thieu"
                className="inline-flex h-10 items-center gap-2 bg-navy-800 px-5 text-[11.5px] font-bold uppercase tracking-[0.07em] text-white transition-colors hover:bg-navy-700"
              >
                Tìm hiểu về công ty
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/gioi-thieu/doi-ngu-nhan-su"
                className="inline-flex h-10 items-center gap-2 border border-line px-5 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-navy-800 transition-colors hover:border-navy-700"
              >
                Đội ngũ nhân sự
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Số liệu */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="gov-pattern absolute inset-0 opacity-50" aria-hidden />
        <div className="container-page relative grid grid-cols-2 divide-white/10 py-8 md:grid-cols-4 md:divide-x">
          {site.stats.map((stat) => (
            <div key={stat.label} className="px-2 py-3 text-center md:px-6">
              <p className="font-serif text-3xl font-bold tracking-tight text-gold-300 md:text-[38px]">{stat.value}</p>
              <p className="mt-1 text-[11.5px] leading-snug text-white/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tin tức */}
      <section className="py-10 md:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Thông tin &amp; sự kiện"
            title="Tin tức"
            description="Hoạt động của công ty, cập nhật chính sách và cơ hội nghề nghiệp tại Song Hành."
            action={{ label: "Tất cả tin tức", href: "/tin-tuc" }}
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_332px]">
            <div className="space-y-4">
              <article className="group grid border border-line bg-white md:grid-cols-[280px_1fr]">
                <Link href={`/tin-tuc/${featuredPost.slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden>
                  <NewsThumb category={featuredPost.category} className="h-full min-h-[180px]" />
                </Link>
                <div className="flex flex-col p-5">
                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <span className="bg-flag-600 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-white">
                      Tiêu điểm
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {featuredPost.dateLabel}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-[16px] font-bold leading-snug text-navy-900 md:text-[18px]">
                    <Link href={`/tin-tuc/${featuredPost.slug}`} className="transition-colors hover:text-flag-600">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-muted">{featuredPost.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
                    <span className="text-[11px] text-muted">
                      {featuredPost.author} · {featuredPost.readTime}
                    </span>
                    <Link
                      href={`/tin-tuc/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-navy-700 hover:text-flag-600"
                    >
                      Đọc tiếp
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                {latestPosts.slice(1).map((post, index) => (
                  <PostCard key={post.slug} post={post} index={index + 1} />
                ))}
              </div>
            </div>

            <aside className="space-y-5">
              <div className="border border-line bg-white">
                <h2 className="flex items-center justify-between gap-2 border-b border-line px-4 py-3">
                  <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-navy-900">
                    <BriefcaseIcon className="h-4 w-4 text-flag-600" />
                    Tin tuyển dụng
                  </span>
                  <Link href="/tin-tuc/tuyen-dung" className="text-[10.5px] font-semibold text-navy-600 hover:text-flag-600">
                    Xem tất cả
                  </Link>
                </h2>
                <ul className="divide-y divide-line/80">
                  {recruitment.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/tin-tuc/${post.slug}`} className="group block px-4 py-3 hover:bg-navy-50">
                        <p className="text-[12.5px] font-semibold leading-snug text-navy-900 group-hover:text-flag-600">
                          {post.title}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-[10.5px] text-muted">
                          <ClockIcon className="h-3 w-3" />
                          {post.dateLabel}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-line px-4 py-3">
                  <Link
                    href="/tin-tuc/tuyen-dung"
                    className="flex h-9 items-center justify-center border border-navy-700 text-[11px] font-bold uppercase tracking-[0.06em] text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
                  >
                    Cơ hội nghề nghiệp
                  </Link>
                </div>
              </div>

              <div className="border border-line bg-white">
                <h2 className="border-b border-line px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-navy-900">
                  Hỗ trợ nhanh
                </h2>
                <div className="space-y-3 px-4 py-3.5">
                  <a href={site.hotlineHref} className="flex items-start gap-2.5">
                    <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-flag-600" />
                    <span>
                      <span className="block text-[10.5px] uppercase tracking-[0.08em] text-muted">Đường dây nóng</span>
                      <span className="block text-[14px] font-bold text-navy-900">{site.hotline}</span>
                    </span>
                  </a>
                  <a href={`mailto:${site.email}`} className="flex items-start gap-2.5">
                    <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-flag-600" />
                    <span>
                      <span className="block text-[10.5px] uppercase tracking-[0.08em] text-muted">Thư điện tử</span>
                      <span className="block text-[12.5px] font-semibold text-navy-900">{site.email}</span>
                    </span>
                  </a>
                  <div className="flex items-start gap-2.5 border-t border-line pt-3">
                    <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-flag-600" />
                    <span className="text-[11.5px] leading-relaxed text-muted">{site.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="border border-navy-800 bg-navy-800 p-4 text-white">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold-300">Đội ngũ</p>
                <p className="mt-1.5 text-[13px] font-bold">45 chuyên viên kế toán, thuế và pháp lý</p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-white/65">
                  Trong đó 12 người có chứng chỉ hành nghề dịch vụ kế toán.
                </p>
                <Link
                  href="/gioi-thieu/doi-ngu-nhan-su"
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-gold-300 hover:text-gold-100"
                >
                  Gặp gỡ đội ngũ
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Tư vấn */}
      <section id="tu-van" className="scroll-mt-16 border-t border-line bg-navy-50/70 py-10 md:py-12">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_460px]">
          <div>
            <p className="flex items-center gap-2.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-navy-600">
              <span className="h-[2px] w-6 bg-flag-500" aria-hidden />
              Liên hệ với chúng tôi
            </p>
            <h2 className="mt-2 text-[22px] font-bold leading-snug text-navy-900 md:text-[26px]">
              Đăng ký tư vấn cùng chuyên viên Song Hành
            </h2>
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted">
              Quý khách để lại thông tin, chuyên viên sẽ liên hệ trong vòng 4 giờ làm việc để trao đổi nhu cầu
              và đề xuất phương án. Buổi tư vấn đầu tiên miễn phí trong 30 phút.
            </p>

            <ul className="mt-5 space-y-2.5 text-[13px]">
              {[
                "Được tư vấn trực tiếp bởi kế toán trưởng, không qua tổng đài.",
                "Báo giá minh bạch theo khối lượng công việc, không phát sinh.",
                "Hợp đồng có điều khoản bảo mật và cam kết tiến độ.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-navy-900/85">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-flag-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 border-t border-line pt-5 text-[12.5px] sm:grid-cols-2">
              <a href={site.hotlineHref} className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                <span>
                  <span className="block text-[10.5px] uppercase tracking-[0.08em] text-muted">Điện thoại</span>
                  <span className="font-semibold text-navy-900">{site.hotline}</span>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                <span>
                  <span className="block text-[10.5px] uppercase tracking-[0.08em] text-muted">Thư điện tử</span>
                  <span className="font-semibold text-navy-900">{site.email}</span>
                </span>
              </a>
              <div className="flex items-start gap-2.5 sm:col-span-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                <span>
                  <span className="block text-[10.5px] uppercase tracking-[0.08em] text-muted">Trụ sở</span>
                  <span className="font-medium text-navy-900">{site.address}</span>
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 border border-line bg-white px-4 py-3">
              <div className="flex -space-x-2">
                {team.slice(0, 4).map((member) => (
                  <span
                    key={member.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-navy-700 text-[10px] font-bold text-white"
                  >
                    {member.name
                      .split(" ")
                      .slice(-2)
                      .map((part) => part[0])
                      .join("")}
                  </span>
                ))}
              </div>
              <p className="text-[11.5px] leading-snug text-muted">
                <span className="font-semibold text-navy-900">Đội ngũ đang trực.</span> Chuyên viên phụ trách sẽ
                gọi lại cho quý khách trong giờ làm việc.
              </p>
            </div>
          </div>

          <div className="border-t-4 border-gold-400 bg-white p-5 shadow-[0_14px_40px_rgba(6,31,54,0.08)] md:p-6">
            <h3 className="text-[15px] font-bold uppercase tracking-[0.04em] text-navy-900">
              Thông tin yêu cầu tư vấn
            </h3>
            <p className="mt-1 text-[11.5px] text-muted">
              Các trường có dấu <span className="text-flag-600">*</span> là bắt buộc.
            </p>
            <div className="mt-4">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
