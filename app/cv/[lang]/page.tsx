import { notFound } from 'next/navigation';
import { CvDocument } from '@/components/CvDocument';
import { CvToolbar } from '@/components/CvToolbar';
import type { Lang } from '@/app/content';

const supportedLangs: Lang[] = ['es', 'en'];

function isLang(value: string): value is Lang {
  return supportedLangs.includes(value as Lang);
}

export default async function CvPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const resolvedLang = lang as Lang;

  return (
    <>
      <CvToolbar lang={resolvedLang} />
      <CvDocument lang={resolvedLang} />
    </>
  );
}
