import { ArrowLeft, Check, Sparkles, Star, ArrowUpDown } from "lucide-react";
import { useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FlatButton } from "../components/FlatButton";
import { backpackItems, getBackpackItem, getMarketItem } from "../data/items";
import { useTradeStore } from "../store/tradeStore";

export function TradeScalePage() {
  const navigate = useNavigate();
  const wantedItemId = useTradeStore((state) => state.wantedItemId);
  const offeredItemId = useTradeStore((state) => state.offeredItemId);
  const wanted = useMemo(() => getMarketItem(wantedItemId), [wantedItemId]);
  const offered = useMemo(() => getBackpackItem(offeredItemId) ?? backpackItems[1], [offeredItemId]);

  if (!offeredItemId) {
    return <Navigate to="/mochila" replace />;
  }

  return (
    <div className="screen-enter min-h-dvh bg-canvas text-ink">
      <header className="fixed-inside top-fixed flex h-16 items-center justify-between border-b-4 border-slate-100 bg-white px-5 pb-1">
        <button className="tap-highlight-none flex h-10 w-10 items-center justify-center rounded-full text-primary" type="button" onClick={() => navigate(-1)} aria-label="Voltar">
          <ArrowLeft className="h-5 w-5" strokeWidth={3} />
        </button>
        <h1 className="font-display text-lg font-bold text-ink">PokeBazar</h1>
        <span className="h-10 w-10" aria-hidden="true" />
      </header>

      <main className="px-5 pb-36 pt-[88px]" role="main">
        <div className="mx-auto w-fit rounded-full bg-[#FFDAD8] px-4 py-1 text-sm font-black uppercase text-[#410007]">Troca de cards</div>

        <section className="mt-3 flex flex-col items-center gap-7">
          <TradeCircle label="Você quer..." name={wanted.name} image={wanted.image} tone="primary" bg="#FFF0EF" />

          <div className="swap-pulse flat-button flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-accent text-white [--button-shadow:var(--accent-shadow)]">
            <ArrowUpDown className="h-7 w-7" strokeWidth={3} />
          </div>

          <TradeCircle label="Em troca de..." name={offered.name} image={offered.image} tone="accent" bg="#F0FFF9" />
        </section>

        <section className="mt-8 flex items-center gap-4 rounded-[28px] border-2 border-slate-100 bg-white/80 p-4 shadow-soft backdrop-blur">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF6D9] text-highlight">
            <Sparkles className="h-8 w-8" strokeWidth={3} />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-xl font-bold text-ink">Troca justa!</h2>
            <p className="text-sm font-extrabold leading-5 text-muted">
              {wanted.name} e {offered.name} têm poderes parecidos.
            </p>
          </div>
        </section>
      </main>

      <div className="fixed-inside bottom-fixed safe-bottom bg-gradient-to-t from-canvas via-canvas px-5 pb-5 pt-8">
        <FlatButton className="flex h-16 w-full items-center justify-center text-xl" tone="accent" type="button" onClick={() => navigate("/sucesso")}>
          Confirmar Troca!
        </FlatButton>
      </div>
    </div>
  );
}

type TradeCircleProps = {
  label: string;
  name: string;
  image: string;
  tone: "primary" | "accent";
  bg: string;
};

function TradeCircle({ label, name, image, tone, bg }: TradeCircleProps) {
  const isAccent = tone === "accent";

  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-muted">
        {isAccent ? <Check className="h-5 w-5 text-accent" strokeWidth={3} /> : <Star className="h-5 w-5 text-highlight" strokeWidth={3} />}
        {label}
      </p>
      <div className="relative">
        <div className={`flex h-64 w-64 items-center justify-center rounded-full border-4 bg-white p-7 shadow-soft ${isAccent ? "border-accent/25" : "border-primary/25"}`}>
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full" style={{ background: bg }}>
            <img className="h-[82%] w-[82%] object-contain" src={image} alt={name} />
          </div>
        </div>
        <span className={`absolute -bottom-3 left-1/2 max-w-[80%] -translate-x-1/2 truncate rounded-full px-6 py-2 font-display text-lg font-semibold text-white shadow-lg ${isAccent ? "bg-accent" : "bg-primary"}`}>
          {name}
        </span>
      </div>
    </div>
  );
}
