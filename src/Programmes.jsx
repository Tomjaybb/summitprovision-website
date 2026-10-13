import React from 'react';
import { Card, Section } from 'summitprovision';
import { Shell, PageHeader, NumBlock } from './chrome.jsx';

export default function Programmes() {
  return (
    <Shell current="/programmes/" bannerDividerOn="subtle">
      <PageHeader
        eyebrow="Programmes"
        title="Built around the young person"
        lead="There is no set menu at Summit Alternative Education. After a first conversation and a careful assessment, we build one bespoke package from the parts below, then keep adjusting it as the young person grows."
      />
      <Section variant="cloud">
        <div className="pr-grid">
          <div data-rv><Card eyebrow="Programme" title="Bespoke Tutoring" href="/programmes/tutoring/"><p>One to one teaching in flexible settings, at the young person's pace. Sessions fill academic gaps and rebuild confidence in being taught.</p></Card></div>
          <div data-rv><Card eyebrow="Programme" title="Mentoring & Talk Sessions" href="/programmes/mentoring/"><p>Regular time with a trusted adult to work through what is getting in the way. Consistent, low pressure and led by the young person.</p></Card></div>
          <div data-rv><Card eyebrow="Programme" title="Life Skills & Cooking" href="/programmes/life-skills/"><p>Practical skills, cooking, movement and reflection. Sessions build independence, routine and something to feel proud of.</p></Card></div>
          <div data-rv><Card eyebrow="Programme" title="Risk & Intervention Support" href="/programmes/risk-intervention/"><p>Steady support for young people facing pressures outside school. Safeguarding led throughout, working alongside the adults already involved.</p></Card></div>
          <div className="pr-grid-full" data-rv><Card eyebrow="Programme" title="Reintegration Pathway" href="/programmes/reintegration/" featured linkLabel="How reintegration works"><p>A planned, supported return to education, coordinated with school and family. Progress is tracked and shared, so the way back is clear to everyone walking it.</p></Card></div>
        </div>
      </Section>
      <Section variant="subtle">
        <h2>How a package comes together</h2>
        <div className="pr-steps">
          <NumBlock num="01" title="A conversation">You tell us what is happening and what you need. No referral form is needed to ask a question.</NumBlock>
          <NumBlock num="02" title="A gentle assessment">We explore the academic gaps and the barriers around them, with the young person and the adults who know them.</NumBlock>
          <NumBlock num="03" title="A bespoke package">We propose a package built from the programmes above, then review it with you as it runs.</NumBlock>
        </div>
      </Section>
    </Shell>
  );
}
