---
title: "Dropdowns"
layout: "single"
description: "Dropdowns present a list of options that can be used to filter or sort existing content."
components: true
componentsWeb: true
images:
  - "/img/components/headers/dropdowns.png"
keywords: menu
bootstrapURL: "/docs/v2/components/dropdowns/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-dropdown--default"
aliases:
  - "/components/dropdowns/"
tags: [usage]
---

## Overview

Dropdowns (also known as a dropdown menu, drop menu, pull-down list, picklist) is a graphical control element, similar to a list box, that allows the user to choose one value from a list. When activated, it displays (drops down) a list of values, from which the user may select one. They can be used in menus and tabs.

<div class="guide-example-block p-3 mb-3 bg-secondary bg-opacity-10 w-100 mx-auto">
  <div class="guide-sample mb-3 mx-auto" style="padding-bottom: 120px; padding-left: 44%;">
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div
        class="dropdown-menu dropdown-menu-sm show"
        aria-labelledby="dropdownMenuButton"
        x-placement="bottom-start"
        style="will-change: transform; top: 0; left: 0; transform: translate3d(0, 32px, 0);"
      >
        <a class="dropdown-item active" href="#">Active item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
      </div>
    </div>
  </div>
</div>

## Usage

#### Use when

- Filtering or sorting content on a page.
- Single selection from a list is necessary.

#### Don't use when

- Providing only two options. Instead, use a [Radio](/components/web/radio-buttons/) Group or a [Switch](/components/web/switches/).

{{< whats-changed-table >}}

| Date       | Version | Notes                             | Contributors             |
| ---------- | ------- | --------------------------------- | ------------------------ |
| 03/14/2022 | 1.3.0   | Removed contradictory directions. | W. Pritchard, E. Gunther |

{{</ whats-changed-table >}}
