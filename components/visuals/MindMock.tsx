import { Send, Sparkles } from "lucide-react";
import { AppWindow } from "./AppWindow";

export function MindMock({ className }: { className?: string }) {
  return (
    <AppWindow
      title="Recaho Mind"
      subtitle="Ask about sales, stock, menu or guests"
      badge="AI assistant"
      tone="dark"
      className={className}
    >
      <div className="flex items-center gap-2">
        <span className="grid size-6 place-items-center rounded-md bg-brand/20">
          <Sparkles className="size-3 text-brand-100" aria-hidden />
        </span>
        <p className="text-[0.55rem] font-medium text-white/70">Mind is reading your last 90 days of data</p>
      </div>

      <div className="mt-3 ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-white/10 px-2.5 py-1.5 text-[0.56rem] text-white">
        Which dishes are losing margin since the supplier price change?
      </div>

      <div className="mt-2 rounded-xl rounded-tl-sm border border-white/10 bg-white/[0.04] p-2.5">
        <p className="text-[0.56rem] leading-relaxed text-white/80">
          Four dishes on your dinner menu dropped below 62% margin after the dairy price update. Butter Chicken and
          Paneer Tikka are the biggest movers — both are high volume, so the impact compounds.
        </p>
        <div className="mt-2 space-y-1">
          {[
            { name: "Butter Chicken", drop: "−6.4 pts", width: "82%" },
            { name: "Paneer Tikka", drop: "−4.1 pts", width: "64%" },
            { name: "Dal Makhani", drop: "−2.8 pts", width: "48%" },
          ].map((row) => (
            <div key={row.name}>
              <div className="flex items-center justify-between text-[0.5rem]">
                <span className="text-white/70">{row.name}</span>
                <span className="font-semibold text-brand-100">{row.drop}</span>
              </div>
              <div className="mt-0.5 h-1 rounded-full bg-white/10">
                <div className="h-1 rounded-full bg-brand" style={{ width: row.width }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-[0.46rem] text-white/70">
            Draft a menu update
          </span>
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-[0.46rem] text-white/70">
            Review recipe costs
          </span>
        </div>
        <p className="mt-1.5 text-[0.44rem] text-white/35">Recommendations require your approval before publishing.</p>
      </div>

      <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
        <span className="text-[0.52rem] text-white/35">Ask Recaho Mind…</span>
        <span className="ml-auto grid size-5 place-items-center rounded bg-brand">
          <Send className="size-2.5 text-white" aria-hidden />
        </span>
      </div>
    </AppWindow>
  );
}
