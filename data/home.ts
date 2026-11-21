export const workflowSteps = [
  {
    step: "01",
    title: "Guest places the order",
    description: "Dine-in, QR, kiosk, online or aggregator — every channel starts the same order record.",
    tag: "Order",
  },
  {
    step: "02",
    title: "Recaho POS prices the order",
    description: "Menu prices, modifiers, combos and taxes are applied from configured rules, not manual entry.",
    tag: "POS",
  },
  {
    step: "03",
    title: "KOT reaches the kitchen",
    description: "Items route to their stations as a printed ticket or a live KDS card with a prep timer.",
    tag: "Kitchen",
  },
  {
    step: "04",
    title: "The kitchen marks it ready",
    description: "Station status updates notify the counter or floor, and timings are recorded for performance review.",
    tag: "Service",
  },
  {
    step: "05",
    title: "Stock deducts by recipe",
    description: "Recipe quantities consume ingredients, so inventory reflects what was actually sold.",
    tag: "Inventory",
  },
  {
    step: "06",
    title: "Payment and billing complete",
    description: "Split payments, wallets and multiple modes settle against one bill and post to accounts.",
    tag: "Payment",
  },
  {
    step: "07",
    title: "Sales data appears in reports",
    description: "Owners and managers see sales, channel mix and kitchen speed for every outlet.",
    tag: "Reports",
  },
  {
    step: "08",
    title: "Guest data feeds CRM",
    description: "Visit history, loyalty points and campaign segments build from the same transaction.",
    tag: "CRM",
  },
] as const;

export const whyRecaho = [
  {
    icon: "layers",
    title: "All-in-one restaurant management",
    description:
      "POS, inventory, recipes, purchase, CRM, accounting and analytics run on one platform, so the same data is never entered twice.",
  },
  {
    icon: "sparkles",
    title: "AI-powered intelligence",
    description:
      "Recaho Mind answers business questions in plain language and prepares campaign and menu recommendations for your team to approve.",
  },
  {
    icon: "globe",
    title: "Global compliance and configuration",
    description:
      "Country-specific tax and compliance requirements are supported across the 18+ countries Recaho operates in, from GST to ZATCA.",
  },
  {
    icon: "building",
    title: "Scalable multi-outlet management",
    description:
      "Start with one outlet and add locations without switching systems or losing historical reporting. Menu and price changes can be managed centrally.",
  },
  {
    icon: "cloud",
    title: "Cloud-based architecture",
    description:
      "A cloud platform means the owner, the manager and the accountant see the same live numbers from any device, in any location.",
  },
  {
    icon: "refresh",
    title: "Offline billing support",
    description:
      "Billing continues when the internet drops, then syncs to the cloud. Service does not stop because the connection did.",
  },
  {
    icon: "shield",
    title: "Enterprise security",
    description:
      "Recaho is AWS-hosted and encrypted, with role-based access controls that keep sensitive operational and financial data restricted.",
  },
  {
    icon: "workflow",
    title: "Integrated restaurant operations",
    description:
      "An order is not just a bill. It updates stock, kitchen timings, accounts and guest history in the same workflow.",
  },
] as const;

export const homeFaqs = [
  {
    question: "What is Recaho?",
    answer:
      "Recaho is an AI-powered, cloud-based restaurant management platform. It brings billing and POS, inventory and recipes, kitchen operations, CRM and loyalty, accounting, and business intelligence into a single system used by restaurants, cafés, QSRs, cloud kitchens, bakeries and multi-outlet chains.",
  },
  {
    question: "What is restaurant management software?",
    answer:
      "Restaurant management software is the system that runs the operational side of a restaurant: taking orders, generating bills, tracking stock, sending tickets to the kitchen, managing customers and reporting on sales. Recaho covers those functions in one place instead of separate tools that need manual reconciliation.",
  },
  {
    question: "What is restaurant POS software?",
    answer:
      "A restaurant POS (point of sale) is the billing and order system used at the counter or on the floor. Recaho POS handles dine-in, takeaway and delivery orders, applies taxes and discounts, routes kitchen tickets, accepts multiple payment modes and records every sale for reporting and accounting.",
  },
  {
    question: "How does Recaho help restaurants?",
    answer:
      "Recaho reduces the manual work between an order and the numbers that follow it. Billing sends tickets to the kitchen, recipes deduct stock, sales post to accounts, and guest details feed CRM. Owners get one live view of operations instead of several disconnected reports.",
  },
  {
    question: "Does Recaho support inventory management?",
    answer:
      "Yes. Recaho deducts stock automatically from recipes when dishes are billed, tracks wastage and transfers, sends low-stock alerts, and supports stock counts, central warehouses and central kitchens.",
  },
  {
    question: "Does Recaho support multiple outlets?",
    answer:
      "Yes. Recaho is built for multi-outlet operations with central menu and price management, outlet-level inventory, consolidated reporting and head-office visibility across locations.",
  },
  {
    question: "Does Recaho support online ordering?",
    answer:
      "Yes. Recaho includes a branded online ordering website for direct orders and can sync orders from connected food aggregators into the same kitchen queue. Availability of specific aggregators depends on your country and current partner status.",
  },
  {
    question: "Does Recaho support QR ordering?",
    answer:
      "Yes. Each table can carry a QR code that opens a live photo menu. Guests order and can pay from their phone, and the order arrives on the POS with the table number attached.",
  },
  {
    question: "Does Recaho offer AI-powered features?",
    answer:
      "Yes. Recaho Mind, the AI layer of the platform, answers business questions in plain language, helps draft marketing campaigns, and surfaces menu, pricing and operational recommendations. Recommendations are reviewed by your team before anything is applied.",
  },
  {
    question: "Can Recaho integrate with food aggregators?",
    answer:
      "Recaho publishes integrations for aggregator and marketplace platforms including Zomato, Swiggy, ONDC and Shopify. Because integrations vary by region and change over time, the Recaho team confirms the live list for your outlets during the demo.",
  },
  {
    question: "How can I book a free demo?",
    answer:
      "Use the Book a Free Demo button anywhere on this site and share a few details about your restaurant. A Recaho specialist will walk you through the modules that match your format, outlets and countries of operation.",
  },
] as const;

/**
 * Real customer references published on recaho.com (name, location, format).
 * No testimonial quotes are shown because none are published by Recaho.
 */
export const customers = [
  { name: "Anara by Chef Kunal Kapur", location: "Dubai, UAE", type: "Fine Dining" },
  { name: "Akasa", location: "Singapore", type: "Premium Fine Dining" },
  { name: "Al Qarmouty", location: "Doha, Qatar", type: "Seafood Chain" },
  { name: "Alkauser", location: "Delhi, India", type: "Mughlai Food Chain" },
  { name: "Aazebo", location: "Hyderabad, India", type: "Arabian Mandi Grill" },
  { name: "11 Flowers Rooftop", location: "Vrindavan, India", type: "Pure Veg Café" },
  { name: "04 Restro Cafe", location: "Aizawl, India", type: "Multi-Cuisine" },
  { name: "Aibee", location: "Malé, Maldives", type: "Beachfront Dining" },
  { name: "Wow Baker's", location: "Panchkula, India", type: "Bakery & Restaurant" },
  { name: "9to69", location: "India", type: "Fast Food Chain" },
  { name: "Al Fawan", location: "Muscat, Oman", type: "Legacy Cuisine Chain" },
  { name: "Yui", location: "Mumbai, India", type: "Asian Diner" },
] as const;
