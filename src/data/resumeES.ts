import type { ResumeData } from '../components/ResumeLayout'

const resumeES: ResumeData = {
  language: 'es',
  pdf: '/cv/Donley%20Etgard-ES.pdf',
  name: 'DONLEY ETGARD MERLIEN',
  headline: 'Desarrollador Full Stack | Analista de Sistemas',
  contact: [
    { label: 'Ubicación', value: 'Argentina, Rosario, Santa Fe' },
    { label: 'Email', value: 'donleyetgard92@gmail.com', href: 'mailto:donleyetgard92@gmail.com' },
    { label: 'GitHub', value: 'github.com/donleyetgard', href: 'https://github.com/donleyetgard' },
    { label: 'LinkedIn', value: 'linkedin.com/in/donleyetgard', href: 'https://linkedin.com/in/donleyetgard' },
  ],
  profile: {
    title: 'Perfil profesional',
    text: 'Estudiante avanzado de Ingeniería en Sistemas y Analista de Sistemas con experiencia en el diseño, desarrollo y despliegue de aplicaciones web escalables, plataformas SaaS, sistemas ERP y marketplaces online. Con trayectoria en todo el Ciclo de Vida del Software (SDLC). Sólidos conocimientos en desarrollo Full Stack (C#, ASP.NET Core, Node.js, React, JavaScript, SQL Server, MongoDB, Python, PWA) y en el uso de herramientas de IA para automatización y refactorización de código. Experiencia en internacionalización (i18n), APIs REST y soporte técnico empresarial. Apasionado por crear productos digitales modernos que resuelvan problemas reales de negocio.',
  },
  education: {
    title: 'Educación',
    entries: [
      {
        title: 'Ingeniería de Sistemas (Estudiante Avanzado)',
        subtitle: 'Universidad Abierta Interamercana',
        period: '2022 - Presente',
      },
    ],
  },
  skills: {
    title: 'Habilidades técnicas',
    groups: [
      { title: 'Lenguajes', items: ['C#', 'JavaScript', 'Python (Básico)', 'HTML5', 'CSS3'] },
      { title: 'Backend', items: ['Node.js', 'Express.js', 'ASP.NET Core', 'APIs REST', 'Arquitectura MVC'] },
      { title: 'Frontend', items: ['React.js', 'Progressive Web Apps (PWA)', 'Service Workers', 'Bootstrap', 'i18next'] },
      { title: 'Bases de Datos', items: ['SQL Server', 'MongoDB','PostgreSQL','Azure SQL Database', 'Entity Framework Core'] },
      { title: 'Herramientas & IA', items: ['Git', 'GitHub', 'Render','Brevo',  'VS Code', 'Herramientas de IA para Automatización y Refactorización'] },
      { title: 'Soporte IT e Infraestructura', items: ['Help Desk L1', 'Resolución de problemas de Hardware y Software', 'Active Directory', 'Sistemas de Tickets', 'Soporte Remoto', 'Diagnóstico de Redes', 'Administración de Windows'] },
    ],
  },
  languages: {
    title: 'Idiomas',
    items: ['Francés: Nativo', 'Inglés: Competencia Profesional', 'Español: Avanzado'],
  },
  softSkills: {
    title: 'Habilidades blandas',
    items: ['Adaptabilidad', 'Teamwork', 'Comunicación Efectiva', 'Proactivo y Pensamiento Crítico'],
  },
  experience: {
    title: 'Proyectos y Experiencia',
    entries: [
      {
        title: 'HAITIBIZ ERP (SaaS) | Desarrollador Full Stack',
        subtitle: 'haitibiz.onrender.com',
        period: '2026-ERP, Saas',
        href: 'https://haitibiz.onrender.com',
        description: 'Plataforma ERP SaaS diseñada para centralizar y optimizar la gestión empresarial. Permite administrar ventas, productos, clientes, inventarios y actividades comerciales desde un único sistema. Incluye módulos de punto de venta (POS), compras, gestión de proveedores, CRM, panel de control, reportes y administración de suscripciones. Participé en el análisis de requerimientos, diseño del sistema, desarrollo Full Stack, pruebas funcionales y de software, integración PWA e internacionalización (i18n).'
      },
      {
        title: 'KARIBA Marketplace | Desarrollador Full Stack',
        subtitle: 'kariba.onrender.com',
        period: '2025-Present',
        href: 'https://kariba.onrender.com',
        description: 'Plataforma digital de marketplace que conecta compradores y vendedores en un entorno integrado para la comercialización de vehículos, propiedades, productos y servicios. Permite publicar y administrar anuncios, explorar ofertas, contactar vendedores mediante mensajería privada y chat en tiempo real, e interactuar con un chatbot para facilitar la atención y las consultas. Incorpora funcionalidades de gestión de usuarios, paneles para vendedores, sistemas de cobranza y opciones de pago integradas, ofreciendo una experiencia de compraventa centralizada, segura y accesible. Tecnologías: ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, JavaScript, Bootstrap, PWA, i18n.',
      },
      {
        title: 'Soporte IT | Help Desk L1 - UAI',
        period: '2025-Presente',
        description: 'Diagnóstico y resolución de problemas de hardware y software. Administración de Windows y Active Directory. Gestión de incidentes con sistemas de tickets y soporte remoto. Diagnóstico de redes y mantenimiento técnico proactivo.',
      },
      {
        title: 'Customer Service',
        subtitle: 'Metrickal-Cianiao',
        period: '2024-2025',
        description: 'Brindé soporte a usuarios a través de múltiples canales (sistemas de tickets y llamadas), gestionando incidentes técnicos y realizando administración básica de accesos. Asistí a los usuarios mediante resolución remota de problemas, diagnosticando fallas de manera eficiente para minimizar tiempos de inactividad. Escalé incidencias técnicas complejas a niveles superiores de soporte, manteniendo una comunicación clara con los usuarios durante todo el proceso.',
      },
    ],
  },
}

export default resumeES
