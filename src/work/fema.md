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
  - { k: Role, v: "Content design, technical translation, video production" }
  - { k: Years, v: "2019&ndash;present" }
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

To make the new hierarchy survive a fast-moving team, I built a living style guide — patterns, components, colors, typography, error states, all in one place.

Developers shipping features or squashing bugs weekly could reference it without pinging me; the style guide did the design coordination work that meetings would have otherwise required.

## Documenting while building

With FEMA officials eager to scale the application, there was no time to sit and gaze upon the style guide or mocks.

While my engineering teammates developed the core interface, I shifted into an instructional design role to produce a comprehensive video onboarding series. The screencasts oriented users to a rapidly evolving application ecosystem.

<figure>
  <div class="embed-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2Ypvm4Ywa8w" title="FEMA CRS Submit Onboarding Video Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  </div>
  <figcaption>Onboarding tutorial, updated as we built out the UI.</figcaption>
</figure>

To ensure compliance with accessibility standards, I established a workflow using YouTube’s auto-captions as a baseline, refining them into precise timestamps and chapter markers within the video documentation.

The CRS Submit work eventually grew beyond the core application — half a dozen public-facing documentation sites, data visualization microsites, and style guides followed. FEMA was pleased with the direction, and we were approved to continue work for another five years.

In late 2025, we started making cross-application content changes, leveraging a headless CMS and cloud storage to make content portable and reusable — from community guide to specialist guide to the application. Our contract had just been renewed for five years, and we were building for the long term.

Then in early 2026, federal funding for the program abruptly ended, and the work stopped mid-flight.

## The working application

Development has stopped, but the application is still in use (credentials required).

What's left is the work itself: an application still in daily use, a documentation library that survived the wind-down, and a clearer sense of how to translate a complex regulated domain into something people can actually use.
