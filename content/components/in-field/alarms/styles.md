---
title: "Alarms"
layout: "single"
description: "Alarms tell the user of a critical system problem."
components: true
hidden: true
component: alarms
images:
  - "/img/in-field/headers/alarms.png"
tags: [in-field, styles]
---

## Specifications

<!-- prettier-ignore-start -->
| Type    | Example                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------ |
| Spacing | {{< img src="/img/in-field/alarm-spec-spacing.svg" width="471" height="290" alt="" lazyload="auto" >}} |
| Text    | {{< img src="/img/in-field/alarm-spec-text.svg" width="430" height="328" alt="" lazyload="auto" >}}    |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** In-cab sizes only. See mobile patterns (coming soon) for smaller options for in-field.

- **Persistent:** Yes.
- **Visibility:** Full Screen. Remains visible until acknowledged.
- **Actions:** May include one button (e.g. OK) or two (rare).
- **Shade rest of screen:** N/A - alarm is a full screen message.
- **Audio:** One long continuous beep on entry.
- **Message Center:** Recorded in the log. Active until resolved, badge number on bell.

### Behaviors

- Alarms indicate that a show-stopping condition exists. The operator may NOT continue to work.
- The system is unable to function until the underlying issue is addressed. Unresolved alarms will also appear in the Alarms & Alerts message tray under the Bell icon in the Action bar.
- Unresolved alarms that are related to onboard devices, or other configuration errors will result in red Dashboard tiles.
- Unresolved alarms may also result in error messages in other sections of the software.

### Editorial

- Messages should be brief, written in full sentences with proper punctuation.
- They should provide the user with helpful, contextual information about a possible action or a set of data.
