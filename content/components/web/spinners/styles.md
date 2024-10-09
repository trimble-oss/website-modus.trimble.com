---
title: "Spinners"
layout: "single"
description: "Spinners indicate progress by showing users a loading state."
components: true
componentsWeb: true
images:
  - "/img/components/headers/spinners.png"
BootstrapURL: "/docs/v2/components/spinners/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-spinner--default"
tags: [styles]
---

## Specifications

- A spinner should usually be centered within its container unless inside of another element like a button.

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <button type="button" class="btn btn-primary display-active" disabled>
      <span
        class="spinner-border me-1"
        style="height: 16px; width: 16px; color: #fff"></span>
      Loading
    </button>
  </div>
</div>

### Sizes

| Large <small>(64)</small>                                                                            | Default <small>(32)</small>                                                        | Small (24) |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| <div class="text-center text-primary m-3"><div class="spinner-border spinner-border-lg"></div></div> | <div class="text-center text-primary m-3"><div class="spinner-border"></div></div> | <div class="text-center text-primary m-3"><div class="spinner-border spinner-border-sm"></div></div>      |
{class="table table-sm table-bordered border border-opacity-50"}

### Colors

<!-- prettier-ignore-start -->
| Element   | Property        | Color                                                                                           |
| --------- | --------------- | ----------------------------------------------------------------------------------------------- |
| Default   | Spinner         | {{< color-preview nameL="Trimble Blue" hexL="#0063a3" nameD="Dark Mode Blue" hexD="#019aeb" >}} |
|           | Text (Optional) | {{< color-preview nameL="Trimble Blue" hexL="#0063a3" nameD="Gray Light" hexD="#f1f1f1" >}}     |
| Secondary | Spinner         | {{< color-preview nameL="Gray 6" hexL="#6A6E79" nameD="Gray Light" hexD="#f1f1f1" >}}           |
|           | Text (Optional) | {{< color-preview nameL="Gray 6" hexL="#6A6E79" nameD="Gray Light" hexD="#f1f1f1" >}}           |
| Tertiary  | Spinner         | {{< color-preview nameL="Gray 1" hexL="#CBCDD6" nameD="Gray 4" hexD="#90939f" >}}               |
|           | Text (Optional) | {{< color-preview nameL="Gray 1" hexL="#CBCDD6" nameD="Gray Light" hexD="#f1f1f1" >}}           |
{class="table table-sm table-bordered border border-opacity-50"}
<!-- prettier-ignore-end -->

### Behaviors

- A spinner spins indefinitely until loading is complete.

<div class="guide-example-block d-flex">
  <div class="guide-sample text-center text-primary mx-3">
    <div class="spinner-border"></div>
    <div class="h2 text-primary mt-3">Loading...</div>
  </div>
  <div class="guide-sample text-center mx-5">
    <div class="spinner-border text-secondary"></div>
    <div class="h2 text-secondary mt-3">Loading...</div>
  </div>
    <div class="guide-sample text-center mx-5">
    <div class="spinner-border spinner-tertiary"></div>
    <div class="h2 spinner-tertiary mt-3">Loading...</div>
  </div>
</div>

<style>
.spinner-tertiary {
  color: #cbcdd6 !important;
}
[data-bs-theme="dark"] .spinner-tertiary {
  color: #90939f !important;
}
[data-bs-theme="dark"] .guide-sample .h2 {
  color: #f1f1f1 !important;
}
</style>
