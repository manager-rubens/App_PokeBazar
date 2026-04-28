import { useNavigate } from "react-router-dom";
import { FlatButton } from "../components/FlatButton";
import { useTradeStore } from "../store/tradeStore";

export function SuccessPage() {
  const navigate = useNavigate();
  const resetTrade = useTradeStore((state) => state.resetTrade);

  return (
    <div className="screen-enter flex min-h-dvh flex-col items-center justify-center bg-canvas px-6 py-12 text-center text-ink" role="main">
      <div className="relative flex h-72 w-72 items-center justify-center">
        <div className="absolute inset-6 rounded-full bg-[#FFF0EF]" />
        <svg className="paper-rocket relative h-60 w-60" viewBox="0 0 240 240" fill="none" aria-label="Foguete de papel vibrante" role="img">
          <path className="rocket-trail" d="M88 157c-22 7-38 20-50 39 24-4 42-12 56-26" fill="#FFD166" />
          <path className="rocket-trail" d="M103 173c-12 15-17 28-17 43 18-11 31-24 39-39" fill="#00D09C" />
          <path d="M43 116 206 36l-54 166-39-55-70-31Z" fill="#FFFFFF" stroke="#2D3142" strokeWidth="8" strokeLinejoin="round" />
          <path d="M113 147 206 36 87 129l26 18Z" fill="#FF5A5F" stroke="#2D3142" strokeWidth="8" strokeLinejoin="round" />
          <path d="m113 147-4 48 43 7" fill="#FFE9E7" />
          <path d="m113 147-4 48 43 7" stroke="#2D3142" strokeWidth="8" strokeLinejoin="round" />
          <circle cx="62" cy="57" r="10" fill="#FFD166" />
          <circle cx="181" cy="92" r="8" fill="#00D09C" />
          <path d="m59 88 7 16 17 7-17 7-7 16-7-16-16-7 16-7 7-16Z" fill="#FFD166" />
        </svg>
      </div>
      <h1 className="mt-4 font-display text-[2.6rem] font-bold leading-none text-primary">Proposta Enviada!</h1>
      <p className="mt-4 max-w-[18rem] text-xl font-bold leading-8 text-muted">Agora é só esperar o dono responder.</p>
      <FlatButton
        className="mt-10 h-14 w-full max-w-80 px-5 text-lg"
        tone="ghost"
        type="button"
        onClick={() => {
          resetTrade();
          navigate("/");
        }}
      >
        Voltar ao PokeBazar
      </FlatButton>
    </div>
  );
}
