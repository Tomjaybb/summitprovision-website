import React from 'react';
import { Card, Section } from 'summitprovision';
import { Shell, PageHeader, NumBlock } from './chrome.jsx';

const PAIR_CARDS = {
  tutoring: { title: 'Bespoke Tutoring', href: '/programmes/tutoring/', copy: "One to one teaching in flexible settings, at the young person's pace." },
  mentoring: { title: 'Mentoring & Talk Sessions', href: '/programmes/mentoring/', copy: 'Regular time with a trusted adult to work through what is getting in the way.' },
  'risk-intervention': { title: 'Risk & Intervention Support', href: '/programmes/risk-intervention/', copy: 'Steady support for young people facing pressures outside school.' },
  reintegration: { title: 'Reintegration Pathway', href: '/programmes/reintegration/', copy: 'A planned, supported return to education, coordinated with school and family.' },
};

export const PROGRAMMES = [
  {
    slug: 'tutoring',
    title: 'Bespoke Tutoring',
    metaTitle: 'Bespoke Tutoring, one to one teaching from Summit Alternative Education',
    metaDescription: "One to one teaching in flexible settings, at the young person's pace. Bespoke Tutoring from Summit fills academic gaps and rebuilds confidence in being taught.",
    lead: "One to one teaching in flexible settings, at the young person's pace. Tutoring fills academic gaps and rebuilds confidence in being taught, one steady session at a time.",
    sectionTitle: 'What sessions look like',
    numbered: false,
    blocks: [
      { title: 'One tutor, one young person', copy: 'The same tutor each time, so trust can build. Sessions happen in a setting that works for the young person and their family.' },
      { title: 'Built from the assessment', copy: 'Teaching starts where the gaps actually are, not where a year group says they should be. The plan adjusts as confidence grows.' },
      { title: 'Progress you can see', copy: 'Every session is recorded and progress is shared with school and family, so the route back into education stays visible.' },
    ],
    pairs: ['mentoring', 'reintegration'],
  },
  {
    slug: 'mentoring',
    title: 'Mentoring & Talk Sessions',
    metaTitle: 'Mentoring and Talk Sessions from Summit Alternative Education',
    metaDescription: 'Regular time with a trusted adult to work through what is getting in the way. Mentoring and Talk Sessions from Summit are consistent, low pressure and led by the young person.',
    lead: 'Regular time with a trusted adult to work through what is getting in the way. Consistent, low pressure and led by the young person.',
    sectionTitle: 'What sessions look like',
    numbered: false,
    blocks: [
      { title: 'The same adult, every time', copy: 'Trust grows through consistency. Sessions happen at a regular time, with a mentor who turns up and keeps turning up.' },
      { title: 'Led by the young person', copy: 'Some sessions are talking, some are walking or doing. There is no script to get through, and no pressure to open up before they are ready.' },
      { title: 'Connected to the bigger plan', copy: 'What comes up in mentoring quietly shapes the rest of the package, and anything important is shared with the right adults, safeguarding led throughout.' },
    ],
    pairs: ['tutoring', 'risk-intervention'],
  },
  {
    slug: 'life-skills',
    title: 'Life Skills & Cooking',
    metaTitle: 'Life Skills and Cooking from Summit Alternative Education',
    metaDescription: 'Practical skills, cooking, movement and reflection. Life Skills sessions from Summit build independence, routine and something to feel proud of.',
    lead: 'Practical skills, cooking, movement and reflection. These sessions build independence, routine and something to feel proud of.',
    sectionTitle: 'What sessions look like',
    numbered: false,
    blocks: [
      { title: 'Hands on, not desk bound', copy: 'Cooking a meal, planning a budget, getting moving. Learning happens through doing, which suits many young people better than a classroom.' },
      { title: 'Routine that holds', copy: 'Sessions run at a steady rhythm, building the structure of a day back up gently. Small wins stack into habits.' },
      { title: 'Room to reflect', copy: 'Doing something practical makes talking easier. Reflection is woven through each session rather than bolted on.' },
    ],
    pairs: ['mentoring', 'tutoring'],
  },
  {
    slug: 'risk-intervention',
    title: 'Risk & Intervention Support',
    metaTitle: 'Risk and Intervention Support from Summit Alternative Education',
    metaDescription: 'Steady support for young people facing pressures outside school, safeguarding led throughout and working alongside the adults already involved.',
    lead: 'Steady support for young people facing pressures outside school. Safeguarding led throughout, working alongside the adults already involved.',
    sectionTitle: 'How this support works',
    numbered: false,
    blocks: [
      { title: 'Steady, not sudden', copy: 'Consistent sessions with the same adult, at a pace the young person can manage. Stability is the intervention.' },
      { title: 'Safeguarding led', copy: 'Concerns are recorded and shared through the proper channels, every time. Our safeguarding policy and code of conduct are published.' },
      { title: 'Alongside, not instead', copy: 'We work with the school, family and any professionals already around the young person, adding to the picture rather than duplicating it.' },
    ],
    pairs: ['mentoring', 'reintegration'],
  },
  {
    slug: 'reintegration',
    title: 'Reintegration Pathway',
    metaTitle: 'Reintegration Pathway, a supported return to education from Summit Alternative Education',
    metaDescription: 'A planned, supported return to education, coordinated with school and family. The Reintegration Pathway from Summit tracks progress and shares it, so the way back is clear.',
    lead: 'A planned, supported return to education, coordinated with school and family. Progress is tracked and shared, so the way back is clear to everyone walking it.',
    sectionTitle: 'How the return is planned',
    numbered: true,
    blocks: [
      { title: 'A plan, not a leap', copy: 'The return is broken into small, agreed steps, sized to what the young person can manage now rather than all at once.' },
      { title: 'Everyone in the loop', copy: 'School, family and any other professionals agree the plan together, so the young person hears one consistent message.' },
      { title: 'Tracked and adjusted', copy: 'Progress is recorded session by session and shared. If a step proves too big, the plan flexes rather than fails.' },
    ],
    pairs: ['tutoring', 'mentoring'],
  },
];

export function ProgrammeDetail({ programme }) {
  return (
    <Shell current="/programmes/" bannerDividerOn="subtle">
      <PageHeader eyebrow="Programmes" eyebrowHref="/programmes/" title={programme.title} lead={programme.lead} />
      <Section variant="cloud">
        <h2>{programme.sectionTitle}</h2>
        <div className="pd-steps">
          {programme.blocks.map((b, i) => (
            <NumBlock key={b.title} num={programme.numbered ? String(i + 1).padStart(2, '0') : undefined} title={b.title}>{b.copy}</NumBlock>
          ))}
        </div>
      </Section>
      <Section variant="subtle">
        <h2>Often paired with</h2>
        <div className="pd-pair">
          {programme.pairs.map((slug) => {
            const p = PAIR_CARDS[slug];
            return <div key={slug} data-rv><Card eyebrow="Programme" title={p.title} href={p.href}><p>{p.copy}</p></Card></div>;
          })}
        </div>
        <p className="hp-section-link"><a className="hp-strong-link" href="/programmes/">All programmes</a></p>
      </Section>
    </Shell>
  );
}
