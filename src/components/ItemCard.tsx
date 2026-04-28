import { Star } from "lucide-react";
import type { BackpackItem, MarketItem } from "../types";

type MarketCardProps = {
  item: MarketItem;
  onOpen: (itemId: string) => void;
};

export function MarketCard({ item, onOpen }: MarketCardProps) {
  const hasRarityBadge = item.rarity.toLowerCase().includes("raro");

  return (
    <article
      className="item-card card-surface tap-highlight-none flex cursor-pointer flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lift"
      onClick={() => onOpen(item.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(item.id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Abrir ${item.name}`}
    >
      <div className="relative flex min-h-0 flex-[1.55] items-center justify-center p-3" style={{ background: item.accent }}>
        <img className="h-[78%] w-[78%] object-contain" src={item.image} alt={item.name} />
        {hasRarityBadge && (
          <span className="absolute right-2 top-2 flex max-w-[86%] items-center gap-1 rounded-full bg-highlight px-2.5 py-1 font-display text-[0.62rem] font-bold uppercase leading-none text-ink shadow-sm">
            <Star className="h-3 w-3" strokeWidth={3} />
            {item.rarity}
          </span>
        )}
      </div>
      <div className="flex min-h-[5.7rem] flex-col justify-between p-3.5">
        <h2 className="line-clamp-2 font-display text-base font-semibold leading-tight text-ink">{item.name}</h2>
        <div className="mt-2 flex min-w-0 items-center gap-2">
          <img className="h-6 w-6 shrink-0 rounded-full object-cover" src={item.owner.avatar} alt={`Avatar de ${item.owner.name}`} />
          <p className="truncate text-sm font-extrabold text-muted">
            {item.owner.name}, {item.owner.age} anos
          </p>
        </div>
      </div>
    </article>
  );
}

type BackpackCardProps = {
  item: BackpackItem;
  selected: boolean;
  onSelect: (itemId: string) => void;
};

export function BackpackCard({ item, selected, onSelect }: BackpackCardProps) {
  const rarityTone = item.rarity === "Raro";

  return (
    <button
      className={`tap-highlight-none relative flex min-h-[286px] flex-col overflow-hidden rounded-[24px] bg-white text-left shadow-soft transition ${
        selected ? "border-4 border-accent shadow-mint" : "border-2 border-transparent"
      }`}
      type="button"
      onClick={() => onSelect(item.id)}
      aria-pressed={selected}
    >
      <span className="flex aspect-[3/4] w-full items-center justify-center p-4" style={{ background: item.bg }}>
        <img className="h-[72%] w-[82%] object-contain" src={item.image} alt={item.name} />
      </span>
      <span className="flex w-full flex-1 flex-col justify-center gap-1 px-4 py-3">
        <span
          className={`w-fit rounded-full px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-[0.12em] ${
            rarityTone ? "bg-[#FFDF9B] text-[#5B3B00]" : "bg-slate-200 text-muted"
          }`}
        >
          {item.rarity}
        </span>
        <span className="line-clamp-2 font-display text-xl font-semibold leading-tight text-ink">{item.name}</span>
      </span>
      {selected && (
        <span className="selection-check absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white shadow">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m5 12 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </button>
  );
}
