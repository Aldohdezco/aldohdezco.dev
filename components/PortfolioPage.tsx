'use client';

import { useMemo, useState } from 'react';
import {
  contact,
  education,
  experience,
  heroCopy,
  projects,
  skillStack,
  socialLinks,
  stats,
  summaryCopy,
  type Lang
} from '@/app/content';

const languageTabs: Array<{ id: Lang; label: string }> = [
  { id: 'es', label: 'ES' },
  { id: 'en', label: 'EN' }
];

export function PortfolioPage() {
  const [lang, setLang] = useState<Lang>('es');
  const copy = heroCopy[lang];

  const sectionLabels = useMemo(
    () => ({
      projects: { es: 'Proyectos', en: 'Projects' },
      about: { es: 'Sobre mí', en: 'About me' },
      stack: { es: 'Stack tecnológico', en: 'Tech stack' },
      experience: { es: 'Experiencia y logros', en: 'Experience & achievements' },
      education: { es: 'Educación', en: 'Education' },
      contact: { es: 'Contacto', en: 'Contact' }
    }),
    []
  );

  return (
    <div className="site-shell">
      <header className="topbar">
        <div>
          <div className="brand">Aldo Hernández Córdova</div>
          <div className="brand-subtitle">Full Stack Developer · Next.js portfolio</div>
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
          <p className="hero-pitch">{copy.shortPitch}</p>

          <div className="cta-row">
            <a className="button primary" href="#proyectos">{copy.primaryCta}</a>
            <a className="button secondary" href="/cv/es/download">{copy.downloadEs}</a>
            <a className="button secondary" href="/cv/en/download">{copy.downloadEn}</a>
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

        <aside className="hero-panel" aria-label="Portfolio highlights">
          <div className="avatar-card">
            <div className="avatar-mark">AHC</div>
            <div>
              <p className="avatar-title">Next.js · Full Stack</p>
              <p className="avatar-copy">
                {lang === 'es'
                  ? 'Perfil bilingüe con foco en producto, datos y ejecución.'
                  : 'Bilingual profile focused on product, data, and execution.'}
              </p>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-head">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <p>&gt; help</p>
              <p>&gt; projects</p>
              <p>&gt; skills</p>
              <p>&gt; hire --ready</p>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <article key={item.value} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label[lang]}</span>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="section" id="sobre-mi">
        <div className="section-heading">
          <p className="section-kicker">{sectionLabels.about[lang]}</p>
          <h2>{lang === 'es' ? 'Lo esencial, sin relleno.' : 'The essentials, without fluff.'}</h2>
        </div>
        <p className="section-copy">{summaryCopy[lang]}</p>
      </section>

      <section className="section" id="stack">
        <div className="section-heading">
          <p className="section-kicker">{sectionLabels.stack[lang]}</p>
          <h2>{lang === 'es' ? 'Tecnologías que uso para construir y entregar.' : 'Technologies I use to build and ship.'}</h2>
        </div>
        <div className="skill-grid">
          {skillStack.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.description[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="section-heading">
          <p className="section-kicker">{sectionLabels.projects[lang]}</p>
          <h2>{lang === 'es' ? 'Aquí se ve el trabajo real.' : 'This is where the real work shows.'}</h2>
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
          <h2>{lang === 'es' ? 'Experiencia, investigación y entregables.' : 'Experience, research, and deliverables.'}</h2>
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

      <section className="section" id="educacion">
        <div className="section-heading">
          <p className="section-kicker">{sectionLabels.education[lang]}</p>
          <h2>{lang === 'es' ? 'Formación que respalda el perfil.' : 'Education that supports the profile.'}</h2>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article key={`${item.school}-${item.period}`} className="education-card">
              <div className="education-period">{item.period}</div>
              <div>
                <h3>{item.school}</h3>
                <p className="education-degree">{item.degree[lang]}</p>
                <p className="education-meta">{item.meta[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="section-heading">
          <p className="section-kicker">{sectionLabels.contact[lang]}</p>
          <h2>{lang === 'es' ? 'Listo para conversaciones serias.' : 'Ready for serious conversations.'}</h2>
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
  );
}
