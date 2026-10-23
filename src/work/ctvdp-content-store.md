---
title: The Content Store
client: cartalk
sub: Opening a locked library of promo audio and graphics to prospective partner stations.
chips: [Partnerships, Media assets, Web]
order: 03
tags: [project]
cover:
  src: /img/CTVDP_TomHanks.png
  alt: "Tom Hanks promo spot: Tom Hanks loves NPR"
  caption: "Out of the vault: Tom Hanks, now a click away for any station."
  bg: "#8a8b8d"
facts:
  - { k: Role, v: "Strategy, design, and build" }
  - { k: Years, v: "2020&ndash;present" }
  - { k: Stack, v: "Cloudinary · Algolia · 11ty · GitHub · Netlify" }
  - { k: Cost, v: "Under $30/month" }
link:
  label: Visit
  url: https://content-store.cartalk.com/search/
---

## The challenge

The Car Talk Vehicle Donation Program produces audio clips, web tiles, and on-air scripts for its partner stations. It’s a perk that makes a station say, “Tom Hanks will promote us? Sign me up.”

But those assets lived in a password-protected portal: a table of filenames and tiny thumbnails. One of our strongest partnership offers was locked in a vault. We wanted prospective partners to browse and preview everything inside, while keeping full access exclusive to existing partners.

## What I did

I started by interviewing our partnership team and several NPR stations to map out what an ideal store would do. That surfaced four problems to solve:

- **Access:** letting anyone preview an asset (audio, graphics, documents) while only partners could download the originals, through partner sign-in
- **Automation:** watermarking previews, extracting metadata, and publishing new assets without manual work
- **Discovery:** search, plus curated media kits and “departments” for browsing
- **Ownership:** a store the partnership team could run themselves, with tracking to show whether it was working

### Previews without giving the store away
Cloudinary watermarks graphics, truncates audio, and thumbnails documents on first request. Nobody touches a file, and the existing library got previews for free..

<figure><img src="/optim/article/img/ctvdp-hanks.png" alt="Previews are watermarked automatically" loading="lazy"><figcaption>Previews are watermarked automatically.</figcaption></figure>

### Assets people can find the way they think
Every asset carries two kinds of metadata: what it *is* (format, size, duration) and what it's *for* (kit, season, show). Cloudinary handles the first automatically; tags and structured metadata handle the second. The same JSON feeds Algolia as the search index.

### One card for every kind of asset
Type-aware flags (`hasDimensions`, `hasDuration`, `hasPages`) let a single card show only what matters: dimensions for images, duration for audio, page count for documents.

### Open to the public, exclusive to partners
Partners click through from the portal they already use. An encrypted handoff to Netlify Identity's magic link unlocks full access, with no second password. Obfuscated, proxied links keep the good stuff off the open web.

## The result

Existing partners have made dozens of full-access requests since launch, and the whole system runs for under $30 a month.

<figure class="compare" style="--pos: 50%">
  <div class="compare-frame">
    <img src="/optim/article/img/ctvdp-store-before.png" alt="Datatables.js table of media" width="1360" height="358" loading="lazy">
    <img class="compare-after" src="/optim/article/img/ctvdp-store-after.png" alt="Media displayed visually on cards" width="1360" height="500" loading="lazy">
    <input class="compare-range" type="range" min="0" max="100" value="50"
           aria-label="Compare before and after">
  </div>
  <figcaption>Drag to compare: the old password-protected table (left) and the open store (right).</figcaption>
</figure>

## Remaining challenges

As with any project, there's always room for improvement:

- **Auto titling**: To batch process exclusive assets for partners, I wrote a script that I run locally from my machine. I'd like to explore Cloudinary Media Flows to make this fully automated.
- **Atomic search index updates**: Right now, I regenerate the search index every time the site is rebuilt. Index updates should be “atomized”.
- **Waveform graphics**: I had originally experimented with waveform files to represent audio files. I have a working branch with this enhancement but need to revisit.

