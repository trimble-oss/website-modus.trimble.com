---
title: "Progress Bars"
layout: "single"
description: "Progress indicators express an unspecified wait time or display the length of a process."
components: true
componentsWeb: true
images:
  - "/img/components/headers/progress-bars.png"
bootstrapURL: "/components/progress-bars/"
reactBootstrapURL: "/components/progress-bars/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-progress-bar--default"
tags: [styles]
---

## Specifications

- A progress indicator is represented by a <span class="theme-l">white</span> bar that is filled with color over time as loading occurs.

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
