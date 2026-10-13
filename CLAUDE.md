# Summit Alternative Education website

This repo is the live website at https://www.summitprovision.com. It is a static site: React components are
rendered to plain HTML at build time, with a little vanilla JavaScript for the menu and scroll effects.

The person asking you for changes is usually Robert Williams, who runs Summit. He is not a developer. Make the
change he asks for, explain what you changed in plain English, and publish it when he is happy.

## How publishing works

- **Pushing to `main` publishes to the live site** within about a minute (Vercel builds it automatically).
- Pushing to any other branch creates a private preview link instead, without touching the live site.
- For small copy changes (a sentence, a phone number, a typo), commit to `main` and push.
- For anything bigger (new section, layout change, several pages at once), push to a new branch first, give
  Robert the preview link from the Vercel check on the commit or pull request, and merge to `main` once he
  approves.
- Always run `npm run build` before pushing. If it fails, fix it before pushing: a failed build means the live
  site simply stays on the previous version, but the change will not appear.
- If something goes wrong after publishing, revert the commit and push again.

## Where things live

| What | File |
|---|---|
| Homepage (hero, motto, four pillars, programmes, who we help) | `src/Homepage.jsx` |
| About page | `src/About.jsx` |
| Programmes overview page | `src/Programmes.jsx` |
| The five programme detail pages (tutoring, mentoring, life skills, risk and intervention, reintegration) | `src/ProgrammeDetail.jsx`, in the `PROGRAMMES` list |
| Safeguarding page | `src/Safeguarding.jsx` |
| Contact page | `src/Contact.jsx` |
| Header menu, footer links, the "Talk to us" banner, the contact email address | `src/chrome.jsx` (`EMAIL`, `NAV`, `SITE_LINKS`) |
| Page titles and descriptions for Google, the 404 page, the sitemap | `src/render.jsx` (`PAGES`) |
| Page specific styles | `src/page.css` |
| Shared components and brand styles (buttons, cards, colours, fonts) | `design-system/` |
| Logo and fonts | `public/` |
| Menu, scroll reveals, contact form behaviour | `src/site.js` |

Most requests are text changes inside the `.jsx` files. The text sits between tags or in quoted strings, so
change only the words and leave the surrounding code alone. Apostrophes inside `'single quoted'` strings must
stay escaped or the string switched to double quotes, otherwise the build fails.

To add a new page, add a component in `src/`, add it to `PAGES` in `src/render.jsx` with a title and
description, and add it to the menus in `src/chrome.jsx` if it should be linked.

## Writing rules

- British English (programme, organise, colour, behaviour).
- Say "young people". Never "troubled kids", "problem children" or similar.
- The organisation is "Summit Alternative Education" in page text. The logo reads "Summit Education": leave it.
- The motto "Discover. Learn. Excel." stays on the homepage.
- Do not use em dashes or double hyphens in page text. Use commas, colons or full stops instead.
- Calm, warm, plain language. Short sentences. No hype.
- Only publish claims Robert has confirmed are true: qualifications, DBS checks, Ofsted, prices, staff names,
  locations, results. If he asks you to add one, it is fine, because he is confirming it.
- Testimonials must be real quotes from people who agreed to be quoted. Never invent one.

## Design rules

- Use the existing components (`Button`, `Card`, `Section`, `PillarRow` and others from `design-system/`) and
  the CSS variables in `design-system/styles/tokens.css`. Do not hard-code new colours or fonts.
- The orange accent (Sun) is for buttons and actions only, never for body text.
- Check that any change still works on a phone: most visitors arrive on mobile.

## Do not change without asking the web team

- `vercel.json`: it holds the redirects from the old Squarespace pages and the hosting settings.
- `package.json`, `package-lock.json` and `build.mjs`, unless a build fix genuinely needs it.
- Domain names, DNS and email. These are managed outside this repo.
- Never commit passwords, API keys or `.env` files. This repository is public.

## Commands

    npm install        # once, to install the build tools
    npm run build      # builds the site into dist/
