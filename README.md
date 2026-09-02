<div align="center">

```
   ____                _   _              ____             __   __
  / ___|_ __ _   _ ___| |_(_) __ _ _ __  / ___|___  _ __ __\ \ / /
 | |   | '__| | | / __| __| |/ _` | '_ \| |   / _ \| '_ ` _ \ V / 
 | |___| |  | |_| \__ \ |_| | (_| | | | | |__| (_) | | | | | | |  
  \____|_|   \__, |___/\__|_|\__,_|_| |_|\____\___/|_| |_| |_|_|  
             |___/                                                
```

# Crystian Fernando Lopes de Oliveira
### Backend Developer & DevOps Enthusiast · [@crystiancomy](https://github.com/crystiancomy)

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=flat-square)](LICENSE)
[![English C1](https://img.shields.io/badge/English-C1_Certified_(EF_SET)-50FA7B?style=flat-square)](https://www.efset.org/)

[Live Portfolio](https://crystiancomy.vercel.app) · [Report Bug](https://github.com/crystiancomy/portfolio/issues) · [LinkedIn](https://www.linkedin.com/in/crystian-fernando-lopes-de-oliveira-8a9077200/?locale=en)

</div>

---

## 💻 About The Project

A high-performance, accessible **Terminal User Interface (TUI)** portfolio built with **React 19**, **TypeScript**, and **Tailwind CSS v4**. 

Designed around the **Om Theme** (a darker, refined Dracula palette with `#712D76` accents), this portfolio delivers an authentic retro terminal experience with modern web ergonomics—providing instant keyboard navigation, bidirectional URL hash synchronization, bilingual internationalization (PT/EN), and strict adherence to WCAG AA accessibility standards.

### ✨ Key Features

- **⌨️ Dual-Mode TUI Navigation:** Seamless keyboard shortcuts (`1-5` for direct pane switching, `?` for interactive cheatsheet, `Esc` to dismiss) alongside touch-friendly tabs and deep-linking URL hash sync (`/#whoami`, `/#projects`, `/#skills`, `/#experience`, `/#contact`).
- **🌐 Full Bilingual Internationalization (i18n):** Native support for **Português** and **English** with persistent `localStorage` preference and browser language detection.
- **🎨 Om Theme Design System:** Tailored Dracula dark mode (`#141218` background, `#712D76` primary purple, `#8BE9FD` cyan, `#50FA7B` green, and `#BD93F9` lilac accents) with subtle monospace CRT scanlines and blinking prompt block cursors.
- **📟 Interactive TUI Terminal Dispatcher:** Functional contact terminal with live packet transmission simulation, TLS handshake log, and single-click clipboard copiers.
- **♿ First-Class Accessibility:** Monospace ASCII banners backed by descriptive screen-reader labels, semantic HTML5 structure, visible focus rings, and high-contrast color tokens.

---

## 🧭 Panes Overview

| Pane | Shortcut | Description |
| :--- | :---: | :--- |
| **`[1] whoami`** | <kbd>1</kbd> | Identity banner, bio, system telemetry, and official contact channels. |
| **`[2] projects`** | <kbd>2</kbd> | Curated showcase items filterable by category (Rust & Desktop, Backend & SaaS, DevOps & Infra). |
| **`[3] skills`** | <kbd>3</kbd> | Technical skills matrix with interactive domain inspector. |
| **`[4] experience`** | <kbd>4</kbd> | IT operations log, pre-dev career milestones, academic coursework, and languages. |
| **`[5] contact`** | <kbd>5</kbd> | Direct message dispatcher with real-time simulated packet terminal logs. |

---

## 🛠️ Tech Stack & Architecture

- **Runtime & UI:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` and custom `@theme` tokens
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/) Static Edge Network with single-page routing rewrites

---

## 🚀 Featured Engineering Projects

### 1. [RL Overlay](https://github.com/crystiancomy)
> **High-Performance Native Rocket League Overlay in Rust & Tauri v2**
- Multiprocess architecture pairing an async TCP socket client in Rust (`127.0.0.1:49123`) with Serde JSON deserialization.
- Click-through React 19 HUD with native OS calls (`set_ignore_cursor_events`), eliminating input lag during matches.
- Admin dashboard with scoreboard automation, match GUID deduplication, and i18n support.

### 2. Intim-e SaaS
> **Legal Workflow & Diligence Automation Platform**
- Resilient NestJS (TypeScript) backend with PostgreSQL, Prisma ORM, and Redis/BullMQ background job queues.
- Automated webhook and WhatsApp API integrations for real-time judicial notifications.

### 3. Agenda na Bio SaaS
> **Multi-Tenant Online Booking Platform**
- Next.js (App Router), React 19, TypeScript, PostgreSQL, Prisma ORM, and Tailwind CSS.
- Secure HTTP-only cookies, signed JWT sessions, and mobile-first WCAG AA touch targets ($\ge$ 44px).

### 4. Homelab & Self-Hosted Infrastructure
> **Personal Linux Server & Containerized Microservices**
- Debian Linux server managing internal microservices via Docker & Docker Compose.
- Encrypted private mesh networking with Tailscale and Nginx reverse proxy with automated SSL/TLS.

---

## ⚡ Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or later)
- `npm` or `pnpm`

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/crystiancomy/crystiancomy-portfolio.git

# Navigate into the project
cd crystiancomy-portfolio

# Install dependencies
npm install

# Start local development server (with HMR)
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

```bash
# Typecheck with tsc and bundle with Vite
npm run build

# Preview production build locally
npm run preview
```

---

## 📬 Contact & Connect

- **Email:** [crystianfernando059@gmail.com](mailto:crystianfernando059@gmail.com)
- **LinkedIn:** [linkedin.com/in/crystian-fernando-lopes-de-oliveira](https://www.linkedin.com/in/crystian-fernando-lopes-de-oliveira-8a9077200/?locale=en)
- **GitHub:** [@crystiancomy](https://github.com/crystiancomy)
- **Location:** Comodoro-MT, Brazil (Available for Remote Work)

---

<div align="center">
  <sub>Built with care, terminals, and Clean Architecture · Om Palette · 2026</sub>
</div>
