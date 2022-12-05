---
title: "Spinners"
layout: "single"
description: "Spinners indicate progress by showing users a loading state."
components: true
componentsWeb: true
images:
  - "/img/components/headers/spinners.png"
bootstrapURL: "/components/spinners/"
reactBootstrapURL: "/components/spinners/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-spinner--default"
tags: [styles]
---

## Overview

Spinners are used as indeterminate progress indicators to show the user that there are processes happening in the background.

## Usage

**Use when**

- Indicating to the user that loading is occurring in the background.
- Loading times are indeterminate.

**Don't use when**

- A loading scenario needs to indicate progress, usually with particularly long load times. Use a dynamically updating [Progress Bar](/components/web/progress-bars/) instead.
- A main loading state is needed, such as an app initialization. In this case, forego our simple spinner, and opt to use a custom, branded one instead.

## Specifications

- A spinner should usually be centered within its container unless inside of another element like a button.

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <button type="button" class="btn btn-primary display-active" disabled>
      <span
        class="spinner-border mr-1"
        style="height: 16px; width: 16px; color: #fff"></span>
      Loading
    </button>
  </div>
</div>

### Behaviors

- A spinner spins indefinitely until loading is complete.

<div class="guide-example-block d-inline-block">
  <div class="guide-sample text-center text-primary">
    <div class="spinner-border"></div>
    <div class="h2 text-primary mt-3">Loading...</div>
  </div>
</div>

<style>
[data-theme="dark"] .guide-sample .h2 {
  color: #fff !important;
}
</style>
