export type IntegrationCategory = {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  items: { name: string; note?: string }[];
};

/**
 * Integrations published by Recaho on recaho.com.
 * Partner availability varies by country — confirm the live list per market
 * before publishing any new logo or claim.
 */
export const integrationCategories: IntegrationCategory[] = [
  {
    id: "aggregators",
    name: "Food Aggregators",
    shortName: "Aggregators",
    icon: "globe",
    description:
      "Sync orders from delivery and marketplace platforms into a single kitchen queue, so staff accept, prepare and dispatch without switching between tablets.",
    items: [{ name: "Zomato" }, { name: "Swiggy" }, { name: "ONDC" }, { name: "Shopify" }],
  },
  {
    id: "reservations",
    name: "Table Reservation",
    shortName: "Reservations",
    icon: "calendar",
    description:
      "Bring partner bookings and walk-ins onto one floor plan, so the host desk and the kitchen work from the same table status.",
    items: [{ name: "ReserveGo" }, { name: "7 Rooms" }],
  },
  {
    id: "payments",
    name: "Payments",
    shortName: "Payments",
    icon: "creditCard",
    description:
      "Accept and reconcile card, UPI and digital payments, with every settlement tied back to the bill that created it.",
    items: [
      { name: "PhonePe" },
      { name: "Paytm" },
      { name: "Pine Labs" },
      { name: "ICICI Bank" },
      { name: "Razorpay" },
      { name: "CC Avenue" },
      { name: "DOJO" },
    ],
  },
  {
    id: "communications",
    name: "Communication APIs",
    shortName: "Communications",
    icon: "bell",
    description:
      "Send order updates, digital bills and marketing campaigns through the messaging channels your guests already use.",
    items: [
      { name: "WhatsApp" },
      { name: "Telegram" },
      { name: "SendGrid" },
      { name: "Gupshup" },
      { name: "MSG91" },
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    shortName: "Accounting",
    icon: "receipt",
    description:
      "Push sales, purchase and expense data into your accounting system, so the statutory books stay current without double entry.",
    items: [{ name: "Tally" }, { name: "Busy" }, { name: "SAP" }],
  },
  {
    id: "compliance",
    name: "Compliance",
    shortName: "Compliance",
    icon: "shield",
    description:
      "Meet local e-invoicing, tax and mall integration requirements with compliance support built into the billing flow.",
    items: [
      { name: "ZATCA Phase 2", note: "Saudi Arabia" },
      { name: "GST", note: "India e-invoicing" },
      { name: "MRA", note: "Mauritius" },
      { name: "Mall Integration" },
    ],
  },
  {
    id: "hardware",
    name: "Hardware",
    shortName: "Hardware",
    icon: "monitor",
    description:
      "Run Recaho on the printers, terminals, scanners and kiosks your restaurant already owns, with device support for common POS families.",
    items: [
      { name: "Sunmi" },
      { name: "iMin" },
      { name: "Essae" },
      { name: "POS Bank" },
      { name: "Posiflex" },
      { name: "Epson" },
      { name: "Honeywell" },
    ],
  },
];

export const integrationCount = integrationCategories.reduce((total, category) => total + category.items.length, 0);
