"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full min-w-0 border-b bg-background/95",
        scrolled
          ? "border-border shadow-[0_12px_28px_-20px_oklch(0.28_0.03_158/0.55)]"
          : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-5 sm:px-8 md:gap-6">
        <a
          href="/#anfang"
          className="min-w-0 truncate font-heading text-[1.35rem] tracking-[-0.03em] text-foreground"
        >
          {site.wordmark}
        </a>
        <nav className="ml-auto hidden items-center gap-7 md:flex" aria-label="Abschnitte">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-foreground/80 underline-offset-[0.3em] hover:text-foreground hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.phoneHref}
          className="ml-auto inline-flex h-10 shrink-0 items-center bg-primary px-3.5 text-sm font-medium text-primary-foreground md:ml-2 md:px-4"
        >
          <span className="sm:hidden">Termin</span>
          <span className="hidden tabular-nums sm:inline">{site.phoneDisplay}</span>
        </a>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 md:hidden"
          aria-expanded={open}
          aria-controls="seiten-menue"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
        </Button>
      </div>
      {open ? (
        <nav
          id="seiten-menue"
          aria-label="Abschnitte"
          className="border-t border-border bg-background px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-border last:border-b-0">
                <a
                  href={item.href}
                  className="block py-3 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
