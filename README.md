# PokeBazar

Web app mobile-first para prototipar o fluxo de troca de brinquedos e cartas:
Explorar -> Detalhe do Item -> Minha Mochila -> Balança de Troca -> Sucesso.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v3
- Zustand
- React Router
- Capacitor
- Vitest
- Playwright

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse `http://127.0.0.1:5173`.

## Scripts

```bash
npm run build
npm run test
npm run e2e
npm run cap:sync
```

## Estrutura

- `src/data`: dados mockados do bazar e da mochila.
- `src/store`: estado compartilhado da proposta de troca.
- `src/pages`: telas do fluxo principal.
- `src/components`: componentes visuais reutilizáveis.

## Escopo atual

Não há backend, autenticação real, chat, moderação, pagamentos ou persistência real.
