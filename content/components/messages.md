---
title: "Messages"
layout: "single"
description: "Messages provide the user with contextual static information. They have a lower priority than an alert."
components: true
images:
  - "/img/headers/components/messages.png"
aliases:
  - "/elements/messages/"
bootstrapURL: "/components/messages/"
reactBootstrapURL: "/components/messages/"

---

## Overview

Messages display low priority content directly on the page and are not dismissable. They should be used within other elements to convey helpful information in an unobtrusive way.

<div class="d-flex flex-column">
  <div class="message message-primary">
    <i class="modus-icons">info</i>This is a primary message
  </div>
  <div class="message message-secondary">
    <i class="modus-icons">help</i>This is a secondary message
  </div>
  <!--
  <div class="message message-success">
    <i class="modus-icons">check_circle</i>This is a success message
  </div>
  <div class="message message-warning">
    <i class="modus-icons">warning</i>This is a warning message
  </div>
  <div class="message message-danger">
    <i class="material-icons">error</i>This is a danger message
  </div>
  -->
</div>

## Usage

**Use when**

- Providing the user with helpful, contextual information about a possible action or a set of data.

**Don't use when**

- Alerting the user of a high priority error. Instead, use an [Alert](/components/alerts/).
- Alerting the user of an out-of-context event. Instead, use a [Toast](/components/toasts/).

## Specifications

<div class="guide-example-block my-3">
  <div class="guide-sample bg-white">
    <div class="message message-primary m-0">
      <i class="modus-icons">info</i> This is a primary message.
    </div>
  </div>
</div>

- Fills the width of its container.
- Should have an accompanying icon to the left of the message text. When the text spans multiple lines, the icon should remain aligned to the top.

### Behaviors

- Messages should remain static on the page. They should not be dismissible.

### Editorial

- Messages should be brief, full sentences, with proper punctuation.
- They should provide the user with helpful, contextual information about a possible action or a set of data.

### Accessibility

- Make sure the message is read by screen readers.
- Do not use the `role="alert"` attribute.
