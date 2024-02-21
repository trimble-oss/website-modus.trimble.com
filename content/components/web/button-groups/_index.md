---
title: "Button Groups"
layout: "single"
description: "Button groups allow selection from a similar or related set of options."
components: true
componentsWeb: true
images:
  - "/img/components/headers/button-groups.png"
# bootstrapURL: "/components/button-group/"
tags: [usage]
aliases: "/components/web/button-groups/"
---

## Overview

A button group is used to organize related actions and allow selection and toggling. Buttons can be grouped in a single line or in a vertical column. They can be used within action bars (e.g. [Toolbar](/components/web/toolbar/)).

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon1" autocomplete="off" checked>
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon1">
  <svg width="24" height="24" fill="currentColor">
    <use xlink:href="/modus-solid-icons.svg#wifi" /></svg>
  </label>
  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon2" autocomplete="off">
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon2">
  <svg width="24" height="24" fill="currentColor">
    <use xlink:href="/modus-solid-icons.svg#wifi-off" /></svg>
  </label>
  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon3" autocomplete="off">
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon3">
  <svg width="24" height="24" fill="currentColor">
    <use xlink:href="/modus-solid-icons.svg#wifi-no-internet" /></svg>
  </label>
</div>

<style>
  .btn-group:not(.btn-group-sm):not(.btn-group-lg) label.btn-icon-only {
    padding-top: 2px;
    padding-right: .25rem!important;
    padding-left: .25rem!important;
  }
</style>

## Usage

### Use when

- Organizing similar functionality of 2-5 actions.
- You need to show the selected action or states with contextual relationships.
- Grouping related actions or states.
- Stepping through linear content (e.g. Wizards).

### Don’t use when

- Actions represented by buttons are not related.
- Mixing destructive and non-destructive actions.
- Button labels do not appropriately describe the actions within one or two words. Instead use Links.
- You need to navigate through content on the page. Instead, use [Tabs](/components/web/tabs/).
- You have more than 5 options so as not to overwhelm the user with too many choices.

## Types

Button groups support two layout directions: **horizontal** and **vertical**

### Horizontal Button Group

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnRadio" id="btnRadio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnRadio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnRadio" id="btnRadio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnRadio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnRadio" id="btnRadio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnRadio3">Radio 3</label>
</div>
<br><br>

### Vertical Button Group

<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="vbtn-radio1">Radio 1</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="vbtn-radio2">Radio 2</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="vbtn-radio3">Radio 3</label>
</div>

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                             |
| ---------- | ------- | -------------------- | ---------------------------------------- |
| 02/14/2024 | 1.0.0   | New component added. | E. Gunther, E. Nowak, C. Oliff, C.Winsor |

{{</ whats-changed-table >}}
