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

<div class="guide-example-block mb-2">
  <div class="guide-sample">
    <div class="progress">
      <div
        id="progressExample"
        class="progress-bar"
        role="progressbar"
        aria-label="example progress bar"
        style="width: 25%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</div>

- Height: 16px
- Border: 1px solid

### Small variant

<div class="guide-example-block mb-2">
  <div class="guide-sample">
    <div class="progress progress-sm">
      <div
        id="progressSmall"
        class="progress-bar"
        role="progressbar"
        aria-label="example progress bar"
        style="width: 50%;"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</div>

A smaller version is available with same specs as above except, Height: `8px`.

### Extra Small variant

<div class="guide-example-block mb-2">
  <div class="guide-sample">
    <div class="progress progress-xs">
      <div
        id="progressXS"
        class="progress-bar"
        role="progressbar"
        aria-label="example progress bar"
        style="width: 75%;"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</div>

A smaller version is available with same specs as above except, Height: `4px`.

<style>
.progress-xs {
  height: 4px !important;
}
</style>

### Colors

<!-- prettier-ignore-start -->
| Element      | Property            | Color                                                                   |
| ------------ | ------------------- | ----------------------------------------------------------------------- |
| Progress Bar | Fill                | {{< color-preview nameL=" " hexL="#0063a3" nameD=" " hexD="#019aeb" >}} |
|              | Background          | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#252a2e" >}} |
|              | Border              | {{< color-preview nameL=" " hexL="#6a6e79" nameD=" " hexD="#6a6e79" >}} |
{.table .table-sm .table-bordered}
<!-- prettier-ignore-end -->

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
        style="width: 80%;"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="text-left text-dark">
      <strong>Completed 40 of 50.</strong>
    </div>
  </div>
</div>
