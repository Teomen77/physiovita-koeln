import { PhonePlaque } from "@/components/phone-plaque";
import {
  addressLine,
  googleMapsLink,
  hours,
  mapEmbedSrc,
  osmLink,
  serviceGroups,
  site,
} from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  description: "Physiotherapiepraxis in Köln.",
  telephone: "+49-221-89060777",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.lat,
    longitude: site.lon,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "15:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="anfang" className="mx-auto w-full min-w-0 max-w-6xl scroll-mt-20 px-5 pt-12 pb-16 sm:px-8 sm:pt-16 lg:pt-20">
        <h1 className="max-w-[14ch] font-heading text-[clamp(3.1rem,7.4vw,6rem)] leading-[0.94] tracking-[-0.035em] text-balance">
          Physiovita Köln
        </h1>
        <p className="mt-5 max-w-[28ch] font-heading text-[clamp(1.45rem,2.4vw,2rem)] leading-snug tracking-[-0.03em] text-balance">
          Physiotherapie an der Olpener Straße.
        </p>
        <p className="mt-6 max-w-[min(62ch,100%)] text-lg leading-relaxed text-muted-foreground">
          Praxis von Angelo Minacapilli und Bastian Weber. Einen Termin
          vereinbaren Sie telefonisch. Die Behandlung richtet sich nach der
          ärztlichen Verordnung.
        </p>
        <PhonePlaque />
        <p className="mt-5 text-base">
          <a
            href="#anfahrt"
            className="underline-offset-[0.25em] hover:underline"
          >
            {addressLine()}
          </a>
          <span className="text-muted-foreground"> · Köln-{site.district}</span>
        </p>
      </section>

      <section
        id="leistungen"
        className="scroll-mt-20 border-t border-border"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:py-24">
          <div className="lg:col-span-4 lg:pr-12">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-heading text-4xl tracking-[-0.03em]">
                Leistungen
              </h2>
              <p className="mt-4 max-w-[36ch] text-lg leading-relaxed text-muted-foreground">
                Das Spektrum der Praxis. Was davon passt, ergibt sich aus der
                Verordnung und dem Gespräch vor Ort.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-12">
            {serviceGroups.map((group) => (
              <div key={group.title} className="mb-12 last:mb-0">
                <h3 className="font-heading text-[1.65rem] tracking-[-0.03em]">
                  {group.title}
                </h3>
                <ul className="mt-4 columns-1 gap-x-10 sm:columns-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="break-inside-avoid border-t border-border py-2.5 text-[1.02rem] leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
              Für die Stoßwellentherapie nennt die Praxis keine Gebühr. Sie ist
              als private Zusatzleistung ausgewiesen. Die D1-Verordnung bündelt
              mehrere Heilmittel, darunter Krankengymnastik, Manuelle Therapie
              und physikalische Anwendungen.
            </p>
          </div>
        </div>
      </section>

      <section id="praxis" className="scroll-mt-20 border-t border-border bg-muted">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-4xl tracking-[-0.03em]">
              Über die Praxis
            </h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed">
              Angelo Minacapilli und Bastian Weber führen die Praxis als
              Inhaber. Beide sind Physiotherapeuten.
            </p>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
              Die Praxis nennt als Schwerpunkte postoperative und orthopädische
              Physiotherapie, Sportphysiotherapie, neurologische Krankheitsbilder
              und Stage-Physiotherapy für Musikerinnen und Musiker, Sängerinnen
              und Sänger, Tänzerinnen und Tänzer sowie Schauspielerinnen und
              Schauspieler.
            </p>
            <p className="mt-10 font-heading text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[-0.03em]">
              Wir bewegen Köln.
            </p>
          </div>
          <dl className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
            {site.owners.map((owner) => (
              <div key={owner.name} className="border-t border-border py-4 first:border-t-0 first:pt-0">
                <dt className="text-sm text-muted-foreground">{owner.role}</dt>
                <dd className="mt-1 font-heading text-2xl tracking-[-0.03em]">
                  {owner.name}
                </dd>
              </div>
            ))}
            <div className="border-t border-border py-4">
              <dt className="text-sm text-muted-foreground">Termin</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="font-heading text-2xl tracking-[-0.03em] tabular-nums underline-offset-[0.2em] hover:underline">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="anfahrt" className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-4xl tracking-[-0.03em]">
                Standort und Anfahrt
              </h2>
              <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
                Die Praxis liegt an der Olpener Straße in Köln-Brück. Die Karte
                markiert diese Adresse.
              </p>
            </div>
            <p className="font-heading text-[clamp(1.7rem,3vw,2.4rem)] leading-tight tracking-[-0.03em] lg:col-span-5 lg:text-right">
              {site.street}
              <span className="mt-1 block text-muted-foreground">
                {site.postalCode} {site.city}
              </span>
            </p>
          </div>
          <figure className="mt-8">
            <div className="aspect-[16/10] w-full overflow-hidden border border-border bg-muted sm:aspect-[16/8]">
              <iframe
                title="Karte: Physiovita Köln, Olpener Straße 925, 51109 Köln"
                src={mapEmbedSrc()}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <figcaption className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <span>Kartenausschnitt © OpenStreetMap-Mitwirkende</span>
              <span className="flex gap-4">
                <a href={osmLink()} className="underline-offset-[0.25em] hover:text-foreground hover:underline">
                  OpenStreetMap
                </a>
                <a
                  href={googleMapsLink()}
                  className="underline-offset-[0.25em] hover:text-foreground hover:underline"
                >
                  Google Maps
                </a>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-4xl tracking-[-0.03em]">Kontakt</h2>
            <a
              href={site.phoneHref}
              className="mt-6 block font-heading text-[clamp(2.4rem,6vw,4.5rem)] leading-none tracking-[-0.035em] tabular-nums underline-offset-[0.12em] hover:underline"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted-foreground">
              Rufen Sie an oder schreiben Sie eine allgemeine Anfrage. Medizinische
              Angaben zu Ihnen oder zur zu behandelnden Person gehören nicht in
              die E-Mail. Die besprechen wir persönlich.
            </p>
            <p className="mt-6 text-lg">
              <a href={site.emailHref} className="underline-offset-[0.25em] hover:underline">
                {site.email}
              </a>
              <span className="mx-2 text-muted-foreground">·</span>
              <a href={site.faxHref} className="tabular-nums underline-offset-[0.25em] hover:underline">
                Fax {site.faxDisplay}
              </a>
            </p>
          </div>
          <div className="lg:col-span-5">
            <h3 className="text-sm text-muted-foreground">Sprechzeiten</h3>
            <dl className="mt-3">
              {hours.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 border-t border-border py-3"
                >
                  <dt>{row.label}</dt>
                  <dd className="tabular-nums">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-lg leading-snug">
              {site.street}
              <br />
              {site.postalCode} {site.city}-{site.district}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
