---
title: "Inputs"
layout: "single"
description: "Input fields collect information from users."
components: true
componentsWeb: true
images:
  - "/img/components/headers/inputs.png"
keywords: forms, form, search, select
aliases:
  - "/components/forms/"
  - "/components/inputs/"
bootstrapURL: "/docs/v2/forms/form-control/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/user-inputs-text-input--default"
tags: [usage]
---

## Overview

Input fields or text fields allow users to enter text into a UI. They typically appear in forms, often with [checkboxes](/components/web/checkboxes/), [radio buttons](/components/web/radio-buttons/), and [buttons](/components/web/buttons/). The user input is most often sent to a server for processing.

<form class="mb-3" style="max-width: 500px;">
  <div class="form-group mb-3">
    <label for="RegularInput" class="form-label">Regular Input</label>
    <div class="form-text">Optional help text for providing additional information</div>
    <input class="form-control" id="RegularInput">
  </div>
  <div class="form-group mb-3">
    <label for="Input3" class="form-label">Input with icon on left</label>
    <div class="form-control-with-icon">
      <input class="form-control" id="Input3">
      <div class="form-control-icon ps-1">
        <i class="modus-icons notranslate mx-1 small" aria-hidden="true" style="font-size: 20px;">search</i>
      </div>
    </div>
  </div>
  <div class="form-group mb-3" hidden>
    <label for="Input4" class="form-label">Input with a button</label>
    <div class="input-group">
      <input class="form-control" id="Input4">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">
          Go
        </button>
      </div>
    </div>
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlSelect" class="form-label">Select</label>
    <select class="form-select" id="exampleFormControlSelect">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
  </div>
  <div class="form-group mb-3">
  <label for="Textarea" class="form-label">Text Area</label>
  <textarea class="form-control" id="Textarea">Some Text</textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

## Usage

#### Use when

- Gathering and validating user data.

{{< whats-changed-table >}}

| Date       | Version | Notes                                 | Contributors                   |
| ---------- | ------- | ------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Formatting adjusted to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
