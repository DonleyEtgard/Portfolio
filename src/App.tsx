import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, Code2, Database, Globe2, Mail, MonitorCog, Server, Wrench } from 'lucide-react'
import ResumeEN from './pages/ResumeEN'
import ResumeES from './pages/ResumeES'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SectionHeading from './components/SectionHeading'
import { content, profile, skillGroups, type Language } from './data/content'

const skillIcons = [Code2, Server, Database, Wrench]

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/cv') return <ResumeES/>
  if (path === '/resume') return <ResumeEN/>

  return <Portfolio/>
}

function Portfolio() {
  const [language, setLanguage] = useState<Language>('en')
  const t = content[language]
  return <><Navbar language={language} setLanguage={setLanguage} nav={t.nav}/>
    <main><Hero t={t.hero} profile={profile}/>
      <section className="section" id="about"><div className="container about-grid"><SectionHeading label={t.about.label} title={t.about.title}/><div className="about-copy"><p>{t.about.p1}</p><p>{t.about.p2}</p><div className="highlight-grid">{t.about.highlights.map((item: string) => <div className="highlight" key={item}><CheckCircle2 size={17}/>{item}</div>)}</div></div></div></section>
      <section className="section section-alt" id="skills"><div className="container"><SectionHeading label={t.skills.label} title={t.skills.title} description={t.skills.description}/><div className="skills-grid">{skillGroups.map((group, i) => { const Icon = skillIcons[i]; return <article className="skill-card" key={group.title}><div className="skill-icon"><Icon size={21}/></div><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article> })}</div></div></section>
      <Projects t={t.projects}/>
      <section className="section" id="experience"><div className="container"><SectionHeading label={t.experience.label} title={t.experience.title}/><div className="timeline">{t.experience.items.map((item: any) => <article className="timeline-item" key={item.company}><div className="timeline-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-content"><div className="timeline-heading"><div><h3>{item.role}</h3><span>{item.company}</span></div><time>{item.period}</time></div><p>{item.description}</p></div></article>)}</div></div></section>
      <section className="section section-alt" id="education"><div className="container education-grid"><div><SectionHeading label={t.education.label} title={t.education.title}/><div className="education-card"><div className="education-icon"><MonitorCog size={22}/></div><h3>{t.education.degree}</h3><p>{t.education.institution}</p><span>{t.education.status}</span></div></div><div className="language-panel"><h3><Globe2 size={19}/> Languages</h3>{t.education.languages.map((item: any) => <div className="language-row" key={item.name}><span>{item.name}</span><span>{item.level}</span></div>)}</div></div></section>
      <section className="section contact-section" id="contact"><div className="container contact-card"><div className="contact-orb"/><div className="contact-content"><span className="eyebrow">{t.contact.label}</span><h2>{t.contact.title}</h2><p>{t.contact.description}</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17}/>{t.contact.email}<ArrowUpRight size={16}/></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">{t.contact.github}<ArrowUpRight size={16}/></a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">{t.contact.linkedin}<ArrowUpRight size={16}/></a></div></div></div></section>
    </main><footer className="footer"><div className="container footer-inner"><a className="brand" href="#home">DE<span>.</span></a><span>© {new Date().getFullYear()} {profile.name}. {t.footer}</span><a href="#home">Back to top ↑</a></div></footer>
  </>
}