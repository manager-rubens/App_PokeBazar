import { Search, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";
import { FlatButton } from "../components/FlatButton";
import { MarketCard } from "../components/ItemCard";
import { SkeletonCard } from "../components/SkeletonCard";
import { assets, marketItems } from "../data/items";
import { useTradeStore } from "../store/tradeStore";
import type { ItemCategory } from "../types";
import { normalizeText } from "../utils/text";

type CategoryFilter = "Tudo" | ItemCategory;

const categories: CategoryFilter[] = ["Tudo", "Cartas", "Bonecos", "Veiculos"];

export function ExplorePage() {
  const navigate = useNavigate();
  const setWantedItem = useTradeStore((state) => state.setWantedItem);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("Tudo");
  const [magicOpen, setMagicOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 520);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredItems = useMemo(() => {
    const query = normalizeText(search);

    return marketItems.filter((item) => {
      const matchesQuery = !query || normalizeText(`${item.name} ${item.owner.name} ${item.rarity}`).includes(query);
      const matchesCategory = category === "Tudo" || item.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, search]);

  function openDetail(itemId: string) {
    setWantedItem(itemId);
    navigate(`/item/${itemId}`);
  }

  return (
    <div className="screen-enter min-h-dvh bg-canvas text-ink">
      <header className="fixed-inside top-fixed flex h-16 items-center justify-between border-b-4 border-slate-100 bg-white px-5 pb-1 shadow-sm">
        <div className="flex items-center gap-3">
          <img className="h-10 w-10 rounded-full border-2 border-primary object-cover p-0.5" src={assets.avatars.user} alt="Avatar do perfil" />
          <h1 className="font-display text-2xl font-bold text-primary">PokeBazar</h1>
        </div>
        <button
          className="tap-highlight-none flex h-10 w-10 items-center justify-center rounded-full text-primary"
          type="button"
          aria-label="Buscar"
          onClick={() => document.querySelector<HTMLInputElement>("#explore-search")?.focus()}
        >
          <Search className="h-5 w-5" strokeWidth={3} />
        </button>
      </header>

      <main className="px-5 pb-36 pt-[88px]" role="main">
        <label className="relative block">
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" strokeWidth={3} />
          <input
            id="explore-search"
            className="h-16 w-full rounded-full border-0 bg-white px-14 text-base font-bold text-ink shadow-soft outline-none placeholder:text-muted focus:ring-4 focus:ring-primary/20"
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setCategory("Tudo");
            }}
            placeholder="Buscar cartas..."
            aria-label="Buscar cartas"
          />
        </label>

        <nav className="soft-scroll -mx-1 mt-6 flex gap-3 overflow-x-auto px-1 pb-2" aria-label="Categorias">
          {categories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                className={`tap-highlight-none shrink-0 rounded-full px-6 py-2.5 font-display text-base font-semibold ${
                  active ? "flat-button bg-primary text-white [--button-shadow:var(--primary-shadow)]" : "bg-white text-ink shadow-soft"
                }`}
                type="button"
                onClick={() => setCategory(item)}
              >
                {item === "Veiculos" ? "Veículos" : item}
              </button>
            );
          })}
        </nav>

        {magicOpen && (
          <section className="mt-4 rounded-[24px] border-2 border-white bg-white/90 p-3 shadow-lift backdrop-blur" aria-label="Filtros mágicos">
            <div className="grid grid-cols-3 gap-2">
              <button className="rounded-full bg-[#FFF1F2] px-3 py-2 font-display text-sm font-semibold text-primary" type="button" onClick={() => setCategory("Cartas")}>
                Cartas
              </button>
              <button
                className="rounded-full bg-[#ECFDF5] px-3 py-2 font-display text-sm font-semibold text-[#007354]"
                type="button"
                onClick={() => {
                  setCategory("Tudo");
                  setSearch("Hiper raro");
                }}
              >
                Raros
              </button>
              <button className="rounded-full bg-slate-100 px-3 py-2 font-display text-sm font-semibold text-muted" type="button" onClick={() => setCategory("Veiculos")}>
                Veículos
              </button>
            </div>
            <button
              className="mt-2 w-full rounded-full px-3 py-2 text-center font-display text-sm font-semibold text-muted"
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("Tudo");
              }}
            >
              Limpar filtros
            </button>
          </section>
        )}

        {loading ? (
          <div className="mt-6 grid grid-cols-2 gap-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : filteredItems.length === 0 ? (
          <section className="mt-10 rounded-[32px] bg-white px-6 py-10 text-center shadow-soft">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
              <Sparkles className="h-10 w-10" strokeWidth={3} />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink">Nada por aqui ainda</h2>
            <p className="mt-2 text-base font-bold leading-6 text-muted">Tente outro filtro para encontrar uma troca brilhante.</p>
            <FlatButton
              className="mt-6 px-7 py-3 text-lg"
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("Tudo");
              }}
            >
              Limpar filtros
            </FlatButton>
          </section>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {filteredItems.map((item) => (
              <MarketCard key={item.id} item={item} onOpen={openDetail} />
            ))}
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
      </main>

      <div className="fixed-inside bottom-fixed safe-bottom pointer-events-none flex justify-end px-6 pb-[7.25rem]">
        <button
          className="flat-button pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white [--button-shadow:var(--accent-shadow)]"
          type="button"
          aria-label="Filtros mágicos"
          onClick={() => setMagicOpen((value) => !value)}
        >
          <Sparkles className="h-7 w-7" strokeWidth={3} />
        </button>
      </div>

      <BottomNav active="explore" />
    </div>
  );
}
