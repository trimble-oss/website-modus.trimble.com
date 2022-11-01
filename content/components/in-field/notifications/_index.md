---
title: "Notifications"
layout: "single"
description: "Notifications provide unobtrusive, short-lasting, contextual feedback to the user."
components: true
component: notifications
keywords: notifications, notification,
tags: [in-field, usage]
---

{{< img src="/img/in-field/notifications.svg" width="961" height="185" class="bg-light" alt="Notifications example" lazyload="auto" >}}

## Overview

A notification displays information that is helpful but not essential. It doesn't interrupt the user's work. A notification is fleeting. It is displayed temporarily, then stored in the Message Log.

## Usage

**Use when**

- Minor information that is "nice-to-know" but does not require the user to take any action. Examples include the current progress of something the user has initiated or the correct process to follow if a user action was unsuccessful.

**Don't use when**

- The user should attend to the issue but can carry on working for a time until the issue is resolved and/or the UI can sensibly be rendered while the issue is in play. A [Prompt](/components/in-field/prompt/) is a better choice here.
- Do not use a Notification if there is a system critical action the user must take. If the user should stop work and immediately attend to a problem or error, use an [Alarm](/components/in-field/alarms/). Basic Prompt message with heading text only.

## Usage

{{< img src="/img/in-field/notifications-progression.svg" width="1052" height="643" class="bg-light w-100" alt="Notifications progression example" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 06/02/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
