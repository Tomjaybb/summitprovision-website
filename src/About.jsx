import React from 'react';
import { Section } from 'summitprovision';
import { Shell, PageHeader, NumBlock, EMAIL } from './chrome.jsx';

export default function About() {
  return (
    <Shell current="/about/">
      <PageHeader
        eyebrow="About Summit"
        title="A calm, tailored route back to learning"
        lead="Summit Alternative Education works with young people who are out of school, at risk of exclusion, or finding mainstream classrooms hard. We build education around the young person, then walk with them back towards it."
      />
      <div id="approach">
        <Section variant="cloud">
          <p className="sp-eyebrow">How we work</p>
          <h2>The Summit approach, in full</h2>
          <div className="ab-pillars">
            <NumBlock num="01" title="Connect">Everything starts with trust. Early sessions are short, calm and predictable, often built around something the young person already enjoys. We do not rush this stage: nothing else works until a young person feels safe with us.</NumBlock>
            <NumBlock num="02" title="Assess">Once trust is there, we look carefully at where the academic gaps are and what is really getting in the way of learning. That picture comes from the young person, their family and their school, not from a single test.</NumBlock>
            <NumBlock num="03" title="Support">Tutoring, mentoring and life skills are shaped around the young person rather than a timetable. Sessions go at a pace that works, and the plan changes as the young person does.</NumBlock>
            <NumBlock num="04" title="Reintegrate">The goal is a meaningful return to education. Progress is tracked session by session and shared with school and family, so everyone can see the route back.</NumBlock>
          </div>
        </Section>
      </div>
      <Section variant="subtle">
        <h2>Who you will speak to</h2>
        <p className="hp-lead-measure">Every conversation starts with Robert Williams. Ask a question, share what is happening, or talk something through: nothing formal is needed to begin.</p>
        <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
      </Section>
      <Section variant="cloud">
        <h2>Who we help</h2>
        <div className="ab-help">
          <div id="parents" className="num-block" data-rv>
            <h3>For parents and carers</h3>
            <p>You know your young person better than anyone, and we listen before we plan. First conversations are just that: conversations. Sessions are calm and consistent, and you will always know how they are going. You can ask a question at any point, nothing formal needed.</p>
            <p><a className="hp-strong-link" href="/contact/">Ask a question</a></p>
          </div>
          <div id="schools" className="num-block" data-rv>
            <h3>For schools and local authorities</h3>
            <p>We build bespoke packages from assessed need, not off-the-shelf timetables. Progress is tracked session by session and shared with you, and our safeguarding led delivery sits alongside your own processes. Reintegration is planned from the start.</p>
            <p><a className="hp-strong-link" href="/programmes/">See our programmes</a></p>
          </div>
          <div id="young-people" className="num-block" data-rv>
            <h3>For young people</h3>
            <p>Nobody here is going to judge you. Sessions go at your pace, not someone else's. You get a say in what they look like. And if something is not working, you can say so.</p>
            <p><a className="hp-strong-link" href="/contact/">Ask us anything</a></p>
          </div>
        </div>
      </Section>
    </Shell>
  );
}
