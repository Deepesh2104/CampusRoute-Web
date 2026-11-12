# CampusRoute-Web

Angular (Nx) client for **CampusRoute** — public landing, learner app, and future portals.

## Stack

- **Nx 20** + **Angular 19** (standalone, SCSS)
- Path aliases: `@campusroute/*`
- Architecture: see [CampusRoute-Platform/Docs/architecture/client/](../CampusRoute-Platform/Docs/architecture/client/)

## Quick start

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Folder structure

```text
CampusRoute-Web/
├── apps/
│   ├── web/                 # Shell: layouts, app routes
│   └── web-e2e/
├── libs/
│   ├── core/                # auth, consent, http, config
│   ├── shared/              # ui, models, util
│   ├── marketing/landing/   # Public landing (migrate from legacy/)
│   ├── domains/             # discover, finance, profile, …
│   └── platform/shell/      # Learner dashboard & journey nav
├── legacy/                  # Original static landing HTML
├── tools/scaffold-libs.ps1
├── nx.json
└── package.json
```

Each domain lib uses:

`src/{api,application,data-access,domain,feature,ui}/`

## Scripts

| Script | Command |
|--------|---------|
| Dev | `npm start` |
| Build | `npm run build` |
| Lint | `npm run lint` |

## API proxy

`apps/web/proxy.conf.json` → `https://localhost:5001/v1` when .NET API runs locally.

## Next steps

1. Port sections from `legacy/CampusRoute AI – Landing page.html` into `libs/marketing/landing`
2. Implement `core-auth` and wire `/auth/*`
3. Add `domains-finance` cost simulator
