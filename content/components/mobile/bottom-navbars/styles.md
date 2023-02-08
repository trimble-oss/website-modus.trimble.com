---
title: "Bottom Navbars"
layout: "single"
description: "Bottom navigation bars allow movement between primary destinations in an app."
components: true
component: bottom navbars
images:
  - "/img/mobile/headers/bottom-navbars.png"
tags: [mobile, styles]
---

## Specifications

### Anatomy

{{< img src="/img/mobile/bottom-navbars-anatomy.svg" dark="/img/mobile/bottom-navbars-anatomy-dark.svg" width="960" height="176" alt="Bottom Navbar Anatomy" loading="auto" >}}

{{< img src="/img/mobile/bottom-navbars-atoms.svg" dark="/img/mobile/bottom-navbars-atoms-dark.svg" width="960" height="178" alt="Bottom Navbar Atoms" loading="auto" >}}

- **Icon:** Bottom navigation items should always have icons. Icons provide metaphors for quick visual reference and help to reinforce a product's navigation. Icons also help to supplement labels, for better comprehension.
- **Label:** It is recommended that Bottom Navbar items should always have labels along with icons. Font size should be fixed at 12px. Avoid long lables, if necessary change padding when label wraps to 2 lines. **CAUTION: Bottom navigation without labels will not be accessible.**

{{< img src="/img/mobile/bottom-navbars-label.svg" dark="/img/mobile/bottom-navbars-label-dark.svg" width="960" height="178" alt="Bottom Navbar Labels" loading="auto" >}}

- Without a label:

{{< img src="/img/mobile/bottom-navbars-no-label.svg" dark="/img/mobile/bottom-navbars-no-label-dark.svg" width="960" height="178" alt="Without Labels" loading="auto" >}}

- **Label position:** Labels should usually be placed under the icons. Bottom navigation items have an option for side labels when in landscape mode or on a tablet. This helps to utilize the available horizontal space more effectively. When using this option, items in the navigation are horizontally distributed.

{{< img src="/img/mobile/bottom-navbars-label-position.svg" dark="/img/mobile/bottom-navbars-label-position-dark.svg" width="960" height="178" alt="Label Position" loading="auto" >}}

- **Background colors:** Bottom navigation can we either white or Trimble Dark Blue.

{{< img src="/img/mobile/bottom-navbars-background.svg" dark="/img/mobile/bottom-navbars-background-dark.svg" width="960" height="178" alt="Bottom Navbar Background Colors" loading="auto" >}}

### Sizing

{{< img src="/img/mobile/bottom-navbars-sizing.svg" dark="/img/mobile/bottom-navbars-sizing-dark.svg" width="960" height="312" alt="Bottom Navbar Sizing" loading="auto" >}}

### States

#### Selected

A bottom navigation item in a selected state.

{{< img src="/img/mobile/bottom-navbars-selected-state.svg" dark="/img/mobile/bottom-navbars-selected-state-dark.svg" width="960" height="766" alt="Bottom Navbar Selected State" loading="auto" >}}

#### Disabled

A bottom navigation item in a disabled state shows that an item exists, but is not available. This state can be used to maintain layout continuity and to communicate that the item may become available later. **Don't disable a bottom navigation item unless absolutely necessary.**

{{< img src="/img/mobile/bottom-navbars-disabled-state.svg" dark="/img/mobile/bottom-navbars-distabled-state-dark.svg" width="960" height="766" alt="Bottom Navbar Disabled State" loading="auto" >}}

#### Notification badges

Bottom navigation items can be given notification badges for indicating status or important information. Be mindful of how frequently you notify users and what type of content should trigger a notification badge, to avoid causing users to ignore badges altogether.

{{< img src="/img/mobile/bottom-navbars-badges.svg" dark="/img/mobile/bottom-navbars-badges-dark.svg" width="960" height="766" alt="Bottom Navbar with Notification Badges" loading="auto" >}}


