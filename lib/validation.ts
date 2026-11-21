import { products } from "@/data/catalogue";

export const dialCodes = [
  { code: "+91", country: "India" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+968", country: "Oman" },
  { code: "+965", country: "Kuwait" },
  { code: "+973", country: "Bahrain" },
  { code: "+960", country: "Maldives" },
  { code: "+65", country: "Singapore" },
  { code: "+60", country: "Malaysia" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+230", country: "Mauritius" },
  { code: "+44", country: "United Kingdom" },
  { code: "+1", country: "United States / Canada" },
  { code: "+61", country: "Australia" },
  { code: "+27", country: "South Africa" },
  { code: "+254", country: "Kenya" },
  { code: "+234", country: "Nigeria" },
] as const;

export const countries = [
  "India",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
  "Maldives",
  "Singapore",
  "Malaysia",
  "Sri Lanka",
  "Mauritius",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "South Africa",
  "Kenya",
  "Nigeria",
  "Other",
] as const;

export const restaurantTypes = [
  "Fine dining restaurant",
  "Café",
  "Quick service restaurant (QSR)",
  "Pub / bar / brewery",
  "Cloud kitchen",
  "Bakery",
  "Sweet shop",
  "Pizza restaurant",
  "Ice cream parlour",
  "Food court",
  "Food truck",
  "Multi-outlet chain",
  "Hotel / resort restaurant",
  "Other",
] as const;

export const outletRanges = ["1", "2 – 5", "6 – 10", "11 – 25", "26 – 50", "50+"] as const;

export const interestedProducts = ["Not sure yet", "Full Recaho platform", ...products.map((product) => product.name)];

export type LeadInput = {
  type: "demo" | "contact";
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  restaurantName: string;
  country: string;
  restaurantType: string;
  outlets: string;
  product: string;
  message: string;
  /** Honeypot: must stay empty. */
  website?: string;
  sourcePath?: string;
};

export type ValidationResult =
  | { ok: true; data: LeadInput }
  | { ok: false; errors: Record<string, string> };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function validateLead(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null) {
    return { ok: false, errors: { form: "Invalid submission." } };
  }

  const raw = input as Record<string, unknown>;
  const type = raw.type === "contact" ? "contact" : "demo";

  const data: LeadInput = {
    type,
    fullName: text(raw.fullName, 120),
    email: text(raw.email, 180).toLowerCase(),
    phone: text(raw.phone, 20),
    countryCode: text(raw.countryCode, 8) || "+91",
    restaurantName: text(raw.restaurantName, 140),
    country: text(raw.country, 80),
    restaurantType: text(raw.restaurantType, 80),
    outlets: text(raw.outlets, 20),
    product: text(raw.product, 120),
    message: text(raw.message, 2000),
    website: text(raw.website, 100),
    sourcePath: text(raw.sourcePath, 200),
  };

  const errors: Record<string, string> = {};

  if (data.fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (!EMAIL_PATTERN.test(data.email)) errors.email = "Enter a valid business email address.";

  const digits = data.phone.replace(/[^\d]/g, "");
  if (digits.length < 6 || digits.length > 15) errors.phone = "Enter a valid mobile number.";
  if (!/^\+\d{1,4}$/.test(data.countryCode)) errors.countryCode = "Select a country code.";

  if (type === "demo") {
    if (data.restaurantName.length < 2) errors.restaurantName = "Please enter your restaurant name.";
    if (!data.country) errors.country = "Select your country.";
    if (!data.restaurantType) errors.restaurantType = "Select your restaurant type.";
    if (!data.outlets) errors.outlets = "Select the number of outlets.";
  } else if (data.message.length < 10) {
    errors.message = "Tell us a little about what you need (at least 10 characters).";
  }

  if (data.website) errors.form = "Submission rejected.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return { ok: true, data };
}
