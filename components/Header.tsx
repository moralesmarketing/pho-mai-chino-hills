"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-cream-dim/40 bg-teal-950/95 px-5 py-3 text-cream backdrop-blur sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.avif"
            alt="Pho Mai logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-sm object-cover"
          />
          <span className="font-serif text-xl tracking-wide">Pho Mai</span>
        </Link>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-full p-2 transition-transform hover:scale-110"
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-teal-950 text-cream transition-opacity duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.avif"
              alt="Pho Mai logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-sm object-cover"
            />
            <span className="font-serif text-xl tracking-wide">Pho Mai</span>
          </div>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="rounded-full p-2 transition-transform hover:scale-110"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 pt-10 sm:px-10">
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-cream/10 py-4 font-serif text-3xl transition-colors hover:text-accent sm:text-4xl ${
                i === 0 ? "text-accent" : ""
              }`}
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-2 px-6 text-sm tracking-wide text-cream-dim sm:px-10">
          <a href={site.phoneHref} className="hover:text-cream">
            {site.phone}
          </a>
          <span>{site.address}</span>
        </div>
      </div>
    </>
  );
}
