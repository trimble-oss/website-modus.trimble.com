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
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

- A switch must have a visible label that clearly conveys what option a user will turn on or off.

<div class="guide-example-block bg-secondary py-4" style="padding-left: 240px !important; --bs-bg-opacity: 0.03; min-height: 98px">
  <div class="guide-sample py-2">
  <div class="form-check form-switch my-2">
  <input class="form-check-input pe-none"
    type="checkbox"
    id="flexCheckChecked"
    data-bs-toggle="popover"
    data-bs-placement="left"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="b-radius color font-size margin padding"
    checked>
  <label
    class="form-check-label pe-none"
    for="flexCheckChecked"
    data-bs-toggle="popover"
    data-bs-placement="right"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="bg-color b-radius height margin padding"
    data-css-inspector-show="color font-size">
    Checked Switch
  </label>
</div>
</div>
</div>

<div class="guide-example-block bg-secondary py-5" style="padding-left: 240px !important; --bs-bg-opacity: 0.03; min-height: 98px">
  <div class="guide-sample py-2">
  <div class="form-check form-check-sm form-switch my-2">
  <input class="form-check-input pe-none"
    type="checkbox"
    id="flexCheckCheckedSmall"
    data-bs-toggle="popover"
    data-bs-placement="left"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="b-radius color font-size margin max-width padding"
    checked>
  <label
    class="form-check-label pe-none"
    for="flexCheckCheckedSmall"
    data-bs-toggle="popover"
    data-bs-placement="right"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="bg-color b-radius height margin padding"
    data-css-inspector-show="color font-size">
    Checked Switch
  </label>
</div>
</div>
</div>

### Behaviors

- Avoid changing the label text based on on and off state.

<table class="table table-bordered">
  <tr>
    <td class="py-3" width="50%">
      <div class="form-check form-switch mb-1">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label" for="flexSwitchCheckChecked">Display information</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Display information</label>
      </div>
    </td>
    <td class="py-3">
      <div class="form-check form-switch mb-1">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked3" checked>
        <label class="form-check-label" for="flexSwitchCheckChecked3">Display information</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault4">
        <label class="form-check-label" for="flexSwitchCheckDefault4">Don't display information</label>
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

<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->

### Editorial

- Avoid acronyms.
- Use 2-5 words.
- Use the same label text for on and off states

<style>
[data-bs-theme="dark"] .custom-switch .custom-control-input:checked~.custom-control-label:hover::before {
  background-color: #0063a3;
  border-color: #0063a3;
}
[data-bs-theme="light"] .custom-switch .custom-control-input:checked~.custom-control-label:hover::before {
  background-color: #0063a3;
  border-color: #0063a3;
}
</style>
