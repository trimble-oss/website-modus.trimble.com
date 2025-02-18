---
title: "Inputs"
layout: "single"
description: "Input fields collect information from users."
components: true
componentsWeb: true
images:
  - "/img/components/headers/inputs.png"
keywords: forms, form
BootstrapURL: "/docs/v2/components/inputs/"
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
      <th style="width: 98px"></th>
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
          data-css-inspector-show="b-color"
          id="defaultInput"
        />
        <div>
      </td>
    </tr>
    <tr>
      <th scope="row">Large</th>
      <td style="height:195px">
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
          data-css-inspector-show="b-color"
          id="largeInput"
        />
      </div>
      </td>
    </tr>
  </tbody>
</table>

### Behaviors

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <div class="form-group mb-4">
      <label for="focusInput" class="form-label">In Focus</label>
      <div class="form-text">Helper Text</div>
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
[data-bs-theme="light"] .form-control.focus {
  border-color: #0063a3;
}
[data-bs-theme="dark"] .form-control.focus {
  border-color: #019aeb;
}
[data-bs-theme="dark"] .form-control[readonly] {
  background-color: #171c1e !important;
  border-color: #353a40 !important;
}
[data-bs-theme="dark"] .form-control:disabled {
  background-color: #171c1e !important;
}
</style>

### Editorial

- When possible, add helper text below a label and above the input to further clarify selections.
- Always mark **required** fields with an \* .
- Use multi-step forms when necessary by breaking up inputs into distinct categories.
- Provide clear and obvious action buttons. Form submission [buttons](/components/web/buttons/) should be primary.

<!-- - Provide input constraints, such as a character limit within a text entry box, to provide users with guidelines and improve form efficiency. -->
