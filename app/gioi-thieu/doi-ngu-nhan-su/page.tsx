import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { team } from "@/lib/site";
import { ArrowRightIcon, BriefcaseIcon, CheckIcon, UsersIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Đội ngũ nhân sự",
  description:
    "Cơ cấu tổ chức và đội ngũ 45 chuyên viên kế toán, thuế, pháp lý của Công ty TNHH Dịch vụ Kế toán Song Hành.",
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(-2)
    .map((part) => part[0])
    .join("");
}

const departments = [
  {
    name: "Phòng Kế toán",
    count: "22 nhân sự",
    detail: "Phụ trách hạch toán, lập báo cáo tài chính và báo cáo quản trị cho khách hàng.",
  },
  {
    name: "Phòng Tư vấn thuế",
    count: "9 nhân sự",
    detail: "Rà soát rủi ro, quyết toán, hoàn thuế và đại diện khách hàng làm việc với cơ quan thuế.",
  },
  {
    name: "Phòng Pháp lý",
    count: "7 nhân sự",
    detail: "Thành lập, thay đổi đăng ký kinh doanh, giải thể và tư vấn tuân thủ pháp lý.",
  },
  {
    name: "Phòng Hỗ trợ khách hàng",
    count: "7 nhân sự",
    detail: "Điều phối yêu cầu, theo dõi tiến độ hồ sơ và nhắc lịch nghĩa vụ thuế.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Đội ngũ nhân sự"
        description="45 cán bộ, trong đó 12 người có chứng chỉ hành nghề dịch vụ kế toán và 5 người có chứng chỉ kế toán trưởng, được tổ chức theo nhóm chuyên môn."
        crumbs={[{ label: "Giới thiệu", href: "/gioi-thieu" }, { label: "Đội ngũ nhân sự" }]}
      />

      <section className="py-10 md:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Cơ cấu tổ chức"
            title="Bốn phòng chuyên môn, một quy trình phục vụ"
            description="Mỗi khách hàng được phục vụ bởi một nhóm liên phòng, bảo đảm hồ sơ kế toán và hồ sơ pháp lý luôn khớp nhau."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department, index) => (
              <div key={department.name} className="border border-line bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center border border-navy-100 bg-navy-50 text-navy-700">
                    <UsersIcon className="h-4.5 w-4.5" />
                  </span>
                  <span className="font-serif text-xl font-bold text-navy-100">0{index + 1}</span>
                </div>
                <h3 className="mt-3 text-[13.5px] font-bold text-navy-900">{department.name}</h3>
                <p className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-flag-600">
                  {department.count}
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">{department.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-10 md:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Chuyên gia tiêu biểu"
            title="Những người trực tiếp phụ trách hồ sơ"
            description="Danh sách dưới đây là các chuyên viên đang phụ trách khách hàng tại thời điểm hiện tại."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="flex gap-4 border border-line bg-paper p-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-navy-100 bg-navy-800 text-[17px] font-bold text-gold-200">
                  {initials(member.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[13.5px] font-bold text-navy-900">{member.name}</h3>
                  <p className="text-[11.5px] font-medium text-flag-600">{member.role}</p>
                  <span className="mt-1.5 inline-block border border-line bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-muted">
                    {member.tag}
                  </span>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted">{member.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-navy-600">
              <span className="h-[2px] w-6 bg-flag-500" aria-hidden />
              Môi trường làm việc
            </p>
            <h2 className="mt-2 text-[22px] font-bold leading-snug text-navy-900">
              Đào tạo liên tục, đánh giá theo chất lượng hồ sơ
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">
              Song Hành duy trì lịch đào tạo nội bộ hai tuần một lần về cập nhật chính sách thuế, kỹ năng
              nghiệp vụ và quy trình soát xét. Hiệu quả công việc được đánh giá dựa trên tính chính xác của
              hồ sơ và phản hồi của khách hàng, không dựa trên số lượng hợp đồng.
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {[
                "Lộ trình thăng tiến rõ ràng theo cấp bậc chuyên môn",
                "Hỗ trợ 50% chi phí thi chứng chỉ hành nghề",
                "Làm việc tại văn phòng, có chế độ linh hoạt theo tuần",
                "Bảo hiểm đầy đủ, khám sức khỏe định kỳ hằng năm",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[12px] leading-relaxed text-navy-900/85">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-flag-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line bg-navy-800 p-6 text-white">
            <BriefcaseIcon className="h-8 w-8 text-gold-300" />
            <h2 className="mt-3 text-[18px] font-bold leading-snug">
              Song Hành đang tuyển dụng kế toán, tư vấn thuế và thực tập sinh
            </h2>
            <p className="mt-2 text-[12.5px] leading-relaxed text-white/70">
              Chúng tôi tìm kiếm những người coi trọng sự chính xác, chịu được áp lực thời hạn nộp thuế và
              muốn phát triển lâu dài trong nghề kế toán.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link
                href="/tin-tuc/tuyen-dung"
                className="inline-flex h-10 items-center gap-2 bg-gold-400 px-4 text-[11.5px] font-bold uppercase tracking-[0.06em] text-navy-950 transition-colors hover:bg-gold-300"
              >
                Xem vị trí đang tuyển
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
              <a
                href="mailto:tuyendung@songhanh.vn"
                className="inline-flex h-10 items-center border border-white/30 px-4 text-[11.5px] font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300"
              >
                tuyendung@songhanh.vn
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
