"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "tentang-kami" },
  { label: "Layanan", href: "/layanan", hasDropdown: true },
  { label: "Hubungi Kami", href: "#hubungi-kami" },
];

const languages = [
  { code: "ID", label: "Bahasa Indonesia" },
  { code: "EN", label: "English" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("ID");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-container mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#beranda" className="flex items-center shrink-0">
          <img
            src="/images/logo-jembatan-bisnis-navy.svg"
            alt="Jembatan Bisnis Broker"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-[15px] font-medium text-navy-900 hover:text-brand transition-colors"
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  className="mt-0.5"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Right side: language switcher + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[15px] font-medium text-navy-900 hover:text-brand transition-colors px-2 py-1.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              {activeLang}
              <svg width="10" height="7" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setActiveLang(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${
                      activeLang === lang.code
                        ? "text-brand font-semibold"
                        : "text-navy-900"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#konsultasi"
            className="inline-flex items-center rounded-full bg-navy-900 text-white text-sm font-semibold px-6 py-3 hover:bg-brand transition-colors"
          >
            Konsultasi Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-navy-900"
          aria-label="Buka menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-[15px] font-medium text-navy-900"
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher (mobile) */}
          <div className="flex items-center gap-2 pt-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setActiveLang(lang.code)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                  activeLang === lang.code
                    ? "bg-navy-900 text-white border-navy-900"
                    : "text-navy-900 border-slate-300"
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>

          <a
            href="#konsultasi"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center rounded-full bg-navy-900 text-white text-sm font-semibold px-6 py-3"
          >
            Konsultasi Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
