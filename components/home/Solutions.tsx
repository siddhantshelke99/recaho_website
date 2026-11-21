import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { solutions } from "@/data/solutions";
import { getIcon } from "@/lib/icons";

export function Solutions() {
  return (
    <Section id="solutions" className="border-y border-line bg-sand">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Solutions by restaurant type"
            title="One platform. Every type of restaurant."
            description="Formats differ in service style, menu complexity and reporting needs. Recaho is configured to match the way your restaurant actually runs."
          />
          <Link
            href="/solutions"
            className="inline-flex shrink-0 items-center gap-2 text-[0.875rem] font-semibold text-ink transition-colors hover:text-brand"
          >
            Compare all solutions
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = getIcon(solution.icon);
            return (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group relative flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_18px_40px_-28px_rgba(20,22,26,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-10 place-items-center rounded-lg bg-sand transition-colors group-hover:bg-brand-50">
                    <Icon className="size-[1.15rem] text-brand" aria-hidden />
                  </span>
                  <ArrowUpRight
                    className="size-4 text-line-strong transition-all group-hover:-translate-y-0.5 group-hover:text-brand"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-4 font-display text-[1.05rem] font-bold text-ink">{solution.name}</h3>
                <p className="mt-1.5 line-clamp-2 text-[0.845rem] leading-relaxed text-body">{solution.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  Explore solution
                  <ArrowUpRight className="size-3" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
