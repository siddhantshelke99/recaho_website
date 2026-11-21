import { Plus, ShoppingBag } from "lucide-react";

const items = [
  { name: "Butter Chicken", desc: "Creamy tomato, fenugreek", price: "$14.50" },
  { name: "Paneer Tikka", desc: "Charred, mint chutney", price: "$11.00" },
  { name: "Garlic Naan", desc: "Wood-fired, butter brush", price: "$3.20" },
];

export function QrMock({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mx-auto w-[228px] rounded-[28px] border border-line bg-ink p-2 shadow-[0_24px_60px_-26px_rgba(20,22,26,0.5)]">
        <div className="overflow-hidden rounded-[22px] bg-white">
          <div className="flex items-center justify-between bg-white px-3 py-1.5 text-[0.45rem] text-muted">
            <span>9:41</span>
            <span className="h-3 w-10 rounded-full bg-ink" />
            <span>100%</span>
          </div>
          <div className="bg-ink px-3 pb-3 pt-2 text-white">
            <p className="font-display text-[0.68rem] font-bold">The Terrace Kitchen</p>
            <p className="text-[0.46rem] text-white/50">Table 7 · Dine-in</p>
            <div className="mt-2 flex gap-1">
              {["Starters", "Mains", "Drinks"].map((tab, index) => (
                <span
                  key={tab}
                  className={
                    "rounded-full px-2 py-0.5 text-[0.44rem] " +
                    (index === 0 ? "bg-white text-ink" : "border border-white/20 text-white/60")
                  }
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-1.5 p-2.5">
            {items.map((item) => (
              <div key={item.name} className="flex items-center gap-2 rounded-lg border border-line p-1.5">
                <span className="size-8 shrink-0 rounded bg-gradient-to-br from-sand-200 to-sand-300" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.5rem] font-semibold text-ink">{item.name}</p>
                  <p className="truncate text-[0.42rem] text-muted">{item.desc}</p>
                  <p className="text-[0.46rem] font-semibold text-brand">{item.price}</p>
                </div>
                <span className="grid size-5 shrink-0 place-items-center rounded bg-brand text-white">
                  <Plus className="size-2.5" aria-hidden />
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-line p-2.5">
            <div className="flex items-center justify-between text-[0.46rem]">
              <span className="text-muted">2 items</span>
              <span className="font-semibold text-ink">$17.70</span>
            </div>
            <div className="mt-1.5 flex items-center justify-center gap-1 rounded-md bg-ink py-1.5 text-[0.48rem] font-semibold text-white">
              <ShoppingBag className="size-2.5" aria-hidden /> Place order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
