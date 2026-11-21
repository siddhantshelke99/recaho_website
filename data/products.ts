export type ProductVisual =
  | "pos"
  | "mind"
  | "inventory"
  | "recipe"
  | "purchase"
  | "vendor"
  | "crm"
  | "online"
  | "qr"
  | "accounting"
  | "kds"
  | "kiosk"
  | "reservation"
  | "queue"
  | "token"
  | "kotperf";

export type ProductCategoryId =
  | "mind"
  | "front-desk"
  | "back-office"
  | "engagement"
  | "peripheral"
  | "integrations";

export type Feature = {
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  navName: string;
  category: ProductCategoryId;
  visual: ProductVisual;
  eyebrow: string;
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: { heading: string; body: string[] };
  benefits: { icon: string; title: string; description: string }[];
  features: Feature[];
  howItWorks: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
  heroPoints: string[];
  ctaHeading: string;
};

export const productCategories: {
  id: ProductCategoryId;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  capabilities: string[];
  exploreHref: string;
}[] = [
  {
    id: "mind",
    name: "Recaho Mind",
    shortName: "AI intelligence",
    description:
      "The intelligence layer of the platform: plain-language answers, campaign drafts, and menu decisions grounded in your own sales and stock data.",
    icon: "sparkles",
    capabilities: ["Ask your data in plain language", "AI-drafted marketing campaigns", "Menu, pricing and offer recommendations"],
    exploreHref: "/products/recaho-mind",
  },
  {
    id: "front-desk",
    name: "Front Desk Operations",
    shortName: "Billing and service",
    description:
      "Everything your team touches during service — billing, table orders, kitchen tickets, staff access and end-of-day cash reconciliation.",
    icon: "creditCard",
    capabilities: ["POS billing and settlements", "Captain app for tableside orders", "KDS and accounts in one flow"],
    exploreHref: "/products/pos",
  },
  {
    id: "back-office",
    name: "Back-End Operations",
    shortName: "Stock and procurement",
    description:
      "Track every ingredient from purchase order to plate with recipe costing, vendor records, production runs and label printing.",
    icon: "boxes",
    capabilities: ["Recipe-wise stock deduction", "Purchase and vendor management", "Production and label printing"],
    exploreHref: "/products/inventory-management",
  },
  {
    id: "engagement",
    name: "Customer Engagement",
    shortName: "CRM and ordering",
    description:
      "Own the guest relationship with loyalty, wallet balance, direct online ordering and WhatsApp or email campaigns.",
    icon: "users",
    capabilities: ["Guest profiles and loyalty", "Your own ordering website", "Automated WhatsApp and email journeys"],
    exploreHref: "/products/crm",
  },
  {
    id: "peripheral",
    name: "Peripheral Applications",
    shortName: "Guest-facing apps",
    description:
      "The devices and screens that extend your front of house: kiosk, queue, tokens, reservations and kitchen performance.",
    icon: "monitor",
    capabilities: ["Self-ordering kiosk", "Queue and token displays", "Table reservations and KOT analytics"],
    exploreHref: "/products/self-ordering-kiosk",
  },
  {
    id: "integrations",
    name: "Integrations",
    shortName: "Connected platforms",
    description:
      "Recaho connects to the aggregators, payment providers, accounting tools, messaging APIs and hardware you already run.",
    icon: "plug",
    capabilities: ["Food aggregator order sync", "Payments and settlements", "Accounting, compliance and hardware"],
    exploreHref: "/integrations",
  },
];

export const coreProducts: Product[] = [
  {
    slug: "pos",
    name: "Recaho POS",
    navName: "Recaho POS",
    category: "front-desk",
    visual: "pos",
    eyebrow: "Front desk operations",
    h1: "Restaurant POS software built for real service",
    tagline:
      "Bill in seconds, route orders to the right station, and keep every counter, table and outlet in sync — even when the internet drops.",
    metaTitle: "Restaurant POS Software & Billing System",
    metaDescription:
      "Recaho POS is restaurant billing software for dine-in, takeaway and delivery. Split bills, route KOTs, settle multiple payment modes and keep billing online with offline fallback.",
    keywords: [
      "restaurant POS software",
      "restaurant billing software",
      "restaurant POS system India",
      "cloud POS for restaurants",
    ],
    heroPoints: ["Dine-in, takeaway and delivery in one queue", "Offline billing with automatic cloud sync", "Built-in KOT routing and settlements"],
    overview: {
      heading: "A billing counter that keeps up with your busiest shift",
      body: [
        "Recaho POS is the billing and order layer of the platform. Staff take an order at the counter, on the floor or from a captain tablet, and the same order is priced, taxed, discounted and sent to the kitchen without re-entry. Every bill is linked to inventory, customer records and daily reports.",
        "Because it runs on the same data as inventory, CRM and accounting, closing a bill is not the end of the workflow. Stock deducts by recipe, loyalty points post to the guest profile, and the day's sales land in the accounts module ready for reconciliation.",
      ],
    },
    benefits: [
      {
        icon: "zap",
        title: "Faster turns at peak hours",
        description: "A short, predictable billing flow means the counter keeps moving when the queue is longest.",
      },
      {
        icon: "list",
        title: "One queue for every channel",
        description: "Dine-in, takeaway, delivery and aggregator orders are visible to the same team on the same screen.",
      },
      {
        icon: "shield",
        title: "Fewer billing disputes",
        description: "Menu prices, modifiers, taxes and discounts come from configured rules instead of manual entry.",
      },
      {
        icon: "cloud",
        title: "Billing that survives downtime",
        description: "Offline billing keeps orders and payments captured, then syncs to the cloud when the connection returns.",
      },
    ],
    features: [
      { title: "Table and floor plan", description: "See table status, merge tables and move an order between tables without rebuilding the bill." },
      { title: "Split, merge and part payments", description: "Split a bill by item, seat or amount, then settle in multiple payment modes in one transaction." },
      { title: "KOT routing by station", description: "Each item carries a kitchen station so starters, mains and beverages print on their own tickets." },
      { title: "Multi-mode settlement", description: "Cash, card, UPI and wallet can be combined on a single bill with automatic change calculation." },
      { title: "Discounts and comps with audit", description: "Discount rules, manager approvals and reason codes keep promotional spend visible and controlled." },
      { title: "Captain app sync", description: "Floor staff take orders on a tablet and the counter sees them instantly, with no paper chits." },
      { title: "Shift and cash drawer control", description: "Open and close shifts, record cash movements and reconcile the drawer against billed sales." },
      { title: "Role-based staff access", description: "Give each role the screens it needs — and nothing beyond that — with user-level permissions." },
    ],
    howItWorks: [
      { title: "Open the table or counter", description: "Select dine-in, takeaway or delivery and attach the order to a table, token or customer." },
      { title: "Build the order", description: "Pick items, apply modifiers, combos and notes, and confirm the KOT station for each line." },
      { title: "Send to the kitchen", description: "The KOT prints or appears on the kitchen display while the order stays open for additions." },
      { title: "Settle and close", description: "Apply discounts and taxes, split if needed, take payment and post the sale to reports and accounts." },
    ],
    faqs: [
      {
        question: "Does Recaho POS work without internet?",
        answer:
          "Yes. Recaho supports offline billing so orders and payments are captured locally when the connection drops, then sync to the cloud once the restaurant is back online. Two-way sync behaviour should be confirmed for your specific hardware during onboarding.",
      },
      {
        question: "Can one POS handle dine-in, takeaway and delivery together?",
        answer:
          "Yes. All channels land in the same order queue and are tagged by type, so the counter and kitchen always know whether an order is for a table, a pickup or a rider.",
      },
      {
        question: "Does Recaho POS calculate GST and other local taxes?",
        answer:
          "Recaho applies the tax configuration set for your outlet, including GST in India, ZATCA e-invoicing requirements in Saudi Arabia and MRA requirements in Mauritius. Tax rules are configured during implementation.",
      },
      {
        question: "Can waiters take orders on a tablet?",
        answer:
          "Yes. The Recaho Captain App runs on Android tablets and sends orders to the same POS queue, so floor staff never queue at the billing counter.",
      },
    ],
    related: ["kitchen-display-system", "inventory-management", "crm", "online-ordering"],
    ctaHeading: "See Recaho POS bill a live order",
  },
  {
    slug: "recaho-mind",
    name: "Recaho Mind",
    navName: "Recaho Mind (AI)",
    category: "mind",
    visual: "mind",
    eyebrow: "AI intelligence",
    h1: "Recaho Mind: AI that takes work off your plate",
    tagline:
      "Ask questions about your business in plain language, get campaign drafts written for you, and make menu decisions using your own sales and stock data.",
    metaTitle: "AI Restaurant Management Software — Recaho Mind",
    metaDescription:
      "Recaho Mind is the AI layer of the Recaho platform. It answers business questions in plain language, drafts marketing campaigns and surfaces menu, pricing and operations insights.",
    keywords: [
      "AI restaurant management software",
      "restaurant analytics software",
      "AI restaurant insights",
      "restaurant business intelligence",
    ],
    heroPoints: ["Plain-language questions, real answers", "Campaign drafts ready for review", "Menu and pricing recommendations"],
    overview: {
      heading: "An assistant that understands restaurant data",
      body: [
        "Recaho Mind sits on top of the operational data your team already generates — bills, orders, stock movements, guest visits and kitchen timings. Instead of building a report, an owner can ask a direct question and read the answer in a sentence, then open the underlying numbers if they want to go deeper.",
        "Mind also assists with the work that usually gets postponed: drafting a weekend campaign, flagging dishes whose margins have slipped after a supplier price change, and suggesting which menu items deserve more prominence. Recommendations are advisory — your team reviews and approves every change before it goes live.",
      ],
    },
    benefits: [
      {
        icon: "sparkles",
        title: "Answers without report building",
        description: "Ask about sales, stock or guest behaviour and get a direct answer drawn from your own outlets.",
      },
      {
        icon: "lineChart",
        title: "Decisions with context",
        description: "Insights combine sales, recipe costing and stock movement instead of looking at one metric alone.",
      },
      {
        icon: "zap",
        title: "Marketing that ships faster",
        description: "Draft campaign copy, audience selection and offer structure, then review before sending.",
      },
      {
        icon: "settings",
        title: "Human approval built in",
        description: "Mind recommends; your team decides. Nothing is published or repriced automatically.",
      },
    ],
    features: [
      { title: "Conversational business questions", description: "Ask “which outlet had the weakest dessert attach rate last month?” and read the answer with its data source." },
      { title: "AI-driven marketing assistance", description: "Generate campaign angles, message variants and audience suggestions from real guest segments." },
      { title: "Menu and offer recommendations", description: "Spot underperforming dishes, margin drift and bundle opportunities using recipe costs and sales mix." },
      { title: "Operational summaries", description: "Get a plain-language read on the day or week, including outliers worth investigating." },
      { title: "Insight-to-action paths", description: "Move from an insight to the relevant module — a campaign draft, a price review or a stock check." },
      { title: "Multi-outlet comparisons", description: "Compare locations on the same question so head office sees the full picture, not one outlet at a time." },
    ],
    howItWorks: [
      { title: "Connect your outlets", description: "Mind reads the operational data already inside Recaho — no separate data warehouse to maintain." },
      { title: "Ask a question", description: "Type a business question the way you would ask a manager, in everyday language." },
      { title: "Review the answer", description: "See the conclusion alongside the numbers behind it, then drill into the module that owns the data." },
      { title: "Act with approval", description: "Approve a campaign, a menu change or a follow-up task; Mind prepares the work, your team signs off." },
    ],
    faqs: [
      {
        question: "What data does Recaho Mind use?",
        answer:
          "Mind works on the data already held in your Recaho account: sales and bills, menu and recipe costing, stock movement, kitchen timings and guest activity. It does not require a separate analytics project.",
      },
      {
        question: "Will Mind change my menu or prices automatically?",
        answer:
          "No. Mind produces recommendations and drafts. Pricing, menu and campaign changes are applied by your team after review.",
      },
      {
        question: "Do I need a technical team to use it?",
        answer:
          "No. Questions are asked in plain language and answers are written for operators. Deeper reports remain available in the standard analytics modules.",
      },
      {
        question: "Is Recaho Mind included in every plan?",
        answer:
          "Recaho Mind is part of the Recaho ecosystem and is scoped per business during the demo, depending on outlets, modules and data volume.",
      },
    ],
    related: ["pos", "inventory-management", "crm", "kot-performance-dashboard"],
    ctaHeading: "See what Recaho Mind finds in your data",
  },
  {
    slug: "inventory-management",
    name: "Inventory Management",
    navName: "Inventory",
    category: "back-office",
    visual: "inventory",
    eyebrow: "Back-end operations",
    h1: "Restaurant inventory management that updates itself",
    tagline:
      "Every bill deducts stock by recipe, low-stock items surface before service, and central warehouse transfers keep each outlet accounted for.",
    metaTitle: "Restaurant Inventory Management Software",
    metaDescription:
      "Track restaurant stock in real time with recipe-wise deduction, low-stock alerts, wastage, transfers, stock counts and central warehouse management in Recaho.",
    keywords: [
      "restaurant inventory management software",
      "restaurant stock management",
      "recipe wise stock deduction",
      "central warehouse software",
    ],
    heroPoints: ["Automatic deduction on every bill", "Low-stock and reorder alerts", "Central warehouse to outlet transfers"],
    overview: {
      heading: "Stock you can trust at the start of every shift",
      body: [
        "Most inventory problems are really data problems: stock was received but never entered, a recipe changed without updating the cost, or a transfer between outlets was recorded on paper. Recaho closes those gaps by tying stock movement to the same orders, recipes and purchase records your team already uses.",
        "When a dish is billed, its recipe determines exactly which ingredients are consumed and in what quantity. Managers get a live view of what is on hand, what is running low and what was wasted, and head office can see every outlet and the central warehouse side by side.",
      ],
    },
    benefits: [
      {
        icon: "refresh",
        title: "No manual stock entry",
        description: "Billed orders consume ingredients through recipes, so the count reflects real sales rather than estimates.",
      },
      {
        icon: "bell",
        title: "Fewer mid-service surprises",
        description: "Reorder levels and low-stock alerts flag shortages before a dish has to be pulled from the menu.",
      },
      {
        icon: "boxes",
        title: "Control across outlets",
        description: "Transfers, central warehouse dispatch and outlet-level stock stay visible in one ledger.",
      },
      {
        icon: "lineChart",
        title: "Costs you can act on",
        description: "Wastage, consumption variance and stock value are reported in the same place as sales performance.",
      },
    ],
    features: [
      { title: "Recipe-wise deduction", description: "Each billed item consumes its recipe ingredients, including sub-recipes and modifiers." },
      { title: "Live stock dashboard", description: "See current stock, value, movement and days of cover by store and outlet." },
      { title: "Low-stock and reorder alerts", description: "Set reorder levels per item and get flagged before a shortage reaches service." },
      { title: "Stock counts and adjustments", description: "Record physical counts, investigate variance and post adjustments with a reason trail." },
      { title: "Wastage and spoilage", description: "Capture wastage by reason so recurring loss patterns become visible to management." },
      { title: "Outlet transfers", description: "Move stock between outlets with a documented transfer trail instead of informal handovers." },
      { title: "Central warehouse and kitchen", description: "Dispatch stock to outlets and track production output from a central kitchen." },
      { title: "Valuation and consumption reports", description: "Review opening and closing stock, consumption and variance for any date range." },
    ],
    howItWorks: [
      { title: "Define items and units", description: "Create raw materials with purchase and consumption units, categories and reorder levels." },
      { title: "Link recipes to dishes", description: "Attach recipe quantities to menu items so billing can consume the right ingredients." },
      { title: "Receive and transfer stock", description: "Record purchases and warehouse dispatches so every outlet starts with an accurate count." },
      { title: "Review and reconcile", description: "Compare theoretical consumption with physical counts and post adjustments where needed." },
    ],
    faqs: [
      {
        question: "Does stock reduce automatically when a bill is generated?",
        answer:
          "Yes. When a dish with a configured recipe is billed, Recaho deducts the ingredient quantities defined in that recipe. Dishes without recipes can still be tracked at item level.",
      },
      {
        question: "Can Recaho manage a central warehouse and central kitchen?",
        answer:
          "Yes. Central warehouse and central kitchen workflows are supported, including dispatch to outlets and production tracking, so chain-level stock stays connected to outlet consumption.",
      },
      {
        question: "Can I track wastage separately from sales consumption?",
        answer:
          "Yes. Wastage and spoilage are recorded with reasons, which keeps them separate from recipe consumption in reports.",
      },
      {
        question: "Does inventory work across multiple outlets?",
        answer:
          "Yes. Stock is maintained per outlet with transfer records and consolidated reporting, so head office can compare locations without merging their ledgers.",
      },
    ],
    related: ["recipe-management", "purchase-management", "vendor-management", "pos"],
    ctaHeading: "Get a live view of your stock",
  },
  {
    slug: "recipe-management",
    name: "Recipe Management",
    navName: "Recipe Management",
    category: "back-office",
    visual: "recipe",
    eyebrow: "Back-end operations",
    h1: "Recipe management and costing, down to the portion",
    tagline:
      "Build recipes with exact quantities, see the true cost of every plate, and know what a supplier price change does to your margin before you reprint the menu.",
    metaTitle: "Restaurant Recipe Management & Costing Software",
    metaDescription:
      "Control portion costs with Recaho recipe management: ingredient-level recipes, sub-recipes, yield and wastage, live plate costing and menu margin analysis.",
    keywords: [
      "restaurant recipe management software",
      "recipe costing software",
      "menu costing",
      "portion control restaurant",
    ],
    heroPoints: ["Ingredient-level plate costing", "Sub-recipes and modifiers", "Margin impact before you reprice"],
    overview: {
      heading: "The recipe is the source of truth for cost and stock",
      body: [
        "A recipe in Recaho is more than a kitchen document. It defines which ingredients a dish consumes, how much wastage to allow for, and therefore what the dish costs to produce. Update a supplier rate and every recipe that uses that ingredient recalculates automatically.",
        "That single source of truth powers stock deduction, menu margin reporting and pricing decisions. Chefs keep control of preparation details; owners get a clear view of which dishes earn their place on the menu.",
      ],
    },
    benefits: [
      {
        icon: "utensils",
        title: "Accurate plate costs",
        description: "Cost is calculated from live ingredient rates and recipe quantities, not last year's spreadsheet.",
      },
      {
        icon: "layers",
        title: "Handles real kitchens",
        description: "Sub-recipes, batch preparation, yield and modifiers are modelled the way kitchens actually work.",
      },
      {
        icon: "barChart",
        title: "Menu engineering made practical",
        description: "Compare contribution margin and sales mix to see which dishes to promote, rework or retire.",
      },
      {
        icon: "package",
        title: "Portion control on the floor",
        description: "Standard quantities give kitchen teams a consistent reference for every plate.",
      },
    ],
    features: [
      { title: "Ingredient-level recipes", description: "Define each dish with raw materials, quantities and units that map to your stock items." },
      { title: "Sub-recipes and prep batches", description: "Cost sauces, marinades and bases once and reuse them across multiple dishes." },
      { title: "Yield and wastage factors", description: "Allow for trim, cooking loss and prep wastage so costs reflect reality." },
      { title: "Live plate costing", description: "See cost, selling price and contribution margin per dish, recalculated as rates change." },
      { title: "Modifiers and add-ons", description: "Attach extra-cost modifiers so customised orders deduct and cost correctly." },
      { title: "Menu margin analysis", description: "Rank dishes by margin and volume to support pricing and menu design decisions." },
      { title: "Version history", description: "Keep a record of recipe revisions so cost changes can be traced to a specific edit." },
      { title: "Multi-outlet consistency", description: "Share standard recipes across outlets while allowing location-specific overrides." },
    ],
    howItWorks: [
      { title: "Create stock items", description: "Set up ingredients, units and purchase rates in the inventory module." },
      { title: "Build the recipe", description: "Add ingredients, sub-recipes, quantities and wastage factors for each dish." },
      { title: "Review the costing", description: "Check cost, price and margin, then publish the recipe to the menu." },
      { title: "Keep it current", description: "Supplier rate updates flow into costs, and revisions are logged as recipes evolve." },
    ],
    faqs: [
      {
        question: "Do I have to build recipes for every dish?",
        answer:
          "You can start with your highest-volume or highest-value dishes. Recipe-based costing and deduction only apply to dishes that have a recipe configured.",
      },
      {
        question: "Can recipe costs update when supplier prices change?",
        answer:
          "Yes. Because recipes reference stock items and their rates, an updated purchase rate flows through to the plate cost and margin reports.",
      },
      {
        question: "Are recipes shared across outlets?",
        answer:
          "Standard recipes can be used across outlets for consistency, and outlet-specific versions can be maintained where kitchens differ.",
      },
      {
        question: "Does recipe management affect stock deduction?",
        answer:
          "Yes. Recipe quantities are what drive automatic ingredient consumption when a dish is billed.",
      },
    ],
    related: ["inventory-management", "purchase-management", "pos", "accounting"],
    ctaHeading: "Cost every plate with confidence",
  },
  {
    slug: "purchase-management",
    name: "Purchase Management",
    navName: "Purchase Management",
    category: "back-office",
    visual: "purchase",
    eyebrow: "Back-end operations",
    h1: "Purchase management from indent to goods received",
    tagline:
      "Raise purchase orders, compare supplier rates and record goods received, so stock, cost and payables all update from one procurement trail.",
    metaTitle: "Restaurant Purchase & Procurement Management Software",
    metaDescription:
      "Recaho purchase management covers purchase indents, supplier comparison, purchase orders, goods receipt, approvals and procurement reporting for restaurant chains.",
    keywords: [
      "restaurant purchase management software",
      "restaurant procurement software",
      "purchase order software for restaurants",
      "goods receipt note",
    ],
    heroPoints: ["Indents, approvals and purchase orders", "Rate comparison across suppliers", "Goods receipt linked to stock"],
    overview: {
      heading: "A procurement trail that closes the loop with stock",
      body: [
        "Purchasing in a restaurant is a chain of small decisions: who requested what, which supplier quoted the better rate, what actually arrived, and whether the invoice matches. When those steps live in different notebooks, stock records drift and payables become guesswork.",
        "Recaho purchase management keeps the whole chain in one place. A kitchen indent becomes a purchase order, the goods receipt note updates stock, and the vendor ledger carries the payable. Procurement and dispatch workflows extend the same trail to central kitchens and warehouses.",
      ],
    },
    benefits: [
      {
        icon: "clipboard",
        title: "Requests that follow a process",
        description: "Indents, approvals and purchase orders follow a defined route instead of ad-hoc phone calls.",
      },
      {
        icon: "wallet",
        title: "Better buying decisions",
        description: "Compare supplier rates for the same item before committing the order.",
      },
      {
        icon: "boxes",
        title: "Stock that matches deliveries",
        description: "Goods receipt updates inventory, so what was ordered and what arrived stay reconciled.",
      },
      {
        icon: "lineChart",
        title: "Spend visibility",
        description: "Review purchase value by supplier, category and outlet for any period.",
      },
    ],
    features: [
      { title: "Purchase indent", description: "Let kitchen or store teams request items with quantities and required dates." },
      { title: "Approval workflow", description: "Route indents and purchase orders for approval based on value or role." },
      { title: "Supplier rate comparison", description: "Check quoted rates across vendors for the same stock item before ordering." },
      { title: "Purchase orders", description: "Send structured orders to suppliers with items, quantities, rates and delivery terms." },
      { title: "Goods receipt note", description: "Record received quantities, rejections and rate differences at the point of delivery." },
      { title: "Procurement and dispatch", description: "Handle central procurement and dispatch to outlets with a documented trail." },
      { title: "Vendor ledger link", description: "Purchases post to the supplier ledger so payables stay current." },
      { title: "Purchase reporting", description: "Analyse spend, price movement and supplier performance over time." },
    ],
    howItWorks: [
      { title: "Raise an indent", description: "Stores or kitchen teams request what they need, with quantity and urgency." },
      { title: "Approve and order", description: "Managers compare rates, approve the request and issue a purchase order to the supplier." },
      { title: "Receive goods", description: "Record the delivery against the order, including shortfalls and rejected items." },
      { title: "Update stock and payables", description: "Stock and the vendor ledger update together, ready for reconciliation." },
    ],
    faqs: [
      {
        question: "Does a purchase order update stock automatically?",
        answer:
          "Stock is updated when goods are received against the order, not when the order is raised, so records reflect what physically arrived.",
      },
      {
        question: "Can purchases be approved by value?",
        answer:
          "Yes. Approval routing can be configured by role and order value so larger purchases follow the right level of review.",
      },
      {
        question: "Does purchase management support a central kitchen?",
        answer:
          "Yes. Procurement and dispatch workflows cover central kitchens and warehouses supplying multiple outlets.",
      },
      {
        question: "Are vendor payables tracked in Recaho?",
        answer:
          "Purchases post to the vendor ledger, and the accounting module carries payables alongside sales and expense records.",
      },
    ],
    related: ["vendor-management", "inventory-management", "accounting", "recipe-management"],
    ctaHeading: "Take control of procurement",
  },
  {
    slug: "vendor-management",
    name: "Vendor Management",
    navName: "Vendor Management",
    category: "back-office",
    visual: "vendor",
    eyebrow: "Back-end operations",
    h1: "Vendor management that keeps suppliers accountable",
    tagline:
      "One record per supplier for rates, purchase history, ledgers and payables — so negotiations start from facts instead of memory.",
    metaTitle: "Restaurant Vendor & Supplier Management Software",
    metaDescription:
      "Manage restaurant suppliers in Recaho: vendor profiles, item rates, purchase history, ledgers and payables, with performance visibility across outlets.",
    keywords: [
      "restaurant vendor management software",
      "supplier management restaurant",
      "vendor ledger software",
      "restaurant payables",
    ],
    heroPoints: ["Supplier profiles and agreed rates", "Purchase history in one ledger", "Payables tied to receipts"],
    overview: {
      heading: "Know exactly what each supplier costs you",
      body: [
        "Supplier relationships are one of the largest controllable costs in a restaurant, yet rate history often lives in WhatsApp threads. Recaho keeps a structured vendor record: contact details, agreed item rates, purchase history and the resulting ledger balance.",
        "That record supports better negotiation and cleaner accounting. When an invoice arrives, the payable is already linked to the goods receipt, and head office can compare the same item across vendors and outlets.",
      ],
    },
    benefits: [
      {
        icon: "users",
        title: "One profile per supplier",
        description: "Contacts, tax details, terms and agreed rates live in a single maintained record.",
      },
      {
        icon: "receipt",
        title: "Ledgers that reconcile",
        description: "Purchases and payments post to the vendor ledger so balances reflect actual activity.",
      },
      {
        icon: "barChart",
        title: "Negotiation with evidence",
        description: "Review historical rates and purchase volumes before renewing a contract.",
      },
      {
        icon: "building",
        title: "Chain-wide visibility",
        description: "See which outlets buy from which vendors and where consolidation could save money.",
      },
    ],
    features: [
      { title: "Vendor profiles", description: "Store contacts, addresses, tax identifiers, payment terms and categories." },
      { title: "Agreed item rates", description: "Maintain rate agreements per item so purchase comparisons use current pricing." },
      { title: "Purchase history", description: "View every order and receipt for a supplier across the selected period." },
      { title: "Vendor ledger", description: "Track debits, credits and outstanding balances per supplier." },
      { title: "Payables overview", description: "See what is due and when, alongside the purchases that created it." },
      { title: "Multi-outlet mapping", description: "Understand which outlets use each vendor and how spend is distributed." },
    ],
    howItWorks: [
      { title: "Create the vendor", description: "Add supplier details, categories, terms and tax information." },
      { title: "Agree rates", description: "Record item-level rates so purchase orders and comparisons use the right price." },
      { title: "Trade and receive", description: "Issue purchase orders and record goods receipts against the vendor." },
      { title: "Settle and review", description: "Track the ledger balance, settle payables and review spend performance." },
    ],
    faqs: [
      {
        question: "Can I compare rates from different suppliers?",
        answer:
          "Yes. Rates are stored per vendor and item, so the same stock item can be compared across suppliers before ordering.",
      },
      {
        question: "Does the vendor ledger connect to accounting?",
        answer:
          "Yes. Vendor transactions feed the accounting module, where payables and payments are tracked alongside sales and expenses.",
      },
      {
        question: "Can vendors be shared across outlets?",
        answer:
          "Vendors can serve multiple outlets, and outlet-level purchase history stays distinct for reporting.",
      },
      {
        question: "Can I record payment terms per vendor?",
        answer:
          "Yes. Payment terms are part of the vendor profile and support payable planning.",
      },
    ],
    related: ["purchase-management", "accounting", "inventory-management", "recipe-management"],
    ctaHeading: "Put your supplier data to work",
  },
];
