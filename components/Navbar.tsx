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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#inicio">AHC</a>
        </div>

        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item[lang]}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
