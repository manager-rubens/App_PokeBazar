import { ArrowLeft, ArrowLeftRight, Heart, ShieldCheck } from "lucide-react";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlatButton } from "../components/FlatButton";
import { Stars } from "../components/Stars";
import { getMarketItem } from "../data/items";
import { useTradeStore } from "../store/tradeStore";

export function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const setWantedItem = useTradeStore((state) => state.setWantedItem);
  const item = useMemo(() => getMarketItem(params.itemId), [params.itemId]);

  return (
    <div className="screen-enter min-h-dvh bg-canvas text-ink">
      <header className="fixed-inside top-fixed flex h-16 items-center justify-between rounded-b-[24px] border-b-4 border-slate-100 bg-white px-5 pb-1 shadow-soft">
        <button className="tap-highlight-none flex h-10 w-10 items-center justify-center rounded-full text-primary" type="button" onClick={() => navigate(-1)} aria-label="Voltar">
          <ArrowLeft className="h-5 w-5" strokeWidth={3} />
        </button>
        <p className="font-display text-lg font-bold text-ink">PokeBazar</p>
        <button className="tap-highlight-none flex h-10 w-10 items-center justify-center rounded-full text-primary" type="button" aria-label="Favoritar">
          <Heart className="h-5 w-5" strokeWidth={3} />
        </button>
      </header>

      <main className="pb-36 pt-16" role="main">
        <section className="relative aspect-square w-full overflow-hidden bg-black">
          <img className="h-full w-full object-cover" src={item.hero} alt={item.name} />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
        </section>

        <section className="relative -mt-12 rounded-t-[32px] bg-white px-5 pb-8 pt-8 shadow-[0_-10px_24px_rgba(45,49,66,0.08)]">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#FFDF9B] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#5b3b00]">{item.rarity}</span>
            <span className="rounded-full bg-[#59FDC5] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#007354]">{item.category}</span>
          </div>

          <h1 className="mt-4 break-words font-display text-[2.5rem] font-bold leading-[1.05] text-primary">{item.name}</h1>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-[24px] bg-[#FFF0EF] p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-muted">Poder de troca</p>
              <Stars power={item.power} />
            </div>
            <div className="rounded-[24px] bg-[#FFF0EF] p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-muted">Condição</p>
              <p className="mt-2 truncate font-display text-xl font-semibold text-[#00A67C]">{item.condition}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-[32px] border-2 border-[#FFE9E7] bg-white p-4">
            <div className="flex min-w-0 items-center gap-3">
              <img className="h-14 w-14 shrink-0 rounded-full border-4 border-highlight object-cover p-1" src={item.owner.avatar} alt={`Avatar de ${item.owner.name}`} />
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-muted">Dono</p>
                <p className="truncate font-display text-xl font-semibold text-ink">
                  {item.owner.name}, {item.owner.age} anos
                </p>
              </div>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5FFF6] text-[#00A67C]">
              <ShieldCheck className="h-5 w-5" strokeWidth={3} />
            </span>
          </div>

          <div className="mt-6">
            <h2 className="font-display text-lg font-semibold text-ink">Sobre o item</h2>
            <p className="mt-2 text-base font-semibold leading-7 text-[#5A403F]">{item.description}</p>
          </div>
        </section>
      </main>

      <div className="fixed-inside bottom-fixed safe-bottom bg-gradient-to-t from-canvas via-canvas px-5 pb-5 pt-8">
        <FlatButton
          className="flex h-16 w-full items-center justify-center gap-3 text-2xl"
          type="button"
          onClick={() => {
            setWantedItem(item.id);
            navigate("/mochila");
          }}
        >
          <ArrowLeftRight className="h-5 w-5" strokeWidth={3} />
          Quero Trocar!
        </FlatButton>
      </div>
    </div>
  );
}
