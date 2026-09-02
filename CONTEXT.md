# Portfolio Context

The presentation and communication layer for Crystian's professional portfolio, showcasing engineering work, design systems, and contact avenues.

## Language

**Showcase Item**:
A featured project or engineering case study highlighted on the portfolio with interactive media, technical breakdown, and repository/demo links.
_Avoid_: Work, sample, post

**Case Study**:
A long-form technical breakdown formatted in Markdown/MDX that details the architecture, design choices, and retrospective for a Showcase Item.
_Avoid_: Blog post, article, paper

**TUI (Terminal User Interface)**:
The primary accessible viewport design employing terminal-inspired window frames, status bars, and keyboard shortcuts without sacrificing WCAG accessibility.
_Avoid_: CLI gimmick, fake shell

**Pane**:
A top-level interactive screen within the TUI (e.g. `whoami`, `projects`, `skills`, `experience`, `contact`) accessible via keybindings, direct tab selection, or URL hashes.
_Avoid_: Page, tab, route

**Status Bar**:
The persistent bottom viewport ribbon displaying active keyboard shortcuts, currently active Pane, system status, and accessibility indicators.
_Avoid_: Footer, bottom bar

**ASCII Visual**:
A high-contrast monospace text illustration representing Crystian's avatar, branding, or section headers with full alt-text accessibility.
_Avoid_: Text drawing, ASCII dump

**Skill**:
A verified technical discipline, toolchain, or language demonstrated throughout the portfolio.
_Avoid_: Buzzword, tag

**Inquiry**:
A direct message or collaboration offer submitted by a visitor through the portfolio.
_Avoid_: Lead, ticket, contact form submission

**Experience**:
A chronological milestone in Crystian's professional journey, including roles, contributions, and engineering impact.
_Avoid_: Job history, resume line

## Relationships

- A **Showcase Item** demonstrates one or more **Skills**
- A **Showcase Item** may feature a detailed **Case Study**
- An **Experience** milestone applies multiple **Skills**
- An **Inquiry** originates from an external visitor to initiate contact via the interactive TUI form with instant terminal feedback
- The **TUI** hosts multiple **Panes**, with the active **Pane** indicated in the **Status Bar**
- Each **Pane** exposes dedicated keyboard shortcuts displayed in the **Status Bar**

## Example dialogue

> **Dev:** "When a visitor presses the key `2`, does the TUI route to the **Showcase Items**?"
> **Domain expert:** "Yes — pressing `2` or clicking the tab switches to the projects **Pane**, updates the URL hash, and adjusts the hints in the **Status Bar**."

## Flagged ambiguities

- "Rust backend" was initially proposed for hosting and serving — resolved: dropped in favor of a pure static Vite SPA on Vercel; dynamic features like **Inquiries** use serverless/client-side integrations.
