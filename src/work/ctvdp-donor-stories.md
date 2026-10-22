---
title: Donor Stories
client: cartalk
sub: Donor photos, videos, and stories, published through a GitHub pipeline built for search.
chips: [Storytelling, Automation, Search / GEO]   # keep "GEO" only if the pipeline targets AI search
order: 01
tags: [project]
cover:
  src: /img/ctvdp-duck-truck.jpg          # static, used on the card and as the video poster
  video: cape_vzlayu # animated, used on the case page
  alt: Car Talk donor in a cape sitting on her pink car
  caption: Happy donor atop her pink “Duck Truck.”
facts:
  - { k: Role, v: "Strategy, editorial, and development" }
  - { k: Years, v: "2023&ndash;present" }
  - { k: Outcome, v: "Partner photo requests up; stories recognized in Google’s rich-results reports" }
link:
  label: Visit
  url: https://cartalk.com/car-donation/reviews/
---

## The challenge

The Car Talk Vehicle Donation Program receives a steady stream of donor photos, videos, and stories, and wants to showcase them on its website and social media. The trouble is variety: some stories come with photos or video, some are text only, and some are nothing but a photo a donor sent in.

Having designed a similar storytelling campaign for Stand Up To Cancer, I offered to build a design that could handle every combination gracefully and keep visitors browsing from one story to the next.

## What I did

Since a story might arrive with plenty of media or none, I designed a page header built on what every story has: the donor’s first name and car as the title (“Sharon’s 2008 Audi A4”), plus reliable eyebrow metadata like reading time. When there is media, it overlaps the header’s bottom edge for visual interest; when there isn’t, the header stands on its own. The same layout works for wide images, narrow ones, and none at all.

<figure class="compare" style="--pos: 50%">
  <div class="compare-frame">
    <img src="/optim/article/img/ctvdp-donor-story-only.png" alt="A donor story page without media: the header shows the story title and reading time above the text" width="1359" height="1027" loading="lazy">
    <img class="compare-after" src="/optim/article/img/ctvdp-donor-photo.png" alt="The same story layout with a donor’s photo overlapping the bottom edge of the header" width="1359" height="1027" loading="lazy">
    <input class="compare-range" type="range" min="0" max="100" value="50"
           aria-label="Compare a story without media and a story with a photo">
  </div>
  <figcaption>Drag to compare: one header design for every story, shown without media (left) and with a donor’s photo overlapping its edge (right).</figcaption>
</figure>

To keep people reading, each story ends with share buttons and links to more stories about the same make of car or the same public radio station. Then comes a call to donate, drawn from the donor’s own details, and cards for the previous and next stories by date.

At first, keeping all this up to date was fragile: our team entered each story by hand as a Markdown file through Decap CMS, which invited errors like duplicates. So I worked with the program’s vehicle-processing IT team to expose a small API from their intake portal, shaped to match my data model.

Each night, a scheduled GitHub Actions workflow checks it for new stories, writes them to the site’s data layer, uploads any photos to Cloudinary, and saves the media details alongside each story. Older stories with video are handled through manual overrides layered on top of the feed, which leaves room for video to join the pipeline later.

The stories now publish themselves.

## What the stories revealed

Reading the submissions, I noticed something no one had asked about: many donors give their cars nicknames. I gathered those stories into a hub page, and later added another for classic cars, those from before 1985.

The nickname hub gave us a ready-made campaign. On National Name Your Car Day, we pointed people straight to it, and the stories now feed the program’s larger message that our donors are super.

<figure>
  <div class="embed-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bznZ-7mFZQ4" title="Car Talk Vehicle Donation Program pitch for NPR station partners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  </div>
  <figcaption>A short pitch to NPR station partners, made with an AI video team we met at the Public Media Development and Marketing Conference (PMDMC) in 2024.</figcaption>
</figure>

## The result

Partner stations love the steady stream of content: their requests for donor photos have spiked. Google Search Console now recognizes the stories’ structured data in its Enhancements reports, which makes them eligible for richer search results. We’re still measuring the bigger question, whether real donors’ stories build trust with prospective donors and partners.
