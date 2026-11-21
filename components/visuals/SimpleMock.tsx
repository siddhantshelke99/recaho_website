import { AppWindow } from "./AppWindow";
import type { ProductVisual as VisualKey } from "@/data/products";
import { DashboardMock } from "./DashboardMock";
import { PosMock } from "./PosMock";
import { KdsMock } from "./KdsMock";
import { InventoryMock } from "./InventoryMock";
import { CrmMock } from "./CrmMock";
import { MindMock } from "./MindMock";
import { QrMock } from "./QrMock";

type MockRow = {
  cells: string[];
  status?: { label: string; tone: "success" | "warning" | "brand" | "muted" };
};

type Config = {
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  columns: string[];
  rows: MockRow[];
  footer?: { label: string; value: string };
  bars?: { label: string; value: string; percent: number }[];
  tone?: "light" | "dark";
};

const toneClass: Record<string, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  brand: "bg-brand/10 text-brand",
  muted: "bg-sand-200 text-muted",
};

function SimpleMock({ config, className }: { config: Config; className?: string }) {
  const cols = config.columns.map(() => "1fr").join(" ");
  const gridTemplate = config.columns.length === 4 ? "1.5fr 0.9fr 1fr 0.8fr" : cols;

  return (
    <AppWindow title={config.title} subtitle={config.subtitle} className={className} tone={config.tone ?? "light"}>
      <div className="grid grid-cols-3 gap-1.5">
        {config.stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-line bg-sand/40 p-2">
            <p className="text-[0.46rem] font-medium uppercase tracking-[0.05em] text-muted">{stat.label}</p>
            <p className="mt-0.5 font-display text-[0.78rem] font-bold leading-tight text-ink">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 overflow-hidden rounded-lg border border-line">
        <div
          className="grid gap-1 border-b border-line bg-sand/60 px-2 py-1.5 text-[0.44rem] font-semibold uppercase tracking-[0.05em] text-muted"
          style={{ gridTemplateColumns: gridTemplate }}
        >
          {config.columns.map((column) => (
            <span key={column} className="truncate">
              {column}
            </span>
          ))}
        </div>
        {config.rows.map((row, index) => (
          <div
            key={index}
            className="grid items-center gap-1 border-b border-line/70 px-2 py-1.5 last:border-0"
            style={{ gridTemplateColumns: gridTemplate }}
          >
            {row.cells.map((cell, cellIndex) => (
              <span
                key={cellIndex}
                className={
                  "truncate " +
                  (cellIndex === 0 ? "text-[0.52rem] font-medium text-ink" : "text-[0.48rem] text-muted")
                }
              >
                {cell}
              </span>
            ))}
            {row.status && config.columns.length > row.cells.length ? (
              <span
                className={`w-fit rounded-full px-1.5 py-0.5 text-[0.42rem] font-semibold ${toneClass[row.status.tone]}`}
              >
                {row.status.label}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      {config.bars ? (
        <div className="mt-2 space-y-1">
          {config.bars.map((bar) => (
            <div key={bar.label}>
              <div className="flex justify-between text-[0.46rem]">
                <span className="text-muted">{bar.label}</span>
                <span className="font-semibold text-ink">{bar.value}</span>
              </div>
              <div className="mt-0.5 h-1 rounded-full bg-sand-300">
                <div className="h-1 rounded-full bg-brand" style={{ width: `${bar.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {config.footer ? (
        <div className="mt-2 flex items-center justify-between rounded-lg bg-ink px-2.5 py-1.5">
          <span className="text-[0.46rem] text-white/55">{config.footer.label}</span>
          <span className="text-[0.5rem] font-semibold text-white">{config.footer.value}</span>
        </div>
      ) : null}
    </AppWindow>
  );
}

const configs: Partial<Record<VisualKey, Config>> = {
  recipe: {
    title: "Recaho Recipes · Butter Chicken",
    subtitle: "Plate costing · Linked to stock",
    stats: [
      { label: "Plate cost", value: "$3.42" },
      { label: "Selling price", value: "$14.50" },
      { label: "Margin", value: "76.4%" },
    ],
    columns: ["Ingredient", "Qty", "Cost"],
    rows: [
      { cells: ["Chicken", "0.180 kg", "$1.62"] },
      { cells: ["Tomato base", "0.120 L", "$0.48"] },
      { cells: ["Cream", "0.040 L", "$0.36"] },
      { cells: ["Butter", "0.020 kg", "$0.22"] },
    ],
    footer: { label: "Last rate update", value: "Dairy +4.2% · 2 days ago" },
  },
  purchase: {
    title: "Recaho Purchase · Indent to PO",
    subtitle: "Approvals · Supplier rates",
    stats: [
      { label: "Open POs", value: "12" },
      { label: "Pending GRN", value: "4" },
      { label: "Month spend", value: "$28,410" },
    ],
    columns: ["Indent", "Vendor", "Value", "Status"],
    rows: [
      { cells: ["IND-2214", "Fresh Farms", "$1,240"], status: { label: "Approved", tone: "success" } },
      { cells: ["IND-2215", "Dairy Line", "$860"], status: { label: "Pending", tone: "warning" } },
      { cells: ["IND-2216", "Coastal Foods", "$2,190"], status: { label: "Ordered", tone: "brand" } },
      { cells: ["IND-2217", "Fresh Farms", "$740"], status: { label: "Received", tone: "success" } },
    ],
    footer: { label: "Best rate for Chicken", value: "Fresh Farms · $4.10/kg" },
  },
  vendor: {
    title: "Recaho Vendors · Supplier ledger",
    subtitle: "Rates · Payables · History",
    stats: [
      { label: "Active vendors", value: "34" },
      { label: "Payables", value: "$12,680" },
      { label: "Due this week", value: "$3,240" },
    ],
    columns: ["Vendor", "Category", "Balance"],
    rows: [
      { cells: ["Fresh Farms", "Produce", "$2,140"] },
      { cells: ["Dairy Line", "Dairy", "$1,860"] },
      { cells: ["Coastal Foods", "Seafood", "$3,420"] },
      { cells: ["Bake House", "Bakery", "$960"] },
    ],
    bars: [{ label: "On-time deliveries", value: "94%", percent: 94 }],
  },
  online: {
    title: "Recaho Online Orders · All channels",
    subtitle: "Direct · Aggregators · Pickup",
    stats: [
      { label: "Today", value: "186" },
      { label: "Avg. accept", value: "9s" },
      { label: "Menu sync", value: "Live" },
    ],
    columns: ["Order", "Channel", "Value", "Status"],
    rows: [
      { cells: ["#6190-0166", "Direct web", "$34.20"], status: { label: "Preparing", tone: "warning" } },
      { cells: ["#4412-9081", "Aggregator", "$18.60"], status: { label: "Accepted", tone: "brand" } },
      { cells: ["#6190-0171", "Pickup", "$12.40"], status: { label: "Ready", tone: "success" } },
      { cells: ["#4412-9084", "Aggregator", "$27.90"], status: { label: "Accepted", tone: "brand" } },
    ],
    footer: { label: "One queue for every platform", value: "0 tablets needed" },
  },
  accounting: {
    title: "Recaho Accounts · Daily closing",
    subtitle: "Shift reconciliation · Expenses",
    stats: [
      { label: "Sales today", value: "$8,412" },
      { label: "Collected", value: "$8,380" },
      { label: "Variance", value: "−$32" },
    ],
    columns: ["Shift", "Cashier", "Expected", "Counted"],
    rows: [
      { cells: ["Morning", "Priya", "$2,140", "$2,140"] },
      { cells: ["Evening", "Rahul", "$3,280", "$3,260"] },
      { cells: ["Night", "Imran", "$2,960", "$2,948"] },
    ],
    footer: { label: "Accounting sync", value: "Tally · Last synced 23:45" },
  },
  kiosk: {
    title: "Recaho Kiosk · Counter 2",
    subtitle: "Self-service ordering",
    stats: [
      { label: "Orders today", value: "142" },
      { label: "Avg. basket", value: "$16.80" },
      { label: "Upsell rate", value: "38%" },
    ],
    columns: ["Item", "Add-ons", "Total", "State"],
    rows: [
      { cells: ["Meal combo", "+ Large fries", "$14.20"], status: { label: "Paid", tone: "success" } },
      { cells: ["Burger", "+ Cheese", "$9.80"], status: { label: "Paid", tone: "success" } },
      { cells: ["Shake", "—", "$6.40"], status: { label: "Paid", tone: "success" } },
      { cells: ["Wrap", "+ Extra sauce", "$8.10"], status: { label: "Paid", tone: "success" } },
    ],
    footer: { label: "Now serving", value: "Token #214" },
  },
  reservation: {
    title: "Recaho Reservations · Tonight",
    subtitle: "Floor plan · Waitlist",
    stats: [
      { label: "Booked covers", value: "86" },
      { label: "Walk-ins", value: "24" },
      { label: "Waitlist", value: "6 parties" },
    ],
    columns: ["Time", "Guest", "Party", "Table"],
    rows: [
      { cells: ["19:30", "A. Kapoor", "4", "T-7"], status: { label: "Seated", tone: "success" } },
      { cells: ["20:00", "M. Rao", "2", "T-12"], status: { label: "Confirmed", tone: "brand" } },
      { cells: ["20:15", "ReserveGo", "6", "T-3"], status: { label: "Confirmed", tone: "brand" } },
      { cells: ["20:30", "Walk-in", "3", "—" ], status: { label: "Waiting", tone: "warning" } },
    ],
    footer: { label: "Next available", value: "21:00 · Table 5" },
  },
  queue: {
    title: "Recaho Queue · Display",
    subtitle: "Now serving · Up next",
    stats: [
      { label: "Now serving", value: "#212" },
      { label: "In queue", value: "9" },
      { label: "Avg. wait", value: "6 min" },
    ],
    columns: ["Token", "Order", "Waiting"],
    rows: [
      { cells: ["#213", "Takeaway", "2 min"] },
      { cells: ["#214", "Takeaway", "3 min"] },
      { cells: ["#215", "Dine-in", "5 min"] },
      { cells: ["#216", "Takeaway", "7 min"] },
    ],
    footer: { label: "Counter", value: "Collection desk 1" },
  },
  token: {
    title: "Recaho Tokens · Takeaway",
    subtitle: "Ready for collection",
    stats: [
      { label: "Issued today", value: "318" },
      { label: "Ready now", value: "4" },
      { label: "Avg. collection", value: "48s" },
    ],
    columns: ["Token", "Items", "Status"],
    rows: [
      { cells: ["#4821", "2 items", "Ready"], status: { label: "Ready", tone: "success" } },
      { cells: ["#4822", "1 item", "Ready"], status: { label: "Ready", tone: "success" } },
      { cells: ["#4823", "3 items", "Preparing"], status: { label: "Cooking", tone: "warning" } },
      { cells: ["#4824", "2 items", "Collected"], status: { label: "Done", tone: "muted" } },
    ],
    footer: { label: "Display", value: "Counter screen · Live" },
  },
  kotperf: {
    title: "Recaho KOT Performance",
    subtitle: "Prep time by station · Today",
    stats: [
      { label: "Avg. prep", value: "11m 20s" },
      { label: "On time", value: "92%" },
      { label: "Delayed", value: "8 tickets" },
    ],
    columns: ["Station", "Tickets", "Avg. time"],
    rows: [
      { cells: ["Hot line", "142", "9m 12s"] },
      { cells: ["Tandoor", "68", "12m 40s"] },
      { cells: ["Cold section", "54", "4m 05s"] },
      { cells: ["Beverages", "96", "1m 48s"] },
    ],
    bars: [
      { label: "Target 12m", value: "92% met", percent: 92 },
      { label: "Peak 21:00", value: "18m 30s", percent: 68 },
    ],
  },
};

export function ProductVisual({ visual, className }: { visual: VisualKey; className?: string }) {
  switch (visual) {
    case "pos":
      return <PosMock className={className} />;
    case "mind":
      return <MindMock className={className} />;
    case "inventory":
      return <InventoryMock className={className} />;
    case "crm":
      return <CrmMock className={className} />;
    case "kds":
      return <KdsMock className={className} />;
    case "qr":
      return <QrMock className={className} />;
    default: {
      const config = configs[visual];
      return config ? <SimpleMock config={config} className={className} /> : null;
    }
  }
}

export { DashboardMock };
