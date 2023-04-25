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
tags: [styles]
---

## Specifications

- A switch must have a visible label that clearly conveys what option a user will turn on or off.

### Behaviors

- Avoid changing the label text based on on and off state.

<table class="table table-bordered">
  <tr>
    <td width="50%">
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

### Colors

| Element      | Property         | Color                                                                                             |
| ------------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| Toggle       |                  | {{< color-preview nameL="White" hexL="#ffffff" nameD="White" hexD="#ffffff" >}}                   |
| Label        |                  | {{< color-preview nameL="Gray 8" hexL="#464B52" nameD="Gray 2" hexD="#B7B9C3" >}}                 |
| Default/On   | Background       | {{< color-preview nameL="Blue Light" hexL="#217CBB" nameD="Dark Mode Blue" hexD="#019AEB" >}}     |
| Default/Off  | Background       | {{< color-preview nameL="Gray 4" hexL="#90939F" nameD="Gray 4" hexD="#90939F" >}}                 |
| Focused/On   | Background       | {{< color-preview nameL="Trimble Blue" hexL="#0063A3" nameD="Dark Mode Blue" hexD="#019aeb" >}}   |
| Focused/Off  | Background       | {{< color-preview nameL="Gray 4" hexL="#90939F" nameD="Gray 4" hexD="#90939F" >}}                 |
|              | Border           | {{< color-preview nameL="Blue Light" hexL="#217CBB" nameD="Dark Mode Blue" hexD="#019aeb" >}}     |
| Hover/On     | Background       | {{< color-preview nameL="Trimble Blue" hexL="#0063A3" nameD="Dark Mode Blue" hexD="#019aeb" >}}   |
| Hover/Off    | Background       | {{< color-preview nameL="Gray 4" hexL="#90939F" nameD="Gray 4" hexD="#90939F" >}}                 |
|              | Border           | {{< color-preview nameL="Blue Light" hexL="#217CBB" nameD="Dark Mode Blue" hexD="#019AEB" >}}     |
| Disabled/On  | Background (30%) | {{< color-preview nameL="Trimble Blue" hexL="#0063A380" nameD="Dark Mode Blue" hexD="#019aeb" >}} |
| Disabled/Off | Background (30%) | {{< color-preview nameL="Gray 4" hexL="#90939F80" nameD="Gray 4" hexD="#90939F" >}}               |
{class="table table-bordered table-sm table-colors"}

### Editorial

- Avoid acronyms.
- Use 2-5 words.
- Use the same label text for on and off states

<style>
[data-theme="dark"] .custom-switch .custom-control-input:checked~.custom-control-label:hover::before {
  background-color: #0063a3;
  border-color: #0063a3;
}
[data-theme="light"] .custom-switch .custom-control-input:checked~.custom-control-label:hover::before {
  background-color: #0063a3;
  border-color: #0063a3;
}
.custom-switch .custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
}
</style>
