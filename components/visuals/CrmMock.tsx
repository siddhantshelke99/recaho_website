import { Gift, MessageCircle, Star } from "lucide-react";
import { AppWindow } from "./AppWindow";

export function CrmMock({ className }: { className?: string }) {
  return (
    <AppWindow title="Recaho CRM · Guest profile" subtitle="Segments · Loyalty · Campaigns" className={className}>
      <div className="rounded-lg border border-line p-2.5">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-brand/10 font-display text-[0.7rem] font-bold text-brand">
            AK
          </span>
          <div className="min-w-0">
            <p className="truncate text-[0.65rem] font-semibold text-ink">Ananya Kapoor</p>
            <p className="text-[0.5rem] text-muted">+91 98•• ••4120 · Mumbai</p>
          </div>
          <span className="ml-auto rounded-full bg-[#b8860b]/10 px-2 py-0.5 text-[0.48rem] font-semibold text-[#8a6508]">
            Gold tier
          </span>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {[
            { label: "Visits", value: "24" },
            { label: "Lifetime", value: "$1,840" },
            { label: "Points", value: "1,260" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-md bg-sand/60 p-1.5 text-center">
              <p className="text-[0.46rem] uppercase tracking-[0.06em] text-muted">{stat.label}</p>
              <p className="text-[0.62rem] font-bold text-ink">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {["Favourite: Dal Makhani", "Weekend diner", "Prefers window table"].map((tag) => (
            <span key={tag} className="rounded-full border border-line px-1.5 py-0.5 text-[0.46rem] text-ink-700">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2 space-y-1.5">
        <div className="flex items-center gap-2 rounded-lg border border-line p-2">
          <span className="grid size-6 place-items-center rounded-md bg-brand/10">
            <Gift className="size-3 text-brand" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-[0.55rem] font-semibold text-ink">Birthday reward ready</p>
            <p className="text-[0.46rem] text-muted">Free dessert · expires in 6 days</p>
          </div>
          <span className="ml-auto text-[0.46rem] font-semibold text-brand">Send</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-line p-2">
          <span className="grid size-6 place-items-center rounded-md bg-success/10">
            <MessageCircle className="size-3 text-success" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-[0.55rem] font-semibold text-ink">Win-back campaign</p>
            <p className="text-[0.46rem] text-muted">218 lapsed guests · WhatsApp</p>
          </div>
          <span className="ml-auto text-[0.46rem] font-semibold text-muted">Draft</span>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-lg bg-sand/70 px-2.5 py-1.5">
        <span className="flex items-center gap-1 text-[0.5rem] font-medium text-ink-700">
          <Star className="size-2.5 text-brand" aria-hidden /> 4.8 average guest rating
        </span>
        <span className="text-[0.48rem] text-muted">Last 30 days</span>
      </div>
    </AppWindow>
  );
}
