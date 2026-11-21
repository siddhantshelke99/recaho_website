export type Solution = {
  slug: string;
  name: string;
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  icon: string;
  intro: string;
  challenges: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  modules: string[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
};

export const solutions: Solution[] = [
  {
    slug: "fine-dining",
    name: "Fine Dining",
    h1: "Restaurant software for fine dining service",
    tagline:
      "Course-wise kitchen timing, table-level control and guest history that lets your floor team deliver the experience the menu promises.",
    metaTitle: "Fine Dining Restaurant POS & Management Software",
    metaDescription:
      "Recaho supports fine dining restaurants with course-wise KOT sequencing, table and cover management, guest history, reservations and precise billing.",
    keywords: ["fine dining restaurant software", "fine dining POS", "fine dining restaurant management"],
    icon: "utensils",
    intro:
      "Fine dining runs on timing and detail. A course that reaches the pass early, a guest whose preferences were forgotten, or a bill that takes ten minutes to produce all undo the work the kitchen and floor put into the evening. Recaho is configured to protect those details.",
    challenges: [
      { title: "Course timing has to be exact", description: "Starters, mains and desserts need separate fire times so nothing arrives early or late." },
      { title: "Every guest expects to be recognised", description: "Allergies, preferences and previous visits should be visible to the floor team, not remembered by one person." },
      { title: "Bills should never slow the goodbye", description: "Split bills, multiple payment modes and fast settlement matter at the end of a high-value meal." },
    ],
    approach: [
      { title: "Course-wise KOT sequencing", description: "Fire courses independently and hold others until the pass is ready, with each station receiving its own ticket." },
      { title: "Guest profiles on the floor", description: "Capture preferences and visit history so a returning guest is greeted with context, and loyalty applies automatically." },
      { title: "Table and reservation control", description: "Manage bookings, walk-ins and table status alongside the live order, so seating and service stay coordinated." },
    ],
    modules: ["pos", "kitchen-display-system", "table-reservation", "crm"],
    outcomes: [
      "Course timing managed at the pass, not in memory",
      "Guest preferences available before the order is taken",
      "Split and multi-mode settlement without delay",
      "Prep-time visibility by dish and station",
    ],
    faqs: [
      { question: "Can Recaho sequence courses separately?", answer: "Yes. KOTs can be fired course-wise so the kitchen prepares each course at the right moment rather than all at once." },
      { question: "Does it handle reservations and walk-ins together?", answer: "Yes. Bookings from partners and direct reservations sit alongside walk-ins on the same floor plan." },
      { question: "Can we track guest preferences?", answer: "Guest profiles hold visit history and notes, and loyalty points apply automatically when the guest is identified at billing." },
    ],
    ctaHeading: "See Recaho in a fine dining setting",
  },
  {
    slug: "cafe",
    name: "Cafés",
    h1: "Café POS and management software",
    tagline:
      "Fast tabs, quick modifiers and a QR menu that keeps the morning rush moving without adding staff to the counter.",
    metaTitle: "Café POS & Management Software",
    metaDescription:
      "Recaho café software speeds up counter service with quick tabs, modifiers, QR ordering, loyalty and inventory that updates with every coffee sold.",
    keywords: ["cafe POS software", "cafe management software", "coffee shop POS", "cafe billing software"],
    icon: "chefHat",
    intro:
      "A café lives on table turns and small transactions. The difference between a good morning and a bad one is often a few seconds per order, and a menu that staff can ring up without hunting for a modifier.",
    challenges: [
      { title: "Small tickets, high volume", description: "Hundreds of low-value orders make slow billing and manual entry disproportionately expensive." },
      { title: "Modifiers everywhere", description: "Milk alternatives, syrups, sizes and add-ons make a short menu surprisingly complex to bill." },
      { title: "Regulars expect recognition", description: "Without guest data, a loyalty programme is just a stamp card nobody remembers to bring." },
    ],
    approach: [
      { title: "One-tap menu with modifiers", description: "Structure the menu around your most-ordered items and attach modifiers that bill correctly every time." },
      { title: "QR and counter together", description: "Guests can order from the table while the counter keeps serving walk-ins, all in one queue." },
      { title: "Loyalty attached to the bill", description: "Capture guest details at billing so points, wallet balance and repeat-visit offers build automatically." },
    ],
    modules: ["pos", "qr-menu", "crm", "inventory-management"],
    outcomes: [
      "Shorter queues at peak morning and evening service",
      "Consistent billing for complex drink modifiers",
      "Guest data that supports repeat visits",
      "Stock that reflects real consumption, including wastage",
    ],
    faqs: [
      { question: "Can café staff bill customised drinks quickly?", answer: "Yes. Modifiers and combos can be configured as part of the item so a customised drink is two taps, not a note typed into a free-text field." },
      { question: "Does the QR menu work for cafés?", answer: "Yes. Guests can browse a photo menu, order and pay from the table, with the order arriving at the counter queue." },
      { question: "Can we run a loyalty programme without extra hardware?", answer: "Loyalty is part of Recaho CRM and is applied at billing using the guest's mobile number, so no separate card system is needed." },
    ],
    ctaHeading: "See how Recaho fits a café",
  },
  {
    slug: "qsr",
    name: "Quick Service Restaurants",
    h1: "QSR billing software built for speed",
    tagline:
      "Counter orders billed in seconds, kitchen tickets that print immediately, and a kiosk that absorbs the queue when the rush hits.",
    metaTitle: "QSR Restaurant POS & Billing Software",
    metaDescription:
      "Recaho QSR software delivers fast counter billing, kiosk ordering, token and queue displays, combo management and kitchen displays for high-volume service.",
    keywords: ["QSR POS software", "quick service restaurant software", "QSR billing software", "fast food POS"],
    icon: "zap",
    intro:
      "In quick service, throughput is the business model. Every extra tap at the counter and every misheard modifier costs a place in the queue, and the peak hour decides the day's numbers.",
    challenges: [
      { title: "The counter is the bottleneck", description: "One till and one staff member cannot absorb a lunch rush without queues forming outside." },
      { title: "Orders must be handed over clearly", description: "Takeaway service breaks down when guests and staff cannot agree on which order is ready." },
      { title: "Combos drive revenue and confusion", description: "Meal deals, upsizes and add-ons are easy to sell and easy to bill incorrectly." },
    ],
    approach: [
      { title: "Speed-first billing", description: "A structured menu, quick keys and combo logic let staff bill the most common orders in a few taps." },
      { title: "Kiosk and queue displays", description: "Let guests order and pay unaided, then watch a screen for their token instead of crowding the counter." },
      { title: "Kitchen tickets without delay", description: "KOTs fire to the right station immediately, and the KDS shows what is next in line." },
    ],
    modules: ["pos", "self-ordering-kiosk", "queue-management", "token-management", "kitchen-display-system"],
    outcomes: [
      "More orders per hour from the same counter space",
      "Higher basket value through structured upsells",
      "Fewer order errors at handover",
      "Clear kitchen view of what is next",
    ],
    faqs: [
      { question: "Can Recaho handle combo meals?", answer: "Yes. Combos, upsizes and add-ons are configured as menu structures so they price and deduct correctly." },
      { question: "Do we need kiosks to use Recaho?", answer: "No. Kiosks are optional. Recaho works as a counter POS on its own and can add kiosks later." },
      { question: "How do guests know when food is ready?", answer: "Token and queue displays show which order is ready to collect, and staff advance the queue at handover." },
    ],
    ctaHeading: "See Recaho handle a QSR rush",
  },
  {
    slug: "pub-brewery",
    name: "Pubs & Breweries",
    h1: "Bar and restaurant POS for pubs and breweries",
    tagline:
      "Open tabs, timed pricing and fast last-call billing for venues where the pace changes hour by hour.",
    metaTitle: "Pub, Bar & Brewery POS Software",
    metaDescription:
      "Recaho supports pubs and breweries with tab management, happy-hour pricing, table and bar orders, stock control for kegs and ingredients, and fast settlement.",
    keywords: ["bar POS software", "pub POS", "brewery POS", "bar restaurant management software"],
    icon: "receipt",
    intro:
      "A pub's service model changes through the evening: quiet tables become a busy bar, tabs stay open across rounds, and pricing can shift by time window. The POS has to follow all of it without slowing the team down.",
    challenges: [
      { title: "Tabs run across rounds", description: "Guests open a tab and add to it repeatedly, making a simple bill structure inadequate." },
      { title: "Pricing changes by time", description: "Happy hours and event pricing need to apply automatically and revert on schedule." },
      { title: "Stock and shrinkage", description: "Spirits, kegs and garnishes are hard to count, and wastage disappears without a record." },
    ],
    approach: [
      { title: "Tabs and table orders", description: "Open a tab, add rounds, move it between tables and settle once at the end." },
      { title: "Time-based pricing", description: "Configure happy-hour windows so the correct price applies without staff intervention." },
      { title: "Bar-aware inventory", description: "Track bottles, kegs and ingredients with recipes for cocktails and measured pours." },
    ],
    modules: ["pos", "inventory-management", "recipe-management", "crm"],
    outcomes: [
      "Tabs that stay accurate across a full evening",
      "Automatic pricing windows instead of manual overrides",
      "Ingredient and pour-level stock visibility",
      "Guest recognition for regulars and events",
    ],
    faqs: [
      { question: "Can Recaho manage open tabs?", answer: "Yes. Tabs can be opened against a table or guest, added to across rounds, and settled in one transaction." },
      { question: "Does it support happy-hour pricing?", answer: "Time-based price rules can be configured so a discounted price applies during defined windows and reverts automatically." },
      { question: "Can cocktails deduct stock by recipe?", answer: "Yes. Cocktail and mixed-drink recipes can consume measured quantities of each ingredient." },
    ],
    ctaHeading: "See Recaho behind the bar",
  },
  {
    slug: "cloud-kitchen",
    name: "Cloud Kitchens",
    h1: "Cloud kitchen software for multi-brand operations",
    tagline:
      "Route every aggregator order to the right brand and station, keep menus synced, and run several virtual brands from one kitchen.",
    metaTitle: "Cloud Kitchen Management Software",
    metaDescription:
      "Recaho cloud kitchen software brings aggregator orders into one queue, manages multi-brand menus and kitchen routing, and tracks stock and profitability per brand.",
    keywords: ["cloud kitchen software", "cloud kitchen POS", "multi brand kitchen software", "aggregator order management"],
    icon: "cloud",
    intro:
      "A cloud kitchen is several restaurants sharing one set of equipment and one team. Success depends on separating brands clearly in the customer's eyes while consolidating operations behind the pass.",
    challenges: [
      { title: "One kitchen, many identities", description: "Orders from different brands and platforms must reach the right packing station without mix-ups." },
      { title: "Menus change constantly", description: "Prices and availability differ per platform, and stale menus cause cancelled orders." },
      { title: "Costs are shared", description: "Without brand-level costing, it is impossible to know which virtual brand actually earns money." },
    ],
    approach: [
      { title: "Unified order queue", description: "Aggregator and direct orders land in one screen, tagged by brand and platform, so nothing is missed." },
      { title: "Brand-level menu control", description: "Maintain separate menus and pricing per brand while managing them centrally." },
      { title: "Costing per brand", description: "Recipes and stock usage connect to brand-level sales so contribution is visible." },
    ],
    modules: ["online-ordering", "pos", "inventory-management", "recipe-management"],
    outcomes: [
      "Every platform order in one queue",
      "Brand-tagged tickets that packing staff can follow",
      "Menu and availability changes without per-platform work",
      "Profitability visible per virtual brand",
    ],
    faqs: [
      { question: "Can one Recaho account run multiple brands?", answer: "Yes. Brands can be configured separately with their own menus, pricing and reporting while sharing kitchen operations." },
      { question: "Does Recaho replace aggregator tablets?", answer: "Recaho can receive connected aggregator orders directly into the POS queue, reducing the need for separate tablets. Confirm the supported platforms for your region." },
      { question: "Can I see profitability by brand?", answer: "Sales are reported by brand and channel, and recipe-based costing connects those sales to ingredient cost." },
    ],
    ctaHeading: "Run every brand from one kitchen",
  },
  {
    slug: "bakery",
    name: "Bakeries",
    h1: "Bakery billing software for weight, boxes and batches",
    tagline:
      "Bill by weight or piece, handle combo boxes and custom cakes, and track production batches against what actually sold.",
    metaTitle: "Bakery POS & Management Software",
    metaDescription:
      "Recaho bakery software supports weight-based billing, combo boxes, custom cake orders, batch production, wastage tracking and counter service.",
    keywords: ["bakery POS software", "bakery billing software", "bakery management software", "cake shop POS"],
    icon: "package",
    intro:
      "Bakeries sell in grams, pieces and boxes, often from the same counter. Add custom cake orders and daily production batches, and a standard restaurant POS stops being enough.",
    challenges: [
      { title: "Weight and piece pricing together", description: "A counter system must handle per-kg items, per-piece items and combination boxes in one bill." },
      { title: "Daily production, daily wastage", description: "Baked goods have a short shelf life, so production and wastage need to be recorded the same day." },
      { title: "Custom orders need a paper trail", description: "Advance cake orders involve deposits, pickup dates and decoration instructions." },
    ],
    approach: [
      { title: "Flexible unit pricing", description: "Configure items by weight, piece or box so the bill matches how the product is actually sold." },
      { title: "Production and wastage records", description: "Record batches and end-of-day wastage to understand real yield and loss." },
      { title: "Advance orders", description: "Capture custom orders with deposits, pickup dates and notes attached to the customer." },
    ],
    modules: ["pos", "inventory-management", "recipe-management", "crm"],
    outcomes: [
      "Accurate billing for weight-based and combo items",
      "Batch and wastage visibility by product",
      "Advance order tracking with deposits",
      "Customer history for repeat celebration orders",
    ],
    faqs: [
      { question: "Can Recaho bill items by weight?", answer: "Yes. Items can be configured to price by weight, and the bill reflects the measured quantity." },
      { question: "Does it support custom cake orders?", answer: "Advance orders with deposits, pickup dates and customisation notes can be recorded against the customer." },
      { question: "Can we track daily production and wastage?", answer: "Yes. Production batches and wastage can be recorded so yield and loss are visible alongside sales." },
    ],
    ctaHeading: "See Recaho at the bakery counter",
  },
  {
    slug: "sweet-shop",
    name: "Sweet Shops",
    h1: "Sweet shop billing software for festival demand",
    tagline:
      "Handle weight-based counter sales, bulk packing and advance pre-orders without losing track during the busiest season of the year.",
    metaTitle: "Sweet Shop POS & Billing Software",
    metaDescription:
      "Recaho sweet shop software manages weight-based billing, bulk and gift packing, advance pre-orders, festive demand and customer ledgers.",
    keywords: ["sweet shop billing software", "sweet shop POS", "mithai shop software", "festival pre-order software"],
    icon: "gift",
    intro:
      "Sweet shops have two businesses: everyday counter sales and seasonal surges where a single order can be hundreds of boxes. Both need accurate billing and a reliable record of what has been promised to whom.",
    challenges: [
      { title: "Demand arrives in waves", description: "Festival weeks multiply order volume, and a system that works in a quiet week can fail under load." },
      { title: "Bulk orders and advance payments", description: "Corporate and festive orders involve deposits, pickup dates and packing instructions." },
      { title: "Weight-based, high-variety counters", description: "Dozens of items priced per kilogram make manual billing slow and error-prone." },
    ],
    approach: [
      { title: "Fast weight-based billing", description: "Configure items by weight with quick selection so counter service stays quick during peaks." },
      { title: "Bulk and gift packing", description: "Support box and hamper combinations with the packing details recorded on the order." },
      { title: "Pre-orders with deposits", description: "Record advance orders, deposits and pickup schedules against the customer's profile." },
    ],
    modules: ["pos", "inventory-management", "crm", "accounting"],
    outcomes: [
      "Counter billing that holds up during festival peaks",
      "Clear records for bulk and gift orders",
      "Advance payments tracked against orders",
      "Customer history that supports repeat festive business",
    ],
    faqs: [
      { question: "Can Recaho handle bulk sweet box orders?", answer: "Yes. Orders can include multiple box combinations and packing instructions, with deposits recorded against the order." },
      { question: "Does the system slow down during peak season?", answer: "Recaho is a cloud platform used across high-volume restaurant operations. Your implementation is scoped for expected peak volumes during onboarding." },
      { question: "Can we track advance orders and pickup dates?", answer: "Yes. Pre-orders carry customer details, deposit, pickup date and any special instructions." },
    ],
    ctaHeading: "Prepare for your next festive season",
  },
  {
    slug: "pizza-restaurant",
    name: "Pizza Restaurants",
    h1: "Pizza restaurant POS with topping-level control",
    tagline:
      "Half-and-half pizzas, extra toppings and size-based pricing billed correctly, with kitchen routing that tells the oven exactly what to make.",
    metaTitle: "Pizza Restaurant POS & Management Software",
    metaDescription:
      "Recaho pizza POS handles half-and-half pizzas, topping pricing, size variants, combos, delivery orders and kitchen routing for pizza restaurants.",
    keywords: ["pizza restaurant POS", "pizza POS software", "pizza billing software", "pizza shop management"],
    icon: "cart",
    intro:
      "Pizza menus look simple and bill badly. Toppings, sizes, crusts and half-and-half combinations create hundreds of valid configurations, and each one has to reach the oven with the right instructions and deduct the right ingredients.",
    challenges: [
      { title: "Configuration complexity", description: "Sizes, crusts and toppings multiply into combinations that are easy to mis-bill." },
      { title: "Half-and-half orders", description: "Two topping sets on one pizza need clear kitchen instructions and accurate ingredient deduction." },
      { title: "Delivery-heavy demand", description: "Aggregator and direct orders arrive together and must be sequenced by oven capacity." },
    ],
    approach: [
      { title: "Topping-level menu structure", description: "Configure sizes, crusts and toppings so every combination prices and deducts correctly." },
      { title: "Clear kitchen tickets", description: "KOTs show half-and-half instructions so the oven team builds the pizza as ordered." },
      { title: "Delivery in one queue", description: "Aggregator and direct delivery orders appear together, tagged and routed to the pizza station." },
    ],
    modules: ["pos", "online-ordering", "kitchen-display-system", "inventory-management"],
    outcomes: [
      "Correct pricing for every topping combination",
      "Kitchen tickets that are unambiguous",
      "Ingredient deduction per pizza configuration",
      "One queue for direct and aggregator delivery",
    ],
    faqs: [
      { question: "Can Recaho handle half-and-half pizzas?", answer: "Yes. Toppings can be assigned per half, and the kitchen ticket shows the split so the pizza is built correctly." },
      { question: "Do toppings deduct stock?", answer: "Yes. Toppings linked to stock items are consumed according to the pizza's configuration and recipe." },
      { question: "Can we manage delivery and dine-in together?", answer: "Yes. Both channels share one order queue with clear order-type tagging." },
    ],
    ctaHeading: "See Recaho on a pizza line",
  },
  {
    slug: "ice-cream-parlour",
    name: "Ice Cream Parlours",
    h1: "Ice cream parlour POS for scoops and combos",
    tagline:
      "Scoop-level pricing, toppings and combo deals billed accurately, with stock that follows flavours and seasonal demand.",
    metaTitle: "Ice Cream Parlour POS & Billing Software",
    metaDescription:
      "Recaho ice cream parlour POS handles scoop-level pricing, flavours, toppings, combos, seasonal menus and ingredient stock across counters.",
    keywords: ["ice cream parlour POS", "ice cream shop software", "gelato POS", "ice cream billing software"],
    icon: "sparkles",
    intro:
      "An ice cream counter is a high-variety, low-ticket business. Flavours rotate, toppings change the price, and families order combinations that are hard to describe and easy to bill incorrectly.",
    challenges: [
      { title: "Many combinations, small tickets", description: "Scoops, cones, cups, toppings and sundaes produce a wide configuration space." },
      { title: "Rotating seasonal flavours", description: "Availability changes frequently, and an out-of-stock flavour must disappear from the menu quickly." },
      { title: "Ingredient-level stock", description: "Flavours and toppings consume base ingredients that need tracking across counters." },
    ],
    approach: [
      { title: "Scoop and topping pricing", description: "Price by scoop, size and topping so any combination bills correctly in a few taps." },
      { title: "Menu availability in real time", description: "Mark a flavour unavailable and it disappears from QR menus and the counter immediately." },
      { title: "Recipe-based consumption", description: "Base mixes and toppings deduct through recipes so stock follows actual sales." },
    ],
    modules: ["pos", "qr-menu", "inventory-management", "crm"],
    outcomes: [
      "Consistent pricing across scoop and topping combinations",
      "Menu that reflects real availability",
      "Stock visibility for flavours and bases",
      "Guest data for family and repeat customers",
    ],
    faqs: [
      { question: "Can Recaho price by scoop and size?", answer: "Yes. Items can be configured with scoop, size and topping options that each carry their own price." },
      { question: "Does it handle seasonal menu changes?", answer: "Flavours and items can be enabled or disabled at any time, and the change applies to connected menus immediately." },
      { question: "Can we run a loyalty programme for regulars?", answer: "Yes. Recaho CRM applies points and wallet balances at billing using the guest's mobile number." },
    ],
    ctaHeading: "See Recaho at the scoop counter",
  },
  {
    slug: "food-court",
    name: "Food Courts",
    h1: "Food court POS for multi-vendor operations",
    tagline:
      "Several stalls, one billing point, and sales split correctly back to every vendor — without manual reconciliation at closing.",
    metaTitle: "Food Court POS & Billing Software",
    metaDescription:
      "Recaho food court POS supports multi-vendor billing, stall-level menus, shared counters, sales splits and consolidated reporting across vendors.",
    keywords: ["food court POS", "multi vendor billing software", "food court management software", "stall billing"],
    icon: "store",
    intro:
      "A food court is a shared service layer over several independent businesses. The moment orders from different stalls are billed at one counter, settlement and reporting become the hardest part of the operation.",
    challenges: [
      { title: "One counter, many vendors", description: "Orders from different stalls must be billed together while revenue is attributed separately." },
      { title: "Separate menus and prices", description: "Each vendor controls its menu, but the counter needs a single coherent ordering experience." },
      { title: "End-of-day reconciliation", description: "Splitting sales, taxes and commissions manually invites disputes." },
    ],
    approach: [
      { title: "Vendor-aware billing", description: "Orders are tagged to their stall so a combined bill still records revenue correctly." },
      { title: "Stall-level menu control", description: "Each vendor maintains its menu and availability within the shared ordering flow." },
      { title: "Automated sales splits", description: "Reports attribute sales, taxes and settlements per vendor without manual calculation." },
    ],
    modules: ["pos", "self-ordering-kiosk", "token-management", "accounting"],
    outcomes: [
      "Accurate vendor-level revenue from shared counters",
      "Menus controlled per stall within one experience",
      "Token-based handover across multiple kitchens",
      "Reconciliation that does not rely on spreadsheets",
    ],
    faqs: [
      { question: "Can multiple vendors use one Recaho setup?", answer: "Yes. Vendors can be configured within the food court setup so orders, menus and reporting stay attributed to the right business." },
      { question: "How are tokens handled across stalls?", answer: "Tokens can be issued per order and routed to the relevant stall kitchen, with a shared display for collection." },
      { question: "Can vendors see only their own sales?", answer: "Access can be role-based so each vendor sees their own reporting while management sees the consolidated view." },
    ],
    ctaHeading: "See Recaho run a shared counter",
  },
  {
    slug: "food-truck",
    name: "Food Trucks",
    h1: "Food truck POS that works where the signal does not",
    tagline:
      "Mobile-first billing, offline resilience and a menu you can update between locations — with reports waiting when you reconnect.",
    metaTitle: "Food Truck POS Software",
    metaDescription:
      "Recaho food truck POS is mobile-first with offline billing, quick menu updates, QR ordering and automatic sync when the connection returns.",
    keywords: ["food truck POS", "mobile POS for food truck", "offline POS", "food truck billing"],
    icon: "truck",
    intro:
      "A food truck's best locations are often its worst connections. Markets, festivals and street corners rarely offer reliable internet, so the POS has to keep selling and settle up later.",
    challenges: [
      { title: "Unreliable connectivity", description: "Billing cannot depend on a stable connection when trading at events and outdoor locations." },
      { title: "Small footprint, full menu", description: "The team needs a compact interface that still handles modifiers and combos quickly." },
      { title: "Changing locations and menus", description: "Menu availability changes with location and stock, and must be updatable from the truck." },
    ],
    approach: [
      { title: "Offline-first billing", description: "Orders and payments are captured locally and synced when the connection returns." },
      { title: "Compact, fast interface", description: "A menu built for quick service keeps the line moving in a small service window." },
      { title: "Menu control on the move", description: "Update availability and pricing from the truck without returning to a back office." },
    ],
    modules: ["pos", "qr-menu", "online-ordering", "inventory-management"],
    outcomes: [
      "Billing that continues without internet",
      "Fast service from a compact setup",
      "Menu updates from any location",
      "Sales and stock reconciled after sync",
    ],
    faqs: [
      { question: "Does Recaho work without internet on a food truck?", answer: "Yes. Offline billing captures orders and payments locally, then syncs when connectivity returns. Confirm the offline behaviour for your device during onboarding." },
      { question: "What hardware does a food truck need?", answer: "A tablet or compact POS terminal with a printer is typically sufficient. Recaho supports common Android and Windows hardware." },
      { question: "Can we take pre-orders for events?", answer: "Online ordering and QR menus can be used ahead of an event, with orders appearing in the same queue." },
    ],
    ctaHeading: "See Recaho on the move",
  },
  {
    slug: "multi-outlet",
    name: "Multi-Outlet Chains",
    h1: "Multi-outlet restaurant management, centrally controlled",
    tagline:
      "One menu, one price list and one reporting view across every location, with local teams still able to run their own service.",
    metaTitle: "Multi-Outlet Restaurant Management Software",
    metaDescription:
      "Recaho multi-outlet restaurant software centralises menus, pricing, inventory and reporting across locations while outlet teams manage daily service.",
    keywords: ["multi outlet restaurant software", "restaurant chain management software", "central kitchen software", "multi outlet POS"],
    icon: "building",
    intro:
      "Growth turns a restaurant business into a data problem. Every new outlet adds a menu to keep consistent, a stock ledger to reconcile and a set of numbers that head office needs to see in the same format as every other location.",
    challenges: [
      { title: "Consistency across locations", description: "Menu changes, pricing and promotions have to reach every outlet without a separate rollout each time." },
      { title: "Fragmented reporting", description: "Outlet-level systems produce reports that cannot be compared without manual consolidation." },
      { title: "Supply chain complexity", description: "Central kitchens and warehouses supply outlets, and transfers are hard to reconcile on paper." },
    ],
    approach: [
      { title: "Central menu and pricing", description: "Publish menu, price and promotion changes from head office and apply them across outlets." },
      { title: "Consolidated reporting", description: "Compare outlets on sales, channel mix, stock and kitchen performance in one view." },
      { title: "Central kitchen and warehouse", description: "Track production and dispatch to outlets with transfer records that update outlet stock." },
    ],
    modules: ["pos", "inventory-management", "accounting", "recaho-mind", "purchase-management"],
    outcomes: [
      "One menu and price list across every outlet",
      "Comparable reporting without manual consolidation",
      "Central kitchen and warehouse visibility",
      "Scoped access for outlet teams and head office",
    ],
    faqs: [
      { question: "How many outlets can Recaho support?", answer: "Recaho is described by the company as scaling from a single outlet to large chains. The implementation is scoped per business; discuss your outlet count and countries during the demo." },
      { question: "Can outlet managers have restricted access?", answer: "Yes. Role-based permissions let outlet teams manage their own service while head office retains consolidated visibility." },
      { question: "Can menus be standardised but locally adjusted?", answer: "Yes. Central menus can be published across outlets with permitted local variations where the business allows it." },
      { question: "Does it handle multiple currencies and tax regimes?", answer: "Recaho supports country-specific tax and compliance configuration, including GST, ZATCA and MRA requirements." },
    ],
    ctaHeading: "See Recaho across your outlets",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
