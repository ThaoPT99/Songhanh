import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services, site } from "@/lib/site";
import { ArrowRightIcon, PhoneIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Thông báo"
        title="Trang quý khách tìm kiếm không tồn tại"
        description="Đường dẫn có thể đã thay đổi hoặc nội dung đã được di chuyển. Quý khách vui lòng chọn một trong các mục dưới đây."
        crumbs={[{ label: "Không tìm thấy trang" }]}
      />

      <section className="py-10">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-navy-900">
              Đường dẫn thường được quan tâm
            </h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Trang chủ", href: "/" },
                { label: "Giới thiệu công ty", href: "/gioi-thieu" },
                { label: "Dịch vụ cung cấp", href: "/dich-vu" },
                { label: "Tin tức", href: "/tin-tuc" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between gap-2 border border-line bg-white px-4 py-3 text-[12.5px] font-semibold text-navy-900 transition-colors hover:border-navy-600 hover:text-flag-600"
                  >
                    {item.label}
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-6 text-[13px] font-bold uppercase tracking-[0.08em] text-navy-900">
              Hoặc xem theo dịch vụ
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/dich-vu/${service.slug}`}
                    className="inline-block border border-line bg-white px-3 py-1.5 text-[11.5px] text-navy-800 transition-colors hover:border-navy-600 hover:text-flag-600"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t-4 border-gold-400 bg-navy-800 p-5 text-white">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold-300">Cần hỗ trợ?</p>
            <p className="mt-2 text-[14px] font-bold leading-snug">Gọi chuyên viên Song Hành để được hướng dẫn</p>
            <a href={site.hotlineHref} className="mt-3 flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-gold-300" />
              <span className="text-[16px] font-bold">{site.hotline}</span>
            </a>
            <Link
              href="/#tu-van"
              className="mt-4 flex h-10 items-center justify-center gap-2 bg-gold-400 text-[11.5px] font-bold uppercase tracking-[0.06em] text-navy-950 hover:bg-gold-300"
            >
              Gửi yêu cầu tư vấn
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
