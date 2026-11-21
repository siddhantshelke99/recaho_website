import { AppWindow } from "./AppWindow";

const tickets = [
  {
    id: "KOT #214",
    table: "Table 7",
    time: "06:12",
    state: "Cooking",
    items: ["2× Chicken Biryani", "1× Mango Lassi"],
    note: "Less spicy",
  },
  {
    id: "KOT #215",
    table: "Takeaway",
    time: "03:48",
    state: "New",
    items: ["1× Paneer Tikka", "2× Garlic Naan"],
  },
  {
    id: "KOT #216",
    table: "Table 12",
    time: "09:05",
    state: "Overdue",
    items: ["3× Ramen", "2× Gyoza"],
    note: "No spring onion",
  },
];

const stateStyles: Record<string, string> = {
  New: "bg-brand/10 text-brand",
  Cooking: "bg-warning/10 text-warning",
  Overdue: "bg-[#c21e1c] text-white",
};

export function KdsMock({ className }: { className?: string }) {
  return (
    <AppWindow
      title="Recaho Kitchen Display · Main kitchen"
      subtitle="Station: Hot line · 3 active tickets"
      className={className}
      bodyClassName="bg-sand/40 p-3"
    >
      <div className="grid gap-2 sm:grid-cols-3">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="rounded-lg border border-line bg-white p-2.5">
            <div className="flex items-center justify-between">
              <p className="text-[0.58rem] font-semibold text-ink">{ticket.id}</p>
              <span className={`rounded-full px-1.5 py-0.5 text-[0.46rem] font-semibold ${stateStyles[ticket.state]}`}>
                {ticket.state}
              </span>
            </div>
            <p className="mt-0.5 text-[0.5rem] text-muted">
              {ticket.table} · fired {ticket.time}
            </p>
            <ul className="mt-2 space-y-1">
              {ticket.items.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-[0.56rem] text-ink-700">
                  <span className="size-1 rounded-full bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
            {ticket.note ? (
              <p className="mt-1.5 rounded bg-warning/10 px-1.5 py-0.5 text-[0.48rem] font-medium text-warning">
                Note: {ticket.note}
              </p>
            ) : null}
            <div className="mt-2 flex gap-1.5">
              <span className="flex-1 rounded border border-line py-1 text-center text-[0.48rem] font-semibold text-muted">
                Start
              </span>
              <span className="flex-1 rounded bg-ink py-1 text-center text-[0.48rem] font-semibold text-white">Ready</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between rounded-lg border border-line bg-white px-2.5 py-1.5">
        <p className="text-[0.52rem] text-muted">Average prep time today</p>
        <p className="text-[0.6rem] font-semibold text-ink">11m 20s</p>
      </div>
    </AppWindow>
  );
}
