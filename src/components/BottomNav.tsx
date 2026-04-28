import { ArrowLeftRight, Backpack, Home, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTradeStore } from "../store/tradeStore";

type BottomNavProps = {
  active: "explore" | "trade" | "backpack" | "profile";
};

const navItems = [
  { id: "explore", label: "Explorar", icon: Home, route: "/" },
  { id: "trade", label: "Trocar", icon: ArrowLeftRight, route: "/balanca" },
  { id: "backpack", label: "Mochila", icon: Backpack, route: "/mochila" },
  { id: "profile", label: "Perfil", icon: UserRound, route: "/" }
] as const;

export function BottomNav({ active }: BottomNavProps) {
  const navigate = useNavigate();
  const offeredItemId = useTradeStore((state) => state.offeredItemId);

  return (
    <nav
      className="fixed-inside bottom-fixed safe-bottom rounded-t-[32px] border-t-4 border-slate-100 bg-white px-5 pb-5 pt-3 shadow-[0_-8px_18px_rgba(45,49,66,0.08)]"
      aria-label="Navegação principal"
    >
      <div className="grid grid-cols-4 gap-2">
        {navItems.map((item) => {
          const isActive = active === item.id;
          const Icon = item.icon;
          const route = item.id === "trade" && !offeredItemId ? "/mochila" : item.route;

          return (
            <button
              key={item.id}
              className={`tap-highlight-none flex min-w-0 flex-col items-center justify-center rounded-2xl px-2 py-2 font-display text-[0.66rem] font-bold uppercase tracking-[0.08em] ${
                isActive ? "bg-[#FFF1F2] text-primary" : "text-[#8EA0B8]"
              }`}
              type="button"
              onClick={() => navigate(route)}
            >
              <Icon className="mb-1 h-5 w-5" strokeWidth={3} />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
