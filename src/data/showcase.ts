import type { Language } from '../context/LanguageContext';

export interface ShowcaseItem {
  id: string;
  category: 'desktop' | 'backend' | 'infra';
  title: string;
  subtitle: Record<Language, string>;
  command: string;
  summary: Record<Language, string>;
  bullets: Record<Language, string[]>;
  techStack: string[];
  repoUrl?: string;
  featured: boolean;
}

export const PROJECT_CATEGORIES = {
  pt: [
    { id: 'ALL', label: 'TODOS' },
    { id: 'desktop', label: 'Rust & Desktop' },
    { id: 'backend', label: 'Backend & SaaS' },
    { id: 'infra', label: 'DevOps & Infra' }
  ],
  en: [
    { id: 'ALL', label: 'ALL' },
    { id: 'desktop', label: 'Rust & Desktop' },
    { id: 'backend', label: 'Backend & SaaS' },
    { id: 'infra', label: 'DevOps & Infra' }
  ]
};

export const SHOWCASE_DATA: ShowcaseItem[] = [
  {
    id: "rl-overlay",
    category: "desktop",
    title: "RL Overlay",
    subtitle: {
      pt: "Overlay Nativo de Alta Performance para Rocket League",
      en: "High-Performance Native Overlay for Rocket League"
    },
    command: "git clone https://github.com/crystiancomy/rl-overlay",
    summary: {
      pt: "Aplicação desktop cross-platform (Windows, Linux, macOS) de baixíssima latência para leitura e exibição em tempo real de estatísticas de telemetria de Rocket League.",
      en: "Cross-platform desktop application (Windows, Linux, macOS) engineered for ultra-low latency reading and real-time visualization of Rocket League telemetry."
    },
    bullets: {
      pt: [
        "Arquitetura multiprocesso em Rust e Tauri v2 com cliente TCP assíncrono em thread secundária para conexão direta via socket nativo (127.0.0.1:49123) com reconexão automática e deserialização Serde.",
        "Interface click-through em React 19 e TypeScript com chamadas nativas ao SO (set_ignore_cursor_events), eliminando input lag durante partidas competitivas.",
        "Painel administrativo com suporte a internacionalização (PT/EN), lógica de automação para placares e deduplicação de eventos por GUID de partida."
      ],
      en: [
        "Multiprocess architecture in Rust and Tauri v2 with an async TCP client on a dedicated background thread for direct native socket connection (127.0.0.1:49123) with auto-reconnect and Serde deserialization.",
        "Click-through overlay interface in React 19 and TypeScript utilizing native OS calls (set_ignore_cursor_events), eliminating input lag during competitive matches.",
        "Administrative dashboard with i18n support (PT/EN), scoreboard automation logic, and match event deduplication by game GUID."
      ]
    },
    techStack: ["Rust", "Tauri v2", "Async Rust (TCP)", "Serde", "React 19", "TypeScript", "Vite"],
    repoUrl: "https://github.com/crystiancomy",
    featured: true
  },
  {
    id: "intim-e-saas",
    category: "backend",
    title: "Intim-e SaaS",
    subtitle: {
      pt: "Plataforma de Gestão e Automação Judiciária",
      en: "Legal Diligence Management & Automation SaaS"
    },
    command: "npm install @intim-e/core",
    summary: {
      pt: "Engenharia de um MVP Software as a Service (SaaS) focado em automação, gestão de diligências e rotinas jurídicas, implantado em ambiente de produção para testes de validação.",
      en: "Engineering of a production-ready SaaS MVP focused on legal workflow automation, diligence tracking, and case management."
    },
    bullets: {
      pt: [
        "Arquitetura de backend resiliente utilizando NestJS (TypeScript), PostgreSQL com Prisma ORM e Redis/BullMQ para orquestração de filas assíncronas.",
        "Integração com webhooks e APIs externas (WhatsApp API) para disparo automatizado de notificações e alertas em tempo real aos usuários.",
        "Controle estrito de estado e modelagem relacional para conformidade e rastreabilidade processual."
      ],
      en: [
        "Resilient backend architecture utilizing NestJS (TypeScript), PostgreSQL with Prisma ORM, and Redis/BullMQ for asynchronous job queue orchestration.",
        "Webhook and external API integrations (WhatsApp API) for automated real-time alerts and user notification dispatches.",
        "Strict state machine design and relational data modeling for compliance and full legal auditability."
      ]
    },
    techStack: ["TypeScript", "NestJS", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "Docker"],
    featured: true
  },
  {
    id: "agenda-na-bio",
    category: "backend",
    title: "Agenda na Bio SaaS",
    subtitle: {
      pt: "Plataforma Multi-Tenant de Agendamento Online",
      en: "Multi-Tenant Online Appointment Scheduling SaaS"
    },
    command: "npx create-agenda-tenant",
    summary: {
      pt: "Plataforma multi-tenant com isolamento rigoroso de dados por cliente, permitindo que micro e pequenas empresas gerenciem equipes, serviços e regras de negócio com facilidade.",
      en: "Multi-tenant booking platform with strict client data isolation, enabling small businesses to seamlessly manage teams, services, and scheduling rules."
    },
    bullets: {
      pt: [
        "Fluxo de autenticação segura utilizando cookies HTTP-only, sessões JWT assinadas e middleware de validação de acesso para rotas administrativas.",
        "Otimização do fluxo de agendamento público mobile-first aderindo rigorosamente aos critérios de acessibilidade WCAG AA (alvos de toque >= 44px).",
        "Modelagem multi-inquilino com isolamento de schema e segurança ponta a ponta."
      ],
      en: [
        "Secure authentication pipeline utilizing HTTP-only cookies, signed JWT sessions, and route authorization middlewares.",
        "Mobile-first public booking experience built with strict adherence to WCAG AA accessibility standards (touch targets >= 44px).",
        "Multi-tenant data isolation architecture ensuring zero cross-tenant data leakage."
      ]
    },
    techStack: ["Next.js (App Router)", "React 19", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    featured: true
  },
  {
    id: "homelab-infra",
    category: "infra",
    title: "Infraestrutura Homelab & Servidor Self-Hosted",
    subtitle: {
      pt: "Servidor Pessoal Privado e Microsserviços Conteinerizados",
      en: "Personal Self-Hosted Server & Containerized Infrastructure"
    },
    command: "ssh crystian@homelab.local",
    summary: {
      pt: "Planejamento, implantação e manutenção contínua de servidor doméstico baseado em Debian Linux para hospedagem de microsserviços e ferramentas internas.",
      en: "Planning, deployment, and ongoing administration of a Debian Linux home server hosting containerized microservices and internal developer tooling."
    },
    bullets: {
      pt: [
        "Orquestração e conteinerização de microsserviços e ferramentas internas utilizando Docker e Docker Compose.",
        "Configuração de rede privada virtual e comunicação segura entre nós via Tailscale e proxy reverso usando Nginx com SSL/TLS.",
        "Monitoramento de disponibilidade de serviços e rotinas de backup automatizadas."
      ],
      en: [
        "Containerization and orchestration of internal microservices and developer tools via Docker and Docker Compose.",
        "Encrypted private mesh network and secure node-to-node routing via Tailscale paired with an Nginx reverse proxy.",
        "Automated service health monitoring, firewall rules, and routine backup pipelines."
      ]
    },
    techStack: ["Debian Linux", "Docker", "Docker Compose", "Tailscale", "Nginx", "Self-Hosted"],
    featured: false
  }
];
