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
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

<div
  class="example d-flex flex-column bg-secondary pt-5 pe-2 mx-auto border border-opacity-10 mb-3"
  style="padding-left: 310px !important; --bs-bg-opacity: 0.03; min-height: 270px">
  <br />
  <div
    class="message message-primary align-items-center"
    data-bs-toggle="popover"
    data-bs-placement="left"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="margin">
    <i class="modus-icons notranslate me-1" aria-hidden="true">info</i>This is a
    primary message
  </div>
  <br />
  <div
    class="message message-secondary align-items-center"
    style="margin-top:40px;"
    data-bs-toggle="popover"
    data-bs-placement="left"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="b-radius font-size height margin padding">
    <i class="modus-icons notranslate me-1" aria-hidden="true">help</i>This is a
    secondary message
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
{class="table table-sm table-bordered border border-opacity-50"}
<!-- prettier-ignore-end -->
