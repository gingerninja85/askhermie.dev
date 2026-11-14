# askhermie.dev

An independent technical workshop for troubleshooting, automation, cybersecurity practice and small hardware projects.

## Stack

- Astro
- Svelte islands for interactive UI
- Plain CSS
- Static-first content
- Cloudflare Pages target

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages settings

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 22.12+
```

## Public sections

- `/` — workshop and entry points
- `/resources/` — searchable catalog with plain-English first steps
- `/skills/` — reusable Hermes instructions and integrations
- `/tools/` — recommendations organized by task
- `/lab/` — small exercises using catalog tools
- `/build-log/` — open-source changes and discovery notes
- `/about/` — workshop background and publishing approach

Catalog entries and topic mappings live in `src/pages/resources.astro`. Astro renders the entries at build time and a Svelte island adds full-text filtering and command copying in the browser.
