---
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
componentsWeb: true
images:
  - "/img/components/headers/sliders.png"
keywords: forms, form, range
bootstrapURL: "/components/sliders/"
reactBootstrapURL: "/components/sliders/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-slider--default"
tags: [styles]
---


## Specifications

- Always use with a label, even if that label is hidden.
- When a label is visible, it should clearly communicate the purpose of the range input and its values (min, max, step, value).
- Label sliders as optional when input is not required.
- Validate input as soon as users have finished interacting with a field (but not before).
- Always use with two text field components when range slider has dual thumbs to provide accessible alternatives to both the lower and upper thumbs.

### Behaviors

- Adjust a slider’s value(s) by clicking and dragging its handle(s), or by clicking anywhere on its bar.
- Hovering over an active slider’s handle will change the default cursor to the grab cursor; clicking will change it to the grab cursor.
- Changes made with sliders are immediate.
