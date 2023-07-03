---
title: "Switches"
layout: "single"
description: "Switches are used to toggle functionality."
components: true
componentsWeb: true
images:
  - "/img/components/headers/switches.png"
keywords: forms, form
bootstrapURL: "/components/switches/"
reactBootstrapURL: "/components/switches/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/user-inputs-switch--default"
aliases:
  - "/components/switches/"
tags: [usage]
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

#### Use When

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
          <strong>Settings</strong>
        </div>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Wi-Fi
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

#### Don't Use When

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
