import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "./Button";
import { Container, Section } from "./Container";
import { site } from "@/lib/site";

type Props = {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  eyebrow?: string;
};

export function CTASection({
  heading = "Ready to transform the way you run your restaurant?",
  description = "Discover how Recaho connects your restaurant operations through one intelligent platform.",
  primaryLabel = "Book a Free Demo",
  primaryHref = "/book-demo",
  secondaryLabel = "Talk to Our Team",
  secondaryHref = "/contact",
  eyebrow = "Get started",
}: Props) {
  return (
    <Section className="relative overflow-hidden bg-ink">
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-60" />
      <div
        aria-hidden
        className="absolute -right-24 -top-40 size-[34rem] rounded-full bg-brand/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-52 left-1/4 size-[26rem] rounded-full bg-accent/15 blur-[120px]"
      />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow text-brand-100">{eyebrow}</p>
            <h2 className="display-2 mt-3 max-w-xl text-white">{heading}</h2>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-white/70">{description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={primaryHref} size="lg" withArrow>
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} size="lg" variant="outline-light">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[var(--radius-panel)] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Talk to sales</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-white/85 transition-colors hover:text-white"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-white/10">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-white/85 transition-colors hover:text-white"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-white/10">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  {site.phones[0]}
                </a>
              </li>
            </ul>
            <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50">
              A 30-minute walkthrough with a Recaho specialist, mapped to your format and outlets.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
