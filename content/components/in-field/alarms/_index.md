---
title: "Alarms"
layout: "single"
description: "Alarms tell the user of a critical system problem."
components: true
component: alarms
tags: [in-field, usage]
aliases:
  - alarm
  - alert
---

{{< img src="/img/in-field/alarm-overview.svg" dark="/img/in-field/alarm-overview-dark.svg" class="w-100" alt="Alarms Example" width="1087" height="471" lazyload="auto" >}}

## Overview

An alarm tells the user of a critical system problem that causes the system to not function correctly in a fundamental way and should stop work. Alarms always have an "error" status type since it always relates to an important system issue where something has gone wrong.

It is likely that the software will not be able to function correctly so the user is kept out of most parts of the UI. Making the alarm dismissible relies on there being a place outside the main UI that the user can be kept in until the system returns to an operable state. For example, in Earthworks, this is the "Dashboard".

**Note:** An alarm is the most serious and significant form of system status communicated in our interfaces. Alarms must be very carefully considered. A cross-discipline team is typically consulted to identify situations requiring an alarm.

## Usage

**Use when**

- There is a system critical action the user must take. The user must stop work and immediately attend to a problem or error.

**Don't use when**

- The user should attend to the issue but can carry on working for a time until the issue is resolved and/or the UI can sensibly be rendered while the issue is in play. Use a [Prompt](/components/in-field/prompts/) instead.
- If there is minor information that is "nice-to-know" but does not require the user to take any action. Use a [Notification](/components/in-field/notification/) for such scenarios where basic information is conveyed to the user, but such information does not require user action.

{{< img src="/img/in-field/alarm-landscape-portrait.svg" dark="/img/in-field/alarm-landscape-portrait-dark.svg" width="100%" class="w-100" alt="Alarms Example" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 05/09/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
