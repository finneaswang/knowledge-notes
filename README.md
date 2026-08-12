# Knowledge Notes

A connected bilingual knowledge site published from a sanitized copy of a private Obsidian vault.

The public site includes calculus, AP Physics C electricity and magnetism, university writing, 3Blue1Brown video companion notes, practice reviews, and all linked concept cards.

## Public Export

The private source vault is never committed. `npm run export:public` rebuilds `content/` from all current Markdown notes, strips private metadata and source traces, organizes the copy by subject, and preserves valid cross-subject wiki links.

```bash
npm ci
npm run export:public
npm run quartz -- build
npm run verify:public
```

The verification step checks complete source-note coverage, unresolved links, local paths, raw source filenames, account/contact patterns, private share links, and direct personal identifiers. See [PUBLIC_MANIFEST.md](PUBLIC_MANIFEST.md) for generated counts.

## Deployment

Pushes to `main` build and deploy the site through GitHub Pages. The intended public address is [notes.yikewang.org](https://notes.yikewang.org).

The site uses [Quartz](https://quartz.jzhao.xyz/) under the MIT License. Referenced videos and course materials are not redistributed.
