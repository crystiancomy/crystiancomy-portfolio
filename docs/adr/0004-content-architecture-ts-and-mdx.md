# In-Repo TypeScript Schemas and MDX for Content

Store portfolio metadata in type-safe TypeScript files and long-form Case Studies in Markdown/MDX within the repository.

## Context

We evaluated whether to use an external Headless CMS (e.g. Sanity, Contentful) versus keeping all content in-tree. Because this is a developer portfolio, versioning content alongside code provides build-time validation and eliminates third-party services.

## Decision

We will define structured metadata (**Capabilities**, **Showcase Items** index, **Experiences**) as strict TypeScript/Zod structures in `src/data/`, and deep-dive **Case Studies** as Markdown/MDX documents.

## Consequences

- **Pros:** Zero external API dependencies, zero hosting overhead, git-backed revision history, type safety during builds.
- **Cons:** Content changes require committing to the repository and triggering a Vercel deployment.
