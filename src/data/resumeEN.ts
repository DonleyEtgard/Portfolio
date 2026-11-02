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
        period: '2025 Present',
        description: 'Diagnosed and resolved hardware, software, and connectivity issues, providing on-site technical support to faculty and students. Configured computers (PCs and NUCs) and institutional peripherals to ensure optimal performance. Prepared technical reports and tracked incident resolutions using internal tracking systems.',
      },
      {
        title: 'Customer Service Agent - Metrickal Cianiao',
        period: '2024',
        description: 'Provided multi-channel user support via ticketing systems and calls, managing technical incidents and performing basic access administration. Assisted users with remote troubleshooting, diagnosing issues efficiently to ensure minimal downtime. Escalated complex technical issues to higher support tiers while maintaining clear communication with users throughout the process.',
      },
    ],
  },
}

export default resumeEN
