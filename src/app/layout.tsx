import type { Metadata } from "next";
import { Petrona, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
  display: "swap",
});

const petrona = Petrona({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-petrona",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Physiovita Köln · Physiotherapie",
    template: "%s · Physiovita Köln",
  },
  description:
    "Physiotherapiepraxis Physiovita Köln, Olpener Straße 925, 51109 Köln. Termin unter 0221 89060777.",
  applicationName: site.name,
  authors: [{ name: "Angelo Minacapilli und Bastian Weber" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Physiovita Köln · Physiotherapie",
    description:
      "Physiotherapie an der Olpener Straße in Köln. Termin telefonisch unter 0221 89060777.",
    locale: "de_DE",
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${sourceSans.variable} ${petrona.variable} h-full antialiased`}
    >
      <body className="flex min-h-full w-full min-w-0 flex-col">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2"
        >
          Zum Inhalt
        </a>
        <SiteHeader />
        <main id="inhalt" className="w-full min-w-0 flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
