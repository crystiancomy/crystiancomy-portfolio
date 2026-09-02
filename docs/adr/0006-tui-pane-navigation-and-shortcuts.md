# TUI Pane Navigation and Keyboard Shortcuts

Implement a tabbed Pane navigation model controlled via keyboard shortcuts (`1-5`, arrows, `?`), mouse/touch tabs, and bidirectional URL hash synchronization.

## Context

A TUI interface needs an intuitive, responsive way to navigate between distinct areas of content (overview, projects, capabilities, experience, contact). A continuous vertical scroll breaks the illusion and structure of a terminal workspace.

## Decision

We will structure the interface into distinct, full-viewport **Panes** inside a fixed TUI window:
- Number keys `1` through `5` switch Panes directly.
- Arrow keys or `Tab` cycle through items within the active Pane.
- URL hashes (`/#whoami`, `/#projects`, `/#capabilities`, `/#experience`, `/#contact`) synchronize bidirectionally with the active Pane to support direct linking and browser back/forward history.
- A **Status Bar** displays contextual shortcuts and mobile tabs ensure touch accessibility.

## Consequences

- **Pros:** Authentic terminal ergonomics, clean viewport containment, instantaneous switching, full deep-linking support for external visitors.
- **Cons:** Content in inactive Panes is hidden from immediate initial view, requiring clear navigation affordances and search-engine indexable markup.
