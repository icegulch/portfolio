---
title: Podcast & Video Library
client: heavybit
sub: Redesigning a content repository to elevate the speakers, podcasts, and videos from Heavybit’s developer speaker series.
chips: [UX design, Content strategy, CMS migration]
order: 5
tags: [project]
cover:
  src: /img/heavybit-cover.jpg
  alt: The beautify Heavybit HQ offices in downtown San Francisco
  caption: "Heavybit’s San Francisco HQ. Its window graphics (hexagons, pipework) became textures throughout the library’s design. Photo: Bruce Damonte."
facts:
  - { k: Role, v: "Design (2014–2015), development (2020)" }
  - { k: Stack, v: "Adobe Illustrator · WordPress → Sanity · 11ty" }
  - { k: Status, v: "Website redesigned internally, Sanity CMS still in place" }
---

## The challenge

In 2014, after I’d built a style guide for Code for America, one of Heavybit’s early partners, Heavybit asked me to redesign its library. Its speaker series had produced years of talks and podcasts, but they were hard to browse: shows hidden in a dropdown, inconsistent cards, and little sense of where you were. The brand was established and well loved, so the job was to fix the navigation without losing the look.

## Designing the library (2014–2015)

Working directly with Heavybit’s founding partner, I went through the site template by template, aiming to reduce visitors’ cognitive load: simpler menus, more compact cards, and predictable breadcrumbs.

<figure class="compare" style="--pos: 50%">
  <div class="compare-frame">
    <img src="/optim/article/img/heavybit-before.png" alt="Original podcast page: shows listed in a dropdown menu above a grid of podcast cards" width="1200" height="1050" loading="lazy">
    <img class="compare-after" src="/optim/article/img/heavybit-after.png" alt="Redesigned podcast page: a Library › Podcasts breadcrumb, follow links, and show cards with episode counts" width="1200" height="1050" loading="lazy">
    <input class="compare-range" type="range" min="0" max="100" value="50"
           aria-label="Compare before and after">
  </div>
  <figcaption>Drag to compare: the original podcast page (left) and the redesign (right), with breadcrumbs, simpler navigation, and shorter cards.</figcaption>
</figure>

Heavybit had no shortage of strong material: event photography, show artwork, and the textures of its own building. My job was to give it a structure. Once the templates clicked, every new talk or podcast slotted into place without a redesign, and the library grew for years on that framework.

## Rebuilding it (2020)

Five years later, Heavybit asked me back, this time to move the site off WordPress. I rebuilt it as a static site with 11ty, using Sanity as the content management system. Sanity was a Heavybit member company, so the library would run on a tool from the community it served.

Their WordPress site was managed by another partner, but Heavybit’s team, developers themselves, knew the security issues that dog WordPress, and the friction of having code and content tangled together on one server. Splitting them made both safer: the code went into Git, the content into Sanity with its own revision history, and the public site became plain static files with nothing to hack.

I modeled the library’s talks, speakers, and podcasts in Sanity, moved the content over from WordPress, and rebuilt the front end in 11ty, so the site was ready for the design system Heavybit planned next.

Heavybit has since redesigned the site, but the structure underneath came first.
