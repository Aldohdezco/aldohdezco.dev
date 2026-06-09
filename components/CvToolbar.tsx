'use client';

import Link from 'next/link';
import type { Lang } from '@/app/content';

type CvToolbarProps = {
  lang: Lang;
};

const cvDocs: Record<Lang, string> = {
  es: '/docs/CV%20%E2%80%93%20Aldo%20Hern%C3%A1ndez%20C%C3%B3rdova%20-%20ESP.pdf',
  en: '/docs/CV%20-%20Aldo%20Hernandez%20Cordova%20-%20ENG.pdf'
};

export function CvToolbar({ lang }: CvToolbarProps) {
  return (
    <header className="cv-topbar">
      <Link href="/" className="cv-backlink">
        {lang === 'es' ? 'Volver al portafolio' : 'Back to portfolio'}
      </Link>
      <div className="cv-actions">
        <a href={cvDocs[lang]} className="cv-button" target="_blank" rel="noreferrer">
          {lang === 'es' ? 'Descargar' : 'Download'}
        </a>
        <button type="button" className="cv-button" onClick={() => window.print()}>
          {lang === 'es' ? 'Imprimir / PDF' : 'Print / PDF'}
        </button>
      </div>
    </header>
  );
}
