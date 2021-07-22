---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
images:
  - "/img/headers/components/buttons.png"
aliases:
  - "/elements/buttons/"
---

## Overview

Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

## Usage

**Use when**

- Affording interaction to key behaviors and features.
- Confirming or submitting information entered into a form.
- Cancelling and action.
- Resetting a form or dataset.
- Closing a container or section.
- Opening a menu.
- Moving forward or backward through a wizard-type workflow.
- Creating an object within a group.
- Applying a non-critical action to a dataset.

**Don't use when**

- Displaying a collection of links to sections. Use links instead.
- Linking to an external site. Use links instead.
- An action is less important. Consider using a link instead.
- Presenting the user with one or more high or medium-high actions specific to a task.

## Types

There are two button progressions you can choose from: structural and color progression. The choice should be based on the particular needs of the product's intended usage, aesthetic, and/or target user's needs. **Use only one button progression in a single product.** Ancillary button types can be used in either progression.

### Structural Progression

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Emphasis</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><button class="btn btn-primary">Add New</button></td>
      <td>High</td>
      <td>
        Use to draw attention to the primary action on a screen. There should be
        only one Primary Button on a page at a time. Not all screens require a
        Primary Button.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-outline-primary">Rename</button></td>
      <td>Medium</td>
      <td>
        Use for secondary actions on a screen. Outline-style buttons work well on colored, dark, or image backgrounds. Consider how the style of an outline button might better suit the page.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-outline-dark">Cancel</button></td>
      <td>Medium</td>
      <td>
        Used for secondary actions to establish additional visual hierarchy.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-text-primary">Cancel</button></td>
      <td>Low</td>
      <td>
        Use in complex applications or smaller containers that require a minimal impact from button
        color on the interface. They need to be offset from the rest of the UI
        to promote visual prominence.
      </td>
    </tr>
  </tbody>
</table>

### Color Progression

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Emphasis</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><button class="btn btn-primary">Add New</button></td>
      <td>High</td>
      <td>
        Use to draw attention to the primary action on a screen. There should be
        only one Primary Button on a page at a time. Not all screens require a
        Primary Button.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-secondary">Import</button></td>
      <td>Medium</td>
      <td>
        Use for secondary actions on a screen. These Buttons can be used on
        most pages without constrictions. They appear most often in high volume
        use cases like Tables, or in an Action Bar. Consider using an outline
        button on gray backgrounds.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-tertiary">Cancel</button></td>
      <td>Medium</td>
      <td>
        Used for secondary actions to establish additional visual hierarchy or to use a secondary button that provides less emphasis.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-text-primary">Cancel</button></td>
      <td>Low</td>
      <td>
        Use in complex applications or smaller containers that require a minimal impact from button color on the interface. They need to be offset from the rest of the UI to promote visual prominence.
      </td>
    </tr>
  </tbody>
</table>

### Ancillary Buttons

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th>Type</th>
      <th>Example</th>
      <th>Emphasis</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Icon Only</th>
      <td>
        <div class="mb-1">
          <button class="btn btn-icon-only btn-text-dark">
            <i class="modus-icons">gear</i>
          </button>
        </div>
        <div>
          <div
            class="btn-group shadow-1"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn btn-icon-only btn-outline-dark">
              <i class="modus-icons">calendar</i>
            </button>
            <button
              type="button"
              class="btn btn-icon-only btn-outline-dark active"
            >
              <i class="modus-icons">edit</i>
            </button>
            <button type="button" class="btn btn-icon-only btn-outline-dark">
              <i class="modus-icons">filter</i>
            </button>
          </div>
        </div>
      </td>
      <td>Medium</td>
      <td>
        Primary use is in-line or in “Button Groups.”
      </td>
    </tr>
    <tr>
      <th scope="row">Danger</th>
      <td><button class="btn btn-danger">Delete</button></td>
      <td>High</td>
      <td>
        Danger buttons have a different visual style to inform users of
        potentially destructive actions they are about to take. If using the
        danger button as a standalone, we recommend styling it as a secondary
        button. Within a set, the danger button should be styled as a primary
        button.
      </td>
    </tr>
  </tbody>
</table>

**Note:** A yellow button in the Trimble brand color can be used **only in special use cases.**.

## Specifications

- All buttons should be interactive and perform an action.
- They should be discoverable, easy to identify, and specific.
- Always have a text label within the button container. Icons are optional.
- Make buttons look and feel clickable.
- If using multiple buttons, label them distinctly.
- The size of the buttons should be used in proportion to the context and content around it.

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>Example</th>
      <th>Height</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Small</th>
      <td class="anatomy-cell">
        <button
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
        <button
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
        <button
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

### Behaviors

All buttons (including icon buttons) should have the following states:

- Default
- Hover
- Pressed
- Disabled


#### Structural Progression States

<table class="table table-bordered bg-white" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Primary</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td>
            <button class="btn btn-primary">Button</button>
          </td>
          <td>
            <button class="btn btn-outline-primary">Button</button>
          </td>
          <td>
            <button class="btn btn-outline-dark">Button</button>
          </td>
          <td>
            <button class="btn btn-text-primary">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td><button class="btn hover btn-primary">Button</button></td>
          <td><button class="btn hover btn-outline-primary">Button</button></td>
          <td><button class="btn hover btn-outline-dark">Button</button></td>
          <td><button class="btn hover btn-text-primary">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Pressed</th>
          <td>
            <button class="btn display-active btn-primary">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-outline-primary">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-outline-dark">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-text-primary">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td><button disabled class="btn btn-primary">Button</button></td>
          <td><button disabled class="btn btn-outline-primary">Button</button></td>
          <td><button disabled class="btn btn-outline-dark">Button</button></td>
          <td><button disabled class="btn btn-text-primary">Button</button></td>
        </tr>
      </tbody>
</table>

#### Color Progression States

<table class="table table-bordered bg-white" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Primary</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td>
            <button class="btn btn-primary">Button</button>
          </td>
          <td>
            <button class="btn btn-secondary">Button</button>
          </td>
          <td>
            <button class="btn btn-tertiary">Button</button>
          </td>
          <td>
            <button class="btn btn-text-primary">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td><button class="btn hover btn-primary">Button</button></td>
          <td><button class="btn hover btn-secondary">Button</button></td>
          <td><button class="btn hover btn-tertiary">Button</button></td>
          <td><button class="btn hover btn-text-primary">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Pressed</th>
          <td>
            <button class="btn display-active btn-primary">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-secondary">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-tertiary">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-text-primary">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td><button disabled class="btn btn-primary">Button</button></td>
          <td><button disabled class="btn btn-secondary">Button</button></td>
          <td><button disabled class="btn btn-tertiary">Button</button></td>
          <td><button disabled class="btn btn-text-primary">Button</button></td>
        </tr>
      </tbody>
</table>

#### Auxiliary Button States

<table class="table table-bordered bg-white" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Icon Only</th>
          <th>Danger</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td>
            <button class="btn btn-icon-only btn-text-dark">
            <i class="modus-icons">gear</i>
            </button>
          </td>
          <td>
            <button class="btn btn-danger">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td><button class="btn hover btn-icon-only btn-text-dark">
            <i class="modus-icons">gear</i>
          </button></td>
          <td><button class="btn hover btn-danger">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Pressed</th>
          <td>
            <button class="btn display-active btn-icon-only btn-text-dark">
            <i class="modus-icons">gear</i>
          </button>
          </td>
          <td>
            <button class="btn display-active btn-danger">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td>
          <button disabled class="btn btn-icon-only btn-text-dark">
            <i class="modus-icons">gear</i>
          </button></td>
          <td><button disabled class="btn btn-danger">Button</button></td>
        </tr>
      </tbody>
</table>

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

### Accessibility

- Buttons have role of `button`. Using a native HTML `button` or `input type="submit"` element is a better choice than creating a custom ARIA button.
- Buttons should have accessible labels. By default, the accessible name is computed from any text content inside the button element.
- A button should be triggered by pressing "Spacebar," "Enter," or "Return."
- Make sure the mouse cursor is an arrow pointer, not a text selector or a hand icon.
- Disabled buttons should have `aria-disabled` set to `true`.
- When placing a button on a color other than standard background colors (Gray Light or White), make sure the colors of all states (except for disabled) still meet [color contrast accessibility standards](/foundations/accessibility/).

{{< whats-changed-table >}}
| Date       | Version | Notes          | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 04/07/2020 | 1.0.1   | Light gray button added to the color progression.  | E. Bohn, E. Gunther, L. Cook    |
| 11/23/2020 | 1.0.0   | Two progressions identified for clarity of use. Custom focus states added for accessibility.  | E. Bohn, E. Gunther, L. Cook, L. Kause, S. Williams    |
{{</ whats-changed-table >}}
