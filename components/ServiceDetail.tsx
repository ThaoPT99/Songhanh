import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ConsultationForm from "@/components/ConsultationForm";
import type { ServiceItem } from "@/lib/site";
import { services, site } from "@/lib/site";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
  ServiceIcon,
  ShieldIcon,
} from "@/components/Icons";

export default function ServiceDetail({ service }: { service: ServiceItem }) {
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Dịch vụ cung cấp"
        title={service.title}
        description={service.summary}
        crumbs={[{ label: "Dịch vụ cung cấp", href: "/dich-vu" }, { label: service.title }]}
      />

      <section className="py-8 md:py-10">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <div className="flex items-start gap-4 border border-line bg-white p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-navy-100 bg-navy-50 text-navy-700">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-[16px] font-bold text-navy-900">Giới thiệu dịch vụ</h2>
                <div className="prose-gov mt-2 text-[13px] text-navy-900/85">
                  {service.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="border-b-2 border-navy-800 pb-2 text-[15px] font-bold uppercase tracking-[0.04em] text-navy-900">
                Phạm vi công việc
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.scope.map((item, index) => (
                  <div key={item.title} className="border border-line bg-white p-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-navy-800 text-[10.5px] font-bold text-gold-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[12.5px] font-bold text-navy-900">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-[12px] leading-relaxed text-muted">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <h2 className="border-b-2 border-navy-800 pb-2 text-[15px] font-bold uppercase tracking-[0.04em] text-navy-900">
                Quy trình thực hiện
              </h2>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.process.map((step) => (
                  <li key={step.step} className="relative border-l-2 border-gold-400 bg-white p-4 pl-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-flag-600">
                      Bước {step.step}
                    </span>
                    <h3 className="mt-1 text-[12.5px] font-bold text-navy-900">{step.title}</h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-muted">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7">
              <h2 className="border-b-2 border-navy-800 pb-2 text-[15px] font-bold uppercase tracking-[0.04em] text-navy-900">
                Bảng phí tham khảo
              </h2>
              <div className="mt-4 overflow-x-auto border border-line bg-white">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="bg-navy-800 text-white">
                      <th scope="col" className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.06em]">
                        Loại hình / khối lượng
                      </th>
                      <th scope="col" className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.06em]">
                        Mức phí
                      </th>
                      <th scope="col" className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.06em]">
                        Ghi chú
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.priceRows.map((row, index) => (
                      <tr key={row.label} className={index % 2 === 1 ? "bg-paper" : "bg-white"}>
                        <td className="border-t border-line px-4 py-2.5 text-[12px] text-navy-900">{row.label}</td>
                        <td className="border-t border-line px-4 py-2.5 text-[12.5px] font-bold text-flag-600">
                          {row.price}
                        </td>
                        <td className="border-t border-line px-4 py-2.5 text-[11.5px] text-muted">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted">{service.priceNote}</p>
            </div>

            <div className="mt-7">
              <h2 className="border-b-2 border-navy-800 pb-2 text-[15px] font-bold uppercase tracking-[0.04em] text-navy-900">
                Câu hỏi thường gặp
              </h2>
              <div className="mt-4 divide-y divide-line border border-line bg-white">
                {service.faq.map((item) => (
                  <details key={item.question} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-[12.5px] font-semibold text-navy-900 hover:bg-navy-50">
                      {item.question}
                      <ChevronDownIcon className="h-4 w-4 shrink-0 text-navy-600 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-4 pb-4 text-[12px] leading-relaxed text-muted">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border border-line bg-navy-50 p-4">
              <ShieldIcon className="h-5 w-5 shrink-0 text-navy-700" />
              <p className="flex-1 text-[12px] leading-relaxed text-navy-900/85">
                Thông tin chi tiết và báo giá chính thức được xác nhận bằng hợp đồng dịch vụ. Liên hệ{" "}
                <a href={site.hotlineHref} className="font-semibold text-flag-600 hover:underline">
                  {site.hotline}
                </a>{" "}
                để được tư vấn.
              </p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="lg:sticky lg:top-20">
              <div className="border border-line bg-white">
                <h2 className="border-b border-line bg-navy-800 px-4 py-3 text-[11.5px] font-bold uppercase tracking-[0.1em] text-white">
                  Yêu cầu tư vấn dịch vụ
                </h2>
                <div className="p-4">
                  <a
                    href={site.hotlineHref}
                    className="mb-3 flex items-center gap-2 border border-line bg-paper px-3 py-2.5 transition-colors hover:border-flag-500"
                  >
                    <PhoneIcon className="h-4 w-4 text-flag-600" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.08em] text-muted">Hotline</span>
                      <span className="block text-[14px] font-bold text-navy-900">{site.hotline}</span>
                    </span>
                  </a>
                  <ConsultationForm compact />
                </div>
              </div>

              <div className="mt-5 border border-line bg-white">
                <h2 className="border-b border-line px-4 py-3 text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy-900">
                  Dịch vụ khác
                </h2>
                <ul className="divide-y divide-line/80">
                  {others.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/dich-vu/${item.slug}`}
                        className="group flex items-center gap-2 px-4 py-2.5 text-[12px] text-navy-900 hover:bg-navy-50 hover:text-flag-600"
                      >
                        <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 text-muted/60" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-line px-4 py-3">
                  <Link
                    href="/dich-vu"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-navy-700 hover:text-flag-600"
                  >
                    Toàn bộ dịch vụ
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="mt-5 border border-line bg-paper p-4">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-navy-900">
                  <CheckIcon className="h-3.5 w-3.5 text-flag-600" />
                  Cam kết chất lượng
                </p>
                <ul className="mt-2 space-y-1.5 text-[11.5px] leading-relaxed text-muted">
                  <li>Kế toán trưởng soát xét toàn bộ hồ sơ.</li>
                  <li>Báo giá trọn gói, không phát sinh.</li>
                  <li>Bảo mật thông tin theo hợp đồng.</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
