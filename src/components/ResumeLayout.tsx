import { ArrowLeft, Download, Printer } from 'lucide-react'
import './resume.css'

export type ResumeEntry = {
  title: string
  subtitle?: string
  period?: string
  href?: string
  description?: string
}

export type ResumeData = {
  language: 'en' | 'es'
  pdf: string
  name: string
  headline: string
  contact: { label: string; value: string; href?: string }[]
  profile: { title: string; text: string }
  education: { title: string; entries: ResumeEntry[] }
  skills: { title: string; groups: { title: string; items: string[] }[] }
  languages: { title: string; items: string[] }
  softSkills: { title: string; items: string[] }
  experience: { title: string; entries: ResumeEntry[] }
}

type Props = { data: ResumeData }

function ResumeEntries({ entries }: { entries: ResumeEntry[] }) {
  return <div className="resume-entries">
    {entries.map((entry) => <article className="resume-entry" key={entry.title}>
      <div className="resume-entry-heading">
        <div>
          <h3>{entry.title}</h3>
          {entry.subtitle && (entry.href
            ? <a className="resume-entry-subtitle" href={entry.href} target="_blank" rel="noreferrer">{entry.subtitle}</a>
            : <p className="resume-entry-subtitle">{entry.subtitle}</p>)}
        </div>
        {entry.period && <span className="resume-period">{entry.period}</span>}
      </div>
      {entry.description && <p className="resume-entry-description">{entry.description}</p>}
    </article>)}
  </div>
}

export default function ResumeLayout({ data }: Props) {
  const isSpanish = data.language === 'es'

  return <div className="resume-app">
    <nav className="resume-toolbar" aria-label={isSpanish ? 'Navegación del currículum' : 'Resume navigation'}>
      <a className="resume-home-link" href="/"><ArrowLeft size={16}/>{isSpanish ? 'Volver al portfolio' : 'Back to portfolio'}</a>
      <div className="resume-toolbar-actions">
        <a className="resume-toolbar-link" href={isSpanish ? '/resume' : '/cv'} lang={isSpanish ? 'en' : 'es'}>
          {isSpanish ? 'English' : 'Español'}
        </a>
        <a className="resume-toolbar-button" href={data.pdf} download>
          <Download size={16}/>{isSpanish ? 'Descargar PDF' : 'Download PDF'}
        </a>
        <button className="resume-toolbar-button" type="button" onClick={() => window.print()}>
          <Printer size={16}/>{isSpanish ? 'Imprimir' : 'Print'}
        </button>
      </div>
    </nav>

    <main className="resume-document">
      <header className="resume-header">
        <p className="resume-eyebrow">{isSpanish ? 'CURRÍCULUM PROFESIONAL' : 'PROFESSIONAL RESUME'}</p>
        <h1>{data.name}</h1>
        <p className="resume-headline">{data.headline}</p>
      </header>

      <div className="resume-columns">
        <aside className="resume-sidebar">
          <section className="resume-section">
            <h2>{isSpanish ? 'Contacto' : 'Contact'}</h2>
            <ul className="resume-contact-list">
              {data.contact.map((item) => <li key={item.label}>
                <span>{item.label}</span>
                {item.href
                  ? <a href={item.href}>{item.value}</a>
                  : <p>{item.value}</p>}
              </li>)}
            </ul>
          </section>

          <section className="resume-section">
            <h2>{data.education.title}</h2>
            <ResumeEntries entries={data.education.entries}/>
          </section>

          <section className="resume-section">
            <h2>{data.skills.title}</h2>
            <div className="resume-skill-groups">
              {data.skills.groups.map((group) => <div className="resume-skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>)}
            </div>
          </section>

          <section className="resume-section">
            <h2>{data.languages.title}</h2>
            <ul className="resume-list">{data.languages.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className="resume-section">
            <h2>{data.softSkills.title}</h2>
            <ul className="resume-list">{data.softSkills.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </aside>

        <div className="resume-main">
          <section className="resume-section">
            <h2>{data.profile.title}</h2>
            <p className="resume-profile">{data.profile.text}</p>
          </section>

          <section className="resume-section">
            <h2>{data.experience.title}</h2>
            <ResumeEntries entries={data.experience.entries}/>
          </section>
        </div>
      </div>
    </main>
  </div>
}
