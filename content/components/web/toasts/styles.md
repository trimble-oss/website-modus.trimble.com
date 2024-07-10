---
title: "Toasts"
menuTitle: "Toasts"
layout: "single"
description: "Toasts provide non-intrusive, short-lasting contextual feedback to the user."
components: true
componentsWeb: true
images:
  - "/img/components/headers/toasts.png"
keywords: alert
bootstrapURL: "/components/toasts/"
reactBootstrapURL: "/components/toasts/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-toast--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

<style>
.toast-body {padding: .594rem;}
</style>

## Specifications

- Container (Height: 42px; Radius: 2px; Padding: 16px; Margin: 16px; solid color; [level 3 shadow](/foundations/shadows-and-depth/)) _required_
- Toast text (Font: Open Sans 14px) _required_
- Leading non-interactive icon (16x16px) _optional_
- Trailing close icon (16x16px) or a Text Only [Button](/components/web/buttons/) _optional_

<div class="guide-example-block my-3 py-4 bg-body-secondary bg-opacity-10">
    <div
      class="toast show my-5 mx-auto pe-none"
      style=""
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-toggle="popover"
      data-bs-x-template="<div class='popover popover-css-inspector bs-popover-left fade show' role='tooltip'><div class='popover-arrow'></div><div class='popover-body'></div></div>"
      data-bs-custom-class="popover-css-inspector"
      data-bs-placement="left"
      data-css-inspector-hide="bg-color margin max-width padding width"
      data-css-inspector-show="box-shadow">
      <div class="d-flex align-items-center">
      <div class="toast-body">Aww yeah, you read a toast.</div>
      <button type="button" class="btn-close me-2 m-auto" aria-disabled="true">
      </button>
    </div>
  </div>
</div>

**Toasts**

- Appear on the bottom, relative to the bottom edge of the browser/ device.
- Fill as much horizontal space as needed.
- Float above the content.
- Fade out automatically after some some.
- Can sometimes be dismissed with a close icon.
- Cannot include links.

<div class="toast show mb-3" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex align-items-center">
    <div class="toast-body">Aww yeah, you read a toast.</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">
    </button>
  </div>
</div>
<div class="toast toast-primary show mb-3" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex align-items-center">
    <div class="toast-body">Aww yeah, you read a primary toast.</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">
    </button>
  </div>
</div>
<div class="toast toast-warning show mb-3" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex align-items-center">
    <div class="toast-body">Aww yeah, you read a warning toast.</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="alert">
    </button>
  </div>
</div>
<div class="toast toast-success show mb-3" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex align-items-center">
    <div class="toast-body">Aww yeah, you read a success toast.</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="alert">
    </button>
  </div>
</div>

### Behaviors

- When applicable, dismiss by clicking the close icon.
- Toasts fade out automatically after 30 seconds.

### Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening in friendly, non-technical language.
- If the message requires a user to take action in order to continue or complete a task, use an [alert](/components/web/alerts/)
  instead.
- For messages, use full sentences with punctuation. Use sentence case.

### Colors

<!-- prettier-ignore-start -->
| Element           | Property   | Color                                                                                                     |
| ----------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| Toast             | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="White" hexD="#ffffff" >}}                    |
|                   | Background | {{< color-preview nameL="White" hexL="#ffffff" nameD=" " hexD="rgba(241,241,246,.15)" >}}                 |
|                   | Border     | {{< color-preview nameL="Black (10%)" hexL="rgba(0,0,0,.1)" nameD="Black (10%)" hexD="rgba(0,0,0,.1)" >}} |
| Toast (Dark)      | Color      | {{< color-preview nameL="White" hexL="#fff" nameD="White" hexD="#ffffff" >}}                              |
|                   | Background | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray 10 (10%)" hexD="#171c1e80" >}}          |
|                   | Border     | {{< color-preview nameL="Black (10%)" hexL="rgba(0,0,0,.1)" nameD="Gray 10" hexD="#171c1e" >}}            |
| Toast (Primary)   | Color      | {{< color-preview nameL=" " hexL="#07599b" nameD="Gray Light" hexD="#f1f1f6" >}}                          |
|                   | Background | {{< color-preview nameL="Blue (10%)" hexL="#cfe1ee" nameD="Trimble Blue (10%)" hexD="#019aeb80" >}}       |
|                   | Border     | {{< color-preview nameL="Blue" hexL="#0063a3" nameD="Trimble Blue" hexD="#019aeb" >}}                     |
| Toast (Secondary) | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray Light" hexD="#f1f1f6" >}}               |
|                   | Background | {{< color-preview nameL="Gray 6 (10%)" hexL="#d0d0d7" nameD="Gray 6 (10%)" hexD="#6a6e7980" >}}           |
|                   | Border     | {{< color-preview nameL="Gray 6" hexL="#6a6e79" nameD="Gray 6" hexD="#6a6e79" >}}                         |
| Toast (Danger)    | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray Light" hexD="#f1f1f6" >}}               |
|                   | Background | {{< color-preview nameL="Red (10%)" hexL="#f4d1d3" nameD="Red (10%)" hexD="#da212c80" >}}                 |
|                   | Border     | {{< color-preview nameL="Red Dark" hexL="#da212c" nameD="Red" hexD="#da212c" >}}                          |
| Toast (Warning)   | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray Light" hexD="#f1f1f6" >}}               |
|                   | Background | {{< color-preview nameL="Yellow" hexL="#fff2cc" nameD="Yellow (10%)" hexD="#fbad2680" >}}                 |
|                   | Border     | {{< color-preview nameL="Yellow Dark" hexL="#e49325" nameD="Yellow" hexD="#fbad26" >}}                    |
| Toast (Success)   | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray Light" hexD="#f1f1f6" >}}               |
|                   | Background | {{< color-preview nameL="Green" hexL="#dfe9d6" nameD="Green (10%)" hexD="#1e8a4480" >}}                   |
|                   | Border     | {{< color-preview nameL="Green Dark" hexL="#006638" nameD="Green" hexD="#1e8a44" >}}                      |
{class="table table-sm table-bordered border border-opacity-50"}
<!-- prettier-ignore-end -->
