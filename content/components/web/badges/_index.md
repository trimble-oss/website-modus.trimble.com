---
title: "Badges"
layout: "single"
description: "Badges are non-interactive labels which hold small amounts of information."
components: true
componentsWeb: true
images:
  - "/img/components/headers/badges.png"
bootstrapURL: "/components/badges/"
reactBootstrapURL: "/components/badges/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-badge--default"
aliases:
  - "/components/badges/"
  - "/components/web/badge/"
tags: [usage]
---

## Overview

Badges notify the user of a status, for example that there are new or unread messages or notifications. They typically describe or relate to another element on the page. Badges scale so that their height matches the font-size of their immediate parent element by using relative font sizing and em units.

## Usage

#### Use when

- In proximity to notifications or user avatars with eye-catching appeal (e.g. displaying unread messages count).
- Use for displaying quick, easily digestible bits of information.

#### Don't use when

- Displaying long strings of text.
- An interactive element is needed, such as a [Button](/components/web/buttons/) or [Chip](/components/web/chips/).

## Types

There are three types of badges: default, text, and counter badges. They are available in three sizes: small, default, and large.

### Default Badges

Used when more emphasis is needed. **Default badges can look like [Buttons](/components/web/buttons/). Avoid using button colors to make sure the user can tell the difference.**

<div class="guide-example-block">
  <div class="guide-sample">
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-tertiary">Tertiary</span>
    <span class="badge badge-dark">High Contrast</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-danger">Danger</span>
  </div>
</div>

### Text Badges

Used to display a more subtle label. **Text badges can look like text [Buttons](/components/web/buttons/). Avoid using text button colors to make sure the user can tell the difference.** Do not use a text badge for warning (yellow): it does not meet the required contrast ratios for [accessibility](/foundations/accessibility/).

<div class="guide-example-block">
  <div class="guide-sample">
    <span class="badge badge-text-primary">Primary</span>
    <span class="badge badge-text-secondary">Secondary</span>
    <span class="badge badge-text-dark">High Contrast</span>
    <span class="badge badge-text-success">Success</span>
    <span class="badge badge-text-danger">Danger</span>
  </div>
</div>

### Counter Badges

Used to display up to 3 characters (usually a number in a counter). Counter badges can look like [Chips](/components/web/chips/), when too many characters are used. **Use a maximum of 3 characters or numbers.**

<div class="guide-sample">
    <div>
      <span class="badge badge-pill badge-primary">1</span>
      <span class="badge badge-pill badge-secondary">2</span>
      <span class="badge badge-pill badge-tertiary">3</span>
      <span class="badge badge-pill badge-dark">4</span>
      <span class="badge badge-pill badge-success">5</span>
      <span class="badge badge-pill badge-warning">6</span>
      <span class="badge badge-pill badge-danger">7</span>
    </div>
</div>

## Badges in other elements

Badges can be inserted into other elements.

<div class="guide-example-block">
  <div class="guide-sample">
    <button type="button" class="btn btn-outline-primary">
    Button <span class="badge badge-primary">9</span>
    <span class="sr-only visually-hidden">unread messages</span>
    </button>
    <button type="button" class="btn btn-primary">
    Button <span class="badge badge-text-tertiary">9</span>
    <span class="sr-only visually-hidden">unread messages</span>
    </button>
    <ul class="mt-3 list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        List with Badge
        <span class="badge badge-primary badge-pill">14</span>
      </li>
    </ul>
    <ul class="mt-3 list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        List with Text Badge
        <span class="badge badge-text-primary badge-pill">14</span>
      </li>
    </ul>
  </div>
</div>

{{< whats-changed-table >}}

| Date       | Version | Notes                                                                          | Contributors                   |
| ---------- | ------- | ------------------------------------------------------------------------------ | ------------------------------ |
| 11/23/2020 | 1.0.0   | Warning badge text color changed to be accessible. Warning text badge removed. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
