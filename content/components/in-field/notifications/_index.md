---
title: "Notifications"
layout: "single"
description: "Notifications provide unobtrusive, short-lasting, contextual feedback to the user."
components: true
component: notifications
images:
  - "/img/in-field/headers/notifications.png"
keywords: notification
tags: [in-field, usage]
---

{{<img src="/img/in-field/notifications.svg" dark="/img/in-field/notifications-dark.svg" width="961" height="185" alt="Example of a Notifications" loading="eager">}}

## Overview

A notification displays information that is helpful but not essential. It doesn't interrupt the user's work. A notification is fleeting. 

## Usage

**Use when**

- You need to display minor information that is "nice-to-know" but does not require the user to take any action. Examples include the current progress of something the user has initiated or the correct process to follow if a user action was unsuccessful.

**Don't use when**

- The user should attend to the issue but can carry on working for a time until the issue is resolved and/or the UI can sensibly be rendered while the issue is in play. Use a [Prompt](/components/in-field/prompt/) instead.
- There is a system critical action the user must take. If the user should stop work and immediately attend to a problem or error, use an [Alarm](/components/in-field/alarms/).

## Examples

Basic notification with heading text only.

{{<img src="/img/in-field/notifications-example-1.svg" dark="/img/in-field/notifications-example-1-dark.svg" width="1087" alt="Notifications example 1" loading="auto">}}

When more information is required add sub-text.

{{<img src="/img/in-field/notifications-example-2.svg" dark="/img/in-field/notifications-example-2-dark.svg" width="1087" alt="Notifications example 2" loading="auto">}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 06/02/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
