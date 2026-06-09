export type Lang = 'es' | 'en';

type LocalizedText = Record<Lang, string>;

export type SocialLink = {
  label: LocalizedText;
  href: string;
  external?: boolean;
};

export type ProjectCard = {
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  bullets: Record<Lang, string[]>;
  tags: string[];
  accent: string;
  links?: Array<{ label: LocalizedText; href: string }>;
};

export type TimelineItem = {
  period: string;
  company: string;
  role: LocalizedText;
  bullets: Record<Lang, string[]>;
};

export type EducationItem = {
  period: string;
  school: string;
  degree: LocalizedText;
  meta: LocalizedText;
};

export type SkillItem = {
  name: string;
  icon: string;
  emoji: string;
  description: LocalizedText;
};

export type ProjectMedia = {
  type: 'image' | 'video';
  url: string;
  alt?: string;
};

export type ProjectCardExtended = ProjectCard & {
  media?: ProjectMedia;
};

export const heroCopy: Record<Lang, { eyebrow: string; headline: string; role: string; intro: string; shortPitch: string; primaryCta: string; downloadEs: string; downloadEn: string; github: string; linkedin: string; indeed: string }> = {
  es: {
    eyebrow: 'Portafolio profesional',
    headline: 'Aldo Hernández Córdova',
    role: 'Full Stack Developer · Ciencias de la Computación',
    intro: 'Construyo aplicaciones web, sistemas escalables y herramientas enfocadas en resolver problemas reales.',
    shortPitch: 'Soy programador full stack egresado de Ciencias de la Computación, con experiencia en desarrollo web, bases de datos y proyectos de análisis de datos.',
    primaryCta: 'Ver proyectos',
    downloadEs: 'Descargar CV ES',
    downloadEn: 'Descargar CV EN',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    indeed: 'Indeed'
  },
  en: {
    eyebrow: 'Professional portfolio',
    headline: 'Aldo Hernández Córdova',
    role: 'Full Stack Developer · Computer Science',
    intro: 'I build web applications, scalable systems, and tools focused on solving real problems.',
    shortPitch: 'I am a full-stack developer and Computer Science graduate with hands-on experience in web development, databases, and data analysis projects.',
    primaryCta: 'View projects',
    downloadEs: 'Download CV ES',
    downloadEn: 'Download CV EN',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    indeed: 'Indeed'
  }
};

export const summaryCopy: Record<Lang, string> = {
  es: 'Egresado de la Licenciatura en Ciencias de la Computación con experiencia en desarrollo full stack, construcción de sistemas web y trabajo con bases de datos relacionales. He participado en proyectos de PLN, análisis de datos y desarrollo de software para contextos reales.',
  en: 'Computer Science graduate with experience in full-stack development, web systems, and relational databases. I have contributed to NLP, data analysis, and software projects built for real-world use cases.'
};

export const socialLinks: SocialLink[] = [
  {
    label: { es: 'GitHub', en: 'GitHub' },
    href: 'https://github.com/Aldohdezco',
    external: true
  },
  {
    label: { es: 'LinkedIn', en: 'LinkedIn' },
    href: 'https://www.linkedin.com/in/aldohdezco',
    external: true
  },
  {
    label: { es: 'Indeed', en: 'Indeed' },
    href: 'https://mx.indeed.com/',
    external: true
  }
];

export const stats: Array<{ value: string; label: LocalizedText }> = [
  {
    value: '4+',
    label: { es: 'proyectos destacados', en: 'featured projects' }
  },
  {
    value: '2',
    label: { es: 'áreas fuertes: web y datos', en: 'core areas: web and data' }
  },
  {
    value: '1',
    label: { es: 'perfil bilingüe listo para empleo', en: 'bilingual profile ready for hiring' }
  }
];

export const skillStack: SkillItem[] = [
  {
    name: 'React / Next.js',
    icon: '⚛️',
    emoji: '⚛️',
    description: {
      es: 'Interfaces modernas, componentes reutilizables y experiencias rápidas.',
      en: 'Modern interfaces, reusable components, and fast user experiences.'
    }
  },
  {
    name: 'Node.js',
    icon: '🟢',
    emoji: '🟢',
    description: {
      es: 'Servicios y lógica de backend en JavaScript.',
      en: 'Backend services and business logic in JavaScript.'
    }
  },
  {
    name: 'PHP',
    icon: '🐘',
    emoji: '🐘',
    description: {
      es: 'Aplicaciones funcionales y mantenimiento de sistemas existentes.',
      en: 'Functional applications and maintenance of existing systems.'
    }
  },
  {
    name: 'MySQL / MariaDB',
    icon: '🗄️',
    emoji: '🗄️',
    description: {
      es: 'Modelado relacional, consultas y administración de datos.',
      en: 'Relational modeling, queries, and data management.'
    }
  },
  {
    name: 'Python',
    icon: '🐍',
    emoji: '🐍',
    description: {
      es: 'Análisis de datos, machine learning y scripting.',
      en: 'Data analysis, machine learning, and scripting.'
    }
  },
  {
    name: 'Docker',
    icon: '🐳',
    emoji: '🐳',
    description: {
      es: 'Entornos reproducibles y despliegues consistentes.',
      en: 'Reproducible environments and consistent deployments.'
    }
  },
  {
    name: 'Git / Linux',
    icon: '🔧',
    emoji: '🔧',
    description: {
      es: 'Control de versiones, terminal y flujo de trabajo técnico.',
      en: 'Version control, terminal, and technical workflow.'
    }
  },
  {
    name: 'JavaScript / TypeScript',
    icon: '✨',
    emoji: '✨',
    description: {
      es: 'Lenguajes core para frontend y backend moderno.',
      en: 'Core languages for modern frontend and backend.'
    }
  }
];

export const projects: ProjectCardExtended[] = [
  {
    title: {
      es: 'Sistema de Gestión Operativa — Cactus Tours',
      en: 'Operational Management System — Cactus Tours'
    },
    category: { es: 'Laboral', en: 'Professional' },
    summary: {
      es: 'Aplicación interna para organizar la operación turística con frontend y backend integrados.',
      en: 'Internal application to organize tourism operations with integrated frontend and backend.'
    },
    bullets: {
      es: [
        'Implementación full stack con JavaScript y PHP.',
        'Diseño y mantenimiento de bases de datos relacionales.',
        'Participación activa en decisiones técnicas del producto.'
      ],
      en: [
        'Full-stack implementation with JavaScript and PHP.',
        'Design and maintenance of relational databases.',
        'Active participation in product technical decisions.'
      ]
    },
    tags: ['JavaScript', 'PHP', 'MySQL', 'Full Stack'],
    accent: 'linear-gradient(135deg, #2b5d49, #173026)',
    links: []
  },
  {
    title: {
      es: 'BUAP - Pagina para Hackaton OQI',
      en: 'BUAP - Page for OQI Hackathon'
    },
    category: { es: 'Laboral', en: 'Laboral' },
    summary: {
      es: 'Pagina web para la universidad BUAP, creada para el Hackaton OQI, con información relevante y diseño atractivo.',
      en: 'Web page for BUAP university, created for the OQI Hackathon, with relevant information and attractive design.'
    },
    bullets: {
      es: [
        'Desarrollo de interfaces con Angular.',
        'Desarrollo de backend con node.js.',
        'Diseño y mantenimiento de bases de datos.',
        'Mantenimiento y actualización de la página web durante el evento.'
      ],
      en: [
        'Built accessible interfaces with Angular.',
        'Developed backend with node.js.',
        'Designed and maintained databases.',
        'Maintained and updated the website during the event.'
      ]
    },
    tags: ['Angular', 'node.js', 'Databases', 'Full Stack'],
    accent: 'linear-gradient(135deg, #2b5d49, #173026)',
    links: [
      {
        label: { es: 'Página Web', en: 'Web Page' },
        href: 'https://oqi-hackaton.buap.mx1'
      }
    ]
  },
  {
    title: {
      es: 'Predicción del Proceso Electoral',
      en: 'Electoral Process Prediction'
    },
    category: { es: 'Investigación', en: 'Research' },
    summary: {
      es: 'Sistema basado en PLN, minería de datos y machine learning para analizar reacciones sociales.',
      en: 'NLP, data mining, and machine learning system for analyzing social reactions.'
    },
    bullets: {
      es: [
        'Diseño de un pipeline de análisis de texto y clasificación.',
        'Exploración de variables sociales y reacciones durante procesos electorales.',
        'Repositorio técnico orientado a experimentación reproducible.'
      ],
      en: [
        'Designed a text-analysis and classification pipeline.',
        'Explored social variables and reactions during electoral processes.',
        'Technical repository oriented toward reproducible experimentation.'
      ]
    },
    tags: ['NLP', 'Machine Learning', 'Data Mining'],
    accent: 'linear-gradient(135deg, #23384c, #0f1b25)',
    links: [
      {
        label: { es: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/EEBySE/Elecciones'
      }
    ]
  },
  {
    title: {
      es: 'Asignacion de horarios con optimizacion de grafos',
      en: 'Schedule Assignment with Graph Optimization'
    },
    category: { es: 'Investigación', en: 'Research' },
    summary: {
      es: 'Sistema basado en grafos para la asignación inteligente de horarios.',
      en: 'Graph-based system for intelligent schedule assignment.'
    },
    bullets: {
      es: [
        'Diseño de una interfaz de modelado de problemas de asignación de horarios.',
        'Implementación de algoritmos de optimización de grafos para resolver problemas de asignación.',
        'Desarrollo de un artículo académico para presentar los resultados y el enfoque técnico.'
      ],
      en: [
        'Designed an interface for modeling scheduling assignment problems.',
        'Implemented graph optimization algorithms to solve assignment problems.',
        'Developed an academic paper to present the results and technical approach.'
      ]
    },
    tags: ['Python', 'Graph Theory', 'Optimization', 'Algorithms'],
    accent: 'linear-gradient(135deg, #23384c, #0f1b25)',
    links: [
      {
        label: { es: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/Aldohdezco/AsignacionHorariosAdmision2026'
      },
      {
        label: { es: 'Artículo', en: 'Paper' },
        href: 'https://www.overleaf.com/read/mmzdmjgrkybt#a4f9cf'
      }
    ]
  },
  {
    title: {
      es: 'Análisis de Sentimientos en Portugués Mozambiqueño',
      en: 'Sentiment Analysis in Mozambican Portuguese'
    },
    category: { es: 'Servicio social', en: 'Community service' },
    summary: {
      es: 'Investigación con n-gramas, Python, Java y Weka para análisis de sentimientos.',
      en: 'Research using n-grams, Python, Java, and Weka for sentiment analysis.'
    },
    bullets: {
      es: [
        'Comparación de modelos de n-gramas sobre un corpus especializado.',
        'Implementación experimental con Python, Java y Weka.',
        'Redacción de artículo académico y repositorio técnico.'
      ],
      en: [
        'Compared n-gram models on a specialized corpus.',
        'Experimental implementation with Python, Java, and Weka.',
        'Academic article and technical repository deliverables.'
      ]
    },
    tags: ['Python', 'Java', 'Weka', 'NLP'],
    accent: 'linear-gradient(135deg, #4c4633, #1b2016)',
    links: [
      {
        label: { es: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/EEBySE/Mozambique1'
      },
      {
        label: { es: 'Artículo', en: 'Paper' },
        href: 'https://www.overleaf.com/read/jtgjdzpzbxgg#a612f4'
      }
    ]
  },
  {
    title: {
      es: 'CommuniKids — Interacción Inclusiva',
      en: 'CommuniKids — Inclusive Interaction'
    },
    category: { es: 'Accesibilidad', en: 'Accessibility' },
    summary: {
      es: 'Aplicación centrada en usuarios con autismo, con interfaces accesibles y diseño guiado por necesidades reales.',
      en: 'Application focused on users with autism, featuring accessible interfaces and user-centered design.'
    },
    bullets: {
      es: [
        'Desarrollo de interfaces accesibles con React.',
        'Participación en la redacción de artículo académico.',
        'Enfoque en usabilidad, claridad visual y acompañamiento al usuario.'
      ],
      en: [
        'Built accessible interfaces with React.',
        'Contributed to the academic paper writing process.',
        'Focused on usability, visual clarity, and user guidance.'
      ]
    },
    tags: ['React', 'UX', 'Accessibility'],
    accent: 'linear-gradient(135deg, #4a3d55, #1d1720)',
    links: [
      {
        label: { es: 'Artículo', en: 'Paper' },
        href: 'https://www.overleaf.com/read/vztnfsnzxbsd#4aa731'
      }
    ]
  }
];

export const experience: TimelineItem[] = [
  {
    period: '2025 · Present',
    company: 'Cactus Tours',
    role: { es: 'Developer Full Stack', en: 'Full Stack Developer' },
    bullets: {
      es: [
        'Desarrollo de aplicación operativa para gestión de servicios turísticos.',
        'Implementación completa con JavaScript y PHP.',
        'Diseño y mantenimiento de bases de datos relacionales.'
      ],
      en: [
        'Built an operational application for tourism service management.',
        'Delivered full-stack features with JavaScript and PHP.',
        'Designed and maintained relational databases.'
      ]
    }
  },
  {
    period: '2024',
    company: 'PLAMI',
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    bullets: {
      es: [
        'Desarrollo e implementación de soluciones de software a medida.',
        'Mejora de procesos internos mediante herramientas digitales.'
      ],
      en: [
        'Developed and implemented custom software solutions.',
        'Improved internal processes through digital tools.'
      ]
    }
  }
];

export const education: EducationItem[] = [
  {
    period: '2021 – 2025',
    school: 'BUAP',
    degree: { es: 'Licenciatura en Ciencias de la Computación', en: 'Bachelor in Computer Science' },
    meta: { es: 'Promedio: 9.62 · Mejor promedio de generación', en: 'GPA: 9.62 · Best average in the cohort' }
  },
  {
    period: '2018 – 2021',
    school: 'CBTIS 82',
    degree: { es: 'Técnico en Programación', en: 'Programming Technician' },
    meta: { es: 'Promedio: 9.8 · Mejor promedio', en: 'GPA: 9.8 · Best average' }
  },
  {
    period: '2019 – 2021',
    school: 'CEPE – UNAM',
    degree: { es: 'Inglés', en: 'English' },
    meta: { es: 'Nivel C en APTIS', en: 'APTIS C level' }
  }
];

export const references: Array<{ name: string; org: string; phone: string }> = [
  {
    name: 'Lic. Aldo Hernández Millán',
    org: 'Auditores y Consultores Legales',
    phone: '762 100 7289'
  },
  {
    name: 'Luis David Cruz Sampayo',
    org: 'Cactus Tours',
    phone: '776 114 5250'
  },
  {
    name: 'Dra. Darnes Vilariño Ayala',
    org: 'Facultad de Ciencias de la Computación - BUAP',
    phone: '221 184 6636'
  },
    {
    name: 'M.I. Luis Enrrique Morales Aguilar',
    org: 'Facultad de Ciencias de la Computación - BUAP',
    phone: '55 8534 3345'
  }
];

export const contact = {
  phone: '762 128 4898',
  email: 'aldohdezco@gmail.com',
  location: 'Puebla, Puebla',
  github: 'https://github.com/Aldohdezco',
  linkedin: 'https://www.linkedin.com/in/aldohdezco',
  indeed: 'https://mx.indeed.com/'
};

export const terminalWelcome: Record<Lang, string> = {
  es: 'Escribe "help" para ver los comandos disponibles.',
  en: 'Type "help" to see the available commands.'
};

export const terminalCommands: Record<string, Record<Lang, string>> = {
  help: {
    es: 'Comandos disponibles:\n> projects\n> skills\n> about\n> contact\n> experience\n> references\n> clear',
    en: 'Available commands:\n> projects\n> skills\n> about\n> contact\n> experience\n> references\n> clear'
  },
  projects: {
    es: 'Proyectos destacados — Baja para ver más',
    en: 'Featured projects — Scroll to see more'
  },
  skills: {
    es: 'Stack: React, Next.js, Node.js, Python, PHP, MySQL, Docker, Git, TypeScript',
    en: 'Stack: React, Next.js, Node.js, Python, PHP, MySQL, Docker, Git, TypeScript'
  },
  about: {
    es: 'Egresado en Ciencias de la Computación, desarrollador full stack con enfoque en producto y ejecución.',
    en: 'Computer Science graduate, full-stack developer focused on product and execution.'
  },
  contact: {
    es: 'Email: aldohdezco@gmail.com | Tel: 762 128 4898 | Ubicación: Puebla, Puebla',
    en: 'Email: aldohdezco@gmail.com | Phone: 762 128 4898 | Location: Puebla, Puebla'
  },
  experience: {
    es: '2025 - Cactus Tours (Full Stack Developer) | 2024 - PLAMI (Software Developer)',
    en: '2025 - Cactus Tours (Full Stack Developer) | 2024 - PLAMI (Software Developer)'
  },
  references: {
    es: 'Disponibles en la sección de Referencias',
    en: 'Available in the References section'
  },
  clear: {
    es: 'Terminal limpia',
    en: 'Terminal cleared'
  }
};
