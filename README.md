# João Faria — Portfolio

Personal portfolio site, built as a static single-page site and hosted on GitHub Pages:
**https://faria666.github.io/portfolio/**

## Stack

- Plain HTML5 + Bootstrap 5 (CDN) + custom CSS (`style.css`)
- jQuery + a small set of vendor plugins (Swiper, AOS, Chocolat) in `js/`
- No build step — edit the files, commit, push. GitHub Pages serves `index.html` directly.

## Structure

```
index.html          Single-page site (Home / About / Experience / Portfolio / Contact)
style.css           Custom theme styles (layout, colors, components)
css/vendor.css      Bundled vendor styles (Bootstrap theme + plugin CSS)
js/script.js        Page behavior (menu, text animation, copy-email button, lightbox init)
js/plugins.js       Third-party plugin bundle (Swiper, AOS, Chocolat, jarallax, etc.)
images/             Site images (profile photo, project thumbnails, icons)
assets/cv/           Downloadable CV (PDF)
```

## Updating content

All page content lives directly in `index.html` — there's no CMS or templating. To update
experience, projects, or skills, edit the relevant `<section>` in `index.html` and commit.

To update the CV, replace the PDF in `assets/cv/` and keep the filename (or update the
`href`/`download` links in `index.html` if you rename it).

## Deploying

Pushing to `main` is enough — GitHub Pages rebuilds automatically from the repository root.
Since there's no build step, what you see locally (open `index.html` in a browser) is exactly
what ships.

Originally based on a free template ("Julie Creative Portfolio") by TemplatesJungle, since
heavily customized.
