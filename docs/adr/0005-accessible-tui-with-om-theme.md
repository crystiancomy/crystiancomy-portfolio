# Accessible TUI Design System with Om Theme Palette

Adopt a Terminal User Interface (TUI) design aesthetic styled after the "Om Theme" (a deep, dark variant of Dracula) with `#712D76` purple accents, built with strict WCAG accessibility.

## Context

Most developer portfolios either look like generic SaaS marketing pages or employ clunky, inaccessible fake terminal emulators that alienate mobile users and screen readers. We want the charm and hacker personality of a TUI with modern web accessibility and responsive ergonomics.

## Decision

We will design the UI around accessible TUI motifs:
- **Palette:** Om Theme (darker Dracula: deep near-black background `#141218` / `#1b1923`, soft foreground `#f8f8f2`, muted comment purple `#6272a4`, and primary accent `#712D76` blended with Dracula lilac `#bd93f9` and cyan `#8be9fd`).
- **Layout:** TUI window frames, status line / breadcrumbs, split panes, and monospace typography (JetBrains Mono / Fira Code).
- **Accessibility & Responsiveness:** Clean semantic HTML (nav, main, section, articles), aria labels, screen-reader text for all **ASCII Visuals**, full keyboard navigation support alongside standard mouse/touch interactions for mobile screens.

## Consequences

- **Pros:** Unique, memorable identity that highlights terminal craftsmanship while retaining 100% web accessibility on mobile and desktop.
- **Cons:** Requires deliberate care with contrast ratios (ensuring `#712D76` meets AA contrast against dark backgrounds by using it with lighter accents or glowing borders) and responsive layout fallbacks on narrow mobile viewports.
