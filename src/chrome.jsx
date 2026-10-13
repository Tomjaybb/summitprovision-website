import React from 'react';
import { SummitRoot, Header, Footer, Section, PeakDivider, ReferralBanner } from 'summitprovision';

export const EMAIL = 'robertwilliams@summitprovision.com';

const NAV = [
  { label: 'About', href: '/about/' },
  { label: 'Programmes', href: '/programmes/' },
  { label: 'Safeguarding', href: '/safeguarding/' },
  { label: 'Contact', href: '/contact/' },
];

const SITE_LINKS = [
  { label: 'About & Approach', href: '/about/' },
  { label: 'Programmes', href: '/programmes/' },
  { label: 'Safeguarding', href: '/safeguarding/' },
  { label: 'Contact & Referrals', href: '/contact/' },
];
const TRUST_LINKS = [
  { label: 'Our Policies', href: '/safeguarding/#policies' },
  { label: 'Code of Conduct', href: '/safeguarding/#conduct' },
];

export function Shell({ current, children, banner = true, bannerDividerOn = 'cloud', mobileBar = false }) {
  const nav = NAV.map((n) => ({ ...n, current: n.href === current }));
  return (
    <SummitRoot>
      <a href="#main" className="hp-skip">Skip to main content</a>
      <div className="hp-header-wrap" id="hp-header">
        <Header navItems={nav} ctaLabel="Start a conversation" ctaHref="/contact/" />
        <button className="hp-menu" type="button" aria-expanded="false" aria-controls="hp-mobile-nav" id="hp-menu-btn">Menu</button>
        <nav id="hp-mobile-nav" className="hp-mobile-nav" aria-label="Site menu" hidden>
          {nav.map((n) => (
            <a key={n.href} href={n.href} aria-current={n.current ? 'page' : undefined}>{n.label}</a>
          ))}
        </nav>
      </div>
      <main id="main">
        {children}
        {banner && (
          <div id="hp-banner">
            <div className={bannerDividerOn === 'subtle' ? 'hp-divider-subtle' : undefined}><PeakDivider /></div>
            <ReferralBanner
              title="Talk to us about the young person"
              lead="Whether you are a parent, a school or a local authority, the first step is the same: a conversation about what the young person needs."
              primaryLabel="Start a conversation"
              primaryHref="/contact/"
              secondaryLabel="Talk to us first"
              secondaryHref="/contact/"
              email={EMAIL}
            />
          </div>
        )}
      </main>
      <Footer siteLinks={SITE_LINKS} trustLinks={TRUST_LINKS} email={EMAIL} contactName="Robert Williams" />
      {mobileBar && (
        <div className="hp-mab" id="hp-mab" hidden>
          <a className="sp-btn sp-btn--primary" href="/contact/">Start a conversation</a>
        </div>
      )}
    </SummitRoot>
  );
}

export function PageHeader({ eyebrow, eyebrowHref, title, lead }) {
  return (
    <Section variant="subtle">
      <p className="sp-eyebrow">{eyebrowHref ? <a href={eyebrowHref} className="hp-eyebrow-link">{eyebrow}</a> : eyebrow}</p>
      <h1>{title}</h1>
      <p className="sp-lead hp-lead-measure">{lead}</p>
    </Section>
  );
}

export function NumBlock({ num, title, children }) {
  return (
    <div className="num-block" data-rv>
      {num && <p className="num-block__num">{num}</p>}
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
