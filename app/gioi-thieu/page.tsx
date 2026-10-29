import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Emblem } from "@/components/Logo";
import { site } from "@/lib/site";
import { ArrowRightIcon, CheckIcon, ShieldIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Giới thiệu công ty",
  description:
    "Tầm nhìn, sứ mệnh, giá trị cốt lõi và chặng đường 12 năm hoạt động của Công ty TNHH Dịch vụ Kế toán Song Hành.",
};

const milestones = [
  { year: "2014", title: "Thành lập công ty", detail: "Song Hành được thành lập tại Hà Nội với 5 nhân sự và 8 khách hàng đầu tiên trong lĩnh vực thương mại." },
  { year: "2017", title: "Mở rộng mảng thuế", detail: "Thành lập phòng Tư vấn thuế, tiếp nhận hồ sơ quyết toán và hoàn thuế cho doanh nghiệp sản xuất." },
  { year: "2019", title: "Chuẩn hóa quy trình", detail: "Áp dụng quy trình soát xét hai lớp và bộ tiêu chuẩn chất lượng nội bộ cho toàn bộ hồ sơ khách hàng." },
  { year: "2021", title: "Chuyển đổi số", detail: "Số hóa kho chứng từ, triển khai lưu trữ trực tuyến có phân quyền và làm việc từ xa với khách hàng toàn quốc." },
  { year: "2023", title: "Mở rộng quy mô", detail: "Đạt 500 khách hàng đang phục vụ, thành lập nhóm phụ trách khu vực phía Nam." },
  { year: "2026", title: "Kỷ niệm 12 năm", detail: "45 nhân sự, hơn 800 khách hàng, tỷ lệ gia hạn hợp đồng đạt 98% và ra mắt chương trình hỗ trợ doanh nghiệp khởi nghiệp." },
];

const values = [
  {
    title: "Chính trực",
    detail: "Từ chối mọi phương án hạch toán sai lệch bản chất giao dịch, kể cả khi khách hàng yêu cầu.",
  },
  {
    title: "Chuyên môn",
    detail: "Mỗi hồ sơ được xử lý bởi người có chứng chỉ hành nghề và soát xét bởi kế toán trưởng.",
  },
  {
    title: "Trách nhiệm",
    detail: "Đồng hành cùng khách hàng khi cơ quan thuế kiểm tra, không bỏ mặc sau khi ký hợp đồng.",
  },
  {
    title: "Đồng hành",
    detail: "Chủ động nhắc lịch nghĩa vụ, cảnh báo rủi ro và tư vấn trước khi vấn đề phát sinh.",
  },
];

const commitments = [
  "Báo giá trọn gói theo hợp đồng, không phát sinh chi phí ẩn.",
  "Phản hồi yêu cầu của khách hàng trong vòng 4 giờ làm việc.",
  "Bàn giao báo cáo đúng hạn cam kết, có biên bản giao nhận.",
  "Bảo mật thông tin theo điều khoản hợp đồng và quy trình nội bộ.",
  "Cử chuyên viên phối hợp khi cơ quan thuế kiểm tra.",
  "Bồi thường theo hợp đồng nếu sai sót thuộc trách nhiệm của Song Hành.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Công ty TNHH Dịch vụ Kế toán Song Hành"
        description="Đơn vị cung cấp dịch vụ kế toán, thuế và pháp lý doanh nghiệp, hoạt động từ năm 2014 với phương châm lấy sự tuân thủ và minh bạch làm nền tảng."
        crumbs={[{ label: "Giới thiệu" }, { label: "Công ty" }]}
      />

      <section className="py-10 md:py-12">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="flex items-center gap-2.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-navy-600">
              <span className="h-[2px] w-6 bg-flag-500" aria-hidden />
              Tổng quan
            </p>
            <h2 className="mt-2 text-[22px] font-bold leading-snug text-navy-900 md:text-[26px]">
              Kế toán không chỉ là ghi chép, mà là nền tảng quản trị của doanh nghiệp
            </h2>
            <div className="prose-gov mt-4 max-w-2xl text-[13.5px] text-navy-900/85">
              <p>
                Công ty TNHH Dịch vụ Kế toán Song Hành được thành lập ngày 18/10/2014, hoạt động trong lĩnh
                vực cung cấp dịch vụ kế toán, tư vấn thuế và thủ tục pháp lý doanh nghiệp. Trụ sở chính đặt
                tại quận Hoàn Kiếm, TP. Hà Nội.
              </p>
              <p>
                Chúng tôi phục vụ doanh nghiệp thuộc nhiều lĩnh vực: thương mại, sản xuất, xây dựng, công
                nghệ thông tin, xuất nhập khẩu và dịch vụ. Với mỗi khách hàng, Song Hành xây dựng một hồ sơ
                quản lý riêng, phân công kế toán phụ trách và thiết lập lịch nghĩa vụ thuế tự động.
              </p>
              <p>
                Đội ngũ của công ty gồm 45 cán bộ, trong đó 12 người có chứng chỉ hành nghề dịch vụ kế toán
                và 5 người có chứng chỉ kế toán trưởng. Toàn bộ hồ sơ được xử lý theo quy trình soát xét hai
                lớp trước khi bàn giao.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-4 border-navy-700 bg-white p-5">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-navy-900">Tầm nhìn</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  Trở thành đơn vị kế toán – thuế được doanh nghiệp vừa và nhỏ tại Việt Nam tin chọn hàng đầu,
                  nơi chất lượng chuyên môn và đạo đức nghề nghiệp được đặt lên trước lợi nhuận.
                </p>
              </div>
              <div className="border-l-4 border-flag-500 bg-white p-5">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-navy-900">Sứ mệnh</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  Giúp doanh nghiệp yên tâm về nghĩa vụ kế toán, thuế và pháp lý để tập trung nguồn lực cho
                  hoạt động kinh doanh, đồng thời góp phần xây dựng môi trường kinh doanh minh bạch.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="border border-line bg-white p-5">
              <div className="flex items-center gap-3 border-b border-line pb-4">
                <Emblem className="h-14 w-14" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Thông tin pháp lý</p>
                  <p className="mt-0.5 text-[13px] font-bold leading-snug text-navy-900">{site.legalName}</p>
                </div>
              </div>
              <dl className="mt-3 space-y-2 text-[12px]">
                {[
                  ["Mã số thuế", site.taxCode],
                  ["Ngày thành lập", "18/10/2014"],
                  ["Người đại diện", site.responsiblePerson.split(" – ")[0]],
                  ["Trụ sở", site.address],
                  ["Điện thoại", site.phone],
                  ["Thư điện tử", site.email],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-2">
                    <dt className="w-[92px] shrink-0 text-muted">{label}</dt>
                    <dd className="font-medium text-navy-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border border-line bg-navy-800 p-5 text-white">
              <ShieldIcon className="h-7 w-7 text-gold-300" />
              <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.06em] text-gold-300">
                Chứng chỉ hành nghề
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/70">
                Song Hành có đủ điều kiện cung cấp dịch vụ kế toán theo quy định của Luật Kế toán và Nghị định
                hướng dẫn hiện hành.
              </p>
              <Link
                href="/gioi-thieu/thanh-vien-sang-lap"
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-white hover:text-gold-300"
              >
                Thành viên sáng lập
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-white py-10 md:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Giá trị cốt lõi"
            title="Bốn nguyên tắc định hình cách chúng tôi làm việc"
            description="Được cụ thể hóa thành quy trình nội bộ và tiêu chí đánh giá chất lượng của từng chuyên viên."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={value.title} className="border border-line bg-paper p-5">
                <span className="font-serif text-2xl font-bold text-gold-500">0{index + 1}</span>
                <h3 className="mt-2 text-[14px] font-bold text-navy-900">{value.title}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Chặng đường phát triển"
            title="12 năm đồng hành cùng doanh nghiệp Việt"
          />
          <ol className="relative border-l-2 border-navy-100 pl-6 md:pl-8">
            {milestones.map((milestone) => (
              <li key={milestone.year} className="relative pb-7 last:pb-0">
                <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold-400 bg-navy-900 md:-left-[41px]" />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-serif text-lg font-bold text-flag-600">{milestone.year}</span>
                  <h3 className="text-[14px] font-bold text-navy-900">{milestone.title}</h3>
                </div>
                <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-muted">{milestone.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-white py-10 md:py-12">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-navy-600">
              <span className="h-[2px] w-6 bg-flag-500" aria-hidden />
              Cam kết
            </p>
            <h2 className="mt-2 text-[22px] font-bold leading-snug text-navy-900">
              Sáu cam kết Song Hành ghi trong hợp đồng
            </h2>
            <ul className="mt-4 space-y-2.5">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-navy-900/85">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-flag-600" />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-paper p-5 md:p-6">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-navy-900">Thông tin liên hệ</h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
              Quý khách có thể đến trực tiếp văn phòng trong giờ làm việc hoặc đặt lịch hẹn trước để được phục
              vụ chu đáo nhất.
            </p>
            <dl className="mt-4 space-y-2.5 text-[12.5px]">
              <div>
                <dt className="text-[10.5px] uppercase tracking-[0.08em] text-muted">Địa chỉ</dt>
                <dd className="mt-0.5 font-medium text-navy-900">{site.address}</dd>
              </div>
              <div>
                <dt className="text-[10.5px] uppercase tracking-[0.08em] text-muted">Điện thoại / Hotline</dt>
                <dd className="mt-0.5 font-medium text-navy-900">
                  {site.phone} – {site.hotline}
                </dd>
              </div>
              <div>
                <dt className="text-[10.5px] uppercase tracking-[0.08em] text-muted">Thời gian làm việc</dt>
                <dd className="mt-0.5 font-medium text-navy-900">{site.workingHours}</dd>
              </div>
            </dl>
            <Link
              href="/#tu-van"
              className="mt-5 inline-flex h-10 items-center gap-2 bg-flag-600 px-5 text-[11.5px] font-bold uppercase tracking-[0.07em] text-white transition-colors hover:bg-flag-700"
            >
              Đặt lịch làm việc
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
