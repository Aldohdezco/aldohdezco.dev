import Link from 'next/link';
import {
  contact,
  education,
  experience,
  heroCopy,
  projects,
  references,
  skillStack,
  summaryCopy,
  type Lang
} from '@/app/content';

type CvDocumentProps = {
  lang: Lang;
  downloadMode?: boolean;
};

export function CvDocument({ lang, downloadMode = false }: CvDocumentProps) {
  const copy = heroCopy[lang];

  return (
    <div className={downloadMode ? 'cv-page cv-page-download' : 'cv-page'}>
      <section className="cv-header">
        <div>
          <p className="cv-kicker">{copy.role}</p>
          <h1>{copy.headline}</h1>
          <p className="cv-summary">{summaryCopy[lang]}</p>
        </div>
        <div className="cv-contact-block">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.phone}</span>
          <span>{contact.location}</span>
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <div className="cv-layout">
        <main className="cv-main">
          <section className="cv-section">
            <h2>{lang === 'es' ? 'Experiencia profesional' : 'Professional experience'}</h2>
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="cv-block">
                <div className="cv-block-header">
                  <strong>{item.company}</strong>
                  <span>{item.period}</span>
                </div>
                <p className="cv-role">{item.role[lang]}</p>
                <ul>
                  {item.bullets[lang].map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="cv-section">
            <h2>{lang === 'es' ? 'Proyectos relevantes' : 'Relevant projects'}</h2>
            {projects.map((project) => (
              <article key={project.title.es} className="cv-block">
                <div className="cv-block-header">
                  <strong>{project.title[lang]}</strong>
                  <span>{project.category[lang]}</span>
                </div>
                <p>{project.summary[lang]}</p>
                <ul>
                  {project.bullets[lang].slice(0, 3).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </main>

        <aside className="cv-sidebar">
          <section className="cv-section">
            <h2>{lang === 'es' ? 'Habilidades' : 'Skills'}</h2>
            <div className="cv-skill-list">
              {skillStack.map((skill) => (
                <article key={skill.name} className="cv-skill-item">
                  <div className="cv-skill-icon">{skill.icon}</div>
                  <div>
                    <strong>{skill.name}</strong>
                    <p>{skill.description[lang]}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2>{lang === 'es' ? 'Educación' : 'Education'}</h2>
            {education.map((item) => (
              <article key={`${item.school}-${item.period}`} className="cv-block cv-block-compact">
                <div className="cv-block-header">
                  <strong>{item.school}</strong>
                  <span>{item.period}</span>
                </div>
                <p className="cv-role">{item.degree[lang]}</p>
                <p>{item.meta[lang]}</p>
              </article>
            ))}
          </section>

          <section className="cv-section">
            <h2>{lang === 'es' ? 'Referencias' : 'References'}</h2>
            {references.map((reference) => (
              <article key={reference.name} className="cv-block cv-block-compact">
                <strong>{reference.name}</strong>
                <p>{reference.org}</p>
                <p>{reference.phone}</p>
              </article>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
}
