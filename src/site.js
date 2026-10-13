/* Summit site behaviours: mobile menu, scroll reveals, sticky header elevation,
   mobile action bar, contact form email handoff. No dependencies. */
(function () {
  'use strict';

  /* Mobile menu */
  var menuBtn = document.getElementById('hp-menu-btn');
  var menu = document.getElementById('hp-mobile-nav');
  if (menuBtn && menu) {
    var setMenu = function (open) {
      menu.hidden = !open;
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* Sticky header elevation once the page scrolls */
  var headerWrap = document.getElementById('hp-header');
  if (headerWrap) {
    var onScroll = function () {
      headerWrap.classList.toggle('is-elevated', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Scroll reveals: any [data-rv] fades and rises in, staggered within its parent */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rvs = Array.prototype.slice.call(document.querySelectorAll('[data-rv]'));
  if (!reduced && rvs.length && 'IntersectionObserver' in window) {
    rvs.forEach(function (el) {
      var siblings = el.parentElement ? Array.prototype.slice.call(el.parentElement.children).filter(function (c) { return c.hasAttribute && c.hasAttribute('data-rv'); }) : [el];
      var idx = Math.max(0, siblings.indexOf(el));
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity 450ms ease, transform 450ms ease';
      el.style.transitionDelay = Math.min(idx, 5) * 80 + 'ms';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    rvs.forEach(function (el) { io.observe(el); });
    /* Never leave content hidden if something goes wrong: reveal everything after 4s */
    setTimeout(function () {
      rvs.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
    }, 4000);
  }

  /* Mobile action bar (homepage): show once the hero is gone, hide at the banner */
  var mab = document.getElementById('hp-mab');
  var hero = document.querySelector('.hp-hero');
  var banner = document.getElementById('hp-banner');
  if (mab && hero && banner && 'IntersectionObserver' in window) {
    var narrowMq = window.matchMedia('(max-width: 700px)');
    var heroOut = false, bannerIn = false;
    var apply = function () { mab.hidden = !(narrowMq.matches && heroOut && !bannerIn); };
    new IntersectionObserver(function (entries) { heroOut = !entries[0].isIntersecting; apply(); }, { threshold: 0 }).observe(hero);
    new IntersectionObserver(function (entries) { bannerIn = entries[0].isIntersecting; apply(); }, { threshold: 0 }).observe(banner);
    narrowMq.addEventListener('change', apply);
  }

  /* Contact form: compose an email in the visitor's own mail app. Nothing is stored. */
  var form = document.getElementById('referral');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = function (id) { var f = document.getElementById(id); return f && f.value ? f.value.trim() : ''; };
      var lines = [];
      if (val('your-name')) lines.push('My name: ' + val('your-name'));
      if (val('your-role')) lines.push('My role or relationship: ' + val('your-role'));
      if (val('your-email')) lines.push('My email: ' + val('your-email'));
      if (val('yp-name')) lines.push('The young person (first name or initials): ' + val('yp-name'));
      if (val('yp-age')) lines.push('Age or year group: ' + val('yp-age'));
      if (val('message')) lines.push('', val('message'));
      var subject = 'A conversation about a young person';
      var href = 'mailto:robertwilliams@summitprovision.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
      var status = document.getElementById('ct-status');
      if (status) status.hidden = false;
      window.location.href = href;
    });
  }
})();
