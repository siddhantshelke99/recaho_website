import { coreProducts, productCategories, type Product, type ProductCategoryId } from "./products";
import { engagementProducts } from "./products-engagement";
import { peripheralProducts } from "./products-peripheral";

export type { Product, ProductCategoryId };
export { productCategories };

export const products: Product[] = [...coreProducts, ...engagementProducts, ...peripheralProducts];

/** Products surfaced with a full alternating showcase on the homepage. */
export const flagshipSlugs = ["pos", "recaho-mind", "inventory-management", "crm", "kitchen-display-system", "qr-menu"] as const;

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategoryId): Product[] {
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProduct(slug);
  if (!product) return [];
  return product.related.map((relatedSlug) => getProduct(relatedSlug)).filter((item): item is Product => Boolean(item));
}

export const flagshipProducts = flagshipSlugs
  .map((slug) => getProduct(slug))
  .filter((item): item is Product => Boolean(item));

/** Products not shown in the flagship showcase, presented as a compact catalogue. */
export const catalogueProducts = products.filter(
  (product) => !flagshipSlugs.includes(product.slug as (typeof flagshipSlugs)[number]),
);
