---
title: "Notifications"
layout: "single"
description: "Notifications provide unobtrusive, short-lasting, contextual feedback to the user."
components: true
component: notifications
images:
  - "/img/components/headers/notifications.png"
tags: [in-field, styles]
---

## Specifications

- Notifications typically convey the status of the system.

- A Notification also may be used to convey the resulting status of an action the user has taken. For example, if the user takes some action or undertakes a task, upon submit a Success, Warning, Error, or processing/loading may be communicated to the user via a Notification

<!-- prettier-ignore-start -->
| Size            | Example                                                                                           | Height | 
| --------------- | ------------------------------------------------------------------------------------------------- |--------|
| Heading & Text  | {{< img src="/img/in-field/notifications-spec.svg" dark="/img/in-field/notifications-spec-dark.svg" width="645" alt="Example of a Notifications Spec" >}}   | 142-200px   | 
| Heading & Icons | {{< img src="/img/in-field/notifications-spec-icons.svg" dark="/img/in-field/notifications-spec-icons-dark.svg" width="696" alt="Example of a Notifications with Icons" >}} | 106px   | 
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** All items spacing are 20dp. Incab size only, see mobile for smaller options for in-field if required.

### Types

There are two types of Notifications:

- Basic toast message with heading text only.
- When more information is required add sub-text.

<!-- prettier-ignore-start -->
| State       | Example                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Success     | {{< img src="/img/in-field/notifications-success.svg"  width="584" alt="Example of a Success Notification" >}}        |
| Information | {{< img src="/img/in-field/notifications-information.svg" width="584" alt="Example of a Information Notification" >}} |
| Loading     | {{< img src="/img/in-field/notifications-loading.svg"  width="584" alt="Example of an Loading Notification" >}}       |
| Alert       | {{< img src="/img/in-field/notifications-alert.svg" width="584" alt="Example of a Alert Notification" >}}             |
| Error       | {{< img src="/img/in-field/notifications-error.svg" width="584" alt="Example of a Error Notification" >}}             |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

Basic toast message with heading text only.
![Prompts example 1](/img/in-field/notifications-example-1.svg)

When more information is required add sub-text.
![prompts example 2](/img/in-field/notifications-example-2.svg)

**Note:** Focus state uses “global blue”.

### Behaviors

- Swipe right to dismiss or press the close button
- Toasts fades out automatically 3 or 6 seconds depending on the importance

### Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening in friendly, non-technical language.
- If the message requires a user to take action in order to continue or complete a task, use an [Alert](/components/in-field/alerts/) instead.
- For messages, use full sentences with punctuation. Use sentence case.

