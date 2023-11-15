---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
componentsWeb: true
images:
  - "/img/components/headers/buttons.png"
bootstrapURL: "/components/buttons/"
reactBootstrapURL: "/components/buttons/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-button--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

- All buttons should be interactive and perform an action.
- They should be discoverable, easy to identify, and specific.
- Always have a text label within the text button container. Icons are optional.
- When using icon buttons, make sure the symbol is comprehensive and scalable. A text tooltip can provide the name of the functionality.
- The use of secondary icon buttons (gray or white) as default is recommended over the use of primary blue.
- An icon can be used in combination with a dropdown caret in an icon button.
- Make buttons look and feel clickable.
- If using multiple buttons, label them distinctly.
- The size of the text buttons should be used in proportion to the context and content around it.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th width="100"></th>
      <th>Example</th>
      <th width="130">Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr height="180">
      <th scope="row">Small</th>
      <td class="align-middle">
        <button
          type="button"
          class="btn btn-sm btn-primary pe-none"
          data-bs-placement="right"
          data-bs-toggle="popover"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-show="padding"
          data-bs-container="td">
          Button
        </button>
      </td>
      <td>Tables</td>
    </tr>
    <tr height="190">
      <th scope="row">Default</th>
      <td class="align-middle">
        <button
          type="button"
          class="btn btn-primary pe-none"
          data-bs-placement="right"
          data-bs-toggle="popover"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-show="padding"
          data-bs-container="td">
          Button
        </button>
      </td>
      <td>Action Bars</td>
    </tr>
    <tr height="190">
      <th scope="row">Large</th>
      <td class="align-middle">
        <button
          type="button"
          class="btn btn-lg btn-primary pe-none"
          data-bs-placement="right"
          data-bs-toggle="popover"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-show="padding"
          data-bs-boundary="td"
          data-bs-container="td">
          Button
        </button>
      </td>
      <td>Modals</td>
    </tr>
  </tbody>
</table>

### Behaviors

All buttons (including icon buttons) should have the following states:

- Default
- Hover
- Focus
- Active (Pressed)
- Disabled

A critical action button has an additional “loading” state when the hover color gradually takes over the button background upon click and hold.

#### Structural Progression States

<table class="table table-bordered" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Primary</th>
          <th>Primary Outline</th>
          <th>Secondary Outline</th>
          <th>Text Primary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td class="py-2">
            <button class="btn btn-primary" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn btn-outline-primary" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn btn-text-primary" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td class="py-2"><button class="btn hover btn-primary" type="button">Button</button></td>
          <td class="py-2"><button class="btn hover btn-outline-primary" type="button">Button</button></td>
          <td class="py-2"><button class="btn hover btn-outline-secondary" type="button">Button</button></td>
          <td class="py-2"><button class="btn hover btn-text-primary" type="button">Button</button></td>
        </tr>
        <tr hidden>
          <th scope="row">Focus</th>
          <td class="py-2"><button class="btn focus-visible btn-primary" type="button">Button</button></td>
          <td class="py-2"><button class="btn focus-visible btn-outline-primary" type="button">Button</button></td>
          <td class="py-2"><button class="btn focus-visible btn-outline-secondary" type="button">Button</button></td>
          <td class="py-2"><button class="btn focus-visible btn-text-primary" type="button">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Active</th>
          <td class="py-2">
            <button class="btn active btn-primary" data-bs-toggle="button" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn active btn-outline-primary" data-bs-toggle="button" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn active btn-outline-secondary" data-bs-toggle="button" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn active btn-text-primary" data-bs-toggle="button" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td class="py-2"><button disabled class="btn btn-primary disabled" type="button" aria-disabled="true">Button</button></td>
          <td class="py-2"><button disabled class="btn btn-outline-primary disabled" type="button" aria-disabled="true">Button</button></td>
          <td class="py-2"><button disabled class="btn btn-outline-secondary disabled" type="button" aria-disabled="true">Button</button></td>
          <td class="py-2"><button disabled class="btn btn-text-primary disabled" type="button" aria-disabled="true">Button</button></td>
        </tr>
      </tbody>
</table>

#### Color Progression States

<table class="table table-bordered" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Primary</th>
          <th>Secondary</th>
          <th>Tertiary</th>
          <th>Text Primary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td class="py-2">
            <button class="btn btn-primary pe-none" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn btn-secondary pe-none" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn btn-tertiary pe-none" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn btn-text-primary pe-none" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td class="py-2"><button class="btn hover btn-primary pe-none" type="button">Button</button></td>
          <td class="py-2"><button class="btn hover btn-secondary pe-none" type="button">Button</button></td>
          <td class="py-2"><button class="btn hover btn-tertiary pe-none" type="button">Button</button></td>
          <td class="py-2"><button class="btn hover btn-text-primary pe-none" type="button">Button</button></td>
        </tr>
        <tr hidden class="d-none">
          <th scope="row">Focus</th>
          <td class="py-2"><button class="btn focus-visible btn-primary pe-none" type="button">Button</button></td>
          <td class="py-2"><button class="btn focus-visible btn-secondary pe-none" type="button">Button</button></td>
          <td class="py-2"><button class="btn focus-visible btn-tertiary pe-none" type="button">Button</button></td>
          <td class="py-2"><button class="btn focus-visible btn-text-primary pe-none" type="button">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Active</th>
          <td class="py-2">
            <button class="btn display-active active btn-primary pe-none" data-bs-toggle="button" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn display-active active btn-secondary pe-none" data-bs-toggle="button" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn display-active active btn-tertiary pe-none" data-bs-toggle="button" type="button">Button</button>
          </td>
          <td class="py-2">
            <button class="btn display-active active btn-text-primary pe-none" data-bs-toggle="button" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td class="py-2"><button disabled class="btn btn-primary disabled" type="button" aria-disabled="true">Button</button></td>
          <td class="py-2"><button disabled class="btn btn-secondary disabled" type="button" aria-disabled="true">Button</button></td>
          <td class="py-2"><button disabled class="btn btn-tertiary disabled" type="button" aria-disabled="true">Button</button></td>
          <td class="py-2"><button disabled class="btn btn-text-primary disabled" type="button" aria-disabled="true">Button</button></td>
        </tr>
      </tbody>
</table>

<script>
  const buttons = document.querySelectorAll('.focus');
  buttons.forEach(button => button.focus());
</script>
<style>
.btn.focus-visible {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn.hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}
</style>

#### Danger Button States

<table class="table table-bordered" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Danger</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td>
            <button class="btn btn-danger" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td><button class="btn hover btn-danger" type="button">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Active</th>
          <td>
            <button class="btn display-active btn-danger" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td><button disabled class="btn btn-danger" type="button">Button</button></td>
        </tr>
      </tbody>
</table>

#### Critical Action Button States

When the user clicks and holds the critical action button, the button state changes from default to pressed with hover background color gradually moving from left to right over the button to signal the passage of the required amount of time for the action to take effect. The process resembles a progress bar.

The recommended amount of time is five seconds and/or should be sufficient to re-read the button label twice. The button label remains unaffected during this process. Once the hover background color completely fills the button background, the desired action is completed. Upon completion of a critical action, a confirmation of the action may be necessary in some use cases (e.g. use a [Toast](/components/web/toasts/)). In some use cases, such as a destructive action, if the action can no longer be repeated, the button should revert to a disabled state.

<table class="table table-bordered" style="width: max-content">
  <thead class="thead-light">
    <tr>
      <th>State</th>
      <th>Primary</th>
      <th>Dark Outline</th>
      <th>Danger</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td>
        <button class="btn btn-primary" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-outline-dark" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-danger" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Hover</th>
      <td><button class="btn hover btn-primary" type="button">Button</button></td>
      <td><button class="btn hover btn-outline-dark" type="button">Button</button></td>
      <td><button class="btn hover btn-danger" type="button">Button</button></td>
    </tr>
    <tr>
      <th scope="row">Active</th>
      <td>
        <button class="btn display-active btn-primary" type="button">Button</button>
      </td>
      <td>
        <button class="btn display-active btn-outline-dark" type="button">Button</button>
      </td>
      <td>
        <button class="btn display-active btn-danger" type="button">Button</button>
      </td>
    </tr>
        <tr>
      <th scope="row">Processing request</th>
      <td>
        <img src="/img/components/button-primary-loading.svg" width="80" height="32" alt="Processing">
      </td>
      <td>
        {{< img src="/img/components/button-outline-loading.svg" dark="/img/components/button-outline-loading-dark.svg" class="mb-0" width="80" height="32" alt="Processing" loading="auto" >}}
      </td>
      <td>
        <img src="/img/components/button-danger-loading.svg" width="80" height="32" alt="Processing">
      </td>
    </tr>
    <tr>
      <th scope="row">Disabled</th>
      <td><button disabled class="btn btn-primary" type="button">Button</button></td>
      <td><button disabled class="btn btn-outline-dark" type="button">Button</button></td>
      <td><button disabled class="btn btn-danger" type="button">Button</button></td>
    </tr>
  </tbody>
</table>

#### Icon-Only Button States

There are three types of icon-only buttons:

- Icon-only buttons with no fill and no outline.
- Solid button
- Outline button

#### Icon-only buttons (no fill, no outline) are recommended:

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width:12%">State</th>
      <th style="width:22%">Primary</th>
      <th style="width:22%">Secondary*</th>
      <th style="width:22%">Tertiary</th>
      <th style="width:22%">Reversed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width:12%">Default</td>
      <td style="width:22%"><button class="btn btn-icon-only text-primary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td style="width:22%"><button class="btn btn-icon-only btn-text-secondary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td style="width:22%"><button class="btn btn-icon-only btn-text-tertiary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td style="background-color:#0e416c"><button class="btn btn-icon-only text-white pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
    </tr>
    <tr>
      <td>Hover</td>
      <td><button class="btn btn-icon-only text-primary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td><button class="btn btn-icon-only btn-text-secondary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td><button class="btn btn-icon-only text-tertiary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td style="background-color:#0e416c"><button class="btn btn-icon-only text-white pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
    </tr>
    <tr hidden>
      <td>Focus</td>
      <td><button class="btn btn-icon-only text-primary pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td><button class="btn btn-icon-only btn-text-secondary pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td><button class="btn btn-icon-only text-tertiary pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td style="background-color:#0e416c"><button class="btn btn-icon-only text-white pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
    </tr>
    <tr>
      <td>Active</td>
      <td><button class="btn btn-icon-only text-primary pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td><button class="btn btn-icon-only btn-text-secondary pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td><button class="btn btn-icon-only btn-text-tertiary pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td style="background-color:#0e416c"><button class="btn btn-icon-only text-white pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
    </tr>
    <tr>
      <td>Disabled</td>
      <td><button disabled class="btn btn-icon-only text-primary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td><button disabled class="btn btn-icon-only btn-text-secondary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td><button disabled class="btn btn-icon-only btn-text-tertiary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
      <td style="background-color:#0e416c"><button disabled class="btn btn-icon-only text-white pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></td>
    </tr>
  </tbody>
</table>

#### Icon Button States (Solid And Outline)

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width:10%">State</th>
      <th style="width:16%">Primary</th>
      <th style="width:16%">Secondary*</th>
      <th style="width:16%">Tertiary</th>
      <th style="width:16%">Primary Outline</th>
      <th style="width:16%">Secondary Outline*</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Default</td>
      <td><button type="button" class="btn btn-icon-only btn-primary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-secondary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-tertiary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-outline-primary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-outline-secondary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
    </tr>
    <tr>
      <td>Hover</td>
      <td><button type="button" class="btn btn-icon-only btn-primary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-secondary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-tertiary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-outline-primary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-outline-secondary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
    </tr>
    <tr hidden>
      <td>Focus</td>
      <td><button class="btn btn-icon-only btn-primary pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button class="btn btn-icon-only btn-secondary pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button class="btn btn-icon-only btn-tertiary pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button class="btn btn-icon-only btn-outline-primary pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button class="btn btn-icon-only btn-outline-secondary pe-none focus-visible"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
    </tr>
    <tr>
      <td>Active</td>
      <td><button type="button" class="btn btn-icon-only btn-primary pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-secondary pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-tertiary pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-outline-primary pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-outline-secondary pe-none active"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
    </tr>
    <tr>
      <td>Disabled</td>
      <td><button type="button" disabled class="btn btn-icon-only btn-primary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" disabled class="btn btn-icon-only btn-secondary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" disabled class="btn btn-icon-only btn-tertiary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" disabled class="btn btn-icon-only btn-outline-primary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" disabled class="btn btn-icon-only btn-outline-secondary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
    </tr>
  </tbody>
</table>

<small>\* Secondary icon buttons are recommended as default option.</small>

Icon button state colors may vary based on product. Always make sure the colors of all states (except for disabled) meet [color contrast accessibility standards](/foundations/accessibility/).

### Editorial

- All buttons in the Modus Design System employ **sentence case**.
- Label a button with a verb, like “Copy”, or verb-phrase, like “Copy document.”
- Strive for short button labels that clearly describe an action.
- Try to limit button labels to three words or less. Using one or two words, if possible, is ideal.
- When writing buttons, you can remove most prepositions and articles (e.g. a, an, the).
- If a question is asked in a modal, use button labels that match the question. Keep in mind the following guidelines as well:
  - Don't use OK/Cancel to answer yes or no questions.
  - Make sure you keep "your" and "my" consistent.
  - Avoid saying "click" when referring to buttons (and other UI elements).

<script>
const popperDiv = document.querySelectorAll('.popover-css-inspector');
popperDiv.forEach(div => {
  div.removeAttribute('id');
  div.setAttribute('data-popper-placement', 'right');
});
</script>
