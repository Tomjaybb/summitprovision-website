import React from 'react';

const PEAK_ICON = (
  <svg className="sp-pillar__icon" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M4 26 L13 10 L20 26 Z" />
    <path d="M17 26 L23 15 L29 26 Z" />
    <circle cx="25" cy="8" r="3" />
  </svg>
);

/**
 * One step of the Summit approach, for use inside a `forest` Section (usually via PillarRow).
 * Renders a thin-line peak icon, a serif numeral (01 to 04), heading and short body in Cloud.
 * The four pillars are always Connect, Assess, Support, Reintegrate, in that order.
 */
export function PillarStep({ number, title, children }: PillarStepProps) {
  return (
    <div className="sp-pillar">
      {PEAK_ICON}
      <div className="sp-pillar__num">{String(number).padStart(2, '0')}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
export interface PillarStepProps {
  /** 1 to 4, rendered as 01 to 04 */
  number: number;
  title: string;
  /** One or two lines of supporting copy */
  children?: React.ReactNode;
}

/**
 * Grid for the four PillarStep items: four across on desktop, two on tablet, stacked on
 * mobile, with a thin Sage rule between items. Place inside a `forest` Section.
 */
export function PillarRow({ children }: PillarRowProps) {
  return <div className="sp-pillar-row">{children}</div>;
}
export interface PillarRowProps {
  /** Four PillarStep elements */
  children?: React.ReactNode;
}

/**
 * Quote block for parent, school or young-person feedback. Serif quote with a Sage rule and a
 * role-only attribution ("Parent, Year 9"): never full names, photographs or star ratings.
 * Summit has no approved testimonials yet, so ship pages without it until consent is recorded.
 */
export function TestimonialBlock({ quote, attribution }: TestimonialBlockProps) {
  return (
    <figure className="sp-quote">
      <blockquote className="sp-quote__text">{quote}</blockquote>
      <figcaption className="sp-quote__attr">{attribution}</figcaption>
    </figure>
  );
}
export interface TestimonialBlockProps {
  quote: string;
  /** Role plus context only, e.g. "Parent, Year 9" or "SENCO, partner school" */
  attribution: string;
}

/**
 * Full-bleed Forest call-to-action band repeated at the foot of every page except Contact.
 * Serif heading, one supporting line, a primary Sun button plus an inverse button, and the
 * contact email underneath. Pair with a PeakDivider directly above it.
 */
export function ReferralBanner({
  title = 'Ready to start a conversation?',
  lead = 'Tell us about the young person. We will listen first, then shape a plan together.',
  primaryLabel = 'Make a referral',
  primaryHref = '/contact#referral',
  secondaryLabel = 'Talk to us first',
  secondaryHref = '/contact',
  email = 'robertwilliams@summitprovision.com',
}: ReferralBannerProps) {
  return (
    <div className="sp-banner">
      <div className="sp-container">
        <h2>{title}</h2>
        <p className="sp-banner__lead">{lead}</p>
        <div className="sp-banner__actions">
          <a className="sp-btn sp-btn--primary" href={primaryHref}>{primaryLabel}</a>
          <a className="sp-btn sp-btn--inverse" href={secondaryHref}>{secondaryLabel}</a>
        </div>
        <p className="sp-banner__contact">
          Or email <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
}
export interface ReferralBannerProps {
  title?: string;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Shown under the buttons as a mailto link */
  email?: string;
}
