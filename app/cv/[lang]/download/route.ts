import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { CvDocument } from '@/components/CvDocument';
import type { Lang } from '@/app/content';

const supportedLangs: Lang[] = ['es', 'en'];

function isLang(value: string): value is Lang {
  return supportedLangs.includes(value as Lang);
}

function buildHtml(lang: Lang, body: string) {
  const title = lang === 'es' ? 'CV Aldo Hernández Córdova' : 'Aldo Hernández Córdova CV';

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <style>
      body { margin: 0; font-family: Arial, sans-serif; background: #f4f6f4; color: #10201a; }
      .wrap { max-width: 1000px; margin: 0 auto; padding: 24px; }
      .note { margin: 0 0 16px; padding: 12px 16px; background: #0f1b17; color: #eef5f0; border-radius: 12px; }
      a { color: inherit; }
      ul { margin: 0; padding-left: 18px; }
      .cv-page { width: auto; margin: 0; padding: 0; background: #fff; color: #10201a; box-shadow: none; }
      .cv-header, .cv-block, .cv-skill-item { background: #fff; border: 1px solid #d8ded9; box-shadow: none; }
      .cv-section h2, .cv-kicker, .cv-role { color: #315b48; }
      .cv-topbar, .cv-actions { display: none !important; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <p class="note">${lang === 'es' ? 'Versión descargable del CV. Abre este archivo y usa imprimir para guardarlo como PDF.' : 'Downloadable CV version. Open this file and use print to save it as PDF.'}</p>
      ${body}
    </div>
  </body>
</html>`;
}

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLang(lang)) {
    return new Response('Not found', { status: 404 });
  }

  const body = renderToStaticMarkup(createElement(CvDocument, { lang, downloadMode: true }));
  const html = buildHtml(lang, body);
  const filename = lang === 'es'
    ? 'Aldo-Hernandez-Cordova-CV-ES.html'
    : 'Aldo-Hernandez-Cordova-CV-EN.html';

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`
    }
  });
}
