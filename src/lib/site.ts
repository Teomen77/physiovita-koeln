export const site = {
  name: "Physiovita Köln",
  wordmark: "Physiovita",
  street: "Olpener Straße 925",
  postalCode: "51109",
  city: "Köln",
  district: "Brück",
  phoneDisplay: "0221 89060777",
  phoneHref: "tel:+4922189060777",
  faxDisplay: "0221 89060778",
  faxHref: "tel:+4922189060778",
  email: "info@physiovita-koeln.de",
  emailHref: "mailto:info@physiovita-koeln.de",
  oldSite: "https://physiovita-koeln.de/",
  lat: 50.9466918,
  lon: 7.0832273,
  owners: [
    { name: "Angelo Minacapilli", role: "Physiotherapeut, Inhaber" },
    { name: "Bastian Weber", role: "Physiotherapeut, Inhaber" },
  ],
  legalForm: "GbR",
  ik: "444536038",
  taxNumber: "216/5206/1281",
  court: "Köln",
} as const;

export const hours = [
  { label: "Montag–Donnerstag", value: "8:00–19:00" },
  { label: "Freitag", value: "8:00–15:00" },
  { label: "Darüber hinaus", value: "nach Vereinbarung" },
] as const;

export const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#praxis", label: "Praxis" },
  { href: "/#anfahrt", label: "Anfahrt" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export const serviceGroups = [
  {
    title: "Krankengymnastik und Bewegung",
    items: [
      "Krankengymnastik / Physiotherapie",
      "Manuelle Therapie",
      "Krankengymnastik am Gerät (MTT)",
      "Krankengymnastik nach Bobath",
      "Schlingentisch- und Extensionstherapie",
      "Sling Training",
      "Spiraldynamik",
      "Schmerztherapie nach Dr. Brügger",
    ],
  },
  {
    title: "Manuelle Anwendungen",
    items: [
      "Massage",
      "Hot Stone Massage",
      "Manuelle Lymphdrainage",
      "Faszientherapie",
      "Triggerpunktbehandlung",
      "Kinesio-Taping",
    ],
  },
  {
    title: "Physikalische Therapie",
    items: [
      "Wärmetherapie (Fango, Heißluft)",
      "Kryotherapie",
      "Elektrotherapie",
      "Ultraschall",
      "Stoßwellentherapie, private Zusatzleistung",
    ],
  },
  {
    title: "Weitere Verfahren",
    items: [
      "Kiefergelenkstherapie",
      "Beckenbodentherapie",
      "Fußreflexzonentherapie",
      "Osteopathie",
      "Sportphysiotherapie",
      "Stage-Physiotherapy",
      "D1-Verordnung („Mini Reha“)",
      "Hausbesuche",
    ],
  },
] as const;

export function mapEmbedSrc() {
  const { lat, lon } = site;
  const bbox = [lon - 0.012, lat - 0.008, lon + 0.012, lat + 0.008]
    .map((n) => n.toFixed(6))
    .join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lon}`;
}

export function osmLink() {
  const { lat, lon } = site;
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`;
}

export function googleMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.street}, ${site.postalCode} ${site.city}`,
  )}`;
}

export function addressLine() {
  return `${site.street}, ${site.postalCode} ${site.city}`;
}
