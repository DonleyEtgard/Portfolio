export type Language = 'en' | 'es'

export const profile = {
  name: 'Donley Etgard Merlien',
  initials: 'DEM',
  location: 'Rosario, Santa Fe, Argentina',
  email: 'donleyetgard2@gmail.com', // Replace with your professional email
  github: 'https://github.com/DonleyEtgard',
  linkedin: 'https://www.linkedin.com/in/donley-etgard-merlien-733495296/', // Replace with your real profile
  cv: '/cv/Donley%20Etgard%20Merlien-EN.pdf',
}

export const content = {
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    hero: {
      eyebrow: 'SYSTEMS ENGINEERING · SOFTWARE DEVELOPMENT & IT SUPPORT',
      title: 'Building digital solutions through technology.',
      subtitle: 'Full Stack Developer · Systems Analyst · IT Support Engineer',
      description: 'I develop practical software solutions, work with databases and help people overcome technical challenges. I enjoy connecting technology with real business needs & Customers.',
      primary: 'Explore my work', secondary: 'Download CV', availability: 'Open to professional opportunities',
      location: 'Based in Rosario, Argentina · Open to remote work',
    },
    about: {
      label: 'A LITTLE ABOUT ME', title: 'Technology with a practical mindset.',
      p1: 'I am an advanced Systems Engineering student at Universidad Abierta Interamericana (UAI), with hands-on experience in technical support and software development.',
      p2: 'My experience combines user support, troubleshooting, database work and the development of business-oriented applications. I value clear communication, continuous learning and solutions that make everyday work easier.',
      highlights: ['Software development', 'Technical support', 'Database management', 'Business process thinking'],
    },
    skills: { label: 'WHAT I WORK WITH', title: 'Technical toolkit', description: 'Technologies and practices I have used in academic, personal and professional projects.' },
    projects: {
      label: 'SELECTED WORK', title: 'Projects that put ideas into practice',
      description: 'A closer look at business-oriented applications I have worked on. Project details and live links should be reviewed and updated as the products evolve.',
      code: 'GitHub Repository', demo: 'Live Demo', details: 'Project overview',
      previousImage: 'Previous image', nextImage: 'Next image',
      showImage: 'Show image {number}', imageUnavailable: 'Screenshot unavailable',
      screenshotAlt: '{project} screenshot {number}',
      items: [
        { id: 'haitibiz', name: 'HAITIBIZ ERP', type: 'ERP · Business management', description: 'A business management platform focused on organizing operations such as sales, Products, Clients , Tickets, KPI Dashboard, billing and user access. Built as a full-stack application with role-based access and database integration.', impact: 'Business workflows', stack: ['React', 'TypeScript', 'Node.js', 'Express','Tailwind', 'Material UI' , 'MongoDB', 'Firebase', 'PWA', 'i18n'], repo: 'https://github.com/DonleyEtgard/HAITIBIZ', demo: 'https://haitibiz.onrender.com' },
        { id: 'kariba', name: 'KARIBA Marketplace', type: 'Marketplace · E-commerce', description: 'A marketplace concept designed to connect buyers and sellers and support product listings and business activity. The project explores application architecture, user roles, data management and marketplace workflows.', impact: 'Buyer & seller workflows', stack: ['C#', 'ASP.NET Core', 'PostgreSQL', 'SQL Server','Azure SQL' , 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PWA', 'i18n', 'IA Agent', 'Brevo', 'PayPal'], repo: 'https://github.com/DonleyEtgard/KARIBA', demo: 'https://kariba.onrender.com' },
      ],
    },
    experience: {
      label: 'WHERE I HAVE CONTRIBUTED', title: 'Professional experience',
      items: [
        { role: 'Technical Support', company: 'UAI', period: 'Apr 2025 – Present', description: 'Provide on-site technical assistance to students and faculty; maintain PCs and NUC devices; troubleshoot hardware, software, peripherals and basic network issues; document incidents and follow up on requests.' },
        { role: 'Help Desk N1', company: 'Metrickal – Cianio', period: 'Nov 2024 – Mar 2025', description: 'Assisted users and clients with system usage and connectivity issues, performed first-level troubleshooting, managed support tickets and escalated incidents when required.' },
        { role: 'Full Stack Software Developer', company: 'Freelance', period: 'Apr 2025 – Present', description: 'Designed and developed custom software solutions and web applications for independent projects, including an ERP management system and a multi-category Marketplace platform. Worked across frontend and backend development. Designed and integrated REST APIs, implemented business logic, and developed features for user authentication, role-based access control, dashboards, inventory, sales, billing, and subscription management.'},
      ],
    },
    education: {
      label: 'LEARNING & COMMUNICATION', title: 'Education and languages',
      degree: 'Systems Engineering', institution: 'Universidad Abierta Interamericana (UAI)', status: 'Advanced student · 2022 – Present',
      languages: [{ name: 'Spanish', level: 'Advanced' }, { name: 'English', level: 'Professional working proficiency' }, { name: 'French', level: 'Native' }, { name: 'Haitian Creole', level: 'Native' }],
    },
    contact: {
      label: 'LET’S CONNECT', title: 'Have a project or opportunity in mind?',
      description: 'I am interested in opportunities across software development, systems analysis and technical support. Feel free to reach out.',
      email: 'Send me an email', github: 'GitHub profile', linkedin: 'LinkedIn profile',
    },
    footer: 'Designed and built with React & TypeScript.',
  },
  es: {
    nav: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
    hero: {
      eyebrow: 'INGENIERÍA EN SISTEMAS · DESARROLLO DE SOFTWARE',
      title: 'Creo soluciones digitales a través de la tecnología.',
      subtitle: 'Desarrollador Full Stack · Analista de Sistemas · Soporte IT',
      description: 'Desarrollo soluciones de software, trabajo con bases de datos y ayudo a resolver desafíos técnicos. Me interesa conectar la tecnología con necesidades reales de negocio.',
      primary: 'Ver mis proyectos', secondary: 'Descargar CV', availability: 'Abierto a oportunidades profesionales',
      location: 'Rosario, Argentina · Disponibilidad para trabajo remoto',
    },
    about: {
      label: 'UN POCO SOBRE MÍ', title: 'Tecnología con una mirada práctica.',
      p1: 'Soy estudiante avanzado de Ingeniería en Sistemas en la Universidad Abierta Interamericana (UAI), con experiencia práctica en soporte técnico y desarrollo de software.',
      p2: 'Mi experiencia combina atención a usuarios, resolución de incidentes, trabajo con bases de datos y desarrollo de aplicaciones orientadas a negocios. Valoro la comunicación clara, el aprendizaje continuo y las soluciones que facilitan el trabajo diario.',
      highlights: ['Desarrollo de software', 'Soporte técnico', 'Gestión de bases de datos', 'Análisis de procesos de negocio'],
    },
    skills: { label: 'HERRAMIENTAS Y TECNOLOGÍAS', title: 'Mi stack técnico', description: 'Tecnologías y prácticas utilizadas en proyectos académicos, personales y profesionales.' },
    projects: {
      label: 'TRABAJOS DESTACADOS', title: 'Proyectos que convierten ideas en soluciones',
      description: 'Una mirada a aplicaciones orientadas a negocios en las que trabajé. Los detalles y enlaces deben mantenerse actualizados a medida que evolucionan los productos.',
      code: 'Repositorio GitHub', demo: 'Ver proyecto', details: 'Descripción del proyecto',
      previousImage: 'Imagen anterior', nextImage: 'Imagen siguiente',
      showImage: 'Mostrar imagen {number}', imageUnavailable: 'Captura no disponible',
      screenshotAlt: 'Captura de pantalla {number} de {project}',
      items: [
        { id: 'haitibiz', name: 'HAITIBIZ ERP', type: 'ERP · Gestión empresarial', description: 'Plataforma de gestión empresarial orientada a organizar operaciones como ventas, suscripciones, facturación y acceso de usuarios. Desarrollada como aplicación full stack con permisos por roles e integración de bases de datos.', impact: 'Procesos de negocio', stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Firebase'], repo: 'https://github.com/DonleyEtgard/HAITIBIZ', demo: 'https://haitibiz.onrender.com' },
        { id: 'kariba', name: 'KARIBA Marketplace', type: 'Marketplace · Comercio electrónico', description: 'Concepto de marketplace diseñado para conectar compradores y vendedores y gestionar publicaciones de productos y actividad comercial. El proyecto aborda arquitectura, roles de usuario, gestión de datos y flujos de compraventa.', impact: 'Flujos de compradores y vendedores', stack: ['C#', 'ASP.NET Core', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'], repo: 'https://github.com/DonleyEtgard/KARIBA', demo: 'https://kariba.onrender.com' },
      ],
    },
    experience: {
      label: 'MI EXPERIENCIA', title: 'Experiencia profesional',
      items: [
        { role: 'Soporte Técnico', company: 'UAI', period: 'Abr 2025 – Actualidad', description: 'Brindo asistencia técnica presencial a estudiantes y docentes; realizo mantenimiento de PC y dispositivos NUC; diagnostico problemas de hardware, software, periféricos y redes básicas; documento incidentes y hago seguimiento de solicitudes.' },
        { role: 'Help Desk N1', company: 'Metrickal – Cianio', period: 'Nov 2024 – Mar 2025', description: 'Asistí a usuarios y clientes con el uso de sistemas y problemas de conectividad, realicé diagnósticos de primer nivel, gestioné tickets y escalé incidentes cuando fue necesario.' },
       {
       role: 'Software Developer – Freelancer',
       company: 'Freelance',
       period: '2025 – Present',
       description: 'Desarrollé soluciones de software a medida, incluyendo sistemas ERP y plataformas Marketplace. Trabajé en el diseño e implementación de funcionalidades, integración y gestión de bases de datos, desarrollo frontend y backend, APIs REST y optimización de procesos.'
       },
      ],
    },
   education: {
        label: 'FORMACIÓN Y COMUNICACIÓN',
        title: 'Educación e idiomas',
        degree: 'Ingeniería en Sistemas Informáticos',
        institution: 'Universidad Abierta Interamericana (UAI)',
        status: 'Estudiante avanzado · 2022 – Actualidad',
        description: 'Formación orientada al análisis, diseño y desarrollo de sistemas informáticos, ingeniería de software, gestión de bases de datos y resolución de problemas tecnológicos.',
  details: [
    'Desarrollo de software: C#, .NET, JavaScript, TypeScript, React y Node.js.',
    'Bases de datos: SQL Server, PostgreSQL, MySQL y MongoDB.',
    'Análisis y diseño de sistemas: UML, relevamiento de requerimientos y modelado de procesos.',
    'Ingeniería de software: arquitectura, metodologías de desarrollo, testing y documentación.',
    'Redes y seguridad informática: infraestructura, conectividad y fundamentos de ciberseguridad.',
  ],
  languages: [
    { name: 'Español', level: 'Avanzado' },
    { name: 'Inglés', level: 'Profesional' },
    { name: 'Francés', level: 'Nativo' },
    { name: 'Criollo haitiano', level: 'Nativo' },
  ],
},
    contact: {
      label: 'CONECTEMOS', title: '¿Tenés un proyecto u oportunidad en mente?',
      description: 'Me interesan oportunidades en desarrollo de software, análisis de sistemas y soporte técnico. No dudes en contactarme.',
      email: 'Enviarme un email', github: 'Perfil de GitHub', linkedin: 'Perfil de LinkedIn',
    },
    footer: 'Diseñado y desarrollado con React y TypeScript.',
  },
} as const

export const projectScreenshots = {
  haitibiz: [
    '/haitibiz/CreateAccount.png',
    '/haitibiz/Customers.png',
    '/haitibiz/DashboardA.png',
    '/haitibiz/HomeA.png',
    '/haitibiz/HomeB.png',
    '/haitibiz/LoginA.png',
    '/haitibiz/Products.png',
    '/haitibiz/Sales.png',
  ],
  kariba: [
    '/kariba/create account.png',
    '/kariba/dashboard.png',
    '/kariba/home.png',
    '/kariba/layout.png',
    '/kariba/login.png',
  ],
} as const

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'Vue.js', 'CSS3', 'Tailwind', 'Material UI', 'Bootstrap','PWA'] },
  { title: 'Backend', items: ['C#', 'ASP.NET Core', 'Node.js', 'Express.js', 'JavaScript','TypeScript', 'REST APIs', 'Python'] },
  { title: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Azure SQL', 'Firebase'] },
  { title: 'Tools & practices', items: ['Git & GitHub', 'Visual Studio', 'VS Code', 'Render','Railway', 'Vercel', 'UML','Software Developer', 'Troubleshooting', 'Postman', 'AI-assisted workflows'] },
]
