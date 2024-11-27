---
title: "Messages"
layout: "single"
description: "Messages provide the user with contextual static information. They have a lower priority than a notification or prompt."
components: true
component: messages
images:
  - "/img/in-field/headers/messages.png"
tags: [in-field, usage]
---

{{< img src="/img/in-field/messages-overview.svg" dark="/img/in-field/messages-overview-dark.svg" class="w-100 bg-secondary bg-opacity-25" width="1087" height="353" alt="Messages example" loading="auto" >}}

## Overview

Messages are used within other elements to convey status and helpful information in an unobtrusive way. Messages display content directly on the screen and are not interactive or dismissible. Messages provide supporting information or additional instruction about a data set, dialog, or screen. Messages are typically displayed at the top of the screen and convey information or status about the screen content as a whole.

## Usage

#### Use when

- Providing the user with helpful, contextual information about a possible action, set of data, or screen.

#### Don't use when

- Alerting the user of a high priority warning or error. Instead, use an [Alarm](/components/in-field/alarms/).
- Alerting the user of an out-of-context event. Instead, use a [Notification](/components/in-field/notifications/).
- There is a system-critical action the user must take. If the user should stop work and immediately attend to a problem or error, use an [Alarm](/components/in-field/alarms/).
- You need to communicate contextual information or status about an input field component. Use Helper Text instead.

<!-- prettier-ignore-start -->
| Example                                                                                    | Emphasis | When to use                                                                                      |
| ------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------ |
| {{< img src="/img/in-field/message-example-info.svg" dark="/img/in-field/message-example-info-dark.svg" width="552" height="64" alt="" >}} | Low   | When useful information is required                                                              |
| {{< img src="/img/in-field/message-example-warning.svg" dark="/img/in-field/message-example-warning-dark.svg" width="552" height="64" alt="" >}} | Medium   | When user needs an inline message that requires attention.                                                |
| {{< img src="/img/in-field/message-example-error.svg" dark="/img/in-field/message-example-error-dark.svg" width="552" height="64" alt="" >}} | High   | When the user needs an alert of a very important message on a page.                                |
| {{< img src="/img/in-field/message-example-default.svg" dark="/img/in-field/message-example-default-dark.svg" width="552" height="64" alt="" >}}  | Low      | Generic message of less important information; can have an icon if needed. |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 05/09/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
