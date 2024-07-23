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
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

There are two sizes of input fields defined:

- Default: default form inputs should have a height of 32px (8px padding) and a font-size of 12px (.75rem). Used for most forms.
- Large: larger variant should have a height of 48px (8px padding) and a font-size of 14px (.875rem). Used for forms in in-cab applications

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td style="height:185px">
      <div style="padding-left: 198px; margin-top: 20px;" class="pt-4 vertical-align">
      <label for="defaultInput" class="form-label">Default Input</label>
        <input
          class="form-control mb-5 pe-none"
          aria-label="Example input"
          value="Default Input"
          style="padding: 8px; height: 32px;"
          data-bs-toggle="popover"
          data-bs-placement="left"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="margin"
          data-css-inspector-show=""
          id="defaultInput"
        />
        <div>
      </td>
    </tr>
    <tr>
      <th scope="row">Large</th>
      <td style="height:185px">
      <div style="padding-left: 198px; margin-top: 30px;" class="pt-2">
      <label for="defaultInput" class="form-label">Large Input</label>
        <input
          class="form-control form-control-lg anatomy-display-static mb-5 pe-none"
          aria-label="Example large input"
          value="Large Input"
          style="padding: 8px; padding-top: 12px; padding-bottom: 12px;"
          data-bs-toggle="popover"
          data-bs-placement="left"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="margin"
          data-css-inspector-show=""
          id="largeInput"
        />
      </div>
      </td>
    </tr>
  </tbody>
</table>

### Colors

<!-- prettier-ignore-start -->
| Element          | Property                 | Color                                                                   |
| ---------------- | ------------------------ | ----------------------------------------------------------------------- |
| Label            | Text                     | {{< color-preview nameL=" " hexL="#464b52" nameD=" " hexD="#b7b9c3" >}} |
| Input            | Text                     | {{< color-preview nameL=" " hexL="#464b52" nameD=" " hexD="#ffffff" >}} |
|                  | Placeholder              | {{< color-preview nameL=" " hexL="#b7b9c3" nameD=" " hexD="#7d808d" >}} |
|                  | Background               | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#171c1e" >}} |
|                  | Border                   | {{< color-preview nameL=" " hexL="#e0e1e9" nameD=" " hexD="#464b52" >}} |
|                  | Border                   | {{< color-preview nameL=" " hexL="#6a6e79" nameD=" " hexD="#6a6e79" >}} |
| Input (Focus)    | Border                   | {{< color-preview nameL=" " hexL="#217cbb" nameD=" " hexD="#019AEB" >}} |
| Input (Valid)    | Border                   | {{< color-preview nameL=" " hexL="#006638" nameD=" " hexD="#1e8a44" >}} |
| Input (Invalid)  | Border                   | {{< color-preview nameL=" " hexL="#da212c" nameD=" " hexD="#da212c" >}} |
| Input (Disabled) | Background (40% opacity) | {{< color-preview nameL=" " hexL="#f1f1f6" nameD=" " hexD="#171c1e" >}} |
| Input (Readonly) | Background               | {{< color-preview nameL=" " hexL="#e0e1e9" nameD=" " hexD="#353a40" >}} |
{class="table table-sm table-bordered border border-opacity-50" id="table-colors"}
<!-- prettier-ignore-end -->

### Behaviors

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <div class="form-group mb-4">
      <label for="focusInput" class="form-label">In Focus</label>
      <input
        class="form-control focus pe-none"
        id="focusInput"
        placeholder="In focus"
        style="border-color: var(--bs-primary) !important; border-width: 2px;"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-container="main"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="bg-color b-radius color font-size height padding width b-width"
        data-css-inspector-show="b-color"
      />
      <small class="text-muted">Helper Text</small>
    </div>
    <div class="form-group mb-4">
      <label for="validInput" class="form-label">Valid Input</label>
      <input
        class="form-control is-valid pe-none active"
        id="validInput"
        placeholder="Valid"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-container="main"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="bg-color b-radius b-bottom-color color font-size height padding width b-width"
        data-css-inspector-show="b-color"
      />
      <div class="valid-feedback">Valid Feedback</div>
    </div>
    <div class="form-group mb-4">
      <label for="invalidInput" class="form-label">Invalid Input</label>
      <input
        class="form-control is-invalid pe-none"
        id="invalidInput"
        placeholder="Invalid"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-container="body"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="bg-color b-radius color font-size height padding width b-width"
        data-css-inspector-show="b-color"
      />
      <div class="invalid-feedback">Invalid Feedback</div>
    </div>
    <div class="form-group mb-5">
      <label for="disabledInput" class="form-label">Disabled Input</label>
      <input class="form-control pe-none"
        id="disabledInput"
        disabled
        placeholder="Disabled"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-container="body"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="b-radius font-size height padding width b-width"
        data-css-inspector-show=""/>
    </div>
    <div class="form-group mb-4">
      <label for="ReadonlyInput" class="form-label">Readonly Input</label>
      <input class="form-control pe-none"
        id="ReadonlyInput"
        readonly
        value="Read only"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-container="body"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="b-radius font-size height padding width b-width"
        data-css-inspector-show=""
      />
    </div>
  </div>
</div>

<style>
[data-bs-theme="light"] .form-control {
    color: #464b52;
  }
[data-bs-theme="light"] #ReadonlyInput {
    background-color: #e0e1e9;
    color: #252A2E;
  }
[data-bs-theme="dark"] #ReadonlyInput {
    background-color: #353a40;
    color: #fff;
  }
[data-bs-theme="light"] .form-control.focus {
    border-color: #0063a3;
  }
[data-bs-theme="dark"] .form-control.focus {
    border-color: #019aeb;
  }
</style>

### Editorial

- When possible, add helper text below an input to further clarify selections or validation errors.
- Always mark **required** fields with an \* .
- Provide input constraints, such as a character limit within a text entry box, to provide users with guidelines and improve form efficiency.
- Use multi-step forms when necessary by breaking up inputs into distinct categories.
- Provide clear and obvious action buttons. Form submission [buttons](/components/web/buttons/) should be primary.


