---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
component: Butttons
images:
  - "/img/mobile/headers/buttons.png"
tags: [mobile, usage]
aliases:
  - button
---

{{< img src="/img/mobile/buttons.svg" dark="/img/mobile/buttons-dark.svg" width="961" height="260" class="w-100" alt="Buttons Example" >}}

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

**Don’t use when**

- Displaying a collection of links to sections. Use links instead.
- Linking to an external site. Use links instead.
- An action is less important. Consider using a link instead.
- Presenting the user with one or more high or medium-high -actions specific to a task.

## Types

### Primary Buttons

Use to draw attention to the primary action on a screen. There are four types of primary mobile buttons:

- **Default Mobile Buttons:** Use to draw attention to the primary action on a screen. You may choose a Default or Pill style for your primary buttons, but NOT BOTH.
- **Stacked Mobile Buttons:** Use as a primary button with a leading icon, if horizontal screen space is limited (e.g., in bottom/ footer navigation).
- **Pill Buttons:** Use to draw attention to the primary action on a screen. You may choose a Default or Pill style for your primary buttons, but NOT BOTH.
- **Floating Action Buttons:** Use a FAB for the most common or important action on a screen. Icons in a FAB must be clear and understandable since these buttons do not have a text label. The FAB should persist on the screen when content is scrolling (e.g., "float" above all other content).

### Button Progressions

There are two button progressions you can choose from: structural and color progression. The choice should be based on the particular needs of the product’s intended usage, aesthetic, and/or target user’s needs. **Use only one button progression in a single product.** Ancillary button types can be used in either progression.

#### Structural

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
      <td><img src="/img/mobile/default-button.svg" alt="Default Button"></td>
      <td>High</td>
      <td>
        Use to draw attention to the primary action on a screen. You may choose a Default or Pill style for your primary buttons, but NOT BOTH.
      </td>
    </tr>
    <tr>
      <td><img src="/img/mobile/stacked-button.svg" alt="Stacked Mobile Button"></td>
      <td>Medium</td>
      <td>
       Use for secondary actions on a screen. Outline-style buttons work well on colored, dark, or image backgrounds. Consider how the style of an outline button might better suit the page.
      </td>
    </tr>
    <tr>
      <td><img src="/img/mobile/pill-button.svg" alt="Pill Button"></td>
      <td>Medium</td>
      <td>
       Used for secondary actions to establish additional visual hierarchy.
      </td>
    </tr>
  </tbody>
</table>


#### Color

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
      <td><img src="/img/mobile/default-button.svg" alt="Default Button"></td>
      <td>High</td>
      <td>
        Use to draw attention to the primary action on a screen. You may choose a Default or Pill style for your primary buttons, but NOT BOTH.
      </td>
    </tr>
    <tr>
      <td><img src="/img/mobile/stacked-button.svg" alt="Stacked Mobile Button"></td>
      <td>Medium</td>
      <td>
       Use for secondary actions on a screen. These Buttons can be used on most pages without constrictions. They appear most often in high volume use cases like Tables, or in an Action Bar. Consider using an outline button on gray backgrounds.
      </td>
    </tr>
    <tr>
      <td><img src="/img/mobile/pill-button.svg" alt="Pill Button"></td>
      <td>Medium</td>
      <td>
       Used for secondary actions to establish additional visual hierarchy or to use a secondary button that provides less emphasis.
      </td>
    </tr>
  </tbody>
</table>

#### Ancillary Buttons

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
      <th scope="row">FAB</th>
      <td><img src="/img/mobile/icon-only-button.svg" alt="Icon Only"></td>
      <td>High</td>
      <td>
        Use a FAB for the most common or important action on a screen.
      </td>
    </tr>
    <tr>
      <th scope="row">Icon Only</th>
      <td><img src="/img/mobile/icon-only-button.svg" alt="Icon Only"></td>
      <td>Medium</td>
      <td>
        Primary use is in-line or in “Button Groups.”
      </td>
    </tr>
    <tr>
      <th scope="row">Danger</th>
      <td><img src="/img/mobile/danger-button.svg" alt="Danger"></td>
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



{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati   |

{{</ whats-changed-table >}}
