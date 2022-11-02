---
title: "Prompts"
layout: "single"
description: "Prompts inform the user about a decision they need to make or a system event they need to know about."
components: true
component: Prompts
keywords: Prompt, Alert, Alerts
tags: [in-field, styles]
---

## Specifications

{{< img src="/img/in-field/prompts-spec.svg" dark="/img/in-field/prompts-spec-dark.svg" width="1087" height="586" class="w-100" alt="Prompts Specs" lazyload="auto" >}}

## Prompts

- Appear on top of the main content container.
- Stretch horizontally to fill 100% of the container they are placed in.
  - Always follow [typography line length guidelines](/foundations/typography/#line-length) when displaying prompts.
- Overlays over content on a page
- Can include tint to add extra emphasis or to increase contrast with page content. When changing background color, make sure the text and icons pass [contrast ratio requirements](/foundations/accessibility/).
- Remain on the page until dismissed.

#### Resolvable Prompts

- Persistent
- Remains visible until acknowledged or decision made (either of which resolves the message)
- Can be one button (e.g. OK) or two
- CTA Button(s) can be delayed if an action must be performed
- Shaded background (optional)
- Audio: Single beep on entry<br>Can be seen in the message Center in the message log

#### Active Prompts

- Persistent
- Remains visible until acknowledged or decision made (neither of which resolves the message)\
- Can be one button (e.g. OK) or two
- Shaded background
- Audio: Single beep on entry
- Can be seen in the message Center and an active Message

Basic toast message with heading text only.

{{< img src="/img/in-field/prompts-example-1.svg" dark="/img/in-field/prompts-example-1-dark.svg" width="100%" class="w-100" alt="Prompts Example 1" >}}

When more information is required add sub-text.

{{< img src="/img/in-field/prompts-example-2.svg" dark="/img/in-field/prompts-example-2-dark.svg" width="100%" class="w-100" alt="Prompts Example 2" >}}

**OEM Branding**

- Primary and secondary buttons can be branded only.
 ![Prompts OEM Branding](/img/in-field/prompts-oem.svg)

### Editorial

- Keep titles short if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening and whether they need to act to successfully keep moving through a task. Warning alerts might tell a user what could happen if they don’t address what they’re being warned about.
- For messages, use full sentences with punctuation. Use sentence case.
- Unordered lists offer a structured format to present:
  - Items needing resolution
  - Guidelines to successful completion
  - Ways to resolve problems

![Cards states](/img/in-field/card-states.svg)

**Note:** Focus state uses “global blue”.
