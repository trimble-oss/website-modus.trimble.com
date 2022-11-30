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

### Editorial

- Avoid acronyms.
- Use 2-5 words.
- Use the same label text for on and off states
