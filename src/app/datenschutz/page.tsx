import type { Metadata } from "next";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweis der Website von Physiovita Köln. Entwurf.",
};

export default function DatenschutzPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <h1 className="font-heading text-5xl tracking-[-0.03em]">Datenschutz</h1>
      <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
        Entwurf für die neue Website. Die verantwortliche Stelle ist bekannt.
        Eine vollständige, geprüfte Datenschutzerklärung für den neuen Host
        fehlt noch.
      </p>

      <div className="mt-10 max-w-[65ch] space-y-8 text-lg leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl tracking-[-0.03em]">
            Verantwortliche Stelle
          </h2>
          <p className="mt-3">
            {site.name}, Angelo Minacapilli und Bastian Weber, {addressLine()}.
            Telefon {site.phoneDisplay}, E-Mail {site.email}.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl tracking-[-0.03em]">
            Diese Website
          </h2>
          <p className="mt-3">
            Die Seiten enthalten keine Formulare, keine eingebetteten Videos
            und kein von uns gesetztes Analyse-Werkzeug. Wenn Sie anrufen oder
            eine E-Mail schreiben, verarbeiten wir Ihre Angaben, um die Anfrage
            zu beantworten. Medizinische Details gehören nicht in eine E-Mail.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl tracking-[-0.03em]">
            Karte und Hosting
          </h2>
          <p className="mt-3">
            Der Kartenausschnitt wird von OpenStreetMap geladen. Dabei kann
            Ihre IP-Adresse an den Kartendienst gelangen. Die Website wird über
            Vercel ausgeliefert. Der Anbieter kann technisch erforderliche
            Verbindungsdaten in Server-Protokollen verarbeiten. Einzelheiten
            dazu sind in diesem Entwurf noch nicht abschließend beschrieben.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl tracking-[-0.03em]">
            Ihre Rechte
          </h2>
          <p className="mt-3">
            Sie können Auskunft, Berichtigung und Löschung verlangen und sich
            bei der zuständigen Aufsichtsbehörde beschweren. Wenden Sie sich
            dafür an die oben genannte Stelle.
          </p>
        </section>
      </div>
    </article>
  );
}
