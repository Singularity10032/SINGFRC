import { results } from "@/lib/results"

function Receipt({ season, event, result }: (typeof results)[number]) {
  return (
    <div className="mx-2 flex shrink-0 items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm font-semibold text-ink">
      <span className="tabular-nums">{season}</span>
      <span aria-hidden>·</span>
      <span>{event}</span>
      <span aria-hidden>·</span>
      <span className="text-arcade-purple">{result}</span>
    </div>
  )
}

export function ResultsMarquee() {
  return (
    <div className="overflow-hidden bg-arcade-fuel py-4">
      <div className="flex w-max ticker-track" aria-label="Event results, real receipts">
        {[...results, ...results].map((r, i) => (
          <Receipt key={i} {...r} />
        ))}
      </div>
    </div>
  )
}
