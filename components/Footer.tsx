import Link from "next/link";
import { navigation, services, site } from "@/lib/site";
import { Emblem } from "@/components/Logo";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";

export default function Footer() {
  const gioiThieu = navigation.find((item) => item.label === "Giới thiệu")?.children ?? [];
  const tinTuc = navigation.find((item) => item.label === "Tin tức")?.children ?? [];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="h-1 bg-gold-400" />
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Emblem className="h-12 w-12" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
                Công ty TNHH Dịch vụ Kế toán
              </p>
              <p className="font-serif text-xl font-bold uppercase tracking-[0.08em]">Song Hành</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2.5 text-[12.5px] leading-relaxed text-white/70">
            <li className="flex gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                Hotline:{" "}
                <a href={site.hotlineHref} className="font-semibold text-white hover:text-gold-300">
                  {site.hotline}
                </a>{" "}
                – {site.phone}
              </span>
            </li>
            <li className="flex gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{site.workingHours}</span>
            </li>
          </ul>
          <p className="mt-4 border-t border-white/10 pt-3 text-[11.5px] text-white/50">
            Giấy chứng nhận đăng ký doanh nghiệp số {site.license}. Mã số thuế: {site.taxCode}.
          </p>
        </div>

        <div>
          <h2 className="border-b border-white/15 pb-2.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-gold-300">
            Dịch vụ cung cấp
          </h2>
          <ul className="mt-3 space-y-2 text-[12.5px] text-white/75">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/dich-vu/${service.slug}`} className="transition-colors hover:text-gold-300">
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/dich-vu" className="text-white/90 underline decoration-white/30 underline-offset-4 hover:text-gold-300">
                Xem toàn bộ dịch vụ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="border-b border-white/15 pb-2.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-gold-300">
            Giới thiệu &amp; Tin tức
          </h2>
          <ul className="mt-3 space-y-2 text-[12.5px] text-white/75">
            {gioiThieu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
            {tinTuc.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/tim-kiem" className="transition-colors hover:text-gold-300">
                Tìm kiếm thông tin
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="border-b border-white/15 pb-2.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-gold-300">
            Hỗ trợ khách hàng
          </h2>
          <div className="mt-3 space-y-3 text-[12.5px] leading-relaxed text-white/70">
            <p>
              Quý khách cần tư vấn về kế toán, thuế hoặc thủ tục doanh nghiệp, vui lòng để lại yêu cầu
              hoặc gọi trực tiếp đường dây hỗ trợ.
            </p>
            <Link
              href="/#tu-van"
              className="inline-flex h-9 items-center bg-flag-600 px-4 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-flag-700"
            >
              Gửi yêu cầu tư vấn
            </Link>
            <p className="text-[11.5px] text-white/50">
              Người chịu trách nhiệm nội dung: {site.responsiblePerson}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy-950">
        <div className="container-page flex flex-col gap-1.5 py-4 text-[11.5px] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.legalName}. Bảo lưu mọi quyền.</p>
          <p>
            Ghi rõ nguồn “{site.domain}” khi phát hành lại thông tin từ website này.
          </p>
        </div>
      </div>
    </footer>
  );
}
