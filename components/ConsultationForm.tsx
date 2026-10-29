"use client";

import { useState, type FormEvent } from "react";
import { services, site } from "@/lib/site";
import { CheckIcon } from "@/components/Icons";

export default function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();

    const body = [
      `Họ và tên: ${name}`,
      `Số điện thoại: ${phone}`,
      company ? `Doanh nghiệp: ${company}` : "",
      service ? `Dịch vụ quan tâm: ${service}` : "",
      note ? `Nội dung: ${note}` : "",
      "",
      "Yêu cầu được gửi từ website songhanh.vn.",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `[Yêu cầu tư vấn] ${name}${service ? ` – ${service}` : ""}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const inputClass =
    "h-10 w-full border border-line bg-white px-3 text-[13px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-navy-600";

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
      <div>
        <label htmlFor="cf-name" className="mb-1 block text-[11.5px] font-semibold text-navy-900">
          Họ và tên <span className="text-flag-600">*</span>
        </label>
        <input id="cf-name" name="name" required autoComplete="name" placeholder="Nguyễn Văn A" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-phone" className="mb-1 block text-[11.5px] font-semibold text-navy-900">
          Số điện thoại <span className="text-flag-600">*</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="09xx xxx xxx"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="cf-company" className="mb-1 block text-[11.5px] font-semibold text-navy-900">
          Tên doanh nghiệp
        </label>
        <input id="cf-company" name="company" autoComplete="organization" placeholder="Công ty…" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-service" className="mb-1 block text-[11.5px] font-semibold text-navy-900">
          Dịch vụ quan tâm
        </label>
        <select id="cf-service" name="service" defaultValue="" className={inputClass}>
          <option value="">Chọn dịch vụ</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <label htmlFor="cf-note" className="mb-1 block text-[11.5px] font-semibold text-navy-900">
          Nội dung cần tư vấn
        </label>
        <textarea
          id="cf-note"
          name="note"
          rows={compact ? 3 : 4}
          placeholder="Mô tả ngắn về nhu cầu của doanh nghiệp…"
          className="w-full border border-line bg-white px-3 py-2 text-[13px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-navy-600"
        />
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          className="h-11 w-full bg-flag-600 px-6 text-[12.5px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-flag-700"
        >
          Gửi yêu cầu tư vấn
        </button>
        {sent ? (
          <p className="mt-2.5 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-navy-700">
            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-flag-600" />
            Yêu cầu đã được chuyển sang ứng dụng email của bạn. Vui lòng nhấn Gửi để hoàn tất, hoặc gọi{" "}
            {site.hotline} để được hỗ trợ ngay.
          </p>
        ) : (
          <p className="mt-2.5 text-[11px] leading-relaxed text-muted">
            Thông tin của quý khách được bảo mật và chỉ dùng để liên hệ tư vấn.
          </p>
        )}
      </div>
    </form>
  );
}
