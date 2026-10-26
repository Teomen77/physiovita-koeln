import { addressLine, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="w-full min-w-0 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-foreground">
            {site.name} · {site.legalForm}
          </p>
          <p className="mt-1">{addressLine()}</p>
        </div>
        <nav aria-label="Rechtliches" className="flex gap-5">
          <a href="/impressum" className="underline-offset-[0.25em] hover:text-foreground hover:underline">
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="underline-offset-[0.25em] hover:text-foreground hover:underline"
          >
            Datenschutz
          </a>
        </nav>
      </div>
    </footer>
  );
}
