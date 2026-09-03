import type { Language } from '../context/LanguageContext';

export interface ProfileData {
  fullName: string;
  handle: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  bio: Record<Language, string[]>;
  asciiAvatar: string;
  telemetry: {
    location: Record<Language, string>;
    availability: Record<Language, string>;
    status: 'AVAILABLE';
  };
  contacts: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
  };
  quickCommands: Record<Language, {
    label: string;
    command: string;
    actionType: 'navigate' | 'copy';
    target: string;
  }[]>;
}

export const PROFILE_DATA: ProfileData = {
  fullName: "Crystian Fernando Lopes de Oliveira",
  handle: "@crystiancomy",
  title: {
    pt: "Desenvolvedor Full-Stack & DevOps",
    en: "Full-Stack Developer & DevOps"
  },
  summary: {
    pt: "Desenvolvedor Full-Stack e entusiasta de DevOps com sólida base prática na criação de APIs RESTful, sistemas distribuídos e infraestrutura Linux conteinerizada.",
    en: "Full-Stack Developer and DevOps enthusiast with hands-on expertise building RESTful APIs, distributed systems, and containerized Linux infrastructure."
  },
  bio: {
    pt: [
      "Desenvolvedor Full-Stack e entusiasta de DevOps com sólida base prática na criação de APIs RESTful, sistemas distribuídos e infraestrutura Linux conteinerizada.",
      "Especialista no ecossistema TypeScript/Node.js (NestJS) e Python, com domínio de bancos relacionais, sistemas de mensageria/filas e gerência de redes privadas self-hosted.",
      "Fluente em Inglês (C1 - EF SET Certified), focado em arquitetura modular, código limpo e alta performance."
    ],
    en: [
      "Backend Developer and DevOps enthusiast with strong practical foundations in designing RESTful APIs, distributed systems, and containerized Linux infrastructure.",
      "Specialized in the TypeScript/Node.js (NestJS) and Python ecosystems, with proven domain over relational databases, message queues, and self-hosted private networking.",
      "Fluent in English (C1 - EF SET Certified), focused on modular architecture, clean code, and high runtime performance."
    ]
  },
  asciiAvatar: [
    "   ____                _   _              ____             __   __",
    "  / ___|_ __ _   _ ___| |_(_) __ _ _ __  / ___|___  _ __ __\\ \\ / /",
    " | |   | '__| | | / __| __| |/ _` | '_ \\| |   / _ \\| '_ ` _ \\ V / ",
    " | |___| |  | |_| \\__ \\ |_| | (_| | | | | |__| (_) | | | | | | |  ",
    "  \\____|_|   \\__, |___/\\__|_|\\__,_|_| |_|\\____\\___/|_| |_| |_|_|  ",
    "             |___/                                                "
  ].join("\n"),
  telemetry: {
    location: {
      pt: "Comodoro-MT, Brasil",
      en: "Comodoro-MT, Brazil"
    },
    availability: {
      pt: "Disponível para Trabalho Remoto",
      en: "Available for Remote Work"
    },
    status: "AVAILABLE"
  },
  contacts: {
    email: "crystianfernando059@gmail.com",
    phone: "+55 (65) 99240-9139",
    github: "https://github.com/crystiancomy",
    linkedin: "https://www.linkedin.com/in/crystian-fernando-lopes-de-oliveira-8a9077200/?locale=en",
    location: "Comodoro-MT, Brasil"
  },
  quickCommands: {
    pt: [
      { label: "Projetos", command: "ls -la ./projects", actionType: "navigate", target: "projects" },
      { label: "Habilidades", command: "cat ./skills.txt", actionType: "navigate", target: "skills" },
      { label: "Trajetória", command: "journalctl -u career", actionType: "navigate", target: "experience" },
      { label: "Contato", command: "ping crystian", actionType: "navigate", target: "contact" },
      { label: "Copiar Email", command: "echo $EMAIL | pbcopy", actionType: "copy", target: "crystianfernando059@gmail.com" }
    ],
    en: [
      { label: "Projects", command: "ls -la ./projects", actionType: "navigate", target: "projects" },
      { label: "Skills", command: "cat ./skills.txt", actionType: "navigate", target: "skills" },
      { label: "Trajectory", command: "journalctl -u career", actionType: "navigate", target: "experience" },
      { label: "Contact", command: "ping crystian", actionType: "navigate", target: "contact" },
      { label: "Copy Email", command: "echo $EMAIL | pbcopy", actionType: "copy", target: "crystianfernando059@gmail.com" }
    ]
  }
};
