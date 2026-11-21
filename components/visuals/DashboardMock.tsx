import {
  BarChart3,
  Boxes,
  ChefHat,
  LayoutDashboard,
  Receipt,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import { AppWindow, MiniStat } from "./AppWindow";

const nav = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Receipt, label: "Billing" },
  { icon: ShoppingBag, label: "Orders" },
  { icon: ChefHat, label: "Kitchen" },
  { icon: Boxes, label: "Inventory" },
  { icon: Users, label: "Guests" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings2, label: "Settings" },
];

const bars = [42, 55, 38, 66, 74, 58, 88, 71, 92, 64, 79, 96];
const hours = ["11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p"];

const orders = [
  { id: "T-214", table: "Table 7", items: "2× Biryani, 1× Lassi", value: "$41.60", state: "Preparing" },
  { id: "T-215", table: "Takeaway", items: "1× Paneer Tikka, 2× Naan", value: "$18.40", state: "Ready" },
  { id: "T-216", table: "Table 12", items: "3× Ramen, 2× Gyoza", value: "$52.10", state: "New" },
];

export function DashboardMock({ className }: { className?: string }) {
  return (
    <AppWindow
      title="Recaho Back Office · Sales overview"
      subtitle="Balewadi flagship · All channels"
      className={className}
      bodyClassName="p-0"
    >
      <div className="flex">
        <aside className="hidden w-[104px] shrink-0 border-r border-line bg-sand/50 p-2 sm:block">
          {nav.map((item) => (
            <div
              key={item.label}
              className={
                "mb-0.5 flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[0.62rem] font-medium " +
                (item.active ? "bg-brand/10 text-brand" : "text-muted")
              }
            >
              <item.icon className="size-3" aria-hidden />
              {item.label}
            </div>
          ))}
          <div className="mt-3 rounded-md border border-line bg-white p-2">
            <p className="text-[0.52rem] font-semibold uppercase tracking-[0.08em] text-muted">Outlets</p>
            <p className="mt-1 text-[0.62rem] font-semibold text-ink">3 live</p>
            <div className="mt-1.5 flex items-center gap-1 text-[0.55rem] text-success">
              <span className="size-1.5 rounded-full bg-success" /> All synced
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[0.72rem] font-semibold text-ink">Today&apos;s performance</p>
              <p className="text-[0.58rem] text-muted">Fri, 20 Nov · service ended 23:41</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="rounded-md border border-line px-2 py-1 text-[0.55rem] font-medium text-ink-700">All outlets</span>
              <span className="rounded-md bg-ink px-2 py-1 text-[0.55rem] font-medium text-white">Today</span>
            </div>
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <MiniStat label="Net sales" value="$8,412" delta="+12.4% vs last week" />
            <MiniStat label="Orders" value="612" delta="+86 today" />
            <MiniStat label="Avg. ticket" value="$13.74" delta="+3.1%" />
            <MiniStat label="Avg. prep" value="11m 20s" delta="-48s vs target" />
          </div>

          <div className="mt-2.5 grid gap-2 lg:grid-cols-[1.55fr_1fr]">
            <div className="rounded-lg border border-line p-2.5">
              <div className="flex items-center justify-between">
                <p className="text-[0.62rem] font-semibold text-ink">Sales by hour</p>
                <p className="text-[0.55rem] text-muted">Peak 21:00</p>
              </div>
              <div className="mt-3 flex h-[86px] items-end gap-[3px]">
                {bars.map((height, index) => (
                  <div key={index} className="group relative flex-1">
                    <div
                      className={
                        "w-full rounded-t-[3px] transition-colors " +
                        (height > 85 ? "bg-brand" : height > 65 ? "bg-brand/55" : "bg-brand/20")
                      }
                      style={{ height: `${height}px` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[0.5rem] text-muted">
                {hours.map((hour) => (
                  <span key={hour}>{hour}</span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-line p-2.5">
              <p className="text-[0.62rem] font-semibold text-ink">Channel mix</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="relative size-[64px] shrink-0">
                  <svg viewBox="0 0 36 36" className="size-full -rotate-90" aria-hidden>
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f3ede6" strokeWidth="5" />
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#c21e1c" strokeWidth="5" strokeDasharray="52 100" strokeLinecap="round" />
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e84b2a" strokeWidth="5" strokeDasharray="22 100" strokeDashoffset="-52" strokeLinecap="round" />
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#14161a" strokeWidth="5" strokeDasharray="14 100" strokeDashoffset="-74" strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 grid place-items-center font-display text-[0.62rem] font-bold text-ink">612</span>
                </div>
                <ul className="space-y-1 text-[0.57rem]">
                  <li className="flex items-center gap-1.5 text-ink-700">
                    <span className="size-1.5 rounded-full bg-brand" /> Dine-in <span className="ml-auto text-muted">52%</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-ink-700">
                    <span className="size-1.5 rounded-full bg-accent" /> Delivery <span className="ml-auto text-muted">22%</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-ink-700">
                    <span className="size-1.5 rounded-full bg-ink" /> Takeaway <span className="ml-auto text-muted">14%</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-ink-700">
                    <span className="size-1.5 rounded-full bg-line-strong" /> QR menu <span className="ml-auto text-muted">12%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-2.5 rounded-lg border border-line">
            <div className="flex items-center justify-between border-b border-line px-2.5 py-1.5">
              <p className="text-[0.62rem] font-semibold text-ink">Live orders</p>
              <span className="flex items-center gap-1 text-[0.52rem] font-medium text-success">
                <span className="size-1.5 animate-pulse rounded-full bg-success" /> Updating
              </span>
            </div>
            {orders.map((order) => (
              <div key={order.id} className="flex items-center gap-2 border-b border-line/70 px-2.5 py-1.5 last:border-0">
                <span className="rounded bg-sand-200 px-1.5 py-0.5 text-[0.52rem] font-semibold text-ink-700">{order.id}</span>
                <span className="w-[62px] shrink-0 truncate text-[0.55rem] font-medium text-ink">{order.table}</span>
                <span className="min-w-0 flex-1 truncate text-[0.52rem] text-muted">{order.items}</span>
                <span className="text-[0.55rem] font-semibold text-ink">{order.value}</span>
                <span
                  className={
                    "rounded-full px-1.5 py-0.5 text-[0.48rem] font-semibold " +
                    (order.state === "Ready"
                      ? "bg-success/10 text-success"
                      : order.state === "Preparing"
                        ? "bg-warning/10 text-warning"
                        : "bg-brand/10 text-brand")
                  }
                >
                  {order.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
