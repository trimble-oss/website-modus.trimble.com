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
- Canceling and action.
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

There are two button progressions you can choose from: structural and color progression. The choice should be based on the particular needs of the product's intended usage, aesthetic, and/or target user's needs. **Use only one button progression in a single product.** Ancillary button types can be used in either progression.

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
      <td><button class="btn btn-outline-dark" type="button">Cancel</button></td>
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

### Icon-Only Buttons

**Note:** Secondary icon-only buttons are recommended as default option.

{{< table "class table table-bordered" >}}

| Example | Type                            | When to use                                                                                  |
| ------- | ------------------------------- | -------------------------------------------------------------------------------------------- |
|         | Solid                           | Used e.g., in floating toolbar.                                                              |
|         | Outline                         | Used in in-line and in button groups.                                                        |
|         | Icon-Only (no fill, no outline) | Used mainly in [Navbars](/components/web/navbars/) on white, dark blue, and gray background. |

{{</ table >}}

### Ancillary Buttons

<table class="table table-bordered">
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
          <button type="button" class="btn btn-icon-only btn-text-dark" aria-label="Settings">
            <i class="modus-icons notranslate" aria-hidden="true">gear</i>
          </button>
        </div>
        <div>
          <div
            class="btn-group shadow-1"
            role="group"
            aria-label="Basic example">
            <button type="button" class="btn btn-icon-only btn-outline-dark" aria-label="Calendar">
              <i class="modus-icons notranslate" aria-hidden="true">calendar</i>
            </button>
            <button
              type="button"
              class="btn btn-icon-only btn-outline-dark active" aria-label="Edit">
              <i class="modus-icons notranslate" aria-hidden="true">pencil</i>
            </button>
            <button type="button" class="btn btn-icon-only btn-outline-dark" aria-label="filter">
              <i class="modus-icons notranslate" aria-hidden="true">filter</i>
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
      <td><button class="btn btn-danger" type="button">Delete</button></td>
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

**Note:** A yellow button in the Trimble brand color can be used **only in special use cases**.

{{< whats-changed-table >}}

| Date       | Version | Notes                                                                                        | Contributors                                        |
| ---------- | ------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 08/09/2023 | 1.0.2   | Icon-Only guidance added.                                                                    | E. Gunther, S. Kaukonen                             |
| 11/23/2020 | 1.0.0   | Two progressions identified for clarity of use. Custom focus states added for accessibility. | E. Bohn, E. Gunther, L. Cook, L. Kause, S. Williams |

{{</ whats-changed-table >}}
