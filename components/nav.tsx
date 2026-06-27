"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/internship", label: "Internships" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-[1280px] mx-auto">
        <Link href="/" className="shrink-0">
          <div className="size-8 rounded-lg bg-brand-blushed-brick" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-brand-primary border-b-2 border-brand-blushed-brick pb-1"
                    : "text-brand-on-surface hover:text-brand-blushed-brick"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/donate"
          className="hidden md:inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200"
        >
          <Heart className="size-4 fill-current" />
          Donate
        </Link>
        <button
          className="md:hidden text-brand-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-brand-bg border-t border-brand-outline-variant px-6 py-6 pb-8">
          <div className="flex flex-col gap-4">
            {links.map((l) => {
              const isActive =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isActive ? "text-brand-primary" : "text-brand-on-surface"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center mt-2"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
