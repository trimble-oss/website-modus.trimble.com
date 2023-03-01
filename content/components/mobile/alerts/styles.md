---
title: "Alerts"
layout: "single"
description: "Alerts provide contextual information about system status that persists until dismissed or resolved."
components: true
images:
  - "/img/components/headers/alerts.png"
aliases:
  - "/components/alerts/"
tags: [mobile, styles]
---

## Specifications

- Container (Height: 56px; Radius: 2px; <span class="theme-l">background-color: white;</span> 1px border, 8px indicator line same color as border on the left; Padding: 16px; Margin: 16px) _required_
- Alert text (Font: Open Sans Bold 14px) _required_
- Leading Non-Interactive Icon/ Charm (16x16px) _optional_
- Button (text only, right aligned) or trailing close icon (16px16px) _optional_
- Link (underlined, only one per alert) _optional_

### Alerts

- Appear on top of the main content container.
- Stretch horizontally to fill 100% of the container they are placed in.
  - Always follow [typography line length guidelines](/foundations/typography/#line-length) when displaying alerts. Pair with another component, like a Form, or place in a fixed-width container to ensure alerts don't get too wide.
- Push other content down to make room for an alert on a page.
- Can include tint to add extra emphasis or to increase contrast with page content. When changing background color, make sure the text and icons pass [contrast ratio requirements](/foundations/accessibility/).
- Do not have a shadow.
- Remain on the page until dismissed.

### Basic Alerts

{{< img src="/img/mobile/alerts-example.svg" dark="/img/mobile/alerts-example-dark.svg" width="961" height="260" class="w-100" alt="Alerts Examples" >}}

### Behaviors

- When applicable, dismiss by clicking the close icon.
- When dismissed or resolved, alerts slide up and fade out, relinquishing their space.

### Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening and whether they need to act to successfully keep moving through a task. Warning alerts might tell a user what could happen if they don’t address what they’re being warned about.
- For messages, use full sentences with punctuation. Use sentence case.
- Unordered lists offer a structured format to present:
  - Items needing resolution
  - Guidelines to successful completion
  - Ways to resolve problems
