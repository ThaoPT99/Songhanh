import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRightIcon, HeadsetIcon, PhoneIcon } from "@/components/Icons";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div className="gov-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute inset-y-0 left-0 w-1 bg-gold-400" aria-hidden />
      <div className="container-page relative flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center border border-white/20 bg-white/5 sm:flex">
            <HeadsetIcon className="h-6 w-6 text-gold-300" />
          </span>
          <div>
            <h2 className="text-lg font-bold md:text-xl">Cần tư vấn về kế toán, thuế hoặc thủ tục doanh nghiệp?</h2>
            <p className="mt-1 text-[12.5px] leading-relaxed text-white/70 md:text-[13px]">
              Chuyên viên của Song Hành sẵn sàng trao đổi miễn phí trong 30 phút đầu tiên. Gọi{" "}
              <a href={site.hotlineHref} className="font-semibold text-gold-300 hover:underline">
                {site.hotline}
              </a>{" "}
              hoặc gửi yêu cầu trực tuyến.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.hotlineHref}
            className="inline-flex h-11 items-center gap-2 border border-white/30 px-5 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            <PhoneIcon className="h-4 w-4" />
            Gọi ngay
          </a>
          <Link
            href="/#tu-van"
            className="inline-flex h-11 items-center gap-2 bg-gold-400 px-5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-navy-950 transition-colors hover:bg-gold-300"
          >
            Gửi yêu cầu tư vấn
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
