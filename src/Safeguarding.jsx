import React from 'react';
import { Card, Section } from 'summitprovision';
import { Shell, PageHeader, EMAIL } from './chrome.jsx';

export default function Safeguarding() {
  return (
    <Shell current="/safeguarding/">
      <PageHeader
        eyebrow="Safeguarding"
        title="Safeguarding comes first"
        lead="Summit Alternative Education works with young people at vulnerable moments. That shapes how we recruit, how we deliver sessions and how we communicate with the adults around each young person."
      />
      <Section variant="cloud">
        <h2>What we commit to</h2>
        <div className="sg-grid">
          <div className="num-block" data-rv>
            <h3>DBS checked, always</h3>
            <p>Every contractor working with us is DBS checked. There are no exceptions.</p>
          </div>
          <div className="num-block" data-rv>
            <h3>Published policies</h3>
            <p>Our safeguarding policy and code of conduct are published. If you would like a copy, ask and we will send them.</p>
          </div>
          <div className="num-block" data-rv>
            <h3>Working alongside others</h3>
            <p>We work alongside schools, families and local authorities rather than around them, so the adults in a young person's life stay informed.</p>
          </div>
        </div>
      </Section>
      <div id="policies">
        <Section variant="subtle">
          <h2>Our policies</h2>
          <div className="sg-pol">
            <div data-rv><Card eyebrow="Policy" title="Safeguarding policy" href={`mailto:${EMAIL}`} linkLabel="Request a copy"><p>How we keep young people safe across every session and setting.</p></Card></div>
            <div id="conduct" data-rv><Card eyebrow="Policy" title="Code of conduct" href={`mailto:${EMAIL}`} linkLabel="Request a copy"><p>The standards every adult working with Summit signs up to.</p></Card></div>
          </div>
        </Section>
      </div>
      <Section variant="cloud">
        <h2>If you have a concern</h2>
        <p className="hp-lead-measure">If you are worried about a young person we work with, contact Robert Williams directly and we will act on it.</p>
        <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p className="sp-small hp-lead-measure">If a young person is in immediate danger, call 999.</p>
      </Section>
    </Shell>
  );
}
