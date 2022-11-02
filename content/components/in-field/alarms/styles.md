---
title: "Alarms"
layout: "single"
description: "Alarms tell the user of a critical system problem."
components: true
hidden: true
component: alarms
images:
  - "/img/components/headers/alarms.png"
tags: [in-field, styles]
---

## Specifications

{{< img src="/img/in-field/alarm-spec.svg" dark="/img/in-field/alarm-spec-dark.svg" alt="Alarm spec" width="1077" height="848" class="w-100" lazyload="auto" >}}

<!-- prettier-ignore-start -->
| State    | Example                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------------------- |
| Spacing  | {{< img src="/img/in-field/alarm-spec.svg" dark="/img/in-field/alarm-spec-dark.svg" width="498" height="153" alt="" >}} |
| Text     | {{< img src="/img/in-field/alarm-spec.svg" dark="/img/in-field/alarm-spec-dark.svg" width="498" height="153" alt="" >}} |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->

**Note:** In-cab sizes only, see mobile for smaller options for in-field.

### Behaviors

All buttons (including icon buttons) should have the following states:

- Alarms indicate that a show-stopping condition exists—the operator may NOT continue to work.
- The system is unable to function until the underlying issue is addressed. Unresolved alarms will also appear in the Alarms & Alerts message tray under the Bell icon in the Action bar.
- Unresolved alarms that are related to onboard devices, or other configuration errors will result in red Dashboard tiles.
- Unresolved alarms may also result in error messages in others of the software.

- **Persistent:** Yes.
- **Visibility:** Full Screen. Remains visible until acknowledged.
- **Actions:** Can have one button (e.g. OK) or two (rare).
- **Shade rest of screen:** N/A - alarm is a full screen message.
- **Audio:** One long continuous beep on entry.
- **Message Centre:** Recorded in the log. Active until resolved, badge number on bell.

#### Editorial

- Messages should be brief written in full sentences with proper punctuation.
- They should provide the user with helpful, contextual information about a possible action or a set of data.
