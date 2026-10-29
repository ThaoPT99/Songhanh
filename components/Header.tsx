"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/lib/site";
import { LogoLockup } from "@/components/Logo";
import {
  ChevronDownIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
} from "@/components/Icons";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header>
      {/* Thanh tiện ích */}
      <div className="bg-navy-950 text-white">
        <div className="container-page flex h-9 items-center justify-between gap-4 text-[11.5px]">
          <p className="truncate tracking-wide text-white/75">
            <span className="font-semibold text-gold-300">{site.portalLabel}</span>
            <span className="mx-2 text-white/30">|</span>
            <span className="hidden sm:inline">{site.legalName}</span>
          </p>
          <div className="flex items-center gap-4 text-white/80">
            <a href={site.hotlineHref} className="flex items-center gap-1.5 hover:text-white">
              <PhoneIcon className="h-3.5 w-3.5" />
              <span className="font-semibold">{site.hotline}</span>
            </a>
            <a href={`mailto:${site.email}`} className="hidden items-center gap-1.5 hover:text-white md:flex">
              <MailIcon className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Phần đầu trang */}
      <div className="border-b border-line bg-white">
        <div className="container-page flex items-center justify-between gap-6 py-4">
          <Link href="/" aria-label="Trang chủ Song Hành" className="min-w-0">
            <LogoLockup />
          </Link>

          <div className="hidden shrink-0 flex-col items-end gap-2 lg:flex">
            <form action="/tim-kiem" role="search" className="flex h-9 w-[300px] overflow-hidden border border-line">
              <label htmlFor="site-search" className="sr-only">
                Tìm kiếm trên website
              </label>
              <input
                id="site-search"
                name="q"
                type="search"
                placeholder="Tìm kiếm dịch vụ, tin tức…"
                className="min-w-0 flex-1 bg-white px-3 text-[13px] text-ink outline-none placeholder:text-muted/70 focus:bg-navy-50/60"
              />
              <button
                type="submit"
                className="flex w-10 items-center justify-center bg-flag-600 text-white transition-colors hover:bg-flag-700"
                aria-label="Tìm kiếm"
              >
                <SearchIcon className="h-4 w-4" />
              </button>
            </form>
            <p className="text-[11.5px] text-muted">
              Hỗ trợ khách hàng:{" "}
              <a href={site.hotlineHref} className="font-bold text-flag-600 hover:underline">
                {site.hotline}
              </a>{" "}
              · {site.workingHours.split("·")[0]}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center border border-line text-navy-800 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          >
            {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Điều hướng chính */}
      <nav className="sticky top-0 z-40 hidden bg-navy-800 shadow-[0_2px_8px_rgba(6,31,54,0.18)] lg:block">
        <div className="container-page flex items-stretch">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex h-12 items-center gap-1.5 border-b-[3px] px-5 text-[12.5px] font-semibold uppercase tracking-[0.045em] transition-colors ${
                    active
                      ? "border-gold-400 bg-navy-950/45 text-white"
                      : "border-transparent text-white/85 hover:bg-navy-700 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDownIcon className="h-3 w-3 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-[330px] translate-y-1 border-t-[3px] border-gold-400 bg-white opacity-0 shadow-[0_18px_40px_rgba(6,31,54,0.22)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.href} className="border-b border-line/70 last:border-b-0">
                          <Link
                            href={child.href}
                            className="block border-l-[3px] border-transparent px-4 py-3 transition-colors hover:border-flag-500 hover:bg-navy-50"
                          >
                            <span className="block text-[13.5px] font-semibold text-navy-800">{child.label}</span>
                            {child.description && (
                              <span className="mt-0.5 block text-[11.5px] leading-snug text-muted">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}

          <div className="ml-auto flex items-center">
            <Link
              href="/#tu-van"
              className="flex h-12 items-center gap-2 bg-flag-600 px-5 text-[12.5px] font-semibold uppercase tracking-[0.045em] text-white transition-colors hover:bg-flag-700"
            >
              Yêu cầu tư vấn
            </Link>
          </div>
        </div>
      </nav>

      {/* Menu di động */}
      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t-2 border-gold-400 bg-navy-800 lg:hidden">
          <div className="container-page divide-y divide-white/10">
            {navigation.map((item) => (
              <div key={item.href} className="py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className={`flex-1 py-3 text-[13px] font-semibold uppercase tracking-wide ${
                      isActive(item.href) ? "text-gold-300" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setOpenGroup((value) => (value === item.href ? null : item.href))}
                      className="flex h-9 w-9 items-center justify-center text-white/70"
                      aria-expanded={openGroup === item.href}
                      aria-label={`Mở danh mục ${item.label}`}
                    >
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform ${openGroup === item.href ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openGroup === item.href && (
                  <ul className="mb-2 border-l border-white/20 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={closeMenus} className="block py-2 text-[13px] text-white/75">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <form
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
                const keyword = String(new FormData(event.currentTarget).get("q") ?? "").trim();
                closeMenus();
                router.push(keyword ? `/tim-kiem?q=${encodeURIComponent(keyword)}` : "/tim-kiem");
              }}
              className="flex py-4"
            >
              <input
                name="q"
                type="search"
                placeholder="Tìm kiếm dịch vụ, tin tức…"
                className="h-10 min-w-0 flex-1 bg-white px-3 text-sm outline-none"
                aria-label="Tìm kiếm trên website"
              />
              <button type="submit" className="flex h-10 w-11 items-center justify-center bg-flag-600 text-white">
                <SearchIcon className="h-4 w-4" />
              </button>
            </form>
            <a
              href={site.hotlineHref}
              onClick={closeMenus}
              className="flex items-center gap-2 py-4 text-sm font-semibold text-gold-300"
            >
              <PhoneIcon className="h-4 w-4" /> Hotline {site.hotline}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
