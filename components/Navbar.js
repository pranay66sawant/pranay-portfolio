'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <a className="nav-logo" href="#">PS.</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#casestudy">Case Study</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            className="theme-btn"
            title="Toggle theme"
            onClick={() => setDark(d => !d)}
          >
            {dark ? '🌗' : '☀️'}
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
        <a href="#projects" className="mobile-link" onClick={closeMenu}>Projects</a>
        <a href="#casestudy" className="mobile-link" onClick={closeMenu}>Case Study</a>
        <a href="#skills" className="mobile-link" onClick={closeMenu}>Skills</a>
        <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
      </div>
    </>
  )
}
