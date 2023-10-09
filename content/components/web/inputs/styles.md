---
title: "Inputs"
layout: "single"
description: "Input fields collect information from users."
components: true
componentsWeb: true
images:
  - "/img/components/headers/inputs.png"
keywords: forms, form
bootstrapURL: "/components/inputs/"
reactBootstrapURL: "/components/inputs/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/user-inputs-text-input--default"
tags: [styles]
---

## Specifications

There are two sizes of input fields defined:

- Default: default form inputs should have a height of 32px (8px padding) and a font-size of 12px (.75rem). Used for most forms.
- Large: larger variant should have a height of 48px (16px padding) and a font-size of 14px (.875rem). Used for forms in in-cab applications

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>Example</th>
      <th>Height</th>
      <th>Font Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td class="anatomy-cell">
        <input
          class="form-control anatomy-display-static mb-5"
          value="Default Input"
          style="padding-left: 8px; padding-right: 8px;"
        />
      </td>
      <td>32px</td>
      <td>12px (.75rem)</td>
    </tr>
    <tr>
      <th scope="row">Large</th>
      <td class="anatomy-cell">
        <input
          class="form-control form-control-lg anatomy-display-static mb-5"
          value="Large Input"
          style="padding-left: 16px; padding-right: 16px;"
        />
      </td>
      <td>48px</td>
      <td>14px (.875rem)</td>
    </tr>
  </tbody>
</table>

### Behaviors

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <div class="form-group">
      <label for="focusInput">In Focus</label>
      <input
        class="form-control focus"
        id="focusInput"
        placeholder="In focus"
      />
      <small class="text-muted">Helper Text</small>
    </div>
    <div class="form-group">
      <label for="validInput">Valid Input</label>
      <input
        class="form-control is-valid"
        id="validInput"
        placeholder="Valid"
      />
      <div class="valid-feedback">Valid Feedback</div>
    </div>
    <div class="form-group">
      <label for="invalidInput">Invalid Input</label>
      <input
        class="form-control is-invalid"
        id="invalidInput"
        placeholder="Invalid"
      />
      <div class="invalid-feedback">Invalid Feedback</div>
    </div>
    <div class="form-group">
      <label for="disabledInput">Disabled Input</label>
      <input class="form-control" id="disabledInput" disabled value="Disabled" />
    </div>
    <div class="form-group">
      <label for="ReadonlyInput">Readonly Input</label>
      <input class="form-control" id="ReadonlyInput" readonly value="Read only" />
    </div>
  </div>
</div>

<style>
[data-theme="light"] #ReadonlyInput {
    background-color: #e0e1e9;
    color: #252A2E;
  }
[data-theme="dark"] #ReadonlyInput {
    background-color: #353a40;
    color: #FFF;
  }
</style>

### Editorial

- When possible, add helper text below an input to further clarify selections or validation errors.
- Always mark **required** fields with an \* .
- Provide input constraints, such as a character limit within a text entry box, to provide users with guidelines and improve form efficiency.
- Use multi-step forms when necessary by breaking up inputs into distinct categories.
- Provide clear and obvious action buttons. Form submission [buttons](/components/web/buttons/) should be primary.

## Colors

<!-- prettier-ignore-start -->
| Element          | Property                 | Color                                                                   |
| ---------------- | ------------------------ | ----------------------------------------------------------------------- |
| Label            | Text                     | {{< color-preview nameL=" " hexL="#464b52" nameD=" " hexD="#b7b9c3" >}} |
| Input            | Text                     | {{< color-preview nameL=" " hexL="#464b52" nameD=" " hexD="#ffffff" >}} |
|                  | Placeholder              | {{< color-preview nameL=" " hexL="#b7b9c3" nameD=" " hexD="#7d808d" >}} |
|                  | Background               | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#171c1e" >}} |
|                  | Border                   | {{< color-preview nameL=" " hexL="#e0e1e9" nameD=" " hexD="#464b52" >}} |
|                  | Border (Bottom 2px)      | {{< color-preview nameL=" " hexL="#6a6e79" nameD=" " hexD="#6a6e79" >}} |
| Input (Focus)    | Border (Bottom 2px)      | {{< color-preview nameL=" " hexL="#217cbb" nameD=" " hexD="#019AEB" >}} |
| Input (Valid)    | Border (Bottom 2px)      | {{< color-preview nameL=" " hexL="#006638" nameD=" " hexD="#1e8a44" >}} |
| Input (Invalid)  | Border (Bottom 2px)      | {{< color-preview nameL=" " hexL="#da212c" nameD=" " hexD="#da212c" >}} |
| Input (Disabled) | Background (40% opacity) | {{< color-preview nameL=" " hexL="#f1f1f6" nameD=" " hexD="#171c1e" >}} |
| Input (Readonly) | Background               | {{< color-preview nameL=" " hexL="#e0e1e9" nameD=" " hexD="#353a40" >}} |
{class="table table-sm table-bordered" id="table-colors"}
<!-- prettier-ignore-end -->
