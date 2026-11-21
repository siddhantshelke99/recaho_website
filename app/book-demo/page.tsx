import type { Metadata } from "next";
import { CalendarCheck, Check, Clock, MonitorSmartphone } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Container } from "@/components/common/Container";
import { DemoForm } from "@/components/forms/DemoForm";
import { LogoMarquee } from "@/components/common/LogoMarquee";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Restaurant Software Demo",
  description:
    "Book a free Recaho demo. See restaurant POS billing, inventory, kitchen display, CRM and AI reporting mapped to your restaurant format, outlets and country.",
  path: "/book-demo",
  keywords: ["book restaurant POS demo", "restaurant software demo", "free POS demo"],
});

const agenda = [
  { icon: CalendarCheck, title: "30-minute walkthrough", description: "A live session, not a slide deck. We follow your service flow." },
  { icon: MonitorSmartphone, title: "Mapped to your format", description: "Modules, hardware and integrations relevant to your restaurant type." },
  { icon: Clock, title: "Clear rollout plan", description: "Setup steps, data migration and go-live timing for your outlets." },
];

const outcomes = [
  "See the exact modules for your format and outlet count",
  "Understand integration coverage in your country",
  "Get a written scope and rollout plan after the call",
  "No obligation, no long sales cycle",
];

export default function BookDemoPage() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden
        className="absolute -right-24 -top-24 size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(194,30,28,0.14),transparent_65%)]"
      />
      <Container className="relative py-10 lg:py-14">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Book a Demo", href: "/book-demo" }]} />

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <p className="eyebrow">Free demo</p>
            <h1 className="display-1 mt-3">See Recaho running your restaurant</h1>
            <p className="lede mt-4">
              Share a few details and a Recaho specialist will walk you through billing, kitchen, inventory and reporting
              on a live system — configured for how you actually operate.
            </p>

            <ul className="mt-6 space-y-2.5">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[0.9rem] text-ink-700">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              {agenda.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50">
                    <item.icon className="size-4 text-brand" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-[0.92rem] font-bold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-[0.82rem] leading-relaxed text-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-line bg-white p-4 text-[0.82rem] leading-relaxed text-body">
              Prefer to talk now? Call{" "}
              <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="font-semibold text-brand">
                {site.phones[0]}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand">
                {site.email}
              </a>
              . The team works across {site.address.country} and 18+ countries.
            </div>
          </div>

          <div>
            <DemoForm variant="demo" />
            <div className="mt-5">
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Restaurants already running on Recaho
              </p>
              <LogoMarquee
                items={["Fine dining", "Cafés", "QSR", "Cloud kitchens", "Bakeries", "Multi-outlet chains"]}
                ariaLabel="Restaurant formats using Recaho"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
