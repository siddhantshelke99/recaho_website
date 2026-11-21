import { Minus, Plus, Trash2 } from "lucide-react";
import { AppWindow } from "./AppWindow";

const categories = ["All", "Starters", "Mains", "Breads", "Drinks"];
const items = [
  { name: "Butter Chicken", price: "$14.50", tag: "Bestseller" },
  { name: "Paneer Tikka", price: "$11.00" },
  { name: "Dal Makhani", price: "$9.50" },
  { name: "Garlic Naan", price: "$3.20" },
  { name: "Chicken Biryani", price: "$16.00", tag: "Chef's pick" },
  { name: "Mango Lassi", price: "$4.80" },
];

const cart = [
  { name: "Butter Chicken", qty: 1, price: "$14.50" },
  { name: "Garlic Naan", qty: 2, price: "$6.40" },
  { name: "Mango Lassi", qty: 1, price: "$4.80" },
];

export function PosMock({ className }: { className?: string }) {
  return (
    <AppWindow title="Recaho POS · Table 7" subtitle="Dine-in · Captain: Rahul" className={className} bodyClassName="p-0">
      <div className="grid gap-0 sm:grid-cols-[1.45fr_1fr]">
        <div className="border-line p-3 sm:border-r">
          <div className="flex flex-wrap gap-1">
            {categories.map((category, index) => (
              <span
                key={category}
                className={
                  "rounded-md px-2.5 py-1 text-[0.58rem] font-medium " +
                  (index === 0 ? "bg-ink text-white" : "border border-line text-ink-700")
                }
              >
                {category}
              </span>
            ))}
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-1.5 xs:grid-cols-3">
            {items.map((item) => (
              <div key={item.name} className="rounded-lg border border-line p-2 transition-colors hover:border-brand/40">
                <div className="mb-1.5 h-10 rounded bg-gradient-to-br from-sand-200 to-sand-300" />
                <p className="truncate text-[0.58rem] font-semibold text-ink">{item.name}</p>
                <div className="mt-0.5 flex items-center justify-between">
                  <span className="text-[0.58rem] font-medium text-brand">{item.price}</span>
                  {item.tag ? (
                    <span className="truncate rounded bg-brand/8 px-1 text-[0.44rem] font-semibold text-brand">{item.tag}</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-sand/40 p-3">
          <div className="flex items-center justify-between">
            <p className="text-[0.62rem] font-semibold text-ink">Current order</p>
            <span className="rounded bg-white px-1.5 py-0.5 text-[0.5rem] font-semibold text-muted">#T7-214</span>
          </div>
          <div className="mt-2 space-y-1.5">
            {cart.map((line) => (
              <div key={line.name} className="rounded-md border border-line bg-white p-1.5">
                <div className="flex items-start justify-between gap-1">
                  <p className="truncate text-[0.56rem] font-medium text-ink">{line.name}</p>
                  <p className="text-[0.56rem] font-semibold text-ink">{line.price}</p>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-[0.5rem] text-muted">
                  <span className="grid size-4 place-items-center rounded border border-line">
                    <Minus className="size-2" aria-hidden />
                  </span>
                  <span className="font-semibold text-ink">{line.qty}</span>
                  <span className="grid size-4 place-items-center rounded border border-line">
                    <Plus className="size-2" aria-hidden />
                  </span>
                  <Trash2 className="ml-auto size-2.5" aria-hidden />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 space-y-1 border-t border-line pt-2 text-[0.55rem]">
            <div className="flex justify-between text-muted">
              <span>Subtotal</span>
              <span className="text-ink">$25.70</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>GST 5%</span>
              <span className="text-ink">$1.29</span>
            </div>
            <div className="flex justify-between pt-1 text-[0.68rem] font-bold text-ink">
              <span>Total</span>
              <span>$26.99</span>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <span className="rounded-md border border-line bg-white py-1.5 text-center text-[0.52rem] font-semibold text-ink">
              Print KOT
            </span>
            <span className="rounded-md bg-brand py-1.5 text-center text-[0.52rem] font-semibold text-white">Settle bill</span>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
