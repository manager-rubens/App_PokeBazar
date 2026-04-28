# PokeBazar

Protótipo web mobile-first do fluxo Explorar -> Detalhe do Item -> Minha Mochila -> Balança de Troca -> Sucesso.

## Como testar

Abra `index.html` no navegador.

Opcionalmente, rode um servidor estático na pasta do projeto:

```bash
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173`.

## Notas

- Site estático em HTML, Tailwind CSS v3 via CDN e JavaScript leve.
- Dados mockados ficam em `src/app.js`, separados do estado e das funções de renderização.
- Não há backend, autenticação, persistência real, chat ou pagamentos.
