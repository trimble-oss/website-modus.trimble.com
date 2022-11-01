---
title: "Notifications"
layout: "single"
description: "Notifications provide unobtrusive, short-lasting, contextual feedback to the user."
components: true
component: notifications
keywords: notifications, notification,
tags: [in-field, styles]
---

## Specifications

- Notifications typically convey the status of the system.

- A Notification also may be used to convey the resulting status of an action the user has taken. For example, if the user takes some action or undertakes a task, upon submit a Success, Warning, Error, or processing/loading may be communicated to the user via a Notification

{{< img src="/img/in-field/notifications-spec.svg" width="100%" class="w-100 bg-light" alt="Notifications spec" lazyload="auto" >}}

Note: All items spacing are 20dp. Incab size only, see mobile for smaller options for in-field if required.

## Behaviors

- Two types of Notifications
- Basic toast message with heading text only.
- When more information is required add sub-text.
- Swipe right to dismiss or press the close button
- Toasts fades out automatically 3 or 6 seconds depending on the importance

Basic toast message with heading text only.
![Prompts example 1](/img/in-field/notifications-example-1.svg)

When more information is required add sub-text.
![prompts example 2](/img/in-field/notifications-example-2.svg)

### Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening in friendly, non-technical language.
- If the message requires a user to take action in order to continue or complete a task, use an [Alert](/components/in-field/alerts/) instead.
- For messages, use full sentences with punctuation. Use sentence case.

{{< img src="/img/in-field/card-states.svg" dark="/img/in-field/card-states-dark.svg" width="953" height="1247" class="w-100" alt="Card States" >}}

**Note:** Focus state uses “global blue”.
