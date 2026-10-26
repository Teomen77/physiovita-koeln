import type { Metadata } from "next";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Physiotherapiepraxis Physiovita Köln.",
};

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <h1 className="font-heading text-5xl tracking-[-0.03em]">Impressum</h1>
      <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
        Angaben nach dem bisher veröffentlichten Impressum der Praxis. Dieser
        Text ist ein Stub für die neue Website und keine anwaltlich geprüfte
        Fassung.
      </p>

      <div className="mt-10 max-w-[62ch] space-y-4 text-lg leading-relaxed">
        <p>
          {site.name}
          <br />
          Angelo Minacapilli und Bastian Weber
          <br />
          {addressLine()}
        </p>
        <p>
          Telefon:{" "}
          <a href={site.phoneHref} className="underline-offset-[0.25em] hover:underline">
            {site.phoneDisplay}
          </a>
          <br />
          Fax:{" "}
          <a href={site.faxHref} className="underline-offset-[0.25em] hover:underline">
            {site.faxDisplay}
          </a>
          <br />
          E-Mail:{" "}
          <a href={site.emailHref} className="underline-offset-[0.25em] hover:underline">
            {site.email}
          </a>
        </p>
        <p>
          Rechtsform: {site.legalForm}
          <br />
          IK-Kennzeichen: {site.ik}
          <br />
          Steuernummer: {site.taxNumber}
          <br />
          Gerichtsstand: {site.court}
        </p>
        <p>
          Inhaltlich verantwortlich: Angelo Minacapilli und Bastian Weber,
          Anschrift wie oben.
        </p>
        <p className="text-base text-muted-foreground">
          Die bisherige Website ist unter{" "}
          <a href={site.oldSite} className="underline-offset-[0.25em] hover:underline">
            physiovita-koeln.de
          </a>{" "}
          erreichbar. Hosting der neuen Website: Vercel.
        </p>
      </div>
    </article>
  );
}
