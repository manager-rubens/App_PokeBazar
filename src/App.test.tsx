import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import { useTradeStore } from "./store/tradeStore";

function renderApp(initialEntries = ["/"]) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
}

describe("PokeBazar flow", () => {
  beforeEach(() => {
    useTradeStore.getState().resetTrade();
  });

  it("renders the explore screen", async () => {
    const view = renderApp();

    expect(await view.findByText("PokeBazar")).toBeInTheDocument();
    expect(view.getByPlaceholderText("Buscar cartas...")).toBeInTheDocument();
  });

  it("keeps choose disabled until an item is selected", () => {
    const view = renderApp(["/mochila"]);

    expect(view.getByRole("button", { name: "Escolher" })).toBeDisabled();
  });

  it("allows the full trade proposal path", async () => {
    const user = userEvent.setup();
    const view = renderApp(["/item/charizard-vmax"]);

    await user.click(view.getByRole("button", { name: /quero trocar/i }));
    await user.click(view.getByRole("button", { name: /Charizard/i }));
    await user.click(view.getByRole("button", { name: "Escolher" }));
    await user.click(view.getByRole("button", { name: "Confirmar Troca!" }));

    expect(view.getByText("Proposta Enviada!")).toBeInTheDocument();
    expect(view.getByText("Agora é só esperar o dono responder.")).toBeInTheDocument();
  });
});
