import { AppWindow } from "./AppWindow";

const stock = [
  { item: "Basmati rice", unit: "kg", onHand: "18.40", level: 72, state: "Healthy" },
  { item: "Chicken", unit: "kg", onHand: "4.70", level: 34, state: "Reorder" },
  { item: "Mango pulp", unit: "L", onHand: "3.15", level: 52, state: "Healthy" },
  { item: "Fresh cream", unit: "L", onHand: "1.20", level: 14, state: "Low" },
  { item: "Paneer", unit: "kg", onHand: "6.80", level: 61, state: "Healthy" },
];

const stateStyles: Record<string, string> = {
  Healthy: "text-success",
  Reorder: "text-warning",
  Low: "text-brand",
};

export function InventoryMock({ className }: { className?: string }) {
  return (
    <AppWindow title="Recaho Inventory · Indiranagar" subtitle="Live stock · Updated with each bill" className={className}>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Stock value", value: "$12,840" },
          { label: "Low stock", value: "3 items" },
          { label: "Consumption", value: "$4,210" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-line bg-sand/40 p-2">
            <p className="text-[0.5rem] font-medium uppercase tracking-[0.06em] text-muted">{stat.label}</p>
            <p className="mt-0.5 font-display text-[0.85rem] font-bold text-ink">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-2.5 overflow-hidden rounded-lg border border-line">
        <div className="grid grid-cols-[1.5fr_0.6fr_1fr_0.7fr] gap-1 border-b border-line bg-sand/60 px-2 py-1.5 text-[0.48rem] font-semibold uppercase tracking-[0.06em] text-muted">
          <span>Item</span>
          <span>On hand</span>
          <span>Level</span>
          <span>Status</span>
        </div>
        {stock.map((row) => (
          <div
            key={row.item}
            className="grid grid-cols-[1.5fr_0.6fr_1fr_0.7fr] items-center gap-1 border-b border-line/70 px-2 py-1.5 last:border-0"
          >
            <span className="truncate text-[0.55rem] font-medium text-ink">{row.item}</span>
            <span className="text-[0.52rem] text-muted">
              {row.onHand} {row.unit}
            </span>
            <span className="h-1 rounded-full bg-sand-300">
              <span
                className={`block h-1 rounded-full ${row.level < 20 ? "bg-brand" : row.level < 40 ? "bg-warning" : "bg-success"}`}
                style={{ width: `${row.level}%` }}
              />
            </span>
            <span className={`text-[0.48rem] font-semibold ${stateStyles[row.state]}`}>{row.state}</span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between rounded-lg bg-ink px-2.5 py-1.5">
        <p className="text-[0.5rem] text-white/60">Auto-deducted from recipe: Butter Chicken ×1</p>
        <p className="text-[0.52rem] font-semibold text-white">Chicken −0.50 kg</p>
      </div>
    </AppWindow>
  );
}
