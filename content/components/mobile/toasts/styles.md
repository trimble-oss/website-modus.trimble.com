---
title: "Toasts"
layout: "single"
description: "Toasts provide non-intrusive, short-lasting contextual feedback to the user."
components: true
images:
  - "/img/components/headers/toasts.png"
keywords: alert
aliases:
  - "/components/toasts/"
tags: [mobile, styles]
---

## Specifications

- Container (Height: 42px; Radius: 2px; Padding: 16px; Margin: 16px; solid color; no border; [level 3 shadow](/foundations/shadows-and-depth/)) _required_
- Toast text (Font: Open Sans Semibold 14px) _required_
- Leading non-interactive icon (16x16px) _optional_
- Trailing close icon (16x16px) or a Text Only [Button](/components/mobile/buttons/) _optional_

**Toasts**

{{< img src="/img/mobile/toast-specs.svg" dark="/img/mobile/toast-specs.svg" width="961" height="260" class="w-100" alt="Toast" >}}

- Appear on the bottom, relative to the bottom edge of the browser/ device.
- Fill as much horizontal space as needed.
- Float above the content.
- Fade out automatically after some some.
- Can sometimes be dismissed with a close icon.
- Cannot include links.

**Basic Toasts**

{{< img src="/img/mobile/toasts-example.svg" dark="/img/mobile/toasts-example-dark.svg" width="961" height="260" class="w-100" alt="Toasts" >}}

## Behaviors

- When applicable, dismiss by clicking the close icon.
- Toasts fade out automatically after 30 seconds.

## Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening in friendly, non-technical language.
- If the message requires a user to take action in order to continue or complete a task, use an [alert](/components/mobile/alerts/)
  instead.
- For messages, use full sentences with punctuation. Use sentence case.
