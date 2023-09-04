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
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-solid/fonts/modus-icons.css">

<style>
[data-theme="light"] #btn-dark-hover {
  background-color: #e0e1e9 !important;
}
[data-theme="light"] #btn-primary-hover {
  background-color: #dcedf9 !important;
}
</style>
<style>
[data-theme="dark"] #btn-secondary-default {
  color: #90939f !important;
}
[data-theme="dark"] #btn-secondary-hover {
  color: #7d808d !important;
}
[data-theme="dark"] #btn-secondary-active {
  color: #353a40 !important;
  background-color: #90939f !important;
}
[data-theme="dark"] #btn-secondary-disabled {
  color: #90939f !important;
}
</style>

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
      <th></th>
      <th>Example</th>
      <th>Height</th>
      <th>Use case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Small</th>
      <td class="anatomy-cell">
        <button type="button"
          data-anatomy-colors="false"
          class="btn btn-sm btn-primary anatomy-display-static"
        >
          Button
        </button>
      </td>
      <td>24px</td>
      <td>Tables</td>
    </tr>
    <tr>
      <th scope="row">Default</th>
      <td class="anatomy-cell">
        <button type="button"
          data-anatomy-colors="false"
          class="btn btn-primary anatomy-display-static"
        >
          Button
        </button>
      </td>
      <td>32px</td>
      <td>Action Bars</td>
    </tr>
    <tr>
      <th scope="row">Large</th>
      <td class="anatomy-cell">
        <button type="button"
          data-anatomy-colors="false"
          class="btn btn-lg btn-primary anatomy-display-static"
        >
          Button
        </button>
      </td>
      <td>48px</td>
      <td>Modals</td>
    </tr>
  </tbody>
</table>

- The size of icon buttons should be as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th></th>
      <th>Example</th>
      <th>Button size</th>
      <th>Icon size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Small</td>
      <td>
      <button type="button" class="btn btn-sm btn-icon-only btn-text-dark pe-none" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      <button type="button" class="btn btn-sm btn-icon-only btn-outline-dark pe-none" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td>24px</td>
      <td>16px</td>
    </tr>
    <tr>
      <td>Default</td>
      <td><button type="button" class="btn btn-icon-only btn-text-dark pe-none" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      <button type="button" class="btn btn-icon-only btn-outline-dark pe-none" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td>32px</td>
      <td>24px</td>
    </tr>
    <tr>
      <td>Large</td>
      <td><button type="button" class="btn btn-lg btn-icon-only btn-text-dark pe-none" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      <button type="button" class="btn btn-lg btn-icon-only btn-outline-dark pe-none" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td>48px</td>
      <td>32px (use 24px when used for Navbars)</td>
    </tr>
  </tbody>
</table>

### Behaviors

All buttons (including icon buttons) should have the following states:

- Default
- Hover
- Pressed
- Disabled

A critical action button has an additional “loading” state when the hover color gradually takes over the button background upon click and hold.

#### Structural Progression States

<table class="table table-bordered" style="width: max-content">
  <thead class="thead-light">
    <tr>
      <th>State</th>
      <th>Primary</th>
      <th>Primary Outline</th>
      <th>Dark Outline</th>
      <th>Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td>
        <button class="btn btn-primary" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-outline-primary" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-outline-dark" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-text-primary" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Hover</th>
      <td><button class="btn hover btn-primary" type="button">Button</button></td>
      <td><button class="btn hover btn-outline-primary" type="button">Button</button></td>
      <td><button class="btn hover btn-outline-dark" type="button">Button</button></td>
      <td><button class="btn hover btn-text-primary" type="button">Button</button></td>
    </tr>
    <tr>
      <th scope="row">Active</th>
      <td>
        <button class="btn display-active btn-primary" type="button">Button</button>
      </td>
      <td>
        <button class="btn display-active btn-outline-primary" type="button">Button</button>
      </td>
      <td>
        <button class="btn display-active btn-outline-dark" type="button">Button</button>
      </td>
      <td>
        <button class="btn display-active btn-text-primary" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Disabled</th>
      <td><button disabled class="btn btn-primary" type="button">Button</button></td>
      <td><button disabled class="btn btn-outline-primary" type="button">Button</button></td>
      <td><button disabled class="btn btn-outline-dark" type="button">Button</button></td>
      <td><button disabled class="btn btn-text-primary" type="button">Button</button></td>
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
      <th>Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td>
        <button class="btn btn-primary" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-secondary" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-tertiary" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-text-primary" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Hover</th>
      <td><button class="btn hover btn-primary" type="button">Button</button></td>
      <td><button class="btn hover btn-secondary" type="button">Button</button></td>
      <td><button class="btn hover btn-tertiary" type="button">Button</button></td>
      <td><button class="btn hover btn-text-primary" type="button">Button</button></td>
    </tr>
    <tr>
      <th scope="row">Active</th>
      <td>
        <button class="btn display-active btn-primary" type="button">Button</button>
      </td>
      <td>
        <button class="btn display-active btn-secondary" type="button">Button</button>
      </td>
      <td>
        <button class="btn display-active btn-tertiary" type="button" style="color: #252a2e">Button</button>
      </td>
      <td>
        <button class="btn display-active btn-text-primary" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Disabled</th>
      <td><button disabled class="btn btn-primary" type="button">Button</button></td>
      <td><button disabled class="btn btn-secondary" type="button">Button</button></td>
      <td><button disabled class="btn btn-tertiary" type="button">Button</button></td>
      <td><button disabled class="btn btn-text-primary" type="button">Button</button></td>
    </tr>
  </tbody>
</table>

#### Danger Button States

Danger buttons are solid, both as text buttons and icon buttons.

<table class="table table-bordered" style="width: max-content">
  <thead class="thead-light">
    <tr>
      <th>State</th>
      <th>Danger</th>
      <th>Danger Icon</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td>
        <button class="btn btn-danger" type="button">Button</button>
      </td>
      <td>
        <button class="btn btn-danger" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Hover</th>
      <td><button class="btn hover btn-danger" type="button">Button</button></td>
      <td><button class="btn hover btn-danger" type="button">Button</button></td>
    </tr>
    <tr>
      <th scope="row">Active</th>
       <td>
        <button class="btn display-active btn-danger" type="button">Button</button>
      </td>
       <td>
        <button class="btn display-active btn-danger" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Disabled</th>
      <td><button disabled class="btn btn-danger" type="button">Button</button></td>
      <td><button disabled class="btn btn-danger" type="button">Button</button></td>
    </tr>
  </tbody>
</table>

#### Critical Action Button States

When the user clicks and holds the critical action button, then the button state changes from default to pressed with hover background color gradually moving from left to right over the button to signal the passage of the required amount of time. The process resembles a progress bar.

The recommended amount of time is five seconds and/or should be sufficient to re-read the button label twice. The button label remains unaffected during this process. Once the hover background color completely takes over the button background then the desired action is completed signaling that the specified amount of time has elapsed. Upon completion of a critical action, a confirmation of the action may be necessary in some use cases. A Toast is recommended whenever possible. In some use cases, such as a destructive action, if the action can no longer be repeated, the button should revert to a disabled state.

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
      <th scope="row">Loading</th>
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
      <th scope="row">Disabled</th>
      <td><button disabled class="btn btn-primary" type="button">Button</button></td>
      <td><button disabled class="btn btn-outline-dark" type="button">Button</button></td>
      <td><button disabled class="btn btn-danger" type="button">Button</button></td>
    </tr>
  </tbody>
</table>

#### Icon-Only Button States

**Note:** There are only four color options available for Icon-Only buttons:

- **Dark:** The default recommended option (Trimble Gray)
- **Secondary:** Gray 6
- **Primary:** Trimble Blue
- **Reversed:** White. These are used in blue or dark Nav Bars.

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 12%">State</th>
      <th style="width: 22%">Dark</th>
      <th style="width: 22%">Secondary</th>
      <th style="width: 22%">Primary</th>
      <th style="width: 22%">Reversed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 12%">Default</td>
      <td style="width: 22%">
        <button type="button" class="btn btn-icon-only btn-text-dark pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td style="width: 22%">
        <button type="button" id="btn-secondary-default" class="btn btn-icon-only btn-text-secondary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td style="width: 22%">
        <button type="button" class="btn btn-icon-only btn-text-primary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td style="background-color: #0e416c; color:#fff !important;">
        <button type="button" class="btn btn-icon-only pe-none"><i class="modus-icons notranslate" aria-hidden="true" style="color:#fff;">settings</i></button>
      </td>
    </tr>
    <tr>
      <td>Hover</td>
      <td>
        <button type="button" id="btn-dark-hover" class="btn btn-icon-only btn-text-dark pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>
        <button type="button" id="btn-secondary-hover" class="btn btn-icon-only btn-text-secondary pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>
        <button type="button" id="btn-primary-hover" class="btn btn-icon-only text-primary btn-outline-primary border-0 pe-none hover"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td style="background-color: #0e416c; color:#fff !important;">
        <button type="button" class="btn btn-icon-only pe-none bg-primary hover" style="border-width: 1px !important; border-color: #019AEB !important; background-color: #217CBB !important;">
        <i class="modus-icons notranslate" aria-hidden="true" style="color:#fff;">settings</i></button>
      </td>
    </tr>
    <tr>
      <td>Active</td>
      <td>
        <button type="button" class="btn btn-icon-only btn-text-dark display-active pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>
        <button type="button" id="btn-secondary-active" class="btn btn-icon-only btn-text-secondary display-active pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>
        <button type="button" class="btn btn-icon-only btn-text-primary display-active pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td style="background-color: #0e416c;">
        <button type="button" class="btn btn-icon-only btn-text-darkblue display-active bg-active pe-none" style="background-color: #019AEB !important; color:#fff !important;">
        <i class="modus-icons notranslate" aria-hidden="true" style="color:#fff;">settings</i></button>
      </td>
    </tr>
    <tr>
      <td>Disabled</td>
      <td>
        <button type="button" disabled class="btn btn-icon-only btn-text-dark pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>
        <button type="button" id="btn-secondary-disabled" disabled class="btn btn-icon-only btn-text-secondary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>
        <button type="button" disabled class="btn btn-icon-only btn-text-primary pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td style="background-color: #0e416c; color:#fff !important;">
        <button type="button" disabled class="btn btn-icon-only pe-none"><i class="modus-icons notranslate" aria-hidden="true" style="color:#fff;">settings</i></button>
      </td>
    </tr>
  </tbody>
</table>

#### Icon Button States (Solid And Outline)

<table class="table table-bordered">
  <thead>
    <tr>
      <th rowspan="2">State</th>
      <th colspan="3">Solid</th>
      <th colspan="2">Outline</th>
    </tr>
    <tr>
      <th>Primary</th>
      <th>Secondary*</th>
      <th>Tertiary</th>
      <th>Primary</th>
      <th>Secondary*</th>
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
    <tr>
      <td>Active</td>
      <td><button type="button" class="btn btn-icon-only btn-primary display-active pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-secondary display-active pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-tertiary display-active pe-none"><i class="modus-icons notranslate" aria-hidden="true" style="color:#252a2e">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-outline-primary display-active pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
      <td><button type="button" class="btn btn-icon-only btn-outline-secondary display-active pe-none"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button></td>
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
