import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { Section } from 'summitprovision';
import Homepage from './Homepage.jsx';
import About from './About.jsx';
import Programmes from './Programmes.jsx';
import Safeguarding from './Safeguarding.jsx';
import Contact from './Contact.jsx';
import { ProgrammeDetail, PROGRAMMES } from './ProgrammeDetail.jsx';
import { Shell } from './chrome.jsx';

const DIST = resolve('dist');
const ORIGIN = 'https://www.summitprovision.com';

function NotFound() {
  return (
    <Shell current="">
      <Section variant="cloud">
        <p className="sp-eyebrow">404</p>
        <h1>This path does not reach a page</h1>
        <p className="sp-lead hp-lead-measure">The page you were looking for is not here. The homepage has everything: our approach, programmes, safeguarding and how to reach us.</p>
        <p><a className="sp-btn sp-btn--secondary" href="/">Back to the homepage</a></p>
      </Section>
    </Shell>
  );
}

const PAGES = [
  { path: 'index.html', url: '/', title: 'Summit Alternative Education, bespoke alternative provision for young people', description: 'Summit provides bespoke alternative education for young people who are struggling in school or learning from home. One to one tutoring, mentoring and life skills, with a clear route back into education.', el: <Homepage /> },
  { path: 'about/index.html', url: '/about/', title: 'About Summit Alternative Education, our approach and who we help', description: 'How Summit Alternative Education works: trust first, careful assessment, bespoke support and a planned return to education, with information for parents, schools and young people.', el: <About /> },
  { path: 'programmes/index.html', url: '/programmes/', title: 'Programmes, bespoke tutoring, mentoring and life skills from Summit Alternative Education', description: 'Summit builds one bespoke package for each young person: tutoring, mentoring, life skills, risk and intervention support, and a planned reintegration pathway.', el: <Programmes /> },
  { path: 'safeguarding/index.html', url: '/safeguarding/', title: 'Safeguarding at Summit Alternative Education', description: 'Safeguarding comes first at Summit Alternative Education: DBS checked contractors, a published safeguarding policy and code of conduct, and clear routes to raise a concern.', el: <Safeguarding /> },
  { path: 'contact/index.html', url: '/contact/', title: 'Contact Summit Alternative Education, start a conversation', description: 'Start a conversation with Summit Alternative Education. Email Robert Williams directly or send a short note: no referral form is needed to ask a question.', el: <Contact /> },
  ...PROGRAMMES.map((p) => ({
    path: `programmes/${p.slug}/index.html`,
    url: `/programmes/${p.slug}/`,
    title: p.metaTitle,
    description: p.metaDescription,
    el: <ProgrammeDetail programme={p} />,
  })),
  { path: '404.html', url: null, title: 'Page not found | Summit Alternative Education', description: 'That page is not here. Find our approach, programmes and contact details from the Summit homepage.', el: <NotFound /> },
];

for (const p of PAGES) {
  const canonical = p.url ? ORIGIN + p.url : ORIGIN + '/';
  const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title}</title>
<meta name="description" content="${p.description}">
${p.url ? `<link rel="canonical" href="${canonical}">` : '<meta name="robots" content="noindex">'}
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ORIGIN}/summit-logo.png">
<link rel="icon" type="image/png" href="/summit-logo.png">
<link rel="preload" href="/fonts/EBGaramond-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/SourceSans3-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
</head>
<body class="sp-root">
${renderToStaticMarkup(p.el)}
<script src="/site.js" defer></script>
</body>
</html>
`;
  const out = join(DIST, p.path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log('wrote', p.path);
}

const today = process.env.SITEMAP_DATE || '2026-08-22';
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.filter((p) => p.url).map((p) => `  <url><loc>${ORIGIN}${p.url}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap);
console.log('wrote sitemap.xml');
