import { expect, test } from "@playwright/test";

test("mobile user can complete the trade flow", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "PokeBazar" })).toBeVisible();
  await page.getByRole("button", { name: "Abrir Charizard VMAX" }).click();
  await page.getByRole("button", { name: /Quero Trocar!/ }).click();
  await page.getByRole("button", { name: /Charizard/ }).click();
  await page.getByRole("button", { name: "Escolher" }).click();
  await page.getByRole("button", { name: "Confirmar Troca!" }).click();

  await expect(page.getByRole("heading", { name: "Proposta Enviada!" })).toBeVisible();
});
