import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductBenefits, ProductFeatures, ProductOverview } from "@/components/products/ProductBenefits";
import { ProductGallery, ProductHowItWorks } from "@/components/products/ProductGallery";
import { ProductFAQ, RelatedProducts } from "@/components/products/RelatedProducts";
import { CTASection } from "@/components/common/CTASection";
import { JsonLd } from "@/components/common/JsonLd";
import { getProduct, products } from "@/data/catalogue";
import { breadcrumbSchema, buildMetadata, softwareApplicationSchema } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return buildMetadata({
      title: "Product not found",
      description: "This Recaho product page could not be found.",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
    keywords: product.keywords,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <ProductHero product={product} />
      <ProductOverview product={product} />
      <ProductBenefits product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <ProductHowItWorks product={product} />
      <ProductFAQ product={product} />
      <RelatedProducts slug={product.slug} />
      <CTASection heading={product.ctaHeading} description={product.tagline} eyebrow={product.eyebrow} />
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: `${product.name} — Recaho`,
            description: product.metaDescription,
            url: `${site.url}/products/${product.slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: product.navName, href: `/products/${product.slug}` },
          ]),
        ]}
      />
    </>
  );
}
