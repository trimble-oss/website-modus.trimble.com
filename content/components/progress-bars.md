---
title: "Progress Bars"
layout: "single"
description: "Progress indicators express an unspecified wait time or display the length of a process."
components: true
images:
  - "/img/components/headers/progress-bars.png"
aliases:
  - "/progress.html"
  - "/components/progress/"
bootstrapURL: "/components/progress-bars/"
reactBootstrapURL: "/components/progress-bars/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-progress-bar--default"
---

## Overview

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen. Progress indicators generally have negative connotations among users. Use them sparingly. Instead, focus on optimizing loading.

## Usage

**Use when**

- You want to reduce a user's uncertainty. Reassure the user that your app/ website is working.
- You want to reduce the user's perception of time and offer them a reason to wait.

**Don't use when**

- You want to indicate progress inside smaller elements, such as buttons, chips, or badges.

## Specifications

- A progress indicator is represented by a white bar that is filled with color over time as loading occurs.

<div class="guide-example-block">
  <div class="guide-sample">
    <div class="progress">
      <div
        id="progressExample"
        class="progress-bar"
        role="progressbar"
        aria-label="example progress bar"
        style="width: 0;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</div>

### Behaviors

- A progress indicator should fill up to completion as background loading tasks are complete.
- Whenever possible, show the user a textual representation of their progress that corresponds to the loading indicator.

<div class="guide-example-block">
  <div class="guide-sample text-center text-primary">
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-label="example progress bar"
        style="width: 75%;"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="text-left text-dark">
      <strong>Completed 30 of 40.</strong>
    </div>
  </div>
</div>

### Accessibility

- Use `aria-valuetext` to provide more specific information about the content being loaded. For example, “Please wait, this data table is loading…”.
- Add `aria-busy="true"` to a container or element to indicate the element is loading. Once loaded, change the value from `true` to `false`. For example:
  - If loading an entire page, add the attribute to `<body>` or wrapper.
  - If loading a specific component (e.g, table), add the attribute to the container of that component.
  - If loading content inside a modal, add the attribute to the modal element.
  - There is no required keyboard action associated with this pattern.
  - The intervals are announced to screen reader users via an `aria-live` region. Don't overwhelm screen reader users with continuous reading of every instant in a progress bar's trajectory. Announcing the progress at certain timed intervals (e.g. every 5 seconds), or at certain percentage intervals (e.g. every 10% or every 20%) is best.

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0 | Background color changed to be accessible. | E. Bohn, L. Kause, N. Springer |
{{</ whats-changed-table >}}
