import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { integrationCategories } from "@/data/integrations";

const allItems = integrationCategories.flatMap((category) => category.items);

export function Integrations() {
  return (
    <Section id="integrations" className="border-b border-line bg-sand">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Integrations</p>
          <h2 className="display-2 mt-3 text-ink">
            Seamlessly integrated with the platforms your business relies on.
          </h2>
          <p className="lede mt-3">
            From accounting and delivery to payments and messaging, Recaho connects the platforms you already run
            through one integration layer — no manual re-entry between systems.
          </p>
        </div>
      </Container>

      <Container>
        <div className="marquee-mask pause-on-hover mt-9 overflow-hidden">
          <div className="marquee-track gap-3">
            {[...allItems, ...allItems].map((item, index) => (
              <span
                key={`${item.name}-${index}`}
                aria-hidden={index >= allItems.length}
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2.5 text-[0.82rem] font-semibold text-ink-700 shadow-[0_1px_2px_rgba(20,22,26,0.03)]"
              >
                {item.name}
                {item.note ? <span className="text-[0.68rem] font-normal text-muted">{item.note}</span> : null}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-8 grid gap-3 rounded-[22px] border border-line bg-white p-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-[0.92rem] font-semibold text-ink">
              Aggregators, payments, accounting, messaging, compliance and hardware.
            </p>
            <p className="mt-1 text-[0.8rem] text-muted">
              Availability varies by country and partner status. Recaho confirms the live list for your outlets during
              the demo.
            </p>
          </div>
          <Link
            href="/integrations"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[0.84rem] font-semibold text-white transition-colors hover:bg-ink-800"
          >
            Explore all integrations
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
