import { MapPin, Quote, ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ButtonLink } from "@/components/common/Button";
import { customers } from "@/data/home";
import { LogoMarquee } from "@/components/common/LogoMarquee";

const formats = Array.from(new Set(customers.map((customer) => customer.type))).slice(0, 8);

export function Testimonials() {
  return (
    <Section id="customers" className="relative overflow-hidden bg-ink">
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-40" />
      <div aria-hidden className="absolute -left-24 top-10 size-[26rem] rounded-full bg-brand/20 blur-[120px]" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Customer stories"
            title="Restaurants that run on Recaho stay on it."
            description="From beachfront dining rooms in the Maldives to delivery-only brands in Mumbai, Recaho supports restaurants across formats and countries."
          />
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-2 text-white/85">
              <ShieldCheck className="size-4 text-brand-100" aria-hidden />
              <p className="text-[0.82rem] font-semibold">Verified customer references</p>
            </div>
            <p className="mt-1.5 text-[0.8rem] leading-relaxed text-white/55">
              Restaurant names below are published by Recaho. Written testimonials are only shown once the customer has
              approved them — none are included yet.
            </p>
            <ButtonLink
              href="/contact?topic=customer-reference"
              variant="outline-light"
              size="sm"
              className="mt-4"
              withArrow
            >
              Request a reference in your region
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {customers.slice(0, 6).map((customer) => (
            <figure
              key={customer.name}
              className="group rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-9 place-items-center rounded-lg bg-white/10 font-display text-[0.68rem] font-bold text-white">
                  {customer.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </span>
                <Quote className="size-4 text-white/20" aria-hidden />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-[0.95rem] font-bold leading-snug text-white">{customer.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[0.75rem] text-white/50">
                  <MapPin className="size-3" aria-hidden />
                  {customer.location}
                </p>
                <p className="mt-3 inline-flex rounded-full border border-white/10 px-2 py-0.5 text-[0.68rem] font-medium text-white/65">
                  {customer.type}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-9">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/40">
            Formats running on Recaho
          </p>
          <LogoMarquee items={formats} tone="dark" ariaLabel="Restaurant formats using Recaho" />
        </div>
      </Container>
    </Section>
  );
}
