import type { Language } from '../context/LanguageContext';

export interface TechExperienceItem {
  id: string;
  role: Record<Language, string>;
  organization: string;
  period: Record<Language, string>;
  location: string;
  summary: Record<Language, string>;
  achievements: Record<Language, string[]>;
  skills: string[];
}

export interface PreDevExperienceItem {
  id: string;
  role: Record<Language, string>;
  organization: string;
  period: string;
  location?: string;
  note?: Record<Language, string>;
}

export interface EducationItem {
  degree: Record<Language, string>;
  institution: string;
  period: Record<Language, string>;
  status: Record<Language, string>;
  topics: Record<Language, string[]>;
}

export interface LanguageItem {
  language: Record<Language, string>;
  level: Record<Language, string>;
  certification?: Record<Language, string>;
}

export const TECH_EXPERIENCE_DATA: TechExperienceItem[] = [
  {
    id: "tjmt-comodoro",
    role: {
      pt: "Suporte de TI e Operações (Prestador Terceirizado)",
      en: "IT & Operations Support (Contractor)"
    },
    organization: "TJMT – Comarca de Comodoro",
    period: {
      pt: "Agosto de 2025 – Presente",
      en: "August 2025 – Present"
    },
    location: "Comodoro-MT, Brasil",
    summary: {
      pt: "Atuação operacional e técnica garantindo a disponibilidade contínua de infraestrutura, estações de trabalho e sistemas judiciais da comarca.",
      en: "Hands-on IT technical support and operations, ensuring high availability of network infrastructure, judicial systems, and workstation terminals."
    },
    achievements: {
      pt: [
        "Suporte Técnico N1/N2: Diagnóstico e resolução de incidentes de hardware, software e conectividade de rede nas estações do fórum.",
        "Manutenção de Sistemas e Ativos: Manutenção preventiva e corretiva de terminais (Windows/Linux), periféricos de rede e credenciais de acesso.",
        "Otimização de Processos: Estruturação e organização de dados institucionais e suporte logístico-operacional para rotinas administrativas complexas."
      ],
      en: [
        "L1/L2 Technical Support: Hardware, OS, and network connectivity troubleshooting across all courthouse workstations.",
        "Systems & Asset Maintenance: Preventive and corrective maintenance of Linux/Windows terminals, networking peripherals, and internal judicial credentials.",
        "Process Optimization: Structuring internal institutional data and providing operational support for courthouse administrative workflows."
      ]
    },
    skills: ["Linux", "Windows", "Redes & Conectividade", "Suporte N1/N2", "Troubleshooting"]
  }
];

export const PRE_DEV_EXPERIENCE_DATA: PreDevExperienceItem[] = [
  {
    id: "lideranca-atual",
    organization: "Liderança LTDA",
    role: {
      pt: "Recepcionista - Fórum da Comarca de Comodoro",
      en: "Front Desk Receptionist - Courthouse of Comodoro"
    },
    period: "04/2025 – Presente",
    note: {
      pt: "Atendimento presencial ao público e magistrados, triagem e encaminhamento de protocolos.",
      en: "In-person public assistance, protocol screening, and judicial docket coordination."
    }
  },
  {
    id: "eder-espetinhos",
    organization: "Eder Espetinhos e Lanches",
    role: {
      pt: "Assistente de Vendas e Atendimento ao Cliente",
      en: "Sales & Customer Support Assistant"
    },
    period: "03/2023 – 11/2025",
    note: {
      pt: "Comunicação direta com clientes, fechamento de pedidos, agilidade e controle de caixa.",
      en: "Direct customer interaction, order fulfillment, point-of-sale management, and customer satisfaction."
    }
  },
  {
    id: "lideranca-2023",
    organization: "Liderança LTDA",
    role: {
      pt: "Recepcionista - Fórum da Comarca de Comodoro",
      en: "Front Desk Receptionist - Courthouse of Comodoro"
    },
    period: "07/2023 – 09/2023",
    note: {
      pt: "Contrato com prazo predeterminado para atendimento e recepção institucional.",
      en: "Fixed-term contract providing institutional public greeting and judicial department guidance."
    }
  },
  {
    id: "casa-do-eletricista",
    organization: "Casa do Eletricista",
    role: {
      pt: "Vendedor",
      en: "Technical Sales Representative"
    },
    period: "03/2024 – 08/2024",
    note: {
      pt: "Venda técnica de materiais elétricos, negociação direta e atendimento consultivo.",
      en: "Consultative sales of electrical supplies, pricing negotiation, and client relationship management."
    }
  },
  {
    id: "real-contabilidade",
    organization: "Real Contabilidade",
    role: {
      pt: "Auxiliar de Escritório",
      en: "Office & Administrative Assistant"
    },
    period: "01/2020 – 02/2022",
    note: {
      pt: "Organização documental, conciliação fiscal e rotinas administrativas contábeis.",
      en: "Document organization, archival, fiscal reconciliation, and accounting office administrative routines."
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: {
      pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      en: "Associate Degree in Systems Analysis & Software Development"
    },
    institution: "UNICSUL – Universidade Cruzeiro do Sul",
    period: {
      pt: "Previsão de Conclusão: Dezembro/2027",
      en: "Expected Graduation: December 2027"
    },
    status: {
      pt: "Em Andamento",
      en: "In Progress"
    },
    topics: {
      pt: [
        "Interface e Jornada do Usuário (UI/UX)",
        "Engenharia de Prompt e Aplicações em IA",
        "Prototipagem de Sistemas Computacionais",
        "Programação de Computadores",
        "Humanidades e a População Brasileira"
      ],
      en: [
        "User Interface & User Journey (UI/UX)",
        "Prompt Engineering & AI Applications",
        "Computational Systems Prototyping",
        "Computer Programming & Algorithms",
        "Humanities and Socio-technical Context"
      ]
    }
  }
];

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    language: {
      pt: "Inglês",
      en: "English"
    },
    level: {
      pt: "Avançado / Operacional (C1)",
      en: "Advanced / Operational (C1)"
    },
    certification: {
      pt: "Certificação Internacional EF SET (C1)",
      en: "International EF SET Certification (C1)"
    }
  },
  {
    language: {
      pt: "Português",
      en: "Portuguese"
    },
    level: {
      pt: "Nativo",
      en: "Native"
    }
  }
];
