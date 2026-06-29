import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import {
  Hero,
  Trust,
  About,
  Services,
  Appointments,
  WhyUs,
  Testimonials,
  FAQ,
  Contact,
  Footer,
  MobileCTA,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Dr. Fouad Idrissi · Gynécologue Obstétricien à Tétouan",
      },
      {
        name: "description",
        content:
          "Cabinet de gynécologie et d'obstétrique du Dr. Fouad Idrissi à Tétouan. Suivi de grossesse, échographie, santé de la femme. Prenez rendez-vous en ligne.",
      },
      {
        property: "og:title",
        content: "Dr. Fouad Idrissi · Gynécologue Obstétricien à Tétouan",
      },
      {
        property: "og:description",
        content:
          "Soins gynécologiques et obstétricaux à Tétouan : suivi de grossesse, échographie, santé de la femme.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Dr. Fouad Idrissi — Gynécologie & Obstétrique",
          image: "/og-cover.jpg",
          telephone: "+212539711640",
          medicalSpecialty: ["Gynecology", "Obstetrics"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Résidence Mohamed II, Avenue Mohamed V",
            addressLocality: "Tétouan",
            postalCode: "93000",
            addressCountry: "MA",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "19:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <Appointments />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </LanguageProvider>
  );
}
