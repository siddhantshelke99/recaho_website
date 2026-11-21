import type { Metadata } from "next";
import { Clock, Headphones, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/common/JsonLd";
import { breadcrumbSchema, buildMetadata, organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Recaho — Restaurant Software Sales & Support",
  description:
    "Contact the Recaho team for restaurant software sales, demos, integrations and customer support. Sales: sales@recaho.com, +91 8956852960. Support: 07969990111.",
  path: "/contact",
  keywords: ["contact Recaho", "restaurant software support", "Recaho sales"],
});

const contactCards = [
  {
    icon: Mail,
    title: "Sales & new business",
    lines: [{ label: site.email, href: `mailto:${site.email}` }],
    note: "For demos, pricing, multi-outlet rollouts and integrations.",
  },
  {
    icon: Phone,
    title: "Sales helpline",
    lines: site.phones.map((phone) => ({ label: phone, href: `tel:${phone.replace(/\s/g, "")}` })),
    note: "Monday to Saturday, business hours.",
  },
  {
    icon: Headphones,
    title: "Customer support",
    lines: [
      { label: site.supportPhone, href: `tel:${site.supportPhone}` },
      { label: site.supportEmail, href: `mailto:${site.supportEmail}` },
    ],
    note: "For restaurants already running on Recaho.",
  },
  {
    icon: MapPin,
    title: "Head office",
    lines: [
      {
        label: `${site.legalName}, ${site.address.line1}, ${site.address.line2}, ${site.address.country}`,
        href: site.address.mapUrl,
      },
    ],
    note: "Visits by appointment.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-sand">
        <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
        <Container className="relative py-10 lg:py-12">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
          <div className="mt-6 max-w-2xl">
            <p className="eyebrow">Contact us</p>
            <h1 className="display-1 mt-3">Talk to the Recaho team</h1>
            <p className="lede mt-4">
              Whether you are replacing a legacy POS, adding outlets or asking about a specific integration, the team
              that implements Recaho is the team that answers.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactCards.map((card) => (
                  <div key={card.title} className="rounded-[var(--radius-card)] border border-line bg-white p-4">
                    <span className="grid size-9 place-items-center rounded-lg bg-brand-50">
                      <card.icon className="size-4 text-brand" aria-hidden />
                    </span>
                    <p className="mt-3 font-display text-[0.92rem] font-bold text-ink">{card.title}</p>
                    <div className="mt-1.5 space-y-1">
                      {card.lines.map((line) => (
                        <a
                          key={line.label}
                          href={line.href}
                          target={line.href.startsWith("http") ? "_blank" : undefined}
                          rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block break-words text-[0.82rem] font-medium text-ink-700 transition-colors hover:text-brand"
                        >
                          {line.label}
                        </a>
                      ))}
                    </div>
                    <p className="mt-2 text-[0.72rem] leading-relaxed text-muted">{card.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[var(--radius-card)] border border-line bg-sand p-5">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-brand" aria-hidden />
                  <p className="font-display text-[0.92rem] font-bold text-ink">Global coverage</p>
                </div>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-body">
                  Recaho supports restaurants across 18+ countries and 300+ cities, with implementations delivered by
                  regional teams.
                </p>
                <a
                  href={site.links.partner}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-[0.8rem] font-semibold text-brand hover:text-brand-600"
                >
                  Become a channel partner →
                </a>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Send a message" title="Tell us what you need" size="display-3" />
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]),
        ]}
      />
    </>
  );
}
