import { site } from "@/lib/site";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  badge?: string;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

export type NavTab = {
  id: string;
  label: string;
  heading: string;
  blurb: string;
  href: string;
  links: NavLink[];
};

export type NavPanel =
  | {
      kind: "tabs";
      eyebrow: string;
      title: string;
      tabs: NavTab[];
      footer: NavLink;
    }
  | {
      kind: "columns";
      eyebrow: string;
      title: string;
      columns: NavGroup[];
      feature?: {
        title: string;
        body: string;
        href: string;
        linkLabel: string;
      };
    };

export type NavItem = {
  label: string;
  href: string;
  panel?: NavPanel;
};

/**
 * Navigation mirrors the reference site's structure: six product groups,
 * solutions split by format / speciality / role, plus platform, partner,
 * resource and company panels.
 */
export const navigation: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    panel: {
      kind: "tabs",
      eyebrow: "Products",
      title: "Follow one order through Recaho",
      tabs: [
        {
          id: "front-of-house",
          label: "Front of House",
          heading: "Front of house · POS & floor",
          blurb: "Faster billing, happier guests",
          href: "/products/pos",
          links: [
            { label: "POS Billing", href: "/products/pos", description: "Billing, orders and settlement on any device" },
            { label: "Table Reservation", href: "/products/table-reservation", description: "Bookings, walk-ins and the floor plan" },
            { label: "Queue Management", href: "/products/queue-management", description: "Token display and live wait times" },
            { label: "Token Management", href: "/products/token-management", description: "Takeaway handover without confusion" },
            { label: "Self Ordering Kiosk", href: "/products/self-ordering-kiosk", description: "Guests order and pay on their own" },
          ],
        },
        {
          id: "kitchen",
          label: "Kitchen Suite",
          heading: "Kitchen suite · KDS & prep",
          blurb: "Every order to the right station",
          href: "/products/kitchen-display-system",
          links: [
            { label: "Kitchen Display System", href: "/products/kitchen-display-system", description: "Live tickets, stations and prep timers" },
            { label: "KOT Performance", href: "/products/kot-performance-dashboard", description: "Prep time by dish and station" },
            { label: "Recipe Management", href: "/products/recipe-management", description: "Portion costing and plate margins" },
          ],
        },
        {
          id: "back-of-house",
          label: "Back of House",
          heading: "Back of house · stock & costs",
          blurb: "Control stock, purchases and costs",
          href: "/products/inventory-management",
          links: [
            { label: "Inventory Management", href: "/products/inventory-management", description: "Recipe-wise stock in real time" },
            { label: "Purchase Management", href: "/products/purchase-management", description: "Indents, purchase orders and GRNs" },
            { label: "Vendor Management", href: "/products/vendor-management", description: "Supplier rates, ledgers and payables" },
            { label: "Accounting", href: "/products/accounting", description: "Daily sales, shifts and reconciliation" },
          ],
        },
        {
          id: "digital-ordering",
          label: "Digital Ordering",
          heading: "Digital ordering · QR, web & kiosk",
          blurb: "Take orders on every channel",
          href: "/products/online-ordering",
          links: [
            { label: "Online Ordering", href: "/products/online-ordering", description: "Direct and aggregator orders in one queue" },
            { label: "QR Menu & Ordering", href: "/products/qr-menu", description: "A live photo menu at every table" },
            { label: "Self Ordering Kiosk", href: "/products/self-ordering-kiosk", description: "Guest-led ordering and payment" },
          ],
        },
        {
          id: "guest-growth",
          label: "Guests & CRM",
          heading: "Marketing & CRM · grow repeat visits",
          blurb: "Turn first visits into regulars",
          href: "/products/crm",
          links: [
            { label: "CRM & Loyalty", href: "/products/crm", description: "Guest profiles, points and campaigns" },
            { label: "Recaho Mind", href: "/products/recaho-mind", description: "AI answers, campaign and menu insight" },
          ],
        },
        {
          id: "analytics",
          label: "Analytics",
          heading: "Analytics · know your numbers",
          blurb: "Live numbers, from any device",
          href: "/products/recaho-mind",
          links: [
            { label: "Recaho Mind", href: "/products/recaho-mind", description: "Ask your sales data in plain language" },
            { label: "KOT Performance", href: "/products/kot-performance-dashboard", description: "Kitchen speed and delays by station" },
            { label: "Accounting", href: "/products/accounting", description: "Shift-wise sales and settlement" },
          ],
        },
      ],
      footer: { label: "View all 16 products", href: "/products" },
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    panel: {
      kind: "columns",
      eyebrow: "Solutions",
      title: "Find your Recaho fit",
      columns: [
        {
          title: "By format",
          links: [
            { label: "Fine dining", href: "/solutions/fine-dining" },
            { label: "Quick service (QSR)", href: "/solutions/qsr" },
            { label: "Cafés", href: "/solutions/cafe" },
            { label: "Cloud kitchens", href: "/solutions/cloud-kitchen" },
            { label: "Bakeries", href: "/solutions/bakery" },
            { label: "Pubs & breweries", href: "/solutions/pub-brewery" },
            { label: "Food courts", href: "/solutions/food-court" },
            { label: "Food trucks", href: "/solutions/food-truck" },
          ],
        },
        {
          title: "By speciality",
          links: [
            { label: "Sweet shops", href: "/solutions/sweet-shop" },
            { label: "Pizza restaurants", href: "/solutions/pizza-restaurant" },
            { label: "Ice cream parlours", href: "/solutions/ice-cream-parlour" },
            { label: "Multi-outlet chains", href: "/solutions/multi-outlet" },
          ],
        },
        {
          title: "By role",
          links: [
            { label: "Owners", href: "/solutions/multi-outlet" },
            { label: "Outlet managers", href: "/solutions/multi-outlet" },
            { label: "Captains & floor staff", href: "/products/pos" },
            { label: "Kitchen teams", href: "/products/kitchen-display-system" },
            { label: "Accounts & finance", href: "/products/accounting" },
          ],
        },
      ],
      feature: {
        title: "Not sure where you fit?",
        body: "Tell us your format, outlet count and countries. A Recaho specialist maps the modules you actually need.",
        href: "/book-demo",
        linkLabel: "Book a free demo",
      },
    },
  },
  {
    label: "Platform",
    href: "/products",
    panel: {
      kind: "columns",
      eyebrow: "Recaho platform",
      title: "Everything on one live system",
      columns: [
        {
          title: "The platform",
          links: [
            { label: "Platform overview", href: "/products", description: "Every module, one data layer" },
            { label: "How Recaho works", href: "/#how-it-works", description: "One order, start to finish" },
            { label: "Why Recaho", href: "/#why-recaho", description: "What sets the platform apart" },
          ],
        },
        {
          title: "Modules",
          links: [
            { label: "POS & billing", href: "/products/pos" },
            { label: "Kitchen display", href: "/products/kitchen-display-system" },
            { label: "Inventory & recipes", href: "/products/inventory-management" },
            { label: "CRM & loyalty", href: "/products/crm" },
          ],
        },
        {
          title: "Trust & scale",
          links: [
            { label: "Global presence", href: "/#global-presence", description: "18+ countries, 300+ cities" },
            { label: "Security & uptime", href: "/about", description: "AWS-hosted, role-based access" },
            { label: "Support", href: "/contact", description: "Talk to the Recaho team" },
          ],
        },
      ],
      feature: {
        title: "One order, end to end",
        body: "Follow a single order from the QR scan to the sales report and see how each module updates the next.",
        href: "/#how-it-works",
        linkLabel: "See the order flow",
      },
    },
  },
  {
    label: "Partners",
    href: "/contact?topic=partnership",
    panel: {
      kind: "columns",
      eyebrow: "Partner with Recaho",
      title: "Grow with Recaho",
      columns: [
        {
          title: "Work with us",
          links: [
            { label: "Become a partner", href: site.links.partner, description: "Grow Recaho in your region", external: true },
            { label: "Reseller enquiries", href: "/contact?topic=partnership", description: "Sell, set up and support locally" },
            { label: "Integration enquiries", href: "/contact?topic=integration", description: "Connect your platform to Recaho" },
          ],
        },
        {
          title: "Already connected",
          links: [
            { label: "Integrations directory", href: "/integrations", description: "Aggregators, payments, accounting" },
            { label: "Hardware support", href: "/integrations", description: "Printers, terminals and kiosks" },
          ],
        },
      ],
      feature: {
        title: "Bring Recaho to your market",
        body: "Tell us where you operate and how you support restaurants. We will share the partner programme details.",
        href: "/contact?topic=partnership",
        linkLabel: "Start a conversation",
      },
    },
  },
  {
    label: "Resources",
    href: "/#faq",
    panel: {
      kind: "columns",
      eyebrow: "Discover",
      title: "See it, try it, master it",
      columns: [
        {
          title: "Understand the platform",
          links: [
            { label: "How Recaho works", href: "/#how-it-works", description: "One order from order to report" },
            { label: "Customer stories", href: "/#customers", description: "Restaurants running on Recaho" },
            { label: "FAQs", href: "/#faq", description: "POS, stock, AI and integrations" },
          ],
        },
        {
          title: "Learn & get help",
          links: [
            { label: "Blog", href: site.links.blog, description: "Ideas for running a better restaurant", external: true },
            { label: "Newsroom", href: site.links.news, description: "Company announcements", external: true },
            { label: "Contact support", href: "/contact", description: "Talk to the team that installs it" },
          ],
        },
      ],
      feature: {
        title: "Book a free demo",
        body: "A 30-minute walkthrough with a Recaho specialist, mapped to your format and outlets.",
        href: "/book-demo",
        linkLabel: "Pick a time",
      },
    },
  },
  {
    label: "Company",
    href: "/about",
    panel: {
      kind: "columns",
      eyebrow: "Company",
      title: "Built for restaurant teams",
      columns: [
        {
          title: "About Recaho",
          links: [
            { label: "About us", href: "/about", description: "The company and the platform" },
            { label: "Contact", href: "/contact", description: "Sales and support" },
            { label: "Customer stories", href: "/#customers", description: "Where Recaho runs today" },
          ],
        },
        {
          title: "More",
          links: [
            { label: "Careers", href: site.links.careers, external: true },
            { label: "Privacy policy", href: site.links.privacy, external: true },
            { label: "Terms & conditions", href: site.links.terms, external: true },
          ],
        },
      ],
      feature: {
        title: "Talk to our team",
        body: "Sales, demos and installation for new restaurants. Existing customers can reach support directly.",
        href: "/contact",
        linkLabel: "Get in touch",
      },
    },
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: "POS Billing", href: "/products/pos" },
      { label: "Table & Reservations", href: "/products/table-reservation" },
      { label: "Kitchen Display System", href: "/products/kitchen-display-system" },
      { label: "Inventory & Stock", href: "/products/inventory-management" },
      { label: "Recipe Management", href: "/products/recipe-management" },
      { label: "Purchase & Vendors", href: "/products/purchase-management" },
      { label: "Self Ordering Kiosk", href: "/products/self-ordering-kiosk" },
      { label: "QR Menu & Ordering", href: "/products/qr-menu" },
      { label: "Online Ordering", href: "/products/online-ordering" },
      { label: "CRM & Loyalty", href: "/products/crm" },
      { label: "Recaho Mind", href: "/products/recaho-mind" },
      { label: "Accounting", href: "/products/accounting" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Quick service (QSR)", href: "/solutions/qsr" },
      { label: "Fine dining", href: "/solutions/fine-dining" },
      { label: "Cafés", href: "/solutions/cafe" },
      { label: "Cloud kitchens", href: "/solutions/cloud-kitchen" },
      { label: "Bakeries", href: "/solutions/bakery" },
      { label: "Pubs & breweries", href: "/solutions/pub-brewery" },
      { label: "Food courts", href: "/solutions/food-court" },
      { label: "Food trucks", href: "/solutions/food-truck" },
      { label: "Sweet shops", href: "/solutions/sweet-shop" },
      { label: "Pizza restaurants", href: "/solutions/pizza-restaurant" },
      { label: "Ice cream parlours", href: "/solutions/ice-cream-parlour" },
      { label: "Multi-outlet chains", href: "/solutions/multi-outlet" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "All products", href: "/products" },
      { label: "Integrations", href: "/integrations" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Why Recaho", href: "/#why-recaho" },
      { label: "Global presence", href: "/#global-presence" },
      { label: "Customer stories", href: "/#customers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Recaho", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/book-demo" },
      { label: "Careers", href: site.links.careers, external: true },
      { label: "Become a partner", href: site.links.partner, external: true },
      { label: "Newsroom", href: site.links.news, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/#faq" },
      { label: "Blog", href: site.links.blog, external: true },
      { label: "Product catalogue", href: "/products" },
      { label: "Help & support", href: "/contact" },
      { label: "Privacy policy", href: site.links.privacy, external: true },
      { label: "Terms & conditions", href: site.links.terms, external: true },
    ],
  },
];
