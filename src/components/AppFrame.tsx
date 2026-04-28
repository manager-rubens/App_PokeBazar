import type { PropsWithChildren } from "react";

export function AppFrame({ children }: PropsWithChildren) {
  return <div className="app-frame">{children}</div>;
}
