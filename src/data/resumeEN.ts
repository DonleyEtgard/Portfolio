import type { ResumeData } from '../components/ResumeLayout'

const resumeEN: ResumeData = {
  language: 'en',
  pdf: '/cv/Donley%20Etgard%20Merlien-EN.pdf',
  name: 'DONLEY ETGARD MERLIEN',
  headline: 'System Engineering | Full Stack Developer | Systems Analyst | IT Support Specialist',
  contact: [
    { label: 'Location', value: 'Argentina, Rosario Santa Fe' },
    { label: 'Email', value: 'donleyetgard92@gmail.com', href: 'mailto:donleyetgard92@gmail.com' },
    { label: 'GitHub', value: 'github.com/donleyetgard', href: 'https://github.com/donleyetgard' },
    { label: 'LinkedIn', value: 'linkedin.com/in/donleyetgard', href: 'https://linkedin.com/in/donleyetgard' },
  ],
  profile: {
    title: 'Summary',
    text: 'Advanced student of Software Engineering and Systems Analyst with solid experience designing, developing, and deploying scalable web applications, SaaS platforms, ERP systems, and online marketplaces. Experienced throughout the complete SDLC. Proficient in Full Stack Development (C#, ASP.NET Core, Node.js, React, JavaScript, SQL Server, MongoDB, Python, PWA) and leveraging AI tools for process automation and code refactoring. Strong background in i18n, REST APIs, and enterprise-level IT support.',
  },
  education: {
    title: 'Education',
    entries: [
      { title: 'Systems Engineering (Advanced Student)', subtitle: 'Systems Analyst Degree', period: '2022 - Present' },
      { title: 'Systems Analyst Program', period: '2022-2024' },
    ],
  },
  skills: {
    title: 'Technical Skills',
    groups: [
      { title: 'Development', items: ['C#', 'JavaScript', 'Python', 'ASP.NET Core', 'Node.js', 'React.js', 'PWA', 'Bootstrap', 'I18n'] },
      { title: 'Data & APIs', items: ['SQL Server', 'MongoDB', 'Entity Framework Core', 'REST APIs', 'REST API'] },
      { title: 'Tools & Practices', items: ['Git', 'GitHub', 'Anydesk', 'AI Automation Tools', 'Cloud', 'Scrum', 'Postman', 'VS', 'service worker', 'Metology Agil', 'Implementation Software'] },
      { title: 'IT Support', items: ['Help Desk L1/L2 Support'] },
    ],
  },
  languages: {
    title: 'Languages',
    items: ['French: Native', 'Haitian Creole: Native', 'English: Professional Working', 'Spanish: Advanced'],
  },
  softSkills: {
    title: 'Soft Skills',
    items: [
      'Effective Communication',
      'Multilingual Professional',
      'SDLC: Software life cycle',
      'Proactive & Critical Thinking',
      'Proactive',
      'Advanced Problem Solving',
      'Systems & Architecture Design',
      'Teams Collaboration',
    ],
  },
  experience: {
    title: 'Professional Projects & Experience',
    entries: [
      {
        title: 'HAITIBIZ ERP (SaaS) | Full Stack Developer',
        subtitle: 'haitibiz.onrender.com',
        period: '2026 -',
        href: 'https://haitibiz.onrender.com',
        description: ' Enterprise Resource Planning platform designed to centralize and streamline business management operations. Enables businesses to manage sales, products, customers, inventory, and daily business activities through a unified system. Includes modules for Point of Sale (POS), purchasing, supplier management, CRM, dashboards, reporting, and subscription management. Contributed to requirements analysis, system design, full-stack development, functional and software testing, PWA integration, and internationalization (i18n).'
      },
      {
        title: 'KARIBA Marketplace | Full Stack Developer',
        subtitle: 'kariba.onrender.com',
        period: '2025 - Present',
        href: 'https://kariba.onrender.com',
        description: 'Digital marketplace platform connecting buyers and sellers for trading vehicles, real estate, products, and services. Features include listing management, personalized seller dashboards, private messaging, real-time chat, chatbot-assisted interactions, and integrated payment and collection management. Designed to centralize buying and selling operations, simplify communication, and provide an accessible digital commerce experience. Key Modules: Marketplace, Seller Dashboard, Buyer/Seller Chat, PayPal & NatCash Integration, Ratings, Subscription Plans. Technologies: ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, JavaScript, Bootstrap, Service Workers, i18n.',
      },
      {
       title: 'IT Support Specialist | Help Desk L1',
       subtitle: 'IT Support | Universidad Abierta Interamericana (UAI) — Rosario, Argentina',
       period: '2025 – Present',
       description: 'Provided first-level technical support to faculty, students, and institutional staff, diagnosing and troubleshooting hardware, software, operating system, and network connectivity issues. Performed preventive and corrective maintenance on desktop computers, PCs, and NUC devices, including software configuration, peripheral setup, and performance optimization. Managed incident reports, documented technical issues, monitored resolution progress, and escalated complex cases when necessary. Assisted users with institutional applications and technical requirements, ensuring reliable IT operations and minimizing service disruptions.'
     },
     {
      title: 'Customer Service Agent | Technical Support – Metrickal (Cianio)',
      period: 'Nov 2024 – Mar 2025',
      description: 'Provided multi-channel customer and technical support to international users and clients through phone calls, email, and ticketing platforms. Managed, documented, and followed up on support requests using Zendesk, ensuring accurate incident tracking and timely communication. Assisted customers with software usage, account access, basic administration, and connectivity issues, performing remote troubleshooting and first-level diagnostics to identify and resolve technical problems. Used email communication tools, including AliMail, to handle customer inquiries, provide guidance, and maintain clear and professional communication. Escalated complex incidents to higher support tiers when necessary, monitored their progress, and followed up with users to ensure effective resolution and customer satisfaction.'
     },
     {
      title: 'Full Stack Software Developer | Freelancer',
      period: '2025 – Present',
      description: 'Designed and developed custom software solutions and web applications for independent projects, including an ERP management system and a multi-category Marketplace platform. Worked across frontend and backend development using C#, ASP.NET Core, React, Tailwind, Bootstrap, JavaScript, TypeScript, and Node.js, Python. Designed and integrated REST APIs, implemented business logic, and developed features for user authentication, role-based access control, dashboards, inventory, sales, billing, and subscription management. Worked with SQL Server, PostgreSQL, MySQL, and MongoDB to design database structures, manage data, write queries, and implement data integrations. Also handled application testing, debugging, deployment configuration, and troubleshooting, focusing on maintainability, functionality, and user experience.'
     },
    ],
  },
}

export default resumeEN
