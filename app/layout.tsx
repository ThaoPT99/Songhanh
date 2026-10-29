import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "Song Hành – Dịch vụ kế toán, tư vấn thuế và thành lập doanh nghiệp",
    template: "%s | Song Hành",
  },
  description:
    "Công ty TNHH Dịch vụ Kế toán Song Hành cung cấp dịch vụ kế toán trọn gói, tư vấn thuế, thành lập và giải thể doanh nghiệp cho hơn 800 khách hàng trên toàn quốc.",
  keywords: [
    "dịch vụ kế toán",
    "tư vấn thuế",
    "thành lập doanh nghiệp",
    "giải thể doanh nghiệp",
    "kế toán trọn gói",
    "Song Hành",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Song Hành",
    title: "Song Hành – Dịch vụ kế toán, tư vấn thuế và thành lập doanh nghiệp",
    description:
      "Kế toán chuẩn mực, thuế minh bạch, đồng hành bền vững cùng doanh nghiệp Việt.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
