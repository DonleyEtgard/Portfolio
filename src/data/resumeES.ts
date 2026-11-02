import type { ResumeData } from '../components/ResumeLayout'

const resumeES: ResumeData = {
  language: 'es',
  pdf: '/cv/Donley%20Etgard-ES.pdf',
  name: 'DONLEY ETGARD MERLIEN',
  headline: 'Ingeniero en Sistemas | Desarrollador Full Stack | Analista de Sistemas | Especialista en Soporte IT',
  contact: [
    { label: 'Ubicación', value: 'Rosario, Santa Fe, Argentina' },
    { label: 'Email', value: 'donleyetgard92@gmail.com', href: 'mailto:donleyetgard92@gmail.com' },
    { label: 'GitHub', value: 'github.com/donleyetgard', href: 'https://github.com/donleyetgard' },
    { label: 'LinkedIn', value: 'linkedin.com/in/donleyetgard', href: 'https://linkedin.com/in/donleyetgard' },
  ],
  profile: {
    title: 'Perfil profesional',
    text: 'Estudiante avanzado de Ingeniería en Sistemas y Analista de Sistemas, con experiencia en el diseño, desarrollo e implementación de aplicaciones web, plataformas SaaS, sistemas ERP y marketplaces digitales. Con conocimientos en las distintas etapas del ciclo de vida del desarrollo de software (SDLC), desde el análisis de requerimientos y diseño hasta la programación, integración, testing y despliegue. Especializado en desarrollo Full Stack con C#, ASP.NET Core, Node.js, React, JavaScript y TypeScript, así como en gestión e integración de bases de datos SQL Server, PostgreSQL, MySQL y MongoDB. Experiencia en desarrollo de APIs REST, internacionalización (i18n), soporte técnico IT y utilización de herramientas de inteligencia artificial para automatización de procesos y refactorización de código. Orientado a la resolución de problemas, mejora continua y desarrollo de soluciones tecnológicas que aporten valor a los negocios.',
  },
  education: {
    title: 'Educación',
    entries: [
      {
        title: 'Ingeniería en Sistemas Informáticos (Estudiante avanzado)',
        subtitle: 'Universidad Abierta Interamericana (UAI)',
        period: '2022 - Actualidad',
      },
      {
        title: 'Analista de Sistemas',
        subtitle: 'Universidad Abierta Interamericana (UAI)',
        period: '2022 - 2024',
      },
    ],
  },
  skills: {
    title: 'Habilidades técnicas',
    groups: [
      {
        title: 'Desarrollo',
        items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'ASP.NET Core', 'Node.js', 'Express.js', 'React.js', 'Bootstrap', 'PWA', 'i18next'],
      },
      {
        title: 'Bases de datos y APIs',
        items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Azure SQL Database', 'Entity Framework Core', 'APIs REST', 'Integración de datos'],
      },
      {
        title: 'Herramientas y metodologías',
        items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Brevo', 'Anydesk', 'Herramientas de IA', 'Automatización de procesos', 'Scrum', 'Metodologías ágiles', 'Testing y debugging'],
      },
      {
        title: 'Soporte IT e infraestructura',
        items: ['Help Desk L1', 'Mantenimiento de hardware y software', 'Diagnóstico de redes', 'Resolución de incidentes', 'Sistemas de tickets', 'Soporte remoto', 'Administración de Windows', 'Active Directory'],
      },
    ],
  },
  languages: {
    title: 'Idiomas',
    items: [
      'Francés: Nativo',
      'Criollo haitiano: Nativo',
      'Inglés: Competencia profesional',
      'Español: Avanzado',
    ],
  },
  softSkills: {
    title: 'Habilidades blandas',
    items: [
      'Comunicación efectiva',
      'Trabajo en equipo',
      'Adaptabilidad y aprendizaje continuo',
      'Pensamiento crítico',
      'Resolución avanzada de problemas',
      'Proactividad e iniciativa',
      'Capacidad de análisis',
      'Colaboración en equipos multidisciplinarios',
    ],
  },
  experience: {
    title: 'Proyectos y experiencia profesional',
    entries: [
      {
        title: 'HAITIBIZ ERP (SaaS) | Desarrollador Full Stack',
        subtitle: 'haitibiz.onrender.com',
        period: '2026 - Actualidad',
        href: 'https://haitibiz.onrender.com',
        description: 'Plataforma ERP SaaS diseñada para centralizar y optimizar la gestión empresarial. Permite administrar ventas, productos, clientes, inventarios y operaciones comerciales desde un único sistema. Incluye módulos de punto de venta (POS), compras, gestión de proveedores, CRM, paneles de control, reportes y administración de suscripciones. Participé en el análisis de requerimientos, diseño de arquitectura, desarrollo Full Stack, integración de funcionalidades, pruebas funcionales y de software, implementación PWA e internacionalización (i18n).',
      },
      {
        title: 'KARIBA Marketplace | Desarrollador Full Stack',
        subtitle: 'kariba.onrender.com',
        period: '2025 - Actualidad',
        href: 'https://kariba.onrender.com',
        description: 'Plataforma digital de marketplace que conecta compradores y vendedores para la comercialización de vehículos, propiedades, productos y servicios. Incluye publicación y administración de anuncios, paneles personalizados para vendedores, mensajería privada, chat en tiempo real, interacciones asistidas por chatbot y gestión de pagos y cobros. Desarrollé funcionalidades orientadas a centralizar las operaciones de compraventa, facilitar la comunicación entre usuarios y ofrecer una experiencia de comercio digital accesible. Módulos principales: Marketplace, panel de vendedores, comunicación comprador-vendedor, integración de PayPal y NatCash, calificaciones y planes de suscripción. Tecnologías: ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, JavaScript, Bootstrap, Service Workers e i18n.',
      },
      {
        title: 'Desarrollador de Software Full Stack | Freelancer',
        period: '2025 - Actualidad',
        description: 'Diseño y desarrollo de soluciones de software personalizadas y aplicaciones web para proyectos independientes, incluyendo un sistema de gestión ERP y una plataforma Marketplace de múltiples categorías. Trabajo en el desarrollo frontend y backend utilizando C#, ASP.NET Core, React, JavaScript, TypeScript y Node.js. Diseño e integro APIs REST, implemento lógica de negocio y desarrollo funcionalidades de autenticación de usuarios, control de acceso basado en roles, paneles de administración, inventario, ventas, facturación y gestión de suscripciones. Trabajo con SQL Server, PostgreSQL, MySQL y MongoDB para diseñar estructuras de bases de datos, administrar información, desarrollar consultas e implementar integraciones de datos. También realizo pruebas, depuración, configuración de despliegues y resolución de problemas, priorizando la funcionalidad, el mantenimiento y la experiencia del usuario.',
      },
      {
        title: 'Especialista en Soporte IT | Help Desk L1',
        subtitle: 'Universidad Abierta Interamericana (UAI) — Rosario, Argentina',
        period: '2025 - Actualidad',
        description: 'Brindo soporte técnico de primer nivel a docentes, estudiantes y personal institucional, diagnosticando y resolviendo problemas de hardware, software, sistemas operativos y conectividad de red. Realizo mantenimiento preventivo y correctivo de computadoras de escritorio, PCs y dispositivos NUC, incluyendo configuración de software, instalación y configuración de periféricos y optimización del rendimiento. Gestiono reportes de incidentes, documento problemas técnicos, realizo seguimiento de las resoluciones y escalo casos complejos cuando es necesario. También asisto a los usuarios en el uso de aplicaciones institucionales y requerimientos tecnológicos, contribuyendo a mantener la continuidad y confiabilidad de los servicios informáticos.',
      },
      {
        title: 'Agente de Atención al Cliente | Soporte Técnico',
        subtitle: 'Metrickal (Cianio)',
        period: 'Nov 2024 - Mar 2025',
        description: 'Brindé atención al cliente y soporte técnico multicanal a usuarios y clientes internacionales mediante llamadas telefónicas, correo electrónico y plataformas de gestión de tickets. Administré, documenté y realicé seguimiento de solicitudes de soporte utilizando Zendesk, asegurando el registro adecuado de incidentes y una comunicación oportuna. Asistí a los clientes en el uso de sistemas, acceso a cuentas, administración básica y problemas de conectividad, realizando diagnósticos de primer nivel y resolución remota de inconvenientes técnicos. Utilicé herramientas de comunicación por correo electrónico, incluyendo AliMail, para gestionar consultas, brindar orientación y mantener una comunicación clara y profesional. Escalé incidentes complejos a niveles superiores de soporte cuando fue necesario, monitoreando su evolución y realizando seguimiento hasta su resolución para garantizar la satisfacción del cliente.',
      },
    ],
  },
}

export default resumeES
