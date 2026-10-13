import React from 'react';
import { Button, Card, Section, PeakDivider, PillarRow, PillarStep } from 'summitprovision';
import { Shell } from './chrome.jsx';

function Hero() {
  return (
    <div className="hp-hero" data-screen-label="Hero">
      <div
        role="img"
        aria-label="An illustrated early morning mountain scene drawn from the Summit logo: three layered green peaks rising from a deep forest ground, beneath a warm orange sun in the upper right of the sky."
        className="hp-hero-art"
      >
        <div aria-hidden="true" className="hp-sun-halo" />
        <div aria-hidden="true" className="hp-sun" />
        <svg aria-hidden="true" viewBox="0 0 1440 480" preserveAspectRatio="xMidYMax slice" className="hp-peaks">
          <path d="M-60 480 L330 180 L720 480 Z" fill="var(--muted)" opacity="0.30" />
          <path d="M540 480 L920 110 L1310 480 Z" fill="var(--muted)" opacity="0.30" />
          <path d="M1100 480 L1370 220 L1660 480 Z" fill="var(--muted)" opacity="0.30" />
          <path d="M60 480 L470 230 L880 480 Z" fill="var(--support)" opacity="0.38" />
          <path d="M780 480 L1140 190 L1500 480 Z" fill="var(--support)" opacity="0.38" />
          <path d="M-140 480 L330 290 L800 480 Z" fill="var(--primary-soft)" opacity="0.9" />
          <path d="M520 480 L1000 250 L1460 480 Z" fill="var(--primary-soft)" opacity="0.9" />
        </svg>
      </div>
      <div className="sp-container hp-hero-inner">
        <div className="hp-hero-copy">
          <p className="hp-motto" data-rv>Discover. Learn. Excel.</p>
          <h1 className="hp-hero-title" data-rv>Not every young person fits the same box.</h1>
          <p className="sp-lead hp-hero-lead" data-rv>
            Summit provides bespoke alternative education for young people who are struggling in school or
            learning from home. One to one tutoring, mentoring and life skills, delivered at a pace that works,
            with a clear route back into education.
          </p>
          <div className="hp-hero-actions" data-rv>
            <Button variant="primary" href="/contact/">Start a conversation</Button>
            <a className="hp-quiet-link" href="#how-we-work">See how we work</a>
          </div>
          <p className="hp-micro" data-rv>Speak to Robert Williams directly. No referral form needed to ask a question.</p>
        </div>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <Shell current="/" mobileBar bannerDividerOn="subtle">
      <Hero />
      <section id="trust" aria-label="Safeguarding and trust" className="hp-trust-band">
        <div className="sp-container">
          <div className="hp-trust">
            <p data-rv>Every contractor working with us is DBS checked.</p>
            <p data-rv>Safeguarding policy and code of conduct published.</p>
            <p data-rv>Working alongside schools, families and local authorities.</p>
          </div>
        </div>
      </section>
      <div id="how-we-work" data-screen-label="The four pillars">
        <div className="hp-divider-subtle"><PeakDivider /></div>
        <Section variant="forest">
          <p className="sp-eyebrow hp-eyebrow-inverse">How we work</p>
          <h2>The Summit approach</h2>
          <div className="hp-pillars">
            <PillarRow>
              <div data-rv>
                <PillarStep number={1} title="Connect">We build trust first, through calm, consistent sessions. Nothing else works until a young person feels safe with us.</PillarStep>
              </div>
              <div data-rv>
                <PillarStep number={2} title="Assess">We explore where the academic gaps are and what is really getting in the way of learning.</PillarStep>
              </div>
              <div data-rv>
                <PillarStep number={3} title="Support">Tutoring, conversation and gentle structure, shaped around the young person rather than a timetable.</PillarStep>
              </div>
              <div data-rv>
                <PillarStep number={4} title="Reintegrate">A meaningful return to education, with progress tracked and shared with school and family.</PillarStep>
              </div>
            </PillarRow>
          </div>
          <div className="hp-section-link">
            <a className="hp-quiet-link" href="/about/">Our approach in full: how we work</a>
          </div>
        </Section>
      </div>
      <div id="programmes" data-screen-label="Programmes">
        <Section variant="cloud">
          <p className="sp-eyebrow">Programmes</p>
          <h2>Built around the young person</h2>
          <div className="hp-grid-prog">
            <div data-rv><Card eyebrow="Programme" title="Bespoke Tutoring" href="/programmes/tutoring/"><p>One to one teaching in flexible settings, filling academic gaps at the young person's pace.</p></Card></div>
            <div data-rv><Card eyebrow="Programme" title="Mentoring & Talk Sessions" href="/programmes/mentoring/"><p>Regular time with a trusted adult to work through what is getting in the way.</p></Card></div>
            <div data-rv><Card eyebrow="Programme" title="Life Skills & Cooking" href="/programmes/life-skills/"><p>Practical skills, cooking, movement and reflection, building independence and routine.</p></Card></div>
            <div data-rv><Card eyebrow="Programme" title="Risk & Intervention Support" href="/programmes/risk-intervention/"><p>Steady support for young people facing pressures outside school, safeguarding led throughout.</p></Card></div>
            <div data-rv><Card eyebrow="Programme" title="Reintegration Pathway" href="/programmes/reintegration/" featured linkLabel="How reintegration works"><p>A planned, supported return to education, coordinated with school and family.</p></Card></div>
            <div data-rv><Card eyebrow="Overview" title="All programmes" href="/programmes/" linkLabel="See all programmes"><p>See how the parts fit together into one bespoke package.</p></Card></div>
          </div>
        </Section>
      </div>
      <div id="who-we-help" data-screen-label="Who we help">
        <Section variant="subtle">
          <h2>Who we help</h2>
          <div className="hp-grid-help">
            <div data-rv><Card title="For parents and carers" href="/about/#parents" linkLabel="Information for parents and carers" topBar={false}><p>You know your young person better than anyone, and we listen before we plan. Sessions are calm and consistent, shaped around what your family needs. You can ask a question first, nothing formal needed.</p></Card></div>
            <div data-rv><Card title="For schools and local authorities" href="/about/#schools" linkLabel="Information for schools and local authorities" topBar={false}><p>Bespoke packages built from assessed need. Progress tracked session by session and shared with you. Safeguarding led delivery that works alongside your own processes.</p></Card></div>
            <div data-rv><Card title="For young people" href="/about/#young-people" linkLabel="What sessions are like" topBar={false}><p>Nobody here is going to judge you. Sessions go at your pace, not someone else's. You get a say in what they look like.</p></Card></div>
          </div>
        </Section>
      </div>
    </Shell>
  );
}
