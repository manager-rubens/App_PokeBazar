import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type FlatButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "primary" | "accent" | "ghost" | "disabled";
};

const toneClass = {
  primary: "bg-primary text-white [--button-shadow:var(--primary-shadow)]",
  accent: "bg-accent text-white [--button-shadow:var(--accent-shadow)]",
  ghost: "bg-white text-primary [--button-shadow:#E6EAF2]",
  disabled: "bg-slate-200 text-muted [--button-shadow:#CBD5E1]"
};

export function FlatButton({ children, className = "", tone = "primary", ...props }: PropsWithChildren<FlatButtonProps>) {
  return (
    <button
      className={`flat-button tap-highlight-none rounded-full font-display font-semibold ${toneClass[tone]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
