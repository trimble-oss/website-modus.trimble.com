---
title: "Alerts"
layout: "single"
description: "Alerts provide contextual information about system status that persists until dismissed or resolved."
components: true
images:
  - "/img/components/headers/alerts.png"
aliases:
  - "/components/alerts/"
tags: [mobile, usage]
---

## Overview

Alerts display in direct response to a user action (e.g. clicking the Submit button on a form) and can be informational or identify actions required on that page before the user can continue. They appear at the top of the content area, push other content down, and persist until the user dismisses them or navigates away from the page. There are four types of notifications: error, warning, success, and informational.

### Usage

**Use when**

- Providing a user contextual information or status of an action they’re trying to complete in a specific element on the visible page.

### Example



**Don’t use when**

- Providing a user with a message related to a page-level or out-of-view event, like completion of a report generation. Instead, use a [Toast](/components/web/toasts/).
- Providing a user with a system-level message, like a network outage or browser incompatibility. Instead, use a [Modal](/components/web/modals/)
- Attaching an error message to an input.

{{< whats-changed-table >}}

| Date       | Version | Notes                                              | Contributors                   |
| ---------- | ------- | -------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Warning alert text color changed to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
