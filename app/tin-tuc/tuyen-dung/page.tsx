import type { Metadata } from "next";
import NewsArchive from "@/components/NewsArchive";

export const metadata: Metadata = {
  title: "Tin tuyển dụng",
  description:
    "Các vị trí đang tuyển dụng tại Công ty TNHH Dịch vụ Kế toán Song Hành: kế toán tổng hợp, tư vấn thuế và thực tập sinh.",
};

export default function RecruitmentPage() {
  return (
    <NewsArchive
      category="tuyen-dung"
      eyebrow="Cơ hội nghề nghiệp"
      title="Tin tuyển dụng"
      description="Song Hành đang tìm kiếm những người coi trọng sự chính xác và muốn phát triển lâu dài trong nghề kế toán, thuế."
      crumbs={[{ label: "Tin tức", href: "/tin-tuc" }, { label: "Tin tuyển dụng" }]}
    />
  );
}
