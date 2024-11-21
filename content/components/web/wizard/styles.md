---
title: "Wizard"
layout: "single"
description: "A step-by-step process that guides users through a series of tasks or decisions"
components: true
componentsWeb: true
images:
  - "/img/components/headers/wizard.png"
private: true
hidden: true
sitemap:
  - disable: true
tags:
  - search_exclude
  - styles
---

<style>
.progress {
  border: 0;
  background-color: #8c8b96;
  height: 2px !important;
}
</style>

## Specifications

<div class="w-75 mx-auto">
  <div class="position-relative m-4">
    <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
      <div class="progress-bar w-50" style="width: 33%"></div>
    </div>
    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fw-bold" style="width: 2rem; height: 2rem">1</button>
    <button
      type="button"
      class="position-absolute top-0 translate-middle btn btn-sm btn-outline-primary rounded-pill fw-bold"
      style="width: 2rem; height: 2rem; background-color: #dcedf9; left: 33.3%;">
      2
    </button>
    <button
      type="button"
      class="position-absolute top-0 translate-middle btn btn-sm btn-outline-secondary bg-body rounded-pill fw-bold"
      style="width: 2rem; height: 2rem; left: 66.6%;">
      3
    </button>
    <button
      type="button"
      class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-outline-secondary bg-body rounded-pill fw-bold"
      style="width: 2rem; height: 2rem">
      4
    </button>
  </div>
<div class="d-flex justify-content-between">
<div class="ms-2">
Label
</div>
<div class="">
Label
</div>
<div class="">
Label
</div>
<div class="me-2">
Label
</div>
</div>
</div>

<!-- ## Anatomy & Structure -->

<img src="/img/components/wizard-anatomy.svg" class="img-fluid w-100">

## Orientation & Layout

- Wizards are available in two orientations: Vertical & Horizontal
- Use **Horizontal orientation** for a process **less than 5 steps**
- Use **Vertical orientation** for a process **of 3 steps and above (Limit is 9 steps)**

<div class="row">
<div class="col-12 col-lg-6">
<img src="/img/components/wizard-horizontal.svg" class="border rounded img-fluid">
</div>
<div class="col-12 col-lg-6">
<img src="/img/components/wizard-vertical.svg" class="border rounded img-fluid">
</div>
</div>

## Indicators & Labels

- Indicator can be numbers or icons, however all indictors need to be consistent. If you use numbers it has to be used for all indicators in each step.
- Indicator States:
  - **Incomplete**: Use Neutral/Gray 3 {{< color-preview hex="#a3a6b1" >}} for steps that are not complete
  - **Current**: Use Blue Pale {{< color-preview hex="#dcedf9" >}} for steps that user is filling
  - **Complete**: Use Trimble Blue Dark {{< color-preview hex="#004f83" >}} for completed steps

### Labels

Please follow the below guidelines for styling and size

- Label should not be more than 3 words with a max-width of 120px and not more than 2 line wrapping.
- If the step is complete the line to the right is Trimble Blue Dark {{< color-preview hex="#004f83" >}}, if the step is in progress or not started then the line to the right is Neutral/Gray 3 {{< color-preview hex="#a3a6b1" >}}

### Hidden Labels

Labels can be hidden if.....

<div class="w-75 mx-auto">
  <div class="position-relative m-4">
    <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
      <div class="progress-bar w-50" style="width: 50%"></div>
    </div>
    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fw-bold" style="width: 2rem; height: 2rem">1</button>
    <button
      type="button"
      class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-outline-primary rounded-pill fw-bold"
      style="width: 2rem; height: 2rem; background-color: #dcedf9">
      2
    </button>
    <button
      type="button"
      class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-outline-secondary bg-body rounded-pill fw-bold"
      style="width: 2rem; height: 2rem">
      3
    </button>
  </div>
</div>

### Bottom Labels

Use bottom labels with horizontal layout

<div class="w-75 mx-auto mb-3">
  <div class="position-relative m-4">
    <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
      <div class="progress-bar w-50" style="width: 33%"></div>
    </div>
    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fw-bold" style="width: 2rem; height: 2rem">1</button>
    <button
      type="button"
      class="position-absolute top-0 translate-middle btn btn-sm btn-outline-primary rounded-pill fw-bold"
      style="width: 2rem; height: 2rem; background-color: #dcedf9; left: 33.3%;">
      2
    </button>
    <button
      type="button"
      class="position-absolute top-0 translate-middle btn btn-sm btn-outline-secondary bg-body rounded-pill fw-bold"
      style="width: 2rem; height: 2rem; left: 66.6%;">
      3
    </button>
    <button
      type="button"
      class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-outline-secondary bg-body rounded-pill fw-bold"
      style="width: 2rem; height: 2rem">
      4
    </button>
  </div>
  <div class="d-flex justify-content-between">
    <div class="ms-2">Label</div>
    <div class="">Label</div>
    <div class="">Label</div>
    <div class="me-2">Label</div>
  </div>
</div>

### Inline Labels

Use inline labels with vertical layouts

<div class="mb-3">
  <div class="d-flex flex-column m-4">
  <div>
    <button type="button" class="top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fw-bold" style="width: 2rem; height: 2rem">1</button>
    <div class="ms-4 position-absolute" style="margin-top:-42px">Label</div>
  </div>
  <div class="vr" style="height:64px; margin-top:-22px"></div>
  <div>
    <button
      type="button"
      class="top-0 start-50 translate-middle btn btn-sm btn-outline-primary rounded-pill fw-bold"
      style="width: 2rem; height: 2rem; background-color: #dcedf9">
      2
    </button>
    <div class="ms-4 position-absolute" style="margin-top:-42px">Label</div>
    </div>
     <div class="vr" style="height:64px; margin-top:-22px"></div>
    <div>
    <button
      type="button"
      class="top-0 start-100 translate-middle btn btn-sm btn-outline-secondary bg-body rounded-pill fw-bold"
      style="width: 2rem; height: 2rem">
      3
    </button>
    <div class="ms-4 position-absolute" style="margin-top:-42px">Label</div>
  </div>
  </div>
</div>

## Footer

<div class="d-flex justify-content-between w-75 border p-2 mb-3">
  <div>
    <button type="button" class="btn btn-outline-secondary pe-none">Back</button>
  </div>
  <div class="fw-bold mt-1">Step 1 of 6 : Spectrum Integration</div>
  <div>
    <button type="button" class="btn btn-primary pe-none">Next</button>
  </div>
</div>


- The footer is placed at the bottom of a page or modal
- It has to contain a wizard pager and title of the step
- It has to contain at least one button

## Behavior

- Team should decide if back button is enabled or not or if user can go to previous step
- Back can be enabled or disabled
- If user can click “back” to previous step then step immediately goes to an incomplete state
