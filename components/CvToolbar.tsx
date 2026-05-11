'use client';

import Link from 'next/link';
import type { Lang } from '@/app/content';

type CvToolbarProps = {
  lang: Lang;
};

export function CvToolbar({ lang }: CvToolbarProps) {
  return (
    <header className="cv-topbar">
      <Link href="/" className="cv-backlink">
        {lang === 'es' ? 'Volver al portafolio' : 'Back to portfolio'}
      </Link>
      <div className="cv-actions">
        <Link href={`/${lang === 'es' ? 'cv/es/download' : 'cv/en/download'}`} className="cv-button">
          {lang === 'es' ? 'Descargar' : 'Download'}
        </Link>
        <button type="button" className="cv-button" onClick={() => window.print()}>
          {lang === 'es' ? 'Imprimir / PDF' : 'Print / PDF'}
        </button>
      </div>
    </header>
  );
}
