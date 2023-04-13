---
draft: true
title: "Tooltips"
layout: "single"
description: "Tooltips provide a short description of a page element or control."
components: true
component: tooltips
images:
  - "/img/xr/headers/tooltips.png"
tags: [xr, accessibility]
---

XR Interfaces are bound to interaction types and ergonomic requirements.  Modus XR Tooltips are segmented in 2 different types and therefore might follow different specifications.

## Accessibility

- Do not provide interactive elements on top of tooltips.
- Do not provide links as part of tooltips' texts.

**UI tooltips** are bound to touch UIs cater touch specifications with UIs placed by default at 50cm (~20 Inch) from users.
- Visible on hover state
- Non-interactive
- Themes
  - To improve visibility on main UI, XR tooltips have been inverted in their values.

**Object tooltips** are usually locked to virtual objects or spatial interfaces, therefore their readability might depend on users approaching the object or spatial interface.
- Attached with an anchor to a specific spatial UI part
- Visible based on the context of the experience
- Theme
  - Consistent with UI experience


