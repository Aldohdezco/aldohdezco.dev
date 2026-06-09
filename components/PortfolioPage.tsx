'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Terminal } from './Terminal';
import { Navbar } from './Navbar';
import {
  contact,
  education,
  experience,
  heroCopy,
  projects,
  references,
  skillStack,
  socialLinks,
  summaryCopy,
  type Lang
} from '@/app/content';

const languageTabs: Array<{ id: Lang; label: string }> = [
  { id: 'es', label: 'ES' },
  { id: 'en', label: 'EN' }
];

const cvDocs = {
  es: '/docs/CV%20%E2%80%93%20Aldo%20Hern%C3%A1ndez%20C%C3%B3rdova%20-%20ESP.pdf',
  en: '/docs/CV%20-%20Aldo%20Hernandez%20Cordova%20-%20ENG.pdf'
};

export function PortfolioPage() {
  const [lang, setLang] = useState<Lang>('es');
  const copy = heroCopy[lang];

  const sectionLabels = useMemo(
    () => ({
      projects: { es: 'Proyectos', en: 'Projects' },
      about: { es: 'Sobre mí', en: 'About me' },
      stack: { es: 'Stack tecnológico', en: 'Tech stack' },
      experience: { es: 'Experiencia', en: 'Experience' },
      references: { es: 'Referencias', en: 'References' },
      contact: { es: 'Contacto', en: 'Contact' }
    }),
    []
  );

  return (
    <>
      <Navbar lang={lang} />

      <div className="site-shell">
        <header className="topbar">
          <div>
            <div className="brand">Aldo Hernández Córdova</div>
            <div className="brand-subtitle">Full Stack Developer</div>
          </div>

          <div className="topbar-actions">
            <div className="language-switch" role="tablist" aria-label="Language switch">
              {languageTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={tab.id === lang ? 'language-chip active' : 'language-chip'}
                  onClick={() => setLang(tab.id)}
                  aria-pressed={tab.id === lang}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.headline}</h1>
            <p className="hero-role">{copy.role}</p>
            <p className="hero-intro">{copy.intro}</p>

            <div className="cta-row">
              <a className="button primary" href="#proyectos">
                {copy.primaryCta}
              </a>
              <a className="button secondary" href={cvDocs.es} target="_blank" rel="noreferrer">
                {copy.downloadEs}
              </a>
              <a className="button secondary" href={cvDocs.en} target="_blank" rel="noreferrer">
                {copy.downloadEn}
              </a>
            </div>

            <div className="social-row" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  className="social-link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label[lang]}
                </a>
              ))}
            </div>
          </div>

          <aside className="hero-image">
            <div className="avatar-container">
              <Image
                src="/images/avatar.png"
                alt="Aldo Hernández Córdova"
                width={320}
                height={320}
                priority
                className="avatar-image"
              />
            </div>
          </aside>
        </section>

        <section className="section" id="sobre-mi">
          <div className="section-heading">
            <p className="section-kicker">{sectionLabels.about[lang]}</p>
          </div>
          <p className="section-copy">{summaryCopy[lang]}</p>
        </section>

        <section className="section" id="stack">
          <div className="section-heading">
            <p className="section-kicker">{sectionLabels.stack[lang]}</p>
          </div>
          <div className="skill-grid">
            {skillStack.map((skill) => (
              <article key={skill.name} className="skill-card">
                <div className="skill-icon">{skill.emoji}</div>
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.description[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section terminal-section" id="terminal-interactive">
          <div className="section-heading">
            <p className="section-kicker">Terminal</p>
          </div>
          <Terminal lang={lang} />
        </section>

        <section className="section" id="proyectos">
          <div className="section-heading">
            <p className="section-kicker">{sectionLabels.projects[lang]}</p>
          </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title.es} className="project-card">
              <div className="project-preview" style={{ background: project.accent }}>
                <span>{project.category[lang]}</span>
              </div>
              <div className="project-content">
                <div className="project-topline">
                  <h3>{project.title[lang]}</h3>
                </div>
                <p className="project-summary">{project.summary[lang]}</p>
                <ul className="project-list">
                  {project.bullets[lang].map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links && project.links.length > 0 ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label[lang]}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

        <section className="section" id="experiencia">
          <div className="section-heading">
            <p className="section-kicker">{sectionLabels.experience[lang]}</p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-item">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                </div>
                <div className="timeline-content">
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-role">{item.role[lang]}</p>
                  <ul>
                    {item.bullets[lang].map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="referencias">
          <div className="section-heading">
            <p className="section-kicker">{sectionLabels.references[lang]}</p>
          </div>

          <div className="references-grid">
            {references.map((ref) => (
              <article key={ref.name} className="reference-card">
                <h3>{ref.name}</h3>
                <p className="reference-org">{ref.org}</p>
                <p className="reference-phone">{ref.phone}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="section-heading">
            <p className="section-kicker">{sectionLabels.contact[lang]}</p>
          </div>

          <div className="contact-grid">
            <a href={`mailto:${contact.email}`} className="contact-card">
              <span>Email</span>
              <strong>{contact.email}</strong>
            </a>
            <div className="contact-card">
              <span>{lang === 'es' ? 'Teléfono' : 'Phone'}</span>
              <strong>{contact.phone}</strong>
            </div>
            <div className="contact-card">
              <span>{lang === 'es' ? 'Ubicación' : 'Location'}</span>
              <strong>{contact.location}</strong>
            </div>
          </div>
        </section>

        <footer className="footer-note">
          <span>Next.js</span>
          <span>Portfolio</span>
          <span>EN / ES</span>
        </footer>
      </div>
    </>
  );
}
