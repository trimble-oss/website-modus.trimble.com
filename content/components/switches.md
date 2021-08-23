---
title: "Switches"
layout: "single"
description: "Switches are used to toggle functionality."
components: true
images:
  - "/img/headers/components/switches.png"
keywords: forms, form
---

## Overview

Switches are selection controls that yield instantaneous actions. They have an on and off setting.

<div class="form-group mb-0">
  <div class="custom-control custom-switch">
    <input type="checkbox" checked="" class="custom-control-input" id="exampleSwitch" name="exampleSwitch" value="customEx">
    <label class="custom-control-label" for="exampleSwitch">Switch</label>
  </div>
  <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="exampleSwitch2" name="exampleSwitch" value="customEx">
    <label class="custom-control-label" for="exampleSwitch2">Switch</label>
  </div>
</div>
<div class="form-group mb-0">
  <div class="custom-control custom-switch">
    <input type="checkbox" disabled="" checked="" class="custom-control-input" id="exampleSwitch3" name="exampleSwitch2" value="customEx">
    <label class="custom-control-label" for="exampleSwitch3">Disabled</label>
  </div>
  <div class="custom-control custom-switch">
    <input type="checkbox" disabled="" class="custom-control-input" id="exampleSwitch4" name="exampleSwitch2" value="customEx">
    <label class="custom-control-label" for="exampleSwitch4">Disabled</label>
  </div>
</div>

## Usage

**Use when**

- Turning on and off a feature, mode, or functionality.
- Toggling elicits an immediate change in the UI.
- Toggling elicits a change in background behavior without affecting the UI.
- You want to trigger a state change directly when you toggle it.

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">
        <div class="bg-panel-background px-3">
          <strong>Settings</strong>
        </div>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            WiFi
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                checked
                class="custom-control-input"
                id="do1"
                name="do1"
                value="on"
              />
              <label class="custom-control-label" for="do1"></label>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Bluetooth
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                checked
                class="custom-control-input"
                id="do2"
                name="do2"
                value="on"
              />
              <label class="custom-control-label" for="do2"></label>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Notifications
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="do3"
                name="do3"
                value="on"
              />
              <label class="custom-control-label" for="do3"></label>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Dark Mode
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="do4"
                name="do4"
                value="on"
              />
              <label class="custom-control-label" for="do4"></label>
            </div>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="do" scope="row">
        Switches work well as toggles for functionality, as in this settings
        panel example.
      </td>
    </tr>
  </tbody>
</table>

**Don't use when**

- Requiring user action consent, such as accepting terms and conditions. Instead, use a [Checkbox](/components/checkboxes/).
- Requesting multiple choices from a group of options. Instead, use a [Checkbox](/components/checkboxes/) group.
- Users need to select one item from a list of options. Instead, use a [Radio Button](/components/radio-buttons/).

<table class="table table-bordered bg-white">
  <tbody>
    <tr>
      <td scope="row">
        <div class="d-flex bg-panel-background px-3">
          Your Allergies (click all that apply)
        </div>
        <div class="form-group mb-0 px-3">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              checked
              name="dont4"
              id="dont4"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="dont4">Pollen</label>
          </div>
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              name="dont5"
              id="dont5"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="dont5">Peanuts</label>
          </div>
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              checked
              name="dont6"
              id="dont6"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="dont6">Milk</label>
          </div>
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              name="dont7"
              id="dont7"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="dont7">Shellfish</label>
          </div>
        </div>
        <div class="bg-panel-background px-3 py-2">
          <button class="btn btn-sm btn-primary">Submit</button>
        </div>
      </td>
    </tr>
    <tr>
      <td class="dont" scope="row">
        <strong class="text-danger">Don't</strong> use switches for
        multi-selections within forms. These are best served by Checkboxes
        instead.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

- A switch must have a visible label that clearly conveys what option a user will turn on or off.

### Behaviors

- Avoid changing the label text based on on and off state.

<table class="table table-bordered bg-white">
  <tr>
    <td>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          checked=""
          class="custom-control-input"
          id="doSwitch1"
          name="doSwitch1"
          value="customEx"
        />
        <label class="custom-control-label" for="doSwitch1">
          Display information
        </label>
      </div>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="doSwitch2"
          name="doSwitch2"
          value="customEx"
        />
        <label class="custom-control-label" for="doSwitch2">
          Display information
        </label>
      </div>
    </td>
    <td>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          checked=""
          class="custom-control-input"
          id="dontSwitch1"
          name="dontSwitch1"
          value="customEx"
        />
        <label class="custom-control-label" for="dontSwitch1">
          Display information
        </label>
      </div>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="dontSwitch2"
          name="dontSwitch2"
          value="customEx"
        />
        <label class="custom-control-label" for="dontSwitch2">
          Don't display information
        </label>
      </div>
    </td>
  </tr>
  <tr>
    <td class="do">
      <strong class="text-success">Do</strong> use the same label text for both
      the on and off state.
    </td>
    <td class="dont">
      <strong class="text-danger">Don't</strong> change label text between
      states.
    </td>
  </tr>
</table>

### Editorial

- Avoid acronyms.
- Use 2-5 words.
- Use the same label text for on and off states

### Accessibility

- The switch has role `switch`.
- The switch has an accessible label provided by one of the following:
  - Visible text content contained within the element with role `switch`.
  - A visible label referenced by the value of `aria-labelledby` set on the element with role `switch`.
  - `aria-label` set on the element with role `switch`.
- When on, the switch element has state `aria-checked` set to `true`. When off, it has state `aria-checked` set to `false`.
- When the switch is in focus, pressing the "Space" key changes the state of the switch.
- Use a `fieldset` to create a switch group.

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0 | Border color changed to be accessible. White background added for emphasis. | E. Bohn, L. Kause, N. Springer |
{{</ whats-changed-table >}}
