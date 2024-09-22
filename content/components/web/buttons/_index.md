---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
componentsWeb: true
images:
  - "/img/components/headers/buttons.png"
bootstrapURL: "/docs/v2/components/buttons/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-button--default"
aliases:
  - "/components/buttons/"
tags: [usage]
---

## Overview

Buttons are clickable elements that are used to trigger actions. Buttons are used to initialize an action, either in the background or foreground of an experience. Use button labels wherever possible to express what action will occur, when the user interacts with a button.

## Usage

#### Use when

- Affording interaction to key behaviors and features.
- Confirming or submitting information entered into a form.
- Canceling an action.
- Resetting a form or dataset.
- Closing a container or section.
- Opening a menu.
- Moving forward or backward through a wizard-type workflow.
- Creating an object within a group.
- Applying a non-critical action to a dataset.

#### Don't use when

- Displaying a collection of links to sections. Use links instead.
- Linking to an external site. Use links instead.
- An action is less important. Consider using a link instead.
- Presenting the user with one or more high or medium-high actions specific to a task.

## Types

There are two button progressions you can choose from: structural and color progression. The choice should be based on the particular needs of the product's intended usage, aesthetic, and/or target user's needs. **Use only one button progression in a single product.**

### Structural Progression

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Emphasis</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><button class="btn btn-primary text-nowrap" type="button">Add new</button></td>
      <td>High</td>
      <td>
        Use to draw attention to the primary action on a screen. There should be
        only one Primary Button on a page at a time. Not all screens require a
        Primary Button.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-outline-primary" type="button">Rename</button></td>
      <td>Medium</td>
      <td>
        Use for secondary actions on a screen. Outline-style buttons work well on colored, dark, or image backgrounds. Consider how the style of an outline button might better suit the page.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-outline-secondary" type="button">Cancel</button></td>
      <td>Medium</td>
      <td>
        Used for secondary actions to establish additional visual hierarchy.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-text-primary" type="button">Cancel</button></td>
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

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Emphasis</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><button class="btn btn-primary text-nowrap" type="button">Add new</button></td>
      <td>High</td>
      <td>
        Use to draw attention to the primary action on a screen. There should be
        only one Primary Button on a page at a time. Not all screens require a
        Primary Button.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-secondary" type="button">Import</button></td>
      <td>Medium</td>
      <td>
        Use for secondary actions on a screen. These Buttons can be used on
        most pages without constrictions. They appear most often in high volume
        use cases like Tables, or in an Action Bar. Consider using an outline
        button on gray backgrounds.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-tertiary" type="button">Cancel</button></td>
      <td>Medium</td>
      <td>
        Used for secondary actions to establish additional visual hierarchy or to use a secondary button that provides less emphasis.
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-text-primary" type="button">Cancel</button></td>
      <td>Low</td>
      <td>
        Use in complex applications or smaller containers that require a minimal impact from button color on the interface. They need to be offset from the rest of the UI to promote visual prominence.
      </td>
    </tr>
  </tbody>
</table>

### Danger And Critical Action Buttons

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Type</th>
      <th>Emphasis</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><button class="btn btn-danger" type="button">Delete</button></td>
      <th scope="row">Danger</th>
      <td>High</td>
      <td>
        Danger buttons have a different visual style to inform users of
        potentially destructive actions they are about to take. If using the
        danger button as a standalone, we recommend styling it as a secondary
        button. Within a set, the danger button should be styled as a primary
        button.
      </td>
    </tr>
    <tr>
      <td><img src="/img/components/button-danger-loading-example.svg" width="166" height="32" class="rounded" alt="Critical Action Button"></td>
      <th scope="row">Critical action</th>
      <td>High</td>
      <td>
        Critical action buttons require users to press and hold for a defined amount of time a button in order to trigger a critical action that should only be performed with clear intent. It should be used when an action can lead to an outcome that cannot be undone, reversed and/or could potentially have destructive consequences, such as permanent deletion. Critical action buttons can be styled as danger, primary, or secondary buttons.
      </td>
    </tr>
  </tbody>
</table>

### Special Button

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><button class="btn btn-warning" type="button">Button</button></td>
      <td>
        Only use in special cases and sparingly within an otherwise blue/gray UI in order to bring more attention to a particular action. It should not be used with primary or danger actions. It does not support borderless or outline variants.
      </td>
    </tr>
  </tbody>
</table>



### Icon Buttons

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Example</th>
      <th>Type</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      <button type="button" class="btn btn-icon-only btn-transparent" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      <button type="button" class="btn btn-icon-only text-primary btn-transparent" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>Icon-only</td>
      <td>Default option <span class="theme-l">(Trimble Gray)</span> recommended for most use cases.</td>
    </tr>
    <tr>
      <td>
      <button type="button" class="btn btn-icon-only btn-secondary" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      <button type="button" class="btn btn-icon-only btn-primary" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>Solid</td>
      <td>Used to draw attention to primary or secondary action on a screen.</td>
    </tr>
    <tr>
      <td>
      <button type="button" class="btn btn-icon-only btn-outline-secondary" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      <button type="button" class="btn btn-icon-only btn-outline-primary" aria-label="settings"><i class="modus-icons notranslate" aria-hidden="true">settings</i></button>
      </td>
      <td>Outline</td>
      <td>Used for secondary actions on a screen and/or used in-line as in Button Groups.</td>
    </tr>
  </tbody>
</table>

{{< whats-changed-table >}}

| Date       | Version | Notes                                                                                        | Contributors                                        |
| ---------- | ------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 09/01/2023 | 1.0.3   | Icon buttons and critical action button guidance added.                                      | E. Gunther, C. Rodriguez, S. Kaukonen, C. Oliff     |
| 11/23/2020 | 1.0.0   | Two progressions identified for clarity of use. Custom focus states added for accessibility. | E. Bohn, E. Gunther, L. Cook, L. Kause, S. Williams |

{{</ whats-changed-table >}}
