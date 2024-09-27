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
bootstrapURL: "/docs/v2/components/toasts/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-toast--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

<div class="guide-example-block my-3 py-4 bg-body-secondary bg-opacity-10">
    <div
      class="toast toast-secondary show my-5 mx-auto pe-none"
      style=""
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-toggle="popover"
      data-bs-custom-class="popover-css-inspector"
      data-bs-placement="left"
      data-css-inspector-hide="height margin max-width padding"
      data-css-inspector-show="width">
      <div class="toast-header pe-2 align-items-start">
    <i class="modus-icons me-2 align-items-top" aria-hidden="true">info</i>
    <div>
    <h4 class="mb-0">Title</h4>
This is a neutral toast. It shows you did something, but it's not very important.
    </div>
    <button type="button" class="btn-close me-0 m-auto" data-bs-dismiss="toast" aria-label="Close">
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

<div class="toast toast-primary show align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header pe-2 align-items-start">
    <i class="modus-icons me-2 align-items-top" aria-hidden="true">info</i>
    <div>
    <h4 class="mb-0">Title</h4>
This is an informal toast. It shows you did something, but it's not very important.
    </div>
    <button type="button" class="btn-close me-0 m-auto" data-bs-dismiss="toast" aria-label="Close">
    </button>
  </div>
</div>

<div class="toast toast-secondary show align-items-center mt-2" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header pe-2 align-items-start">
    <i class="modus-icons me-2 align-items-top" aria-hidden="true">info</i>
    <div>
    <h4 class="mb-0">Title</h4>
This is a neutral toast. It shows that you did you did something okay.
    </div>
    <button type="button" class="btn-close me-0 m-auto" data-bs-dismiss="toast" aria-label="Close">
    </button>
  </div>
</div>

<div class="toast toast-success show align-items-center mt-2" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header pe-2 align-items-start" data-bs-theme="dark">
    <i class="modus-icons me-2 align-items-top" aria-hidden="true">check_circle</i>
    <div>
    <h4 class="mb-0">Title</h4>
This is a success toast. It shows that you did you did something really well.
    </div>
    <button type="button" class="btn-close me-0 m-auto" data-bs-dismiss="toast" aria-label="Close">
    </button>
  </div>
</div>

<div class="toast toast-danger show align-items-center mt-2" role="alert" aria-live="assertive" aria-atomic="true">
   <div class="toast-header pe-2 align-items-start" data-bs-theme="dark">
    <i class="modus-icons me-2 align-items-top" aria-hidden="true">alert</i>
    <div>
    <h4 class="mb-0">Title</h4>
This is a error toast. It shows that you did you did something not very well.
    </div>
    <button type="button" class="btn-close me-0 m-auto" data-bs-dismiss="toast" aria-label="Close">
    </button>
  </div>
</div>

### Behaviors

- When applicable, dismiss by clicking the close icon.
- Toasts fade out automatically after 15 seconds.

### Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening in friendly, non-technical language.
- If the message requires a user to take action in order to continue or complete a task, use an [alert](/components/web/alerts/)
  instead.
- For messages, use full sentences with punctuation. Use sentence case.

<!-- prettier-ignore-start -->
| Element           | Property   | Color                                                                                                     |
| ----------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| Toast (Primary)   | Color      | {{< color-preview nameL=" " hexL="#07599b" nameD="Gray Light" hexD="#f1f1f6" >}}                          |
|                   | Background | {{< color-preview nameL="Blue (10%)" hexL="#cfe1ee" nameD="Trimble Blue (10%)" hexD="#019aeb80" >}}       |
|                   | Border     | {{< color-preview nameL="Blue" hexL="#0063a3" nameD="Trimble Blue" hexD="#019aeb" >}}                     |
| Toast (Secondary) | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray Light" hexD="#f1f1f6" >}}               |
|                   | Background | {{< color-preview nameL="Gray 6 (10%)" hexL="#d0d0d7" nameD="Gray 6 (10%)" hexD="#6a6e7980" >}}           |
|                   | Border     | {{< color-preview nameL="Gray 6" hexL="#6a6e79" nameD="Gray 6" hexD="#6a6e79" >}}                         |
| Toast (Danger)    | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray Light" hexD="#f1f1f6" >}}               |
|                   | Background | {{< color-preview nameL="Red (10%)" hexL="#f4d1d3" nameD="Red (10%)" hexD="#da212c80" >}}                 |
|                   | Border     | {{< color-preview nameL="Red Dark" hexL="#da212c" nameD="Red" hexD="#da212c" >}}                          |
| Toast (Success)   | Color      | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray Light" hexD="#f1f1f6" >}}               |
|                   | Background | {{< color-preview nameL="Green" hexL="#dfe9d6" nameD="Green (10%)" hexD="#1e8a4480" >}}                   |
|                   | Border     | {{< color-preview nameL="Green Dark" hexL="#006638" nameD="Green" hexD="#1e8a44" >}}                      |
{class="table table-sm table-bordered border border-opacity-50 d-none"}
<!-- prettier-ignore-end -->
