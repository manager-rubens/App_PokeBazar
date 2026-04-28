const assets = {
  avatars: {
    user: "https://www.figma.com/api/mcp/asset/aaeac8d3-30ca-4139-9398-b4f4386aaf7a",
    backpack: "https://www.figma.com/api/mcp/asset/89a4a718-17d7-4833-bc8d-1f665353f4fa",
    leo: "https://www.figma.com/api/mcp/asset/67ea589a-9b15-42f9-930c-8f1ab68bf6f9",
    mia: "https://www.figma.com/api/mcp/asset/2dabf7d7-8e4c-4332-b0d0-f8c6bd8d8567",
    dani: "https://www.figma.com/api/mcp/asset/514b636b-236f-4451-9ae6-81d92e55fa32",
    luca: "https://www.figma.com/api/mcp/asset/3f41fcbc-8068-4f8c-bc44-d5ce5857e42f"
  },
  market: {
    mewtwo: "https://www.figma.com/api/mcp/asset/db28f22b-0d86-4ce0-8eb6-c774e6c9fb91",
    bulbasaur: "https://www.figma.com/api/mcp/asset/9f5d5653-729d-4901-92fe-cd106f7aed2f",
    charizard: "https://www.figma.com/api/mcp/asset/672aec74-2115-4542-be29-8fa3bf2c7192",
    pikachu: "https://www.figma.com/api/mcp/asset/238ba6a9-4fac-4a2e-835e-0994668069cb"
  },
  detail: {
    charizardHero: "https://www.figma.com/api/mcp/asset/e7d5437b-cb64-4a25-9395-ec846d506028",
    ownerLeo: "https://www.figma.com/api/mcp/asset/1b96e375-3691-4c4e-be12-46ba50c138b6"
  },
  backpack: {
    pikachu: "https://www.figma.com/api/mcp/asset/26c0a799-f337-4561-b58b-22e834aac61c",
    charizard: "https://www.figma.com/api/mcp/asset/5c0bf455-9dfd-4fda-a3aa-34cb0fee82d3",
    eevee: "https://www.figma.com/api/mcp/asset/be09a866-3aae-46c6-904e-54c8258f9aec",
    mewtwo: "https://www.figma.com/api/mcp/asset/0fcb4812-ad0b-45fd-b44f-a6437fa114da"
  }
};

const marketItems = [
  {
    id: "mewtwo-gx",
    name: "Mewtwo GX",
    category: "Cartas",
    rarity: "Ultra raro",
    condition: "Muito bom",
    power: 5,
    owner: { name: "Leo", age: 8, avatar: assets.avatars.leo },
    image: assets.market.mewtwo,
    hero: assets.market.mewtwo,
    accent: "#FFE9E7",
    description:
      "Carta Mewtwo GX bem guardada, perfeita para quem está montando uma coleção psíquica. O dono procura cartas raras ou brinquedos pequenos em bom estado."
  },
  {
    id: "bulbasaur-holo",
    name: "Bulbasaur Holo",
    category: "Cartas",
    rarity: "Raro",
    condition: "Bom",
    power: 4,
    owner: { name: "Bia", age: 7, avatar: assets.avatars.mia },
    image: assets.market.bulbasaur,
    hero: assets.market.bulbasaur,
    accent: "#E5FFF6",
    description:
      "Bulbasaur com brilho holográfico e bordas bem conservadas. Ideal para completar a página de iniciais verdes da coleção."
  },
  {
    id: "charizard-vmax",
    name: "Charizard VMAX",
    category: "Cartas",
    rarity: "Hiper raro",
    condition: "Excelente",
    power: 5,
    owner: { name: "Leo", age: 8, avatar: assets.detail.ownerLeo },
    image: assets.market.charizard,
    hero: assets.detail.charizardHero,
    accent: "#FFE9E7",
    description:
      "Esta carta é um Charizard VMAX Shiny raro da coleção Destinos Brilhantes. Está em estado Mint, sempre guardada no sleeve e no top loader. O brilho é incrível! Procuro outras cartas raras para completar minha coleção."
  },
  {
    id: "pikachu-v",
    name: "Pikachu V",
    category: "Cartas",
    rarity: "Especial",
    condition: "Ótimo",
    power: 4,
    owner: { name: "Luca", age: 6, avatar: assets.avatars.luca },
    image: assets.market.pikachu,
    hero: assets.market.pikachu,
    accent: "#FFF4BF",
    description:
      "Pikachu sorridente, pronto para entrar numa nova mochila. O dono gosta de trocas por cartas elétricas ou bonecos articulados."
  }
];

const backpackItems = [
  {
    id: "bag-pikachu",
    name: "Pikachu",
    category: "Carta",
    rarity: "Comum",
    power: 3,
    image: assets.backpack.pikachu,
    bg: "#F1F5F9"
  },
  {
    id: "bag-charizard",
    name: "Charizard",
    category: "Carta",
    rarity: "Raro",
    power: 5,
    image: assets.backpack.charizard,
    bg: "#FFD166"
  },
  {
    id: "bag-eevee",
    name: "Eevee",
    category: "Carta",
    rarity: "Comum",
    power: 3,
    image: assets.backpack.eevee,
    bg: "#F1F5F9"
  },
  {
    id: "bag-mewtwo",
    name: "Mewtwo",
    category: "Carta",
    rarity: "Comum",
    power: 4,
    image: assets.backpack.mewtwo,
    bg: "#F1F5F9"
  }
];

const state = {
  view: "explore",
  loading: true,
  wantedId: "charizard-vmax",
  offeredId: "",
  exploreSearch: "",
  bagSearch: "",
  category: "Tudo",
  magicOpen: false
};

const app = document.querySelector("#app");

const icons = {
  search: svg("0 0 24 24", '<circle cx="11" cy="11" r="7"/><path d="m20 20-4.2-4.2"/>'),
  sparkles: svg(
    "0 0 24 24",
    '<path d="M12 3 9.7 8.7 4 11l5.7 2.3L12 19l2.3-5.7L20 11l-5.7-2.3Z"/><path d="m19 3 .8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8Z"/>'
  ),
  back: svg("0 0 24 24", '<path d="m15 18-6-6 6-6"/><path d="M21 12H9"/>'),
  heart: svg("0 0 24 24", '<path d="M20.8 8.6c0 5.4-8.8 10-8.8 10s-8.8-4.6-8.8-10A4.8 4.8 0 0 1 12 5a4.8 4.8 0 0 1 8.8 3.6Z"/>'),
  swap: svg("0 0 24 24", '<path d="M7 7h11l-3-3"/><path d="M17 17H6l3 3"/><path d="M18 7l-3 3"/><path d="M6 17l3-3"/>'),
  swapVertical: svg("0 0 24 24", '<path d="M12 4v15"/><path d="m7 9 5-5 5 5"/><path d="m17 15-5 5-5-5"/>'),
  check: svg("0 0 24 24", '<path d="m5 12 4 4 10-10"/>'),
  home: svg("0 0 24 24", '<path d="m4 11 8-7 8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>'),
  bag: svg("0 0 24 24", '<path d="M6 8h12l1 12H5Z"/><path d="M9 8a3 3 0 0 1 6 0"/>'),
  user: svg("0 0 24 24", '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>'),
  star: svg("0 0 24 24", '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/>'),
  shield: svg(
    "0 0 24 24",
    '<path d="M12 3 20 6v5c0 5.2-3.2 8.6-8 10-4.8-1.4-8-4.8-8-10V6Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>'
  )
};

function svg(viewBox, paths) {
  return `<svg aria-hidden="true" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

function getWantedItem() {
  return marketItems.find((item) => item.id === state.wantedId) || marketItems[0];
}

function getOfferedItem() {
  return backpackItems.find((item) => item.id === state.offeredId);
}

function render(options = {}) {
  const views = {
    explore: renderExplore,
    detail: renderDetail,
    backpack: renderBackpack,
    trade: renderTrade,
    success: renderSuccess
  };

  app.innerHTML = views[state.view]();
  if (!options.keepScroll) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

function renderExplore() {
  const filteredItems = getFilteredMarketItems();
  const hasEmptyState = !state.loading && filteredItems.length === 0;

  return `
    <div class="screen-enter min-h-dvh bg-canvas text-ink">
      ${renderExploreHeader()}
      <main class="px-5 pb-36 pt-[88px]" role="main">
        <label class="relative block">
          <span class="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted">${icons.search}</span>
          <input
            class="h-16 w-full rounded-full border-0 bg-white px-14 text-base font-bold text-ink shadow-soft outline-none placeholder:text-muted focus:ring-4 focus:ring-primary/20"
            data-action="explore-search"
            type="search"
            value="${escapeAttr(state.exploreSearch)}"
            placeholder="Buscar cartas..."
            aria-label="Buscar cartas"
          />
        </label>

        <nav class="soft-scroll -mx-1 mt-6 flex gap-3 overflow-x-auto px-1 pb-2" aria-label="Categorias">
          ${["Tudo", "Cartas", "Bonecos", "Veiculos"].map(renderCategoryPill).join("")}
        </nav>

        ${state.magicOpen ? renderMagicPanel() : ""}

        ${
          state.loading
            ? `<div class="mt-6 grid grid-cols-2 gap-3">${renderSkeletonCard()}${renderSkeletonCard()}${renderSkeletonCard()}${renderSkeletonCard()}</div>`
            : hasEmptyState
              ? renderEmptyState()
              : `<div class="mt-6 grid grid-cols-2 gap-3">${filteredItems.map(renderMarketCard).join("")}${renderSkeletonCard()}${renderSkeletonCard()}</div>`
        }
      </main>
      <div class="fixed-inside bottom-fixed safe-bottom pointer-events-none flex justify-end px-6 pb-[7.25rem]">
        <button class="flat-button pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white" style="--button-shadow: var(--accent-shadow)" data-action="toggle-magic" type="button" aria-label="Filtros mágicos">
          <span class="h-7 w-7">${icons.sparkles}</span>
        </button>
      </div>
      ${renderBottomNav("explore")}
    </div>
  `;
}

function renderExploreHeader() {
  return `
    <header class="fixed-inside top-fixed flex h-16 items-center justify-between border-b-4 border-slate-100 bg-white px-5 pb-1 shadow-sm">
      <div class="flex items-center gap-3">
        <img class="h-10 w-10 rounded-full border-2 border-primary object-cover p-0.5" src="${assets.avatars.user}" alt="Avatar do perfil" />
        <h1 class="font-display text-2xl font-bold text-primary">PokeBazar</h1>
      </div>
      <button class="flex h-10 w-10 items-center justify-center rounded-full text-primary" type="button" data-action="focus-search" aria-label="Buscar">
        <span class="h-5 w-5">${icons.search}</span>
      </button>
    </header>
  `;
}

function renderCategoryPill(category) {
  const active = state.category === category;
  return `
    <button
      class="${active ? "flat-button bg-primary text-white" : "bg-white text-ink shadow-soft"} shrink-0 rounded-full px-6 py-2.5 font-display text-base font-semibold"
      type="button"
      data-action="set-category"
      data-category="${category}"
      ${active ? 'style="--button-shadow: var(--primary-shadow)"' : ""}
    >
      ${category === "Veiculos" ? "Veículos" : category}
    </button>
  `;
}

function renderMagicPanel() {
  return `
    <section class="mt-4 rounded-[24px] border-2 border-white bg-white/90 p-3 shadow-lift backdrop-blur" aria-label="Filtros mágicos">
      <div class="grid grid-cols-3 gap-2">
        <button class="rounded-full bg-[#FFF1F2] px-3 py-2 font-display text-sm font-semibold text-primary" data-action="set-category" data-category="Cartas" type="button">Cartas</button>
        <button class="rounded-full bg-[#ECFDF5] px-3 py-2 font-display text-sm font-semibold text-[#007354]" data-action="set-rarity" data-rarity="Hiper raro" type="button">Raros</button>
        <button class="rounded-full bg-slate-100 px-3 py-2 font-display text-sm font-semibold text-muted" data-action="set-category" data-category="Veiculos" type="button">Veículos</button>
      </div>
      <button class="mt-2 w-full rounded-full px-3 py-2 text-center font-display text-sm font-semibold text-muted" data-action="clear-filters" type="button">Limpar filtros</button>
    </section>
  `;
}

function renderMarketCard(item) {
  const rarityTone = item.rarity.toLowerCase().includes("raro");

  return `
    <article
      class="item-card card-surface flex cursor-pointer flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lift"
      data-action="open-detail"
      data-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="Abrir ${escapeAttr(item.name)}"
    >
      <div class="relative flex min-h-0 flex-[1.55] items-center justify-center p-3" style="background:${item.accent}">
        <img class="h-[78%] w-[78%] object-contain" src="${item.image}" alt="${escapeAttr(item.name)}" />
        ${
          rarityTone
            ? `<span class="absolute right-2 top-2 flex max-w-[86%] items-center gap-1 rounded-full bg-highlight px-2.5 py-1 font-display text-[0.62rem] font-bold uppercase leading-none text-ink shadow-sm">
                <span class="h-3 w-3 text-ink">${icons.star}</span>${item.rarity}
              </span>`
            : ""
        }
      </div>
      <div class="flex min-h-[5.7rem] flex-col justify-between p-3.5">
        <h2 class="line-clamp-2 font-display text-base font-semibold leading-tight text-ink">${item.name}</h2>
        <div class="mt-2 flex min-w-0 items-center gap-2">
          <img class="h-6 w-6 shrink-0 rounded-full object-cover" src="${item.owner.avatar}" alt="Avatar de ${escapeAttr(item.owner.name)}" />
          <p class="truncate text-sm font-extrabold text-muted">${item.owner.name}, ${item.owner.age} anos</p>
        </div>
      </div>
    </article>
  `;
}

function renderSkeletonCard() {
  return `
    <article class="item-card overflow-hidden rounded-[24px] bg-white/70 shadow-soft" aria-hidden="true">
      <div class="skeleton h-[65%] w-full"></div>
      <div class="p-4">
        <div class="skeleton h-4 w-3/4 rounded-full"></div>
        <div class="mt-4 flex items-center gap-2">
          <div class="skeleton h-6 w-6 rounded-full"></div>
          <div class="skeleton h-3 w-20 rounded-full"></div>
        </div>
      </div>
    </article>
  `;
}

function renderEmptyState() {
  return `
    <section class="mt-10 rounded-[32px] bg-white px-6 py-10 text-center shadow-soft">
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
        <span class="h-10 w-10">${icons.sparkles}</span>
      </div>
      <h2 class="mt-5 font-display text-2xl font-bold text-ink">Nada por aqui ainda</h2>
      <p class="mt-2 text-base font-bold leading-6 text-muted">Tente outro filtro para encontrar uma troca brilhante.</p>
      <button class="flat-button mt-6 rounded-full bg-primary px-7 py-3 font-display text-lg font-semibold text-white" style="--button-shadow: var(--primary-shadow)" data-action="clear-filters" type="button">
        Limpar filtros
      </button>
    </section>
  `;
}

function renderDetail() {
  const item = getWantedItem();

  return `
    <div class="screen-enter min-h-dvh bg-canvas text-ink">
      <header class="fixed-inside top-fixed flex h-16 items-center justify-between rounded-b-[24px] border-b-4 border-slate-100 bg-white px-5 pb-1 shadow-soft">
        <button class="flex h-10 w-10 items-center justify-center rounded-full text-primary" type="button" data-action="go" data-view="explore" aria-label="Voltar">
          <span class="h-5 w-5">${icons.back}</span>
        </button>
        <p class="font-display text-lg font-bold text-ink">PokeBazar</p>
        <button class="flex h-10 w-10 items-center justify-center rounded-full text-primary" type="button" aria-label="Favoritar">
          <span class="h-5 w-5">${icons.heart}</span>
        </button>
      </header>

      <main class="pb-36 pt-16" role="main">
        <section class="relative aspect-square w-full overflow-hidden bg-black">
          <img class="h-full w-full object-cover" src="${item.hero}" alt="${escapeAttr(item.name)}" />
          <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent"></div>
        </section>

        <section class="relative -mt-12 rounded-t-[32px] bg-white px-5 pb-8 pt-8 shadow-[0_-10px_24px_rgba(45,49,66,0.08)]">
          <div class="flex flex-wrap gap-2">
            <span class="rounded-full bg-[#FFDF9B] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#5b3b00]">${item.rarity}</span>
            <span class="rounded-full bg-[#59FDC5] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#007354]">${item.category}</span>
          </div>

          <h1 class="mt-4 break-words font-display text-[2.5rem] font-bold leading-[1.05] text-primary">${item.name}</h1>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <div class="rounded-[24px] bg-[#FFF0EF] p-4">
              <p class="text-xs font-extrabold uppercase tracking-[0.08em] text-muted">Poder de troca</p>
              <div class="mt-2 flex text-highlight">${renderStars(item.power)}</div>
            </div>
            <div class="rounded-[24px] bg-[#FFF0EF] p-4">
              <p class="text-xs font-extrabold uppercase tracking-[0.08em] text-muted">Condição</p>
              <p class="mt-2 truncate font-display text-xl font-semibold text-[#00A67C]">${item.condition}</p>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between rounded-[32px] border-2 border-[#FFE9E7] bg-white p-4">
            <div class="flex min-w-0 items-center gap-3">
              <img class="h-14 w-14 shrink-0 rounded-full border-4 border-highlight object-cover p-1" src="${item.owner.avatar}" alt="Avatar de ${escapeAttr(item.owner.name)}" />
              <div class="min-w-0">
                <p class="text-xs font-extrabold uppercase tracking-[0.08em] text-muted">Dono</p>
                <p class="truncate font-display text-xl font-semibold text-ink">${item.owner.name}, ${item.owner.age} anos</p>
              </div>
            </div>
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5FFF6] text-[#00A67C]">${icons.shield}</span>
          </div>

          <div class="mt-6">
            <h2 class="font-display text-lg font-semibold text-ink">Sobre o item</h2>
            <p class="mt-2 text-base font-semibold leading-7 text-[#5A403F]">${item.description}</p>
          </div>
        </section>
      </main>

      <div class="fixed-inside bottom-fixed safe-bottom bg-gradient-to-t from-canvas via-canvas px-5 pb-5 pt-8">
        <button class="flat-button flex h-16 w-full items-center justify-center gap-3 rounded-full bg-primary font-display text-2xl font-semibold text-white" style="--button-shadow: var(--primary-shadow)" data-action="go" data-view="backpack" type="button">
          <span class="h-5 w-5">${icons.swap}</span>
          Quero Trocar!
        </button>
      </div>
    </div>
  `;
}

function renderBackpack() {
  const filteredItems = getFilteredBackpackItems();
  const canChoose = Boolean(state.offeredId);

  return `
    <div class="screen-enter min-h-dvh bg-canvas text-ink">
      <header class="fixed-inside top-fixed flex h-16 items-center justify-between border-b-4 border-slate-100 bg-white px-5 pb-1">
        <div class="flex min-w-0 items-center gap-3">
          <button class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-primary" type="button" data-action="go" data-view="detail" aria-label="Voltar">
            <span class="h-5 w-5">${icons.back}</span>
          </button>
          <h1 class="truncate font-display text-xl font-bold text-primary">Minha Mochila</h1>
        </div>
        <img class="h-10 w-10 rounded-full border-2 border-primary object-cover p-0.5" src="${assets.avatars.backpack}" alt="Avatar do perfil" />
      </header>

      <main class="px-5 pb-44 pt-[94px]" role="main">
        <section>
          <h2 class="font-display text-3xl font-bold leading-tight text-ink">O que você oferece?</h2>
          <p class="mt-2 text-lg font-bold leading-7 text-muted">Escolha um item da sua mochila para propor a troca.</p>
        </section>

        <label class="relative mt-6 block">
          <span class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted">${icons.search}</span>
          <input
            class="h-14 w-full rounded-full border-0 bg-white px-12 text-base font-bold text-ink shadow-sm outline-none placeholder:text-muted focus:ring-4 focus:ring-accent/20"
            data-action="bag-search"
            type="search"
            value="${escapeAttr(state.bagSearch)}"
            placeholder="Procurar cartas..."
            aria-label="Procurar na mochila"
          />
        </label>

        ${
          filteredItems.length
            ? `<section class="mt-7 grid grid-cols-2 gap-4">${filteredItems.map(renderBackpackCard).join("")}</section>`
            : `<section class="mt-8 rounded-[28px] bg-white px-5 py-8 text-center shadow-soft">
                <h3 class="font-display text-2xl font-bold text-ink">Mochila sem match</h3>
                <p class="mt-2 font-bold text-muted">Tente outro nome para achar seu item.</p>
              </section>`
        }
      </main>

      <div class="fixed-inside bottom-fixed safe-bottom bg-gradient-to-t from-canvas via-canvas px-5 pb-[6.5rem] pt-7">
        <button
          class="flat-button flex h-14 w-full items-center justify-center rounded-full ${canChoose ? "bg-primary text-white" : "bg-slate-200 text-muted"} font-display text-xl font-semibold"
          style="--button-shadow: ${canChoose ? "var(--primary-shadow)" : "#CBD5E1"}"
          data-action="confirm-offer"
          type="button"
          ${canChoose ? "" : "disabled"}
        >
          Escolher
        </button>
      </div>
      ${renderBottomNav("backpack")}
    </div>
  `;
}

function renderBackpackCard(item) {
  const selected = state.offeredId === item.id;
  const rarityTone = item.rarity === "Raro";

  return `
    <button
      class="relative flex min-h-[286px] flex-col overflow-hidden rounded-[24px] bg-white text-left shadow-soft transition ${selected ? "border-4 border-accent shadow-mint" : "border-2 border-transparent"}"
      data-action="choose-offer"
      data-id="${item.id}"
      type="button"
      aria-pressed="${selected}"
    >
      <span class="flex aspect-[3/4] w-full items-center justify-center p-4" style="background:${item.bg}">
        <img class="h-[72%] w-[82%] object-contain" src="${item.image}" alt="${escapeAttr(item.name)}" />
      </span>
      <span class="flex w-full flex-1 flex-col justify-center gap-1 px-4 py-3">
        <span class="w-fit rounded-full ${rarityTone ? "bg-[#FFDF9B] text-[#5B3B00]" : "bg-slate-200 text-muted"} px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-[0.12em]">${item.rarity}</span>
        <span class="line-clamp-2 font-display text-xl font-semibold leading-tight text-ink">${item.name}</span>
      </span>
      ${
        selected
          ? `<span class="selection-check absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white shadow">
              <span class="h-4 w-4">${icons.check}</span>
            </span>`
          : ""
      }
    </button>
  `;
}

function renderTrade() {
  const wanted = getWantedItem();
  const offered = getOfferedItem() || backpackItems[1];

  return `
    <div class="screen-enter min-h-dvh bg-canvas text-ink">
      <header class="fixed-inside top-fixed flex h-16 items-center justify-between border-b-4 border-slate-100 bg-white px-5 pb-1">
        <button class="flex h-10 w-10 items-center justify-center rounded-full text-primary" type="button" data-action="go" data-view="backpack" aria-label="Voltar">
          <span class="h-5 w-5">${icons.back}</span>
        </button>
        <h1 class="font-display text-lg font-bold text-ink">PokeBazar</h1>
        <span class="h-10 w-10" aria-hidden="true"></span>
      </header>

      <main class="px-5 pb-36 pt-[88px]" role="main">
        <div class="mx-auto w-fit rounded-full bg-[#FFDAD8] px-4 py-1 text-sm font-black uppercase text-[#410007]">Troca de cards</div>

        <section class="mt-3 flex flex-col items-center gap-7">
          ${renderTradeCircle("Você quer...", wanted.name, wanted.image, "primary", "#FFF0EF")}

          <div class="swap-pulse flat-button flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-accent text-white" style="--button-shadow: var(--accent-shadow)">
            <span class="h-7 w-7">${icons.swapVertical}</span>
          </div>

          ${renderTradeCircle("Em troca de...", offered.name, offered.image, "accent", "#F0FFF9")}
        </section>

        <section class="mt-8 flex items-center gap-4 rounded-[28px] border-2 border-slate-100 bg-white/80 p-4 shadow-soft backdrop-blur">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF6D9] text-highlight">
            <span class="h-8 w-8">${icons.sparkles}</span>
          </div>
          <div class="min-w-0">
            <h2 class="font-display text-xl font-bold text-ink">Troca justa!</h2>
            <p class="text-sm font-extrabold leading-5 text-muted">${wanted.name} e ${offered.name} têm poderes parecidos.</p>
          </div>
        </section>
      </main>

      <div class="fixed-inside bottom-fixed safe-bottom bg-gradient-to-t from-canvas via-canvas px-5 pb-5 pt-8">
        <button class="flat-button flex h-16 w-full items-center justify-center rounded-full bg-accent font-display text-xl font-semibold text-white" style="--button-shadow: var(--accent-shadow)" data-action="confirm-trade" type="button">
          Confirmar Troca!
        </button>
      </div>
    </div>
  `;
}

function renderTradeCircle(label, name, image, colorName, bg) {
  const tone = colorName === "accent" ? "border-accent/25 text-accent bg-accent" : "border-primary/25 text-primary bg-primary";

  return `
    <div class="flex flex-col items-center text-center">
      <p class="mb-3 flex items-center gap-2 font-display text-lg font-bold text-muted">
        <span class="h-5 w-5 ${colorName === "accent" ? "text-accent" : "text-highlight"}">${colorName === "accent" ? icons.check : icons.star}</span>
        ${label}
      </p>
      <div class="relative">
        <div class="flex h-64 w-64 items-center justify-center rounded-full border-4 ${tone.split(" ")[0]} bg-white p-7 shadow-soft">
          <div class="flex h-full w-full items-center justify-center overflow-hidden rounded-full" style="background:${bg}">
            <img class="h-[82%] w-[82%] object-contain" src="${image}" alt="${escapeAttr(name)}" />
          </div>
        </div>
        <span class="absolute -bottom-3 left-1/2 max-w-[80%] -translate-x-1/2 truncate rounded-full ${tone.split(" ")[2]} px-6 py-2 font-display text-lg font-semibold text-white shadow-lg">${name}</span>
      </div>
    </div>
  `;
}

function renderSuccess() {
  return `
    <div class="screen-enter flex min-h-dvh flex-col items-center justify-center bg-canvas px-6 py-12 text-center text-ink" role="main">
      <div class="relative flex h-72 w-72 items-center justify-center">
        <div class="absolute inset-6 rounded-full bg-[#FFF0EF]"></div>
        <svg class="paper-rocket relative h-60 w-60" viewBox="0 0 240 240" fill="none" aria-label="Foguete de papel vibrante" role="img">
          <path class="rocket-trail" d="M88 157c-22 7-38 20-50 39 24-4 42-12 56-26" fill="#FFD166"/>
          <path class="rocket-trail" d="M103 173c-12 15-17 28-17 43 18-11 31-24 39-39" fill="#00D09C"/>
          <path d="M43 116 206 36l-54 166-39-55-70-31Z" fill="#FFFFFF" stroke="#2D3142" stroke-width="8" stroke-linejoin="round"/>
          <path d="M113 147 206 36 87 129l26 18Z" fill="#FF5A5F" stroke="#2D3142" stroke-width="8" stroke-linejoin="round"/>
          <path d="m113 147-4 48 43 7" fill="#FFE9E7"/>
          <path d="m113 147-4 48 43 7" stroke="#2D3142" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="62" cy="57" r="10" fill="#FFD166"/>
          <circle cx="181" cy="92" r="8" fill="#00D09C"/>
          <path d="m59 88 7 16 17 7-17 7-7 16-7-16-16-7 16-7 7-16Z" fill="#FFD166"/>
        </svg>
      </div>
      <h1 class="mt-4 font-display text-[2.6rem] font-bold leading-none text-primary">Proposta Enviada!</h1>
      <p class="mt-4 max-w-[18rem] text-xl font-bold leading-8 text-muted">Agora é só esperar o dono responder.</p>
      <button class="flat-button mt-10 h-14 w-full max-w-80 rounded-full bg-white px-5 font-display text-lg font-semibold text-primary" style="--button-shadow: #E6EAF2" data-action="restart" type="button">
        Voltar ao PokeBazar
      </button>
    </div>
  `;
}

function renderBottomNav(active) {
  const links = [
    { id: "explore", label: "Explorar", icon: icons.home, view: "explore" },
    { id: "trade", label: "Trocar", icon: icons.swap, view: state.offeredId ? "trade" : "backpack" },
    { id: "backpack", label: "Mochila", icon: icons.bag, view: "backpack" },
    { id: "profile", label: "Perfil", icon: icons.user, view: "explore" }
  ];

  return `
    <nav class="fixed-inside bottom-fixed safe-bottom rounded-t-[32px] border-t-4 border-slate-100 bg-white px-5 pb-5 pt-3 shadow-[0_-8px_18px_rgba(45,49,66,0.08)]" aria-label="Navegação principal">
      <div class="grid grid-cols-4 gap-2">
        ${links
          .map((link) => {
            const isActive = active === link.id;
            return `
              <button class="${isActive ? "bg-[#FFF1F2] text-primary" : "text-[#8EA0B8]"} flex min-w-0 flex-col items-center justify-center rounded-2xl px-2 py-2 font-display text-[0.66rem] font-bold uppercase tracking-[0.08em]" type="button" data-action="go" data-view="${link.view}">
                <span class="mb-1 h-5 w-5">${link.icon}</span>
                <span class="truncate">${link.label}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </nav>
  `;
}

function renderStars(power) {
  return Array.from({ length: 5 }, (_, index) => {
    const active = index < power;
    return `<span class="h-5 w-5 ${active ? "text-highlight" : "text-slate-300"}">${icons.star}</span>`;
  }).join("");
}

function getFilteredMarketItems() {
  const query = normalize(state.exploreSearch);
  const category = state.category;

  return marketItems.filter((item) => {
    const matchesQuery = !query || normalize(`${item.name} ${item.owner.name} ${item.rarity}`).includes(query);
    const matchesCategory = category === "Tudo" || item.category === category;
    return matchesQuery && matchesCategory;
  });
}

function getFilteredBackpackItems() {
  const query = normalize(state.bagSearch);
  return backpackItems.filter((item) => !query || normalize(`${item.name} ${item.rarity}`).includes(query));
}

function normalize(value) {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeAttr(value) {
  return value.toString().replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;

  if (action === "open-detail") {
    state.wantedId = target.dataset.id;
    state.view = "detail";
    render();
    return;
  }

  if (action === "go") {
    state.view = target.dataset.view;
    state.magicOpen = false;
    render();
    return;
  }

  if (action === "focus-search") {
    const input = app.querySelector('[data-action="explore-search"]');
    input?.focus();
    return;
  }

  if (action === "toggle-magic") {
    state.magicOpen = !state.magicOpen;
    render();
    return;
  }

  if (action === "set-category") {
    state.category = target.dataset.category;
    state.magicOpen = false;
    render();
    return;
  }

  if (action === "set-rarity") {
    state.category = "Tudo";
    state.exploreSearch = target.dataset.rarity;
    state.magicOpen = false;
    render();
    return;
  }

  if (action === "clear-filters") {
    state.category = "Tudo";
    state.exploreSearch = "";
    state.magicOpen = false;
    render();
    return;
  }

  if (action === "choose-offer") {
    state.offeredId = target.dataset.id;
    render();
    return;
  }

  if (action === "confirm-offer" && state.offeredId) {
    state.view = "trade";
    render();
    return;
  }

  if (action === "confirm-trade") {
    state.view = "success";
    render();
    return;
  }

  if (action === "restart") {
    state.view = "explore";
    state.offeredId = "";
    state.exploreSearch = "";
    state.bagSearch = "";
    state.category = "Tudo";
    state.magicOpen = false;
    render();
  }
});

app.addEventListener("keydown", (event) => {
  const target = event.target.closest('[role="button"][data-action="open-detail"]');
  if (!target) return;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    target.click();
  }
});

app.addEventListener("input", (event) => {
  if (event.target.dataset.action === "explore-search") {
    const cursor = event.target.selectionStart;
    state.exploreSearch = event.target.value;
    state.category = "Tudo";
    render({ keepScroll: true });
    restoreInput("[data-action='explore-search']", cursor);
  }

  if (event.target.dataset.action === "bag-search") {
    const cursor = event.target.selectionStart;
    state.bagSearch = event.target.value;
    render({ keepScroll: true });
    restoreInput("[data-action='bag-search']", cursor);
  }
});

function restoreInput(selector, cursor) {
  requestAnimationFrame(() => {
    const input = app.querySelector(selector);
    input?.focus();
    input?.setSelectionRange(cursor, cursor);
  });
}

render();

window.setTimeout(() => {
  state.loading = false;
  render();
}, 650);
