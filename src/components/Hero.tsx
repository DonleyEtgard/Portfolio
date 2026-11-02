import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'
import type { profile } from '../data/content'

type Props = { t: any; profile: typeof profile }
export default function Hero({ t, profile }: Props) {
  return <section className="hero section" id="home"><div className="container hero-grid">
    <div className="hero-copy">
      <div className="availability"><span className="status-dot"/><span>{t.availability}</span></div>
      <span className="eyebrow">{t.eyebrow}</span>
      <h1>{t.title.split(' ').slice(0, -2).join(' ')} <span>{t.title.split(' ').slice(-2).join(' ')}</span></h1>
      <h2>{t.subtitle}</h2>
      <p className="hero-description">{t.description}</p>
      <div className="hero-buttons"><a className="button button-primary" href="#projects">{t.primary}<ArrowUpRight size={17}/></a><a className="button button-secondary" href={profile.cv} download><Download size={17}/>{t.secondary}</a></div>
      <div className="hero-meta"><span><MapPin size={15}/>{t.location}</span><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a></div></div>
    </div>
    <div className="hero-visual"><div className="visual-glow"/><div className="code-card"><div className="code-top"><div><i/><i/><i/></div><span>developer.ts</span><Sparkles size={15}/></div><div className="code-body"><p><span className="code-purple">const</span> developer = {'{'}</p><p className="indent"><span className="code-blue">name</span>: <span className="code-green">'Donley'</span>,</p><p className="indent"><span className="code-blue">role</span>: <span className="code-green">'Full Stack Developer'</span>,</p><p className="indent"><span className="code-blue">focus</span>: [</p><p className="indent2"><span className="code-green">'Software'</span>,</p><p className="indent2"><span className="code-green">'Systems'</span>,</p><p className="indent2"><span className="code-green">'IT Support'</span></p><p className="indent">],</p><p className="indent"><span className="code-blue">mindset</span>: <span className="code-green">'Always learning'</span></p><p>{'}'}</p><p className="code-cursor">▍</p></div></div><div className="floating-chip chip-one"><span className="chip-icon">✦</span> Problem solver</div><div className="floating-chip chip-two"><span className="chip-icon">⌘</span> Clean solutions</div><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/></div>
  </div><a href="#about" className="scroll-hint"><ArrowDown size={15}/> Scroll to explore</a></section>
}