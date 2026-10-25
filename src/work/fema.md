---
title: Untangling a Federal Flood-Insurance App
client: fema
sub: A half-finished federal application, made usable and documented as it grew.
chips: [Plain language, Accessibility, Video]
order: 02
tags: [project]
cover:
  src: /img/fema-crs.jpg
  alt: Elevation Certificates video title card
facts:
  - { k: Role, v: "Design lead, technical translation, video production" }
  - { k: Years, v: "2019&ndash;2026" }
  - { k: Formats, v: "Web, Video, Presentation Decks" }
  - { k: Outcome, v: "Contract renewed for five more years" }
link:
  label: Visit
  url: https://crssubmit.com/
---

## The problem

For years, communities applying for discounts on flood insurance through FEMA's Community Rating System would gather up the necessary paperwork and physically mail it to program evaluators. This was a tremendously inefficient process.

To reduce the paperwork burden, FEMA partnered with an agency to develop a cloud-based solution, but that relationship fizzled, and our team was asked to pick up the half-finished Angular application where the other team left off.

## The initial UI challenge: everything is a button

The previous team had built substantial functionality, but without information hierarchy. Core actions and mailto links looked the same; primary, secondary, and tertiary actions had been treated equally.

<figure class="compare" style="--pos: 50%">
  <div class="compare-frame">
    <img src="/optim/article/img/crs-before.png" alt="CRS as we inherited it" width="1200" height="1203" loading="lazy">
    <img class="compare-after" src="/optim/article/img/crs-after.jpg" alt="CRS Submit after round one of UX updates" width="1200" height="1203" loading="lazy">
    <input class="compare-range" type="range" min="0" max="100" value="50"
           aria-label="Compare before and after">
  </div>
  <figcaption>Drag to compare: initial interface (left) and UX redesign with visual hierarchy (right).</figcaption>
</figure>

The use of bold “primary” colors everywhere further obscured what users needed to do.

The fix was disciplined restraint: spotlight primary actions, let secondary and tertiary actions recede. The “before” state had treated every interaction equally; the “after” gave the page somewhere for the eye to land.

In many cases, things that had been buttons were much better suited to being links. The increase in white space also helped to better define the page's content hierarchy: header, navigation, breadcrumbs, and main content.

When we expanded to the administrative side, I brought the same restraint to the specialists’ scorecard, replacing a decades-old Excel matrix with a validated web version that kept the compact layout they relied on.

To make the new hierarchy survive a fast-moving team, I built a living style guide — patterns, components, colors, typography, error states, all in one place.

Developers shipping features or squashing bugs weekly could reference it without pinging me; the style guide did the design coordination work that meetings would have otherwise required.

## Documenting while building

With FEMA officials eager to scale the application, there was no time to sit and gaze upon the style guide or mocks.

While my engineering teammates developed the core interface, I shifted into an instructional design role to produce a comprehensive video onboarding series. The screencasts oriented users to a rapidly evolving application ecosystem.

<figure>
  <div class="embed-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2Ypvm4Ywa8w" title="FEMA CRS Submit Onboarding Video Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  </div>
  <figcaption>Onboarding tutorial for CRS Submit, re-recorded as the interface evolved.</figcaption>
</figure>

The videos caught the attention of regional program managers, who saw a bigger bottleneck: local officials struggled with FEMA's notoriously complex Elevation Certificates. So I wrote and produced [a multi-part series on the certificate](https://www.youtube.com/playlist?list=PLRJw9u8nGNwP8sFZFMCyDqWNR1XnmzkpR), with every script approved by subject-matter experts. Forms don't make for gripping video, so I used motion, reflection, and rotation to guide viewers' attention through dense federal pages one field at a time.

For accessibility, I used YouTube's auto-captions as a baseline and refined them into accurate, precisely timed captions and chapter markers, as part of maintaining two of the program's YouTube channels.

The CRS Submit work eventually grew beyond the core application — half a dozen public-facing documentation sites, data visualization microsites, specialist dashboards, and style guides followed. FEMA was pleased with the direction, and we were approved to continue work for another five years.

<figure>
  <a href="/optim/zoom/img/fema-crs-viz.jpg" class="zoom" aria-label="Enlarge image: CRS visualizations">
    <img src="/optim/article/img/fema-crs-viz.jpg" alt="CRS Data Visualizations site showing cards for six public Tableau dashboards of CRS metrics (state profiles, participation, classifications, higher regulatory standards, participation over time, and classes over time), with a locked row marking four more dashboards for signed-in users." width="1360" height="1368" loading="lazy">
    <span class="zoom-badge" aria-hidden="true">⤢ Enlarge</span>
  </a>
  <figcaption>Concept for password-protected specialist dashboards, planned for launch before federal funding ended in 2026. <a href="https://crsviz.com">See the working visualizations »</a></figcaption>
</figure>

In late 2025, building for the long term, we started making cross-application content changes, leveraging a headless CMS and cloud storage to make content portable and reusable — from community guide to specialist guide to the application.

Then in early 2026, federal funding for the program abruptly ended, and the work stopped mid-flight.

## The working application

Development has stopped, but the application remains in use (credentials required).

What's left is the work itself: an application still in daily use, a documentation library that survived the wind-down, and a clearer sense of how to translate a complex regulated domain into something people can actually use.
