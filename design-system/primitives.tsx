import React from 'react';

/**
 * Page-level wrapper that applies Summit's base typography, background and text colour.
 * Wrap every page or preview in this once; components assume its styles are present.
 */
export function SummitRoot({ children }: SummitRootProps) {
  return <div className="sp-root">{children}</div>;
}
export interface SummitRootProps {
  children?: React.ReactNode;
}

/**
 * The Summit logo lockup: three-peak mountain mark with an orange sun, serif "Summit"
 * wordmark and spaced "EDUCATION" small caps. Use `reversed` on Forest backgrounds.
 */
export function Logo({ reversed = false, markOnly = false, href }: LogoProps) {
  const mark = (
    <svg width="44" height="36" viewBox="0 0 44 36" aria-hidden="true">
      <circle cx="35" cy="7" r="5" fill="#EE8A3B" />
      <path d="M2 32 L15 8 L26 32 Z" fill={reversed ? '#A9C483' : '#2C5545'} />
      <path d="M9 32 L14 24 L18 32 Z" fill={reversed ? '#FAFAF7' : '#47714F'} opacity="0.9" />
      <path d="M20 32 L30 15 L42 32 Z" fill={reversed ? '#6FA04C' : '#6FA04C'} />
    </svg>
  );
  const word = !markOnly && (
    <span>
      <span className="sp-logo__word">Summit</span>
      <br />
      <span className="sp-logo__sub">Education</span>
    </span>
  );
  const cls = `sp-logo${reversed ? ' sp-logo--reversed' : ''}`;
  if (href) {
    return <a className={cls} href={href} aria-label="Summit Education home">{mark}{word}</a>;
  }
  return <span className={cls}>{mark}{word}</span>;
}
export interface LogoProps {
  /** Light-on-dark variant for Forest backgrounds */
  reversed?: boolean;
  /** Mountain mark only, no wordmark */
  markOnly?: boolean;
  /** When set, the lockup becomes a home link */
  href?: string;
}

/**
 * Summit button. Primary (Sun fill) is the single call to action per view: "Make a referral",
 * "Start a conversation". Secondary is a Forest outline; inverse sits on Forest bands;
 * link renders as an inline text link.
 */
export function Button({ variant = 'primary', href, children, disabled, onClick, type = 'button' }: ButtonProps) {
  const cls = `sp-btn sp-btn--${variant}`;
  if (href) {
    return (
      <a className={cls} href={disabled ? undefined : href} aria-disabled={disabled || undefined}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
export interface ButtonProps {
  /** primary = Sun fill with deep-charcoal label; secondary = Forest outline; inverse = Cloud outline for Forest bands; link = inline text link */
  variant?: 'primary' | 'secondary' | 'inverse' | 'link';
  /** Renders an anchor instead of a button */
  href?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

/**
 * Content card on a white surface: optional eyebrow, heading, body, one text link.
 * The whole card is the link target when `href` is set, with the heading as its accessible name.
 * `featured` switches the top bar from Sage to Sun; use on at most one card per grid.
 */
export function Card({ eyebrow, title, children, href, linkLabel, featured = false, topBar = true }: CardProps) {
  const cls = `sp-card${topBar ? ' sp-card--bar' : ''}${featured ? ' sp-card--featured' : ''}`;
  const inner = (
    <>
      {eyebrow && <p className="sp-eyebrow">{eyebrow}</p>}
      <h3>{title}</h3>
      {children}
      {href && <span className="sp-card__link">{linkLabel ?? 'Find out more'}</span>}
    </>
  );
  if (href) {
    return <a className={cls} href={href}>{inner}</a>;
  }
  return <div className={cls}>{inner}</div>;
}
export interface CardProps {
  /** Small uppercase label above the heading */
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  /** Makes the whole card a link */
  href?: string;
  /** Text of the card's link line, default "Find out more" */
  linkLabel?: string;
  /** Sun top bar instead of Sage; one per grid at most */
  featured?: boolean;
  /** 4px coloured top bar, on by default */
  topBar?: boolean;
}

/**
 * Full-width page band. `cloud` is the default page background, `subtle` a soft Sage tint
 * for alternating sections, `forest` the dark anchor band (headings and body switch to Cloud).
 * Content is centred in the 1160px container.
 */
export function Section({ variant = 'cloud', children }: SectionProps) {
  return (
    <section className={`sp-section sp-section--${variant}`}>
      <div className="sp-container">{children}</div>
    </section>
  );
}
export interface SectionProps {
  /** cloud | subtle | forest */
  variant?: 'cloud' | 'subtle' | 'forest';
  children?: React.ReactNode;
}

/**
 * Mountain-silhouette divider that lets a Forest band rise out of the page.
 * Place directly above a `forest` Section or the ReferralBanner. Colour defaults to Forest.
 */
export function PeakDivider({ color = '#2C5545' }: PeakDividerProps) {
  return (
    <svg className="sp-peaks" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 56 L360 14 L520 34 L760 4 L1000 30 L1240 12 L1440 56 Z" fill={color} />
    </svg>
  );
}
export interface PeakDividerProps {
  /** Fill colour of the silhouette, defaults to Forest #2C5545 */
  color?: string;
}
