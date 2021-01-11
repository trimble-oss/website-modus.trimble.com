---
title: "Chips"
layout: "single"
description: "Chips represent small blocks of information and are commonly used for input or filtering."
components: true
images:
  - "/img/headers/elements/chips.png"
aliases:
  - "/chips.html"
---

## Overview

Chips represent a complex piece of information in a compact form, such as an entity (person, place, or thing) or text. They allow users to enter information, make selections, filter content, or trigger actions. Unlike buttons, chips should appear dynamically as a group of multiple interactive elements.


<img
  class="img-fluid bg-light border border-light"
  width="400"
  height="213"
  src="/img/guide/elements--chips-example.png"
  alt="Input Chips Example"
/>

## Usage

**Use when**

- Enabling and verifying user input.
- Using tags or descriptive words to filter content.
- Delineating and displaying options in a compact area. They are a good alternative to toggle buttons or checkboxes.

**Don't use when**

- There is only one option.

## Specifications

<div class="bg-light mb-5 shadow-sm">
<div class="guide-example-block pb-4">
  <div class="guide-content-sample anatomy-display-container pt-3">
    <div>
      <div
        data-anatomy-colors="false"
        class="chip chip-solid chip-input anatomy-display-static"
      >
        <div class="chip-thumbnail">
          <img src="/img/headshot.png" height="24" width="24" alt="" />
        </div>
        <div class="chip-text">Clifford</div>
        <div class="chip-delete-right">
          <i class="material-icons">cancel</i>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

Input chips can be in any of the following states:

<table class="table table-bordered bg-white w-75">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>Solid</th>
      <th>Outline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td>
        <div class="chip chip-solid chip-input">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Hover</th>
      <td>
        <div class="chip chip-solid chip-input hover">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input hover">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Active</th>
      <td>
        <div class="chip chip-solid chip-input active">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input active">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Error</th>
      <td>
        <div class="chip chip-solid chip-input error">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input error">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Disabled</th>
      <td>
        <div class="chip chip-solid chip-input disabled">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input disabled">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="material-icons">cancel</i>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<br>

<div class="guide-example-block">
  <div class="guide-sample bg-white" id="filterChipsExample">
    <span class="h4 d-block">Choose Amenities</span>
    <div class="chip chip-solid chip-filter active">
      <div class="chip-icon-left"><i class="material-icons">done</i></div>
      <div class="chip-text">Elevator</div>
    </div>
    <div class="chip chip-solid chip-filter">
      <div class="chip-text">Pets OK</div>
    </div>
    <div class="chip chip-solid chip-filter">
      <div class="chip-text">Washer/Dryer</div>
    </div>
    <div class="chip chip-solid chip-filter">
      <div class="chip-text">Pool</div>
    </div>
    <div class="chip chip-solid chip-filter">
      <div class="chip-text">Free WiFi</div>
    </div>
  </div>
</div>

### Behaviors

- Tap a chip to select it.
- Multiple chips can be selected or unselected.

### Accessibility

- Use `fieldset` to create a checkbox group.
- Chips need to be focusable and part of the tab sequence.
- When the chip has focus, pressing the "Space" key selects it or activates an action.

{{< whats-changed-table >}}
| Date       | Version | Notes          | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0   | Colors adjusted to be accessible.  |  E. Gunther  |
{{</ whats-changed-table >}}
