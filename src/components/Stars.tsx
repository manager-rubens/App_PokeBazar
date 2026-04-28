import { Star } from "lucide-react";

type StarsProps = {
  power: number;
};

export function Stars({ power }: StarsProps) {
  return (
    <div className="mt-2 flex text-highlight" aria-label={`${power} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className={index < power ? "h-5 w-5 text-highlight" : "h-5 w-5 text-slate-300"} strokeWidth={3} />
      ))}
    </div>
  );
}
