---
title: "Inputs"
layout: "single"
description: "Input fields collect information from users."
components: true
images:
  - "/img/components/headers/inputs.png"
keywords: forms, form
aliases:
  - "/components/forms/"
  - "/forms.html"
  - "/inputs.html"
  - "/input-groups.html"
bootstrapURL: "/components/inputs/"
reactBootstrapURL: "/components/inputs/"
---

<style>
[data-theme="dark"] .color-preview {
  display: none !important;
}
</style>

## Overview

Input fields or text fields allow users to enter text into a UI. They typically appear in forms, often with [checkboxes](/components/checkboxes/), [radio buttons](/components/radio-buttons/), and [buttons](/components/buttons/). The user input is most often sent to a server for processing.

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

## Specifications

<span class="theme-l">

- Label Text Color: {{< color-preview hex="#464b52">}}
- Input Text Color: {{< color-preview hex="#252a2e">}}
- Placeholder Text Color: {{< color-preview hex="#B7b9c3">}}
- Border Color: {{< color-preview hex="#e0e1e9">}} (bottom border {{< color-preview hex="#6a6e79">}})

</span>

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
        <input class="form-control mb-2" placeholder="Placeholder text" style="padding-left: 8px; padding-right: 8px;">
        <input
          class="form-control anatomy-display-static mb-5"
          placeholder="Default Input"
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
          class="form-control form-control-lg mb-2"
          placeholder="Placeholder text"
          style="padding-left: 16px; padding-right: 16px;"
        />
        <input
          class="form-control form-control-lg anatomy-display-static mb-5"
          placeholder="Large Input"
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

- Form inputs that are in focus should have a 2px bottom border <span class="theme-l">using our active color {{< color-preview hex="#0C77BE">}}</span>.
- Form inputs that are <strong class="text-success">valid</strong> should have a 2px bottom border using our success color<span class="theme-l"> {{< color-preview hex="#006638">}}</span>.
- Form inputs that are <strong class="text-danger">invalid</strong> should have a 2px bottom border using our danger color<span class="theme-l"> {{< color-preview hex="#da212c">}}</span>.
- Form inputs that are <strong>disabled</strong> should use our Gray <span class="theme-l">Light</span> color {{< color-preview hex="#f1f1f6">}} as a background color</span>

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
      <input class="form-control" disabled placeholder="Disabled" />
    </div>
  </div>
</div>

### Editorial

- When possible, add helper text below an input to further clarify selections or validation errors.
- Always mark **required** fields with an \* .
- Provide input constraints, such as a character limit within a text entry box, to provide users with guidelines and improve form efficiency.
- Use multi-step forms when necessary by breaking up inputs into distinct categories.
- Provide clear and obvious action buttons. Form submission [buttons](/components/buttons/) should be primary.

### Accessibility

- Always use a `label`. Use a hidden `label`, or a `title` or `aria-label` attribute when a visible text label is not needed.
- Associate form labels with controls.
- Never replace `label` with `placeholder` text.
- Always specify the correct input type (e.g. `date`, `email`, `tel`, `number`)
- Match `for` and `id` values that associate the label with its form control. Because `id` attribute values must be unique on each page, a form control can only have one associated `label`.
- Whenever possible use `autocomplete` to help users (especially users with cognitive disabilities) fill out the form.
- On required fields, use the `required` attribute. It will cause screen readers to announce "required" and also triggers the browser to warn the user with a visual tooltip if the user leaves the filed blank. Screen readers also announce the tooltip content with it appears.
- When performing form validation, apply the `aria-invalid="true"` attribute to a form control. It will cause the screen reader to announce "invalid" when that control gets the focus.
- Use `aria-labelledby` to overcome the 1:1 limitations of `label`.
- Use `aria-describedby` (in addition to a `label`) to associate descriptive text to the form control.
- Make sure the form is keyboard accessible: all input fields need to be focusable. The “Tab” sequence needs to be logical and intuitive.
- Do not rely on JavaScript alone for form submission, validation, and error recovery.
- Alert the user of any validation errors in an apparent and accessible manner. Provide informative feedback messages.
- Allow the user to easily access the form controls that need to be modified.
- Allow resubmission and revalidation of the form information.

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0 | Formatting adjusted to be accessible. | E. Bohn, L. Kause, N. Springer |
{{</ whats-changed-table >}}
