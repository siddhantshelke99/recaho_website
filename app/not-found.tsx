import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

const links = [
  { label: "All products", href: "/products" },
  { label: "Solutions by format", href: "/solutions" },
  { label: "Integrations", href: "/integrations" },
  { label: "About Recaho", href: "/about" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <Container className="relative flex min-h-[60vh] flex-col justify-center py-20">
        <p className="eyebrow">404</p>
        <h1 className="display-1 mt-3 max-w-xl">This page has left the pass</h1>
        <p className="lede mt-4 max-w-xl">
          The page you were looking for does not exist or has moved. The rest of the platform is right here.
        </p>
        <div className="mt-7 flex flex-col gap-3 xs:flex-row">
          <ButtonLink href="/" size="lg" withArrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/book-demo" size="lg" variant="secondary">
            Book a demo
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-lg border border-line bg-white px-4 py-3 text-[0.86rem] font-medium text-ink transition-colors hover:border-brand/30 hover:text-brand"
            >
              {link.label}
              <ArrowRight className="size-3.5 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
