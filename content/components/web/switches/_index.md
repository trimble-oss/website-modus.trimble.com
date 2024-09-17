---
title: "Switches"
layout: "single"
description: "Switches are used to toggle functionality."
components: true
componentsWeb: true
images:
  - "/img/components/headers/switches.png"
keywords: forms, form
bootstrapURL: "/docs/v2/forms/checks-radios/#switches"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/user-inputs-switch--default"
aliases:
  - "/components/switches/"
tags: [usage]
---

## Overview

Switches are selection controls that yield instantaneous actions. They have an on and off setting.

<div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch</label>
</div>
<div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch</label>
</div>
<div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
  <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch</label>
</div>

## Usage

#### Use when

- Turning on and off a feature, mode, or functionality.
- Toggling elicits an immediate change in the UI.
- Toggling elicits a change in background behavior without affecting the UI.
- You want to trigger a state change directly when you toggle it.

## Example

<table class="table table-bordered">
  <tbody>
    <tr>
      <td scope="row">
        <div class="bg-panel-background px-3">
          <strong class="mt-2">Settings</strong>
        </div>
        <ul class="list-group mb-2" style="max-width:320px">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Wi-Fi
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchWiFi" checked>
              <label class="form-check-label" for="flexSwitchWiFi"></label>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Bluetooth
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchBluetooth" checked>
              <label class="form-check-label" for="flexSwitchBluetooth"></label>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Notifications
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchBluetooth">
              <label class="form-check-label" for="flexSwitchBluetooth"></label>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Dark Mode
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchDarkMode">
              <label class="form-check-label" for="flexSwitchDarkMode"></label>
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

#### Don't use when

- Requiring user action consent, such as accepting terms and conditions. Instead, use a [Checkbox](/components/web/checkboxes/).
- Requesting multiple choices from a group of options. Instead, use a [Checkbox](/components/web/checkboxes/) group.
- Users need to select one item from a list of options. Instead, use a [Radio Button](/components/web/radio-buttons/).

<table class="table table-bordered">
  <tbody>
    <tr>
      <td scope="row">
        <div class="d-flex px-3">
          Your Allergies (click all that apply)
        </div>
        <div class="form-group mb-0 px-3">
          <div class="form-check form-switch my-1">
            <input
              type="checkbox"
              checked
              name="dont4"
              id="dont4"
              class="form-check-input"
            />
            <label class="form-check-label" for="dont4">Pollen</label>
          </div>
          <div class="form-check form-switch my-1">
            <input
              type="checkbox"
              name="dont5"
              id="dont5"
              class="form-check-input"
            />
            <label class="form-check-label" for="dont5">Peanuts</label>
          </div>
          <div class="form-check form-switch my-1">
            <input
              type="checkbox"
              checked
              name="dont6"
              id="dont6"
              class="form-check-input"
            />
            <label class="form-check-label" for="dont6">Milk</label>
          </div>
          <div class="form-check form-switch my-1">
            <input
              type="checkbox"
              name="dont7"
              id="dont7"
              class="form-check-input"
            />
            <label class="form-check-label" for="dont7">Shellfish</label>
          </div>
        </div>
        <div class="px-3 py-2">
          <button class="btn btn-sm btn-primary" type="button">Submit</button>
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

{{< whats-changed-table >}}

| Date       | Version | Notes                                                                       | Contributors                   |
| ---------- | ------- | --------------------------------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Border color changed to be accessible. White background added for emphasis. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
