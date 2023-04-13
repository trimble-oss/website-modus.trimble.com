---
draft: true
title: "menus"
layout: "single"
description: "A close space-efficient way to present and nest diverse commands."
components: true
component: menus
images:
  - "/img/xr/headers/menus.png"
keywords: modals, modal, dialogs, dialog
tags: [xr, styles]
---

## Specifications

**Hand Menus**
- Attach primary actions, for initiation & discoverability maintaining the number of actions to a minimum necessary
- Since immediate usage will be bound to a near interaction, the minimum button recommended size is 32mm height
- Place the menu along the ulnar nerve
- Attaching larger menus exclusively to the hand, can trigger hand fatigue very rapidly. Consider defining if the menu is attached to the hand or “pinned” to space.
  - Rule of thumb: Smaller Menus (only buttons) can remain attached to the hand (see hide), while larger menus should be pinned to space once invoked (see locked).

***Touch UIs placed at hand-length from users***
<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Type</th>
      <th>Characteristics</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="/img/xr/HandMenu_Classic_1x3.png" alt="Hand Menu Hide 1 by 3" width="192"height="160">
      </td>
      <td>Hide</td>
      <td>The menu automatically hides after the invoking hand drops, assuming users do not need the commands anymore.
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/HandMenu_Transparent_Lock_2x3_1Slider.png" alt="Hand Menu Lock 2 by 3 single slider" width="192"height="160">
      </td>
      <td>Lock</td>
      <td>The menu is locked on the world after the invoking hand drops, assuming users need constant access to the commands. Hand up overrides any locked position.
      </td>
    </tr>
        <tr>
      <td><img src="/img/xr/HandMenu_Transparent_Lock_2x3_1Slider.png" alt="Hand Menu Lock 2 by 3 single slider" width="192"height="160">
      </td>
      <td>Lock & Grab</td>
      <td>The menu is locked on the world after the invoking hand drops, assuming users need constant access to the commands. Users can grab the menu and change the menu's place manually at their convenience.  Hand up overrides any locked position.
      </td>
    </tr>
  </tbody>
</table>

**Near Menus**
- Primary use with touch interaction.
- Minimum button recommended size: 32 with overall padding of min 8
- Exception are free floating buttons around the menu, ex. close or pin-to-world

***Touch = UIs placed at 50cm (~20 Inch) from users***
<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Type</th>
      <th>Characteristics</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="/img/xr/NearMenu_Classic_3x3.png" alt="Near Menus 3 by 3" width="192"height="160">
      </td>
      <td>Lock</td>
      <td>The menu is locked on the world after being invoked, assuming users need constant access to the commands.
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/NearMenu_Classic_3x3.png" alt="Near Menus 3 by 3" width="192"height="160">
      </td>
      <td>Grabable</td>
      <td>The menu is locked on the world after being invoked, assuming users need constant access to the commands. Users can grab the menu and change the menu's place manually at their convenience.
      </td>
    </tr>
  </tbody>
</table>

