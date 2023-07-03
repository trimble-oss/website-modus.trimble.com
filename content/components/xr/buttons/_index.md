---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
componentsXR: true
component: buttons
images:
  - "/img/xr/headers/buttons.png"
tags: [xr, usage]
aliases:
  - button
---

{{< img src="/img/xr/MXR_Button_Interaction.gif" width="854" height="481" class="w-100" loading="auto" >}}

## Overview

Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

Buttons have visual cues and affordances that help increase interaction confidence with users.

Since their “activator” (collider) is attached to the users’ index fingers, by default they react to the push action of the index finger of users. Buttons can be modified in their size, if the experience so requires. Pretty much like in real life, the larger the button, the greater the effort to pulse it, therefore as the button size increases, so does the position of the “activator” from the finger to the entire hand.

Far interaction works by default and the button can be triggered using Air Tap.

## Usage

#### Use When

- Affording interaction to key behaviors and features.
- Confirming or submitting information entered into a form.
- Cancelling and action, except when an unambiguous gesture is available.
- Resetting a form or dataset.
- Closing a container or section.
- Opening a menu.
- Moving forward or backward through a wizard-type workflow.
- Creating an object within a group.
- Applying a non-critical action to a dataset.

#### Don't Use When

- Triggering navigation interactions, i.e. pan, orbit, zoom.
- Initiating navigation, i.e. teleport.
- Presenting the user with one or more high or medium-high actions specific to a task.

## Types

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
      <td><img src="/img/xr/Button_Primary.png" alt="Primary Button" width="200" height="125"></td>
      <td>High</td>
      <td>
        Use to draw attention to the primary action on a scene. There should be only one Primary Button on a UI at a time. Not all interfaces presented to users require a Primary Button.
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Button_Secondary_Classic.png" alt="Primary Button" width="200" height="125"></td>
      <td>Medium - Light</td>
      <td>
        Used for secondary actions, establishing additional visual hierarchy on the scene.
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Button_Secondary_Transparent.png" alt="Primary Button" width="200" height="125"></td>
      <td>Medium - Dark</td>
      <td>
         Used for secondary actions, establishing additional visual hierarchy on the scene.
      </td>
    </tr>
  </tbody>
</table>

### Form Progression

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Form</th>
      <th>Example</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Round</th>
      <td><img src="/img/xr/Buttons_Round_Transparent.png" alt="Round Buttons Transparent" width="200" height="125" loading="lazy"></td>
      <td>
        Use in-line or in “Button Groups”, when an interface requires many commands that are similar in size and hierarchy, and when there is limited UI space available. Recommended for radial menus.
      </td>
    </tr>
    <tr>
      <th scope="row">Square</th>
      <td><img src="/img/xr/Button_Square_Classic.png" alt="Square Buttons Classic" width="200" height="125" loading="lazy"></td>
      <td>
        Use in-line or in “Button Groups”, when an interface requires many commands that are similar in size and hierarchy, and when there is limited UI space available.
      </td>
    </tr>
        <tr>
      <th scope="row">Rectangular</th>
      <td><img src="/img/xr/Buttons_Rectangular_Text_Classic.png" alt="Rectangular Buttos Classic" width="200" height="125" loading="lazy"></td>
      <td>
        Primary use is for single actions that users can take.  They can be used for options, but should be used judiciously not to disrupt visual hierarchy or functionality.  Use in:
        <br> - Dialogs</br>
        <br> - Modals</br>
      </td>
    </tr>
  </tbody>
</table>

### Functional Progression

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Action</th>
      <th>Example</th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Trigger</th>
      <td><img src="/img/xr/Button_Square_Classic.png" alt="Square Button Classic" width="200" height="125" loading="lazy"></td>
      <td>
        Trigger action on hit.
      </td>
    </tr>
    <tr>
      <th scope="row">Select</th>
      <td><img src="/img/xr/Buttons_Square_Selection_Transparent.png" alt="Selection Buttons Transparent" width="200" height="125" loading="lazy"></td>
      <td>
        Execute a selection.
          <br> - Radio  = single selection</br>
          <br> - Check  = multiple selection</br>
          <br> - Switch = turn on/off </br>
      </td>
    </tr>
        <tr>
      <th scope="row">Toggle</th>
      <td><img src="/img/xr/Buttons_Square_Toggle_Classic.png" alt="Toggle Buttons Classic" width="200" height="125" loading="lazy"></td>
      <td>
        Trigger an action and/or update the display of information.
      </td>
    </tr>
  </tbody>
</table>
