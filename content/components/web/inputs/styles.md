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

- Label Text Color: {{< color-preview hexL="#464b52" hexD="#B7B9C3">}}
- Input Text Color: {{< color-preview hexL="#252a2e" hexD="#ffffff">}}
- Placeholder Text Color: {{< color-preview hexL="#B7b9c3" hexD="#7D808D">}}
- Border Color: {{< color-preview hexL="#e0e1e9" hexD="#464B52">}} (bottom border {{< color-preview hexL="#6a6e79" hexD="#6A6E79">}})

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

- Form inputs that are in focus should have a 2px bottom border using {{< color-preview hexL="#217cbb" hexD="#217CBB">}}.
- Form inputs that are <strong class="text-success">valid</strong> should have a 2px bottom border using our success color {{< color-preview hexL="#006638" hexD="#1E8A44">}}.
- Form inputs that are <strong class="text-danger">invalid</strong> should have a 2px bottom border using our danger color {{< color-preview hexL="#da212c" hexD="#DA212C">}}.
- Form inputs that are <strong>disabled</strong> should use {{< color-preview hexL="#f1f1f6" hexD="#171C1E">}} as a background color.

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
- Provide clear and obvious action buttons. Form submission [buttons](/components/web/buttons/) should be primary.
