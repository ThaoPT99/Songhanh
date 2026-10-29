import type { Metadata } from "next";
import NewsArchive from "@/components/NewsArchive";

export const metadata: Metadata = {
  title: "Tin hoạt động",
  description:
    "Hoạt động, sự kiện và kiến thức chuyên môn về kế toán, thuế do Công ty TNHH Dịch vụ Kế toán Song Hành cập nhật.",
};

export default function ActivityNewsPage() {
  return (
    <NewsArchive
      category="hoat-dong"
      eyebrow="Tin tức"
      title="Tin hoạt động"
      description="Sự kiện của công ty, cập nhật chính sách và hướng dẫn nghiệp vụ do đội ngũ Song Hành biên soạn."
      crumbs={[{ label: "Tin tức", href: "/tin-tuc" }, { label: "Tin hoạt động" }]}
    />
  );
}
