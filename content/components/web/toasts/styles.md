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
---

## Specifications

- Container (Height: 42px; Radius: 2px; Padding: 16px; Margin: 16px; solid color; no border; [level 3 shadow](/foundations/shadows-and-depth/)) _required_
- Toast text (Font: Open Sans Semibold 14px) _required_
- Leading non-interactive icon (16x16px) _optional_
- Trailing close icon (16x16px) or a Text Only [Button](/components/web/buttons/) _optional_

<div class="guide-example-block my-3 py-3 bg-light">
  <div class="guide-content-sample anatomy-display-container">
    <div
      class="toast show anatomy-display-static"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-anatomy-colors="false">
      Aww yeah, you read a toast.
      <button type="button" class="close" data-dismiss="alert">
      <i class="modus-icons modus-icon notranslate">close</i>
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

**Basic Toasts**

<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icons modus-icon notranslate">close</i>
  </button>
</div>
<div class="toast toast-dark show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a dark toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icons modus-icon notranslate">close</i>
  </button>
</div>
<div class="toast toast-primary show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a primary toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icons modus-icon notranslate">close</i>
  </button>
</div>
<div class="toast toast-secondary show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a secondary toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icons modus-icon notranslate">close</i>
  </button>
</div>
<div class="toast toast-danger show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a danger toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icons modus-icon notranslate">close</i>
  </button>
</div>
<div class="toast toast-warning show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a warning toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icons modus-icon notranslate">close</i>
  </button>
</div>
<div class="toast toast-success show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a success toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icons modus-icon notranslate">close</i>
  </button>
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
