---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
component: buttons
images:
  - "/img/in-field/headers/buttons.png"
tags: [in-field, usage]
aliases:
  - button
---

{{< img src="/img/in-field/btn-overview.svg" dark="/img/in-field/btn-overview-dark.svg" class="w-100" alt="Button Overview" height="96" width="961" loading="auto" >}}

## Overview

Buttons are clickable elements that are used to trigger actions. Buttons are used to initialize an action, either in the background or foreground of an experience. Use button labels wherever possible to express what action will occur, when the user interacts with a button.

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

 In-field uses a mix of both color and structural progression for best contrast outside.

### Color Mix Progression

<!-- prettier-ignore-start -->
| Example                              | Emphasis | When to use                                                          |
| ------------------------------------ | -------- | -------------------------------------------------------------------- |
| {{< img src="/img/in-field/btn-colour-mix-progression-primary.svg" dark="/img/in-field/btn-colour-mix-progression-primary-dark.svg" height="48" alt="Color Mix Progression" >}} | High     | Use to draw attention to the primary action on a screen. There should be only one Primary Button on a page at a time. Not all screens require a Primary Button.             |
| {{< img src="/img/in-field/btn-colour-mix-progression-secondary.svg" dark="/img/in-field/btn-colour-mix-progression-secondary-dark.svg" height="48" alt="Color Mix Progression" >}} | Medium   | Use for secondary actions on a screen. These Buttons can be used on most pages without constrictions. They appear most often in high volume use cases like Tables, or in an Action Bar.                               |
| {{< img src="/img/in-field/btn-colour-mix-progression-outline.svg" dark="/img/in-field/btn-colour-mix-progression-outline-dark.svg" height="48" alt="Color Mix Progression" >}} | Low  | Used for secondary actions to establish additional visual hierarchy. |
| {{< img src="/img/in-field/btn-colour-mix-progression-text-only.svg" dark="/img/in-field/btn-colour-mix-progression-text-only-dark.svg" height="48" alt="Color Mix Progression" >}} | Low      | Used for secondary actions to establish additional visual hierarchy. |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

### Ancillary Buttons

<!-- prettier-ignore-start -->
| Example                                                                                                                                               | Emphasis | When to use                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------- |
| {{< img src="/img/in-field/btn-ancillary-icon-only.svg" dark="/img/in-field/btn-ancillary-icon-only-dark.svg" height="56" alt="Ancillary Buttons" >}} | Medium   | Primary use is in-line or in “Button Groups.”                        |
| {{< img src="/img/in-field/btn-ancillary-danger.svg" height="48" alt="Ancillary Buttons" >}} | Low  | Danger buttons have a different visual style to inform users of potentially destructive actions they are about to take. If using the danger button as a standalone, we recommend styling it as a secondary button. Within a set, the danger button should be styled as a primary button..|
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** A yellow button in the Trimble brand color can be used **only in special use cases.**

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 05/09/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}

<style>
body[data-url*="/buttons/"] #menu-left a[href*=radio-buttons] {
  background-color: transparent !important;
}
</style>
