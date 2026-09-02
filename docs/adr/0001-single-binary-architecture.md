# [SUPERSEDED] Single-binary Axum Service with Embedded Frontend

> **Status:** Superseded by [0002-pure-static-vite-app-vercel.md](./0002-pure-static-vite-app-vercel.md)
>
> Dropped in favor of a pure static Vite SPA hosted on Vercel to optimize iteration speed and global CDN delivery.

## Context

Portfolios are conventionally hosted as static sites on third-party CDNs (e.g. Vercel, Netlify, Cloudflare Pages). However, we require a Rust backend for custom backend capabilities (API integrations, message processing, telemetry).

## Decision

We decided to structure the project as a single deployable binary. The Vite frontend builds to static assets that are embedded (via `rust-embed` or served from a bundled dist directory) and routed through Axum fallback handlers, alongside dedicated `/api/*` endpoints.

## Consequences

- **Pros:** Single deployment target, zero CORS configuration, atomic deployments of frontend and backend, predictable resource footprint.
- **Cons:** Frontend asset updates require a binary rebuild or redeploy, slightly more involved local dev setup (running Vite dev server proxying to Cargo watch during development).
