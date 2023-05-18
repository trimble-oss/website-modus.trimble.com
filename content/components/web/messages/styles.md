---
title: "Messages"
layout: "single"
description: "Messages provide the user with contextual static information. They have a lower priority than an alert."
components: true
componentsWeb: true
images:
  - "/img/components/headers/messages.png"
bootstrapURL: "/components/messages/"
reactBootstrapURL: "/components/messages/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-message--default"
tags: [styles]
---

## Specifications

<div class="d-flex flex-column">
  <div class="message message-primary">
    <i class="modus-icons notranslate" aria-hidden="true">info</i>This is a primary message
  </div>
  <div class="message message-secondary">
    <i class="modus-icons notranslate" aria-hidden="true">help</i>This is a secondary message
  </div>
</div>

- Fills the width of its container.
- Should have an accompanying icon to the left of the message text. When the text spans multiple lines, the icon should remain aligned to the top.

### Behaviors

- Messages should remain static on the page. They should not be dismissible.

### Editorial

- Messages should be brief, full sentences, with proper punctuation.
- They should provide the user with helpful, contextual information about a possible action or a set of data.

## Colors

<!-- prettier-ignore-start -->
| Element   | Property   | Color                                                                                                |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| Primary   | Color      | {{< color-preview nameL="Trimble Blue" hexL="#0063a3" nameD="White" hexD="#ffffff" >}}               |
|           | Background | {{< color-preview nameL="Pale Blue" hexL="#dcedf9" nameD="Dark Mode Blue (20%)" hexD="#019aeb33" >}} |
| Secondary | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="White" hexD="#ffffff" >}}               |
|           | Background | {{< color-preview nameL="Light Gray" hexL="#f1f1f6" nameD="Gray 9" hexD="#353a40" >}}                |
{class="table table-sm table-bordered"}
<!-- prettier-ignore-end -->
