import type { Metadata } from "next";
import NewsArchive from "@/components/NewsArchive";

export const metadata: Metadata = {
  title: "Tin tức",
  description:
    "Tin hoạt động của Song Hành, cập nhật chính sách kế toán – thuế và thông tin tuyển dụng mới nhất.",
};

export default function NewsPage() {
  return (
    <NewsArchive
      category="all"
      eyebrow="Thông tin & sự kiện"
      title="Tin tức"
      description="Cập nhật hoạt động của công ty, kiến thức chuyên môn về kế toán – thuế và các vị trí đang tuyển dụng."
      crumbs={[{ label: "Tin tức" }]}
    />
  );
}
