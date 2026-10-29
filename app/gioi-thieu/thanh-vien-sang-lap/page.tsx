import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { founders, site } from "@/lib/site";
import { ArrowRightIcon, CheckIcon, MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Thành viên sáng lập",
  description:
    "Ba thành viên sáng lập Công ty TNHH Dịch vụ Kế toán Song Hành: kinh nghiệm, chuyên môn và lĩnh vực phụ trách.",
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(-2)
    .map((part) => part[0])
    .join("");
}

export default function FoundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Thành viên sáng lập"
        description="Ba người đặt nền móng cho Song Hành, mỗi người phụ trách một mảng chuyên môn và cùng chịu trách nhiệm về chất lượng hồ sơ khách hàng."
        crumbs={[{ label: "Giới thiệu", href: "/gioi-thieu" }, { label: "Thành viên sáng lập" }]}
      />

      <section className="py-10 md:py-12">
        <div className="container-page">
          <div className="grid gap-5">
            {founders.map((founder, index) => (
              <article
                key={founder.name}
                className="grid gap-0 border border-line bg-white md:grid-cols-[240px_1fr]"
              >
                <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 px-6 py-8 text-center text-white">
                  <div className="gov-pattern absolute inset-0 opacity-60" aria-hidden />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-400/70 bg-navy-950/50">
                    <span className="font-serif text-3xl font-bold tracking-wide text-gold-200">
                      {initials(founder.name)}
                    </span>
                  </div>
                  <p className="relative mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                    Thành viên sáng lập 0{index + 1}
                  </p>
                  <p className="relative mt-1 text-[14px] font-bold">{founder.name}</p>
                  <p className="relative mt-0.5 text-[11px] text-white/65">{founder.role.split(" – ")[0]}</p>
                </div>

                <div className="p-5 md:p-6">
                  <h2 className="font-serif text-xl font-bold text-navy-900">{founder.name}</h2>
                  <p className="mt-0.5 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-flag-600">
                    {founder.role}
                  </p>
                  <p className="mt-2 border-y border-line py-2 text-[11.5px] text-muted">{founder.credentials}</p>
                  <p className="mt-3 text-[12.5px] leading-relaxed text-navy-900/85">{founder.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {founder.focus.map((item) => (
                      <span
                        key={item}
                        className="border border-line bg-paper px-2 py-0.5 text-[10.5px] font-medium text-navy-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-navy-700 hover:text-flag-600"
                  >
                    <MailIcon className="h-3.5 w-3.5" />
                    Liên hệ qua văn phòng công ty
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-10 md:py-12">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <blockquote className="border-l-4 border-flag-500 pl-5">
            <p className="font-serif text-[19px] font-medium leading-relaxed text-navy-900 md:text-[22px]">
              “Khách hàng thuê dịch vụ kế toán không phải để có người nhập liệu, mà để có người chịu trách
              nhiệm trước cơ quan thuế thay mình. Chúng tôi hiểu điều đó và xây dựng quy trình để bảo đảm.”
            </p>
            <footer className="mt-3 text-[12px] text-muted">
              <span className="font-semibold text-navy-900">Nguyễn Thu Hà</span> – Giám đốc, Thành viên sáng lập
            </footer>
          </blockquote>

          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-navy-900">
              Nguyên tắc làm việc của ban sáng lập
            </h2>
            <ul className="mt-3 space-y-2.5">
              {[
                "Mọi hồ sơ tư vấn quan trọng đều được ít nhất hai thành viên sáng lập xem xét.",
                "Không nhận hồ sơ khi không đủ năng lực chuyên môn hoặc thời gian phục vụ.",
                "Không hứa hẹn kết quả trái quy định của pháp luật để giành khách hàng.",
                "Chịu trách nhiệm cá nhân với các sai sót thuộc phạm vi mình phụ trách.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-navy-900/85">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-flag-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/gioi-thieu/doi-ngu-nhan-su"
              className="mt-5 inline-flex h-10 items-center gap-2 bg-navy-800 px-5 text-[11.5px] font-bold uppercase tracking-[0.07em] text-white transition-colors hover:bg-navy-700"
            >
              Xem đội ngũ nhân sự
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
