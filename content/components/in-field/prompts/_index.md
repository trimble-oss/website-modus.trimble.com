---
title: "Prompts"
layout: "single"
description: "Prompts inform the user about a decision they need to make or a system event they need to know about."
components: true
component: prompts
images:
  - "/img/in-field/headers/prompts.png"
keywords: Prompt, Prompts, Alert, Alerts
tags: [in-field, usage]
aliases:
  - prompt
---

{{< img src="/img/in-field/prompts.svg" dark="/img/in-field/prompts-dark.svg" width="1051" height="313" class="w-100 bg-light" alt="Prompts example" lazyload="auto" >}}

## Overview

A Prompt is a type of message that requires user engagement, either to make a decision or to know about some system event. They may be of any status type, typically "error" or "warning".

There are two types of prompt triggering conditions:

1. Resolvable Prompts: condition goes away once user has made a choice.

2. Active Prompts: relates to a system event (e.g. hardware failure) to be resolved and will remain in the Active List in the Message Center. An active prompt can either be dismissed by the condition being resolved or the user acknowledging the message.

## Usage

**Use when**

- The user is informed of a situation requiring their attention and action.

**Don't use when**

- There is a system critical action the user must take. If the user should stop work and immediately attend to a problem or error, do NOT use a Prompt. An alarm is used for such scenarios. See [Alarms](/components/in-field/alarms/) for more information.
- You need to display minor information that is "nice-to-know" but does not require the user to take any action. Use a [Notification](/components/in-field/notifications/) for scenarios where basic information needs to be conveyed to the user but does not require user action.

Basic Prompt message with heading text only.

{{< img src="/img/in-field/prompts-example-1.svg" dark="/img/in-field/prompts-example-1-dark.svg" width="100%" alt="Prompts Example 1" >}}

When more information is required add sub-text.

{{< img src="/img/in-field/prompts-example-2.svg" dark="/img/in-field/prompts-example-2-dark.svg" width="100%" alt="Prompts Example 2" >}}

{{< whats-changed-table >}}

| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 06/02/2022 | 1.0.1 | Updated full layout. | M. Johns |

{{</ whats-changed-table >}}
