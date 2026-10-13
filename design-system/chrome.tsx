import React from 'react';
import { Logo } from './primitives';

/**
 * Site header: Cloud background, logo lockup left, up to four nav items, primary Sun
 * referral button right. The current page carries a Sun underline and aria-current.
 * On mobile the nav collapses (full-screen Forest panel in production).
 */
export function Header({
  navItems = [
    { label: 'About', href: '/about' },
    { label: 'Programmes', href: '/programmes' },
    { label: 'Safeguarding', href: '/safeguarding' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel = 'Make a referral',
  ctaHref = '/contact#referral',
}: HeaderProps) {
  return (
    <header className="sp-header">
      <div className="sp-container sp-header__bar">
        <Logo href="/" />
        <nav className="sp-header__nav" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="sp-header__link"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="sp-btn sp-btn--primary" href={ctaHref}>{ctaLabel}</a>
        </nav>
      </div>
    </header>
  );
}
export interface HeaderProps {
  /** Up to four items; set current on the active page */
  navItems?: Array<{ label: string; href: string; current?: boolean }>;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Full-bleed Forest footer: reversed logo with the "Discover. Learn. Excel." tagline,
 * site and trust link columns, contact block, and a Sage base bar.
 */
export function Footer({
  siteLinks = [
    { label: 'About & Approach', href: '/about' },
    { label: 'Programmes', href: '/programmes' },
    { label: 'Safeguarding & Policies', href: '/safeguarding' },
    { label: 'Contact & Referrals', href: '/contact' },
  ],
  trustLinks = [
    { label: 'Our Policies', href: '/safeguarding#policies' },
    { label: 'Code of Conduct', href: '/safeguarding#conduct' },
    { label: 'Privacy', href: '/privacy' },
  ],
  email = 'robertwilliams@summitprovision.com',
  contactName = 'Robert Williams',
}: FooterProps) {
  return (
    <footer className="sp-footer">
      <div className="sp-container">
        <div className="sp-footer__grid">
          <div>
            <Logo reversed />
            <p className="sp-footer__tagline">Discover. Learn. Excel.</p>
          </div>
          <div>
            <p className="sp-footer__heading">Explore</p>
            <ul className="sp-footer__list">
              {siteLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="sp-footer__heading">Trust</p>
            <ul className="sp-footer__list">
              {trustLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="sp-footer__heading">Contact</p>
            <ul className="sp-footer__list">
              <li>{contactName}</li>
              <li><a href={`mailto:${email}`}>{email}</a></li>
            </ul>
          </div>
        </div>
        <div className="sp-footer__base">
          <span>© Summit Alternative Education</span>
          <span>Accessibility statement</span>
        </div>
      </div>
    </footer>
  );
}
export interface FooterProps {
  siteLinks?: Array<{ label: string; href: string }>;
  trustLinks?: Array<{ label: string; href: string }>;
  email?: string;
  contactName?: string;
}
