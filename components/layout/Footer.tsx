import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { footerColumns } from "@/data/navigation";
import { site } from "@/lib/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "YouTube", href: site.social.youtube, Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2.7fr] lg:gap-14">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[0.88rem] leading-relaxed text-body">
              One system for every order, outlet, kitchen and shift. The restaurant operating platform built for
              restaurants, cafés, QSRs, bakeries and multi-outlet chains.
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {["Cloud & offline billing", "18+ countries", "AWS-hosted"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-line bg-white px-2.5 py-1 text-[0.68rem] font-medium text-ink-700"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Recaho on ${label}`}
                  className="grid size-9 place-items-center rounded-full border border-line bg-white text-ink-700 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-5">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="font-display text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink">
                  {column.title}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-1 text-[0.81rem] leading-snug text-body transition-colors hover:text-brand"
                        >
                          {link.label}
                          <ArrowUpRight className="mt-0.5 size-2.5 shrink-0 text-line-strong" aria-hidden />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[0.81rem] leading-snug text-body transition-colors hover:text-brand"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-3">
          <div className="bg-white p-5">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted">Sales, demo & installation</p>
            <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2 text-[0.84rem] font-medium text-ink hover:text-brand">
              <Mail className="size-3.5 text-brand" aria-hidden />
              {site.email}
            </a>
            {site.phones.slice(0, 2).map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="mt-1.5 flex items-center gap-2 text-[0.84rem] text-body hover:text-brand"
              >
                <Phone className="size-3.5 text-brand" aria-hidden />
                {phone}
              </a>
            ))}
          </div>

          <div className="bg-white p-5">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted">Customer support</p>
            <p className="mt-2 text-[0.79rem] leading-relaxed text-body">
              Already on Recaho? Our support team works with your outlet every day.
            </p>
            <a
              href={`tel:${site.supportPhone}`}
              className="mt-1.5 flex items-center gap-2 text-[0.84rem] font-medium text-ink hover:text-brand"
            >
              <Phone className="size-3.5 text-brand" aria-hidden />
              {site.supportPhone}
            </a>
            <a href={`mailto:${site.supportEmail}`} className="mt-1.5 flex items-center gap-2 text-[0.84rem] text-body hover:text-brand">
              <Mail className="size-3.5 text-brand" aria-hidden />
              {site.supportEmail}
            </a>
          </div>

          <div className="bg-white p-5">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted">Visit us</p>
            <a
              href={site.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-start gap-2 text-[0.81rem] leading-relaxed text-body hover:text-brand"
            >
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden />
              <span>
                {site.legalName}
                <br />
                {site.address.line1}, {site.address.line2}, {site.address.country}
              </span>
            </a>
            <p className="mt-2 text-[0.74rem] text-muted">Operating across 18+ countries · 300+ cities</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-[0.76rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved. Recaho is a registered brand of{" "}
            {site.legalName}.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { label: "Privacy policy", href: site.links.privacy },
              { label: "Terms of use", href: site.links.terms },
              { label: "Refund policy", href: site.links.refund },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
