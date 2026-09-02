import type { Language } from '../context/LanguageContext';

export interface SkillItem {
  name: string;
  category: {
    pt: string;
    en: string;
  };
  description: Record<Language, string>;
  tags: string[];
}

export const SKILL_CATEGORIES = {
  pt: ['TODOS', 'Linguagens', 'Frameworks', 'Bancos de Dados', 'DevOps & Infra', 'Padrões'],
  en: ['ALL', 'Languages', 'Frameworks', 'Databases', 'DevOps & Infra', 'Patterns']
};

export const SKILLS_DATA: SkillItem[] = [
  // Linguagens
  {
    name: "TypeScript & JavaScript",
    category: { pt: "Linguagens", en: "Languages" },
    description: {
      pt: "Tipagem estática avançada, ecossistema Node.js moderno, programação assíncrona e Clean Code.",
      en: "Advanced static typing, modern Node.js ecosystem, asynchronous programming, and clean code principles."
    },
    tags: ["TypeScript", "JavaScript", "ESNext"]
  },
  {
    name: "Python",
    category: { pt: "Linguagens", en: "Languages" },
    description: {
      pt: "Desenvolvimento backend, scripts de automação, manipulação de dados e integrações REST.",
      en: "Backend development, automation scripts, data pipelines, and RESTful API integrations."
    },
    tags: ["Python", "Automação", "APIs"]
  },
  {
    name: "Rust",
    category: { pt: "Linguagens", en: "Languages" },
    description: {
      pt: "Aplicações de sistemas de alto desempenho, concorrência segura em memória, sockets TCP nativos e integração Tauri.",
      en: "High-performance systems programming, memory-safe concurrency, native TCP sockets, and Tauri desktop integration."
    },
    tags: ["Rust", "Tokio", "Sockets TCP", "Serde"]
  },
  {
    name: "Node.js",
    category: { pt: "Linguagens", en: "Languages" },
    description: {
      pt: "Runtimes escaláveis orientados a eventos, microsserviços e processamento concorrente.",
      en: "Scalable event-driven runtimes, microservices architectures, and concurrent async processing."
    },
    tags: ["Node.js", "Event-Driven", "REST"]
  },

  // Frameworks
  {
    name: "NestJS",
    category: { pt: "Frameworks", en: "Frameworks" },
    description: {
      pt: "Arquitetura empresarial modular, injeção de dependência, decorators e orquestração de microsserviços.",
      en: "Enterprise modular architecture, dependency injection, decorators, and scalable microservices orchestration."
    },
    tags: ["NestJS", "Injeção de Dependência", "Modular"]
  },
  {
    name: "Next.js & React 19",
    category: { pt: "Frameworks", en: "Frameworks" },
    description: {
      pt: "App Router, Server Components, interfaces reativas, acessibilidade WCAG e otimização de performance.",
      en: "App Router, Server Components, reactive interfaces, WCAG accessibility, and web vital optimizations."
    },
    tags: ["Next.js", "React 19", "App Router"]
  },
  {
    name: "Tauri v2",
    category: { pt: "Frameworks", en: "Frameworks" },
    description: {
      pt: "Aplicações desktop cross-platform seguras com pegada mínima de memória unindo Rust nativo a React.",
      en: "Secure, lightweight cross-platform desktop applications pairing native Rust performance with React."
    },
    tags: ["Tauri v2", "Desktop", "Cross-Platform"]
  },

  // Bancos de Dados
  {
    name: "PostgreSQL",
    category: { pt: "Bancos de Dados", en: "Databases" },
    description: {
      pt: "Modelagem relacional robusta, integridade referencial, consultas otimizadas e transações ACID.",
      en: "Robust relational modeling, referential integrity, query optimization, and ACID transactions."
    },
    tags: ["PostgreSQL", "SQL Relacional", "ACID"]
  },
  {
    name: "Redis & BullMQ",
    category: { pt: "Bancos de Dados", en: "Databases" },
    description: {
      pt: "Estruturas de dados em memória para cache de baixa latência e orquestração de filas assíncronas.",
      en: "In-memory data stores for ultra-low latency caching and reliable background job queue orchestration."
    },
    tags: ["Redis", "BullMQ", "Filas Assíncronas", "Cache"]
  },
  {
    name: "Prisma ORM",
    category: { pt: "Bancos de Dados", en: "Databases" },
    description: {
      pt: "Mapeamento objeto-relacional type-safe, migrações automatizadas e consultas seguras.",
      en: "Type-safe object-relational mapping, automated schema migrations, and declarative queries."
    },
    tags: ["Prisma", "Type-Safe ORM", "Migrations"]
  },
  {
    name: "MongoDB",
    category: { pt: "Bancos de Dados", en: "Databases" },
    description: {
      pt: "Modelagem de dados flexível orientada a documentos e agregações NoSQL.",
      en: "Flexible document-oriented schema design and NoSQL aggregation pipelines."
    },
    tags: ["MongoDB", "NoSQL", "Documentos"]
  },

  // DevOps & Infra
  {
    name: "Docker & Docker Compose",
    category: { pt: "DevOps & Infra", en: "DevOps & Infra" },
    description: {
      pt: "Conteinerização de microsserviços, isolamento de ambientes e orquestração de containers.",
      en: "Microservices containerization, reproducible deployment environments, and multi-container orchestration."
    },
    tags: ["Docker", "Docker Compose", "Containers"]
  },
  {
    name: "Linux (Debian / Ubuntu)",
    category: { pt: "DevOps & Infra", en: "DevOps & Infra" },
    description: {
      pt: "Administração de servidores, gerenciamento de serviços systemd, permissões e scripts shell/bash.",
      en: "Server administration, systemd service management, user permissions, and robust shell scripting."
    },
    tags: ["Debian", "Ubuntu", "Bash", "Systemd"]
  },
  {
    name: "Nginx & Redes Privadas (Tailscale)",
    category: { pt: "DevOps & Infra", en: "DevOps & Infra" },
    description: {
      pt: "Proxy reverso, terminação SSL/TLS, redes mesh virtuais seguras e infraestrutura homelab.",
      en: "Reverse proxying, SSL/TLS termination, encrypted virtual mesh networking, and homelab setups."
    },
    tags: ["Nginx", "Tailscale", "Proxy Reverso", "VPN"]
  },
  {
    name: "GitHub Actions & CI/CD",
    category: { pt: "DevOps & Infra", en: "DevOps & Infra" },
    description: {
      pt: "Pipelines automatizados de lint, verificação de tipos, testes e entrega contínua.",
      en: "Automated continuous integration and delivery pipelines covering linting, testing, and deployments."
    },
    tags: ["CI/CD", "GitHub Actions", "Automação"]
  },

  // Padrões
  {
    name: "Clean Architecture & SOLID",
    category: { pt: "Padrões", en: "Patterns" },
    description: {
      pt: "Separação estrita de responsabilidades, código desacoplado, alta manutenibilidade e modularidade.",
      en: "Strict separation of concerns, decoupled domain logic, high maintainability, and modularity."
    },
    tags: ["Clean Architecture", "SOLID", "Modular"]
  },
  {
    name: "Acessibilidade Web (WCAG AA)",
    category: { pt: "Padrões", en: "Patterns" },
    description: {
      pt: "Interfaces acessíveis para leitores de tela, navegação total por teclado e alvos de toque >= 44px.",
      en: "Inclusive interfaces supporting screen readers, full keyboard navigation, and >= 44px touch targets."
    },
    tags: ["WCAG AA", "Acessibilidade", "ARIA", "Keyboard"]
  }
];
