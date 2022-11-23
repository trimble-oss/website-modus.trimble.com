---
title: "Messages"
layout: "single"
description: "Messages provide the user with contextual static information. They have a lower priority than a notification or prompt."
components: true
component: messages
images:
  - "/img/components/headers/messages.png"
tags: [in-field, styles]
---

## Specifications

<!-- prettier-ignore-start -->
| State  | Example                                                                                           | Height | Use Case    |
| ------ | ------------------------------------------------------------------------------------------------- |--------|-------------|
| Small  | {{< img src="/img/in-field/messages-small.svg" dark="/img/in-field/messages-small-dark.svg" width="655" alt="Example of a small message" >}}   | 48px   | Cards     |
| Medium | {{< img src="/img/in-field/messages-medium.svg" dark="/img/in-field/messages-medium-dark.svg" width="710" alt="Example of a small message" >}} | 56px   | Wizard         |
| Large  | {{< img src="/img/in-field/messages-large.svg" dark="/img/in-field/messages-large-dark.svg" width="719" alt="Example of a small message" >}}   | 64px   | Top of Page |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->

**Note:** Incab sizes only, see mobile for smaller options for in-field.

### Behaviors

- Fills the width of its container.
- Should have an accompanying icon to the left of the message text, unless gray.
- When the text spans multiple lines, the icon should remain aligned to the to the top.

{{< img src="/img/in-field/messages-example-1.svg" dark="/img/in-field/messages-example-1-dark.svg" class="w-100" width="1088" height="388" alt="Messages Behavior Example 1" >}}

{{< img src="/img/in-field/messages-example-2.svg" dark="/img/in-field/messages-example-2-dark.svg" class="w-100" width="100%" alt="Messages Behavior Example 2" >}}

#### Editorial

- Messages should be brief, full sentences, with proper punctuation.
- They should provide the user with helpful, contextual information about a possible action or a set of data.
