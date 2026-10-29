import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { services, site } from "@/lib/site";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  ServiceIcon,
  ShieldIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Dịch vụ cung cấp",
  description:
    "Các dịch vụ của Song Hành: kế toán trọn gói, tư vấn thuế, thành lập và giải thể doanh nghiệp, đại diện pháp lý và đào tạo kế toán.",
};

const principles = [
  {
    title: "Một đầu mối phụ trách",
    detail: "Khách hàng làm việc với một chuyên viên phụ trách xuyên suốt, không phải giải thích lại hồ sơ mỗi lần liên hệ.",
  },
  {
    title: "Soát xét trước khi bàn giao",
    detail: "Mọi báo cáo đều qua kế toán trưởng kiểm tra số liệu và rủi ro thuế trước khi gửi khách hàng.",
  },
  {
    title: "Báo giá theo khối lượng",
    detail: "Khảo sát số lượng chứng từ, chi nhánh và đặc thù ngành để báo giá trọn gói, tránh phát sinh.",
  },
  {
    title: "Chịu trách nhiệm khi kiểm tra",
    detail: "Đồng hành và giải trình cùng khách hàng khi cơ quan thuế kiểm tra phần số liệu do Song Hành thực hiện.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ cung cấp"
        title="Giải pháp kế toán, thuế và pháp lý doanh nghiệp"
        description="Năm nhóm dịch vụ được thiết kế để doanh nghiệp có thể lựa chọn riêng lẻ hoặc kết hợp thành gói đồng hành toàn diện."
        crumbs={[{ label: "Dịch vụ cung cấp" }]}
      />

      <section className="py-10 md:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Danh mục dịch vụ"
            title="Song Hành cung cấp những gì"
            description="Mỗi dịch vụ đều có phạm vi công việc, quy trình và bảng phí công khai để doanh nghiệp đối chiếu trước khi ký hợp đồng."
          />

          <div className="space-y-4">
            {services.map((service, index) => {
              return (
                <article
                  key={service.slug}
                  className="grid gap-0 border border-line bg-white transition-colors hover:border-navy-600 md:grid-cols-[86px_1fr_240px]"
                >
                  <div className="flex items-start justify-center border-b border-line bg-navy-50 p-4 md:items-center md:border-b-0 md:border-r">
                    <span className="flex h-12 w-12 items-center justify-center border border-navy-100 bg-white text-navy-700">
                      <ServiceIcon name={service.icon} className="h-6 w-6" />
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                        Dịch vụ 0{index + 1}
                      </span>
                      <span className="h-3 w-px bg-line" aria-hidden />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-flag-600">
                        {service.highlights[0]}
                      </span>
                    </div>
                    <h2 className="mt-1.5 text-[16px] font-bold text-navy-900">
                      <Link href={`/dich-vu/${service.slug}`} className="transition-colors hover:text-flag-600">
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-1.5 max-w-2xl text-[12.5px] leading-relaxed text-muted">{service.summary}</p>
                    <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-1.5 text-[11.5px] text-navy-800">
                          <CheckIcon className="h-3 w-3 text-flag-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center gap-2 border-t border-line bg-paper p-4 md:border-l md:border-t-0">
                    <Link
                      href={`/dich-vu/${service.slug}`}
                      className="flex h-9 items-center justify-center gap-1.5 bg-navy-800 text-[11px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-navy-700"
                    >
                      Xem chi tiết
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={site.hotlineHref}
                      className="flex h-9 items-center justify-center gap-1.5 border border-line bg-white text-[11px] font-semibold uppercase tracking-[0.06em] text-navy-800 transition-colors hover:border-flag-600 hover:text-flag-600"
                    >
                      <PhoneIcon className="h-3.5 w-3.5" />
                      Tư vấn ngay
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-10 md:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nguyên tắc phục vụ"
            title="Bốn điều doanh nghiệp nhận được khi làm việc với Song Hành"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div key={principle.title} className="border border-line bg-paper p-5">
                <ShieldIcon className="h-5 w-5 text-flag-600" />
                <h3 className="mt-2.5 text-[13px] font-bold text-navy-900">{principle.title}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{principle.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-[20px] font-bold text-navy-900 md:text-[23px]">
              Không chắc nên bắt đầu từ dịch vụ nào?
            </h2>
            <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
              Phần lớn doanh nghiệp mới bắt đầu bằng dịch vụ kế toán, sau đó bổ sung tư vấn thuế khi quy mô
              tăng. Với doanh nghiệp đang chuẩn bị thành lập, gói khởi nghiệp kết hợp thành lập doanh nghiệp
              và kế toán 6 tháng đầu thường tiết kiệm chi phí nhất.
            </p>
            <ol className="mt-5 space-y-3">
              {[
                { step: "01", text: "Doanh nghiệp mới thành lập: thành lập doanh nghiệp + kế toán 6 tháng đầu." },
                { step: "02", text: "Doanh nghiệp đang hoạt động: kế toán trọn gói + rà soát thuế hằng năm." },
                { step: "03", text: "Doanh nghiệp chuẩn bị kiểm tra: rà soát rủi ro + hỗ trợ giải trình thuế." },
                { step: "04", text: "Doanh nghiệp ngừng hoạt động: quyết toán thuế + giải thể doanh nghiệp." },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-3 border border-line bg-white p-3.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-navy-800 text-[10.5px] font-bold text-gold-300">
                    {item.step}
                  </span>
                  <p className="text-[12.5px] leading-relaxed text-navy-900/85">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t-4 border-gold-400 bg-navy-800 p-5 text-white">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold-300">Tư vấn miễn phí</p>
            <p className="mt-2 text-[17px] font-bold leading-snug">
              Trao đổi 30 phút với chuyên viên để chọn đúng gói dịch vụ
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-white/70">
              Song Hành sẽ khảo sát nhu cầu, đề xuất phạm vi công việc và báo giá trong vòng 1 ngày làm việc.
            </p>
            <a
              href={site.hotlineHref}
              className="mt-4 flex items-center gap-3 border border-white/20 bg-white/5 px-3 py-2.5 transition-colors hover:border-gold-300"
            >
              <PhoneIcon className="h-5 w-5 text-gold-300" />
              <span>
                <span className="block text-[10px] uppercase tracking-[0.08em] text-white/60">Hotline</span>
                <span className="block text-[16px] font-bold text-white">{site.hotline}</span>
              </span>
            </a>
            <Link
              href="/#tu-van"
              className="mt-3 flex h-10 items-center justify-center gap-2 bg-gold-400 text-[11.5px] font-bold uppercase tracking-[0.06em] text-navy-950 transition-colors hover:bg-gold-300"
            >
              Gửi yêu cầu tư vấn
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
