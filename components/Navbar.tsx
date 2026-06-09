'use client';

import { useEffect, useState } from 'react';
import type { Lang } from '@/app/content';

type NavbarProps = {
  lang: Lang;
};

const navItems = [
  { id: 'inicio', es: 'Inicio', en: 'Home' },
  { id: 'stack', es: 'Stack', en: 'Stack' },
  { id: 'proyectos', es: 'Proyectos', en: 'Projects' },
  { id: 'experiencia', es: 'Experiencia', en: 'Experience' },
  { id: 'referencias', es: 'Referencias', en: 'References' },
  { id: 'contacto', es: 'Contacto', en: 'Contact' }
];

export function Navbar({ lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>AHC</a>
        </div>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="navbar-menu" className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item[lang]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
