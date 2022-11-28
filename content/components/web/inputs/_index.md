---
title: "Inputs"
layout: "single"
description: "Input fields collect information from users."
components: true
componentsWeb: true
images:
  - "/img/components/headers/inputs.png"
keywords: forms, form
aliases:
  - "/components/forms/"
  - "/components/inputs/"
bootstrapURL: "/components/inputs/"
reactBootstrapURL: "/components/inputs/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/user-inputs-text-input--default"
tags: [usage]
---

## Overview

Input fields or text fields allow users to enter text into a UI. They typically appear in forms, often with [checkboxes](/components/web/checkboxes/), [radio buttons](/components/web/radio-buttons/), and [buttons](/components/buttons/). The user input is most often sent to a server for processing.

<form>
  <div class="form-group">
    <label for="RegularInput">Regular Input</label>
    <input class="form-control" id="RegularInput" placeholder="Placeholder Text">
  </div>
  <div class="form-group">
    <label for="Input2">Input with icon on right</label>
    <div class="input-with-icon-right">
      <input class="form-control" placeholder="Placeholder Text" id="Input2">
      <div class="input-icon">
        <i class="modus-icon material-icons notranslate">visibility</i>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="Input3">Input with icon on left</label>
    <div class="input-with-icon-left">
      <input class="form-control" placeholder="Placeholder Text" id="Input3">
      <div class="input-icon">
        <i class="modus-icon material-icons notranslate">search</i>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="Input4">Input with a button</label>
    <div class="input-group">
      <input class="form-control" placeholder="Placeholder Text" id="Input4">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary">
          Go
        </button>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect">Custom Select Outlined</label>
    <select class="custom-select form-control" id="exampleFormControlSelect">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
  </div>
  <div class="form-group">
  <label for="Textarea">Normal Text Area</label>
  <textarea class="form-control" id="Textarea">Some Text</textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

## Usage

**Use when**

- Gathering and validating user data.

{{< whats-changed-table >}}

| Date       | Version | Notes                                 | Contributors                   |
| ---------- | ------- | ------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Formatting adjusted to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
