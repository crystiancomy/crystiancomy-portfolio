# Pure Static Vite Application on Vercel

Build and deploy the portfolio as a pure static Single Page Application (SPA) using Vite, deployed directly to Vercel's edge network.

## Context

The initial direction considered a single-binary Rust Axum backend bundling the frontend. However, for a personal portfolio, high iteration speed, instantaneous edge deployment, and zero server maintenance outweigh the need for a dedicated stateful server runtime.

## Decision

We dropped the Rust single-binary concept completely. The project will be structured as a pure static Vite application using Tailwind CSS and modern web standards, deployed natively on Vercel.

## Consequences

- **Pros:** Zero-maintenance serverless hosting on Vercel, instant global CDN edge distribution, automatic preview deployments on git push, fast frontend build cycles.
- **Cons:** Any dynamic server features (such as contact form email dispatch or dynamic API integrations) must be handled via third-party client services (e.g. Resend / Formspree / Web3Forms) or lightweight Vercel serverless functions rather than a custom Rust server.
