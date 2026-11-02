import { useState } from 'react'
import { Menu, X, Languages } from 'lucide-react'
import type { Language } from '../data/content'

type Props = { language: Language; setLanguage: (language: Language) => void; nav: Record<string, string> }
export default function Navbar({ language, setLanguage, nav }: Props) {
  const [open, setOpen] = useState(false)
  const links = [
    ['about', 'about'], ['skills', 'skills'], ['projects', 'projects'], ['experience', 'experience'], ['contact', 'contact'],
  ] as const
  return <header className="site-header"><nav className="nav container">
    <a className="brand" href="#home" aria-label="Home">DE<span>.</span></a>
    <div className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map(([key, id]) => <a key={key} href={`#${id}`} onClick={() => setOpen(false)}>{nav[key]}</a>)}
    </div>
    <div className="nav-actions">
      <button className="language-button" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} aria-label="Change language"><Languages size={16}/>{language.toUpperCase()}</button>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </div>
  </nav></header>
}