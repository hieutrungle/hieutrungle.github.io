# hieutrungle.github.io

Personal website of Hieu T. Le: a single static page (`index.html`) with no build step and no dependencies.
Fonts load from Google Fonts. Light/dark theme follows the system and has a manual toggle.

```
index.html               the whole site (HTML + CSS + a little JS)
assets/favicon.svg       "HL" monogram icon
assets/Hieu_Le_Resume.pdf  linked from the "Résumé (PDF)" buttons
.nojekyll                tells GitHub Pages to serve files as-is
```

## Preview locally

```bash
python -m http.server 8000   # then open http://localhost:8000
```

## Deploy on GitHub Pages (user site)

The repo `hieutrungle/hieutrungle.github.io` already exists and holds an older 2022 template.
To replace it with this site, keeping the old version on a branch:

```bash
git clone https://github.com/hieutrungle/hieutrungle.github.io.git old-site
cd old-site && git checkout -b archive-2022 && git push origin archive-2022 && git checkout main
git rm -rq . && cp -r ../personal-website/{index.html,assets,.nojekyll,README.md} .
git add -A && git commit -m "New personal site" && git push origin main
```

Then in the repo: Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
The site is served at https://hieutrungle.github.io/ within a minute or two.

## Common edits

- **Photo:** add `assets/profile.jpg` (square, ≥400 px) and replace `HL` inside `<div class="portrait">` with
  `<img src="assets/profile.jpg" alt="Portrait of Hieu T. Le">`.
- **Résumé:** overwrite `assets/Hieu_Le_Resume.pdf` (keep the file name so links keep working).
- **Numbers / citations:** the "At a glance" cards in the About section; update the "Citation figures" note date.
- **Publications:** each entry is an `<li>` in `#publications`; first-author papers on top, co-authored ones in the collapsible list.
