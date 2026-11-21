import { MessagesSquare, Phone } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Accordion } from "@/components/common/Accordion";
import { ButtonLink } from "@/components/common/Button";
import { homeFaqs } from "@/data/home";
import { site } from "@/lib/site";

export function FAQ() {
  return (
    <Section id="faq" className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Straight answers before you book"
              description="If your question is not here, the sales team answers directly — no gatekeeping."
            />

            <div className="mt-7 rounded-xl border border-line bg-sand p-5">
              <MessagesSquare className="size-5 text-brand" aria-hidden />
              <p className="mt-3 font-display text-[0.98rem] font-bold text-ink">Still deciding?</p>
              <p className="mt-1 text-[0.84rem] leading-relaxed text-body">
                Talk to a specialist who works with restaurants in your format and country.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <ButtonLink href="/contact" size="sm" className="w-full">
                  Contact sales
                </ButtonLink>
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 py-1.5 text-[0.8rem] font-medium text-ink-700 hover:text-brand"
                >
                  <Phone className="size-3.5" aria-hidden />
                  {site.phones[0]}
                </a>
              </div>
            </div>
          </div>

          <Accordion items={homeFaqs} defaultOpen={0} className="border-t border-line" />
        </div>
      </Container>
    </Section>
  );
}
