# Summit Alternative Education website

The website at [www.summitprovision.com](https://www.summitprovision.com).

## Making changes with Claude

1. Open Claude Code (at [claude.ai/code](https://claude.ai/code) or in the Claude desktop app) and connect your
   GitHub account the first time.
2. Choose this repository, `summitprovision-website`.
3. Ask for the change in plain English, for example "change the opening paragraph on the About page to say ...".
   Claude follows the rules in `CLAUDE.md`, checks the site still builds, and publishes the change when you are
   happy with it.

Changes on the `main` branch go live within about a minute. Anything on another branch gets a preview link first.

## Building locally

Needs Node.js 20 or newer.

    npm install
    npm run build

The finished site is written to `dist/`.
