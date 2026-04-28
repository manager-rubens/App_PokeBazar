import { ArrowLeft, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";
import { FlatButton } from "../components/FlatButton";
import { BackpackCard } from "../components/ItemCard";
import { assets, backpackItems } from "../data/items";
import { useTradeStore } from "../store/tradeStore";
import { normalizeText } from "../utils/text";

export function BackpackPage() {
  const navigate = useNavigate();
  const offeredItemId = useTradeStore((state) => state.offeredItemId);
  const setOfferedItem = useTradeStore((state) => state.setOfferedItem);
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const query = normalizeText(search);
    return backpackItems.filter((item) => !query || normalizeText(`${item.name} ${item.rarity}`).includes(query));
  }, [search]);

  return (
    <div className="screen-enter min-h-dvh bg-canvas text-ink">
      <header className="fixed-inside top-fixed flex h-16 items-center justify-between border-b-4 border-slate-100 bg-white px-5 pb-1">
        <div className="flex min-w-0 items-center gap-3">
          <button className="tap-highlight-none flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-primary" type="button" onClick={() => navigate(-1)} aria-label="Voltar">
            <ArrowLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="truncate font-display text-xl font-bold text-primary">Minha Mochila</h1>
        </div>
        <img className="h-10 w-10 rounded-full border-2 border-primary object-cover p-0.5" src={assets.avatars.backpack} alt="Avatar do perfil" />
      </header>

      <main className="px-5 pb-44 pt-[94px]" role="main">
        <section>
          <h2 className="font-display text-3xl font-bold leading-tight text-ink">O que você oferece?</h2>
          <p className="mt-2 text-lg font-bold leading-7 text-muted">Escolha um item da sua mochila para propor a troca.</p>
        </section>

        <label className="relative mt-6 block">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" strokeWidth={3} />
          <input
            className="h-14 w-full rounded-full border-0 bg-white px-12 text-base font-bold text-ink shadow-sm outline-none placeholder:text-muted focus:ring-4 focus:ring-accent/20"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Procurar cartas..."
            aria-label="Procurar na mochila"
          />
        </label>

        {filteredItems.length ? (
          <section className="mt-7 grid grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <BackpackCard key={item.id} item={item} selected={offeredItemId === item.id} onSelect={setOfferedItem} />
            ))}
          </section>
        ) : (
          <section className="mt-8 rounded-[28px] bg-white px-5 py-8 text-center shadow-soft">
            <h3 className="font-display text-2xl font-bold text-ink">Mochila sem match</h3>
            <p className="mt-2 font-bold text-muted">Tente outro nome para achar seu item.</p>
          </section>
        )}
      </main>

      <div className="fixed-inside bottom-[92px] z-50 bg-gradient-to-t from-canvas via-canvas px-5 pb-3 pt-7 sm:bottom-[116px]">
        <FlatButton className="flex h-14 w-full items-center justify-center text-xl" tone={offeredItemId ? "primary" : "disabled"} type="button" disabled={!offeredItemId} onClick={() => navigate("/balanca")}>
          Escolher
        </FlatButton>
      </div>

      <BottomNav active="backpack" />
    </div>
  );
}
