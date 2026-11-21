import { Container, Section } from "@/components/common/Container";
import { ButtonLink } from "@/components/common/Button";
import { whyRecaho } from "@/data/home";
import { getIcon } from "@/lib/icons";

export function WhyRecaho() {
  return (
    <Section id="why-recaho" className="bg-white">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Recaho</p>
            <h2 className="display-2 mt-3 text-ink">Why restaurants choose Recaho.</h2>
            <p className="lede mt-3">
              A restaurant platform is only useful if the whole operation runs on it. These are the capabilities that
              make that possible.
            </p>
          </div>
          <ButtonLink href="/about" variant="secondary" size="md" withArrow className="shrink-0">
            About Recaho
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whyRecaho.slice(0, 6).map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={item.title} className="group bg-white p-6 transition-colors hover:bg-sand">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl bg-brand-50">
                    <Icon className="size-[1.15rem] text-brand" aria-hidden />
                  </span>
                  <span className="font-display text-[0.72rem] font-bold text-line-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[1.05rem] font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-body">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {whyRecaho.slice(6).map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-line bg-sand/60 p-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white">
                  <Icon className="size-4 text-brand" aria-hidden />
                </span>
                <div>
                  <p className="text-[0.9rem] font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-[0.8rem] leading-relaxed text-body">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
