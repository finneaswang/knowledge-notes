# Calculus Notes

A connected bilingual calculus knowledge site by Finneas Wang.

The public site combines:

- 14 AP Calculus BC lecture notes plus the course map
- 12 visual-calculus notes based on 3Blue1Brown's _Essence of Calculus_
- directly referenced concept cards
- search, backlinks, a local/global graph, table of contents, and LaTeX rendering

## Public Export

The original Obsidian vault is never copied wholesale. `npm run export:public` creates a sanitized, allowlisted copy in `content/`, then rewrites links to excluded notes as plain text.

```bash
npm ci
npm run export:public
npm run quartz -- build
npm run verify:public
```

The export excludes homework and rework notes, physics and summer courses, raw transcripts, source PDFs, Obsidian configuration, and absolute local paths. See [PUBLIC_MANIFEST.md](PUBLIC_MANIFEST.md) for the generated page counts.

## Deployment

Pushes to `main` build and deploy the site through GitHub Pages. The intended public address is [calculus.ykwang.org](https://calculus.ykwang.org).

The site uses [Quartz](https://quartz.jzhao.xyz/) under the MIT License. Video titles and learning references to 3Blue1Brown are used for attribution and commentary; original videos and subtitles are not redistributed.
