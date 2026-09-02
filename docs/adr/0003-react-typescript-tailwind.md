# React, TypeScript, and Tailwind CSS v4 for UI Layer

Adopt React 19 with TypeScript and Tailwind CSS v4 for the portfolio frontend.

## Context

We need a flexible, highly expressive component system capable of rendering polished visual aesthetics, interactive filters, smooth micro-animations, and directly integrating designs generated from Google Stitch / StitchMCP.

## Decision

We chose React 19 with TypeScript and Tailwind CSS v4 running on Vite. This aligns with StitchMCP's JSX/Tailwind code output, enables component reusability, and provides access to rich interaction libraries (such as Motion and Lucide icons).

## Consequences

- **Pros:** Native alignment with Google Stitch design tools, strict type-safety for portfolio data models (**Showcase Items**, **Capabilities**, **Inquiries**), broad ecosystem of animation and UI primitives.
- **Cons:** Client-side JavaScript bundle payload (though negligible for a Vite-bundled modern React application).
