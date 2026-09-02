export const UI_TRANSLATIONS = {
  pt: {
    nav: {
      whoami: 'whoami',
      projects: 'projetos',
      skills: 'habilidades',
      experience: 'trajetória',
      contact: 'contato'
    },
    header: {
      status: 'DISPONÍVEL PARA TRABALHO REMOTO',
      location: 'Comodoro-MT, Brasil'
    },
    footer: {
      shortcutsHint: 'Teclas 1-5 Navegam',
      help: 'Ajuda',
      closeModal: 'Fechar'
    },
    whoami: {
      asciiTitle: 'banner.ascii',
      resumoTitle: '~/resumo_profissional.md',
      resumoSubtitle: 'Clean Architecture & Alta Performance',
      quickTitle: 'Comandos Rápidos:',
      certTitle: 'Certificações & Idiomas',
      englishLevel: 'Nível C1 (Avançado / Operacional)',
      englishCert: 'Certificação Internacional EF SET',
      portugueseLevel: 'Nativo',
      educationTitle: 'Formação Acadêmica',
      educationDegree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      educationInst: 'UNICSUL – Universidade Cruzeiro do Sul (Previsão: Dez/2027)',
      contactsTitle: 'Canais Oficiais',
      copied: 'Copiado para a área de transferência',
      copy: 'copiar'
    },
    projects: {
      title: 'Projetos em Destaque // Aplicações & Engenharia',
      subtitle: (count: number, filter: string) => `ls -la ./projects --filter=${filter} (${count} projetos)`,
      all: 'TODOS',
      filterAria: 'Filtrar projetos por categoria',
      featured: 'Destaque',
      copyCommand: 'Copiar comando',
      copied: 'copiado',
      copy: 'copiar',
      archTitle: '// ARQUITETURA & DESTAQUES TÉCNICOS',
      repoLink: '[ Repositório ]'
    },
    skills: {
      title: 'Habilidades Técnicas // Stack & Padrões',
      subtitle: (count: number, filter: string) => `cat ./skills.txt --category=${filter} (${count} itens)`,
      all: 'TODOS',
      filterAria: 'Filtrar habilidades por categoria',
      selectedTitle: 'Habilidade Selecionada',
      appTitle: 'Aplicação & Domínio',
      relatedTitle: 'Tecnologias Relacionadas',
      verified: 'VERIFICADO',
      tip: '💡 Dica: Navegue pelas habilidades para verificar os padrões de desenvolvimento e arquitetura adotados nos projetos.'
    },
    experience: {
      title: 'Trajetória Profissional // Experiência & Formação',
      subtitle: 'journalctl -u career --no-pager (Registros profissionais e acadêmicos)',
      techExpTitle: '// EXPERIÊNCIA TÉCNICA EM TI',
      preDevExpTitle: '// EXPERIÊNCIAS PROFISSIONAIS PRÉ-DEV',
      preDevNotice: 'Trajetória prévia desenvolvendo comunicação, atendimento ao público, resolução de problemas e rotinas administrativas.',
      activitiesTitle: '// ATIVIDADES & ENTREGAS',
      educationTitle: 'Formação Acadêmica',
      completedCourses: 'Matérias Concluídas:',
      languagesTitle: 'Idiomas & Certificações',
      langNote: 'Proficiência comprovada para comunicação diária e colaboração técnica em equipes globais.'
    },
    contact: {
      title: 'Canal de Contato // Mensagem Direta & Redes',
      subtitle: 'curl -X POST /api/contact (Formulário TUI com log de transmissão em tempo real)',
      formTitle: 'inquiry_dispatcher.sh',
      encrypted: 'TLS 1.3 ENCRYPTED',
      nameLabel: '$ SEU_NOME:',
      namePlaceholder: 'ex: Recrutador / Engenheiro',
      emailLabel: '$ SEU_EMAIL:',
      emailPlaceholder: 'ex: contato@empresa.com',
      subjectLabel: '$ ASSUNTO (opcional):',
      subjectPlaceholder: 'ex: Oportunidade Backend / DevOps',
      messageLabel: '$ MENSAGEM:',
      messagePlaceholder: 'Escreva sua mensagem ou proposta aqui...',
      dispatching: '[ Despachando Mensagem... ]',
      dispatch: '[ Enviar Mensagem ]',
      contactsTitle: 'Contatos Oficiais',
      terminalLog: 'transmission_log.txt',
      logReady: 'Terminal de contato pronto para transmissão.',
      logInstruction: 'Preencha os dados e clique em [ Enviar Mensagem ] para despachar.',
      logConnecting: '[PING] Conectando ao gateway de transmissão...',
      logEncrypting: '[PACOTE] Criptografando mensagem para',
      logSuccess: '[200 OK] Mensagem despachada com sucesso! Latência: 98ms.',
      logResponse: '[STATUS] Notificação entregue. Crystian responderá o mais breve possível.'
    }
  },
  en: {
    nav: {
      whoami: 'whoami',
      projects: 'projects',
      skills: 'skills',
      experience: 'experience',
      contact: 'contact'
    },
    header: {
      status: 'AVAILABLE FOR REMOTE WORK',
      location: 'Comodoro-MT, Brazil'
    },
    footer: {
      shortcutsHint: 'Keys 1-5 Navigate',
      help: 'Help',
      closeModal: 'Close'
    },
    whoami: {
      asciiTitle: 'banner.ascii',
      resumoTitle: '~/professional_summary.md',
      resumoSubtitle: 'Clean Architecture & High Performance',
      quickTitle: 'Quick Commands:',
      certTitle: 'Certifications & Languages',
      englishLevel: 'C1 Level (Advanced / Operational)',
      englishCert: 'International EF SET Certification',
      portugueseLevel: 'Native',
      educationTitle: 'Education',
      educationDegree: 'Associate Degree in Systems Analysis and Development',
      educationInst: 'UNICSUL – Cruzeiro do Sul University (Expected: Dec/2027)',
      contactsTitle: 'Official Channels',
      copied: 'Copied to clipboard',
      copy: 'copy'
    },
    projects: {
      title: 'Featured Projects // Systems & Applications',
      subtitle: (count: number, filter: string) => `ls -la ./projects --filter=${filter} (${count} projects)`,
      all: 'ALL',
      filterAria: 'Filter projects by category',
      featured: 'Featured',
      copyCommand: 'Copy command',
      copied: 'copied',
      copy: 'copy',
      archTitle: '// ARCHITECTURE & TECHNICAL HIGHLIGHTS',
      repoLink: '[ Repository ]'
    },
    skills: {
      title: 'Technical Skills // Stack & Architecture',
      subtitle: (count: number, filter: string) => `cat ./skills.txt --category=${filter} (${count} items)`,
      all: 'ALL',
      filterAria: 'Filter skills by category',
      selectedTitle: 'Selected Skill',
      appTitle: 'Domain & Application',
      relatedTitle: 'Related Technologies',
      verified: 'VERIFIED',
      tip: '💡 Tip: Inspect skills to review development patterns and architecture applied across projects.'
    },
    experience: {
      title: 'Professional Journey // Experience & Education',
      subtitle: 'journalctl -u career --no-pager (Professional and academic records)',
      techExpTitle: '// IT & TECHNICAL EXPERIENCE',
      preDevExpTitle: '// PRE-DEV PROFESSIONAL EXPERIENCE',
      preDevNotice: 'Prior career experience building customer-facing communication, technical troubleshooting, and administrative rigor.',
      activitiesTitle: '// RESPONSIBILITIES & DELIVERABLES',
      educationTitle: 'Education',
      completedCourses: 'Completed Coursework:',
      languagesTitle: 'Languages & Certifications',
      langNote: 'Certified fluency for daily communication and technical collaboration across global teams.'
    },
    contact: {
      title: 'Contact Channel // Direct Message & Networks',
      subtitle: 'curl -X POST /api/contact (TUI form with real-time transmission log)',
      formTitle: 'inquiry_dispatcher.sh',
      encrypted: 'TLS 1.3 ENCRYPTED',
      nameLabel: '$ YOUR_NAME:',
      namePlaceholder: 'e.g. Recruiter / Engineer',
      emailLabel: '$ YOUR_EMAIL:',
      emailPlaceholder: 'e.g. contact@company.com',
      subjectLabel: '$ SUBJECT (optional):',
      subjectPlaceholder: 'e.g. Backend / DevOps Opportunity',
      messageLabel: '$ MESSAGE_PAYLOAD:',
      messagePlaceholder: 'Write your inquiry or proposal here...',
      dispatching: '[ Dispatching Message... ]',
      dispatch: '[ Send Message ]',
      contactsTitle: 'Official Contacts',
      terminalLog: 'transmission_log.txt',
      logReady: 'Contact terminal ready for transmission.',
      logInstruction: 'Fill out the form and click [ Send Message ] to dispatch.',
      logConnecting: '[PING] Connecting to transmission gateway...',
      logEncrypting: '[PACKET] Encrypting message payload for',
      logSuccess: '[200 OK] Message dispatched successfully! Latency: 98ms.',
      logResponse: '[STATUS] Notification delivered. Crystian will respond promptly.'
    }
  }
};
