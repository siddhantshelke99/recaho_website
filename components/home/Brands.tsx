import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { customers } from "@/data/home";

export function Brands() {
  const track = [...customers, ...customers];

  return (
    <Section id="brands" spacing="compact" className="border-b border-line bg-white">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl font-display text-[1.45rem] font-bold leading-snug text-ink sm:text-[1.7rem]">
            From QSR counters to fine dining, brands run on Recaho.
          </h2>
          <Link
            href="/#customers"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.82rem] font-semibold text-ink transition-colors hover:text-brand"
          >
            Customer stories
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </Container>

      <Container>
        <div className="marquee-mask pause-on-hover mt-7 overflow-hidden">
          <div className="marquee-track gap-3">
            {track.map((customer, index) => (
              <div
                key={`${customer.name}-${index}`}
                aria-hidden={index >= customers.length}
                className="flex shrink-0 flex-col justify-center rounded-xl border border-line bg-sand/60 px-5 py-3"
              >
                <p className="whitespace-nowrap font-display text-[0.92rem] font-bold text-ink">{customer.name}</p>
                <p className="whitespace-nowrap text-[0.68rem] text-muted">
                  {customer.location} · {customer.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
